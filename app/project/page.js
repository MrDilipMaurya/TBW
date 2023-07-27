'use client';
import {useState,useEffect} from 'react';
import {getProjects,deleteProjects} from '../../api/project';
import Link from "next/link";
import Adminlayout from '../adminlayout'

export default function table() {
    const [Projects,setProjects] = useState();
    const getData = async () => {
        var opt = await getProjects();
        await setProjects(opt);
        console.log(opt);
    };
    const deleteRecord = async (id) =>{
        await deleteProjects(id);
        var data = await getProjects();
     await setProjects(data);
        }
    useEffect(() => { getData() }, []);
    return (

         <>
         <Adminlayout>

        <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Project</h1>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <Link href="/project/create" className="card-header py-3 align-self-end">
                    <h6 className="m-0 font-weight-bold  btn btn-primary">Create Project </h6>
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
                                    <td className="text-center">Project Name</td>
                                    <td className="text-center">Project Category</td>
                                    <td className="text-center">Project Image</td>
                                    <td className="text-center">Project Description</td>
                                    <td className="text-center">Order</td>
                                   
                                    <td className="text-center">Actions</td>
                                </tr>
                            </thead>

                            <tbody>
                                {Projects && (Projects.data.map((project,index)=>{return(  <tr key={index}>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-center">{project.project_name}</td>
                                    <td className="text-center">{project.project_category}</td>
                                    <td className="text-center"><img src={project.project_image} width='100px' height='100px'/></td>
                                    <td className="text-center">{project.project_description}</td>
                                    <td className="text-center">{project.order}</td>
                                    
                                    <td className="text-center">
                                        <Link title="Edit Project" href={`/project/edit?id=${project.id}`}>
                                             <i className="fas fa-file fa-fw" />
                                        </Link>
                                        <a href="#" onClick={()=>deleteRecord(project.id)}>
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