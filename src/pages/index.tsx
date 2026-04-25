// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <head>
//         <title>
//           Praktikum Next.js Pages Router</title>
//       </head>
//       <h1>Praktikum Next.js Pages Router</h1>
//       <p>Mahasiswa D4 Pengembangan Web</p>

//       <br />

//       <Link href="/about">
//         <button className={styles.button}>
//           Ke Halaman About
//         </button>
//       </Link>
//     </div>
//   )
// }

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

// Dynamic Import
const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export default function Home() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <Head>
        <title>Praktikum Next.js Pages Router</title>
      </Head>

      <h1>Praktikum Next.js Pages Router</h1>
      <p>Mahasiswa D4 Pengembangan Web</p>

      <br />

      <Link href="/about">
        <button className={styles.button}>
          Ke Halaman About
        </button>
      </Link>

      {/* Dynamic Component */}
      <HeavyComponent />
    </div>
  )
}
