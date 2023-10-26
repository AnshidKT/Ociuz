import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/Register";
import "./App.css";
function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const editEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((emp) =>
      emp === selectedEmployee ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
    setSelectedEmployee(null); // Clear selected employee after editing
  };

  const deleteEmployee = (employeeToDelete) => {
    const updatedEmployees = employees.filter(
      (emp) => emp !== employeeToDelete
    );
    setEmployees(updatedEmployees);
    setSelectedEmployee(null); // Clear selected employee after deleting
  };

  return (
    <div className="container">
      <h1 className="heading">Registration Form</h1>
      <div className="sub-container">
        <EmployeeForm
          employee={selectedEmployee}
          onAddEmployee={addEmployee}
          onUpdateEmployee={editEmployee}
        />
        <EmployeeList
          employees={employees}
          onEditEmployee={setSelectedEmployee}
          onDeleteEmployee={deleteEmployee}
        />
      </div>
    </div>
  );
}

export default App;
