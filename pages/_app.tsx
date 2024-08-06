import "@/styles/globals.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
