import React, { useState, useEffect } from "react";
import { Modal } from "antd";
// import { QuestionCircleOutlined } from "@ant-design/icons";
import FileUpload from "./components/FileUpload";
import axios from "axios";
import openNotification from "../components/OpenNotification";


const DriverModal = ({ data, mode, claxx, icon, title, buttonText, categories, setIsLoading, countries }) => {
  const [open, setOpen] = useState(false);
  const [subcategories, setSubcategories] = useState([]);

  const [formState, setFormState] = useState({
    role: 'driver',
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
    idBack: '',
    category: '',
    subcategory: '',
    color: '',
    registrationNumber: '',
    plateNumber: '',
    vehicle: '',
    vehiclePhoto: '',
    vehicleRegistrationPhotoFront: '',
    vehicleRegistrationPhotoBack: '',
    driversLicensePhotoFront: '',
    driversLicensePhotoBack: ''
  });



  // subcategories?category=db8f0b7a-6bd4-423d-8145-2c476124779f
  useEffect(() => {
    if (data) {
      const { vehiclePhoto,
        vehicleRegistrationPhotoFront,
        vehicleRegistrationPhotoBack,
        driversLicensePhotoFront,
        driversLicensePhotoBack, profilePicture, idFront, idBack, user, bookings, country, category, subcategory, ...rest } = data;
      setFormState((prevState) => ({
        ...prevState,
        ...rest,
        country: country.id,
        category: category.id,
        subcategory: subcategory.id
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

    if (name === 'category') {
      const selectedCategory = categories.find(category => category.id === value);
      setSubcategories(selectedCategory.subcategories);
    }
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
            "Driver created successfully",
            "Driver has been created successfully."
          );

          setTimeout(() => {
            window.location.href = `/admin/drivers`;
          }, 1000);
        })
        .catch((error) => {
          openNotification(
            "topRight",
            "error",
            "Error",
            'An error occurred while creating the driver.'
          );
          console.error(error);
          setIsLoading(false);
        })
        .finally(() => {
          setOpen(false);
        });
    }

    else {
      console.log(formState)

      axios.patch(`${process.env.REACT_APP_API_URL}/drivers/${data?.id}`, formState, { headers })
        .then((response) => {
          openNotification(
            "topRight",
            "success",
            "Driver updated successfully",
            "Driver details has been updated successfully."
          );

          setTimeout(() => {
            window.location.href = `/admin/drivers`;
          }, 1000);
        })
        .catch((error) => {
          openNotification(
            "topRight",
            "error",
            "Error",
            'An error occurred while updating the driver.'
          );
          console.error(error);
          setIsLoading(false);
        })
        .finally(() => {
          setOpen(false);
        });
    }
  }


  // const handleSubmit = () => {
  //   // const token = window.sessionStorage.getItem("token");
  //   // const headers = {
  //   //   Authorization: `Bearer ${token}`,
  //   //  'Content-Type': 'multipart/form-data'
  //   // };

  //   // if (Object.values(formState).some(value => !value)) {

  //   //     openNotification(
  //   //       "topRight",
  //   //       "error",
  //   //       "Error",
  //   //       "All fields are required."
  //   //     );
  //   //     return;
  //   //   }

  //   // setIsLoading(true);

  //   // const body = new FormData();
  //   // for (const key in formState) {
  //   // body.append(key, formState[key]);
  //   // }


  //   console.log(formState)

  //     // axios.post(`${process.env.REACT_APP_API_URL}/drivers`, body, { headers })
  //     //   .then((response) => {
  //     //       openNotification(
  //     //         "topRight",
  //     //         "success",
  //     //         "Settings updated successfully",
  //     //         "Settings has been updated successfully."
  //     //       );

  //     //       setTimeout(() => {
  //     //         window.location.href = `/admin/drivers`;
  //     //       }, 1000);
  //     //   })
  //     //   .catch((error) => {
  //     //     openNotification(
  //     //       "topRight",
  //     //       "error",
  //     //       "Error",
  //     //       'An error occurred while creating the driver.'
  //     //     );
  //     //     console.error(error);
  //     //     setIsLoading(false);
  //     //   })


  // }

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
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
        width={900}
        style={{ zIndex: "1", left: "10%" }}
        footer={[]}
      >
        {mode === "credit" ? (<>

          <div className="text-center">
            <img src="/assets/images/default-user.png" className="border rounded-circle" alt="asset" width="80" height="80" />
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
                          <span className="description-text">{formatDate(data?.createdAt)}</span>
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
                                  <td>{data?.address}</td>
                                </tr>
                                <tr>
                                  <td>Location</td>
                                  <td>PatahinTirhut DivisionIndia</td>
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
                                  <td>Vehicle</td>
                                  <td>{data?.vehicle}</td>
                                </tr>

                                <tr>
                                  <td>Category</td>
                                  <td>{data?.category?.name}</td>
                                </tr>

                                <tr>
                                  <td>Subcategory</td>
                                  <td>{data?.subcategory?.name}</td>
                                </tr>

                                <tr>
                                  <td>Color</td>
                                  <td>{data?.color}</td>
                                </tr>

                                <tr>
                                  <td>Vehicle registration number</td>
                                  <td>{data?.registrationNumber}</td>
                                </tr>

                                <tr>
                                  <td>Vehicle Plate number</td>
                                  <td>{data?.plateNumber}</td>
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

                                <tr>
                                  <td>Vehicle photo</td>
                                  <td>
                                    <a target="_blank" href="/">
                                      <img
                                        className="img-fluid elevation-2"
                                        width="150"
                                        src={`data:image/png;base64,${data?.vehiclePhoto}`}
                                        alt="Customer"
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
                                        src={`data:image/png;base64,${data?.vehicleRegistrationPhotoFront}`}
                                        alt="Customer"
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
                                        src={`data:image/png;base64,${data?.vehicleRegistrationPhotoBack}`}
                                        alt="Customer"
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
                                        src={`data:image/png;base64,${data?.driversLicensePhotoFront}`}
                                        alt="Customer"
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
                                        src={`data:image/png;base64,${data?.driversLicensePhotoBack}`}
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
                      {/* <fieldset className="border p-3 mb-5 mt-2"> */}
                      <legend className="w-auto float-none">
                        Driver Information
                      </legend>
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

                      {/* <fieldset className="border p-3 mb-5 mt-2"> */}
                      <legend className="w-auto float-none">Vehicle Info</legend>
                      <div className="row">
                        <div className="col-12 col-sm-4 col-md-6 col-xl-6 col-lg-6 mb-4">
                          <label className="form-label" for="vehicle_ctegory_id">
                            Category
                          </label>
                          <select
                            name="category"
                            onChange={handleInputChange}
                            id="vehicle_ctegory_id"
                            className="form-control select2"
                          >
                            <option value="">Select Category</option>

                            {categories?.map((category, index) => {
                              return (
                                <option
                                  key={index}
                                  value={category.id}
                                // selected={category.id === formState?.category}
                                >
                                  {category.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 mb-4">
                          <label className="form-label" for="vehicle_subctegory_id">
                            Sub Category
                          </label>
                          <select
                            name="subcategory"
                            onChange={handleInputChange}
                            id="vehicle_subctegory_id"
                            className="form-control"
                          >
                            <option className="">Select Subcategory</option>
                            {subcategories?.map((subcategory, index) => {
                              return (
                                <option
                                  key={index}
                                  value={subcategory.id}
                                // selected={subcategory.id === formState?.subcategory}
                                >
                                  {subcategory.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-3 mb-4">
                          <label className="form-label" for="vehicle_color">
                            Vehicle Name
                          </label>
                          <input
                            className="form-control"
                            name="vehicle"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter vehicle name"
                            value={formState.vehicle}
                          />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-3 mb-4">
                          <label className="form-label" for="vehicle_color">
                            Vehicle Color
                          </label>
                          <input
                            className="form-control"
                            name="color"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter color"
                            value={formState.color}
                          />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 mb-4">
                          <label className="form-label" for="vehicle_regi_number">
                            Registration Number
                          </label>
                          <input
                            className="form-control"
                            name="registrationNumber"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter Registration Number"
                            value={formState.registrationNumber}
                          />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="mb-4">
                            <label className="form-label" id="vehicle_plat_number">
                              Number Plate
                            </label>
                            <input
                              className="form-control"
                              name="plateNumber"
                              onChange={handleInputChange}
                              type="text"
                              placeholder="Enter Number Plate Number"
                              value={formState.plateNumber}
                            />
                          </div>
                        </div>

                        <FileUpload picture={data?.vehiclePhoto} id={'vehiclePhoto'} name={'vehiclePhoto'} label={"Photo of your Vehicle"} setFormState={setFormState} />
                        <FileUpload picture={data?.vehicleRegistrationPhotoFront} id={'vehicleRegistrationPhotoFront'} name={'vehicleRegistrationPhotoFront'} label={"Certificate of vehicle registration (Front Side)"} setFormState={setFormState} />
                        <FileUpload picture={data?.vehicleRegistrationPhotoBack} id={'vehicleRegistrationPhotoBack'} name={'vehicleRegistrationPhotoBack'} label={"Certificate of vehicle registration (Back Side)"} setFormState={setFormState} />
                        <FileUpload picture={data?.driversLicensePhotoFront} id={'driversLicensePhotoFront'} name={'driversLicensePhotoFront'} label={"Driving license (Front Side)"} setFormState={setFormState} />
                        <FileUpload picture={data?.driversLicensePhotoBack} id={'driversLicensePhotoBack'} name={'driversLicensePhotoBack'} label={"Driving license (Back Side)"} setFormState={setFormState} />

                      </div>
                      {/* </fieldset> */}
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center  my-3">
                      <button className="btn btn-success btn-block btn-sm" type="button" onClick={handleSubmit}>
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
