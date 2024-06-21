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
    let email = data.email.toLowerCase().split("@")[0].replaceAll(".", "");
    data.email = email + "@" + data.email.split("@")[1];

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

const getEmployees = async (req, res) => {
  try {
    let result = await getAllEmployees();
    return apiResponseSuccess(
      result,
      true,
      200,
      "Employee getting from DB successfully",
      res
    );
  } catch (error) {
    return apiResponseErr(null, false, 400, error.message, res);
  }
};
const updateEmployee = (req, res) => {
  editEmployee();
};
const deleteEmployee = (req, res) => {
  removeEmployee();
};

export { createEmployee, getEmployees, updateEmployee, deleteEmployee };
