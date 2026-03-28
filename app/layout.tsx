import './globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <Navbar />
        <div className="p-6">{children}</div>
      </body>
    </html>
  )
}
