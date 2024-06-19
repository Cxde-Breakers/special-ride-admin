import React, { useEffect } from "react";
import "./Admin.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import DriverModal from "./DriverModal";
import DeleteModal from "../components/DeleteModal";

const ViewDrivers = () => {
    const data = {}

  useEffect(() => {
    document.title = "View Drivers | Special Ride";
  }, []);

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AdminHeader />

        <AdminSidebar active={"driver"} />

        <div className="content-wrapper">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">

                        <h1 className="m-0">Driver</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                            <li className="breadcrumb-item active">Driver</li>
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
                                        <h3 className="card-title">Driver List</h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="float-right">
                                        <DriverModal title={"Create"} claxx={"btn btn-success btn-sm"} icon={"nav-icon fa fa-plus mr-2"} mode={"create"} buttonText={"Add New"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body table-responsive p-0">
                                <table id="dataTables" className="table table-hover text-nowrap jsgrid-table">
                                    <thead>
                                    <tr>
                                        <th>Sl</th>
                                        
                                        <th >User</th>
                                        <th>Email</th>
                                        <th>Veh</th>
                                        <th>Registration date</th>
                                        <th>Total Ride</th>
                                        <th >Country</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                      
                                        <tr>
                                          <td><div className="float-left p-2">
                                            <img src="/assets/images/default-user.png" className="border rounded-circle" alt="Image" width="50" height="50" />
                                        </div>
                                    </td>
                                            
                                            <td>
                                                
                                                <div>
                                                Name: Abel Mawuko
                                                </div>
                                                <div>
                                                Phone: 9793859475
                                                </div>

                                                <div>
                                                    Reg. No: 1234567890
                                                </div>
                                                <div>
                                                    Plate No: 1234567890
                                                </div>
                                                <div>
                                                Balance: 5,001.00 INR 
                                                </div>
                                                

                                            </td>
                                            
                                            <td>tempdriver@gmail.com</td>
                                            <td>N/A</td>

                                            <td>
                                                10 Aug 2023 
                                            </td>
                                            <td>0</td>
                                            <td>Bangladesh</td>

                                            <td>

                                           
                                               

                                                <DriverModal title={"Add Credit"} claxx={"btn btn-sm btn-secondary mr-3"} icon={"nav-icon fa fa-money-bill mr-2"} mode={"credit"} buttonText={"Add Credit"} />

                                           

                                                <DriverModal title={"View"} claxx={"btn btn-sm btn-info mr-3"} icon={"nav-icon fa fa-eye mr-2"} mode={"view"} data={data} buttonText={"View"} />
                                                <DriverModal title={"Edit"} claxx={"btn btn-sm btn-warning mr-3"} icon={"nav-icon fa fa-edit mr-2"} mode={"edit"} data={data} buttonText={"Edit"} />
                                                <DeleteModal title={"Delete Driver"} content={"Are you sure you want to delete this item? This action cannot be undone."} claxx={"btn btn-sm btn-danger mr-3"}/>
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

export default ViewDrivers;
