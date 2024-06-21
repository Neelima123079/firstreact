import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";



const App= ()=> {
  return (
    <Routes> 
      <Route exact path='/' element={<LandingPage />}/>
      <Route  path='/Login' element={<Login />}/>
      <Route  path='/SignUp' element={<SignUp />}/>
    </Routes>
  );
         
}

export default App;
