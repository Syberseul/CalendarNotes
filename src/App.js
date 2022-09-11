import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import CRUD from "./pages/CRUD";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/calendar" exact element={<Calendar />}></Route>
        <Route path="/edit" exact element={<CRUD />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
