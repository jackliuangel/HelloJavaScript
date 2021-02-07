

'use strict';

interface Props {
    name:String;
    age: Number;
  }


  var resultWithFunction = ({name,age}:Props)=>{

      return {name,age};
  }


  console.log(resultWithFunction({name:"12",age:3}));

let message: string = 'Hello World';
console.log(message);



let myAdd: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };

 let result:number = myAdd(3,4);
 console.log(result);