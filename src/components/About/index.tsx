import React from "react";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/cube-animation.scss";
import Loader from "../Layout/Loader";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pl-5 animation-text lg:flex-row lg:mt-20 lg:ml-32">
        <div className="flex flex-col lg:w-1/2">
          <p className="font-coolvetica text-6xl text-yellow-400">Sobre mim</p>
          <p className="font-helvetica pt-12">
            Sou um desenvolvedor com sólido conhecimento em Python no backend e
            utilizo JavaScript + React no frontend. Nesses últimos quase 4 anos
            desenvolvendo, já fiz alguns projetos para mostrar minhas
            habilidades que podem ser encontrados no meu perfil do GitHub e
            na&nbsp;
            <Link to="/portfolio" className="text-yellow-400 hover:underline">
              sessão portfólio desse site
            </Link>
            .
          </p>
          <p className="font-helvetica pt-8">
            Hoje sou formado em biomedicina e construí uma carreira bem-sucedida
            em empresas de destaque no setor de healthcare. Com um compromisso
            de estudo ao longo dos últimos 3 anos e meio, estou focado em
            direcionar meus esforços para uma transição de carreira, almejando
            oportunidades full-time em empresas de tecnologia.
          </p>
          <p className="font-helvetica pt-8">
            Quero aplicar minha experiência e habilidades técnicas em um novo
            contexto, contribuindo de forma significativa para projetos
            inovadores.
          </p>
        </div>
        <div className="flex justify-center mx-auto my-8 h-96 pt-28 mb-32">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#0700dd" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader />
    </>
  );
};

export default About;
