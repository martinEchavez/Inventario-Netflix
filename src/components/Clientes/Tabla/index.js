import React from 'react'

const Tabla = () => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Inscripción</th>
                    <th scope="col">Observaciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Maria Perez</th>
                    <td>3205801212</td>
                    <td>12/01/20201</td>
                    <td>Ninguna</td>
                </tr>
                <tr>
                    <th scope="row">Pablo Rojas</th>
                    <td>3215212321</td>
                    <td>11/01/2020</td>
                    <td>Ninguna</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabla;