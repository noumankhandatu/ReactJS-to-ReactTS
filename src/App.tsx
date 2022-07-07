import React from "react";
import Greet from "./components/Greet";
import "./App.css";

function App() {
  const array = [1, 2, 3];
  const arrayString = ["type", "script"];
  const object = {
    name: "nouman",
    learning: "typeScript",
  };
  const objectArray = [
    {
      name: "nouman",
      age: 23,
      khan: "khan",
    },
    {
      name: "aka",
      age: 23,
    },
  ];
  const ReturnSome = () => {
    return 0;
  };
  const NoReturn = () => {
    console.log("helo");
  };
  return (
    <div className="App">
      <Greet
        age={10}
        male={true}
        array={array}
        arrayString={arrayString}
        objectProps={object}
        objectArray={objectArray}
        ReturnSome={ReturnSome}
        NoReturn={NoReturn}
      />
    </div>
  );
}

export default App;
