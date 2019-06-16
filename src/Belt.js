import React, { useEffect, useState } from "react";
import BELTS, { BELT_TECHNIQUES } from "./beltsService";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Belt = ({ beltId }) => {
  const [beltTechniques, setBeltTechniques] = useState({});
  useEffect(() => {
    setBeltTechniques(BELT_TECHNIQUES[beltId]);
  }, [beltId]);

  return (
    <>
      <h1>Faixa {BELTS.filter(belt => belt.id === beltId)[0].label}</h1>
      <h2>Técnicas</h2>
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
        {Object.keys(beltTechniques).map(techniqueType => {
          return (
            <Link
              key={techniqueType}
              to={`/belts/${beltId}/techniques/${techniqueType}`}
              css={css`
                color: #222;
                text-decoration: none;
              `}
            >
              <div
                css={css`
                  height: 200px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                  border-radius: 5px;
                  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
                  background: #e6e6e6;
                  font-size: 24px;
                `}
              >
                {beltTechniques[techniqueType].label}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Belt;
