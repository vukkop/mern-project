import React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import ListingTable from '../components/admin-components/ListingTable';
import ListingNew from '../components/admin-components/ListingNew';
import ListingEdit from '../components/admin-components/ListingEdit';
import NavBar from '../components/global-components/nav-bar/NavBar'
import useColorTheme from "../hooks/FormStyles"

const Admin = () => {
  const navigate = useNavigate()
  const currentRoute = window.location.pathname;
  const colorTheme = useColorTheme()

  return (
    <div>

      <NavBar />
      <div className='container mt-4'>
        <div className='d-flex justify-content-between mb-5'>
          <h2>Listings</h2>
          {currentRoute === '/admin'
            ? <Button onClick={() => navigate("new")} variant="contained" sx={{ ...colorTheme.submitButton }}><i className="fa-solid fa-plus me-2"></i>Add New</Button>
            : <Button onClick={() => navigate("/admin")} variant="contained" color='secondary' >Back</Button>
          }
        </div>

        <Routes>
          <Route path="/" element={<ListingTable />} />
          <Route path="/new" element={<ListingNew />} />
          <Route path="/:id/edit" element={<ListingEdit />} />
        </Routes>


      </div >
    </div>
  )
}

export default Admin
