import "../assets/styles/app.css";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/typeface-menomonia";

import { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";

type AppSignature = (props: AppProps) => JSX.Element;
const App: AppSignature = ({ Component, pageProps }) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="relative w-full h-screen">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
