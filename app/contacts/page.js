'use client';
import {useState,useEffect} from 'react';
import {getContacts,deleteContacts} from '../../api/contact';
import Link from "next/link";
import Adminlayout from '../adminlayout'

export default function table() {
    const [Contacts,setContacts] = useState();
    const getData = async () => {
        var opt = await getContacts();
        await setContacts(opt);
        console.log(opt);
    };
    const deleteRecord = async (id) =>{
        await deleteContacts(id);
        var data = await getContacts();
     await setContacts(data);
        }
    useEffect(() => { getData() }, []);
    return (

        <>
            <Adminlayout>

                <div className="container-fluid">
                    {/* Page Heading */}
                    <h1 className="h3 mb-2 text-gray-800">Contact</h1>

                    {/* DataTales Example */}
                    <div className="card shadow mb-4">
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
                                            <td className="text-center">Contact Option/Technology</td>
                                            <td className="text-center">Contact Name</td>
                                            <td className="text-center">Contact Email</td>
                                            <td className="text-center">Contact Number</td>
                                            <td className="text-center">Contact Description</td>



                                            <td className="text-center">Actions</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Contacts && (Contacts.data.map((contact,index)=>{
return(<tr>
                                            <td className="text-center">{index + 1}</td>
                                            <td className="text-center">{contact.contact_option}</td>
                                            <td className="text-center">{contact.contact_name}</td>
                                            <td className="text-center">{contact.contact_email}</td>
                                            <td className="text-center">{contact.contact_number}</td>
                                            <td className="text-center">{contact.contact_description}</td>
                                            <td className="text-center">
                                                <Link title="Show contact" href={`/contacts/show?id=${contact.id}`}>
                                                    <i className="fas fa-eye fa-fw" />
                                                </Link>
                                                <a href="#" onClick={()=>deleteRecord(contact.id)}>
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