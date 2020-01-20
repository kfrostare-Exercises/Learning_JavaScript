// ////EQUALITY OPERATOR
// ///Using this operator is simple, just use three equal signs.
console.log(5 === 5);
let pears = 40 / 2;
console.log(20 === pears);
console.log(10 === 11);

// ////INEQUALITY OPERATOR
// /To use this operator, you use a single exclamation point followed by two equal signs.
console.log(9 !== 7);
let oranges = 5 * 6;
console.log(30 !== oranges);
console.log(57 !== 57);

// ////GREATER THAN AND LESS THAN OPERATORS
// ///Use greater than operator via the greater than symbol, and the less than operator via the less than symbol.
console.log(6 < 4);
console.log(8 < 13);
let books = 32;
console.log(books > 30);
console.log(books > 50);

// ////OR EQUAL TO OPERATORS
// ///Check for greater than or equal to via greater than symbol followed bt an equal sign, and check for less than or equal to via a less than symbol followed by equal sign.
console.log(29 <= 94);
console.log(13 <= 9);
console.log(32 >= 32);
console.log(42 >= 85);

////////LOGICAL OPERATORS
////There will be times where you need to check multiple conditions before being able to make a decision. 
///To check both conditions at the same time, we can use a logical operator. 

////AND(&&)
///By using the -and- operator, the code block will only execute if both conditions are true. 
let wearingShoes = false;
let needsTying = true;
if (wearingShoes && needsTying)
 { console.log("I should tie my shoes!"); }
else 
{ console.log("Nope, my shoes doesn't need tying... ."); }

////OR (||) In other cases, you might not need both conditions to be true to want to proceed with the code block. Maybe just one being true is all you need.
///Consider the case where you want some candy but don't really care what kind. This is a perfect opportunity to use the or logical operator.
///Because you only want candy, regardless of the brand, you are happy with either one.
///Only one of two need to be true for the entire conditional to be true and for the following code to execute.
let thereIsSnickers = true;
let thereIsSkittles = true;
if (thereIsSnickers || thereIsSkittles) { console.log("I'm glad there's candy in this house!"); }
else { console.log("Oh no! There's no candy in this house...");}

////NOT (!) In our final logical operator, you can test the opposite value of an outcome by using the not operator.
///Let's say you only wear boots when it isn't hot.
///You would only wear boots if the temperature for the day doesn't exceed 70 degrees.
///Since today is only 50 degrees, it isn't too hot to wear boots and therefore you wear them today. 
let temperature = 50;
let itIsHot = temperature > 70;
if (!itIsHot) { console.log("I will wear my boots today!"); }





























