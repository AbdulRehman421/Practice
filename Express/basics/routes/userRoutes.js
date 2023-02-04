
const { Router } = require('express');
const express = require('express');
const { getUser, addUser } = require('../controllers/userController');
const app = express();

const router = express.Router()

// GET USER || METHOD GET
router.get('/', getUser)

// POST USER || METHOD POST
router.post('/addUser', addUser)

module.exports = router