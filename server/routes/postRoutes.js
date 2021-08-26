/**
 * routes for our server
 */
const express = require('express')
const router = express.Router()
const { getAllPosts } = require('../controllers/postControllers')

/**@route */
router.route('/').get(getAllPosts)

module.exports = router