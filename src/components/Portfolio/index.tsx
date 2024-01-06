import React from "react";
import Loader from "../Layout/Loader";
import "../../styles/styles.scss";
import CustomCard from "../CustomCard";

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pl-5 animation-text lg:flex-row lg:mt-20 lg:ml-32">
        <div className="flex flex-col lg:w-1/2">
          <p className="font-coolvetica text-6xl text-yellow-400">Portfolio</p>
          <p className="font-helvetica pt-12">
            Aqui estão alguns projetos meus, desenvolvidos com o objetivo de
            aprendizado, contribuição à comunidade e também para demonstrar
            minhas habilidades. Estão todos no GitHub ;)
          </p>
          <div className="pt-20 pr-8">
            <CustomCard
              title="Projeto FullStack"
              description="Um projeto sofisticado que emprega MySQL e Python no backend, fazendo uso das bibliotecas FastAPI, Alembic, SQLAlchemy e Pydantic. No front-end, a aplicação é construída com React + Vite e TypeScript, proporcionando uma arquitetura robusta e eficiente em toda a stack."
              link="https://github.com/vihumelo/projeto_visie"
            />
          </div>
          <div className="pt-20 pr-8">
            <CustomCard
              title="Meu Website"
              description="Apesar de não ser um designer, este website foi construído por mim para demonstrar minhas habilidades com as modernas tecnologias React, TypeScript, CSS3 e uso dos pré-processadores SCSS e Tailwind CSS. SCSS é uma extensão do CSS que adiciona funcionalidades e melhorias à linguagem, enquanto o Tailwind CSS é um framework de utilitários CSS que facilita a criação rápida e consistente de interfaces. O código-fonte está disponível publicamente, promovendo a colaboração na comunidade."
              link="https://github.com/vihumelo/website-tailwind"
            />
          </div>
          <div className="pt-20 pr-8">
            <CustomCard
              title="Django Framework"
              description="Uma aplicação utilizando a robusta biblioteca Django do Python, dotada de funções administrativas que facilitam a criação de cadastros de colaboradores em empresas. Além das ferramentas administrativas, implementei API Endpoints completos, tornando a aplicação facilmente acessível e integrável com outras soluções."
              link="https://github.com/vihumelo/django-framework"
            />
          </div>
          <div className="pt-20 pr-8">
            <CustomCard
              title="Instagram Scrapper"
              description="Desenvolvi uma aplicação Python simples que utiliza a biblioteca requests para fazer requisições à rede social Instagram e a biblioteca BeautifulSoup para extrair a imagem de perfil dos usuários. Essa aplicação é extremamente útil para projetos web ou desktop que necessitam acessar e utilizar dados do Instagram."
              link="https://github.com/vihumelo/instapicture"
            />
          </div>
          <div className="pt-20 pr-8 lg:mb-24">
            <CustomCard
              title="API para Broker de Traders"
              description="Desenvolvi esta aplicação por meio de uma contratação freelancer, e infelizmente, o código não pode ser público. Trata-se de uma API robusta construída em Python e Flask, onde utilizei minhas habilidades avançadas de web scraping, empregando a biblioteca Playwright para a captura de dados. Além disso, a aplicação realiza ''handshakes'' através de conexões WebSocket, proporcionando a capacidade de enviar/receber solicitações em tempo real."
              link="#"
            />
          </div>
        </div>
      </div>
      <Loader />
    </>
  );
};

export default Portfolio;
