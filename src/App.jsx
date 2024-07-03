import React, { useEffect, useState } from "react";
import "./App.css";
import Calculator from "./components/calculator.jsx";
import Table from "./components/table.jsx";
import RunButton from "./components/RunButton.jsx";
import axios from "axios";

function App() {
  const [personList, setPersonList] = useState([]);

  const addPerson = (person) => {
    setPersonList([...personList, person]);
  };

  const onDelete = (id) => {
    setPersonList((prevState) => prevState.filter((p) => p.id !== id));
  };

  useEffect(() => {
    axios.get("http://localhost:5001/calculator").then((response) => {
      setPersonList(response.data);
    });
  }, []);

  return (
    <div className="container">
      <Calculator onAddPerson={addPerson} />
      <Table personList={personList} onDelete={onDelete} />
      <RunButton />
    </div>
  );
}

export default App;
