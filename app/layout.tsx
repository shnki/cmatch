import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });
export const metadata: Metadata = {
  title: "ماتشتات النهارده",
  description: "شوف واعرف مواعيد الماتشات النهارده والايام الجايه ",
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
