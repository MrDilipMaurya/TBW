'use client'
import Link from "next/link";
import { getCaseStudies,deleteCaseStudies } from '../../api/caseStudies'
import { useEffect, useState } from 'react';
import Adminlayout from '../adminlayout'

export default function table() {
    const [Case,setCase] = useState();
    const getData = async () => {
        var opt = await getCaseStudies();
        await setCase(opt);
    };
    const deleteRecord = async (id) =>{
        await deleteCaseStudies(id);
        var data = await getCaseStudies();
     await setCase(data);
        }
    useEffect(() => { getData() }, []);
    return (

         <>
         <Adminlayout>

        <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Case Studies</h1>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <Link href="/case-studies/create" className="card-header py-3 align-self-end">
                    <h6 className="m-0 font-weight-bold  btn btn-primary">Create case studies </h6>
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
                                    <td className="text-center">Banner Image</td>
                                    <td className="text-center">Banner Image Title</td>
                                    <td className="text-center">Middle Banner</td>
                                    <td className="text-center">order</td>
                                    <td className="text-center">Actions</td>
                                    
                                 
                                </tr>
                            </thead>

                            <tbody>
                            {Case && (Case.data.map((item,index) => {
                                    return (
                                <tr>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-center"><img src={item.banner_image} width="100px" height="100px"/></td>
                                    <td className="text-center">{item.banner_image_title}</td>
                                    <td className="text-center"><img src={item.middle_banner} width="100px" height="100px"/></td>
                                    <td className="text-center">{item.order}</td>
                                   
                                    
                                    <td className="text-center">
                                        <Link title="Edit case studies" href={`/case-studies/edit?id=${item.id}`}>
                                             <i className="fas fa-file fa-fw" />
                                        </Link>
                                        <Link title="Edit case studies" href={`/case-studies/show?id=${item.id}`}>
                                             <i className="fas fa-eye fa-fw" />
                                        </Link>
                                        <a href="#" onClick={()=>deleteRecord(item.id)}>
                                                <i className="fas fa-trash fa-fw" /></a>
                                       
                                      
                                    </td>

                                </tr>)}))}


                              
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