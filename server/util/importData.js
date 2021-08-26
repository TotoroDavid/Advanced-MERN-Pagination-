require('dotenv').config({ path: './config.env' })
/** @fs */
const fs = require('fs')
const Post = require('../models/Post')
const connectDB = require('../config/db')

connectDB()

const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'))

/**
 * that's the function for export all the local data to mongoose
 */
const importData = async () => {
    try {
        await Post.create(posts)
        console.log(`Data successfully imported`)
        process.exit()
    } catch (error) {
        console.log(`error : ${error}`)
        process.exit(1)
    }
}

const deleteData = async () => {
    try {
        await Post.deleteMany({})
        console.log('Data deleted successfully')
        process.exit()
    } catch (error) {
        console.log(`error : ${error}`)
        process.exit(1)
    }
}

/**
 * used this for import all the data the local data to mongoose
 * with the command node util/importData.js --import
 */
if (process.argv[2] === '--import') {
    importData()
} else if (process.argv[2] === '--delete') {
    deleteData()
}




/**
 * @fs js File System. Node. js includes fs module to access physical file system. The fs module is responsible for all
 * the asynchronous or synchronous file I/O operations
 */