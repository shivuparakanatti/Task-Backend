const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title : {
        type :String
        
    },

    Description : {
        type : String
    },
    completed : {
        type: Boolean
    },
    dueDate : {
        type : Date
    },

    createdAt : {
        type : Date,
        default : Date.now

    } 
})

const Task = mongoose.model('Task',taskSchema)


module.exports = Task