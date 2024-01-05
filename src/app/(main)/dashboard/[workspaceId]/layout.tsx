import WorkspaceSidebar from "./_components/sidebar";

interface WorkspaceLayoutProps {
  children: React.ReactNode;
  params: { workspaceId: string };
}

export default function WorkspaceLayout({ children, params }: WorkspaceLayoutProps) {
  return (
    <main className="flex overflow-hidden h-screen w-screen">
      <WorkspaceSidebar params={params} />
      <div className="dark:border-Neutrals/neutrals-12/70 border-l-[1px] w-full relative overflow-scroll">
        {children}
      </div>
    </main>
  );
}
