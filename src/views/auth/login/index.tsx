// import Link from "next/link";
// import { useRouter } from "next/router";
// // import styles from './login.module.css';
// import styles from './login.module.scss';

// const TampilanLogin = () => {
//     const {push} = useRouter();

//     const handleLogin = () => {
//         // logic login disini
//         push('/produk');
//     }
//     return (
//      <div className={styles.login}>
//         <h1 className="text-3xl font-bold text-blue-600 ">Halaman Login</h1>
//         <button onClick={() => handleLogin()}>Login</button> <br />
//         <h1 style={{color:"red", border:"1px solid red", borderRadius:"5px", padding:"5px"}}> Belum Punya Akun</h1>
//         <Link href={"/auth/register"}>Ke Halaman Register</Link>
//      </div>
//     );
// }

// export default TampilanLogin

// import Link from "next/link";
// import { useRouter } from "next/router";
// import styles from "./login.module.scss";

// const TampilanLogin = () => {
//   const { push } = useRouter();

//   const handleLogin = () => {
//     // simulasi login
//     push("/produk");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.title}>Halaman Login</h1>

//         <button className={styles.button} onClick={handleLogin}>
//           Login
//         </button>

//         <div className={styles.footer}>
//           <p>Belum punya akun?</p>
//           <Link href="/auth/register" className={styles.link}>
//             Daftar di sini
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TampilanLogin;

// import Link from "next/link";
// import style from "../../auth/login/login.module.scss"; // Path disesuaikan
// import { useState } from "react";
// import { useRouter } from "next/router";

// const TampilanLogin = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const { push } = useRouter();
//   const [error, setError] = useState("");

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setIsLoading(true);

//     const formData = new FormData(event.currentTarget);
//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;

//     if (!email || !password) {
//       setError("Email dan Password wajib diisi");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("/api/login", { // Endpoint diubah ke login
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.status === 200) {
//         setIsLoading(false);
//         push("/dashboard"); // Redirect ke dashboard setelah login berhasil
//       } else {
//         setIsLoading(false);
//         setError(
//           response.status === 401 ? "Email atau Password salah" : "Terjadi kesalahan"
//         );
//       }
//     } catch (err) {
//       setIsLoading(false);
//       setError("Gagal terhubung ke server");
//     }
//   };

import Link from "next/link";
import style from "../../auth/login/login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    //const form = event.currentTarget;...
    // }
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      // console.log("signIn response:", res);
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res?.error || "Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };

  return (
    <div className={style.login}>
      {error && <p className={style.login__error}>{error}</p>}
      <h1 className={style.login__title}>Halaman Login</h1>

      <div className={style.login__form}>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className={style.login__form__item}>
            <label
              htmlFor="email"
              className={style.login__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={style.login__form__item__input}
              required
            />
          </div>

          {/* Password */}
          <div className={style.login__form__item}>
            <label
              htmlFor="password"
              className={style.login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={style.login__form__item__input}
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className={style.login__form__submit}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          <br /> <br />
          <button
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            className={style.login__form__submit}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign in with google"}
          </button>
        </form>

        <p className={style.login__form__text}>
          Belum punya akun?{" "}
          <Link href="/auth/register">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Tampilanlogin;
