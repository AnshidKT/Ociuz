import React from "react";

function EmployeeList({ employees, onEditEmployee, onDeleteEmployee }) {
  return (
    <div className="employee-box">
      <h2>Employee List</h2>

      <tbody className="table">
        {employees.map((employee, index) => (
          <tr key={index} className="lists">
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.designation}</td>
            <td>{employee.address}</td>
            <td>
              <button
                className="edt-btn"
                onClick={() => onEditEmployee(employee)}
              >
                Edit
              </button>
              <button
                className="dlt-btn"
                onClick={() => onDeleteEmployee(employee)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default EmployeeList;
