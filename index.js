var express = require('express')
const app = express()
const port = 3040
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Tasks')
.then(()=>{
    console.log('Database is succesfully connected')

})
.catch(err=>{
    console.log(err)
})

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

app.get('/api/tasks',(req,res)=>{

    Task.find()
    .then(tasks=>{
        res.json(tasks)
    })
    .catch(err=>{
        res.json(err)
    })
})


app.post('/api/tasks',((req,res)=>{
    const body = req.body
    console.log(body)

    const task = new Task(body)

    task.save()
    .then(t=>{
        res.json(t)
    })
    .catch(err=>{
        res.json(err)
    })
}))

app.listen(port,()=>{
    console.log('server is running on ',port)
})