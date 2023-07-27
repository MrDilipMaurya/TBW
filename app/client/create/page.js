'use client'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';
import {createClients} from '../../../api/client';

import Adminlayout from '../../adminlayout'
export default function create() {
    const router = useRouter();
    var selectedFile = null;
    const handleFileUpload = (event) => {
        selectedFile = event.target.files[0];
    }

    let orderNum=0;
    const handleInput=(event)=>{
       orderNum=event.target.value;
    }
    const submitForm = async (e) => {
        // We don't want the page to refresh
        e.preventDefault();
       var res=await createClients(orderNum,selectedFile);
       console.log(res);
       router.push('/client');
      };
    return (
        <>
            <Adminlayout>
        <div className="container-fluid w-50 bg-white mt-4 py-3">
            <div className="text-center mb-5">
                <h4>
                    Client  Create
                </h4>
            </div>
            <form method="post" onSubmit={submitForm}>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="File">Client Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="File"
                            name="client_image"
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
                            id="order"
                            name="order"
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
