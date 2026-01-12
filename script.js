const employees = ["Jarone", "Lars", "Christian", "Zach"]

const populateEmployeeList = (listNode, employees) => {
    employees.forEach(employees => {
        const newLiNode = document.createElement("li");

        newLiNode.innerHTML = `<a href="#">${term}</a>`;

        listNode.appendChild(newLiNode);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const employeeListNode = document.querySelector(".employees__list");

    populateEmployeeList(employeeListNode, employees);
});