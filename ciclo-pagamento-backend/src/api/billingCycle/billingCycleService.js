const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((erro, value) => {
        if (erro) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
        next()
    })
})

module.exports = BillingCycle