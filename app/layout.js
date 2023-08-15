import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })
const client = new ApolloClient({
  uri: 'https://api-eu-west-2.hygraph.com/v2/clkwe2leq041o01uk4rcv91js/master',
  cache: new InMemoryCache(),
});

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
