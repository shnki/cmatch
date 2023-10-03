import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });
export const metadata: Metadata = {
  title: "ماتشتات النهارده",
  description: "شوف واعرف مواعيد الماتشات النهارده والايام الجايه ",
  openGraph: {
    type: "website",
    siteName: "KoraElnharda",
    title: "ماتشتات النهارده",
    description: "شوف واعرف مواعيد الماتشات النهارده والايام الجايه ",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
