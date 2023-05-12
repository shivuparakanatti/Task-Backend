const express = require('express')
const router = express.Router()

const taskControler = require('../app/controllers/tasksController')


router.get('/api/tasks',taskControler.list)
router.post('/api/tasks',taskControler.create)
router.delete('/api/tasks/:id',taskControler.delete)
router.put('/api/tasks/:id',taskControler.update)

module.exports=router