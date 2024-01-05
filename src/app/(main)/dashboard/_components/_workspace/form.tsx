import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { WorkspaceFormSchemaType } from "@/libs/zod/forms/workspace";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

import { SubmitHandler, useForm } from "react-hook-form";
import EmojiPicker from "@/components/picker/emoji";
import { Button } from "@/components/ui/button";
import Loader from "@/components/global/loader";
import { uploadLogo } from "@/providers/supabase/actions/workspace/storage/upload-logo";
import { createWorkspace } from "@/providers/supabase/actions/workspace/create";
import { toast } from "sonner";
import { AuthUser } from "@supabase/supabase-js";
import { Subscription } from "@/providers/supabase/types";
// import { useAppState } from "@/hooks/app-state";

interface WorkspaceSetupProps {
  user: AuthUser;
  subscription: Subscription | null;
}

export default function WorkspaceSetupForm({
  user,
  subscription,
}: WorkspaceSetupProps) {
  const router = useRouter();
  // const { dispatch } = useAppState();
  const supabase = createClientComponentClient();
  const [selectedEmoji, setSelectedEmoji] = useState("💼");

  const form = useForm<WorkspaceFormSchemaType>({
    mode: "onChange",
    defaultValues: {
      logo: "",
      workspaceName: "",
    },
  });

  const onSubmit: SubmitHandler<WorkspaceFormSchemaType> = async (formData) => {
    const file = formData.logo?.[0];

    if (file) {
      const workspaceId = v4();
      let filePath = null;

      try {
        const data = await uploadLogo({
          workspaceId: workspaceId,
          file,
        });

        if (data) {
          filePath = data.path;
        }
      } catch (error) {
        toast.error("Error! Could not upload your workspace logo");
      }

      try {
        const { data, error } = await createWorkspace({
          id: workspaceId,
          title: formData.workspaceName,
          logo: filePath,
          content: null,
          bannerUrl: "",
          iconId: selectedEmoji,
          inTrash: "",
          createdAt: new Date().toISOString(),
          ownerId: user.id,
        });

        if (error) throw new Error();

        toast.success("Workspace created");

        router.push(`/dashboard/${workspaceId}`);
      } catch (error) {
        toast.error("Error! Could not create your workspace", {
          description:
            "Oops! Something went wrong, and we couldn't create your workspace. Try again or come back later.",
        });
      } finally {
        form.reset();
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[450px] space-y-6 flex flex-col"
      >
        <div className="text-5xl">
          <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>
            {selectedEmoji}
          </EmojiPicker>
        </div>

        <FormDescription>Add a name for your workspace</FormDescription>
        <FormField
          control={form.control}
          name="workspaceName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="Workspace name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormDescription>Add a logo for your workspace</FormDescription>
        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  placeholder="Logo"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {subscription?.status !== "active" && (
          <small className="text-muted-foreground block">
            To customize your workspace, you need to be on a Pro Plan
          </small>
        )}
        <Button disabled={form.formState.isSubmitting} type="submit">
          {!form.formState.isSubmitting ? "Create Workspace" : <Loader />}
        </Button>
      </form>
    </Form>
  );
}
