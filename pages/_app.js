import "../styles/globals.css";
import React from "react";
import Header from "../components/Header";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "../store/store";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <NextNProgress
          color="#00b97e"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={false}
          options={{ showSpinner: false }}
        />
        <Header />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
