import { useState } from 'react';
import departmentData from "../../../data/departments";
import type { Department } from '../../../types/department';

export function Form({
    departments,
    updateDepartments
}:
{
    departments: Department[],
    updateDepartments: React.Dispatch<React,SetStateAction<Department[]>>
}) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [departmentName, setDepartmentName] = useState<string>('');
  return (
    <>
      <label>
        First name: 
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        Last name: 
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        Department: 
        <input
          value={departmentName}
          onChange={e => setDepartmentName(e.target.value)}
        />
      </label>
    </>
  );
}