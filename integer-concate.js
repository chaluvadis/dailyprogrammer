/**
 * find the min and max of concated string with array of integers
 * for ex: [1,9,10]
 * min: 1019
 * max: 9110
 *   
 */

const getMinMax = (input) => {
    return {
        min: input
            .sort((a, b) => (a + b) - (b + a))
            .reduce((string, value) => string + value),
        max: input
            .reverse()
            .reduce((string, value) => string + value)
    }
}

console.log(getMinMax(["79", "82", "34", "83","69", "00"]).min, getMinMax(["79", "82", "34", "83","69","00"]).max);
console.log(getMinMax(["79", "82", "34", "83","69"]).min, getMinMax(["79", "82", "34", "83","69"]).max);