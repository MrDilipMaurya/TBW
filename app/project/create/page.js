'use client'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';
import {createProjects} from '../../../api/project';
import {getProjectCategory} from '../../../api/projectCategory';

import Adminlayout from '../../adminlayout'
export default function create() {
    const router = useRouter();
    var selectedFile = null;
    const [category,setCategory] = useState();
    const [formData,setFormData] = useState({project_name:'',project_description:'',project_category:'',label_1:'',label_2:'',label_1_value:'',label_2_value:'',link:'',tag:'',order:''});
    const handleInput = (e) =>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue,
        }));
    }
    const handleFileUpload = (event) => {
        selectedFile = event.target.files[0];
    }
    const submitForm = async (e) => {
        // We don't want the page to refresh
        e.preventDefault();
        console.log(formData);
       await createProjects(formData,selectedFile);
       router.push('/project');
      };
      const getData = async () =>{
        var data = await getProjectCategory();
await setCategory(data);
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
                    Project  Create
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Project Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter project name"
                            name="project_name"
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlForfor="exampleFormControlSelect1">Project Category</label>
                        <select className="form-control" id="exampleFormControlSelect1" name="project_category" onChange={handleInput}>
                            {category && (category.data.map((cat,index)=>{return(<option key={index} value={cat.category}>{cat.category}</option>)
}))
                        }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="File">Project Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="File"
                            name="project_image"
                            onChange={handleFileUpload}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Project Description</label>
                        <textarea

                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter project description"
                            name="project_description"
                            onChange={handleInput}
                        ></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Link</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter website address"
                            name="link"
                            onChange={handleInput}
                        />
                    </div>
                    </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Order</label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter order number"
                            name="order"
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">tag</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter tag1,tag2,tag3 ..."
                            name="tag"
                            onChange={handleInput}
                        />
                    </div>
                    </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Label 1</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter label 1"
                            name="label_1"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Label 2</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter label 2"
                            name="label_2"
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Label 1 value</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter label 1 value"
                            name="label_1_value"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Label 2 value</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter label 2 value"
                            name="label_2_value"
                            onChange={handleInput}
                        />
                    </div>
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>

                </div>
            </Adminlayout>
        </>
    )
}
