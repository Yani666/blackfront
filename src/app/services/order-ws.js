import {_api} from './api'

export const createOrder =(data) =>{
    return _api.post("/orders/create", data)
}

export const getMyOrder =() =>{
    return _api.get("/orders/getMyOrders")
}

export const getAllOrder =() =>{
    return _api.get("/orders/get")
}