import React from "react";
import { Route, Routes } from "react-router-dom";
import { FormDataProvider } from "./context/FormDataProvider";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <FormDataProvider>
      <Routes>
        <Route path="*" element={<Form />} />
        <Route path="thankyou" element={<ThankYou />} />
      </Routes>
    </FormDataProvider>
  );
}

export default App;
