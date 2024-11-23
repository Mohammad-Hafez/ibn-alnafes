"use client";

import * as React from "react";
import { ConfigProvider } from "antd";

export function ThemeProvider({ children }) {
  return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#39545D",
          },
          cssVar: true,
          hashed: false,
        }}
      >
        {children}
      </ConfigProvider>
  );
}