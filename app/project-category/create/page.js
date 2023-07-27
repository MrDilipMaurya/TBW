'use client'
import {useState} from 'react'
import {useRouter} from 'next/navigation';
import {createProjectCategory} from '../../../api/projectCategory';
import Adminlayout from '../../adminlayout'
export default function create() {
    const router = useRouter();
    const [formData,setFormData] = useState({category:'',description:''});
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
       await createProjectCategory(formData);
       router.push('/project-category');
      };
    return (
        <>
        <Adminlayout>
        <div className="container-fluid w-50 bg-white mt-4 py-3">
            <div className="text-center mb-5">
                <h4>
                     Project Category Create
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter category"
                        name='category'
                        onChange={handleInput}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        onChange={handleInput}
                        name='description'
                        placeholder="enter description"
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>

                </div>
            </Adminlayout>
        </>
    )
}
