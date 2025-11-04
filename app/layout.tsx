import Navbar from "@/components/Navbar";
import "./globals.css";

import { Alexandria ,Amiri ,Readex_Pro } from 'next/font/google';
import Footer from "@/components/Footer";
import Bgsvg from "@/components/Bgsvg";

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700' ],
  variable: '--font-amiri',
});

const alexandria = Alexandria({
  subsets: ['latin', 'arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-alexandria',
});

const readexPro = Readex_Pro({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-readex-pro',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`flex flex-col overflow-x-hidden bg-[#1e1e1e] 
        ${amiri.variable} ${alexandria.variable} ${readexPro.variable} font-sans `}>
        <Navbar />
          {/* <div className="absolute inset-0 py-[15%]">
                  <Bgsvg />
                </div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
