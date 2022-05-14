import "../assets/styles/app.css";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/typeface-menomonia";

import { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { MainProvider } from "../context/Main/MainProvider";

type AppSignature = (props: AppProps) => JSX.Element;
const App: AppSignature = ({ Component, pageProps }) => {
  return (
    <MainProvider>
      <div className="flex">
        <Navbar />
        <div className="relative w-full h-screen">
          <Component {...pageProps} />
        </div>
      </div>
    </MainProvider>
  );
};

export default App;
