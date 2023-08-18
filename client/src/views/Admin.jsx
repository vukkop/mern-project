import React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import ListingTable from '../components/admin-components/ListingTable';
import ListingNew from '../components/admin-components/ListingNew';
import ListingEdit from '../components/admin-components/ListingEdit';

const Admin = () => {
  const navigate = useNavigate()

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-between mb-5'>
        <h2>Listings</h2>
        <Button onClick={() => navigate("new")} variant="contained"><i className="fa-solid fa-plus me-2"></i>Add New</Button>
      </div>

      <Routes>
        <Route path="/" element={<ListingTable />} />
        <Route path="/new" element={<ListingNew />} />
        <Route path="/:id/edit" element={<ListingEdit />} />
      </Routes>


    </div >
  )
}

export default Admin
