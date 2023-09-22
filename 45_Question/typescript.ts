interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...options: any[]): Car {
    const car: Car = {
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
