import React, { useState, useEffect } from "react";
import { Modal, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const DriverModal = ({ data, mode, claxx, icon, title, buttonText }) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    question: "",
    answer: "",
    status: "",
    order: "",
  });

  useEffect(() => {
    if (data) {
      setFormState({
        question: data.question,
        answer: data.answer,
        status: data.status,
        order: data.order,
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
      [name]: value,
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
        {mode === "credit" ? (<>

          <div className="text-center">
    <img src="/assets/images/default-user.png" className="border rounded-circle" alt="Image" width="80" height="80" />
    <h3>Abel Mawuko</h3>
    <button type="button" className="btn btn-info">Available Balance
        : 5001 INR </button>
</div>

<form id="add_credit_form"
      enctype="multipart/form-data">

    <div className="row">
        <div className="col-md-12 mb-2">
            <div className="form-group">
                <label for="type">Type <span className="text-danger">*</span></label>
                <div className="controls">
                    <select id="type" className="form-control" name="type" required>
                        <option value="IN">In</option>
                        <option value="OUT">Out</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="col-md-12 mb-2">
            <div className="form-group">
                <label for="amount">Amount<span className="text-danger">*</span></label>
                <div className="controls">
                    <input type="number" step="any" min="1" max="5000" name="amount" id="amount"
                           className="form-control mb-1" required placeholder="Enter amount"
                           />
                </div>
            </div>
        </div>
    </div>
    <div className="form-actions text-center">
        <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-success">
                <i className="loading-spinner fa-lg fas fa-spinner fa-spin"></i>
                <span className="btn-txt">Save</span>
            </button>
        </div>
    </div>
</form>


        </>) : (
          <>
          <div className="card-header">
          <div className="row align-items-center">
            <div className="col-6">
              <h3 className="card-title">{title} Driver</h3>
            </div>
          </div>
        </div>
        {mode === "view" ? (
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
                              <td>Driver</td>
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

                            <tr>
                              <td>Vehicle</td>
                              <td>Ride, Car/Taxi</td>
                            </tr>

                            <tr>
                              <td>Color</td>
                              <td>Red</td>
                            </tr>

                            <tr>
                              <td>Vehicle registration number</td>
                              <td>1234567890</td>
                            </tr>

                            <tr>
                              <td>Vehicle Plate number</td>
                              <td>1234567890</td>
                            </tr>

                            <tr>
                              <td>Nid Front</td>
                              <td>
                                <a target="_blank" href="/">
                                  <img
                                    className="img-fluid elevation-2"
                                    width="150"
                                    src="/assets/uploads/nid.jpg"
                                    alt="Customer Image"
                                  />
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>Nid Back</td>
                              <td>
                                <a target="_blank" href="/">
                                  <img
                                    className="img-fluid elevation-2"
                                    width="150"
                                    src="/assets/uploads/nid.jpg"
                                    alt="Customer Image"
                                  />
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>Vehicle photo</td>
                              <td>
                                <a target="_blank" href="/">
                                  <img
                                    className="img-fluid elevation-2"
                                    width="150"
                                    src="/assets/uploads/nid.jpg"
                                    alt="Customer Image"
                                  />
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>Vehicle regi photo front</td>
                              <td>
                                <a target="_blank" href="/">
                                  <img
                                    className="img-fluid elevation-2"
                                    width="150"
                                    src="/assets/uploads/nid.jpg"
                                    alt="Customer Image"
                                  />
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>Vehicle regi photo back</td>
                              <td>
                                <a target="_blank" href="/">
                                  <img
                                    className="img-fluid elevation-2"
                                    width="150"
                                    src="/assets/uploads/nid.jpg"
                                    alt="Customer Image"
                                  />
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>Driver license front</td>
                              <td>
                                <a target="_blank" href="/">
                                  <img
                                    className="img-fluid elevation-2"
                                    width="150"
                                    src="/assets/uploads/nid.jpg"
                                    alt="Customer Image"
                                  />
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>Driver license back</td>
                              <td>
                                <a target="_blank" href="/">
                                  <img
                                    className="img-fluid elevation-2"
                                    width="150"
                                    src="/assets/uploads/nid.jpg"
                                    alt="Customer Image"
                                  />
                                </a>
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

            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <h3 className="card-title">Customer Transaction</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="text-center table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <th>Sl</th>
                              <th>Transaction id</th>
                              <th>Amount</th>
                              <th>Date</th>
                              <td>Type</td>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>652912a3200f3</td>
                                <td>5000</td>
                                <td>13-10-23 09:49:23</td>
                                <td>IN</td>
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
          </>
        ) : (
          <>
            <div className="card-body">
              <form enctype="multipart/form-data">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  {/* <fieldset className="border p-3 mb-5 mt-2"> */}
                  <legend className="w-auto float-none">
                    Driver Information
                  </legend>
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label required" for="name">
                        First Name <span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Enter First Name"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label required" for="last_name">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control "
                        name="last_name"
                        type="text"
                        placeholder="Enter Last Name"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label required" for="password">
                        Email Address<span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        autocomplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mt-4 mb-4">
                        <label className="form-label required">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="password"
                          type="password"
                          placeholder="Enter new password"
                          autocomplete="new-password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mt-4 mb-4">
                        <label className="form-label required">
                          Phone Number<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="phone"
                          type="text"
                          placeholder="Enter phone number"
                          autocomplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mt-4 mb-4">
                        <label className="form-label required">Age</label>
                        <input
                          className="form-control"
                          name="age"
                          type="number"
                          placeholder="Enter age"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mt-4 mb-4">
                        <label className="form-label">Gender</label>
                        <select name="gender" id="" className="form-control">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mt-4 mb-4">
                        <label className="form-label">Address</label>
                        <input
                          className="form-control "
                          name="address"
                          type="text"
                          placeholder="Enter address"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mt-4 mb-4">
                        <label className="form-label">
                          Country<span className="text-danger">*</span>
                        </label>
                        <select
                          name="country_id"
                          id=""
                          className="select2 form-control"
                          required
                        >
                          <option value="1">Ghana</option>
                          <option value="2">Nigeria</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                      <div className="mb-4">
                        <label className="form-label">Profile Photo</label>
                        <div className="fileupload " data-provides="fileupload">
                          <span
                            className="fileupload-preview fileupload-exists thumbnail"
                            style={{ maxWidth: "150px", maxHeight: "120px" }}
                          >
                            <img
                              src="/assets/images/default.jpg"
                              alt="Photo"
                              className="img-fluid"
                              height="150px"
                              width="120px"
                            />
                          </span>
                          <span>
                            <label className="btn btn-info btn-rounded btn-file btn-sm">
                              <span className="fileupload-new">
                                <i className="fa fa-file-image-o"></i> Select
                                Image
                              </span>
                              <span className="fileupload-exists">
                                <i className="fa fa-reply"></i> Change
                              </span>
                              <input
                                className="form-control"
                                name="image"
                                type="file"
                              />
                            </label>
                            <a
                              href="#"
                              className="btn fileupload-exists btn-default btn-rounded  btn-sm"
                              data-dismiss="fileupload"
                              id="remove-thumbnail"
                            >
                              <i className="fa fa-times"></i> Remove
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                      <div className="mb-4">
                        <label className="form-label">
                          Front of your ID Card
                        </label>
                        <div className="fileupload" data-provides="fileupload">
                          <span
                            className="fileupload-preview fileupload-exists thumbnail"
                            style={{ maxWidth: "150px", maxHeight: "120px" }}
                          >
                            <img
                              src="/assets/images/default.jpg"
                              alt="Photo"
                              className="img-fluid"
                              height="150px"
                              width="120px"
                            />
                          </span>
                          <span>
                            <label className="btn btn-info btn-rounded btn-file btn-sm">
                              <span className="fileupload-new">
                                <i className="fa fa-file-image-o"></i> Select
                                Image
                              </span>
                              <span className="fileupload-exists">
                                <i className="fa fa-reply"></i> Change
                              </span>
                              <input
                                className="form-control"
                                name="id_front"
                                type="file"
                              />
                            </label>
                            <a
                              href="#"
                              className="btn fileupload-exists btn-default btn-rounded  btn-sm"
                              data-dismiss="fileupload"
                              id="remove-thumbnail"
                            >
                              <i className="fa fa-times"></i> Remove
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                      <div className="mb-4">
                        <label className="form-label">
                          Back of your ID Card
                        </label>
                        <span className="text-success">(Back Side)</span>

                        <div className="fileupload " data-provides="fileupload">
                          <span
                            className="fileupload-preview fileupload-exists thumbnail"
                            style={{ maxWidth: "150px", maxHeight: "120px" }}
                          >
                            <img
                              src="/assets/images/default.jpg"
                              alt="Photo"
                              className="img-fluid"
                              height="150px"
                              width="120px"
                            />
                          </span>
                          <span>
                            <label className="btn btn-info btn-rounded btn-file btn-sm">
                              <span className="fileupload-new">
                                <i className="fa fa-file-image-o"></i> Select
                                Image
                              </span>
                              <span className="fileupload-exists">
                                <i className="fa fa-reply"></i> Change
                              </span>
                              <input
                                className="form-control"
                                name="id_back"
                                type="file"
                              />
                            </label>
                            <a
                              href="#"
                              className="btn fileupload-exists btn-default btn-rounded  btn-sm"
                              data-dismiss="fileupload"
                              id="remove-thumbnail"
                            >
                              <i className="fa fa-times"></i> Remove
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </fieldset> */}

                  <hr />

                  {/* <fieldset className="border p-3 mb-5 mt-2"> */}
                  <legend className="w-auto float-none">Vehicle Info</legend>
                  <div className="row">
                    <div className="col-12 col-sm-4 col-md-6 col-xl-6 col-lg-6 mb-4">
                      <label className="form-label" for="vehicle_ctegory_id">
                        Category
                      </label>
                      <select
                        name="vehicle_ctegory_id"
                        id="vehicle_ctegory_id"
                        className="form-control select2"
                      >
                        <option className="">Select Category</option>

                        <option value="1">Ride</option>
                        <option value="2">Coach</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 mb-4">
                      <label className="form-label" for="vehicle_subctegory_id">
                        Sub Category
                      </label>
                      <select
                        name="vehicle_subctegory_id"
                        id="vehicle_subctegory_id"
                        className="form-control"
                      >
                        <option className="">Select Subcategory</option>
                        <option value="1">Ride</option>
                        <option value="2">Coach</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-3 mb-4">
                      <label className="form-label" for="vehicle_color">
                        Color
                      </label>
                      <input
                        className="form-control"
                        name="vehicle_color"
                        type="text"
                        placeholder="Enter color"
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 mb-4">
                      <label className="form-label" for="vehicle_regi_number">
                        Registration Number
                      </label>
                      <input
                        className="form-control"
                        name="vehicle_regi_number"
                        type="text"
                        placeholder="Enter Registration Number"
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-4">
                        <label className="form-label" id="vehicle_plat_number">
                          Number Plate
                        </label>
                        <input
                          className="form-control"
                          name="vehicle_plat_number"
                          type="text"
                          placeholder="Enter Number Plate Number"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                      <div className="mb-4">
                        <label className="form-label">
                          Photo of your Vehicle
                        </label>

                        <div className="fileupload" data-provides="fileupload">
                          <span
                            className="fileupload-preview fileupload-exists thumbnail"
                            style={{ maxWidth: "150px", maxHeight: "120px" }}
                          >
                            <img
                              src="/assets/images/default.jpg"
                              alt="Photo"
                              className="img-fluid"
                              height="150px"
                              width="120px"
                            />
                          </span>
                          <span>
                            <label className="btn btn-info btn-rounded btn-file btn-sm">
                              <span className="fileupload-new">
                                <i className="fa fa-file-image-o"></i> Select
                                Image
                              </span>
                              <span className="fileupload-exists">
                                <i className="fa fa-reply"></i> Change
                              </span>
                              <input
                                className="form-control"
                                name="vehicle_photo"
                                type="file"
                              />
                            </label>
                            <a
                              href="#"
                              className="btn fileupload-exists btn-default btn-rounded  btn-sm"
                              data-dismiss="fileupload"
                              id="remove-thumbnail"
                            >
                              <i className="fa fa-times"></i> Remove
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                      <div className="mb-4">
                        <label className="form-label">
                          Certificate of vehicle registration
                        </label>
                        <span className="text-success">(Front Side)</span>
                        <div className="fileupload" data-provides="fileupload">
                          <span
                            className="fileupload-preview fileupload-exists thumbnail"
                            style={{ maxWidth: "150px", maxHeight: "120px" }}
                          >
                            <img
                              src="/assets/images/default.jpg"
                              alt="Photo"
                              className="img-fluid"
                              height="150px"
                              width="120px"
                            />
                          </span>
                          <span>
                            <label className="btn btn-info btn-rounded btn-file btn-sm">
                              <span className="fileupload-new">
                                <i className="fa fa-file-image-o"></i> Select
                                Image
                              </span>
                              <span className="fileupload-exists">
                                <i className="fa fa-reply"></i> Change
                              </span>
                              <input
                                className="form-control"
                                name="vehicle_regi_photo_front"
                                type="file"
                              />
                            </label>
                            <a
                              href="#"
                              className="btn fileupload-exists btn-default btn-rounded  btn-sm"
                              data-dismiss="fileupload"
                              id="remove-thumbnail"
                            >
                              <i className="fa fa-times"></i> Remove
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                      <div className="mb-4">
                        <label className="form-label">
                          Certificate of vehicle registration
                        </label>
                        <span className="text-success">(Back Side)</span>
                        <div className="fileupload " data-provides="fileupload">
                          <span
                            className="fileupload-preview fileupload-exists thumbnail"
                            style={{ maxWidth: "150px", maxHeight: "120px" }}
                          >
                            <img
                              src="/assets/images/default.jpg"
                              alt="Photo"
                              className="img-fluid"
                              height="150px"
                              width="120px"
                            />
                          </span>
                          <span>
                            <label className="btn btn-info btn-rounded btn-file btn-sm">
                              <span className="fileupload-new">
                                <i className="fa fa-file-image-o"></i> Select
                                Image
                              </span>
                              <span className="fileupload-exists">
                                <i className="fa fa-reply"></i> Change
                              </span>
                              <input
                                className="form-control"
                                name="vehicle_regi_photo_back"
                                type="file"
                              />
                            </label>
                            <a
                              href="#"
                              className="btn fileupload-exists btn-default btn-rounded  btn-sm"
                              data-dismiss="fileupload"
                              id="remove-thumbnail"
                            >
                              <i className="fa fa-times"></i> Remove
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                      <div className="mb-4">
                        <label className="form-label">Driving license </label>
                        <span className="text-success">(Front Side)</span>
                        <div className="fileupload" data-provides="fileupload">
                          <span
                            className="fileupload-preview fileupload-exists thumbnail"
                            style={{ maxWidth: "150px", maxHeight: "120px" }}
                          >
                            <img
                              src="/assets/images/default.jpg"
                              alt="Photo"
                              className="img-fluid"
                              height="150px"
                              width="120px"
                            />
                          </span>
                          <span>
                            <label className="btn btn-info btn-rounded btn-file btn-sm">
                              <span className="fileupload-new">
                                <i className="fa fa-file-image-o"></i> Select
                                Image
                              </span>
                              <span className="fileupload-exists">
                                <i className="fa fa-reply"></i> Change
                              </span>
                              <input
                                className="form-control"
                                name="driver_license_front"
                                type="file"
                              />
                            </label>
                            <a
                              href="#"
                              className="btn fileupload-exists btn-default btn-rounded  btn-sm"
                              data-dismiss="fileupload"
                              id="remove-thumbnail"
                            >
                              <i className="fa fa-times"></i> Remove
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                      <div className="mb-4">
                        <label className="form-label">Driving license </label>
                        <span className="text-success">(Front Side)</span>
                        <div className="fileupload" data-provides="fileupload">
                          <span
                            className="fileupload-preview fileupload-exists thumbnail"
                            style={{ maxWidth: "150px", maxHeight: "120px" }}
                          >
                            <img
                              src="/assets/images/default.jpg"
                              alt="Photo"
                              className="img-fluid"
                              height="150px"
                              width="120px"
                            />
                          </span>
                          <span>
                            <label className="btn btn-info btn-rounded btn-file btn-sm">
                              <span className="fileupload-new">
                                <i className="fa fa-file-image-o"></i> Select
                                Image
                              </span>
                              <span className="fileupload-exists">
                                <i className="fa fa-reply"></i> Change
                              </span>
                              <input
                                className="form-control"
                                name="driver_license_back"
                                type="file"
                              />
                            </label>
                            <a
                              href="#"
                              className="btn fileupload-exists btn-default btn-rounded  btn-sm"
                              data-dismiss="fileupload"
                              id="remove-thumbnail"
                            >
                              <i className="fa fa-times"></i> Remove
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </fieldset> */}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center  mb-3">
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
          </>
        )}
        

      </Modal>
    </>
  );
};

export default DriverModal;
