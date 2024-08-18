import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ShopMate",
  description: "Profile.fyi assignment",
  icons: {
    icon: "https://p1.edge.duggup.com/logo/Profile_Icon_Full_Color_28px.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-Isabelline`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
