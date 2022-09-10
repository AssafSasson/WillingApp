import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Add from "./components/Add";
import Find from "./components/Find";
import All from "./components/All";

function App() {
  const [volunteerArr, setvolunteerArr] = useState([]);
  const [citySelect, setCityselect] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/add"
            element={
              <Add
                volunteerArr={volunteerArr}
                setvolunteerArr={setvolunteerArr}
              />
            }
          />
          <Route
            path="/find"
            element={
              <Find
                citySelect={citySelect}
                setCityselect={setCityselect}
                volunteerArr={volunteerArr}
              />
            }
          />
          <Route
            path="/all"
            element={
              <All citySelect={citySelect} volunteerArr={volunteerArr} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
