import './global.css'

export const metadata = {
    title: 'AdminUmi',
    description: 'Pagina de administracion Eduardo Espinoza',
    icons: {
        icon: [
          '/favicon.ico?v=4'
        ],
        apple: [
          '/apple-touch-icon.png?v=4'
        ],
        shortcut: [
          '/apple-touch-icon.png?v=4'
        ]
      }
  }
  
  export default function RootLayout({ children }) {
    return (
      <html className='h-full w-full' lang="en">
       
        <body className='h-full w-full'>
          <div>
            {children}
          </div>
        </body>
      </html>
    )
  }