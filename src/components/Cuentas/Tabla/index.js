import React from 'react'

const Tabla = (props) => {
    return (
        <div>
            <table class="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Inscripción</th>
                        <th scope="col">Observación</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                {props.clientes.map((cliente) => (
                <tr>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.telefono}</td>
                    <td>{cliente.telefono}</td>
                    <td>{cliente.observacion}</td>
                    <td>
                        <button className="btn btn-secondary">Editar</button>{' '}
                        <button className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tabla;