import Navbar from '../ui/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <div className="border-4 border-yellow-500">{children}</div>
    </html>
  )
}
