import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Noto_Sans_Thai } from "next/font/google";
import { AntdProvider } from "@/components/providers/AntdProvider";
import { InitialLoadSplash } from "@/components/ui/InitialLoadSplash";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
  display: "swap"
});

export const metadata: Metadata = {
  title: "SPU SE — แพลตฟอร์มเครื่องมืออาจารย์",
  description: "School of Entrepreneurship · Sripatum University — Teacher tools platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={notoSansThai.variable}>
      <body className="min-h-dvh antialiased">
        <AntdRegistry>
          <AntdProvider>
            <InitialLoadSplash />
            {children}
          </AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
