"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthUser } from "@supabase/supabase-js";
import WorkspaceSetupForm from "./form";
interface WorkspaceSetupProps {
  user: AuthUser;
  subscription: {} | null;
}

export default function WorkspaceSetup({
  user,
  subscription,
}: WorkspaceSetupProps) {
  return (
    <Card className="w-[600px] h-screen sm:h-auto flex flex-col items-center justify-center">
      <CardHeader className="flex flex-col items-center justify-center w-[80%]">
        <CardTitle>Create a workspace</CardTitle>
        <CardDescription>
          Lets create a private workspace to get you started. You can add
          collaborators later from the workspace settings tab.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <WorkspaceSetupForm user={user} subscription={subscription} />
      </CardContent>
    </Card>
  );
}
