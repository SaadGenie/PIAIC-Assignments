"use strict";
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
    };
    // Process additional options
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }
    return car;
}
const myCar = createCar("Toyota", "Camry", "color", "Blue", "year", 2022);
const myCar2 = createCar("Honda", "Civic");
console.log(myCar);
console.log(myCar2);
