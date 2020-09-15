import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Form from './Components/Form';

function App() {

  // definir la categoria y noticias

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  const consultarAPI = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=de35d64039c44798a8e66bb93aaae684` 
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    guardarNoticias(noticias.articles);
  }

  useEffect(() => {
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header titulo='Buscador de noticias' />
      <div className='container white'>
      <Form 
        guardarCategoria={guardarCategoria}
      />
      </div>
    </Fragment>
  );
}

export default App;
