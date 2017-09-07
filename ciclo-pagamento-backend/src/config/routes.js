const express = require('express')

module.exports = function(server) {

    //ROTAS BASE SISTEMA
    const router = express.Router()
    server.use('/api', router)

    //ROTAS DO CICLO DE PAGAMENTO
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}