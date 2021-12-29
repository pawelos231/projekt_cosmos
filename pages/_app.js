import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../styles/main.css";
import { useState } from "react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <>
      <Layout isOn={isOn} toggleSwitch={toggleSwitch}>
        <Component {...pageProps} isOn={isOn} toggleSwitch={toggleSwitch} />
      </Layout>
    </>
  );
}

export default MyApp;
