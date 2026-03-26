import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GP - Journée Culturelle",
  description:
    "Découvrez la richesse du patrimoine immatériel mauritanien.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/gp-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/gp-logo.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "GP - Journée Culturelle",
    description:
      "Découvrez la richesse du patrimoine immatériel mauritanien.",
    images: ["/gp-logo.png"],
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
