"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/global/loader";
import { LoginFormSchema, type LoginFormSchemaType } from "@/libs/zod/forms";
import { actionLoginUser } from "@/providers/supabase/actions";

export default function LoginForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<LoginFormSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<LoginFormSchemaType> = async (formData) => {
    const { error } = await actionLoginUser(formData);

    if (error) {
      form.reset();
      setSubmitError(error.message);
      return;
    }

    router.replace("/dashboard");
  };

  return (
    <Form {...form}>
      <form
        onChange={() => submitError && setSubmitError("")}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
      >
        <Link href="/" className="w-full flex justitfy-left items-center">
          <Image
            src="/cypresslogo.svg"
            alt="Cypress Logo"
            width={50}
            height={50}
          />
          <span className="font-semibold dark:text-white text-4xl first-letter:ml-2">
            Cypress
          </span>
        </Link>
        <FormDescription>
          An All-In-One Collaboration and Productivity Platform
        </FormDescription>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {!isLoading ? "Login" : <Loader />}
        </Button>
        <span className="self-center">
          Don&apos;t have an account?
          <Link href="/signup" className="text-primary">
            {" "}
            Sign up
          </Link>
        </span>
      </form>
    </Form>
  );
}
