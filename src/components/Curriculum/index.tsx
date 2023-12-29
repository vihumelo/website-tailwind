import React from "react";
import CVSlider from "./Slider";
import Loader from "../Layout/Loader";
const Curriculum: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pl-5 animation-text w-full lg:flex-row lg:mt-20 lg:ml-32 lg:overflow-hidden">
        <div className="flex flex-col lg:w-4/12">
          <p className="font-coolvetica text-6xl text-yellow-400">Carreira</p>
          <p className="font-helvetica pt-12">
            Aqui, você encontrará uma narrativa detalhada de toda a minha
            jornada profissional, destacando as habilidades diversas que adquiri
            ao longo da minha carreira. Minha experiência profissional abrange
            desafios que contribuíram para o meu crescimento e desenvolvimento
            profissional.
          </p>

          <div className="w-full mt-20 lg:hidden">
            <CVSlider />
          </div>

          <div className="mt-32 lg:w-1/2">
            <p className="font-coolvetica text-6xl text-yellow-400">Educação</p>
            <p className="text-2xl text-white pt-12 font-bold">
              Mastering Python
            </p>
            <p className="font-helvetica pt-5">FIAP &bull; 2023</p>

            <p className="text-2xl text-white pt-12 font-bold">
              Bacharelado em Biomedicina
            </p>
            <p className="font-helvetica pt-5 lg:mb-32">UNINOVE &bull; 2010</p>
          </div>
        </div>
        <div className="w-6/12 ml-32 custom-sm-hidden">
          <CVSlider />
        </div>
      </div>
      <Loader />
    </>
  );
};

export default Curriculum;
