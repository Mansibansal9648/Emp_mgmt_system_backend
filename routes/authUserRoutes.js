import { Router } from 'express'
import {
    loginSchema,
} from '../utils/validationSchema.js'
import { validationHandler } from '../middlewares/validationHandler.js'
import { adminLogin, employeeLogin } from '../controllers/authUserController.js'

const router = Router()

router
    .route('/login-admin')
    .post(loginSchema, validationHandler, adminLogin)

router
    .route('/login-employee')
    .post(loginSchema, validationHandler, employeeLogin)

export default router