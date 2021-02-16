import React from 'react'
import Formulario from './Formulario'
import Tabla from './Tabla'

const Clientes = () => {
    return (
        <div className="container p-2">
            <div className="row">
                <div className="col-md-4">
                    <Formulario/>
                </div>
                <div className="col-md-8">
                    <Tabla/>
                </div>
            </div>
        </div>
    )
}

export default Clientes;