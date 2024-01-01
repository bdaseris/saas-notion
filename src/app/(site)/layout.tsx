import Header from "./_components/header";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
