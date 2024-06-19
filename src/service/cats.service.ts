import api from "../api/axios"

export const getAllCats = () => {
    return api.get('images/search?limit=30')
}