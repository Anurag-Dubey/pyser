import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Video from "./components/video";
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [ user, setLoginUser] = useState({})
   const user1=localStorage.getItem("user")
  return (

       <div className="App">
        <BrowserRouter>
         <Routes>
          <Route exact path="/" element={
              user && user?._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
            }/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route path="/register" element={ <Register />}/>
        </Routes>
        </BrowserRouter>
        

    </div>

      



  );
}

export default App;
