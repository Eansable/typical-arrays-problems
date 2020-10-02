exports.min = function min(array) {
    let i = 0;
    let minElement = array[0];

    while (i <= array.length - 1) {
        if (array[i] < minElement) {
            minElement = array[i];
        }
        i++;
    }
    return minElement;
};

exports.max = function max(array) {
    let i = 0;
    let maxElement = array[0];
    while (i <= array.length - 1) {
        if (array[i] > maxElement) {
            maxElement = array[i];
        }
        i++;
    }
    return maxElement;
};

exports.avg = function avg(array) {
    let i = 0;
    let sum = 0;
    if (array === 0) return 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    return sum / array.length;
};
