import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import PassengerModal from "./PassengerModal";
// import DeleteModal from "../components/DeleteModal";
import axios from "axios";
import { Spin } from "antd";
import StatusModal from "../components/StatusModal";

const ViewPassengers = () => {

  const navigate = useNavigate();
  const [passengers, setPassengers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  useEffect(() => {
    document.title = "View Passengers | Special Ride";

    setIsLoading(true);
    const token = window.sessionStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/passengers`, { headers })
      .then((response) => {
          // console.log(response.data.data);
        const sortedData = response.data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPassengers(sortedData);
          // setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
          // setIsLoading(false);
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/countries`, { headers })
      .then((response) => {
        // console.log(response.data.data);
        setCountries(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });

      setIsLoading(false);
  }, [navigate]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = passengers.filter(
    (passenger) =>
      passenger.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      passenger.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // const totalPages = 10;

  // Calculate the index range of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Get the data for the current page
  const currentPageData = filteredData.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const formatDate = (dateTimeString) => {
  //   const date = new Date(dateTimeString);
  //   const options = { year: "numeric", month: "long", day: "numeric" };
  //   return date.toLocaleDateString("en-US", options);
  // };

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AdminHeader />

        <AdminSidebar active={"passenger"} />

        {isLoading ? (
          <Spin fullscreen={true} size={"large"} />
        ) : (
          <>
            <div className="content-wrapper">
              <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0">Passengers</h1>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                          <a href="/">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Passengers</li>
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
                              <h3 className="card-title">Passengers List</h3>
                            </div>
                            <div className="col-6">
                              <div className="float-right">
                                <PassengerModal
                                  title={"Create"}
                                  claxx={"btn btn-success btn-sm"}
                                  icon={"nav-icon fa fa-plus mr-2"}
                                  mode={"create"}
                                  buttonText={"Add New"}
                                  countries={countries}
                                  setIsLoading={setIsLoading}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="px-3 py-2">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <span className="text-sm mr-1">Show</span>
                              <select
                                class="form-select form-select-sm"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setItemsPerPage(e.target.value);
                                }}
                              >
                                <option value="10" selected>
                                  10
                                </option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>
                              <span className="text-sm ml-1">entries</span>
                            </div>
                            <div className="col-6">
                              <div className="float-right">
                                <input
                                  type="text"
                                  className="form-control-sm rounded"
                                  placeholder="Enter search term ..."
                                  value={searchTerm}
                                  onChange={handleSearchChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-body table-responsive p-0">
                          <table
                            id="dataTables"
                            className="table table-hover text-nowrap jsgrid-table"
                          >
                            <thead>
                              <tr>
                                <th>Sl</th>

                                <th>User</th>
                                <th>Email</th>
                                {/* <th>Veh</th> */}
                                <th>Registration date</th>
                                {/* <th>Total Ride</th> */}
                                <th>Country</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentPageData.length === 0 ? (
                                <tr colspan="10" className="text-center">
                                  <td colspan="10">
                                    No matching records found
                                  </td>
                                </tr>
                              ) : (
                                currentPageData.map((passenger, index) => (
                                  <tr>
                                    <td>
                                      <div className="float-left p-2">
                                        <img
                                          src={`data:image/png;base64,${passenger.profilePicture}`} 
                                          className="border rounded-circle"
                                          alt="default"
                                          width="50"
                                          height="50"
                                        />
                                      </div>
                                    </td>

                                    <td>
                                      <div>Name: {passenger.firstName} {passenger.lastName}</div>
                                      <div>Phone: {passenger.phoneNumber}</div>
                                    </td>

                                    <td>{passenger.user.email}</td>
                                    {/* <td>N/A</td> */}

                                    <td>08 Aug, 2023</td>
                                    <td>{passenger?.country.name}</td>
                                    <td className="text-muted">
                                            {passenger.status === 'active' ? (
                                                <span className="badge badge-success">
                                                    Active
                                                </span>
                                                ) : (
                                                <span className="badge badge-secondary">
                                                    Inactive
                                                </span>
                                                )}
                                            </td>
                                    

                                    <td>
                                      <PassengerModal
                                        title={"View"}
                                        claxx={"btn btn-sm btn-info mr-3"}
                                        icon={"nav-icon fa fa-eye mr-2"}
                                        mode={"view"}
                                        data={passenger}
                                        buttonText={"View"}
                                      />
                                      <PassengerModal
                                        title={"Edit"}
                                        claxx={"btn btn-sm btn-warning mr-3"}
                                        icon={"nav-icon fa fa-edit mr-2"}
                                        mode={"edit"}
                                        data={passenger}
                                        buttonText={"Edit"}
                                        countries={countries}
                                        setIsLoading={setIsLoading}
                                      />
                                      {/* <DeleteModal
                                        title={"Delete Passenger"}
                                        content={
                                          "Are you sure you want to delete this item? This action cannot be undone."
                                        }
                                        claxx={"btn btn-sm btn-danger mr-3"}
                                      /> */}

<StatusModal
                                        title={passenger?.status === 'active' ? "Disable Passenger" :"Enable Passenger"}
                                        content={
                                          `Are you sure you want to ${passenger?.status === 'active' ? 'disable' : 'enable'} this passenger?`
                                        }
                                        claxx={`btn btn-sm btn-${passenger?.status === 'active' ? 'secondary' : 'success'} mr-3`}
                                        setIsLoading={setIsLoading} id={passenger.id} redirectUrl={'passengers'} updateUrl={'passengers'}
                                        status={passenger?.status}
                                      />
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>

                        <div className="px-3 mt-2 row">
                          <div className="col-6">
                            <p>
                              {`Showing ${
                                startIndex + 1
                              } to ${endIndex} of ${totalItems} entries`}
                            </p>
                          </div>
                          <div className="col-6">
                            <nav
                              aria-label="Page navigation example"
                              className="mt-0"
                            >
                              <ul className="pagination pagination-sm justify-content-end justify-content-md-end">
                                <li
                                  className={`page-item ${
                                    currentPage === 1 ? "disabled" : ""
                                  }`}
                                  onClick={() => goToPage(currentPage - 1)}
                                >
                                  <button
                                    className="page-link"
                                    disabled={currentPage === 1}
                                  >
                                    &laquo;
                                  </button>
                                </li>

                                {[...Array(totalPages)].map((_, index) => (
                                  <li
                                    key={index}
                                    className={`page-item ${
                                      index + 1 === currentPage ? "active" : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() => goToPage(index + 1)}
                                    >
                                      {index + 1}
                                    </button>
                                  </li>
                                ))}

                                <li
                                  className={`page-item ${
                                    currentPage === totalPages ? "disabled" : ""
                                  }`}
                                  onClick={() => goToPage(currentPage + 1)}
                                >
                                  <button
                                    className="page-link"
                                    disabled={currentPage === totalPages}
                                  >
                                    &raquo;
                                  </button>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AdminFooter />
          </>
        )}
      </div>
    </div>
  );
};

export default ViewPassengers;
