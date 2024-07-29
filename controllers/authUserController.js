import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {
    apiResponseSuccess,
    apiResponseErr,
} from '../middlewares/apiResponse.js'

import { loginAdmin,loginEmployee } from '../repository/authUserRepository.js'

const adminLogin = async (req, res) => {
    try {
        let data = req.body
        let email = data.email.toLowerCase().split('@')[0].replaceAll('.', '')
        data.email = email + '@' + data.email.split('@')[1]
        let response = await loginAdmin(data)
        if (response) {
            const isPasswordValid = await bcrypt.compare(
                data.password,
                response.password
            )
            if (!isPasswordValid) {
                throw new Error('Invalid credentials')
            }
        }
        let accessTokenResponse = {
            id: response._id,
            name: response.name,
            email: response.email,
            userType: response.userType
        }
        const accessToken = jwt.sign(
            accessTokenResponse,
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.ACCESS_TOKEN_VALIDITY,
            }
        )
        let result = {
            id: response._id,
            name: response.name,
            email: response.email,
            userType: response.userType,
            isLogin: true,
            accessToken: accessToken,
        }
        return apiResponseSuccess(
            result,
            true,
            200,
            'Admin logged in successfully',
            res
        )
    } catch (error) {
        return apiResponseErr(null, false, 400, error.message, res)
    }
}

const employeeLogin = async (req, res) => {
    try {
        let data = req.body
        let email = data.email.toLowerCase().split('@')[0].replaceAll('.', '')
        data.email = email + '@' + data.email.split('@')[1]
        let response = await loginEmployee(data)
        if (response) {
            const isPasswordValid = await bcrypt.compare(
                data.password,
                response.password
            )
            if (!isPasswordValid) {
                throw new Error('Invalid credentials')
            }
        }
        let accessTokenResponse = {
            id: response._id,
            name: response.name,
            email: response.email,
            userType: response.userType
        }
        const accessToken = jwt.sign(
            accessTokenResponse,
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.ACCESS_TOKEN_VALIDITY,
            }
        )
        let result = {
            id: response._id,
            name: response.name,
            email: response.email,
            userType: response.userType,
            isLogin: true,
            accessToken: accessToken,
        }
        return apiResponseSuccess(
            result,
            true,
            200,
            'Employee logged in successfully',
            res
        )
    } catch (error) {
        return apiResponseErr(null, false, 400, error.message, res)
    }
}

export {adminLogin,employeeLogin}