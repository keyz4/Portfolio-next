import type { Metadata } from "next";
import { Inter, Bungee_Shade, Wallpoet, Poppins, Merienda } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
const bungee_shade = Bungee_Shade({ 
  subsets: ["latin"],
  weight: ["400"],
  variable : '--font-bungee_shade',
});
const merienda = Merienda({ 
  subsets: ["latin"],
  weight: ["400","300","500","700","800","900"],
  variable : '--font-merienda',
});
const wallpoet = Wallpoet({ 
  subsets: ["latin"],
  weight: ["400"],
  variable : '--font-wallpoet',
});
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400' ,'200'],
  variable : '--font-poppins',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio created using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bungee_shade.variable} ${wallpoet.variable} ${merienda.variable}`} >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
