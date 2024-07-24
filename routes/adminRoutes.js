import { Router } from 'express'
import {
    createAdminSchema,
    adminLoginSchema,
} from '../utils/validationSchema.js'
import { validationHandler } from '../middlewares/validationHandler.js'
import { createAdmin, adminLogin } from '../controllers/adminController.js'

const router = Router()

router
    .route('/create-admin')
    .post(createAdminSchema, validationHandler, createAdmin)

router
    .route('/login-admin')
    .post(adminLoginSchema, validationHandler, adminLogin)

export default router
