console.warn('Array HomeWork!');

function findMinNumber(array) {
    //var min = Math.min.apply(window, array);                            nu vreau sa o folosesc
    var min = array[0];
    array.forEach(function (nr) {
        if (min > nr) {
            min = nr;
        }
    });

    console.info('min = ', min);
}

var repetenti4B = [123, 22, 1, 43, -6, 25];
findMinNumber(repetenti4B);

var repetenti7C = [23, 223, 431, 2, 11, 4];
findMinNumber(repetenti7C);

findMinNumber([12, 22, 1, 45]);


function findMaxNumber() {
    var array = [123, 22, 1, 43, -6, 25];
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    console.info('max = ', max);
}

findMaxNumber();


// =================== sort ============================


function sortAsc(array) {
    console.warn('sorting:', array);
    // array.sort(); - aceasta este cea mai simpla versiune de sortare
    for (var j = 0; j < array.length; j++) {
        for (var i = 0; i < array.length - 1 - j; i++) {
            console.info('compare', array[i], array[i + 1], i);
            if (array[i] > array[i + 1]) {
                console.info('change...', i);
                var tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
            }
        }
        console.log('intermediary:', array, i, j);
    }
    console.info('sorted:', array)
}

sortAsc([1, 2, 3, 4, 5]);
sortAsc([5, 4, 3, 2, 1]);
sortAsc([1, 3, 2, 5, 4]);
