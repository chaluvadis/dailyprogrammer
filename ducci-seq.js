/*
A Ducci sequence is a sequence of n-tuples of integers, sometimes known as "the Diffy game",
because it is based on sequences. Given an n-tuple of integers (a_1, a_2, ... a_n) the
next n-tuple in the sequence is formed by taking the absolute differences of neighboring integers.
Ducci sequences are named after Enrico Ducci (1864-1940), the Italian mathematician credited
with their discovery.

Some Ducci sequences descend to all zeroes or a repeating sequence.
An example is (1,2,1,2,1,0) -> (1,1,1,1,1,1) -> (0,0,0,0,0,0).
*/

const isFinalStep = (arr) => arr.every(a => a === 0)

const ducci = (arr) => {
    let seq = []
    let newSeq = arr.map(a => a)
    let length = newSeq.length;
    for (let i = 0; i < length; i++) {
        seq.push(Math.abs(newSeq[(i + 1) % length] - newSeq[i % length]))
    }
    return seq;
}

const ducciSeqSteps = (arr) => {
    let seq = arr.map(a => a)
    let steps = 1
    if (isFinalStep(seq)) return steps;
    do {
        steps += 1;
        seq = ducci(seq);
    } while (!isFinalStep(seq));
    return steps;
}

console.log(ducciSeqSteps([1, 2, 1, 2, 1, 0]))
console.log(ducciSeqSteps([0, 653, 1854, 4063]))
console.log(ducciSeqSteps([4, 8, 15, 16, 23, 42]))
