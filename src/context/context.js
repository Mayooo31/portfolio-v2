import React, { useContext, useState, createContext } from "react";

const Context = createContext();

export const useModal = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const [clickedModal, setClickedModal] = useState(0);
  const [info, setInfo] = useState(1);

  return (
    <Context.Provider
      value={{
        clickedModal,
        setClickedModal,
        info,
        setInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
};
