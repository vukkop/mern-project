import React from 'react'
import { Route, Routes } from "react-router-dom";
import ListingTable from '../components/admin-components/ListingTable';
import ListingNew from '../components/admin-components/ListingNew';
import ListingEdit from '../components/admin-components/ListingEdit';


const Admin = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<ListingTable />} />
        <Route path="/new" element={<ListingNew />} />
        <Route path="/:id" element={<ListingEdit />} />
      </Routes>



    </div >
  )
}

export default Admin
