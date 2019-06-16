import React, { useEffect, useState } from "react";
import { css } from "@emotion/core";
import { TECHNIQUES } from "./beltsService";
import CardPlayer from "./CardPlayer";

const TechniqueGrid = ({ label, techniques }) => {
  const [beltTechniques, setBeltTechniques] = useState([]);
  useEffect(() => {
    setBeltTechniques(
      techniques.map(technique => {
        const res = { primary: TECHNIQUES[technique.primary] };
        if (technique.secondary)
          res.secondary = TECHNIQUES[technique.secondary];
        return res;
      })
    );
  }, [techniques]);

  return (
    <>
      <h2>{label}</h2>
      <div
        css={css`
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        `}
      >
        {beltTechniques.map((beltTechnique, index) => {
          return (
            <div
              key={`nagueWaza-${beltTechnique}-${index}`}
              css={css`
                border-radius: 5px;
                overflow: hidden;
                box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
                background: #e6e6e6;
                color: #222;
              `}
            >
              <CardPlayer technique={beltTechnique} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TechniqueGrid;
