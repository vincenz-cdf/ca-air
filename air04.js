if (process.argv.length != 3) {
    console.error('Veuillez passer un argument');
    process.exit(1);
}

const inputString = process.argv[2];
let resultString = "";

for (let i = 0; i < inputString.length; i++) {
    if (i == 0 || inputString[i] !== inputString[i - 1]) {
        resultString += inputString[i];
    }
}

console.log(resultString);