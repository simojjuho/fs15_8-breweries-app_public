import React, { useEffect, useState } from 'react'

import { Brewery } from '../Types/Brewery'
import { getAll } from '../services'
import { AxiosError } from 'axios'
import useFilter from '../hooks/useFilter'

const Breweries = () => {
    const [breweries, setBreweries] = useState<Brewery[] | undefined>()
    
    useEffect(() => {
        getAll().then(data => {
            setBreweries(data)
        }).catch((error: unknown) => {
            //TODO: make better error handling!
            error instanceof AxiosError 
            ? console.log(error) 
            : console.log(error)
        })
    }, [])

    const filterFunc = (breweries: Brewery[], filter: string): Brewery[] => {
        return breweries?.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    }

    const { changeHandler, filteredItems, filter } = useFilter<Brewery>(filterFunc, breweries)
  return (
    <div>
        <input 
            type='text'
            id='filterInput'
            value={filter}
            onChange={ changeHandler }
        />
        {filteredItems?.map(brewery => {
        return <p key={brewery.id}>{brewery.name}</p>
    })}</div>
  )
}

export default Breweries