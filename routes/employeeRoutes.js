import { Router } from 'express'
import {
    createEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
} from '../controllers/employeeController.js'

const router = Router()

router.route('/employee').post(createEmployee)
router.route('/allEmployees').get(getEmployees)
router.route('/editemployee').post(updateEmployee)
router.route('/deleteemployee').post(deleteEmployee)

export default router
