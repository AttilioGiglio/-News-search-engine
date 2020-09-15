import React from 'react';
import styles from './Formulario.module.css';

const Form = () => {
    return (
        <div className={`row ${styles.buscador}`}>
            <div className='col s12 m8 offset-m2'>
                <form>
                    <h2 className={styles.heading}>Find news by categories</h2>
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
