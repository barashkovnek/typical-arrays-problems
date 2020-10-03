
exports.min = function min(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    }
    var minim = array[0];
    for (var i = 0; i < array.length; i++) {
        if (minim > array[i]) {
            minim = array[i];
        }
    }



    return minim;

}

exports.max = function max(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    }
    var maximum = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (maximum < array[i]) maximum = array[i];
    }
    // возвращаем максимальное значение
    return maximum;
}

exports.avg = function avg(array) {
    if (array === undefined) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
