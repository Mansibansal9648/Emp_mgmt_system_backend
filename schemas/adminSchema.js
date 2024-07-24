import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const schema = new Schema({
    name: { type: String, required: true, match: /^[a-zA-Z\s]{3,25}$/ },
    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        index: true,
    },
    userType: { type: String, required: true },
    password: {
        type: String,   
        required:true
    },
})

export const Admin = mongoose.model('admins', schema)
