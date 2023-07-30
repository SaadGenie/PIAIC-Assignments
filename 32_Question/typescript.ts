let current_users:string[] = ["admin" , "Saad" , "Ahmed" , "Ali" , "Adil"];
let new_users:string[] = ["Qureshi", "AHMED", "Awais" , "Saad", "Huzaifa"];

let z = 0;

for(let i = 0 ; i < new_users.length ; i++)
{
    z = 0;
    for(let y = 0 ; y < current_users.length ; y++)
    {
        if(new_users[i].toLowerCase() == current_users[y].toLowerCase())
        {
            console.log("Sorry this username is not available. Enter a new One");
            z++;
        }
    }

    if(z==0)
    {
        console.log("Username is available");
    }
    
}