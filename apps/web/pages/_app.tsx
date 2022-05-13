import '../assets/styles/app.css';

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/typeface-menomonia";

import { AppProps } from "next/app";

type AppSignature = (props: AppProps) => JSX.Element;
const App: AppSignature = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
