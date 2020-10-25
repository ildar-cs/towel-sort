// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];

    let array = [];
    let s = 0;
    for (let i = 0; i < matrix.length; i++) {
        if ((i + 1) % 2 === 0) {
            for (let k = matrix[i].length - 1; k >= 0; k--) {
                array[s] = matrix[i][k];
                s++;
            }
        } else {
            for (let k = 0; k < matrix[i].length; k++) {
                array[s] = matrix[i][k];
                s++;
            }
        }
    }

    return array;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

module.exports(matrix);
