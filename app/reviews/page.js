'use client';
import {useState,useEffect} from 'react';
import {getReviews,deleteReviews} from '../../api/reviews';
import Link from "next/link";
import Adminlayout from '../adminlayout'

export default function table() {
    const [Reviews,setReviews] = useState();
    const getData = async () => {
        var opt = await getReviews();
        await setReviews(opt);
        console.log(opt);
    };
    const deleteRecord = async (id) =>{
        await deleteReviews(id);
        var data = await getReviews();
     await setReviews(data);
        }
    useEffect(() => { getData() }, []);
      

    return (

        <>
            <Adminlayout>
                <div className="container-fluid">
                    {/* Page Heading */}
                    <h1 className="h3 mb-2 text-gray-800">Reviews</h1>

                    {/* DataTales Example */}
                    <div className="card shadow mb-4">
                        <Link href="/reviews/create" className="card-header py-3 align-self-end">
                            <h6 className="m-0 font-weight-bold  btn btn-primary">Create Reviews </h6>
                        </Link>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table
                                    className="table table-bordered"
                                    id="dataTable"
                                    width="100%"
                                    cellSpacing={0}
                                >
                                    <thead>
                                        <tr>
                                            <td className="text-center">Sno</td>
                                            <td className="text-center">Star Rating</td>
                                            <td className="text-center">Comment</td>
                                            <td className="text-center">Client Name</td>
                                            <td className="text-center">Review Contact Status</td>
                                            <td className="text-center">Client Description</td>

                                            <td className="text-center">Actions</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Reviews && (Reviews.data.map((review,index)=>{
                                            return(
                                                <tr >
                                                <td className="text-center">{index + 1 }</td>
                                                <td className="text-center">{review.star_rating}</td>
                                                <td className="text-center">{review.comment}</td>
                                                <td className="text-center">{review.client_name}</td>
                                                <td className="text-center">{review.is_contact_review}</td>
                                                <td className="text-center">{review.client_description}</td>
    
                                                <td className="text-center">
                                                    <Link title="Edit Project" href={`/reviews/edit?id=${review.id}`}>
                                                        <i className="fas fa-file fa-fw" />
                                                    </Link>
                                                    <a href="#" onClick={()=>deleteRecord(review.id)}>
                                                <i className="fas fa-trash fa-fw" /></a>
    
    
                                                </td>
    
                                            </tr>
                                            )
                                        }))}
                                        



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </Adminlayout>
        </>

    )
}