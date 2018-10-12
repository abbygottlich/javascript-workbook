// Write a JavaScript program to display the current day and time. - use new Date method
const currentDate = () =>{
    const date = new Date();
    return date;
  }
  console.log(currentDate());
  
  // Write a JavaScript program to convert a number to a string. - use .toString method
  const numString = (num1) =>{
    const numString = num1.toString();
    return numString;
  }
  console.log(numString(7));
  
  // Write a JavaScript program to convert a string to the number. - use Number() method
  const word = (str1) =>{
    return Number(str1);
  }
  console.log(word('4'));
  
  // Write a JavaScript program that takes in different datatypes and prints out whether they are a boolean, null, undefined, number, NaN, string - use typeof method
  const mainVariable = (testThis) =>{
    if(testThis === null){
      return null;
    }else if(isNaN(testThis)){
      return NaN;
    }
    return typeof testThis
  }
  console.log(mainVariable(true,true));
  
  // Write a JavaScript program that adds 2 numbers together. - write a function with two parameters
  const addTwoNumbers = (num1, num2) => {
    return num1+num2
  }
  addTwoNumbers (6,2);
  
  // Write a JavaScript program that runs only when 2 things are true. - write a function with two parameters
  const areTheseTrue = (arg1, arg2) => {
    if(arg1 && arg2){
      return 'Both things are true.'
    }
  };
  areTheseTrue (true, true)
  
  // Write a JavaScript program that runs when 1 of 2 things are true. - write a function with two parameters
  const isOneTrue = (arg1, arg2) => {
    if(arg1 || arg2){
      return 'One of these is true.'
    }
  };
  isOneTrue (true, false)
  
  // Write a JavaScript program that runs when both things are not true. - write a function with two parameters
  const bothNotTrue = (arg1, arg2) => {
    if(!arg1 && !arg2){
      return 'Both of these are not true.'
    }
  };
  bothNotTrue (false, false)