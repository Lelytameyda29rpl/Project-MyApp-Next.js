// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <h1>Halaman Profile</h1>
//       <p>Ini adalah halaman profile</p>

//       <br />

//       <Link href="/profile/edit">
//         <button className={styles.button}>
//            Edit Profile
//         </button>
//       </Link>
//     </div>
//   )
// }

import { useSession } from "next-auth/react";

const HalamanProfile = () => {
    const {data}:any = useSession();
    return (
        <div>
            <h1>Halaman Profile</h1><br />
            <h1>Selamat Datang {data?.user?.fullname}</h1>
        </div>
    )
}

export default HalamanProfile
