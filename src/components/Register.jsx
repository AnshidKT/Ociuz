import React, { useState, useEffect } from "react";

function EmployeeForm({ employee, onAddEmployee, onUpdateEmployee }) {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    address: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (employee) {
      setEmployeeData(employee);
    } else {
      setEmployeeData({
        name: "",
        email: "",
        phone: "",
        designation: "",
        address: "",
      });
    }
  }, [employee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    for (const key in employeeData) {
      if (!employeeData[key]) {
        errors[key] = "This field cannot be empty";
      }
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (employee) {
        onUpdateEmployee(employeeData);
      } else {
        onAddEmployee(employeeData);
      }
      setEmployeeData({
        name: "",
        email: "",
        phone: "",
        designation: "",
        address: "",
      });
      setValidationErrors({});
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter Your Name"
        type="text"
        className="input"
        name="name"
        value={employeeData.name}
        onChange={handleInputChange}
      />
      {validationErrors.name && (
        <span className="error">{validationErrors.name}</span>
      )}

      <input
        placeholder="Email"
        type="text"
        className="input"
        name="email"
        value={employeeData.email}
        onChange={handleInputChange}
      />
      {validationErrors.email && (
        <span className="error">{validationErrors.email}</span>
      )}

      <input
        placeholder="Phone Number"
        type="text"
        className="input"
        name="phone"
        value={employeeData.phone}
        onChange={handleInputChange}
      />
      {validationErrors.phone && (
        <span className="error">{validationErrors.phone}</span>
      )}

      <input
        placeholder="Designation"
        type="text"
        className="input"
        name="designation"
        value={employeeData.designation}
        onChange={handleInputChange}
      />
      {validationErrors.designation && (
        <span className="error">{validationErrors.designation}</span>
      )}

      <input
        placeholder="Address"
        type="text"
        className="input"
        name="address"
        value={employeeData.address}
        onChange={handleInputChange}
      />
      {validationErrors.address && (
        <span className="error">{validationErrors.address}</span>
      )}

      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default EmployeeForm;
