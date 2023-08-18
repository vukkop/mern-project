import "./App.css";
import { Route, Routes } from "react-router-dom";
import New from "./views/New";
import SingleListing from "./views/SingleListing";
import Landing from "./views/Landing";
import Admin from "./views/Admin";
import Login from "./views/Login";
import PropertyCard from "./components/properties-components/PropertyCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listing/new" element={<New />} />
        <Route path="/listing/:id" element={<SingleListing />} />
        <Route path="/admin//*" element={<Admin />} />
        <Route path="/propertycard" element={<PropertyCard />} />
      </Routes>
    </div>
  );
}

export default App;
