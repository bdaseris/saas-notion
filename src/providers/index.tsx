import ThemeProvider from "./theme";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storageKey="saas-theme"
    >
      {children}
    </ThemeProvider>
  );
}
