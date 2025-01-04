import { useEffect, useState } from 'react';
import './App.css';
import CreateInvoice from './CreateInvoice';
import Login from './Login';

function App() {
  

  const [isLoggedIn,setLoggedIn]=useState(false);
  useEffect(()=>{
    if(localStorage.getItem("session")!==null){
      console.log("H");
      
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
  },[]);

  return (
    isLoggedIn?<CreateInvoice setLoggedIn={setLoggedIn} />:<Login setLoggedIn={setLoggedIn} />
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={isLoggedIn ? <Navigate to="/main" /> : <Navigate to="/login" />}
    //     />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/main" element={<CreateInvoice />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
