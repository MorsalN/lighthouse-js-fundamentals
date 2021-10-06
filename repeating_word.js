//Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

let sound = '';
function laugh(num) {
    for (let x = 0; x < num; x++) {
        sound = sound + 'ha'
    }
    sound = sound + '!';
    return sound;
}
console.log(laugh(3));