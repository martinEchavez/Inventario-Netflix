import React, {useState, useEffect} from 'react'
import Formulario from './Formulario'
import Tabla from './Tabla'
import {db} from '../../firebase'
import { toast } from 'react-toastify'

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    const onDelete = async (id) => {
        if(window.confirm('¿Está seguro de eliminar este usuario?')){
            await db.collection('clientes').doc(id).delete();
            toast('Usuario eliminado', {
                type: 'error',
                autoClose: 2000
            })
        }
    }

    const getClientes = async () => {
        db.collection('clientes').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id: doc.id})
            });
            setClientes(docs)
        });
    }

    useEffect(() => {
        getClientes();
    }, [])

    const addOrEditClient = async (cliente) => {
        await db.collection("clientes").doc().set(cliente);
        toast('Usuario guardado', {
            type: 'success',
            autoClose: 2000
        })
    }

    return (
        <div className="container p-2">
            <div className="row">
                <div className="col-md-4">
                    <Formulario addOrEditClient={addOrEditClient} />
                </div>
                <div className="col-md-8">
                    <Tabla
                        clientes={clientes}
                        onDelete={onDelete}
                    />
                </div>
            </div>
        </div>
    )
}

export default Clientes;