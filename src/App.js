import React from "react";
import Header from "./Components/Header/Header";
import Footer  from "./Components/Footer/Footer";
import ApplicationRoutes from "./Routes/ApplicationRoutes";
import { useLocation } from "react-router";
function App() {

  // const match = useRef(window.location.pathname);
  const match=useLocation();
  return (  
    <>
    <Header />
    <ApplicationRoutes />
    {
      (match.pathname.includes("/dashboard")) ? null : <Footer />    
    }
    {/* <Footer /> */}
    </>  
  );
}

export default App;
