let stocks = {
    fruits: [`Banana`, `Apfel`, `Mangoe`],
    liquid: [`water`, `ice`],
    container: [`cone`, `cup`],
    toppings: [`chocolate`, `sprinkes`],
}

// let order = (toppings: number, container: number, fruit_name: number, call_production: any) => {

//     setTimeout(() => {
//         console.log(`${stocks.fruits[fruit_name]} is selected`);
//         setTimeout(() => {
//             console.log(`${stocks.container[container]} is selected`);
//             setTimeout(() => {
//                 console.log(`${stocks.toppings[toppings]} is selected as toppings`);

//             }, 2000);

//         }, 3000);
//     }, 2000);

//     call_production();
// }
// let production = () => {
//     setTimeout(() => {
//         console.log(`Order has placed`);
//         setTimeout(() => {
//             console.log(`Production has started`);
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is being added`);
//                 setTimeout(() => {
//                     console.log(`your Ice cream is ready! Here you go`);

//                 }, 6000);

//             }, 2000);

//         }, 0);
//     }, 1000)
// }

// order(0, 0, 2, production);


let is_shop_open = true;
let order = (time: number, work: any) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time);

        }
        else {
            reject(console.log(`We are sorry shop is closed`));

        }
    })

}
order(4000, () => console.log(`${stocks.fruits[0]}`))

    .then(() => {
        return order(0, () => console.log(`production has been started`));
    }
    )

    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is being added`));

    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.container[0]} is selected`));

    })

    .then(() => {
        return order(1000, () => console.log(`${stocks.toppings[0]} is being added as topping`));

    })

    .then(() => {
        return order(2000, () => console.log(`Enjoy your ice cream!`));

    })