import "./App.css";
import { Route, Routes } from "react-router-dom";
import New from "./views/New";
import SingleListing from "./views/SingleListing";
import Landing from "./views/Landing";

function App() {
  return (
    <div className="App container mt-3">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/listing/new" element={<New />} />
        <Route path="/listing/:id" element={<SingleListing />} />
      </Routes>
    </div>
  );
}

export default App;
