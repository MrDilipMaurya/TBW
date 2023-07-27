'use client'
import { useRouter } from "next/navigation";
import {useState,useEffect} from 'react';
import React from 'react'
import {editProjectCategory,updateProjectCategory} from '../../../api/projectCategory';
import Adminlayout from '../../adminlayout'

function create({searchParams}){
const [formData,setFormData] = useState({category:'',description:''});

const router =useRouter();
const [projectCat,setProjectCat] = useState();
const {id} = searchParams;
const getData = async () =>{
  var data = await editProjectCategory(id);
await setProjectCat(data);
await setFormData({category:data.data['0']['category'],description:data.data['0']['description']})  
}

const handleInput = (e) =>{
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
}
const submitForm = async (e) => {
    // We don't want the page to refresh
    e.preventDefault();
    console.log(formData);
   await updateProjectCategory(id,formData);
   router.push('/project-category');
  };
    useEffect(()=>{
getData()
    },[]);
    return (
        <Adminlayout>
        <div className="container-fluid w-50 bg-white mt-4 py-3">
            <div className="text-center mb-5">
                <h4>
                     Project Category Edit
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}>
               <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Category</label>
                    {projectCat && (   <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter category"
                        required
                        name="category"
                        onChange={handleInput}
                        defaultValue={projectCat.data['0']['category']}
                    />)}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Description</label>
                    {projectCat && (  <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter description"
                        name='description'
                        onChange={handleInput}
                        defaultValue={projectCat.data['0']['description']}

                    />)} 
                </div>
                <button className="btn btn-primary">Update</button>
            </form>

        </div>
        </Adminlayout>

    )
}
export default create;