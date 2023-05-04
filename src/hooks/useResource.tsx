import React, { useState, useEffect } from 'react'

const useFilter = <T,>(filterFunc:T[], filter: string) => {

  const [filteredItems, setFilteredItems] = useState<T[]>()
//TODO: After finishing the functionality in Breweries.tsx, move it in here for practice

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setFilteredItems(filterFunc())
  }, 1000)

  return () => clearTimeout(timeoutId)
}, [filter, breweries])

const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFilter(e.target.value)
}

  return { changeHandler, filteredItems }
}

export default useFilter