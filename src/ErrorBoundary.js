import React from "react";
import { css } from "@emotion/core";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100%;
          `}
        >
          <h1>{`Opa... Aconteceu um erro grave 🤷‍♂️`}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
