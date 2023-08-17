import "./App.css";
import { Route, Routes } from "react-router-dom";
import New from "./views/New";
import SingleListing from "./views/SingleListing";
import Landing from "./views/Landing";
import Admin from "./views/Admin";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/listing/new" element={<New />} />
          <Route path="/listing/:id" element={<SingleListing />} />
          <Route path="/admin/" element={<Admin />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
