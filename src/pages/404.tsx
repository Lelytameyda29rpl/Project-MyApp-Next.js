// import Head from "next/head";
// import Link from "next/link";
// import styles from "@/styles/404.module.scss";

// const Custom404 = () => {
//   return (
//     <>
//       <Head>
//         <title>404 - Halaman Tidak Ditemukan</title>
//         <meta
//           name="description"
//           content="Halaman yang Anda cari tidak tersedia atau telah dipindahkan."
//         />
//       </Head>

//       <div className={styles.error}>
//         <img
//           src="/page-not-found.png"
//           alt="404 Page Not Found"
//           className={styles.error__image}
//         />

//         <h1 className={styles.error__title}>
//           404 - Halaman Tidak Ditemukan
//         </h1>

//         <p className={styles.error__desc}>
//           Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
//         </p>

//         <Link href="/">
//           <button className={styles.error__button}>
//             Kembali ke Home
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Custom404;

import Image from "next/image";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      {/* <img src="/page-not-found.png" alt="404" className={styles.error__image} /> */}
      <Image
        src="/page-not-found.png"
        alt="404"
        width={400}
        height={200}
        className={styles.error__image}
      />
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ada.</p>
    </div>
  );
};

export default Custom404;

