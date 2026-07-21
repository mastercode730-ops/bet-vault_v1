import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bet Vault – Your Trusted Online Cricket Betting ID Provider",
  description: "Bet Vault is India's most trusted online cricket betting ID provider. Get your instant betting ID today with 24/7 support, 100% secure payments, and exclusive welcome bonuses.",
  keywords: "online cricket betting ID, cricket ID, betting ID India, sports betting, IPL betting ID",
  openGraph: {
    title: "Bet Vault – Your Trusted Online Cricket Betting ID Provider",
    description: "Get your instant cricket betting ID from Bet Vault. India's most trusted platform with 3M+ users, 24/7 support, and exclusive bonuses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
