import React, { useEffect} from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";

const Settings = () =>{

    useEffect(() => {
        document.title = "Settings | Special Ride";
    },[])

    return(
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">

            <AdminHeader />

            <AdminSidebar active={"setting"} />

            <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">General Settings</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item active">Settings</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                       
                        <div className="col-lg-12">
                            <form action="/" method="post"
                                enctype="multipart/form-data" id="settingUpdate">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="m-0">Settings</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="card-title">Site Settings</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-xl-4">
                                                                <img src="../assets/logo.png" height="50px" alt="default" />
                                                                <div className="mb-3">
                                                                    <label className="form-label">Site Logo<span
                                                                            className="text-danger">
                                                                            Recommended size : 180x60</span>
                                                                    </label>
                                                                    <input type="file" className="form-control" name="site_logo"
                                                                        placeholder="Site Logo..."
                                                                        accept=".png,.jpg,.jpeg,.gif,.svg" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-xl-4">
                                                                <img src="../assets/logo.png"
                                                                    height="50px" alt="default" />
    
                                                                <div className="mb-3">
                                                                    <div className="form-label">Admin Logo<span className="text-danger">Recommended size : 180x60</span>
                                                                    </div>
                                                                    <input type="file" className="form-control" name="admin_logo"
                                                                        placeholder="Admin logo.."
                                                                        accept=".png,.jpg,.jpeg,.gif,.svg" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-xl-4">
    
                                                                <img src="../assets/logo.png"
                                                                    height="50px" alt="default" />
    
                                                                <div className="mb-3">
                                                                    <label className="form-label">SEO image<span
                                                                            className="text-danger">
                                                                            Recommended size : 728x680</span>
                                                                    </label>
                                                                    <input type="file" className="form-control" name="seo_image"
                                                                        placeholder="SEO image..."
                                                                        accept=".png,.jpg,.jpeg,.gif,.svg" />
                                                                </div>
                                                            </div>
    
                                                            <div className="col-lg-6 col-xl-4">
                                                                    <img src="../assets/images/favicon.png"
                                                                        height="50px" alt="default" />
                                                                
                                                                <div className="mb-3">
                                                                    <label className="form-label">Favicon<span
                                                                            className="text-danger">
                                                                            Recommended size : 200x200</span>
                                                                    </label>
                                                                    <input type="file" className="form-control" name="favi_icon"
                                                                        placeholder="Favicon..."
                                                                        accept=".png,.jpg,.jpeg,.gif,.svg" />
                                                                </div>
                                                            </div>
    
                                                            <div className="col-lg-6 col-xl-4">
                                                                <div className="mb-3">
                                                                    <label className="form-label">App Name</label>
                                                                    <input type="text" className="form-control" name="app_name"
                                                                        value="Special Ride"
                                                                        placeholder="App Name..." readonly />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-xl-4">
                                                                <div className="mb-3">
                                                                    <label className="form-label">App Version</label>
                                                                    <input type="text" className="form-control" name="app_version"
                                                                        value="1.2.4"
                                                                        placeholder="App Version" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-xl-4">
                                                                <div className="mb-3">
                                                                    <label
                                                                        className="form-label required">Site Name</label>
                                                                    <input type="text" className="form-control" name="site_name"
                                                                        value="Special Ride"
                                                                        placeholder="Site Name..." required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-xl-4">
                                                                <div className="mb-3">
                                                                    <label
                                                                        className="form-label required">Site Title</label>
                                                                    <input type="text" className="form-control" name="site_name"
                                                                        value="Special Ride"
                                                                        placeholder="Site Title..." required />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label
                                                                        className="form-label required">SEO Meta Description</label>
                                                                    <textarea className="form-control" name="seo_meta_desc" rows="3" placeholder="SEO Meta Description"
                                                                        style={{height: "120px !important;"}} required>This is the description</textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label className="form-label">SEO Keywords</label>
                                                                    <textarea className="form-control required" name="meta_keywords" rows="3"
                                                                        placeholder="SEO Keywords (Keyword 1, Keyword 2)" style={{height: "120px !important;"}} required>Special, Ride</textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Main Motto</label>
                                                                    <textarea className="form-control required" name="main_motto" rows="3" placeholder="Main moto"
                                                                        style={{height: "120px !important;"}} required>This is the main motto</textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label
                                                                        className="form-label">Terms And condition</label>
                                                                    <textarea className="form-control required" name="terms_and_condition" id="terms_and_condition" rows="3"
                                                                        placeholder="Terms And condition" style={{height: "120px !important;"}} required>This is the terms and conditions</textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label
                                                                        className="form-label">Privacy And Policy</label>
                                                                    <textarea className="form-control required" name="privacy_and_policy" id="privacy_and_policy" rows="3"
                                                                        placeholder="Privacy And Policy" style={{height: "120px !important;"}} required>This is Privacy Policy</textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label
                                                                        className="form-label">Licenses</label>
                                                                    <textarea className="form-control required" name="licenses" id="licenses" rows="3"
                                                                        placeholder="Licenses" style={{height: "120px !important;"}} required>This is Licenses</textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button type="button" className="btn btn-success" id="updateButton">Update
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
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


export default Settings;