import { Employee } from "../schemas/employeeSchema.js";

const createNewEmployee = async(data) => {
//   return new Promise(async (resolve, reject) => {
    try {
        const existedEmployee = await Employee.findOne({  email: data.email 
        });

      if (existedEmployee && existedEmployee.email === data.email) {
          throw new Error("Email Already Exists");
        } else {
      // console.log("yttyu", data);
      const employee = new Employee(data);
      //  const newUser=await User.insert(req)
      // console.log(employee);
      const newEmployee = await employee.save();
      // console.log(newEmployee);
      return(newEmployee);
        }
    } catch (error) {
      throw(error);
    }
//   });
};

const getAllEmployees = (data) => {};
const editEmployee = (data) => {};
const removeEmployee = (data) => {};

export { createNewEmployee, getAllEmployees, editEmployee, removeEmployee };
