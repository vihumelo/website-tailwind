import React, { useState } from "react";
import Loader from "../Layout/Loader";
import { API } from "./API";
import { ThreeDots } from "react-loader-spinner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API(formData);
      setSuccessMessage("Obrigado pelo envio!.");
    } catch (error) {
      setSuccessMessage("Houve um erro! Tente novamente.");
    } finally {
      setLoading(false);
      setFormData({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col pl-5 animation-text lg:mt-20 lg:ml-32">
        <div className="flex flex-col lg:w-1/2">
          <p className="font-coolvetica text-6xl text-yellow-400">Contato</p>
          <p className="font-helvetica pt-12">
            Estou interessado em oportunidades de trabalho em empresas de
            tecnologia. No entanto, se você tiver outras solicitações ou
            perguntas, não hesite em entrar em contato comigo utilizando o
            formulário abaixo:
          </p>
        </div>
        <div className="relative w-full pr-8 mt-16 lg:w-1/2 lg:flex-col lg:mt-5 lg:mb-24">
          {loading ? (
            <div className="flex justify-center items-center">
              <ThreeDots
                visible={true}
                height="40"
                width="40"
                color="#ffd700"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <>
              {successMessage ? (
                <div className="font-coolvetica text-yellow-400 text-4xl mb-4 lg:pt-32">
                  {successMessage}
                </div>
              ) : (
                <form className="lg:w-full" onSubmit={handleSubmit}>
                  <ul className="block relative">
                    <li className="my-4">
                      <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        className="w-full p-10 h-16 custom-input text-2xl text-white"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                      />
                    </li>
                    <li className="my-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        className="w-full p-10 h-16 custom-input text-2xl text-white"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </li>
                    <li className="my-4">
                      <input
                        type="text"
                        name="assunto"
                        placeholder="Assunto"
                        className="w-full p-10 h-16 custom-input text-2xl text-white"
                        required
                        value={formData.assunto}
                        onChange={handleInputChange}
                      />
                    </li>
                    <li className="my-4">
                      <textarea
                        name="mensagem"
                        placeholder="Mensagem"
                        className="w-full p-10 h-56 min-h-10 custom-input text-2xl text-white"
                        required
                        value={formData.mensagem}
                        onChange={handleInputChange}
                      ></textarea>
                    </li>
                    <li className="mt-0 flex relative">
                      <input
                        type="submit"
                        value="ENVIAR"
                        className="flat-button mx-auto mt-3"
                      />
                    </li>
                  </ul>
                </form>
              )}
            </>
          )}
        </div>
      </div>
      <Loader />
    </>
  );
};

export default Contact;
