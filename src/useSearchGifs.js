import { useState } from "react";
export const useSearchGifs = () => {
  const [gifs, setGifs] = useState([]);
  const [valorInputs, setValorInputs] = useState("");
  const [estaCargando, setEstaCargando] = useState(false);
  const onChange = (event) => {
    const valor = event.currentTarget.value;
    setValorInputs(valor);
  };

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5qVaNtTuQ9kh5GZdocQPxt5RQWcfOMAq&q=${query}`;
    setEstaCargando(true);
    const response = await fetch(url);
    const data = await response.json();
    setEstaCargando(false);
    return data.data;
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const gifs = await getGifs(valorInputs);
    setGifs(gifs);
  };

  return {
    handleSubmit,
    onChange,
    valorInputs,
    gifs,
    estaCargando,
  };
};
