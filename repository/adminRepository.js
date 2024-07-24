import { Admin } from '../schemas/adminSchema.js'

const createNewAdmin = async (data) => {
    try {
        const existedAdmin = await Admin.findOne({ email: data.email })
        if (existedAdmin && existedAdmin.email === data.email) {
            throw new Error('Email already Exists')
        } else {
            const admin = new Admin(data)
            const newAdmin = await admin.save()
            return newAdmin
        }
    } catch (error) {
        throw error
    }
}

const loginAdmin = async (data) => {
    try {
        const existAdmin = await Admin.findOne({ email: data.email })
        if (existAdmin) {
            return existAdmin
        } else {
            throw new Error("Admin doesn't exist")
        }
    } catch (error) {
        throw error
    }
}

export { createNewAdmin, loginAdmin }
