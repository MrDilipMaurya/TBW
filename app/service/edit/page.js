'use client'
import { useRouter } from "next/navigation";
import {useState,useEffect} from 'react';
import {editServices,updateServices} from '../../../api/services';
import Adminlayout from '../../adminlayout'
    function create({searchParams}){
        const [formData,setFormData] = useState({title:'',description:''});
        
        const router =useRouter();
        const [Services,setServices] = useState();
        const {id} = searchParams;
        const getData = async () =>{
          var data = await editServices(id);
        await setServices(data);
        await setFormData({title:data.data['0']['title'],description:data.data['0']['description']})  
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
           await updateServices(id,formData);
           router.push('/service');
          };
            useEffect(()=>{
        getData()
            },[]);
    return (
        <>
        <Adminlayout>
       <div className="container-fluid w-50 bg-white mt-4 py-3">
            <div className="text-center mb-5">
                <h4>
                    Services  Edit
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}>
                <div className="form-group col-6">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    {Services && (    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter title"
                        name='title'
                        onChange={handleInput}
defaultValue={Services.data['0']['title']}

/>)}        

                </div>
                <div className="form-group col-6">
                    <label htmlFor="exampleFormControlInput1">Description</label>
           {Services && ( <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter description"
                        name="description"
                        onChange={handleInput}
defaultValue={Services.data['0']['description']}
                    />)}        
                </div>



                <button className="btn btn-primary">Update</button>
            </form>

                </div>
            </Adminlayout>
            </>
    )
}
export default create;