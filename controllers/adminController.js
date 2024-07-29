import {
    apiResponseSuccess,
    apiResponseErr,
} from '../middlewares/apiResponse.js'
import { createNewAdmin } from '../repository/adminRepository.js'
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


export { createAdmin }
