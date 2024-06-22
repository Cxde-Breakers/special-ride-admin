import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import './Auth.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login | Special Ride"
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        navigate('/admin');

    }

    // (node:83694) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
    // (Use `node --trace-deprecation ...` to show where the warning was created)
    // (node:83694) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.


    //     babel-preset-react-app is part of the create-react-app project, which
    // is not maintianed anymore. It is thus unlikely that this bug will
    // ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
    // your devDependencies to work around this error. This will make this message
    // go away.
  

    return(

        <div className="signin_sec">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-lg-5 col-xl-5">
                        <form method="POST" action="/login">
                            <div className="signin_form p-5 bg-white">
                                <div className="mb-5 text-center">
                                    <a href="/">
                                        <img src="/assets/images/logo.png" width="150" alt="logo" />
                                    </a>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Admin Email</label>
                                    <input type="email" name="email" id="email" className="form-control" onChange={((e) => {setEmail(e.target.value)})} placeholder="Enter your email" required />
                                   
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Admin Password</label>
                                    <input type="password"name="password" id="password" className="form-control" onChange={((e) => {setPassword(e.target.value)})} placeholder="Enter your password" required />
                                </div>
                                <div className="create_account text-center">
                                    <button type="button" onClick={handleSubmit} className="btn btn-primary w-100">Sign In</button>
                                </div>
                            </div>
                          
                        </form>
                        
                    </div>
                    
                </div>
            </div>
            
        </div>

    );
}


export default Login;