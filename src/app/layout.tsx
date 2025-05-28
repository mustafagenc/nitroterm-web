import type { Metadata } from "next";
import { Lexend, Fira_Code } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "sonner";

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
  display: 'swap',
});
const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: "Nitrokit Terminal",
  description: "Powerful terminal application written in Rust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${lexend.variable} ${firaCode.variable} antialiased font-[family-name:var(--font-fira-code)]  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
