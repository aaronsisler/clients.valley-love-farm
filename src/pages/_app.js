import React from "react";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/app.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Waterbrooke Assisted Living</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

export default MyApp;
