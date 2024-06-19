import React, { useEffect} from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import FaqModal from "./FaqModal";
import DeleteModal from "../components/DeleteModal";

const ViewFaqs = () =>{
    const data = {
        question: "Lorem Ipsum is simply dummy ?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        status: "active",
        order: "5"
    }

    useEffect(() => {
        document.title = "View FAQs | Special Ride";
    },[])


    return(
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">

            <AdminHeader />

            <AdminSidebar active={"faq"} />

            <div className="content-wrapper">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">FAQ List</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                            <li className="breadcrumb-item active">FAQ List</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <h3 className="card-title">Manage Faq </h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="float-right">
                                            <FaqModal title={"Create"} claxx={"btn btn-success btn-sm"} icon={"nav-icon fa fa-plus mr-2"} mode={"create"} buttonText={"Add New"}/>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="card-body table-responsive p-0">
                                <table id="myTable" className="table table-hover text-nowrap jsgrid-table">
                                    <thead>
                                        <tr>
                                            <th>SL</th>
                                            <th>Order Number</th>
                                            <th>Question</th>
                                            <th>Answer</th>
                                            <th>Published Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="text-center">1</td>
                                                <td>Lorem Ipsum is simply dummy ?</td>
                                                <td>Lorem Ipsum is simply dummy text of the printing a...</td>
                                                <td><span className="badge badge-success">Active</span></td>

                                                <td>
                                                    <FaqModal title={"View"} claxx={"btn btn-sm btn-info mr-3"} icon={"nav-icon fa fa-eye mr-2"} mode={"view"} data={data} buttonText={"View"} />

                                                    <FaqModal title={"Edit"} claxx={"btn btn-sm btn-warning mr-3"} icon={"nav-icon fa fa-edit mr-2"} mode={"edit"} data={data} buttonText={"Edit"} />
                                                    <DeleteModal title={"Delete FAQ"} content={"Are you sure you want to delete this item? This action cannot be undone."} claxx={"btn btn-sm btn-danger mr-3"}/>

                                                    {/* <a href="/" id="deleteData" className="btn btn-sm btn-danger btn-sm">Delete</a> */}

                                                </td>
                                            </tr>
                                    
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


            <AdminFooter />

            </div>
        </div>
    );
}


export default ViewFaqs;