import { useState } from 'react';
import { Employees } from './components/features/employees/Employees';
import { Footer } from './components/layout/footer/Footer';
import { Header } from './components/layout/header/Header';
import { Form } from './components/features/form/Form';
import departmentData from './data/departments';
import type { Department } from './types/department';
<<<<<<< HEAD
import { Nav } from './components/layout/nav/Nav';
import { OrganizationList } from './components/features/organizations/Organizations';
import { organizationData } from './data/organization';
import { Routes, Route } from 'react-router-dom';
=======
>>>>>>> 29271c713ab2bf8439485582df51b7aa4536e1ed

function App() {
  const [departments, setDepartments] = useState<Department[]>(departmentData);

  return (
    <>
      <Header />
<<<<<<< HEAD
      <Nav />
      <Routes>
        <Route
          path="/employees"
          element={
            <>
              <Employees departments={departments} />
              <Form
                departments={departments}
                updateDepartments={setDepartments}
              />
            </>
          }
        />
        <Route
          path="/organization"
          element={<OrganizationList organization={organizationData}/>}
          />
      </Routes>
=======
      <Employees/>
      <Form 
        departments={departments} 
        updateDepartments={setDepartments} 
      />
>>>>>>> 29271c713ab2bf8439485582df51b7aa4536e1ed
      <Footer />
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 29271c713ab2bf8439485582df51b7aa4536e1ed
