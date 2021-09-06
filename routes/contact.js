const express = require('express')
const { getcontact,getonecontact,Addcontact,Updatecontacts,Deletecontacts } = require('../controllers/contact')
const route =express.Router()
//Get
route.get('/', getcontact )
//get one by id
route.get('/:id' , getonecontact)
// Add
route.post('/', Addcontact )
//update
route.put('/:id', Updatecontacts )
//delete
route.delete('/:id', Deletecontacts )
module.exports= route