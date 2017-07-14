function condenseWords(left, right) {
    for (let i = 0; i < left.length; i++) {
        let leftSubstring = left.substring(i);
        if (right.startsWith(leftSubstring)) {
            return left + right.replace(leftSubstring, '');
        }
    }
    return null;
}

function condenseSentence(string) {
    const words = string.split(" ");
    for (let i = 0; i < words.length - 1; i++) {
        const condensed = condenseWords(words[i], words[i+1]);
        if(condensed) {
            words[i] = condensed;
            words.splice(i+1, 1);
            i--;
        }
    }
    return words.join(" ");
}

console.log(condenseSentence("no one ever runs so often"));
console.log(condenseSentence("yellow low dog"));
console.log(condenseSentence("the black kettle is hot"));

// console.log(condenseWords("lover", "resever"));