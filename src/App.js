import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './styles/variables.css'
import './styles/app.css'
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import Map from "./components/map/Map";

const App = () => {
  return(
  <div className="App">
    <Router>
      <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="form" element={<Form/>} />
      <Route exact path="map" element={<Map/>} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;