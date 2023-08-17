import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteById } from '../Utils/UtilsFunc';
import { DataGrid } from '@mui/x-data-grid'



const Admin = () => {

  const [listingList, setListingList] = useState([]);
  const [toaster, setToaster] = useState('');


  const columns = [
    { field: 'id', headerName: '#', width: 90 },
    { field: 'name', headerName: 'Name', width: 120 },
    { field: 'numOfBedrooms', headerName: '# Bedrooms', width: 150 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'imgUrl', headerName: 'Img Url', width: 90 },
    { field: 'actions', headerName: 'Actions', width: 120 },
  ];
  const rows = listingList.map((e, i) => ({ ...e, id: i + 1, actions: `<>` }))

  useEffect(() => {
    getList();
  }, []);

  const removeOne = (id, name = "item") => {
    deleteById(id)
    setListingList((current) => current.filter(el => el._id !== id))
    setToaster(`Successfully deleted ${name}.`)
    setTimeout(() => {
      setToaster('');
    }, 4000);
  }

  const getList = () => {
    axios
      .get("http://localhost:8000/api/listing/all")
      .then((res) => {
        setListingList(res.data)
      }).catch((err) => console.log(err))
  }

  return (
    <div className='container'>Admin
      <ul>
        {
          listingList.map((el, i) =>
            <li key={i}>
              {el.name}
            </li>)
        }
      </ul>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>




    </div>
  )
}

export default Admin
