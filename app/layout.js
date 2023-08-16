import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Next blog',
description: 'A blog create whith next js and FireBase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}
