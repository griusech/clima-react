import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                >
                    <option value="">-- Seleccionar --</option>
                </select>
            </div>
        </form>
     );
}
 
export default Formulario;