////REGEX - OR - REGULAR EXPRESSION
///There are 2 ways to create a regular expression in JavaScript
//It can either be created with RegExp constructor - or - by using forward slashes ( / ) to enclose the pattern.

////REGULAR EXPRESSION CONSTRUCTOR
///Syntax: new RegExp(pattern[, flags])
//Example: var regexConst = new RegExp('abc');

////REGULAR EXPRESSION LITERAL
///Syntax: /pattern/flags
//Example: var regexLiteral = /abc/;

////Regular expressions are used to match parts of strings. You create patterns to help you do that matching. 
///JavaScript has multiple ways to use Regexes. One way to test the Rejex is to use the test-method.
//It takes the Rejex - applies it to a string and return true or false if it matches something. 

//So in this example we have the string "Is it true that the name Karro is in this sentence?"
//We have this Rejex: /Karro/
//We have result = karroRejex.test - and inside the parentheses we'll put (whereisKarro);
//In order to see if my string "whereIs Karro" is going to contain the regex which is /Karro/
//In this case it will be TRUE because it does...
let whereIsKarro = "Is it true that the name Karro is in this sentence?";
let karroRegex = /Karro/;
let result = karroRegex.test(whereIsKarro);
console.log(result);


////REGULAR EXPRESSIONS METHODS
///There are mainly two methods for testing regular expressions:

//// RegExp.prototype.test()
///This method is used to test whether a match has been found or not.
//It accepts a string which we have to test against regular expression and returns true or false depending upon if the match is found or not.
var regex = /Hello/;
var str = "Hello World!";
var result = regex.test(str);
console.log(result); //should equal TRUE, be careful with this case sensitive syntax!

//// RegExp.prototype.exec()
///This method returns an array containing all the matched groups.
//It accepts a string that we have to test against a regular expression.

var regex = /hello/;
var str = 'hello world';
var result = regex.exec(str);
console.log(result);

// returns [ 'hello', index: 0, input: 'hello world', groups: undefined ]
// 'hello' -> is the matched pattern.
// index: -> Is where the regular expression starts.
// input: -> Is the actual string passed.
