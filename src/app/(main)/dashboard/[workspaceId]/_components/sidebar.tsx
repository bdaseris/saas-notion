import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface WorkspaceSidebarProps {
  params: { workspaceId: string };
}

export default async function WorkspaceSidebar({
  params,
}: WorkspaceSidebarProps) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // users
  // files
  // folders
  return (
    <main className="text-white">
      Workspace sidebar / {params?.workspaceId}
    </main>
  );
}
