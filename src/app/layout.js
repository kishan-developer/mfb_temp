import localFont from "next/font/local";
import Footer from "@/Components/Footers/Footer";
import Nav from "@/Components/Navbar/Nav";
import "./globals.css";


import Header from "./(Home)/Components/Header";
// import { Lato } from '@next/font/google';

// const Lato = Lato({
//   weight: ['400', '700'], // Choose available font weights
//   subsets: ['latin'],     // Include the subsets you need
//   variable: '--font-Lato',
// });


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "ORLA",
  description: "ORLA Website Using Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={Lato.variable}
      >
        {/* <Nav /> */}

    
        
        {children}

        

        <Footer />
        <Header />

      </body>
    </html>
  );
}
