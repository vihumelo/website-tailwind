import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    empresa: "Freelancer",
    cargo: "Desenvolvedor Python",
    dataInicio: "Jun/2020",
    dataTermino: "Atual",
    descricao:
      "Atuando com desenvolvimente utilizando a linguagem Python em conjunto com bancos de dados SQL e NoSQL. Minha atuação abrange desde a construção de APIRest no backend de aplicações web até a implementação de soluções de automação em uma variedade de contextos, incluindo plataformas desktop e web scraping. Adoto uma abordagem empreendedora e trabalho como freelancer, garantindo os melhores resultados aos meus clientes. Além disso, estou expandindo meu conjunto de habilidades no desenvolvimento frontend, onde venho aprimorando meu conhecimento em Javascript e React. Essa diversificação me permite oferecer soluções completas e integradas.",
    habilidades:
      "Python, MySQL, MongoDB, Selenium, Requests, WebSocket, Web Scraping, ChatBots, React, Vite, CSS3, HTML5, Javascript, TypeScript",
  },

  {
    empresa: "Hospital Albert Einstein",
    cargo: "Analista de Laboratório",
    dataInicio: "Mar/2019",
    dataTermino: "Atual",
    descricao:
      "Analista de Laboratório Clínico no setor de hematologia e coagulação do Hospital Israelita Albert Einstein envolvido em projetos de dados (SQL), ensino e pesquisa. Desenvolvimento de análise de dados utilizando consultas SQL utilizando framework Hadoop e criação de dashboards no PowerBI.",
    habilidades: "SQL, PowerBI, Hadoop, BigData",
  },

  {
    empresa: "Grupo Fleury",
    cargo: "Analista de Laboratório",
    dataInicio: "Abr/2014",
    dataTermino: "Nov/2018",
    descricao:
      "Analista de Laboratório Sênior no Hospital e Maternidade Brasil dando suporte para a coordenação da unidade em assuntos técnicos e com o gerenciamento da equipe. Avaliação dos principais indicadores internos e externos, elaborando planos de ações e melhoria contínua nos processos envolvidos na realização dos exames de forma interdependente e multidisciplinar com parceiros, T.I., Suprimentos e Engenharia Clínica.",

    habilidades: "Gerenciamento de pessoas, Trabalho Multidisciplinar",
  },
];

const CVSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index: number) => {
      setActiveIndex(index);
    },
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="outline-none focus:outline-none">
            <div className="bg-sky-950 p-6 rounded-xl">
              <p className="text-white text-2xl font-bold">{item.empresa}</p>
              <p className="text-zinc-400 text-xl mt-2">{item.cargo}</p>
              <p className="text-zinc-400 text-xl mt-2">
                {item.dataInicio} &bull; {item.dataTermino}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-20 border-s-2 pl-5 ml-2 mr-4 lg:ml-0 lg:mr-0">
        <p className="font-coolvetica text-3xl text-yellow-400">
          Mais detalhes
        </p>
        <p className="font-helvetica text-xl pt-4">
          {data[activeIndex].descricao}
        </p>

        <p className="font-coolvetica text-3xl text-yellow-400 pt-16">
          Habilidades
        </p>
        <p className="font-helvetica text-xl pt-4">
          {data[activeIndex].habilidades}
        </p>
      </div>
    </>
  );
};

export default CVSlider;
