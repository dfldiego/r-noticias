import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // definir la categoria y noticias
  const [categoria, setCategoria] = useState('');

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
