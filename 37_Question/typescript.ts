function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') 
{
    console.log(`The T-shirt size is: ${size} and the message printed on it is: ${message}`);
}
  
  // Call the function to create a large shirt with the default message
  make_shirt();
  
  // Call the function to create a medium shirt with the default message
  make_shirt('Medium'); 
  // Call the function to create a shirt of any size with a different message
  make_shirt('Small', 'Hello World!'); // Output: T-shirt size: Small | Message: Hello World!
  


export{};