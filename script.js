// Step 1: Instantiate a new array and add 5 numeric values
let myArray = [10, 20, 30, 40, 50];

// Step 2: Output the first and last value of the array
console.log("first value:",myArray[0]); // First value: 10
console.log("Last value:", myArray[myArray.length - 1]); // Last value: 50

// Step 3: Using a for loop to output each value in the array
for (let i = 0; i < myArray.length; i++) {
    console.log("Value at index", i, ":", myArray[i]);
}

// Step 4: Use the push() method to add 5 more values to the array
myArray.push(60,70,80,90,100);
console.log("Array after push:", myArray);
// The new values (60, 70, 80, 90, 100) appear at the end of the array

// Step 5: Use the pop() method 3 times
myArray.pop();//Removes 100
myArray.pop();//Removes 90
myArray.pop();//Removes 80
console.log("Array after 3 pops:",myArray);
// The new values were removed from the end of the array

// Step 6: Declare a string variable and output its length
let myString = "Hello, World!";
console.log("length of myString:",myString.length);// Length of myString: 13
