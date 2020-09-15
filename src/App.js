import React, {Fragment} from 'react';
import Header from './Components/Header';
import Form from './Components/Form';

function App() {
  return (
    <Fragment>
      <Header titulo='Buscador de noticias' />
      <div className='container white'>
      <Form />
      </div>
    </Fragment>
  );
}

export default App;
