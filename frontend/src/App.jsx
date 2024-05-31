import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowRecord from "./pages/ShowRecord";
import CreateRecord from "./pages/CreateRecord";
import EditRecord from "./pages/EditRecord";
import DeleteRecord from "./pages/DeleteRecord";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/records/create" element={<CreateRecord />} />
      <Route path="/records/details/:id" element={<ShowRecord />} />
      <Route path="/records/edit/:id" element={<EditRecord />} />
      <Route path="/records/delete/:id" element={<DeleteRecord />} />
    </Routes>
  );
};
export default App;
