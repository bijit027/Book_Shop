const mongoose  = require('mongoose')
const crypto = require('crypto')//for hash password
const { uuid } = require('uuidv4');//for unique key
const { timeStamp } = require('console')


const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    }

},{timeStamp:true})//timestamps will generate created at and updated at






module.exports = mongoose.model('Category', categorySchema);