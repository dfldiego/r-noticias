import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  // USE EFFECT
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a64e48af6e04498981295d9b0274a589`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
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
      </div>
    </>
  );
}

export default App;
/**traernos las noticias de esa categoria seleccionada */