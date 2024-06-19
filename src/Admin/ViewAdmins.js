import React, { useEffect } from "react";
import "./Admin.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import AdminModal from "./AdminModal";
import DeleteModal from "../components/DeleteModal";

const ViewAdmins = () => {
    const data = {}

  useEffect(() => {
    document.title = "View Admins | Special Ride";
  }, []);

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AdminHeader />

        <AdminSidebar active={"admin"} />

        <div className="content-wrapper">
    <div className="container-xl">
        <div className="page-header d-print-none mt-2 mb-3">
            <div className="row align-items-center">
                <div className="col">
                    <div className="page-pretitle">
                        Overview
                    </div>
                    <h2 className="page-title">
                        Admins
                    </h2>
                </div>
            </div>
        </div>
    </div>

    <div className="page-body">
        <div className="container-xl">
            <div className="row row-deck row-cards">
                <div className="col-sm-12 col-lg-12">
                    <div className="card">
                    <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <h3 className="card-title">Manage Admins </h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="float-right">
                                            <AdminModal title={"Create"} claxx={"btn btn-success btn-sm"} icon={"nav-icon fa fa-plus mr-2"} mode={"create"} buttonText={"Add New"}/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        <div className="card-body">
                            <div className="px-2 py-2 table-responsive">
                                <table className="table table-hover text-nowrap jsgrid-table" id="table-plan">
                                    <thead>
                                        <tr>
                                            <th>SL.No</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th>Joined</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr>
                                            <td>1</td>
                                            <td><a
                                                    href="/">Shikaafi Taylor</a>
                                            </td>
                                            <td className="text-muted">
                                                shikaafitaylor1@gmail.com
                                            </td>
                                            <td className="text-muted text-capitalize">
                                                +233 1234567890
                                            </td>
                                            <td className="text-muted">
                                                June 10, 2024 12:00 AM
                                            </td>
                                            <td className="text-muted">
                                                <span className="badge bg-green">Active</span>
                                            </td>
                                         

                                            <td>

                                            <AdminModal title={"View"} claxx={"btn btn-sm btn-info mr-3"} icon={"nav-icon fa fa-eye mr-2"} mode={"view"} data={data} buttonText={"View"} />

                                            <AdminModal title={"Edit"} claxx={"btn btn-sm btn-warning mr-3"} icon={"nav-icon fa fa-edit mr-2"} mode={"edit"} data={data} buttonText={"Edit"} />
                                            <DeleteModal title={"Delete Admin"} content={"Are you sure you want to delete this item? This action cannot be undone."} claxx={"btn btn-sm btn-danger mr-3"}/>

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

</div>

        <AdminFooter />
      </div>
    </div>
  );
};

export default ViewAdmins;
