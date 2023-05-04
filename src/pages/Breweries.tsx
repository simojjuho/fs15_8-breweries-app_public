import React, { useEffect, useState } from 'react'

import { Brewery } from '../Types/Brewery'
import { getAll } from '../services'
import { AxiosError } from 'axios'

const Breweries = () => {
    const [breweries, setBreweries] = useState<Brewery[] | undefined>()
    const [filter, setFilter] = useState('')
    const [filteredItems, setFilteredItems] = useState<Brewery[] | undefined>()

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

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setFilteredItems(breweries?.filter(item => item.name.toLowerCase().includes(filter)))
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [filter, breweries])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }


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