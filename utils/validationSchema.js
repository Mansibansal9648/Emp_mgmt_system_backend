import express from "express";
import { body } from "express-validator";

const createEmployeeSchema = [
  body("name").notEmpty().withMessage("Name is required field").bail().matches(/^[a-zA-Z\s]{3,25}$/).withMessage("Invalid name format"),
  body("email")
    .notEmpty()
    .withMessage("Email is required field")
    .bail()
    .isEmail()
    .withMessage("Invalid email address"),
  body("phone")
    .notEmpty()
    .withMessage("Phone number is required field")
    .bail()
    .matches(/^\d{10}$/)
    .withMessage("Phone number should contain 10 digits"),
  body("designation")
    .notEmpty()
    .withMessage("Designation is required field")
    .matches(/^[a-zA-Z\s]{2,25}/)
    .withMessage("Invalid designation format"),
  body("department")
    .notEmpty()
    .withMessage("Department is required field")
    .bail()
    .matches(/^[a-zA-Z\s]{3,25}/)
    .withMessage("Invalid department format"),

  body("salary")
    .notEmpty()
    .withMessage("Salary is required field")
    .bail()
    .matches(/^[0-9]{4,15}$/)
    .withMessage("Invalid salary format"),
  body("date_of_joining")
    .notEmpty()
    .withMessage("Date of joining is required field")
];

export {createEmployeeSchema}
// .custom((value) => {
//     const date = new Date(value);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Set to midnight to compare only the date part
//     if (date > today) {
//       throw new Error('Date of joining cannot be in the future');
//     }
//     return true;
//   })