import { useState } from 'react';
import { Employees } from './components/features/employees/Employees';
import { Footer } from './components/layout/footer/Footer';
import { Header } from './components/layout/header/Header';
import { Form } from './components/features/form/Form';
import departmentData from './data/departments';
import type { Department } from './types/department';

function App() {
  const [departments, setDepartments] = useState<Department[]>(departmentData);

  return (
    <>
      <Header />
      <Employees departments={departments}/>
      <Form 
        departments={departments} 
        updateDepartments={setDepartments} 
      />
      <Footer />
    </>
  );
}

export default App;
