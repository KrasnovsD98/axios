import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [ex, setExcuse] = useState("");
  const [generatedExcuse, setGeneratedExcuse] = useState("");
  const fetchData = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${ex}`).then(
      (res) => {
        console.log(res.data[0].excuse);
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };
  const handleClick = (str) => {
    setExcuse(str);
    fetchData();
  };
  return (
    <>
      <h1>Generate exuse</h1>
      <button onClick={() => handleClick("party")}>Party</button>
      <button onClick={() => handleClick("family")}>Family</button>
      <button onClick={() => handleClick("office")}>Office</button>
      <p>{generatedExcuse}</p>
    </>
  );
}

export default App;
