import React from "react";
import '../Admin.css'

const AdminHeader = () =>{

    return(

            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/" target="_blank" title="Website" className="nav-link">
                            <i className="fas fa-globe fa-2"></i>
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/" title="Cache Clear" className="nav-link">
                            <i className="fas fa-broom"></i>
                        </a>
                    </li>
                </ul>
            
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <span className="image">
                                <img src="../assets/images/default-user.png" alt=""
                                    className="img-circle elevation-2" width="30" />
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                            <a href="/admin/profile" className="dropdown-item">Profile & account</a>
                            <div className="dropdown-divider"></div>
                            <a href="/" className="dropdown-item text-danger"
                                onClick="">Logout
                                </a>
                            
                        </div>
                    </li>
            
            
                </ul>
            </nav>

    );
}


export default AdminHeader;