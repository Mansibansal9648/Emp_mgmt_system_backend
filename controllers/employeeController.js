import {
    createNewEmployee,
    getAllEmployees,
    editEmployee,
    removeEmployee,
} from '../repository/employeeRepository.js'

const createEmployee = (req, res) => {
    createNewEmployee()
}

const getEmployees = (req, res) => {
    getAllEmployees()
}
const updateEmployee = (req, res) => {
    editEmployee()
}
const deleteEmployee = (req, res) => {
    removeEmployee()
}

export { createEmployee, getEmployees, updateEmployee, deleteEmployee }
