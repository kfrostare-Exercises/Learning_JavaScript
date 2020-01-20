////IF : IF WHATEVER CONDITION YOU'RE CHECKING RETURNS TRUE THEN THE NEXT BLOCK OF CODE WILL RUN
///Let's say if you eat 100 candies or more, you will get a cavity.
let candy = 110;
if (candy >= 100) {
    console.log("You got a cavity!")
}

////ELSE : ELSE IS USED WHEN THE IF BEFORE IT RESULTED IN FALSE. LET'S SEE IT IN ACTION:
let candy = 80;
if (candy >= 100) {
    console.log("You got a cavity!");
} else {
    console.log("You didn't get a cavity, nice!");
}

////ELSE IF : ELSE IF IS THE COMBINATION OF AN IF AND AN ELSE. THEY ARE SANDWICHED BETWEEN THE TWO AND YOU CAN HAVE AS MANY AS YOU'D LIKE.
let candy = 5;
if (candy >= 100) 
    { console.log("You got a cavity!");} 
    else if (candy >= 95){ console.log("You've almost got a cavity. Be careful!");}
    else if (candy >= 75){ console.log("You should eat less candy!");}
    else {console.log("You didn't get a cavity, nice!");}

////TERNARY OPERATOR : THE TERNARY OPERATOR IS A SHORTHAND WAY TO REPRESENT A CONDITIONAL THAT TURNS A VALUE THAT YOU CAN THEN USE TO ASSIGN TO A VARIABLE.
///If the number isEven the variable gets a string value of Yes. Otherwise, it gets No. Ternary operators are useful for combine an entire conditional into one single line.
let number = 25;
let isEven = (number % 2 === 0) ? "Yes" : "No";
console.log("Is " + number + " an even number? " + isEven);

////SWITCH STATEMENTS : THE SWITCH STATEMENT WORK LIKE ELSE IF EXCEPT THE CODE CAN BE MORE CONCISE AND CLEANER.
///In the getFruitByColor function, we have a switch statement that switches on the color variable.
///In the case that the variable is equal to red, we return the string apple then break to prevent the function from checking further cases.
///If color does not equal red, the function moves on to check if it matches yellow. 
///This continues until the end where, if there are no cases that match color, it will follow the default path and return grape.
function getFruitByColor(color)
{
    switch (color)
    {
        case "red":
            return "apple";
            break;
            case "yellow":
                return "banana";
                break;
                case "orange":
                    return "orange";
                    break
                    case "green":
                        return "pear";
                        break
                        default:
                            return "grape";
   }
}
let favoriteColor = "yellow";
let fruit = getFruitByColor(favoriteColor);
console.log("I want to eat a " + fruit);

