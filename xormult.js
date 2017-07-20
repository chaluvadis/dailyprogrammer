const xORMultiplication = (a, b) => {
    let results = 0;
    while (b != 0) {
        console.log(results);
        results ^= a * (b & 1);
        console.log(results)
        a <<= 1;
        console.log(a)
        b >>= 1;
        console.log(b)
    }
    return results;
}

console.log(xORMultiplication(14, 13))