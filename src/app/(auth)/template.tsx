interface TmeplateProps {
  children: React.ReactNode
}

export default function Template({
  children
}: TmeplateProps) {
  return (
    <div className="h-screen p-6 flex justify-center">
      {children}
    </div>
  )
}