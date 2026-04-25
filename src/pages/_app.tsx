// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import Navbar from '@/components/layouts/navbar'
// import AppShell from '@/components/layouts/Appshell'
// import { SessionProvider } from "next-auth/react";
// import Script from 'next/script';

// export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <AppShell>
//         <Component {...pageProps} />
//       </AppShell>
//     </SessionProvider>
//   );
// }

// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import Navbar from '@/components/layouts/navbar'
// import AppShell from '@/components/layouts/Appshell'
// import { SessionProvider } from "next-auth/react";
// import Script from 'next/script';

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <SessionProvider session={(pageProps as any).session}>
//       <>
//         <AppShell>
//           <Navbar />
//           <Component {...pageProps} />
//         </AppShell>

//         {/* Google Analytics */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-XXXXXXX');
//           `}
//         </Script>
//       </>
//     </SessionProvider>
//   );
// }

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/Appshell'
import { SessionProvider } from "next-auth/react";
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={(pageProps as any).session}>
      <>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </>
    </SessionProvider>
  );
}

