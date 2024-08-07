import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import FileUpload from "./components/FileUpload";
import axios from "axios";
import openNotification from "../components/OpenNotification";


const PassengerModal = ({ data, mode, claxx, icon, title, buttonText, setIsLoading, countries }) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    role: 'passenger',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    age: '',
    gender: '',
    address: '',
    country: '',
    profilePicture: '',
    idFront: '',
    idBack: ''
  });

  useEffect(() => {
    if (data) {

      const { profilePicture, idFront, idBack, user, bookings, country, id, ...rest } = data;
      setFormState((prevState) => ({
        ...prevState,
        ...rest,
        country: country?.id
      }));
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
    const { name, value, type, files } = e.target;
    const newValue =
      type === "file"
        ? files[0]
        : value;

    setFormState((prevState) => ({
      ...prevState,
      [name]: name === 'age' ? Number(newValue) : newValue
    }));
  };


  const handleSubmit = () => {
    const token = window.sessionStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };


    setIsLoading(true);

    const body = new FormData();
    for (const key in formState) {
      body.append(key, formState[key]);
    }


    if (mode === 'create') {

      if (Object.values(formState).some(value => !value)) {

        openNotification(
          "topRight",
          "error",
          "Error",
          "All fields are required."
        );
        return;
      }

      axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, body, { headers })
        .then((response) => {
          openNotification(
            "topRight",
            "success",
            "Passenger created successfully",
            "Passenger has been created successfully."
          );

          setTimeout(() => {
            window.location.href = `/admin/passengers`;
          }, 1000);
        })
        .catch((error) => {
          openNotification(
            "topRight",
            "error",
            "Error",
            'An error occurred while creating the passenger.'
          );
          console.error(error);
          setIsLoading(false);
        })
        .finally(() => {
          setOpen(false);
        });
    }

    else {

      console.log(body)

      axios.patch(`${process.env.REACT_APP_API_URL}/passengers/${data?.id}`, body, { headers })
        .then((response) => {
          openNotification(
            "topRight",
            "success",
            "Passenger updated successfully",
            "Passenger details has been updated successfully."
          );

          setTimeout(() => {
            window.location.href = `/admin/passengers`;
          }, 1000);
        })
        .catch((error) => {
          openNotification(
            "topRight",
            "error",
            "Error",
            'An error occurred while updating the passenger.'
          );
          console.error(error);
          setIsLoading(false);
        })
        .finally(() => {
          setOpen(false);
        });
    }
  }


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
              <h3 className="card-title">{title} Passenger</h3>
            </div>
          </div>
        </div>
        {mode === "view" ? (
          <>
            <div className="card card-widget widget-user shadow">
              <div className="widget-user-header bg-secondary">
                <h3 className="widget-user-username">{data?.firstName} {data?.lastName}</h3>
                <h5 className="widget-user-desc">{data?.email}</h5>
              </div>
              <div className="widget-user-image">
                <img
                  className="img-circle elevation-2"
                  src={`data:image/png;base64,${data?.profilePicture}`}
                  alt="Customer"
                />
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">Status</h5>
                      <span className="description-text">
                        <span
                          className={`badge bg-${data.status === 'active' ? 'success' : 'secondary'}`}
                          style={{ minWidth: "65px" }}
                        >
                          {data.status === 'active' ? 'Active' : 'Inactive'}
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
                              <td>Passenger</td>
                            </tr>

                            <tr>
                              <td>Total ride</td>
                              <td>{data?.bookings?.length}</td>
                            </tr>

                            <tr>
                              <td>Address</td>
                              <td>{data?.address}</td>
                            </tr>

                            <tr>
                              <td>Country</td>
                              <td>{data?.country?.name}</td>
                            </tr>


                            <tr>
                              <td>Phone</td>
                              <td>{data?.phoneNumber}</td>
                            </tr>

                            <tr>
                              <td>Age</td>
                              <td>{data?.age} years</td>
                            </tr>

                            <tr>
                              <td>Gender</td>
                              <td>{data?.gender === 'male' ? 'Male' : 'Female'}</td>
                            </tr>



                            <tr>
                              <td>Nid Front</td>
                              <td>
                                <a target="_blank" href="/">
                                  <img
                                    className="img-fluid elevation-2"
                                    width="150"
                                    src={`data:image/png;base64,${data?.idFront}`}
                                    alt="Customer"
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
                                    src={`data:image/png;base64,${data?.idBack}`}
                                    alt="Customer"
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

                  <div className="row">
                    <div className={mode === 'create' ? "col-md-4" : "col-md-6"}>
                      <label className="form-label required" for="name">
                        First Name <span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter First Name"
                        name="firstName"
                        onChange={handleInputChange}
                        value={formState.firstName}
                        required
                      />
                    </div>
                    <div className={mode === 'create' ? "col-md-4" : "col-md-6"}>
                      <label className="form-label required" for="last_name">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control "
                        name="lastName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter Last Name"
                        value={formState.lastName}
                        required
                      />
                    </div>
                    {mode === 'create' && (
                      <div className="col-md-4">
                        <label className="form-label required" for="password">
                          Email Address<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="email"
                          onChange={handleInputChange}
                          type="email"
                          placeholder="Enter Email"

                          required
                        />
                      </div>
                    )}

                  </div>
                  <div className="row">
                    {mode === 'create' && (
                      <div className="col-md-4">
                        <div className="mt-4 mb-4">
                          <label className="form-label required">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            name="password"
                            onChange={handleInputChange}
                            type="password"
                            placeholder="Enter new password"
                            autocomplete="new-password"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div className={mode === 'create' ? "col-md-4" : "col-md-6"}>
                      <div className="mt-4 mb-4">
                        <label className="form-label required">
                          Phone Number<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          name="phoneNumber"
                          onChange={handleInputChange}
                          type="text"
                          placeholder="Enter phone number"
                          value={formState.phoneNumber}
                          required
                        />
                      </div>
                    </div>
                    <div className={mode === 'create' ? "col-md-4" : "col-md-6"}>
                      <div className="mt-4 mb-4">
                        <label className="form-label required">Age</label>
                        <input
                          className="form-control"
                          name="age"
                          onChange={handleInputChange}
                          type="number"
                          placeholder="Enter age"
                          value={formState.age}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="mt-4 mb-4">
                        <label className="form-label">Gender</label>
                        <select className="form-control"
                          name="gender"
                          onChange={handleInputChange}>
                          <option value="">Select Gender</option>

                          <option value="male" selected={formState.gender === 'male'}>Male</option>
                          <option value="female" selected={formState.gender === 'female'}>Female</option>
                          {/* <option value="others">Others</option> */}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mt-4 mb-4">
                        <label className="form-label">Address</label>
                        <input
                          className="form-control "
                          name="address"
                          onChange={handleInputChange}
                          type="text"
                          placeholder="Enter address"
                          value={formState.address}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mt-4 mb-4">
                        <label className="form-label">
                          Country<span className="text-danger">*</span>
                        </label>
                        <select
                          name="country"
                          onChange={handleInputChange}
                          className="select2 form-control"
                          required
                        >
                          <option value="">Select Country</option>

                          {countries?.map((country, index) => {
                            return (
                              <option
                                key={index}
                                value={country.id}
                                selected={country.id === formState?.country}
                              // selected={category.id === formState?.category?.name}
                              >
                                {country.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <FileUpload id={'profilePicture'} picture={data?.profilePicture} name={'profilePicture'} label={"Profile Photo"} setFormState={setFormState} />
                    <FileUpload id={'idFront'} picture={data?.idFront} name={'idFront'} label={"Front of ID Card"} setFormState={setFormState} />
                    <FileUpload id={'idBack'} picture={data?.idBack} name={'idBack'} label={"Back of ID Card"} setFormState={setFormState} />

                  </div>
                  {/* </fieldset> */}

                  <hr />


                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center  mb-3">
                  <button className="btn btn-success btn-sm btn-block" type="button" onClick={handleSubmit}>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </>
        )}



      </Modal>
    </>
  );
};

export default PassengerModal;
