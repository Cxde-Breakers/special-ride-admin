import React, { useEffect } from "react";
import "./Admin.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import TransactionModal from "./TransactionModal";

const ViewTransactions = () => {
    const data = {
        transactionId: "66682afd028ee",
        paymentBy: "Shyamoli Dean",
        receiveBy: "Abdul Karim",
        paymentMethod: "Cash Payment",
        amount: "1.00 INR",
        status: "paid",
        date: "11 Jun 24",
    }
  useEffect(() => {
    document.title = "View Transactions | Special Ride";
  }, []);

  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AdminHeader />

        <AdminSidebar active={"transaction"} />

        <div className="content-wrapper">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">Transactions</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                            <li className="breadcrumb-item active">Transactions</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-12 d-flex justify-content-between">
                                        <h3 className="card-title">Manage Transactions </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body table-responsive p-0">
                                <table id="dataTables" className="table table-hover text-nowrap jsgrid-table">
                                    <thead>
                                        <tr className="text-center">
                                            <th >#</th>
                                            <th >Date</th>
                                            <th >Transaction ID</th>
                                            <th >Order ID</th>
                                            <th >Payment By</th>
                                            <th >Type</th>
                                            <th >Payment Method</th>
                                            <th >Amount</th>
                                            <th >Country</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                   
                                        <tr className="text-center">
                                            <td>1</td>
                                            <td>11 Jun 24</td>
                                            <td>66682afd028ee</td>
                                            <td>1</td>
                                            <td>Shyamoli Dean</td>

                                            <td>In</td>
                                            <td className="">Bonus</td>
                                            <td className="">1.00 INR</td>
                                            <td>India</td>
                                            <td>
                                            <TransactionModal title={"View"} claxx={"btn btn-sm btn-info mr-3"} icon={"nav-icon fa fa-eye mr-2"} mode={"view"} data={data} buttonText={"View"} />
                                            </td>
                                            <td>
                                            <TransactionModal title={"Update"} claxx={"btn btn-sm btn-warning mr-3"} icon={"nav-icon fa fa-edit mr-2"} mode={"edit"} data={data} buttonText={"Update"} />
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

export default ViewTransactions;
