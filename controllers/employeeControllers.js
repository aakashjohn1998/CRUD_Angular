const express = require('express')
const { isValidObjectId } = require('mongoose')
const router = express.Router()
const {Employee} = require('../Models/employee')

router.get('/',(req,res)=>{
Employee.find((err,docs)=>{
    if(!err){res.send(docs)}
    else {console.log('Error in retrieving Employees' + JSON.stringify(err,undefined,2))}
})
})

router.post('/',(req,res)=>{
    var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
    })
    emp.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log('Error in saving Employees' + JSON.stringify(err,undefined,2))
        }
    })
})

router.put('/:id',(req,res)=>{
    if(!isValidObjectId(req.params.id))
    return res.status(400).send('No record found')

    var emp = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
    }
    Employee.findByIdAndUpdate(req.params.id, {$set : emp}, {new:true} , (err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log('Error in Updating Employees' + JSON.stringify(err,undefined,2))
        }
    })
})

router.delete('/:id',(req,res)=>{
    if(!isValidObjectId(req.params.id))
    return res.status(400).send('No record found')

    Employee.findByIdAndDelete(req.params.id,  (err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log('Error in deleting Employees' + JSON.stringify(err,undefined,2))
        }
    })

})
module.exports = router