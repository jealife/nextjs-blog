import Nav from "./components/navigation/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: 'Next blog',
  description: 'A blog create whith next js and FireBase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  )
}
