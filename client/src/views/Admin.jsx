import React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import ListingTable from '../components/admin-components/ListingTable';
import ListingNew from '../components/admin-components/ListingNew';
import ListingEdit from '../components/admin-components/ListingEdit';

const Admin = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Routes>
        <Route path="/" element={<ListingTable />} />
        <Route path="/new" element={<ListingNew />} />
        <Route path="/:id/edit" element={<ListingEdit />} />
      </Routes>



    </div >
  )
}

export default Admin
