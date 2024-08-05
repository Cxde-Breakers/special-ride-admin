import React, { useEffect } from "react";
import '../Admin.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";
  
const AdminHeader = () => {
    // const intervalRef = useRef(null);
    const navigate = useNavigate();

    const tokenRefresh = async () => {
        try {
          const refreshToken = window.sessionStorage.getItem('refreshToken');
          const body = {
            refreshToken
          }
          const headers = {
            'Content-Type': 'application/json',
          };
    
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh-tokens`, body, { headers });
          window.sessionStorage.setItem("token", response.data.accessToken);
        window.sessionStorage.setItem("refreshToken", response.data.refreshToken);

          console.log('Token refreshed:', response.data.accessToken);
        } catch (error) {
          console.error('Error refreshing token:', error);
          // Handle error (e.g., redirect to login)
        //   setIsLoggedIn(false);
        }
      };


      useEffect(() => {
        // Check if the interval is already set
        if (!window.tokenRefreshInterval) {
          window.tokenRefreshInterval = setInterval(() => {
            tokenRefresh();
          }, 30 * 1000); // 50 minutes in milliseconds
        }
    
        // Clear the interval on component unmount (logout)
        return () => {
          if (window.tokenRefreshInterval) {
            clearInterval(window.tokenRefreshInterval);
            window.tokenRefreshInterval = null;
          }
        };
      }, []);
    
      const handleLogout = () => {
        // Clear all items from sessionStorage
        window.sessionStorage.clear();
        window.localStorage.clear();
        if (window.tokenRefreshInterval) {
          clearInterval(window.tokenRefreshInterval);
          window.tokenRefreshInterval = null;
        }
        navigate('/');
      };

    return(

            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></span>
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
                        <span className="nav-link" data-widget="fullscreen" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </span>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link" data-toggle="dropdown" >
                            <span className="image">
                                <img src="/assets/images/default-user.png" alt=""
                                    className="img-circle elevation-2" width="30" />
                            </span>
                        </span>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                            <a href="/admin/profile" className="dropdown-item">Profile & account</a>
                            <div className="dropdown-divider"></div>
                            <span href="/" style={{ cursor: "pointer" }} onClick={handleLogout} className="dropdown-item text-danger"
                                >Logout
                                </span>
                            
                        </div>
                    </li>
            
            
                </ul>
            </nav>

    );
}


export default AdminHeader;