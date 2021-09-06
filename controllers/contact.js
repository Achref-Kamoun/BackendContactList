const contacts = require('../models/contact')
exports.getcontact = async (req, res) => {
try {
const contact = await contacts.find()
res.status(200).send({msj:'users', contact})
}catch (err) {
res.status(500).send({msj:"can not show users" })
}}
exports.getonecontact = async (req,res)=>{
const {id} = req.params
try {
const onecontact= await contacts.findById(id)
res.status(200).send({msj:"onecontatct",onecontact})
} catch (err) {
res.status(500).send({msj:'mfamch'})
}}
exports.Addcontact = async (req,res)=>
{const {Email,Name,Lastname,Age}= req.body
try {
const found=  await contacts.findOne({Email})
if (found){
return res.status(400).send({msj:"user already exist"})
}
const  Addcontact = new contacts(req.body)
await Addcontact.save()
    res.status(200).send({msj:'addedd contact', Addcontact})
} catch (err) {
res.status(500).send({msj:'could not not add'})
}}
exports.Updatecontacts = async (req,res)=>{
const {id}= req.params
try {  
const update = await contacts.findByIdAndUpdate(id, { $set: {...req.body }})
res.status(200).send({msj:'updated contacts', update})
} catch (err) {
res.status(500).send({msj:'could not update'})
}}
exports.Deletecontacts = async (req,res)=>{
const {id}= req.params
try {
const deleted = await contacts.findByIdAndDelete(id)
res.status(200).send({msj:'deleted contacts', deleted})
} catch (err) {
res.status(500).send({msj:'could not delete'})
}}