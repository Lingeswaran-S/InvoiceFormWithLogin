import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import "./CreateInvoice.css";

const CreateInvoice = ({ setLoggedIn }) => {
  const initialValues = {
    vendor: "",
    purchaseOrder:"",
    purchaseOrderNumber: "",
    poNumber: "",
    invoiceNumber: "",
    invoiceDate: "",
    totalAmount: "",
    paymentTerms: "",
    invoiceDueDate: "",
    glPostDate: "",
    invoiceDescription: "",
    lineAmount: "",
    department: "",
    account: "",
    location: "",
    expenseDescription: "",
    comments: "",
  };

  const validationSchema = Yup.object({
    vendor: Yup.string().required("Vendor is required"),
    purchaseOrder: Yup.string().required("PO Number is required"),
    invoiceNumber: Yup.string().required("Invoice number is required"),
    invoiceDate: Yup.date().required("Invoice date is required"),
    totalAmount: Yup.number().required("Total amount is required"),
    invoiceDueDate: Yup.date().required("Invoice due date is required"),
    invoiceDescription: Yup.string().required(
      "Invoice description is required"
    ),
    lineAmount: Yup.number().required("Line amount is required"),
    department: Yup.string().required("Department is required"),
    account: Yup.string().required("Account is required"),
    location: Yup.string().required("Location is required"),
    expenseDescription: Yup.string().required(
      "Expense description is required"
    )
    
  });

  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };

  const doLogout = () => {
    localStorage.removeItem("session");
    setLoggedIn(false);
  };
  const [activeTab, setActiveTab] = useState(0); // Manage active tab index

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const vendorDetails = useRef(null);
  const invoiceDetails = useRef(null);
  const comments = useRef(null);
  const scrollToElement = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the viewport
      });
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="create-invoice-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>Create New Invoice</h1>
         
          <div>
            <div
              className="tabs"
              style={{
                display: "flex",
                gap: "80px",
              }}
            >
              <p
                className={`tab ${activeTab === 0 ? "make-underline" : ""}`}
                onClick={() => {
                  handleTabClick(0);

                  scrollToElement(vendorDetails);
                }}
              >
                Vendor Details
              </p>
              <p
                className={`tab ${activeTab === 1 ? "make-underline" : ""}`}
                onClick={() => {
                  handleTabClick(1);
                  scrollToElement(invoiceDetails);
                }}
              >
                Invoice Details
              </p>
              <p
                className={`tab ${activeTab === 2 ? "make-underline" : ""}`}
                onClick={() => {
                  handleTabClick(2);
                  scrollToElement(comments);
                }}
              >
                Comments
              </p>
            </div>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Upload Invoice */}
              <div className="splitter">
                <div className="upload-invoice-section">
                  <label htmlFor="invoiceUpload" className="upload-label">
                    <div style={{display:"grid"}}>
                    <img
                      src="upload1.gif"
                      alt="Example GIF"
                      style={{ width: "230px", height: "110%" }}
                    />
                    <img
                      src="/upload.png"
                      alt="Upload"
                      style={{ width: "114px", height: "36px" ,position:"relative",left:"60px"}}
                    /></div>
                    <h6><strong style={{color:"blue"}}>Click to upload</strong> or Drag and drop</h6>
                  </label>
                  
                  <input
                    id="invoiceUpload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setFieldValue("invoiceUpload", e.target.files[0])
                    }
                  />
                </div>

                <div className="details-section">
                  {/* Vendor Details */}
                  <div className="scrollableDiv">
                    <div style={{ display: "flex" }}>
                      <img
                        src="/A1.png"
                        alt="Invoice Icon"
                        width="40"
                        height="40"
                        className="title-image"
                      />
                      <h2>Vendor Details</h2>
                    </div>
                    <div className="form-group" ref={vendorDetails}>
                      <h3>Vendor Information</h3>
                      <label htmlFor="vendor">Vendor</label>
                      <Field
                        as="select"
                        name="vendor"
                        id="vendor"
                        style={{ backgroundColor: "#FFFF" }}
                      >
                        <option value="">Select Vendor</option>
                        <option value="A-1 Exterminators">
                          A-1 Exterminators
                        </option>
                      </Field>
                      <ErrorMessage
                        name="vendor"
                        component="div"
                        className="error"
                      />
                    </div>

                    {/* Invoice Details */}
                    <div style={{ display: "flex" }} ref={invoiceDetails}>
                      <img
                        src="/A2.png"
                        alt="Invoice Icon"
                        width="40"
                        height="40"
                       className="title-image"
                      />
                      <h2>Invoice Details</h2>
                    </div>
                    <div className="form-group">
                      <h3>General Information</h3>
                      <label htmlFor="purchaseOrder">
                        Purchase Order Number
                      </label>
                      <Field
                        as="select"
                        name="purchaseOrder"
                        id="purchaseOrder"
                        style={{ backgroundColor: "#FFFF" }}
                      >
                        <option value="">Select PO Number</option>
                        <option value="PO-1">PO-1</option>
                      </Field>
                      <ErrorMessage
                        name="purchaseOrder"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="invoiceNumber">Invoice Number</label>
                        <Field
                          type="text"
                          name="invoiceNumber"
                          id="invoiceNumber"
                        />
                        <ErrorMessage
                          name="invoiceNumber"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="invoiceDate">Invoice Date</label>
                        <Field
                          type="date"
                          name="invoiceDate"
                          id="invoiceDate"
                        />
                        <ErrorMessage
                          name="invoiceDate"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="totalAmount">Total Amount</label>
                        <div className="input-group ">
                          <span
                            class="input-group-addon"
                            style={{ borderRadius: "5px 0px 0px 5px" }}
                          >
                            $
                          </span>
                          {/* <Field type="number" name="totalAmount" id="totalAmount" /> */}
                          <Field
                            type="number"
                            name="totalAmount"
                            id="totalAmount"
                            placeholder="0.00"
                            style={{ borderRadius: "0px 5px 5px 0px" }}
                          />
                        </div>
                        <ErrorMessage
                          name="totalAmount"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="invoiceDueDate">Invoice Due Date</label>
                        <Field
                          type="date"
                          name="invoiceDueDate"
                          id="invoiceDueDate"
                        />
                        <ErrorMessage
                          name="invoiceDueDate"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="invoiceDescription">
                        Invoice Description
                      </label>
                      <Field
                        as="textarea"
                        name="invoiceDescription"
                        id="invoiceDescription"
                      />
                      <ErrorMessage
                        name="invoiceDescription"
                        component="div"
                        className="error"
                      />
                    </div>

                    {/* Expense Details */}
                    <h2>Expense Details</h2>
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="lineAmount">Line Amount</label>
                        <div className="input-group ">
                          <span
                            class="input-group-addon"
                            style={{ borderRadius: "5px 0px 0px 5px" }}
                          >
                            $
                          </span>

                          <Field
                            type="number"
                            name="lineAmount"
                            id="lineAmount"
                            placeholder="0.00"
                            style={{ borderRadius: "0px 5px 5px 0px" }}
                          />
                        </div>

                        <ErrorMessage
                          name="lineAmount"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <Field
                          as="select"
                          name="department"
                          id="department"
                          style={{ backgroundColor: "#FFFF" }}
                        >
                          <option value="">Select Department</option>
                          {/* Add departments here */}
                        </Field>
                        <ErrorMessage
                          name="department"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="account">Account</label>
                        <Field
                          as="select"
                          name="account"
                          id="account"
                          style={{ backgroundColor: "#FFFF" }}
                        >
                          <option value="">Select Account</option>
                          {/* Add accounts here */}
                        </Field>
                        <ErrorMessage
                          name="account"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <Field
                          as="select"
                          name="location"
                          id="location"
                          style={{ backgroundColor: "#FFFF" }}
                        >
                          <option value="">Select Location</option>
                          {/* Add locations here */}
                        </Field>
                        <ErrorMessage
                          name="location"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="expenseDescription">
                        Expense Description
                      </label>
                      <Field
                        as="textarea"
                        name="expenseDescription"
                        id="expenseDescription"
                      />
                      <ErrorMessage
                        name="expenseDescription"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div style={{ display: "flex" }} ref={comments}>
                      <img
                        src="/comments.png"
                        alt="Invoice Icon"
                        width="40"
                        height="40"
                        className="title-image"
                      />
                      <h2>Comments</h2>
                    </div>

                    <div className="form-group">
                      <div style={{ position: "relative" }}>
                        <input
                          name="comments"
                          placeholder="Add comment and use @Name to tag someone"
                          style={{
                            width: "392px",
                            padding: "10px 40px 10px 10px", // Add padding to avoid text overlapping with the icon
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                          }}
                        />
                        <img
                          src="/arrow.png"
                          alt="comments send"
                          style={{
                            position: "absolute",
                            right: "10px", // Adjust as per your design
                            top: "50%",
                            transform: "translateY(-50%)",
                            height: "20px", // Adjust size as needed
                            pointerEvents: "none", // Prevent interaction with the icon
                          }}
                        />
                      </div>

                      <ErrorMessage
                        name="invoiceNumber"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="form-actions">
                    <div>
                      <img
                        src="/more.png"
                        alt="Invoice Icon"
                        width="20"
                        height="20"
                        style={{
                          marginRight: "8px",
                          marginTop: "7px",
                          position: "absolute",
                        }}
                      />
                      <button type="button" style={{ marginLeft: "27px",width:"185px" }}>
                        Save as Draft
                      </button>
                    </div>

                    <button type="submit" style={{width:"185px"}}>Submit & New</button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {/* <button > */}
      <img
        onClick={doLogout}
        src="/exit.png"
        alt="Exit Icon"
        width="40"
        height="40"
        style={{
          top: "15px",
          position: "sticky",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default CreateInvoice;
