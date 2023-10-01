function error_arguments(input) {
    if (input.length < 4) {
        console.error('Veuillez passer au moins deux arguments');
        process.exit(1);
    }
}

function parse_operation(input) {
    const operation = input[input.length - 1];

    if (operation[0] !== '+' && operation[0] !== '-') {
        console.error('La dernière entrée doit être une opération');
        process.exit(1);
    }

    const value = parseInt(operation.slice(1));
    if (isNaN(value)) {
        console.error('Valeur invalide pour l\'opération');
        process.exit(1);
    }

    return { sign: operation[0], value };
}

function perform_operation(numbers, operation) {
    return numbers.map(num => {
        const parsedNum = parseInt(num);
        if (isNaN(parsedNum)) {
            console.error('Tous les éléments doivent être des nombres, sauf le dernier qui doit être une opération');
            process.exit(1);
        }
        return operation.sign === '+' ? parsedNum + operation.value : parsedNum - operation.value;
    });
}

function print_array(tableau) {
    console.log(tableau.join(' '));
}

function main() {
    error_arguments(process.argv);

    const operation = parse_operation(process.argv);
    const numbers = process.argv.slice(2, -1);

    const result = perform_operation(numbers, operation);
    print_array(result);
}

main();