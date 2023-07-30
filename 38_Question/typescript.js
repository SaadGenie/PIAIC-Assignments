"use strict";
function describe_city(city_name, country_name = "Pakistan") {
    console.log(`${city_name} is in ${country_name}`);
}
describe_city("Lahore");
describe_city("Karachi");
describe_city("California", "United States");
