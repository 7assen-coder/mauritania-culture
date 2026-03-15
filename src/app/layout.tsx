import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESP - Journée Culturelle",
  description:
    "Découvrez la richesse du patrimoine immatériel mauritanien.",
  icons: {
    icon: "/favicon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ESP - Journée Culturelle",
    description:
      "Découvrez la richesse du patrimoine immatériel mauritanien.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
