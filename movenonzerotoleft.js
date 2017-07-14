//[2,0,3,4,0,1,0]

//[2,3,4,1,0,0]
// const moveZeroToLeft = (x) => {
//     let length = x.length, t;
//     let i = 1;
//     for (let j = 1; j < length; j++) {
//         if (x[j] > 0) {
//             t = x[i];
//             x[i] = x[j];
//             x[j] = t;
//             i = i + 1;
//         }
//     }
//     return x;
// }

const moveZerosToLeft = (x) => {
    let i = 0;
    for (let j = 0; j < x.length; j++) {
        if (x[j] !== 0) {
            x[i] = x[j];
            i = i + 1;
        }
    }
    while (i < x.length) x[i++] = 0;
    return x;
}

const moveZerosToRight = (x) => {
    let i = 0, t, m;
    for (let j = 0; j < x.length; j++) {
        if (x[j] === 0) {
            t = x[i]
            x[i] = x[j];
            x[j] = t;
            i = i + 1;
        }
    }
    return x;
}

// console.log(moveZerosToLeft([1, 0, 2, 3, 0, 2, 0]));
// console.log(moveZerosToLeft([6, 7, 0, 2, 3, 0, 2, 0]));
// console.log(moveZerosToLeft([1, 2, 34, 5, 6, 7, 7, 6]));
console.log(moveZerosToLeft([1, 0, 2, 3, 0, 2, 0]));
console.log(moveZerosToRight([1, 0, 2, 3, 0, 2, 0]));

