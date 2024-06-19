import {Router} from 'express';
import {createEmployee, getEmployees,updateEmployee,deleteEmployee} from '../controllers/employeeController.js'
import { createEmployeeSchema } from '../utils/validationSchema.js';
import { validationHandler } from '../middlewares/validationHandler.js';

 const router=Router();

router.route('/create-employee').post(createEmployeeSchema,validationHandler,createEmployee)
router.route('/allEmployees').get(getEmployees)
router.route('/editemployee').post(updateEmployee)
router.route('/deleteemployee').post(deleteEmployee)

export default router;