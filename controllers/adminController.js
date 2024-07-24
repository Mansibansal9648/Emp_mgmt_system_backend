import {
    apiResponseSuccess,
    apiResponseErr,
} from '../middlewares/apiResponse.js'
import { createNewAdmin, loginAdmin } from '../repository/adminRepository.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const createAdmin = async (req, res) => {
    try {
        // console.log(req.body)
        let data = req.body
        let password = data.password

        const passwordSalt = await bcrypt.genSalt()

        let hashedPassword = await bcrypt.hash(password, passwordSalt)
        data.password = hashedPassword
        const result = await createNewAdmin(data)
        return apiResponseSuccess(
            {},
            true,
            201,
            'Admin created successfully',
            res
        )
    } catch (error) {
        return apiResponseErr(null, false, 400, error.message, res)
    }
}

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
            isLogin: true,
            accessToken: accessToken,
        }
        return apiResponseSuccess(
            result,
            true,
            200,
            'Admin loggedIn successfully',
            res
        )
    } catch (error) {
        return apiResponseErr(null, false, 400, error.message, res)
    }
}

export { createAdmin, adminLogin }
