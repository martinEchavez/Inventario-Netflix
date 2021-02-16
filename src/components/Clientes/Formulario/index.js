import React from 'react'
import Calendar from 'react-calendar'

const Formulario = () => {
    return (
        <form className="card card-body">
            <h5 className="card-title text-center">Regístrar Cliente</h5>
            <div className="form-group input-group">
                <div className="input-group-text bg-secondary">
                    <i class="material-icons">person</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre completo"
                    name="nombre"
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-secondary">
                    <i class="material-icons">phone</i>
                </div>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Teléfono"
                    name="telefono"
                />
            </div>
            <div className="form-group">
                <Calendar
                />
            </div>
            <div className="form-group">
                <textarea
                    className="form-control"
                    placeholder="Observación"
                    name="observacion"
                    rows="3">
                </textarea>
            </div>
        </form>
    )
}

export default Formulario;