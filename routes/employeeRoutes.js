import { Router } from 'express'
import {
    createEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
} from '../controllers/employeeController.js'
import { createEmployeeSchema,updateEmployeeSchema } from '../utils/validationSchema.js'
import { validationHandler } from '../middlewares/validationHandler.js'

const router = Router()

router
    .route('/create-employee')
    .post(createEmployeeSchema, validationHandler, createEmployee)
router.route('/all-employees').get(getEmployees)
router.route('/edit-employee').put(updateEmployeeSchema,validationHandler,updateEmployee)
router.route('/delete-employee').delete(deleteEmployee)

export default router
