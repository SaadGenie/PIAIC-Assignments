let alien_color:string = "green";

console.log("-------------Version 1 ----------------------");
// this will run if block
if(alien_color == "green")
{
    console.log("Player just earned 5 points for shooting the alien");
}
else
{
    console.log("Player just earned 10 points for shooting the alien");
}
console.log("-------------Version 2 ----------------------");
alien_color = "red";
// this will run else block
if(alien_color == "green")
{
    console.log("Player just earned 5 points for shooting the alien");
}
else
{
    console.log("Player just earned 10 points for shooting the alien");
}


export{};