import React from "react";

interface GreetProps {
  age: number;
  male?: boolean;
  array: number[];
  arrayString: string[];
  objectProps: {
    name: string;
    learning: string;
  };
  objectArray: {
    name: string;
    age: number;
    khan?: string;
  }[];
  ReturnSome: () => void;
  NoReturn: Function;
}
const Greet = ({
  age,
  male,
  array,
  arrayString,
  objectProps,
  ReturnSome,
  NoReturn,
  objectArray,
}: GreetProps) => {
  const z = ReturnSome();
  const x = NoReturn();
  console.log(z, x);
  return (
    <div>
      <h1>
        Greetings xin and im + {age} + {male && "male"}
      </h1>
      <h1>
        {array.map((nums: number) => {
          return nums;
        })}
      </h1>
      <h1>
        {arrayString.map((variables: string) => {
          return variables;
        })}
      </h1>
      <h1>{objectProps.name + " " + objectProps.learning}</h1>
      {objectArray.map((objArray) => {
        return <h1> {objArray.name + objArray.age + objArray.khan}</h1>;
      })}
    </div>
  );
};

export default Greet;
