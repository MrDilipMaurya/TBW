'use client';
import Link from "next/link";
import { getProjectCategory,deleteProjectCategory } from '../../api/projectCategory'
import { useEffect, useState } from 'react';
import Adminlayout from '../adminlayout'

export default function table() {
    const [projectCategory,setProjectCategory] = useState();
    const getData = async () => {
        var opt = await getProjectCategory();
        await setProjectCategory(opt);
        console.log(opt);
    };
    const deleteRecord = async (id) =>{
        await deleteProjectCategory(id);
        var data = await getProjectCategory();
     await setProjectCategory(data);
        }
    useEffect(() => { getData() }, []);
      

    return (


          <>
          <Adminlayout>
        <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Project Category</h1>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <Link href="/project-category/create" className="card-header py-3 align-self-end">
                    <h6 className="m-0 font-weight-bold  btn btn-primary">Create Project Category</h6>
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
                                    <td className="text-center">Category</td>
                                    <td className="text-center">Description</td>
                                    <td className="text-center">Actions</td>
                                </tr>
                            </thead>

                            <tbody>

                                {projectCategory && (projectCategory.data.map((item) => {
                                    return (

                                        <tr key={item.id}>
                                            <td className="text-center">#</td>
                                            <td className="text-center">{item.category}</td>
                                            <td className="text-center">{item.description}</td>
                                            <td className="text-center">
                                                <Link href={`/project-category/edit?id=${item.id}`}><i className="fas fa-file fa-fw" /></Link>
                                                <a href="#" onClick={()=>deleteRecord(item.id)}>
                                                <i className="fas fa-trash fa-fw" /></a>
                                            </td>
                                        </tr>

                                    )
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