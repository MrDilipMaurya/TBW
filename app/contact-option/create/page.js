'use client'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link'
import { createContactOption } from '../../../api/contactOption';
import Adminlayout from "../../adminlayout.js";
export default function create() {
    const router = useRouter;
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
   await createContactOption(formData);
   router.push('/contact-option');
  };
    return (
       <>

        <Adminlayout>

        <div className="container-fluid w-50 bg-white mt-4 py-3">

            <div className="text-center mb-5">
                <h4>
                    Contact Option  Create
                </h4>
            </div>
       
            <form method="post" 
             onSubmit={submitForm}
            >
                <div className="form-group col-6">
                    <label htmlFor="exampleFormControlInput1">Option</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter title"
                        name="option"
                        onChange={handleInput}
                    />
                </div>




                <button className="btn btn-primary">Submit</button>
            </form>

        </div>
        </Adminlayout>
       </>
    )
}
