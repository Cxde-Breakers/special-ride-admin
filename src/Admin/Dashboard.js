import React, { useEffect} from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";

const Dashboard = () =>{

    useEffect(() => {
        document.title = "Dashboard | Special Ride";
    },[])

    return(
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">

            <AdminHeader />

            <AdminSidebar active={"dashboard"} />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box link_color">
                                    <div className="info-box-content">
                                        <span className="info-box-text">Total Earnings</span>
                                        <span className="info-box-number">00</span>
                                    </div>
                                    <a href="/" className="stretched-link"></a>
                                </div>
                            </div>
            
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box link_color">
                                    <div className="info-box-content">
                                        <span className="info-box-text">Total Rides</span>
                                        <span className="info-box-number">10</span>
                                    </div>
                                    <a href="/" className="stretched-link"></a>
                                </div>
                            </div>
            
            
            
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box link_color">
                                    <div className="info-box-content">
                                        <span className="info-box-text">Total Bookings</span>
                                        <span className="info-box-number">10</span>
                                    </div>
                                    <a href="/" className="stretched-link"></a>
                                </div>
                            </div>
            
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box link_color">
                                    <div className="info-box-content">
                                        <span className="info-box-text">Total Countries</span>
                                        <span className="info-box-number">50</span>
                                    </div>
                                    <a href="#" className="stretched-link"></a>
                                </div>
                            </div>
            
                            
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box link_color">
                                    <div className="info-box-content">
                                        <span className="info-box-text">Total User</span>
                                        <span className="info-box-number">10</span>
                                    </div>
                                    <a href="/" className="stretched-link"></a>
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


export default Dashboard;