const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: [true, 'O campo value é obrigatório']},
    status: {type: String, required: false, uppercase: true, enum:['PAGO', 'PENDENTE', 'AGENDADO']}
})

const byllingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1910, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', byllingCycleSchema)