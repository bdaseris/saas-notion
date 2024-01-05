import { redirect } from "next/navigation";
import db from "@/providers/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getUserSubscriptionStatus } from "@/providers/supabase/actions/user/subscription-status";
import WorkspaceSetup from "./_components/_workspace/setup";

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const workspace = await db.query.workspaces.findFirst({
    where: (workspace, { eq }) => eq(workspace.ownerId, user.id),
  });

  const { data: subscription, error: subscriptionError } =
    await getUserSubscriptionStatus(user.id);

  if (subscriptionError) return;

  if (!workspace) {
    return (
      <div className="bg-background h-screen w-screen flex justify-center items-center">
        <WorkspaceSetup user={user} subscription={subscription} />
      </div>
    );
  }

  redirect(`/dashboard/${workspace.id}`);
}
