import React from 'react'
import './styles.css'

export const metadata = {
  description: 'The digital catalog and archive for Houvouras Art.',
  title: 'Houvouras Art',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/webflow.css" />
        <link rel="stylesheet" href="/css/gallery-houv.webflow.css" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}