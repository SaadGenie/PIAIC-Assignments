function orderSandwich(...items: string[]): void {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please select some ingredients.");
    } else {
        console.log("Sandwich ordered with the following items:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
}

// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss", "Tomato", "Mustard");
orderSandwich(); // Empty sandwich
