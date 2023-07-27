'use client'
import { useRouter } from "next/navigation";
import {useState,useEffect} from 'react';
import React from 'react'
import {editContacts} from '../../../api/contact';
import Adminlayout from '../../adminlayout'
function create({searchParams}){
const [Contacts,setContacts] = useState();
const {id} = searchParams;
const getData = async () =>{
  var data = await editContacts(id);
await setContacts(data);
}
    useEffect(()=>{
getData()
    },[]);
    return (
        <Adminlayout>
        <div className="container-fluid w-50 bg-white mt-4 py-3">
            <div className="text-center mb-5">
                <h4>
                     Show Contacts
                </h4>
            </div>
               <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Contact Option:- </label>
                    {Contacts && (Contacts.data['0']['contact_option'] )}
                </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Contact Name:- </label>
                    {Contacts && (Contacts.data['0']['contact_name'] )}
                </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Contact Email:- </label>
                    {Contacts && (Contacts.data['0']['contact_email'] )}
                </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Contact Number:- </label>
                    {Contacts && (Contacts.data['0']['contact_number'] )}
                </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Contact Description:- </label>
                    {Contacts && (Contacts.data['0']['contact_description'] )}
                </div>
        </div>
        </Adminlayout>

    )
}
export default create;