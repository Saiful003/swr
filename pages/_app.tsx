import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Container from "../components/Container";
import { AuthProvider, useAuth } from "../context/authContext";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const auth = useAuth();

  return (
    <AuthProvider>
      <div className="border-b">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between gap-y-4 items-center min-h-[80px] py-3 md:py-0">
            <Link href="/">
              <h2 className="mr-4 cursor-pointer text-2xl font-medium text-emerald-500">
                Friends Management System
              </h2>
            </Link>
            <div className="flex items-center gap-4">
              <Link href={`${auth?.user ? "/create" : "/signup"}`}>
                <a className="px-4 py-2 rounded-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white">
                  Create a new friend
                </a>
              </Link>
              <p>H</p>
            </div>
          </div>
        </Container>
      </div>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
