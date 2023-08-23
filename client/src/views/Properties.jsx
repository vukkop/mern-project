import React from 'react'
import PropertyCard from '../components/properties-components/PropertyCard'
import {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from '../components/search-components/SearchBar'

const Properties = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filterObj, setFilterObj] = useState({});


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
    if(filterObj.priceRange) {
      filterProperties();
    }
    console.log(propertiesList)
  }, [filterObj])


  // this function should check the filter object, and then appropraitely apply the filters to the properties list
  const filterProperties = () => {
    // ** how we filter **
    // we know that the default state of filteredProperties is the entire list of properties
    // we want to only get rid of, the ones in that list that don't match the criteria. 
    // rather than creating a new list that we populate, we should start with all, then remove ones that don't match


    for(const key in filterObj) {
      switch(key){
        // each case is for a specific filter selected
        // we only want to add new properties to the array that match our 
        // search critera, the bedroom example takes in a number, and only
        // includes properties that have at least that many bedrooms
        case 'priceRange':
          // filter properties by price range
          // default array is [0, 5000000], so if the user doesn't change the price range
          // we will still be filtering.
          // priceRange key should return an array with 2 values in it
          // the 0 index should be the lowest price
          // the 1 index should be the highest price
          // using this we should be able to only select properties where the price is
          // not lower than index 0, but also not higher than index 1
          // THIS IS SELECTION BY REMOVAL.  IF IT DOES NOT MATCH, WE GET IT OUT IF THE ARRAY.
          if(filterObj[key][0] === 0 && filterObj[key][1] === 5000000)
          continue;

          const pricePropArr = propertiesList.filter((prop)=> filterObj[key][1] >= prop.price && prop.price >= filterObj[key][0])
          setPropertiesList(pricePropArr)
          console.log(pricePropArr)
          break;
        case 'bedrooms':
          // default is 0, so we will always include all bedrooms if they don't select          
          // filter properties by number of bedrooms
          // step one is determine if it is the default value, if it is we can just continue
          if(filterObj[key] === 0){
            continue;
          }
          // now that we know it's got something in it, we need to filter out the ones that don't match
          // we can use the filter method to do this
          const bedPropArr = propertiesList.filter((prop)=>prop.numOfBedrooms >= filterObj[key])
          setPropertiesList(bedPropArr);
          break;
        case 'bathrooms':
          // default is 0, to keep filtering inclusive
          // filter properties by number of bathrooms
          if(filterObj[key] === 0){
            continue;
          }
          const bathPropArr = propertiesList.filter((prop)=>prop.numOfBathrooms >= filterObj[key])
          setPropertiesList(bathPropArr);
          break;
        case 'homeType':
          if(filterObj[key].length === 0){
            continue;
          }
          //We need to match the array of home types to match up with the filter array
          //step 1 each property can only have one home type
          //step 2 we need to check each property and see if the home type of the property doesnt match any of the home type
          //step 3 if we find one that doesnt match we need to get rid of it. 
          const typePropArr = propertiesList.filter((prop)=>filterObj[key].includes(prop.type))
          console.log(filterObj[key], typePropArr)
          setPropertiesList(typePropArr);
          // default is empty array, so we can include all home types if they match the 
          // filter properties by home type
          break;
        case 'includePets':
          // default false
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
