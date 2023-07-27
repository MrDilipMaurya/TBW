'use client';
import { useRouter } from "next/navigation";
import {useState,useEffect} from 'react';
import {editCaseStudies,updateCaseStudies} from '../../../api/caseStudies';
import Link from "next/link";
import Adminlayout from '../../adminlayout'

export default function table({searchParams}) {
    const [Case,setCase] = useState();
    const {id} =searchParams;
    const router = useRouter();
    const getData = async () => {
        var data = await editCaseStudies(id);
        await setCase(data);
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
                            Case studies Detail
                        </h4>
                    </div>
                    
                       {Case && (<div className="row border p-2">
                        <div className="col-6">
                            <ul class="list-group"><li class="list-group-item"><strong>Banner Image: </strong><img src={Case.data['0']['banner_image']} width="100px" height="100px"/> </li><li class="list-group-item"><strong>Banner Image Logo: </strong><img src={Case.data['0']['banner_image_logo']} width="100px" height="100px"/></li><li class="list-group-item"><strong>Banner Image Title: </strong>{Case.data['0']['banner_image_title']}</li><li class="list-group-item"><strong>Banner Image Description: </strong>{Case.data['0']['banner_image_description']}</li><li class="list-group-item"><strong>About : </strong>{Case.data['0']['about']}</li><li class="list-group-item"><strong>Country: </strong>{Case.data['0']['country']}</li><li class="list-group-item"><strong>Industry: </strong>{Case.data['0']['industry']}</li>
                            <li class="list-group-item"><strong>Timeline: </strong>{Case.data['0']['timeline']}</li>
                            <li class="list-group-item"><strong>Label 1: </strong>{Case.data['0']['label_1']}</li>
                            <li class="list-group-item"><strong>Label 1 value: </strong>{Case.data['0']['label_1_value']}</li>
                            <li class="list-group-item"><strong>Label 2 : </strong>{Case.data['0']['label_2']}</li>
                            <li class="list-group-item"><strong>Label 2 value: </strong>{Case.data['0']['label_2_value']}</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                            <li class="list-group-item"><strong>Challenge: </strong>{Case.data['0']['challenge']}</li>
                            <li class="list-group-item"><strong>PartnerShip Goal: </strong>{Case.data['0']['partnership_goal']}</li>
                            <li class="list-group-item"><strong>Before: </strong>{Case.data['0']['before']}</li>
                            <li class="list-group-item"><strong>After: </strong>{Case.data['0']['after']}</li>
                            <li class="list-group-item"><strong>Middle Banner: </strong><img src={Case.data['0']['middle_banner']} width="100px" height="100px"/></li>
                            <li class="list-group-item"><strong>Our Partnership: </strong>{Case.data['0']['our_partnership']}</li>
                            <li class="list-group-item"><strong>Portfolio: </strong>{Case.data['0']['portfolio']}</li>
                            <li class="list-group-item"><strong>Thumnnail: </strong><img src={Case.data['0']['thumbnail']} width="100px" height="100px"/> </li>
                            <li class="list-group-item"><strong>Description: </strong>{Case.data['0']['description']}</li>
                            <li class="list-group-item"><strong>Link: </strong>{Case.data['0']['link']}</li>
                            
                            <li class="list-group-item"><strong>Order: </strong>{Case.data['0']['order']}</li>
                            </ul>
                        </div>

                         
                        </div>)} 
                            
                            


                        
              
                </div>
          </Adminlayout>
          </>


    )
}