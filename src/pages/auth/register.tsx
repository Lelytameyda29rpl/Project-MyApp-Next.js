// import Link from "next/link";
// import styles from "@/styles/Home.module.css";

// const HalamanRegister = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.title}>Register</h1>

//         <Link href="/auth/login" className={styles.link}>
//           Ke Halaman Login
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HalamanRegister;

// import TampilanRegister from "../../views/auth/register";

// const halamanRegister = () => {
//   return (
//     <>
//       <TampilanRegister />
//     </>
//   );
// };

// export default halamanRegister;

import Link from "next/link";
import TampilanRegister from "@/views/auth/register";

const halamanRegister = () => {
  return (

    <TampilanRegister />
  );
};

export default halamanRegister;
