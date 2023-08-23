import React from 'react'
import PropertyCard from '../components/properties-components/PropertyCard'
import {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from '../components/search-components/SearchBar'

const Properties = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filterObj, setFilterObj] = useState({});
  const [filteredProperties, setFilteredProperties] = useState([]);

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
  
  useEffect(()=>{
    console.log(filterObj)
  }, [filterObj])


  // this function should check the filter object, and then appropraitely apply the filters to the properties list
  const filterProperties = () => {
    for(const key in filterObj) {
      switch(key){
        case 'priceRange':
          // filter properties by price range
          break;
        case 'bedrooms':
          // filter properties by number of bedrooms
          break;
        case 'bathrooms':
          // filter properties by number of bathrooms
          break;
        case 'homeType':
          // filter properties by home type
          break;
        case 'includePets':
          // filter properties by whether or not pets are allowed
          break;
        default:
          break;
          }      
    }
  }

  return (
    <div >
      <SearchBar filterObj = {filterObj} setFilterObj={setFilterObj} />
      {propertiesList.map((prop, i)=>
      loaded && 
      (<PropertyCard key={i} prop={prop} />)
      )}
    </div>
  )
}

export default Properties;
