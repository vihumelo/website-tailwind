import axios from "axios";

interface FormProps {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export const API = async (formData: FormProps) => {
  const url = "https://backend-6rgy.onrender.com/mail";
  await axios.post(url, formData);
};
