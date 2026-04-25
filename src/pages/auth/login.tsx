// import Link from "next/link";
// import { useRouter } from "next/router";
// import styles from "@/styles/Home.module.css";

// const HalamanLogin = () => {
//   const { push } = useRouter();

//   const handlerLogin = () => {
//     // simulasi login
//     localStorage.setItem("isLogin", "true");
//     push("/produk");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.title}>Login</h1>

//         <button
//           className={styles.button}
//           onClick={() => handlerLogin()}
//         >
//           Login
//         </button>

//         <br /><br />

//         <Link href="/auth/register" className={styles.link}>
//           Ke Halaman Register
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HalamanLogin;

// import Link from "next/link";
// import { useRouter } from "next/router";
// import styles from './login.module.css';

// const halamanLogin = () => {
//   const {push} = useRouter();
//   const handlerLogin = () => {
//     // logic login disini
//     push('/produk');
//   }
//   return (
//     <div className={styles.login}>
//       <h1>Halaman Login</h1>
//       {/* <button onClick={handlerLogin}>Login</button> <br />
//       <button onClick={() => push('/produk')}>Login</button> <br /> */}
//       <button onClick={() => handlerLogin()}>Login</button> <br />
//       <Link href="/auth/register">Ke Halaman Register</Link>
//     </div>
//   );
// };

// export default halamanLogin;

import TampilanLogin from "../../views/auth/login";

const halamanLogin = () => {

    return (
     <>
     <TampilanLogin />
     </>
    );
};

export default halamanLogin;
