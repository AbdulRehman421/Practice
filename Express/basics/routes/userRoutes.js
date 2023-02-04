
const { Router } = require('express');
const express = require('express');
const { getUser, addUser, createUser } = require('../controllers/userController');
const app = express();

const router = express.Router()

// GET USER || METHOD GET
router.get('/', getUser)

// POST USER || METHOD POST
router.post('/addUser', addUser)
router.post('/createUser', createUser)

module.exports = router