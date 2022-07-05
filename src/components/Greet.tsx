import React from "react";
type ObjectHelper = {
  name?: string;
  age: number;
  khan?: string;
};
interface GreetProps extends ObjectHelper {
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
}
const Greet = ({
  age,
  male,
  array,
  arrayString,
  objectProps,
  objectArray,
}: GreetProps) => {
  return (
    <div>
      <h1>
        Greetings nouman and im + {age} + {male && "male"}
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
