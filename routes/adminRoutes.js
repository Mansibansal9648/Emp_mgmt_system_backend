import { Router } from 'express'
import {
    createAdminSchema,
} from '../utils/validationSchema.js'
import { validationHandler } from '../middlewares/validationHandler.js'
import { createAdmin } from '../controllers/adminController.js'

const router = Router()

router
    .route('/create-admin')
    .post(createAdminSchema, validationHandler, createAdmin)


export default router
