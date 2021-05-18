import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setLoading] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      console.log(data);
    }
    getData()
  }, [])
 

  function removeItem(name){
    const newArray = data.filter(el => el.name !== name)
    setData(newArray)
  }




  if (data.length === 0) {
    return <Loading />
  }

  return (
    <Tours removeItem={removeItem} data = {data}/>
  )
}

export default App