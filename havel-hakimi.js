/*
    The Havel Hakimi Algorithm
    Perform the Havel Hakimi algorithm on a given sequence of answers. The algorithm will return
    true if the answers are consistent and false if the answers are inconsistent.
    1. Remove all 0's from the sequence (i.e. warmup1)
    2. If the sequence is now empty (no elements left), stop and return true
    3. Sort the sequence in descending order (i.e. warmup2)
    4. Remove the first answer (which is also largest answer or tied for the largest) from the sequence
        and call it N. The sequence is now 1 shorter than it was after the pervious stop.
    5. if N is greater than the length of this new sequence (i.e. warmup3), stop and return false.
    6. Subtract 1 from each of the first N elements of the new sequence (i.e. warmup4)
    7. Continue from step 1 using the sequence from the previous step.
 */

const warmup1 = (arr) => arr.filter(e => e !== 0)

const warmup2 = (arr) => arr.sort((a, b) => b - a)

const warmup3 = (n, arr) => n > arr.length

const warmup4 = (n, arr) => arr.slice().map((v, i, num) => i - n < 0 ? v - 1 : v)

const IsHavelHakimi = (seq) => {
    let arr = seq.map(a => a)
    while (true) {
        arr = warmup1(arr)
        if (arr.length === 0) return true;
        arr = warmup2(arr)
        let n = arr.splice(0, 1)
        if (warmup3(n, arr)) return false;
        arr = warmup4(n, arr)
    }
}


console.log(IsHavelHakimi([5, 3, 0, 2, 6, 2, 0, 7, 2, 5]))
console.log(IsHavelHakimi([4, 2, 0, 1, 5, 0]))
console.log(IsHavelHakimi([3, 1, 2, 3, 1, 0]))
console.log(IsHavelHakimi([16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16]))
console.log(IsHavelHakimi([14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12]))
console.log(IsHavelHakimi([15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3]))
console.log(IsHavelHakimi([6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1]))
console.log(IsHavelHakimi([2, 2, 0]))
console.log(IsHavelHakimi([3, 2, 1]))
console.log(IsHavelHakimi(([1, 1])))
console.log(IsHavelHakimi(([1])))