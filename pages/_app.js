import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../components/ui/Theme";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Fonts from "../components/ui/Fonts";
import { LazyLoadComponent } from "react-lazy-load-image-component";

ReactGA.initialize("UA-154916062-1");

const App = ({ Component, pageProps }) => {
  // console.log("page props :", pageProps);
  // console.log("Component :", Component);
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log("this is theme : ", Theme);

  useEffect(() => {
    Fonts();
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={Theme}>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Component
          {...pageProps}
          setSelectedIndex={setSelectedIndex}
          setValue={setValue}
        />
        {/* <LazyLoadComponent threshold={400}>
        </LazyLoadComponent> */}
        <Footer setSelectedIndex={setSelectedIndex} setValue={setValue} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
