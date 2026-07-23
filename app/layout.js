export const metadata = {
  title: 'Nedzen App',
  description: 'Simple Next.js app on Coolify',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
