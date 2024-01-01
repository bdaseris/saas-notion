interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <main className="flex over-hidden h-screen">{children}</main>;
}
