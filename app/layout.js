import localFont from "next/font/local";
import "./globals.css";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Alzef E-Commerce Next App",
  description: "An E-commerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderTop/>
        <HeaderBottom/>
        {children}
      </body>
    </html>
  );
}
