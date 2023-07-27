'use client'
import {useState} from 'react'
import {useRouter} from 'next/navigation';
import {createCaseStudies} from '../../../api/caseStudies';
import Adminlayout from '../../adminlayout'
export default function create() {
    const router = useRouter();
    var BannerImage = null;
    var BannerImageLogo = null;
    var MiddleBanner = null;
    var Thumbnail = null;
    const [formData,setFormData] = useState({banner_image_title:'',banner_image_description:'',timeline:'',challenge:'',partnership_goal:'',before:'',after:'',about:'',country:'',industry:'',portfolio:'',our_partnership:'',banner_image:'',banner_image_logo:'',middle_banner:'',label_1:'',label_1_value:'',label_2:'',label_2_value:'',description:'',link:'',thumbnail:'',order:''});
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
        const result = await createCaseStudies(formData,BannerImage,BannerImageLogo,MiddleBanner,Thumbnail);

       router.push('/case-studies');
      };
    return (
        <>
            <Adminlayout>
                <div className="container-fluid w-100 bg-white mt-4 py-3">
                    <div className="text-center mb-5">
                        <h4>
                            Case studies  Create
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
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter banner image title"
                                    onChange={handleInput}
                                    name="banner_image_title"
                                    required
                                />
                            </div>

                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Banner Image Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter banner image description"
                                    onChange={handleInput}
                                    name="banner_image_description"
                                    required
                                />
                            </div>


                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Timeline</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter banner timeline"
                                    required
                                    onChange={handleInput}
                                    name="timeline"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Challenge</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter challenge"
                                    required
                                    onChange={handleInput}
                                    name="challenge"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Partnership goal</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter partnership goal"
                                    required
                                    onChange={handleInput}
                                    name="partnership_goal"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Before</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter before"
                                    required
                                    onChange={handleInput}
                                    name="before"
                                />
                            </div>
                        </div>


                        <div className="row">
                            
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">About</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter about"
                                    required
                                    onChange={handleInput}
                                    name="about"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter country"
                                    required
                                    onChange={handleInput}
                                    name="country"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Industry</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter industry"
                                    required
                                    onChange={handleInput}
                                    name="industry"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Portfolio Data (JSON)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="eg. {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}"
                                    accept="application/json"
                                    required
                                    onChange={handleInput}
                                    name="portfolio"
                                />
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter description"
                                    required
                                    onChange={handleInput}
                                    name="description"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">thumbnail</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    
                                   
                                    onChange={thumbnailUpload}
                                    name="thumbnail"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Link</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter project link"
                                    required
                                    onChange={handleInput}
                                    name="link"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Order</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter order "
                                    required
                                    onChange={handleInput}
                                    name="order"
                                />
                            </div>
                          
                        </div>
                        <div className="row">
                            
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Label 1</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter label 1"
                                    required
                                    onChange={handleInput}
                                    name="label_1"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Label 1 value</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter label 1 value"
                                    required
                                    onChange={handleInput}
                                    name="label_1_value"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Label 2</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter label 2"
                                    required
                                    onChange={handleInput}
                                    name="label_2"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Label 2 value</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter label  value"
                                    
                                    
                                    onChange={handleInput}
                                    name="label_2_value"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">After</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter after"
                                    required
                                    onChange={handleInput}
                                    name="after"
                                />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exampleFormControlInput1">Our partnership</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter our partnership"
                                    required
                                    onChange={handleInput}
                                    name="our_partnership"
                                />
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
