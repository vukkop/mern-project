import React from 'react'
import PropertyCard from '../components/properties-components/PropertyCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../components/search-components/SearchBar'

const Properties = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filterObj, setFilterObj] = useState({});
  const [basePropList, setBasePropList] = useState([]);

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    getPropertyList();
  }, [])
  const getPropertyList = () => {
    axios
      .get("http://localhost:8000/api/listing/all")
      .then((res) => {
        setPropertiesList(res.data)
        setBasePropList(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    setLoaded(false);
    filterProperties();
  }, [filterObj])

  useEffect(() => {
    setLoaded(true);
  }, [propertiesList])


  const filterProperties = () => {
    sleep(2)
    let newPropArr = [...basePropList];
    for (const key in filterObj) {
      switch (key) {

        case 'priceRange':
          if (filterObj[key][0] === 0 && filterObj[key][1] === 5000000)
            continue;
          newPropArr = newPropArr.filter((prop) => filterObj[key][1] >= prop.price && prop.price >= filterObj[key][0])
          break;
        case 'bedrooms':
          if (filterObj[key] === 0 || filterObj[key] === "") {
            continue;
          }
          newPropArr = newPropArr.filter((prop) => prop.numOfBedrooms >= filterObj[key])
          break;
        case 'bathrooms':
          if (filterObj[key] === 0 || filterObj[key] === "") {
            continue;
          }
          newPropArr = newPropArr.filter((prop) => prop.numOfBathrooms >= filterObj[key])
          break;
        case 'homeType':
          if (filterObj[key].length === 0) {
            continue;
          }
          newPropArr = newPropArr.filter((prop) => filterObj[key].includes(prop.type))
          break;
        case 'includePets':
          break;
        default:
          break;
      }
    }
    setPropertiesList(newPropArr);
  }

  return (
    <div >
      <SearchBar filterObj={filterObj} setFilterObj={setFilterObj} />
      {propertiesList.map((prop, i) =>
        loaded &&
        (<PropertyCard key={i} prop={prop} />)
      )}
    </div>
  )
}

export default Properties;
