'use client'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {createServices} from '../../../api/services';
import Adminlayout from '../../adminlayout'
export default function create() {
    const router = useRouter();
    const [formData,setFormData] = useState({title:'',description:''});
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
       await createServices(formData);
       router.push('/service');
      };
    return (
        <>
        <Adminlayout>
        <div className="container-fluid w-50 bg-white mt-4 py-3">
            <div className="text-center mb-5">
                <h4>
                    Services  Create
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}>
                <div className="form-group col-6">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter title"
                        onChange={handleInput}
                        name="title"
                    />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="exampleFormControlInput1">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter description"
                        onChange={handleInput}
                        name="description"
                    />
                </div>



                <button className="btn btn-primary">Submit</button>
            </form>

                </div>
                </Adminlayout>
                </>
    )
}
