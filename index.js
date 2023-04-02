var express = require('express')
const app = express()
const port = 3040
const mongoose = require('mongoose')
app.use(express.json())

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


app.post('/api/tasks',(req,res)=>{
  // const Body = req.body
    //console.log(req.body)

    const task = new Task(req.body);

    task.save()
    .then(task=>{
        res.json(task)
    })
    .catch(err=>{
        res.json(err)
    })
})

app.delete('/api/tasks/:id',(req,res)=>{
    const id = req.params.id
    Task.findByIdAndDelete(id)
    .then(task =>{
        res.json(task)
    })
    .catch(err=>{
        res.json(err)
    })
})

app.put('/api/tasks/:id',(req,res)=>{
    const id = req.params.id
    const body = req.body
    Task.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(task=>{
        res.json(task)
    })
    .then(err=>{
        res.json(err)
    })
})

app.listen(port,()=>{
    console.log('server is running on ',port)
})