import React, { useEffect, useState } from "react";
import BELTS, { getTechniques } from "./beltsService";
import TechniqueGrid from "./TechniqueGrid";

const Techniques = ({ beltId, techniqueId }) => {
  const [beltTechniques, setBeltTechniques] = useState();
  useEffect(() => {
    getTechniques(beltId).then(techniquesPerBelt => {
      setBeltTechniques(techniquesPerBelt);
    });
  }, [beltId]);
  return (
    <>
      {beltTechniques && (
        <>
          <h1>Faixa {BELTS.filter(belt => belt.id === beltId)[0].label}</h1>
          <TechniqueGrid {...beltTechniques[techniqueId]} />
        </>
      )}
    </>
  );
};

export default Techniques;
