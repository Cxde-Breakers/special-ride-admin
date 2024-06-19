import React, { useEffect } from "react";
import "./Admin.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import SubcategoryModal from "./SubcategoryModal";
import DeleteModal from "../components/DeleteModal";

const ViewSubcategories = () => {
    const data = {
        subcategoryName: "Car",
        category: "Ride",
        status: "active",
        order: "0",
        image: "/assets/images/default-user.png"
    }

  useEffect(() => {
    document.title = "View Subcategories | Special Ride";
  }, []);

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AdminHeader />

        <AdminSidebar active={"subcategory"} />

        <div className="content-wrapper">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">Subcategory</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a
                                    href="">Dashboard</a></li>
                            <li className="breadcrumb-item active">Subcategory</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <h3 className="card-title">Subcategory List</h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="float-right">
                                        <SubcategoryModal title={"Create"} claxx={"btn btn-success btn-sm"} icon={"nav-icon fa fa-plus mr-2"} mode={"create"} buttonText={"Add New"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body table-responsive p-0">
                                <table id="dataTables" className="table table-hover text-nowrap jsgrid-table">
                                    <thead>
                                    <tr>
                                        <th >Sl</th>
                                        <th >Subcategory Name</th>
                                        <th >Category</th>
                                        <th >Order Number</th>
                                        <th >status</th>
                                        <th >Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                   
                                            <tr>
                                                <td>1</td>
                                                <td>Car</td>
                                                <td>Ride</td>
                                                <td>1</td>
                                                <td>
                                                    <span className="badge bg-success">
                                                        Active
                                                    </span>
                                                </td>
                                                <td>
                                                <SubcategoryModal title={"Edit"} claxx={"btn btn-sm btn-warning mr-3"} icon={"nav-icon fa fa-edit mr-2"} mode={"edit"} data={data} buttonText={"Edit"} />
                                                <DeleteModal title={"Delete Subcategory"} content={"Are you sure you want to delete this item? This action cannot be undone."} claxx={"btn btn-sm btn-danger mr-3"} />
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
};

export default ViewSubcategories;
