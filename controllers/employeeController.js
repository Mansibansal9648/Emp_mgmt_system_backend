import {
  createNewEmployee,
  getAllEmployees,
  editEmployee,
  removeEmployee,
} from "../repository/employeeRepository.js";
import {
  apiResponseSuccess,
  apiResponseErr,
} from "../middlewares/apiResponse.js";

const createEmployee = async (req, res) => {
  try {
    let data = req.body;
    let date=data.date_of_joining;
    if(date>new Date()){
      throw new Error("Date should not be greater than today's date")
    }
    // console.log("body", data);
    let result = await createNewEmployee(data);
    // console.log("result",result)
    return apiResponseSuccess(
      {},
      true,
      201,
      "Employee created successfully",
      res
    );
  } catch (error) {
    return apiResponseErr(null, false, 400, error.message, res);
  }
};

const getEmployees = (req, res) => {
  getAllEmployees();
};
const updateEmployee = (req, res) => {
  editEmployee();
};
const deleteEmployee = (req, res) => {
  removeEmployee();
};

export { createEmployee, getEmployees, updateEmployee, deleteEmployee };
