import React, { useState } from 'react'

const UseSelect = (stateInicial, opciones) => {

    const [state, setState] = useState('');

    const SelectNoticias = () => (
        <select className='browser-default'>
            <option value=''>Seleccione</option>
        </select>
    )

    return [state, SelectNoticias];
}

export default UseSelect
