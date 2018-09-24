//Challenge #1 reversing a string
let str = 'Louis Veazey';
console.log(str.split('').reverse().join(''));

//Challenge #2 counting consonants
let getCount = function(words){
    var words      = (typeof words == 'string') ? words : '',
        count      = re => (words.match(re) || []).length,
        consonants = count(/[bcdfghjklmnpqrstvxzwy]/ig);

    return {consonants};
}
console.log(getCount(`test`));

//Challenge #4 JS function that accepts another JS function
let add = function(a, b) {
    return a+b;
}
let subtract = function(a, b) {
    return a-b;
}

let numbers = function(func) {
    let x = 500;
    let y = 3;
    return func(x, y);
}

console.log(numbers(add));
console.log(numbers(subtract));

//Challenge #5 countLine
let countLine = function(names){
    return names.split(` `).length;
}
console.log(countLine(`Alex Bob Charlie David Elijah`));

//Challenge #7 #pyramid
function buildPyramid(n) {
    for(var i = 0; i < n; i++) {
        var str = ``;
        for(var j = 1; j < n - i; j++) {
            str = str + ` `;
        }
        for(var k = 1; k <= (2 * i + 1); k++){
            str = str + `#`;
        }
    console.log(str);
    }
}
buildPyramid(4);