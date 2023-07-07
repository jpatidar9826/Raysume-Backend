const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

router.get('/:rid',) //get resume by id

router.get('/user/:uid',)  //get list of resmues of  users

router.post('/',) // create new resume

router.patch('/:rid')

router.delete('/:rid') //delete resumes by resume id

module.exports = router;

