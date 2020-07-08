import React from 'react';
import './App.css';
import Axios from "axios";
import LinkInput from "./LinkInput";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
      }
  )

  return (

    <div className="App">
      <LinkInput/>
    </div>
  );
}

export default App;
