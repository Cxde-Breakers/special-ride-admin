import React, { useState, useEffect } from "react";
import { Modal } from "antd";
// import { QuestionCircleOutlined } from "@ant-design/icons";

const BookingModal = ({ data, mode, claxx, icon, title, buttonText }) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    subcategoryName: "",
    category: "",
    status: "",
    order: "",
  });

  useEffect(() => {
    if (data) {
      setFormState({
        subcategoryName: data.subcategoryName,
        category: data.category,
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
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col-6">
              <h3 className="card-title">{title} Booking Details</h3>
            </div>
          </div>
        </div>
        {mode === "view" ? (
          <div className="card-body table-responsive p-2 ">
                                <table id="dataTables" className="table table-hover table-striped">
                                    <tr>
                                        <td width="20%">Ride</td>
                                        <td width="80%">Motors Bike</td>
                                    </tr>
                                    <tr>
                                        <td>Booking By</td>
                                        <td>Abdul Karim</td>
                                    </tr>
                                    <tr>
                                        <td>Booking Ride</td>
                                        <td>Abul Hasan</td>
                                    </tr>
                                    <tr>
                                        <td>Entrance Point</td>
                                        <td>Uttara Section 10, Kamarpara</td>
                                    </tr>
                                    <tr>
                                        <td>Destination Point</td>
                                        <td>Bonani Model Town</td>
                                    </tr>
                                    <tr>
                                        <td>Suggest Fare</td>
                                        <td>450tk</td>
                                    </tr>
                                    <tr>
                                        <td>Total Booking</td>
                                        <td>
                                            <span className="badge bg-success">3</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Payment</td>
                                        <td>Cash Payment</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>
                                            26/06/2023
                                        </td>
                                    </tr>
                                </table>
                            </div>
        ) : (
          <>
            <div className="card-body">
                                <form action="" method="post">
                                    
                                    <div className="mb-4">
                                        <label for="status" className="form-label">Status</label>
                                        <select name="status" id="status" className="form-control form-select" required value={formState.status}
                              onChange={handleInputChange}>
                                          
                                             <option value="" className="d-none">Pending</option>
                                            <option value="1">Approved</option>
                                            <option value="2">Denied</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-success">Update</button>
                                </form>
                            </div>

          </>
        )}
      </Modal>
    </>
  );
};

export default BookingModal;
