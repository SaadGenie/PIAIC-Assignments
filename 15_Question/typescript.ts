// Creating an array of string data type and storing the names 
let array: string[] = ["Saad", "Ali" , "Ahmed" , "Awais"];

// Storing a message for the persons
let message = " Would you like to come to the dinner?";

// displaying the person name and message

for(let i = 0 ; i < 4 ; i++)
{
    console.log(array[i] + message);
}


console.log(`\nOh ${array[2]} cannot make it to the dinner\n`);

let new_person_name = "Huzaifa";
array[2] = new_person_name;

for(let i = 0 ; i < 4 ; i++)
{
    console.log(array[i] + message);
}


export{};