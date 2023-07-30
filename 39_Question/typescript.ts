function city_country(city_name:string, country_name:string = "Pakistan")
{
    console.log(`${city_name},${country_name}`);
}

city_country("Lahore", "Pakistan");
city_country("California", "United States");
city_country("Medina", "Saudia Arabia");

export{};