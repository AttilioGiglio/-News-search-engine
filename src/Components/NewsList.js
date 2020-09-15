import React from 'react';
import New from './New'

const NewsList = ({noticias}) => {
    return (
        <div className='row'>
            {noticias.map(noticia=>(
                <New 
                key={noticia.url}
                noticia={noticia}
                />
            ))}
        </div>
    )
}

export default NewsList
