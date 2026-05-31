"use client";

import { ConfigProvider } from "antd";
import thTH from "antd/locale/th_TH";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      locale={thTH}
      theme={{
        token: {
          colorPrimary: "#E60012",
          borderRadius: 6,
          fontFamily: "var(--font-noto-sans-thai), 'Segoe UI', 'Sarabun', system-ui, sans-serif",
          colorBgLayout: "#FAFAF9",
          colorBgContainer: "#ffffff",
          colorBorder: "#E7E5E4",
          colorText: "#1C1917",
          colorTextSecondary: "#78716C"
        },
        components: {
          Layout: {
            siderBg: "#ffffff",
            headerBg: "#ffffff",
            bodyBg: "#FAFAF9"
          },
          Card: {
            boxShadowTertiary: "0 1px 2px rgba(0,0,0,0.04)"
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
}
