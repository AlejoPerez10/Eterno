import './globals.css' //If doesn't work like this so is .global.css
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Eterno',
  description: 'Minimal brand',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="fixed w-full z-30 backdrop-blur-md bg-white/10">
          <Navbar />
        </header>

        <main className="">
          {children}
        </main>
      </body>
    </html>
  )
}
