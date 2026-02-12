import React, { useEffect, useState } from "react";
import { createEmployee, updateEmployee } from "./EmployeeService";

const EmployeeForm = ({ selectedEmployee, onSave }) => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: ""
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (employee.id) {
      updateEmployee(employee.id, employee).then(() => {
        onSave();
        resetForm();
      });
    } else {
      createEmployee(employee).then(() => {
        onSave();
        resetForm();
      });
    }
  };

  const resetForm = () => {
    setEmployee({
      name: "",
      email: "",
      department: ""
    });
  };

  return (
    <div>
      <h2>{employee.id ? "Update Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />
        <button type="submit">
          {employee.id ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
