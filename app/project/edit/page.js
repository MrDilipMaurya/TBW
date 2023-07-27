'use client'
import { useRouter } from "next/navigation";
import {useState,useEffect} from 'react';
import {editProjects,updateProjects} from '../../../api/project';
import {getProjectCategory} from '../../../api/projectCategory';
import Adminlayout from '../../adminlayout'
export default function create({searchParams}) {
    const [category,setCategory] = useState();

    const [formData,setFormData] = useState({project_name:'',project_description:'',project_category:'',revenue_generated:'',tickets_booked:'',link:'',tag:'',order:''});
var selectedFile = null;
const handleFileUpload = (event) => {
    selectedFile = event.target.files[0];
}
    const router =useRouter();
    const [projects,setProjects] = useState();
    const {id} = searchParams;
    const getData = async () =>{
      var data = await editProjects(id);
    await setProjects(data);
    await setFormData({project_name:data.data['0']['project_name'],project_description:data.data['0']['project_description'],project_category:data.data['0']['project_category'],label_1:data.data['0']['label_1'],label_1_value:data.data['0']['label_1_value'],label_2_value:data.data['0']['label_2_value'],label_2:data.data['0']['label_2'],link:data.data['0']['link']})  
  var data2 = await getProjectCategory();
    await setCategory(data2);
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
       await updateProjects(id,formData,selectedFile);
       router.push('/project');
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
                    Project  Edit
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">projects Name</label>
                       {projects && (<input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter project name"
                            onChange={handleInput}
                            defaultValue={projects.data['0']['project_name']}
                            required
                        />)} 
                    </div>
                    <div className="form-group col-6">
                        <label htmlForfor="exampleFormControlSelect1">projects Category</label>
                        {projects && (    <select className="form-control" id="exampleFormControlSelect1"  onChange={handleInput} 
                            defaultValue={projects.data['0']['project_category']}
                            >
                            {category && (category.data.map((cat,index)=>{return(<option key={index} value={cat.category}>{cat.category}</option>)
}))
                        }
                        </select>)}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">projects Image</label>
                        {projects && (    <input
                            type="file"
                            className="form-control"
                            id="exampleFormControlInput1"
                            onChange={handleFileUpload}
                        />)}
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">projects Description</label>
                        {projects && (      <textarea

                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter project description"
                            name="project_description"
                            defaultValue={projects.data['0']['project_description']}
                            onChange={handleInput} 

                        ></textarea>)}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Link</label>
                    {projects && (    <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter website address"
                            name="link"
                            defaultValue={projects.data['0']['link']}
                            onChange={handleInput}
                        />)}
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
                                    defaultValue={projects?.data['0']['order']}
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Tag</label>
                    {projects && (    <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter tag1,tag2,tag3..."
                            name="tag"
                            defaultValue={projects.data['0']['tag']}
                            onChange={handleInput}
                        />)}
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Label 1</label>
                        {projects && (    <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter label 1"
                            name="label_1"
                            defaultValue={projects.data['0']['label_1']}
                            onChange={handleInput} 

                        />)}
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Label 2</label>
                        {projects && (     <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter label 2"
                            name="label_2"
                            defaultValue={projects.data['0']['label_2']}
                            onChange={handleInput} 

                        />)}
                    </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Label 1 value</label>
                        {projects && (    <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter label 1 value"
                            name="label_1"
                            defaultValue={projects.data['0']['label_1_value']}
                            onChange={handleInput} 

                        />)}
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Label 2 value</label>
                        {projects && (     <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter label 2 value"
                            name="label_2"
                            defaultValue={projects.data['0']['label_2_value']}
                            onChange={handleInput} 

                        />)}
                    </div>
                </div>
                </div>

                <button className="btn btn-primary">Update</button>
            </form>

        </div>
        </Adminlayout>
        </>
    )
}
