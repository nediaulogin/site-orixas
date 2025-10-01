import React from "react";

import Circles from "./componentes/Circles";
import Background from "./componentes/background";
import Intro from "./componentes/Intro";

const HomePage: React.FC = () => {
 // Raio da distribuição dos círculos

  return (
    
    <div className="flex flex-col justify-center items-center h-screen relative">
    <Circles />
  
    </div>

  
  );
};

export default HomePage;
