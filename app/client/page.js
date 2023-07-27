'use client';
import {useState,useEffect} from 'react';
import {getClients,deleteClients} from '../../api/client';
import Link from "next/link";
import Adminlayout from '../adminlayout'

export default function table() {
    const [Clients,setClients] = useState();
    const getData = async () => {
        var opt = await getClients();
        await setClients(opt);
        console.log(opt);
    };
    const deleteRecord = async (id) =>{
        await deleteClients(id);
        var data = await getClients();
     await setClients(data);
        }
    useEffect(() => { getData() }, []);
    return (

         <>
         <Adminlayout>

        <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Client</h1>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <Link href="/client/create" className="card-header py-3 align-self-end">
                    <h6 className="m-0 font-weight-bold  btn btn-primary">Create Client</h6>
                </Link>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing={0}
                        >
                            <thead>
                                <tr>
                                    <td className="text-center">Sno</td>
                                    <td className="text-center">client Image</td>
                                    <td className="text-center">order</td>
                                    <td className="text-center">Actions</td>
                                </tr>
                            </thead>

                            <tbody>
                                {Clients && (Clients.data.map((client,index)=>{return(  <tr key={index}>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-center"><img src={client.client_image} width='20px' height='20px'/></td>
                                    <td className="text-center">{client.order}</td>
                                    <td className="text-center">
                                        <Link title="Edit client" href={`/client/edit?id=${client.id}`}>
                                             <i className="fas fa-file fa-fw" />
                                        </Link>
                                        <a href="#" onClick={()=>deleteRecord(client.id)}>
                                                <i className="fas fa-trash fa-fw" /></a>
                                    </td>
                                </tr>)
                                }))}
                                


                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
          </Adminlayout>
          </>


    )
}