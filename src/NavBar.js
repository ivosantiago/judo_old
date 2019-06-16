import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      a {
        color: #e6e6e6;
        text-decoration: none;
        text-transform: uppercase;
      }
      background: linear-gradient(90deg, #c02d28, #e66225);
    `}
  >
    <h2
      css={css`
        background: rgba(0, 0, 0, 0.7);
        padding: 20px;
        margin: 0;
        @media (max-width: 502px) {
          font-size: 20px;
        }
      `}
    >
      <span
        role="img"
        aria-label="logo"
        css={css`
          padding-right: 16px;
        `}
      >
        🥋
      </span>
      <Link to="/">Judô - Exame de faixa</Link>
    </h2>
  </header>
);

export default NavBar;
