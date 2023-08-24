import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteById } from '../../Utils/UtilsFunc';
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
    { field: 'id', headerName: '#', width: 70 },
    { field: "isFeatured", headerName: 'Featured', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'type', headerName: 'Type', width: 120 },
    { field: 'numOfBedrooms', headerName: '# Bedrooms', width: 100 },
    { field: 'numOfBathrooms', headerName: '# Bathrooms', width: 100 },
    { field: 'price', headerName: 'Price', type: 'number', width: 100 },
    { field: 'size', headerName: 'Size', type: 'number', width: 100 },
    { field: 'address', headerName: 'Address', width: 150, sortable: false },
    { field: 'city', headerName: 'City', width: 90, sortable: false, },
    { field: 'state', headerName: 'State', width: 70, sortable: false, },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 120,
      cellClassName: 'actions',
      getActions: (id) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEditClick(id.row._id)}
            color="secondary"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(id.row._id)}
            color="error"
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
    // axios.delete("http://localhost:8000/api/image/delete")
    deleteById(id)
    setListingList((current) => current.filter(el => el._id !== id))
    setToaster(`Successfully deleted ${name}.`)
    setTimeout(() => {
      setToaster('');
    }, 4000);
  }
  const handleEditClick = (id) => {
    navigate(`${id}/edit`)
  }

  return (
    <div>
      <div style={{ width: '100%' }}>
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
    </div >
  )
}

export default ListingTable
