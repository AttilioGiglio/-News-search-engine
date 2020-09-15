import React from 'react';
import styles from './Formulario.module.css';
import UseSelect from '../Hooks/UseSelect';

const Form = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    // use custom hooks
    const [categoria, SelectNoticias] = UseSelect('general', OPCIONES);

    // submit al form, pasar categoria a app.js 
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }    

    return (
        <div className={`row ${styles.buscador}`}>
            <div className='col s12 m8 offset-m2'>
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Find news by categories</h2>
                    <SelectNoticias />
                    <div className='input-field col s12'>
                        <input
                        type='submit'
                        className={`btn-large amber darken-2 ${styles.btn_block}`}
                        value='buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
