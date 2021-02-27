import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Tabla = (props) => {
    console.log(props)
    return (
        <div>
            {props.clientes.map((cliente) => (
                <div className="card text-white bg-dark mt-1" key={cliente.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="row">
                                <div className="col-auto">
                                    <FaUser/>
                                </div>
                                <div className="col-auto">
                                    <h5 className="card-title">{cliente.nombre}</h5>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-danger mr-1">
                                    <FaUserTimes onClick={() => props.onDelete(cliente.id)}/>
                                </button>
                                <button className="btn btn-light">
                                    <FaUserEdit/>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <FaPhoneAlt/>
                            </div>
                            <div className="col-auto">
                                <h6 className="card-title">{cliente.telefono}</h6>
                            </div>
                            <div className="col-auto">
                                <FaRegEdit/>
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