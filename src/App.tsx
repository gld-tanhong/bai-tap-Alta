import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Sign from "./pages/Sign";
import LoginSuccess from "./pages/LoginSuccess";


function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/loginsuccess' element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
