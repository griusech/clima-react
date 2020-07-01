import React, {useState} from 'react';

const Formulario = () => {

    // State del Formulario
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    // Extraigo los datos
    const {ciudad, pais} = busqueda;

    // Pasas los datos el State
    const muestroDatos = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={muestroDatos}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={muestroDatos}
                >
                    <option value="">-- Seleccionar --</option>
                    <option value="AR">Argentina</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">España</option>
                    <option value="CO">Colombia</option>

                </select>

                <label htmlFor="pais">Pais: </label>
            </div>
        </form>
     );
}
 
export default Formulario;