import React, { createContext } from "react";

import ContactContext from "./hooks/ContactConext";

const Context = createContext();

function Provider({ children }) {
  const { datas, handleRemove, handleAdd, handleEdit } = ContactContext();

  return (
    <Context.Provider value={{ datas, handleRemove, handleAdd, handleEdit }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
