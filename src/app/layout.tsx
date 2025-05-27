import type { Metadata } from "next";
import { Lexend, Fira_Code } from "next/font/google";
import "../styles/globals.css";

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
    <html lang="en">
      <body
        className={`${lexend.variable} ${firaCode.variable} antialiased font-[family-name:var(--font-fira-code)]`}
      >
        {children}
      </body>
    </html>
  );
}
