
// For Version 1 ( Test Pass ) , I will store green value in the variable

let alien_color:string = "green";
// this passes the test and have output
if(alien_color == "green")
{
    console.log("Player just earned 5 points");
}

// For Version 2 ( Test does not Pass ) , I will store another value in the variable
alien_color = "red";
// this doesnot passes the test and dont have output
if(alien_color == "green")
{
    console.log("Player just earned 5 points");
}