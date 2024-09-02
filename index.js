import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnection from './db/db.js'
import employeeRouter from './routes/employeeRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import authUserRouter from './routes/authUserRoutes.js'

const app = express()

dotenv.config()
dbConnection()

app.use(
    cors({
        origin: '*',
    })
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/auth',authUserRouter)
app.use('/api', employeeRouter)
app.use('/admin',adminRouter)

app.post('/', (req, res) => {
    res.send('Yipee! backend is working fine')
})

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${process.env.PORT}`)
})
