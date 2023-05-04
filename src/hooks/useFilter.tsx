import React, { useState, useEffect } from 'react'

const useFilter = <T,>(
  filterFunc: (items: T[], filter: string) => T[],
  items: T[] | undefined) => {
    const [filter, setFilter] = useState('')
    const [filteredItems, setFilteredItems] = useState(items)
//TODO: After finishing the functionality in Breweries.tsx, move it in here for practice

useEffect(() => {
  if(items) {
    const timeoutId = setTimeout(() => {
      setFilteredItems(filterFunc(items, filter))
    }, 1000)
    
    return () => clearTimeout(timeoutId)
  }
}, [filter, items])

const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFilter(e.target.value)
}

  return { changeHandler, filteredItems, filter }
}

export default useFilter