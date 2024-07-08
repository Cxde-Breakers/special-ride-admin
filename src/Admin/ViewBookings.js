import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import BookingModal from "./BookingModal";

import { Spin } from "antd";


const ViewBookings = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);

    const data = [{
      transactionId: "66682afd028ee",
      paymentBy: "Shyamoli Dean",
      receiveBy: "Abdul Karim",
      paymentMethod: "Cash Payment",
      amount: "1.00 INR",
      status: "paid",
      date: "11 Jun 24",
  }]

  useEffect(() => {
    document.title = "View Bookings | Special Ride";

    setIsLoading(true);

    const token = window.sessionStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }
    setIsLoading(false);

  }, [navigate]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((dati) =>
    dati.paymentBy.toLowerCase().includes(searchTerm.toLowerCase())
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


  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AdminHeader />

        <AdminSidebar active={"booking"} />
{isLoading ? (
          <Spin fullscreen={true} size={"large"} />
        ) : (
          <>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Bookings</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="admin.dashboard">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Bookings</li>
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
                          <h3 className="card-title">Bookings List</h3>
                        </div>
                        <div className="col-6">
                          <div className="float-right">
                            <a className="btn btn-info btn-sm" href="/">
                              Back
                            </a>
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
                            <th>Ride Info</th>
                            <th>Driver</th>
                            <th>Passenger</th>
                            <th>Price</th>
                            <th>Admin Commission</th>
                            <th>Country</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Payment Status</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        <input type="hidden" value={currentPageData} />
                          <tr>
                            <td>1</td>
                            <td>
                              <div>ID: 64d4d5afe8b2f</div>
                              <div>
                                Pickup: 1213 Road # 28, Gulshan, Dhaka District,
                                1213
                              </div>
                              <div>
                                Dropoff: Plot # 24/1-2, Shyamoli Square, Mirpur
                                Rd, Dhaka 1207, Bangladesh
                              </div>
                              <div>Distance: 8.1 km</div>
                              <div>Pickup Time: 10-08-23 12:18:55</div>
                              <div>Dropoff Time: 10-08-23 12:18:55</div>
                              <div>Request Time: 10-08-23 12:18:55</div>
                            </td>

                            <td>
                              <div>ID: 124</div>
                              <div>Name: Temp</div>
                              <div>Email: tempdriver@gmail.com</div>
                              <div>Phone: 1234567890</div>
                            </td>

                            <td>
                              <div>ID: 121</div>
                              <div>Name: Test</div>
                              <div>Email: testpassenger@gmail.com</div>
                              <div>Phone: 1234567890</div>
                            </td>

                            <td>
                              81.00 BDT
                              <br />
                              Vat: 0.00 BDT
                              <br />
                              Dis: 0.00 BDT
                              <br />
                              Dis Code: QWERTYUIOP
                            </td>
                            <td>81.00 BDT</td>
                            <td className="text-center">Bangladesh</td>

                            <td className="text-center">
                              <span className="badge badge-success">Active</span>
                            
                            </td>

                            <td className="text-center">
                              <span className="badge badge-success">Paid</span>

                              <span className="badge badge-success">
                                Method: Mobile Money
                              </span>
                            </td>

                            <td className="text-center">
                            <BookingModal title={"View"} claxx={"btn btn-sm btn-info mr-3"} icon={"nav-icon fa fa-eye mr-2"} mode={"view"} data={data} buttonText={"View"} />
                            </td>
                          </tr>
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

export default ViewBookings;
