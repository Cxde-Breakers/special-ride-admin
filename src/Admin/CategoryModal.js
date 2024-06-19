import React, { useState, useEffect } from "react";
import { Modal, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const CategoryModal = ({ data, mode, claxx, icon, title, buttonText }) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    categoryName: "",
    status: "",
    order: "",
  });

  useEffect(() => {
    if (data) {
      setFormState({
        categoryName: data.categoryName,
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
              <h3 className="card-title">{title} Category</h3>
            </div>
          </div>
        </div>
        {mode === "view" ? (
          <div className="">
            <table className="table">
              <tr>
                <td>Category</td>
                <td>{data?.categoryName}</td>
              </tr>
              <tr>
                <td>Answer</td>
                <td>{data?.answer}</td>
              </tr>

              <tr>
                <td>Status</td>
                <td>
                  <span
                    className={`badge badge-${
                      data?.status === "active" ? "success" : "danger"
                    }`}
                  >
                    {data?.status === "active" ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Order</td>
                <td>{data?.order}</td>
              </tr>
            </table>
          </div>
        ) : (
          <>
            <div className="card-body">
              <form enctype="multipart/form-data">
                <div className="row d-flex justify-content-center">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="form-label required" for="name">
                        Category Name <span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        className="form-control"
                        name="categoryName"
                        type="text"
                        placeholder="Enter category name "
                        autocomplete="off"
                        required
                        value={formState.categoryName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="order" className="form-label">
                          Order Number <span className="text-danger">*</span>{" "}
                          <Tooltip
                            placement="right"
                            title={"If you don't want ordering set 0"}
                          >
                            <QuestionCircleOutlined />
                          </Tooltip>
                        </label>
                        <input
                          type="number"
                          name="order"
                          id="order"
                          placeholder="Enter order number"
                          required
                          className="form-control"
                          value={formState.order}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label required" for="password">
                        Status <span className="text-danger">*</span>
                      </label>
                      <select
                        name="status"
                        id="status"
                        className="form-control"
                        required
                        value={formState.status}
                        onChange={handleInputChange}
                      >
                        <option value="">Select status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label required" for="image">
                        Image
                        <span className="text-danger">*</span>
                        <span className="text-warning">
                          (Prefer size 150 x 100)
                        </span>
                      </label>
                      <input
                        className="form-control"
                        name="image"
                        type="file"
                        value=""
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center  my-3">
                  <button
                    className="btn btn-success btn-block btn-sm"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>

            {/* <div className="card-body">
                  <form encType="multipart/form-data">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-12">
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="question" className="form-label">
                              Question <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="question"
                              id="question"
                              required
                              placeholder="Enter question here..."
                              className="form-control"
                              value={formState.question}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="answer" className="form-label">
                              Answer <span className="text-danger">*</span>
                            </label>
                            <textarea
                              required
                              name="answer"
                              className="form-control"
                              placeholder="Enter answer here ..."
                              rows={7}
                              value={formState.answer}
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="status" className="form-label">
                              Status <span className="text-danger">*</span>
                            </label>
                            <select
                              name="status"
                              id="status"
                              className="form-control"
                              required
                              value={formState.status}
                              onChange={handleInputChange}
                            >
                              <option value="">Select status</option>
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="order" className="form-label">
                              Order Number <span className="text-danger">*</span>{" "}
                              <Tooltip placement="right" title={"This is a required field."}>
                                <QuestionCircleOutlined />
                              </Tooltip>
                            </label>
                            <input
                              type="number"
                              name="order"
                              id="order"
                              placeholder="Enter order number"
                              required
                              className="form-control"
                              value={formState.order}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <button type="button" className="btn btn-success">
                              {mode === "create" ? "Create" : "Update"} FAQ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div> */}
          </>
        )}
      </Modal>
    </>
  );
};

export default CategoryModal;
