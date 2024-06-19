import React, { useState, useEffect } from "react";
import { Modal, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const AdminModal = ({ data, mode, claxx, icon, title, buttonText }) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    question: "",
    answer: "",
    status: "",
    order: ""
  });

  useEffect(() => {
    if (data) {
      setFormState({
        question: data.question,
        answer: data.answer,
        status: data.status,
        order: data.order
      });
    }
  }, [data]);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    console.log("Form data:", formState);
    // Handle form submission logic here
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <span title={title} onClick={showModal} className={claxx}>
        <i className={icon}></i>
        <span>{buttonText}</span>
      </span>

      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        style={{ zIndex: "1", left: "10%" }}
        footer={[]}
      >
        <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h3 className="card-title">{title} Admin</h3>
                    </div>
                  </div>
       </div>
        { mode === 'view' ? (

                         <>
                         <div className="card card-widget widget-user shadow">
              <div className="widget-user-header bg-secondary">
                <h3 className="widget-user-username">Abel Mawuko</h3>
                <h5 className="widget-user-desc">test@gmail.com</h5>
              </div>
              <div className="widget-user-image">
                <img
                  className="img-circle elevation-2"
                  src="/assets/images/default-user.png"
                  alt="Customer Image"
                />
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">Status</h5>
                      <span className="description-text">
                        <span
                          className="badge bg-success"
                          style={{ minWidth: "65px" }}
                        >
                          Active
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">Available balance</h5>
                      <span className="description-text">GHS 0.00</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="description-block">
                      <h5 className="description-header">Registered at</h5>
                      <span className="description-text">15 Oct 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <th width="20%">Mode</th>
                              <td>Admin</td>
                            </tr>

                            <tr>
                              <td>Total ride</td>
                              <td>0</td>
                            </tr>

                            <tr>
                              <td>Address</td>
                              <td>PatahinTirhut DivisionIndia</td>
                            </tr>
                            <tr>
                              <td>Location</td>
                              <td>PatahinTirhut DivisionIndia</td>
                            </tr>
                            <tr>
                              <td>Country</td>
                              <td>India</td>
                            </tr>

                            <tr>
                              <td>Latitude/longitude</td>
                              <td>26.12118 85.3481729</td>
                            </tr>

                            <tr>
                              <td>Phone</td>
                              <td>7991195087</td>
                            </tr>

                            <tr>
                              <td>Age</td>
                              <td>20 Years</td>
                            </tr>

                            <tr>
                              <td>Gender</td>
                              <td>Male</td>
                            </tr>

                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                         </>

        ) : (
          <>

<div className="card-body">
                                <div className="text-center mb-4">
                                    <img width="150px" height="150px" id="image" className="img-circle"
                                        src="/assets/images/default-user.png"
                                        alt="user_profile_picture"
                                        style={{border: "3px solid #adb5bd", margin: "0 auto", padding: "3px"}} />
                                </div>
                                <form>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-12 ">
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-3 col-form-label" for="name">
                                                    Name
                                                    <span className="form-label-required text-danger">*</span>
                                                </label>
                                                <div className="col-sm-9">
                                                    <input value="" name="name" type="text"
                                                        className="form-control"
                                                        placeholder="Enter Name" />
                                                    
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-3 col-form-label" for="name">
                                                    Email
                                                    <span className="form-label-required text-danger">*</span>
                                                </label>
                                                <div className="col-sm-9">
                                                    <input value="" name="email" type="email"
                                                        className="form-control "
                                                        placeholder="Enter email" />
                                                    
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-3 col-form-label" for="image">
                                                    Image
                                                    <span className="form-label-required text-danger">*</span>
                                                </label>
                                                <div className="col-sm-9">
                                                    <div className="custom-file">
                                                        <input name="image" autocomplete="image"
                                                            onchange="document.getElementById('image').src = window.URL.createObjectURL(this.files[0])"
                                                            type="file" className="custom-file-input" id="customFile" />
                                                        <label className="custom-file-label"
                                                            for="customFile">Choose file</label>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-3 col-form-label" for="name">
                                                    Contact
                                                    <span className="form-label-required text-danger">*</span>
                                                </label>
                                                <div className="col-sm-9">
                                                    <input value="" name="phone" type="text"
                                                        className="form-control "
                                                        placeholder="Phone Number" />
                                                        <span className="text-success">
                                                            Phone number with country code Ex. +880123456789
                                                        </span>
                                                    
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-3 col-form-label" for="password">
                                                    Password
                                                    <span className="form-label-required text-danger">*</span>
                                                </label>
                                                <div className="col-sm-9">
                                                    <input value="" name="password" type="password"
                                                        className="form-control "
                                                        placeholder="Enter New Password" />
                                                    
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-3 col-form-label" for="roles">
                                                    Assign Roles
                                                    <span className="form-label-required text-danger">*</span>
                                                </label>
                                                <div className="col-sm-9">
                                                    <select name="roles[]" id="role_id" className="form-control select2" multiple=''>
                                                        
                                                        <option value="1">Admin</option>
                                                        <option value="2">Superadmin</option>
                                                        
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-3 col-form-label" for="status">
                                                    Status
                                                    <span className="form-label-required text-danger">*</span>
                                                </label>
                                                <div className="col-sm-9">
                                                    <select name="status" id="status" className="form-control">
                                                        <option value="1">Active</option>
                                                        <option value="0">Inactive</option>
                                                    </select>
                                                   
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <label className="col-sm-3 col-form-label" for="name">
                                                    Country Name
                                                    <span className="form-label-required text-danger">*</span>
                                                </label>
                                                <div className="col-sm-9">
                                                    <select name="country_id" id="country_id" className="form-control select2">
                                                        <option value="" className="d-none">Select Country</option>
                                                            <option value="1">Ghana</option>
                                                            <option value="1">Nigeria</option>
                                                    </select>
                                                   
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="offset-sm-3 col-sm-4">
                                                    <button type="submit" className="btn btn-success">
                                                        <i className="fas fa-plus"></i> Create
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                </>
        )}

      </Modal>
    </>
  );
};

export default AdminModal;
