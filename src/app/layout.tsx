import type { Metadata, Viewport } from "next";
import { Lexend, Fira_Code } from "next/font/google";
import { Toaster } from "sonner";
import { generateSiteMetadata } from "@lib/helpers";
import { Analytics } from "@vercel/analytics/next";

import "@radix-ui/themes/styles.css";
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


export async function generateMetadata(): Promise<Metadata> {
  return await generateSiteMetadata();
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        className={`${lexend.variable} ${firaCode.variable} antialiased font-[family-name:var(--font-fira-code)] bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
