"use strict";
let stocks = {
    fruits: [`Banana`, `Apfel`, `Mangoe`],
    liquid: [`water`, `ice`],
    container: [`cone`, `cup`],
    toppings: [`chocolate`, `sprinkes`],
};
let order = (toppings, container, fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} is selected`);
        setTimeout(() => {
            console.log(`${stocks.container[container]} is selected`);
            setTimeout(() => {
                console.log(`${stocks.toppings[toppings]} is selected as toppings`);
            }, 2000);
        }, 3000);
    }, 2000);
    call_production();
};
let production = () => {
    setTimeout(() => {
        console.log(`Order has placed`);
        setTimeout(() => {
            console.log(`Production has started`);
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is being added`);
                setTimeout(() => {
                    console.log(`your Ice cream is ready! Here you go`);
                }, 6000);
            }, 2000);
        }, 0);
    }, 1000);
};
order(0, 0, 2, production);
