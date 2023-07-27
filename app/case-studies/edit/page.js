'use client'
import { useRouter } from "next/navigation";
import {useState,useEffect} from 'react';
import {editCaseStudies,updateCaseStudies} from '../../../apis/caseStudies';
import Adminlayout from '../../adminlayout'
export default function create({searchParams}) {
    const {id} =searchParams;
    const router = useRouter();
    var BannerImage = null;
    var BannerImageLogo = null;
    var MiddleBanner = null;
    var Thumbnail = null;

    
    const [Case,setCase] = useState();
    const [formData,setFormData] = useState({banner_image_title:'',banner_image_description:'',timeline:'',challenge:'',partnership_goal:'',before:'',after:'',about:'',country:'',industry:'',portfolio:'',our_partnership:'',label_1:'',label_1_value:'',label_2:'',label_2_value:'',description:'',link:'',thumbnail:'',order:''});
    const handleInput = (e) =>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue,
        }));
    }
    const BannerImageUpload = (event) => {
        BannerImage = event.target.files[0];
    }
    const BannerImageLogoUpload = (event) => {

        BannerImageLogo = event.target.files[0];
    }  
    const MiddleBannerUpload = (event) => {

        MiddleBanner = event.target.files[0];
    }
    const thumbnailUpload = (event) => {

        Thumbnail = event.target.files[0];
    }
    const submitForm = async (e) => {
        // We don't want the page to refresh
        e.preventDefault();
        console.log(formData);
       await updateCaseStudies(id,formData,BannerImage,BannerImageLogo,MiddleBanner,Thumbnail);
       router.push('/case-studies');
      };
      const getData = async () => {
var data = await editCaseStudies(id);
await setCase(data);
    setFormData({banner_image_title:data.data['0']['banner_image_title'],banner_image_description:data.data['0']['banner_image_description'],timeline:data.data['0']['timeline'],challenge:data.data['0']['challenge'],partnership_goal:data.data['0']['partnership_goal'],before:data.data['0']['before'],after:data.data['0']['after'],about:data.data['0']['about'],country:data.data['0']['country'],industry:data.data['0']['industry'],portfolio:data.data['0']['portfolio'],our_partnership:data.data['0']['our_partnership']});
      }
      useEffect(()=>{
getData();
      },[]);
    return (
        <>
        <Adminlayout>
         <div className="container-fluid w-100 bg-white mt-4 py-3">
                    <div className="text-center mb-5">
                        <h4>
                            Case studies  Edit
                        </h4>
                    </div>
                    <form method="post" onSubmit={submitForm}>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="BannerImage">Banner Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="BannerImage"
                                    id="BannerImage"
                                    onChange={BannerImageUpload}

                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="BannerImageLogo">Banner Image Logo</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    onChange={BannerImageLogoUpload}
                                    name="BannerImageLogo"

                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Banner Image Title</label>
                              {Case && (<input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter banner image title"
                                    onChange={handleInput}
                                    name="banner_image_title"
                                    defaultValue={Case.data['0']['banner_image_title']}
                                    required
                                />)}  
                            </div>

                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Banner Image Description</label>
                                {Case && (    <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter banner image description"
                                    onChange={handleInput}
                                    name="banner_image_description"
                                    required
                                    defaultValue={Case.data['0']['banner_image_description']}

                                />)}
                            </div>


                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Timeline</label>
                                {Case && (    <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter banner timeline"
                                    required
                                    onChange={handleInput}
                                    name="timeline"
                                    defaultValue={Case.data['0']['timeline']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Challenge</label>
                                {Case && (   <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter challenge"
                                    required
                                    onChange={handleInput}
                                    name="challenge"
                                    defaultValue={Case.data['0']['challenge']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Partnership goal</label>
                                {Case && (    <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter partnership goal"
                                    required
                                    onChange={handleInput}
                                    name="partnership_goal"
                                    defaultValue={Case.data['0']['partnership_goal']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Before</label>
                                {Case && (  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter before"
                                    required
                                    onChange={handleInput}
                                    defaultValue={Case.data['0']['before']}
                                    name="before"
                                />)}
                            </div>
                        </div>


                        <div className="row">
                            
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">About</label>
                                {Case && (  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter about"
                                    required
                                    onChange={handleInput}
                                    name="about"
                                    defaultValue={Case.data['0']['about']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Country</label>
                                {Case && (<input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter country"
                                    required
                                    onChange={handleInput}
                                    name="country"
                                    defaultValue={Case.data['0']['country']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Industry</label>
                                {Case && (   <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter industry"
                                    required
                                    onChange={handleInput}
                                    name="industry"
                                    defaultValue={Case.data['0']['industry']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Portfolio Data (JSON)</label>
                                {Case && (     <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="eg. {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}"
                                    accept="application/json"
                                    required
                                    onChange={handleInput}
                                    name="portfolio"
                                    defaultValue={Case.data['0']['portfolio']}

                                />)}
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Description</label>
                                {Case && (  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter description"
                                    required
                                    onChange={handleInput}
                                    name="description"
                                    defaultValue={Case.data['0']['description']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Thumbnail</label>
                                {Case && (<input
                                    type="file"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    
                                    
                                    onChange={thumbnailUpload}
                                    name="thumbnail"
                                

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Link</label>
                                {Case && (   <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter project link"
                                    required
                                    onChange={handleInput}
                                    name="link"
                                    defaultValue={Case.data['0']['link']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Order</label>
                                {Case && (     <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter order"
                                    
                                    required
                                    onChange={handleInput}
                                    name="order"
                                    defaultValue={Case.data['0']['order']}

                                />)}
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Label 1</label>
                                {Case && (  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter label 2"
                                    required
                                    onChange={handleInput}
                                    name="label_1"
                                    defaultValue={Case.data['0']['label_1']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Label 1 value</label>
                                {Case && (<input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter label 1 value"
                                    required
                                    onChange={handleInput}
                                    name="label_1_value"
                                    defaultValue={Case.data['0']['label_1_value']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Label 2 </label>
                                {Case && (   <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter label 2"
                                    required
                                    onChange={handleInput}
                                    name="label_2"
                                    defaultValue={Case.data['0']['label_2']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Label 2 value</label>
                                {Case && (     <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter label 2 value"
                       
                                    required
                                    onChange={handleInput}
                                    name="label_2_value"
                                    defaultValue={Case.data['0']['label_2_value']}

                                />)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">After</label>
                                {Case && (    <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter after"
                                    required
                                    onChange={handleInput}
                                    name="after"
                                    defaultValue={Case.data['0']['after']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Our partnership</label>
                                {Case && (  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter our partnership"
                                    required
                                    onChange={handleInput}
                                    name="our_partnership"
                                    defaultValue={Case.data['0']['our_partnership']}

                                />)}
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="MiddleBannerUpload">Middle Banner </label>
                                <input
                                    type="file"

                                    className="form-control"
                                    id="MiddleBannerUpload"
                                    name="MiddleBanner"
                                    onChange={MiddleBannerUpload}
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
