import React, { useEffect } from "react";
import "./Admin.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import BookingModal from "./BookingModal";

const ViewBookings = () => {
  const data = {}

  useEffect(() => {
    document.title = "View Bookings | Special Ride";
  }, []);

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AdminHeader />

        <AdminSidebar active={"booking"} />

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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdminFooter />
      </div>
    </div>
  );
};

export default ViewBookings;
