'use client'
import { useRouter } from "next/navigation";
import {useState,useEffect} from 'react';
import {updateClients,editClients} from '../../../api/client';
import Adminlayout from '../../adminlayout'
export default function create({searchParams}) {
    var selectedFile = null;
const handleFileUpload = (event) => {
    selectedFile = event.target.files[0];
}

    const [orderNum,setorderNum] = useState();
    const router =useRouter();
    const [Clients,setClients] = useState();
    const {id} = searchParams;
     const getData = async () =>{
        var data = await editClients(id);
       
        await setorderNum(data.data[0]['order']);
        
        }
   
    const handleInput = async (e)=>{
          await setorderNum(e.target.value);
    }
        useEffect(()=>{
    getData()
        },[]);
    const submitForm = async (e) => {
        // We don't want the page to refresh
        e.preventDefault();
       await updateClients(id,orderNum,selectedFile);
       router.push('/client');
      };
    return (
        <>
        <Adminlayout>
        <div className="container-fluid w-50 bg-white mt-4 py-3">
            <div className="text-center mb-5">
                <h4>
                    Client  Edit
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="exampleFormControlInput1">Clients Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="exampleFormControlInput1"
                            onChange={handleFileUpload}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="order">Order</label>
                        <input
                            type="number"
                            className="form-control"
                            defaultValue={orderNum}
                            id="order"
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <button className="btn btn-primary">Update</button>
            </form>

        </div>
        </Adminlayout>
        </>
    )
}
