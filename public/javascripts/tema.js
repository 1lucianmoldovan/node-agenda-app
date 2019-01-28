// cel mai mic numar :

var array = [22, 1, 4, 5, 2, -2, 8];
var smallestnumber = array[0];
for (var i = 0; i < array.length; i++) {
    if (array[i] < smallestnumber) {
        smallestnumber = array[i];
    }

}
console.info(smallestnumber);

function highestNumber() {
    var array = [22, 1, 4, 9, 3, 5, 43]
}

highestNumber();

console.log(highestNumber)



// sortare crescatoare :

var numbers = [88, 12, 6, 4]
numbers.sort(function highestNUmber(a, b) {
    return a - b
})
