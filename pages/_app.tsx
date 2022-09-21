import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Container from "../components/Container";
import { AuthProvider, useAuth } from "../context/authContext";
import React from "react";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
