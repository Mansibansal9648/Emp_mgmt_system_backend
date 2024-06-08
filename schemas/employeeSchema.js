import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const schema = new Schema({})

export const Employee = mongoose.model('employees', schema)
