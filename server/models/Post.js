/**
 * mongoose Schema
 */
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide the title']
    },
    author: {
        type: String,
        required: [true, 'Please provide the author']
    },
    body: {
        type: String,
        required: [true, 'Please provide the body']
    }
})

/** it will export to the util/importData */
const Post = mongoose.model('Post', postsSchema)

module.exports = Post