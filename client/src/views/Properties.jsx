import React from 'react'
import PropertyCard from '../components/properties-components/PropertyCard'
import {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from '../components/search-components/SearchBar'

const Properties = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    getPropertyList();
  }, [])
  const getPropertyList = () => {
    axios
        .get("http://localhost:8000/api/listing/all")
        .then((res)=>{
          setPropertiesList(res.data)
          setLoaded(true)
          
        })
        .catch((err)=>{
          console.log(err)
        });
  }

  return (
    <div >
      <SearchBar/>
      {propertiesList.map((prop, i)=>
      loaded && 
      (<PropertyCard key={i} prop={prop} />)
      )}
    </div>
  )
}

export default Properties
      
      
