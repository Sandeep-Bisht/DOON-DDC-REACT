import CurrencyContext from "./TokenContext";
import React, { useState } from "react";

const GlobalState = (props) => {
  const [token, setToken] = useState("0");
  return (
    <CurrencyContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {props.children}
    </CurrencyContext.Provider>
  );
};
export default GlobalState;
