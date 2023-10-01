function error_arguments(input) {
    if (input.length != 3) {
        console.error('Veuillez passer un argument');
        process.exit(1);
    }
}

function remove_adjacent_duplicates(inputString) {
    let resultString = "";
    for (let i = 0; i < inputString.length; i++) {
        if (i == 0 || inputString[i] !== inputString[i - 1]) {
            resultString += inputString[i];
        }
    }
    return resultString;
}

function main() {
    error_arguments(process.argv);

    const inputString = process.argv[2];
    const resultString = remove_adjacent_duplicates(inputString);
    console.log(resultString);
}

main();