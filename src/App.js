import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticia from './components/ListadoNoticia';

function App() {

  // definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  // USE EFFECT
  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = 'a64e48af6e04498981295d9b0274a589';
      const noticiasUrl = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apiKey}`;
      const url = `https://api.allorigins.win/get?url=${encodeURIComponent(noticiasUrl)}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(JSON.parse(noticias.contents).articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <>
      <Header
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />
        <ListadoNoticia
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
/**traernos las noticias de esa categoria seleccionada */