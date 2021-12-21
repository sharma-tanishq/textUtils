import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Alerts from './components/Alerts';


function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleDLMode = () => {
    console.log("Clicked");
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "rgb(50, 50, 50)"
      showAlert("success","Dark Mode is Enabled")
    }

    else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("success","Light Mode is Enabled")
    }
  }
  return (
    <>
      <Router>
        <NavBar title="textUtils" mode={darkMode} toggleDLMode={toggleDLMode} />
        <Alerts style={{height:"10x"} }  alert={alert}/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <AboutUs mode={darkMode} toggleDLMode={toggleDLMode} showAlert={showAlert} />
            </Route>
            <Route exact path="/">
              <TextForm mode={darkMode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
