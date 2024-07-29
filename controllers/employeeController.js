import {
    createNewEmployee,
    getAllEmployees,
    editEmployee,
    removeEmployee,
} from '../repository/employeeRepository.js'
import {
    apiResponseSuccess,
    apiResponseErr,
    apiResponsePagination,
} from '../middlewares/apiResponse.js'
import bcrypt from 'bcrypt'

const createEmployee = async (req, res) => {
    try {
        let data = req.body
        let password="Admin@123"
        let email = data.email.toLowerCase().split('@')[0].replaceAll('.', '')
        data.email = email + '@' + data.email.split('@')[1]

        // console.log("body", data);
        const passwordSalt = await bcrypt.genSalt()

        let hashedPassword = await bcrypt.hash(password, passwordSalt)
        data.password = hashedPassword
        let result = await createNewEmployee(data)
        // console.log("result",result)
        return apiResponseSuccess(
            {},
            true,
            201,
            'Employee created successfully',
            res
        )
    } catch (error) {
        return apiResponseErr(null, false, 400, error.message, res)
    }
}

const getEmployees = async (req, res) => {
    try {
        const { page, limit } = req.query
        const offset = page && limit ? (page - 1) * parseInt(limit, 10) : null

        let { totalEmployees, totalPages, currentPage, existedEmployees } =
            await getAllEmployees(page, limit, offset)
        let pagination = {
            page: currentPage,
            totalPages: totalPages,
            totalItems: totalEmployees,
        }
        // console.log(result)

        return apiResponsePagination(
            existedEmployees,
            true,
            200,
            'Employee getting from DB successfully',
            pagination,
            res
        )
    } catch (error) {
        return apiResponseErr(null, false, 400, error.message, res)
    }
}
const updateEmployee = async (req, res) => {
    try {
        let data = req.body;

      let result=  await editEmployee(data);
      return apiResponseSuccess(
        {},
        true,
        200,
        'Employee updated successfully',
        res
    )
    } catch (error) {
        return apiResponseErr(null, false, 400, error.message, res)
    }
}
const deleteEmployee = async (req, res) => {
    try {
        const { employeeId } = req.query
        let result = await removeEmployee(employeeId)
        return apiResponseSuccess(
            {},
            true,
            200,
            'Employee deleted successfully',
            res
        )
    } catch (error) {
        return apiResponseErr(null, false, 400, error.message, res)
    }
}

export { createEmployee, getEmployees, updateEmployee, deleteEmployee }
