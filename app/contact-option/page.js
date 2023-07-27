'use client'
import Link from "next/link";
import {getContactOption,deleteContactOption} from '../../api/contactOption';
import {useEffect,useState} from 'react';

import Adminlayout from '../adminlayout'


function table() {
    const[contactOption,setContactOption] = useState();
   const getData = async () => {
var data = await getContactOption();
await setContactOption(data);
   }

   const deleteRecord = async (id) =>{
   await deleteContactOption(id);
   var data = await getContactOption();
await setContactOption(data);
   }

useEffect(()=>{
getData()
},[]);

    return (



       <>
       <Adminlayout>

        <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Contact Option</h1>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <Link href="/contact-option/create" className="card-header py-3 align-self-end">
                    <h6 className="m-0 font-weight-bold  btn btn-primary">Create Contact Option </h6>
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
                                    <td className="text-center">Option</td>
                                    
                                
                              
                                    <td className="text-center">Actions</td>
                                </tr>
                            </thead>

                            <tbody>
                                {contactOption && (contactOption.data.map((option,index)=>{return(   <tr key={option}>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-center">{option.option}</td>
                                    <td className="text-center">
                                        <Link title="Edit Project" href={`/contact-option/edit?id=${option.id}`}>
                                             <i className="fas fa-file fa-fw" />
                                        </Link>
                                        <a  href="#" title="Delete Project" onClick={() => deleteRecord(option.id)}>
                                              <i className="fas fa-trash fa-fw" />
                                        </a>                           
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
export default table;