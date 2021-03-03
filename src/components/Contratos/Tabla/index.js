import React from 'react'

const Tabla = (props) => {
    return (
        <div>
            <table class="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">Contrato</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Cuenta</th>
                        <th scope="col">Cobrar</th>
                        <th scope="col">Fecha Corte</th>
                        <th scope="col">Perfil</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Inscripción</th>
                        <th scope="col">Observación</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {props.clientes.map((cliente) => (
                        <tr>
                            <td>121</td>
                            <td>{cliente.nombre}</td>
                            <td>martin@gmail.com</td>
                            <td>
                                <button className="btn btn-danger">Cobrar</button>
                            </td>
                            <td>14/2/2021</td>
                            <td>
                                <span class="badge rounded-pill bg-danger">p4</span>
                            </td>
                            <td>
                            <span class="badge rounded-pill bg-info">Activo</span>
                            </td>
                            <td>24/12/2020</td>
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