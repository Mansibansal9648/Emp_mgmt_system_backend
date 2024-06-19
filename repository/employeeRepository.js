import { Employee } from "../schemas/employeeSchema.js";

const createNewEmployee = async(data) => {
//   return new Promise(async (resolve, reject) => {
    try {
      //   const existedUser = await User.findOne({
      //     $or: [{ username: data.username }, { email: data.email }],
      //   });
      //   if (
      //     existedUser &&
      //     existedUser.username === data.username &&
      //     existedUser.email === data.email
      //   ) {
      //     throw new Error("Username and Email Already Exists");
      //   } else if (existedUser && existedUser.username === data.username) {
      //     throw new Error("Username Already Exists");
      //   } else if (existedUser && existedUser.email === data.email) {
      //     throw new Error("Email Already Exists");
      //   } else {
      // console.log("yttyu", data);
      const employee = new Employee(data);
      //  const newUser=await User.insert(req)
      console.log(employee);
      const newEmployee = await employee.save();
      console.log(newEmployee);
      return(newEmployee);
      //   }
    } catch (error) {
      throw(error);
    }
//   });
};

const getAllEmployees = (data) => {};
const editEmployee = (data) => {};
const removeEmployee = (data) => {};

export { createNewEmployee, getAllEmployees, editEmployee, removeEmployee };
