require('dotenv').config({ path: './config.env' })
const express = require('express')
const connectDB = require('./config/db')
const PostRoutes = require('./routes/postRoutes')

connectDB()

const app = express()

app.use(express.json())

app.use('/api/v1/posts', PostRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`server running on port ${PORT}`))