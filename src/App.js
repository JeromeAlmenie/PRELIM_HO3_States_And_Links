import "./styles.css";

import InputComponents from "./components/InputComponents";
import ConditionalComponent from "./components/ConditionalComponents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToDoList />
      <Routes>
        <Route path="/InputComponents" element={<InputComponents />} />
        <Route
          path="/ConditionalComponent"
          element={<ConditionalComponent />}
        />
        <Route path="/ToDoList" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}
