import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import New from "./views/New";
import DisplaySingle from "./views/DisplaySingle";

function App() {
  return (
    <div className="App container mt-3">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/listing/new" element={<New />} />
        <Route path="/listing/:id" element={<DisplaySingle />} />
      </Routes>
    </div>
  );
}

export default App;
