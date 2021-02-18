import React from 'react'

const Tabla = (props) => {
    console.log(props)
    return (
        <div>
            {props.clientes.map((cliente) => (
                <div className="card mt-1" key={cliente.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="row">
                                <div className="col-auto">
                                    <i className="material-icons">person</i>
                                </div>
                                <div className="col-auto">
                                    <h5 className="card-title">{cliente.nombre}</h5>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary mr-1">
                                    <i className="material-icons"
                                        onClick={() => props.onDelete(cliente.id)}
                                    >close</i>
                                </button>
                                <button className="btn btn-secondary">
                                    <i className="material-icons">create</i>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <i className="material-icons">phone</i>
                            </div>
                            <div className="col-auto">
                                <h6 className="card-title">{cliente.telefono}</h6>
                            </div>
                            <div className="col-auto">
                                <i className="material-icons">content_paste</i>
                            </div>
                            <div className="col-auto">
                                <h6 className="card-text">{cliente.observacion}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Tabla;