import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Calendar from 'react-calendar'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Formulario = (props) => {

    const initialStateValues = {
        nombre: '',
        telefono: '',
        observacion: ''
    }

    const [modal, setModal] = useState(true);

    const [values, setValues] = useState(initialStateValues);
    const [date, setDate] = useState(new Date());

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const toggle = () => setModal(!modal);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addOrEditClient({ ...values, date });
        setValues({ ...initialStateValues })
    }

    return (
        <div>
            <button className="btn btn-danger btn-block" onClick={toggle}><strong>Agregar Contrato</strong></button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader  className="text-white bg-dark" toggle={toggle}>Regístrar Contrato</ModalHeader>
                <ModalBody style={{ background: 'black', color: 'red'}}>
                    <form className="card text-white bg-dark card-body" onSubmit={handleSubmit}>
                        <div className="form-group input-group">
                            <div className="input-group-text bg-light">
                                <FaUser />
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
                            <div className="input-group-text bg-light">
                                <FaPhoneAlt />
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
                    </form>
                </ModalBody>
                <ModalFooter className="text-white bg-dark">
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>{' '}
                    <Button color="danger" onClick={toggle}>Guardar</Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}

export default Formulario;