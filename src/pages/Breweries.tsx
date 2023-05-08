import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { TextField } from '@mui/material'

import { Brewery } from '../Types/Brewery'
import { getAll } from '../services'
import useFilter from '../hooks/useFilter'
import BreweryOnList from '../components/BreweryOnList'
import StyledGridContainer from '../components/styledComponents/StyledGridContainer'
import StyledPageContainer from '../components/styledComponents/StyledPageContainer'

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
    <StyledPageContainer id='breweriesContainer' maxWidth={'xl'}>
        <TextField 
            type='text'
            variant="filled"
            id='filterInput'
            value={filter}
            onChange={ changeHandler }
            placeholder='Search breweries'
            label='Search by name'
            color='primary'
        />
        <StyledGridContainer container gap={3} columns={12} maxWidth={'xl'}  justifyContent={'center'}>
            {filteredItems?.map(brewery => {
            return <BreweryOnList key={brewery.id} brewery={brewery} />
            })}
        </StyledGridContainer>
    </StyledPageContainer>
  )
}

export default Breweries