import {_api} from './api'

export const createSuggestion =(data) =>{
    return _api.post("/suggestion/create", data)
}

export const getAllSugestion = () =>{
    return _api.get("/suggestion/allsuggestions")
}

