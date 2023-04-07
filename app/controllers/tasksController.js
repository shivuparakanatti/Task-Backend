
const Task = require('../models/task')
const taskControler = {}

taskControler.list = (req,res)=>{

        Task.find()
        .then(tasks=>{
            res.json(tasks)
        })
        .catch(err=>{
            res.json(err)
        })

    }

taskControler.create = (req,res)=>{
      
          const task = new Task(req.body);
      
          task.save()
          .then(task=>{
              res.json(task)
          })
          .catch(err=>{
              res.json(err)
          })
      }

taskControler.delete=((req,res)=>{
    const id = req.params.id
    Task.findByIdAndDelete(id)
    .then(task =>{
        res.json(task)
    })
    .catch(err=>{
        res.json(err)
    })
})

taskControler.update=((req,res)=>{
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




module.exports=taskControler