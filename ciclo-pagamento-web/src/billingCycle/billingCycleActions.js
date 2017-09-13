import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm} from 'redux-form'

import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:8080/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
         .then(resp => {
             toastr.success("Sucesso", "Operação Realizada com Sucesso")
             dispatch([
                 resetForm('billingCycleForm'),
                 getList(),
                 selectTab('tabList'),
                 showTabs('tabList', 'tabCreate')
             ])
         })
         .catch(e => {
             const errors = e.response.data.errors
             errors.forEach(error => toastr.error('Erro', error))
         })
    }

    
    return {
        type: 'CREATE'
    }
}