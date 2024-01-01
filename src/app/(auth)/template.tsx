interface TmeplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TmeplateProps) {
  return <main className="h-screen p-6 flex justify-center">{children}</main>;
}
