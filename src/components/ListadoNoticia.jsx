import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

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

ListadoNoticia.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListadoNoticia;