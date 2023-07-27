'use client'
import Link from "next/link";
import {useState,useEffect} from 'react';
import {getServices,deleteServices} from '../../api/services';
import Adminlayout from '../adminlayout'

export default function table() {
    const [services,setServices] = useState();
    const getData = async () =>{
        var data= await getServices();
        await setServices(data);
    }
    const deleteRecord = async (id)=>{
await deleteServices(id);
getData();
    }
useEffect(()=>{
    getData()
},[])
    return (


        <>
            <Adminlayout>
                <div className="container-fluid">
                    {/* Page Heading */}
                    <h1 className="h3 mb-2 text-gray-800">Services</h1>

                    {/* DataTales Example */}
                    <div className="card shadow mb-4">
                        <Link href="/service/create" className="card-header py-3 align-self-end">
                            <h6 className="m-0 font-weight-bold  btn btn-primary">Create Services </h6>
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
                                            <td className="text-center">Title</td>
                                            <td className="text-center">Description</td>


                                            <td className="text-center">Actions</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {services && (services.data.map((service,index)=>[
                                                 <tr>
                                            <td className="text-center">{index + 1}</td>
                                            <td className="text-center">{service.title}</td>
                                            <td className="text-center">{service.description}</td>


                                            <td className="text-center">
                                                <Link title="Edit Project" href={`/service/edit?id=${service.id}`}>
                                                    <i className="fas fa-file fa-fw" />
                                                </Link>
                                                <a title="Delete Project" href="#" onClick={()=>deleteRecord(service.id)}>
                                                    <i className="fas fa-trash fa-fw" />
                                                </a>


                                            </td>

                                        </tr>
                                        ]))}
                                   



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