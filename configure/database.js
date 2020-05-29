const mongosee = require('mongoose')

const setUpDb = ()=>{
    mongosee.connect('mongodb://localhost:27017/form')
    .then(()=>{
        console.log('connected to the database')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = setUpDb