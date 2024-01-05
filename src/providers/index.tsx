import { Toaster } from "@/components/ui/sonner";
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
      <Toaster />
    </ThemeProvider>
  );
}
