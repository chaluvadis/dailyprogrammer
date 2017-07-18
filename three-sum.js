const getThreeSum = (numbers) => {
    const sets = [];
    for (let i = 0; i < numbers.length - 2; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            for (let k = 0; k < numbers.length; k++) {
                const a = numbers[i];
                const b = numbers[j];
                const c = numbers[k];
                const set = `${a} ${b} ${c}`;
                if(a + b+ c === 0 && sets.indexOf(set) === -1) {
                    sets.push(set);
                }
            }
        }
    }
    return sets;
} 

console.log(getThreeSum([9,-6,7,-5,9,8,3,-4,8,1,7,-4,9,-9,1,9,-9,9,4]))