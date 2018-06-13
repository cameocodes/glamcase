const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const caseSchema = new Schema({
    coverSize: String,
    coverMaterial: String,
    coverColor: String,
    coverPrice: Number
})

const caseModel = mongoose.model('Case', caseSchema)

module.exports = caseModel