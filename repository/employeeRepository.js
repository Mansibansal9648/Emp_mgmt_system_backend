import { Employee } from "../schemas/employeeSchema.js";

const createNewEmployee = async (data) => {
  //   return new Promise(async (resolve, reject) => {
  try {
    const existedEmployee = await Employee.findOne({
      $or: [{ email: data.email }, { phone: data.phone }],
    });
    if (
      existedEmployee &&
      existedEmployee.email === data.email &&
      existedEmployee.phone === data.phone
    ) {
      throw new Error("Email and Phone no already exists");
    } else if (existedEmployee && existedEmployee.email === data.email) {
      throw new Error("Email already Exists");
    } else if (existedEmployee && existedEmployee.phone === data.phone) {
      throw new Error("Phone no already Exists");
    } else {
      // console.log("yttyu", data);
      const employee = new Employee(data);
      //  const newUser=await User.insert(req)
      // console.log(employee);
      const newEmployee = await employee.save();
      // console.log(newEmployee);
      return newEmployee;
    }
  } catch (error) {
    throw error;
  }
  //   });
};

const getAllEmployees = async() => {
  try{
    const existedEmployees = await Employee.find()
    // console.log(existedEmployees)
      return existedEmployees;

  }catch(error){
    throw error;
  }
};
const editEmployee = (data) => {};
const removeEmployee = (data) => {};

export { createNewEmployee, getAllEmployees, editEmployee, removeEmployee };
