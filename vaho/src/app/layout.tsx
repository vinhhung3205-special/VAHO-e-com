import type { Metadata } from "next";
import { Inter, Prata } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: '--font-inter' });
// Prata does not strictly have a Vietnamese subset in all definitions, 
// using it generally for headings with standard latin.
// Actually Playfair Display is better for Vietnamese support in serif if Prata lacks it, 
// but we'll stick to Prata config if supported via Google Fonts:
const prata = Prata({ weight: "400", subsets: ["latin"], variable: '--font-prata' });

export const metadata: Metadata = {
  title: "VaHo - Curated Cultural Commerce",
  description: "Trải nghiệm mua sắm quà tặng, nghệ thuật, thủ công và workshop mang chiều sâu văn hóa Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${prata.variable} font-sans antialiased text-charcoal bg-do_paper min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
