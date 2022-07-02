import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { BlogContextProvider } from "../context/BlogContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BlogContextProvider>
  );
}

export default MyApp;
