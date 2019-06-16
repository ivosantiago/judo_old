import React from "react";
import { render } from "react-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Belts from "./Belts";
import Belt from "./Belt";
import ErrorBoundary from "./ErrorBoundary";
import Techniques from "./Techniques";
import { css } from "@emotion/core";
import { Router } from "@reach/router";
import ReactGA from "react-ga";
ReactGA.initialize("UA-70663802-2");
ReactGA.pageview(window.location.pathname + window.location.search);

import "normalize.css";

const App = () => {
  return (
    <React.StrictMode>
      <NavBar />
      <main
        css={css`
          flex: 1 1 auto;
        `}
      >
        <Router
          css={css`
            padding: 20px 16px;
            max-width: 960px;
            margin: auto;
          `}
        >
          <Belts path="/" />
          <Belt path="/belts/:beltId" />
          <Techniques path="/belts/:beltId/techniques/:techniqueId" />
        </Router>
      </main>
      <Footer />
    </React.StrictMode>
  );
};

const AppWithErrorBoudary = props => {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
};

render(<AppWithErrorBoudary />, document.getElementById("root"));
