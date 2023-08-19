import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import CheckSelectedId from './Components/CheckSelectedId';
import FillDetails from "./Pages/FillDetails"
import About from "./Pages/About"
import MyResume from "./Pages/MyResumes"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route exact path="/" element={<Home />} />


        {/* Fill-Details Page */}
        <Route exact path="/template/FillDetails"
          element={
            <CheckSelectedId>
              < FillDetails />
            </CheckSelectedId>
          } />


        {/* About Page */}
        <Route exact path="/about" element={<About />} />
        {/* My Resume Page */}
        <Route exact path="/MyResume" element={<MyResume />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App

