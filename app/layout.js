import './global.css'
import "bootstrap/dist/css/bootstrap.css";
export const metadata = {
  title: 'Taknik Bharti ',
  description: 'A Bikaner-based Taknik Bharti has built a variety of business solution',
  favicon: './favicon.ico'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>

    </html >
  )
}
