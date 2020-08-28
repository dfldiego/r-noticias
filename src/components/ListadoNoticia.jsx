import React from 'react';
import Noticia from './Noticia';

const ListadoNoticia = ({ noticias }) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    );
}

export default ListadoNoticia;