import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSave = () => {
    setSelectedEmployee(null);
    window.location.reload();
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm
        selectedEmployee={selectedEmployee}
        onSave={handleSave}
      />
      <EmployeeList onEdit={handleEdit} />
    </div>
  );
}

export default App;
