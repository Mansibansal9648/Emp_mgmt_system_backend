import express from 'express'
import { body } from 'express-validator'

const createEmployeeSchema = [
    body('name')
        .notEmpty()
        .withMessage('Name is required field')
        .bail()
        .matches(/^[a-zA-Z\s]{3,25}$/)
        .withMessage('Invalid name format'),
    body('email')
        .notEmpty()
        .withMessage('Email is required field')
        .bail()
        .isEmail()
        .withMessage('Invalid email address'),
    body('phone')
        .notEmpty()
        .withMessage('Phone number is required field')
        .bail()
        // .isMobilePhone().withMessage("Invalid phone number"),
        .matches(/^[6789]\d{9}$/)
        // .matches(/^\d{10}$/)
        .withMessage('Invalid mobile number'),
    body('designation')
        .notEmpty()
        .withMessage('Designation is required field')
        .bail()
        .matches(/^[a-zA-Z\s]{3,35}/)
        .withMessage('Invalid designation format'),
    body('department')
        .notEmpty()
        .withMessage('Department is required field')
        .bail()
        .matches(/^[a-zA-Z\s]{2,25}/)
        .withMessage('Invalid department format'),

    body('salary')
        .notEmpty()
        .withMessage('Salary is required field')
        .bail()
        .matches(/^[0-9]{4,15}$/)
        .withMessage('Invalid salary format')
        .bail()
        .custom(async (value) => {
            if (value < 1000) {
                throw new Error('Salary should be greater than 1000')
            }
        }),
    body('date_of_joining')
        .notEmpty()
        .withMessage('Date of joining is required field')
        .bail()
        .isDate({ format: 'YYYY-MM-DD', strictMode: true })
        // .isISO8601()
        .withMessage('Invalid date format')
        .bail()
        .custom(async (value) => {
            const date = new Date(value)
            //  console.log(date)
            const today = new Date()
            // console.log(date, today);
            if (date > today) {
                throw new Error('Date of joining cannot be in the future')
            }
        }),
]

export { createEmployeeSchema }
