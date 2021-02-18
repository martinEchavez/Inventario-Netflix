import React, {useState} from 'react'
import Calendar from 'react-calendar'

const Formulario = (props) => {

    const initialStateValues = {
        nombre: '',
        telefono: '',
        observacion: ''
    }

    const [values, setValues] = useState(initialStateValues);
    const [date, setDate] = useState(new Date());

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addOrEditClient({...values, date});
        setValues({...initialStateValues})
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <h5 className="card-title text-center">Regístrar Cliente</h5>
            <div className="form-group input-group">
                <div className="input-group-text bg-secondary">
                    <i className="material-icons">person</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre completo"
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-secondary">
                    <i className="material-icons">phone</i>
                </div>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Teléfono"
                    name="telefono"
                    onChange={handleInputChange}
                    value={values.telefono}
                />
            </div>
            <div className="form-group">
                <Calendar
                    onChange={setDate}
                    value={date}
                />
            </div>
            <div className="form-group">
                <textarea
                    className="form-control"
                    placeholder="Observación"
                    name="observacion"
                    onChange={handleInputChange}
                    value={values.observacion}
                    rows="3">
                </textarea>
            </div>
            <button className="btn btn-primary btn-block">
                Guardar
            </button>
        </form>
    )
}

export default Formulario;