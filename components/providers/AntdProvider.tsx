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
          colorBgLayout: "#f4f5f7",
          colorBgContainer: "#ffffff",
          colorBorder: "#E8EAED"
        },
        components: {
          Layout: {
            siderBg: "#ffffff",
            headerBg: "#ffffff",
            bodyBg: "#f4f5f7"
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
