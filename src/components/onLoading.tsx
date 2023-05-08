import React from 'react'
import { useState, useEffect } from 'react'

import { getAll } from '../services'

/* This function should add more abstraction to the app, but yet I have not come up
with a good way to do it. It might not even be necessary, so I might remove this from
the project in the future. */

const onLoading = <T,>(
    ChildComponent: (data: T) => JSX.Element,
  ) => {
  return () => {
    const [data, setData] = useState<T | undefined>()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState('')
    useEffect(() => {
            getAll().then(data => {
                setData(data as T)
                setLoading(false)
            }).catch(error => {
                setError(error.message)
                setLoading(false)
            })
        
    }, [])
    if(isLoading) return <p>Loading...</p> //TODO: Make an actual loading page
    if(error || !data) return <p>Error!</p> //TODO: Make an error page
    return ChildComponent(data)
  }
}

export default onLoading