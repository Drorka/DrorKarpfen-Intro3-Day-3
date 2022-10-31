
// 1.
function alcoholCheck() {
    var userName = prompt('ma hashem?');
    var age = prompt('bat kama?');

        if (age >= 18) {
            console.log('welcome', userName, 'you are', age, 'so you are old enough')
        } else {
            console.log('sorry', userName, 'you are', age, 'and thats too young')
        }
}

// 2.
function drink(){
    var favDrink = prompt('ma shota?');
    console.log('enjoy your', favDrink + '!');
}

// 3.
var score = 1;

function multTen(){
    score = score *10
    console.log(score);
}

// 4.
function resetScore(){
    if (score > 100000) {
        score = 1
        console.log(score);
    } else {
        console.log('score not high enough');
    }
}

// 5.
function calculateMult(){
    var userNum1 = prompt('enter first number');
    var userNum2 = prompt('enter second number');
    var userNum3 = prompt('enter third number');
    console.log(userNum1, userNum2, userNum3);

    var userNumsMult = userNum1 * userNum2 * userNum3;
    console.log(userNumsMult);
}