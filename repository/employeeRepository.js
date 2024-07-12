import { Employee } from '../schemas/employeeSchema.js'

const createNewEmployee = async (data) => {
    //   return new Promise(async (resolve, reject) => {
    try {
        const existedEmployee = await Employee.findOne({
            $or: [{ email: data.email }, { phone: data.phone }],
        })
        if (
            existedEmployee &&
            existedEmployee.email === data.email &&
            existedEmployee.phone === data.phone
        ) {
            throw new Error('Email and Phone no already exists')
        } else if (existedEmployee && existedEmployee.email === data.email) {
            throw new Error('Email already Exists')
        } else if (existedEmployee && existedEmployee.phone === data.phone) {
            throw new Error('Phone no already Exists')
        } else {
            // console.log("yttyu", data);
            const employee = new Employee(data)
            //  const newUser=await User.insert(req)
            // console.log(employee);
            const newEmployee = await employee.save()
            // console.log(newEmployee);
            return newEmployee
        }
    } catch (error) {
        throw error
    }
    //   });
}

const getAllEmployees = async (page, limit, offset) => {
    try {
        const existedEmployees = await Employee.find().skip(offset).limit(limit)
        // console.log(existedEmployees)
        const totalEmployees = await Employee.countDocuments()
        const totalPages = page && limit ? Math.ceil(totalEmployees / limit) : 1
        return {
            totalEmployees: totalEmployees,
            totalPages: totalPages,
            currentPage: page || 1,
            existedEmployees,
        }
    } catch (error) {
        throw error
    }
}
const editEmployee = async (data) => {
    try {
        // console.log(data.employeeId)
        const employee = await Employee.findById(data.employeeId)
        // console.log(employee)
        if (!employee) {
            // console.log("employee",employee)
            throw new Error("Employee doesn't exist")
        }

        //    if (employee && employee._id === data.employeeId) {
           else{
        const updatedEmployee = await Employee.updateOne(
            {_id:data.employeeId},
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                designation: data.designation,
                department: data.department,
                salary: data.salary,
                date_of_joining: data.date_of_joining,
            }
        )
        // console.log('update', updatedEmployee)
        return updatedEmployee
        }
        // else {
        //     console.log(employee)
        //     throw new Error("Employee doesn't exist")
        // }
    } catch (error) {
        throw error
    }
}
const removeEmployee = async (employeeId) => {
    try {
        const employee = await Employee.findById(employeeId)
        // console.log(employee)
        if(!employee){
            // console.log("ghhik")
            throw new Error("Employee doesn't exist")
        }
        // if (employee && employee.id === employeeId) {
        else{
            const deletedEmployee = await Employee.deleteOne({_id:employeeId})
            return deletedEmployee
        } 
        // else {
        //     throw new Error("Employee doesn't exist")
        // }
    } catch (error) {
        throw error
    }
}

export { createNewEmployee, getAllEmployees, editEmployee, removeEmployee }
