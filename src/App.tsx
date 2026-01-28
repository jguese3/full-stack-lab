import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Employees } from './components/features/employees/Employees';
import { Form } from './components/features/form/Form';
import departmentData from './data/departments';
import type { Department } from './types/department';
import { Layout } from "./components/layout/Layout";

function App() {
  const [departments, setDepartments] = useState<Department[]>(departmentData);

  return (
<Routes>
  <Route index element={<Layout />} />
</Routes>
  );
}

export default App;
