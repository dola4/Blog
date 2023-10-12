
//import le Document MongoDb
const blogModel = require('../models/blogModel')

//pour checker la validiter de l'Id
const mongoose = require('mongoose')

//=============================================================
const selectAll = async (req,res)=>{
    const allBlogs = await blogModel.find({}).sort({createdAt:-1})
    res.status(200).json(allBlogs);
} 

//=========

const selectById = async (req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"format de l'Id non Valid"})
    }

    const theBlogSelected = await blogModel.findById(id)

    if(!theBlogSelected){
        return res.status(404).json({error: "Pas de Blog trouver avec cette ID"})
    }

    res.status(200).json({theBlogSelected})

} 


//=========

const insertOne = async (req,res)=>{
    try{
        const theBlogInserted = await blogModel.create(req.body)
        res.status(200).json(theBlogInserted)
    }catch(error){
        res.status(400).json({error: error.message})
    }

} 


//=========

const deleteByID = async (req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({error:"format de l'Id non Valid"})
    }

    const theBlogDeleted = await blogModel.findOneAndDelete({_id:id})

    if(!theBlogDeleted){
        return res.status(400).json({error:"Pas de Blog trouver avec cette ID"})
    }

    return res.status(200).json(theBlogDeleted)

} 

//=========

const updateById = async (req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({error:"format de l'Id non Valid"})
    }

    const theBlogUpdated = await blogModel.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!theBlogUpdated){
        return res.status(400).json({error:"Pas de Blog trouver avec cette ID"})
    }

    return res.status(200).json(theBlogUpdated)

} 
//=============================================================

module.exports = {
    insertOne,
    selectAll,
    selectById,
    deleteByID,
    updateById
}
