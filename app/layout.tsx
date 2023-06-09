import {Nunito} from "next/font/google"
import './globals.css'
import Navbar from "./components/Navbar/Navbar"
import ClientOnly from "./components/ClientOnly/clientOnly"
import RegisterModal from "./components/Modals/RegisterModal/registerModal"
import ToasterProviders from "./providers/ToasterProvider"

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Projeto',
}

const font  = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProviders/>
          <RegisterModal/>
          <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
