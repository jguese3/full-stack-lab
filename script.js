import { departments } from "./data/employee_data";

const populateEmployeeList = (listNode, employees) => {
    employees.forEach(employees => {
        const newLiNode = document.createElement("li");

        newLiNode.innerHTML = `<a href="#">${employees}</a>`;

        listNode.appendChild(newLiNode);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const employeeListNode = document.querySelector(".employees__list");

    populateEmployeeList(employeeListNode, employees);
});