import React from 'react';
import Noticia from './Noticia';

const ListadoNoticia = ({ noticias }) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia />
            ))}
        </div>
    );
}

export default ListadoNoticia;