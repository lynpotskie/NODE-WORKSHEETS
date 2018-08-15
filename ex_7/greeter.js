function getGreet() {
    const greet = {
      greet: 'hi',
      firstName: 'lyn',
      lastName: 'fuster'
    };
    
    return greet;
  }
  
  const getGreetArrowFunction = () => ({
    greet: 'hi',
    firstName: 'lyn',
    lastName: 'fuster'
  });
  
  const greet = getGreetArrowFunction();
  console.log(greet);
   
  