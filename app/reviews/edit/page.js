'use client'
import {useEffect,useState} from 'react';
import {useRouter} from 'next/navigation';
import {editReviews,updateReviews} from '../../../api/reviews';
import Adminlayout from '../../adminlayout'
export default function create({searchParams}) {
    var selectedFile = null;
    const [Status,setStatus] = useState(false);
    const statusChange = (e) =>{
        e.preventDefault;
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: !Status,
        }));
       setStatus(!Status);
    }
    const handleFileUpload = (event) => {
        selectedFile = event.target.files[0];
    }
    const {id} = searchParams;
    const router = useRouter();
    const [formData,setFormData] = useState({
        star_rating: "",
        client_name: "",
        client_description: "",
        comment: ""
      });
      const [review,setReview] = useState();
    const handleInput = (e) =>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue,
        }));
    }
    const getData = async () =>{
        var data = await editReviews(id);
        await setReview(data);
      await setFormData({client_name:data.data['0']['client_name'],client_description:data.data['0']['client_description'],comment:data.data['0']['comment'],star_rating:data.data['0']['star_rating'],is_contact_review:data.data['0']['is_contact_review']})  
      if(data.data['0']['is_contact_review'] == 'true'){
         setStatus(!Status);
      }
    }
    const submitForm = async (e) => {
        // We don't want the page to refresh
        e.preventDefault();
        console.log(formData);
       await updateReviews(id,formData,selectedFile);
       router.push('/reviews');
      };
      useEffect(()=>{
getData();
      },[])
    return (
           <>
        <Adminlayout>
        <div className="container-fluid w-50 bg-white mt-4 py-3">
            <div className="text-center mb-5">
                <h4>
                    Reviews  Edit
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}> 
                <div className="row">

                    <div className="form-group col-6">
                        <label htmlForfor="exampleFormControlSelect1">Star Rating</label>
                    {review && ( <select className="form-control" id="exampleFormControlSelect1" name="star_rating" onChange={handleInput} defaultValue={review.data['0']['star_rating']}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>)}   
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Client Name</label>
                    {review && ( <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="enter client name"
                            onChange={handleInput}
                            name="client_name"
                            defaultValue={review.data['0']['client_name']}
                        />)}   
                    </div>

                </div>
                <div className="form-group ">
                    <label htmlFor="exampleFormControlInput1">Client Description</label>
                    {review && (       <textarea

                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter client description"
                        onChange={handleInput}
                        name="client_description"
                        defaultValue={review.data['0']['client_description']}

                    ></textarea>)}
                </div>
                <div className="form-group ">
                    <label htmlFor="exampleFormControlInput1">Comment</label>
                    {review && (    <textarea

                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder='enter comment'
                        onChange={handleInput}
                        name="comment"
                        defaultValue={review.data['0']['comment']}

                    ></textarea>)}
                </div>
                <div className="form-group col-6">
                <label htmlFor="exampleFormControlInput1 inline-block">Contact Review</label>
                        {review && (<input class="form-check-input mx-5" type="checkbox"  value='yes' name='is_contact_review' id="exampleFormControlInput1" checked={Status ? true : false} onChange={statusChange} />)}
                    </div>
                    {Status && (  <div className="form-group col-6">
                        <label htmlFor="exampleFormControlInput1">Image Upload</label>
                      <input
                            type="file"
                            className="form-control"
                            id="File"
                            placeholder="enter client name"
                            onChange={handleFileUpload}
                            name="client_name"
                        /> 
                    </div>)} 
                <button className="btn btn-primary">Submit</button>
            </form>

        </div>
        </Adminlayout>
           </>

    )
}
