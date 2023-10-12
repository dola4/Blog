const mongoose = require('mongoose')

// const Schema = mongoose.Schema

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('BlogN',blogSchema)
