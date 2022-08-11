// Problem Code: 118A
function main() {
    let input = 'xnhcigytnqcmy';
    let len = input.length;
    let result = stringTask(input, len);
    console.log(result);
}
main();
function stringTask(input, len) {
    input = input.toLowerCase();
    let inputArr = input.split("");
    let result = [];
    // Ignoring vowels
    for (let i = 0; i < len; i++) {
        if (inputArr[i] === 'a'
            || inputArr[i] === 'e'
            || inputArr[i] === 'i'
            || inputArr[i] === 'o'
            || inputArr[i] === 'u'
            || inputArr[i] === 'y'
        ) {
            continue;
        } else {
            result.push(inputArr[i]);
        }
    }

    result.splice(0, 0, '.');
    return result.join('.').slice(1);
}