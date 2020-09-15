import React, {Fragment} from 'react';
import Header from './Components/Header';
import Form from './Components/Form';

function App() {

  // definir la categoria y noticias

  const [categoria, guardarCategoria] = useState('');

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
