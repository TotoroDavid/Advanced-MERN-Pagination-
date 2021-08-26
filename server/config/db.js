/**
 * mongoose connection 
 */
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            retryWrites: true,
            w: "majority",
        })

        console.log('MongoDB connection success');
    } catch (error) {
        console.log('MongoDB connection error: ' + error)
        process.exit(1)
    }
}

module.exports = connectDB