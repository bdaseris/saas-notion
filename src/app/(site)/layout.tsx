import SiteHeader from "./_components/header";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: HomeLayoutProps) {
  return (
    <main>
      <SiteHeader />
      {children}
    </main>
  );
}
