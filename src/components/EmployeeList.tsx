import { departments } from "./employee_data";

export function EmployeeList() {
    const departmentName = departments.map(department =>
        <li key={department.name}>
            <h2>{department.name}</h2>

            <ul>
                {department.employees.map((employee, i) => (
                    <li key={i}>
                        {employee.firstName} {employee.lastName}
                    </li>
                ))}
            </ul>
        </li>
    );
    return <ul>{departmentName}</ul>;
}