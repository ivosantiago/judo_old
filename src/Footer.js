import React from "react";
import { css } from "@emotion/core";

const Footer = () => (
  <footer
    css={css`
      a {
        text-decoration: none;
        color: #e6e6e6;
      }
      background: #111;
    `}
  >
    <div
      css={css`
        padding: 16px;
        font-size: 12px;
        text-align: center;
      `}
    >
      Feito por <a href="https://www.ivosantiago.com">Ivo Santiago</a>
    </div>
  </footer>
);

export default Footer;
