import { Admin } from '../schemas/adminSchema.js'
import { Employee } from '../schemas/employeeSchema.js'

const loginAdmin = async (data) => {
    try {
        const existAdmin = await Admin.findOne({ email: data.email })
        if (existAdmin) {
            return existAdmin
        } else {
            throw new Error("Admin doesn't exist")
        }
    } catch (error) {
        throw error
    }
}

const loginEmployee = async (data) => {
    try {
        const existEmployee = await Employee.findOne({ email: data.email })
        if (existEmployee) {
            return existEmployee
        } else {
            throw new Error("Employee doesn't exist")
        }
    } catch (error) {
        throw error
    }
}

export {loginAdmin,loginEmployee}