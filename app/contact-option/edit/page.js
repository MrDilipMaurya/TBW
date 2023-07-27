'use client'
import { useRouter } from "next/navigation";

import {useEffect,useState} from 'react';
import React from 'react'
import Adminlayout from '../../adminlayout';
import {updateContactOption, editContactOption} from '../../../api/contactOption'
function create({searchParams}) {
   const router = useRouter();

  const { id } =searchParams;
const [particularData,setParticularData] = useState();
const [formData,setFormData] = useState({option:''});

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
   await updateContactOption(id,formData);
   router.push('/contact-option');
  };
const getData = async () =>{
    var data = await editContactOption(id);
    await setParticularData(data);

}
    useEffect(()=>{
   getData();
    },[])
    return (
        <>
        <Adminlayout>
      <div className="container-fluid w-50 bg-white mt-4 py-3">
            <div className="text-center mb-5">
                <h4>
                    Contact Option  Edit
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}>
                <div className="form-group col-6">
                    <label htmlFor="exampleFormControlInput1">Option</label>
                   {particularData && (<input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter title"
                        name="option"
                        onChange={handleInput}
                        defaultValue={particularData.data['0']['option']}
                    />) } 
                </div>
                <button className="btn btn-primary">Update</button>
            </form>

                </div>
                </Adminlayout>
                </>
    )
}
export default create;