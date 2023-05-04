import axios from 'axios'
import { Brewery } from './Types/Brewery'

const baseUrl = 'https://api.openbrewerydb.org/v1/breweries'

export const getAll = async (): Promise<Brewery[]> => {
    const { data } = await axios.get(baseUrl)
    return data as Brewery[]
}

export const getOne = async (id: string): Promise<Brewery> => {
    const { data } = await axios.get(`${baseUrl}/${id}`)
    return data
}