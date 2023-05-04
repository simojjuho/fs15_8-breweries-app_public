import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Brewery } from '../Types/Brewery'
import { getOne } from '../services'

const SingleBrewery = () => {
    const { id } = useParams()
    const [brewery, setBrewery] = useState<Brewery | undefined>()

    useEffect(() => {
        if (id) {
            getOne(id).then(data => {
                setBrewery(data)
            })
        }
    }, [id])


  return (
    <div>
        <h2>{brewery?.name}</h2>
        <p>Type of brewery: {brewery?.brewery_type}</p>
    </div>
  )
}

export default SingleBrewery