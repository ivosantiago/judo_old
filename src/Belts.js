import React, { useEffect, useState } from "react";
import BELTS from "./beltsService";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Belts = () => {
  const [belts, setBelts] = useState([]);
  useEffect(() => {
    setBelts(BELTS);
  }, []);

  return (
    <>
      <h1>Faixas</h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
          grid-gap: 20px;
          @media (min-width: 502px) {
            grid-template-columns: repeat(auto-fit, 225px);
          }
        `}
      >
        {belts.map(belt => {
          return (
            <Link
              key={belt}
              to={`/belts/${belt.id}`}
              css={css`
                color: #e6e6e6;
                text-decoration: none;
              `}
            >
              <div
                css={css`
                  height: 200px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 5px;
                  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
                  background: ${belt.color};
                  font-size: 24px;
                `}
              >
                {belt.label}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Belts;
