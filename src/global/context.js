import React, { useState, createContext } from "react";

export const NameContext = createContext();

export const NameProvider = (props) => {
  const [data, setData] = useState([]);
  return (
    <NameContext.Provider value={[data, setData]}>
      {props.children}
    </NameContext.Provider>
  );
};
