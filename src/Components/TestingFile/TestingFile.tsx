import React, { useState } from 'react'
import { GetAllStore } from '../../api/GetAllStore'

export default function TestingFile() {
  const [apiData, setApiData] = useState<any>()
  const onHandleApiData = async() =>{
      const locationName = await GetAllStore({
        longitude : "",
        latitude : ""
      })
      
   console.log(locationName,"Server Response");
   setApiData(locationName)

  }
   console.log(apiData,'settedData');
   
  return (
    <>
        <button onClick={onHandleApiData} className='btn btn-success'>Api Data</button>
        <center><h2>{apiData}</h2></center>
    </>
  )
}
