import React from "react";


import Circles from "./componentes/Circles";
import Background from "./componentes/background";


const HomePage: React.FC = () => {
  // Raio da distribuição dos círculos

  return (
    <div className="h-screen">
      <div className="bg-white h-24">
        <p className="text-md text-black text-center p-4">
          No princípio, só existia <strong>Olodumaré</strong>, o Ser Supremo, que criou tudo.
          O universo era um grande vazio até que Olodumaré decidiu criar dois reinos distintos:
          <strong> Orun</strong>, o mundo espiritual, e <strong>Aiê</strong>, o mundo material.


        </p>
      </div>

      <div className="flex flex-col justify-center items-center relative">
        <Background />
        <Circles />
      </div>
      <div className="bg-white h-24"></div>

    </div>


  );
};

export default HomePage;
