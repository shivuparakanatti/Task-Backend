const mongoose = require('mongoose')

const configDb = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Tasks')
    .then(()=>{
        console.log('Database is succesfully connected')

    })
    .catch(err=>{
        console.log(err)
})
}

module.exports = configDb