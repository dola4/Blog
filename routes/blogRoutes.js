
//import express
const express = require('express')

//set the router
const router = express.Router()

//import les fonction du workoutController
const {selectAll,insertOne,selectById,deleteByID,updateById} = require('../controllers/blogController')


router.get('/',selectAll)
router.get('/:id',selectById)
router.post('/', insertOne)
router.delete('/:id',deleteByID)
router.patch('/:id',updateById)

module.exports = router

