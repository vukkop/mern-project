import React, { useContext } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import { Button} from '@mui/material';
import { AuthContext } from '../context/authContext';
import ListingTable from '../components/admin-components/ListingTable';
import ListingNew from '../components/admin-components/ListingNew';
import ListingEdit from '../components/admin-components/ListingEdit';
import useColorTheme from '../hooks/FormStyles';

const Admin = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const currentRoute = window.location.pathname;
  const colorTheme = useColorTheme();

  if (!!currentUser) {
    return (
      <div>
        <div className="container mt-4">
          <div className="d-flex justify-content-between mb-5">
            <h2>Listings</h2>
            {currentRoute === '/admin' ? (
              <Button onClick={() => navigate('new')} variant="contained" sx={{ ...colorTheme.submitButton }}>
                <i className="fa-solid fa-plus me-2"></i>Add New
              </Button>
            ) : (
              <Button onClick={() => navigate('/admin')} variant="contained" color="secondary">
                Back
              </Button>
            )}
          </div>
          {RouteComponent && <RouteComponent {...rest} />} {/* Render the RouteComponent */}
          <Routes>
          <Route path="/" element={<ListingTable />} />
          <Route path="/new" element={<ListingNew />} />
          <Route path="/:id/edit" element={<ListingEdit />} />
        </Routes>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mt-4">
        <img src="https://i.redd.it/644sxuwgx9a01.jpg" alt="Redirecting" />
        <Button variant="contained" color="primary" sx={{ backgroundColor: "#FF5733", color: "white" }} component={Link} to="/login">
          Go to Login
        </Button>
      </div>
    );
  }
};
export default Admin;
