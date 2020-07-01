import React, {useState} from 'react';

const Formulario = ({busqueda, guardarBusqueda}) => {

    // State de Error
    const [error, guardarError] = useState(false)

    // Extraigo los datos
    const {ciudad, pais} = busqueda;

    // Pasas los datos el State
    const muestroDatos = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario haga click en submit
    const handleSubmit = e => {
        e.preventDefault();


        // Validar
        if (ciudad.trim() === '' || pais.trim() === '')
        {
            guardarError(true);
            return;
        }

        guardarError(false);

        // Pasar los datos al componente principal


    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >

            {error ? <p className="red lighten-1 error">Complete todos los campos</p> : null}

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

            <div className="input-field col s12">
                <button
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block orange lighten-2 col s12"
                >Buscar Clima</button>
            </div>

        </form>
     );
}
 
export default Formulario;