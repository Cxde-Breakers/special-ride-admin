import React, { useEffect } from "react";
import "./Admin.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import CategoryModal from "./CategoryModal";
import DeleteModal from "../components/DeleteModal";

const ViewCategories = () => {
  const data = {
    categoryName: "Ride",
    status: "active",
    order: "0",
    image: "/assets/images/default-user.png",
  };

  useEffect(() => {
    document.title = "View Categories | Special Ride";
  }, []);

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AdminHeader />

        <AdminSidebar active={"category"} />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Category</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Category</li>
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
                          <h3 className="card-title">Category List</h3>
                        </div>
                        <div className="col-6">
                          <div className="float-right">
                            <CategoryModal
                              title={"Create"}
                              claxx={"btn btn-success btn-sm"}
                              icon={"nav-icon fa fa-plus mr-2"}
                              mode={"create"}
                              buttonText={"Add New"}
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
                            <th>Image</th>
                            <th>Name</th>
                            <th>Order Number</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <img
                                src="/assets/images/default-user.png"
                                className="border rounded-circle"
                                alt="default"
                                width="50"
                              />
                            </td>
                            <td>Ride</td>
                            <td>1</td>
                            <td>
                              <span className="badge bg-success">Active</span>
                            </td>
                            <td>
                              <CategoryModal
                                title={"Edit"}
                                claxx={"btn btn-sm btn-warning mr-3"}
                                icon={"nav-icon fa fa-edit mr-2"}
                                mode={"edit"}
                                data={data}
                                buttonText={"Edit"}
                              />
                              <DeleteModal
                                title={"Delete Category"}
                                content={
                                  "Are you sure you want to delete this item? This action cannot be undone."
                                }
                                claxx={"btn btn-sm btn-danger mr-3"}
                              />
                              <a href="/" className="btn btn-info btn-sm">
                                Subcategory
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
        </div>

        <AdminFooter />
      </div>
    </div>
  );
};

export default ViewCategories;
