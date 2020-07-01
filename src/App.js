import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'


function App() {

    // State del Formulario
      const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    const [consultar, guardarConsultar] = useState(false)

    // Extraigo los datos
    const {ciudad, pais} = busqueda;

    useEffect(() => {
      const consultarAPI = async () => {

      }
      consultarAPI();
    }, [consultar])

  return (
    <Fragment>
      <Header 
        titulo = "Clima React App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda = {busqueda}
                guaradrBusqueda = {guardarBusqueda}
                guardarConsultar = {guardarConsultar}
                
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
