//import Navbar from "../navbar";

//type AppShellProps = {
  //children: React.ReactNode;
//}

//const AppShell = (props: AppShellProps) => {
  //const { children } = props;
  //return (
  //<main>
    //<Navbar />
    //{children}
    //<div>
        //footer
    //</div>
  //</main>

  //);
//};

//export default AppShell;

// import Navbar from "../navbar";

// type AppShellProps = {
//   children: React.ReactNode;
// };

// const AppShell = ({ children }: AppShellProps) => {
//   return (
//     <main>
//       <Navbar />
      
//       <div style={{ padding: "20px" }}>
//         {children}
//       </div>

//       <footer style={{
//         padding: "15px",
//         background: "#f1f1f1",
//         textAlign: "center",
//         marginTop: "20px"
//       }}>
//         © 2026 Praktikum Next.js
//       </footer>
//     </main>
//   );
// };

// export default AppShell;

import { useRouter } from "next/router";
import Navbar from "../navbar";
import { Roboto } from "next/font/google";

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

type AppShellProps = {
    children: React.ReactNode;
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props:AppShellProps) => {


    const { children } = props;
    const {pathname} = useRouter();
    return (
    <main className={roboto.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}

    </main>

    );
};

export default AppShell;
