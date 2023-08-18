import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteById } from '../../Utils/UtilsFunc';
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {
  DataGrid,
  GridActionsCellItem,
} from '@mui/x-data-grid';


const ListingTable = () => {


  const [listingList, setListingList] = useState([]);
  const [toaster, setToaster] = useState('');
  const rows = listingList.map((e, i) => ({ ...e, id: i + 1 }))
  const navigate = useNavigate()
  const columns = [
    { field: 'id', headerName: '#', width: 90 },
    { field: 'name', headerName: 'Name', width: 120 },
    { field: 'numOfBedrooms', headerName: '# Bedrooms', width: 150 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'imgUrl', headerName: 'Img Url', width: 90 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: (id) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEditClick(id.row._id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(id.row._id)}
            color="inherit"
          />,
        ];
      },
    },
  ];


  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .get("http://localhost:8000/api/listing/all")
      .then((res) => {
        setListingList(res.data)
      }).catch((err) => console.log(err))
  }

  const handleDeleteClick = (id, name = "item") => {
    deleteById(id)
    setListingList((current) => current.filter(el => el._id !== id))
    setToaster(`Successfully deleted ${name}.`)
    setTimeout(() => {
      setToaster('');
    }, 4000);
  }
  const handleEditClick = (id) => {
    console.log(id);
    navigate(`${id}/edit`)
  }


  return (
    <div>
      <Button onClick={() => navigate("new")} variant="contained">Add New</Button>
      <div style={{ height: 400, width: '80%', margin: 20 }}>
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

export default ListingTable
