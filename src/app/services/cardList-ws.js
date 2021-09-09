import {_api} from './api'

export const createProducts = (data) => _api.post("/products/create", data)


export const getProducts = () => _api.get("/products/get")


export const updateProducts = (id, data) => _api.patch(`/products/update/${id}`,data)


export const deleteProducts = (id) => _api.delete(`/products/delete/${id}`)

