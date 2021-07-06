const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB connection Success 👍🏻 `)
    } catch (error) {
        console.log('MongoDB connection Error')
        process.exit(1)
    }
}

module.exports = connectDB