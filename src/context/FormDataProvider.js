import React, { createContext, useState } from "react";

const FormDataContext = createContext({});

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;
