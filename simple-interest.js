// Simple Interest Calculator
// Formula: Simple Interest = (Principal * Rate * Time) / 100

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===================================");
console.log("  Simple Interest Calculator");
console.log("===================================");

rl.question("Enter Principal amount: ", (principal) => {
    rl.question("Enter Rate of Interest (%): ", (rate) => {
        rl.question("Enter Time period (in years): ", (time) => {
            const p = parseFloat(principal);
            const r = parseFloat(rate);
            const t = parseFloat(time);
            
            const simpleInterest = (p * r * t) / 100;
            
            console.log("===================================");
            console.log(`Simple Interest = ${simpleInterest}`);
            console.log("===================================");
            
            rl.close();
        });
    });
});
