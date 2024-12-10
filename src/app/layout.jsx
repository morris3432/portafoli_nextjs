import localFont from "next/font/local";
import "@/styles/globals.css";
import NavBar from "@/components/navbar";
import styles from "@/styles/navbar.module.css"

const Starjhol =localFont({
  src: "/fonts/Starjhol.ttf",
  variable: "--font-starjhol",
  weight: "100 900",
})

export const metadata = {
  title: "Cristian </>",
  description: "Portafolio web de Cristian Yancis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${Starjhol.variable} antialiased`}
      >
      <div className={styles.navbar}>
        <NavBar/>
      </div>
        {children}
      </body>
    </html>
  );
}
