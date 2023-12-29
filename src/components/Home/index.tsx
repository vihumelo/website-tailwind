import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../assets/images/picture.png";
import "../../styles/styles.scss";
import Loader from "../Layout/Loader";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pl-5 animation-text lg:flex-row lg:mt-40 lg:ml-32">
        <div className="flex flex-col">
          <p className="font-coolvetica">
            Olá, <br />
            meu nome é Victor e <br />
            transformo ideias em códigos.{" "}
            <span className="animation-emoji"></span>
          </p>
          <div className="font-coolvetica style2 pt-10">
            Fullstack developer <br /> Backend Python & Frontend Javascript
          </div>
          <Link
            to="contato"
            className="flat-button mr-auto ml-auto mt-10 lg:mr-0 lg:ml-0"
          >
            CONTATO
          </Link>
        </div>
        <div className="mt-10 ml-auto mr-auto lg:mt-[-5%] lg:ml-44">
          <img src={Picture} alt="Victor's picture" />
        </div>
      </div>
      <Loader />
    </>
  );
};

export default Home;
