import Head from 'next/head'
import './global.css'
import "bootstrap/dist/css/bootstrap.css";
// export const metadata = {
//   title: 'Taknik Bharti | Home ',
//   description: 'A Bikaner-based Taknik Bharti has built a variety of business solution'
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />

      </Head>
      <body>{children}</body>

    </html >
  )
}
