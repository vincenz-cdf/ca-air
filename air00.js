if (process.argv.length != 3) {
    console.error('Veuillez passer un argument');
    process.exit(1);
}

function split_then_join(string_à_couper, string_séparateur) {
    const tableau = [];
    let currentWord = "";

    for(const char of string_à_couper) {
        if(char === string_séparateur) {
            if(currentWord) {
                tableau.push(currentWord);
                currentWord = "";
            }
        } else {
            currentWord += char;
        }
    }

    if(currentWord) {
        tableau.push(currentWord); 
    }

    return tableau;
}

const tableau = split_then_join(process.argv[2], " ");
let result = "";
for(const word of tableau) {
    result += word;
    if(word !== tableau[tableau.length - 1]) result += "\n";
}

console.log(result);