if (process.argv.length != 4) {
    console.error('Veuillez passer deux arguments');
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

const tableau = split_then_join(process.argv[2], process.argv[3]);
let result = "";
for(let i = 0; i < tableau.length; i++) {
    result += tableau[i];
    if(i < tableau.length - 1) result += "\n";
}

console.log(result);