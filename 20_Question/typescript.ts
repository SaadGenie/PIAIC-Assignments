// Creating an array of countries
const countries: string[] = ["United States", "Canada", "United Kingdom", "Germany", "Japan",  "China", "India"];

console.log("List Of Countries: ");

for(let i = 0; i < countries.length ; i++)
{
    console.log(`${i+1}. ${countries[i]}`);
}