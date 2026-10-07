import React from 'react'
import './normalize.css'
import './webflow.css'
import './gallery-houv.webflow.css'
import './styles.css'

export const metadata = {
  title: 'Houvouras Art',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-wf-page="6ab2f0a8b8df7fc5d4011924" data-wf-site="6ab2f0a0b8df7fc5d40118c7">
      <body className="body" data-barba="wrapper">
        <main>{children}</main>
      </body>
    </html>
  )
}