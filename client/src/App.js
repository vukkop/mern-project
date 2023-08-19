import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles";
import New from "./views/New";
import SingleListing from "./views/SingleListing";
import Landing from "./views/Landing";
import Admin from "./views/Admin";
import Login from "./views/Login";
import Properties from "./views/Properties";
import About from "./views/About";
import Registration from "./views/Registration";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/listing/new" element={<New />} />
            <Route path="/listing/:id" element={<SingleListing />} />
            <Route path="/admin//*" element={<Admin />} />
            <Route path="/properties" element={<Properties />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
