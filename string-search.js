const products = ['dell laptop', 
'acer laptop', 
'apple phone', 
'samsung Phone', 
'google phone',
'Apple Laptop' 
];
const searching = 'phone';
const output = [];

// indexOf() Method
for(const product of products){
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        // output.push(product)
    }
}
// console.log(output)

// includes() Method
for(const product of products){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        // output.push(product)
    }
}
// console.log(output)

// startsWith() Method
for(const product of products){
    if(product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())){
        // output.push(product)
    }
}
// console.log(output)

// endsWith() Method
for(const product of products){
    if(product.toLocaleLowerCase().endsWith(searching.toLocaleLowerCase())){
        output.push(product)
    }
}
// console.log(output)

let nadimHas = 5000;
let totalExpenses = 0; // Initialize total expenses

function treatDey(expenses){
    for(const expense of expenses){
        console.log(expense);
        totalExpenses += expense; // Accumulate total expenses
    }
}

treatDey([500, 700, 300]); // Pass expenses as an array

const remainingBalance = nadimHas - totalExpenses; // Calculate remaining balance
console.log("Remaining Balance:", remainingBalance);

