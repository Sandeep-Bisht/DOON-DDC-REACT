import React from "react";

import Footer  from "./Components/Footer/Footer";
import ApplicationRoutes from "./Routes/ApplicationRoutes";
import { useLocation } from "react-router";
import { Header } from "antd/es/layout/layout";
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
