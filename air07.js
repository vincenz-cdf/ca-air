function error_arguments(input) {
    if (input.length < 4 || !input.includes('fusion')) {
        console.error('Veuillez passer au moins deux listes d’entiers triées séparées par "fusion"');
        process.exit(1);
    }
}

function sorted_fusion(array1, array2) {
    const new_array = [];
    let i = 0, j = 0;

    while (i < array1.length && j < array2.length) {
        const num1 = parseInt(array1[i]);
        const num2 = parseInt(array2[j]);

        if (isNaN(num1) || isNaN(num2)) {
            console.error('Tous les éléments des listes doivent être des nombres valides');
            process.exit(1);
        }

        if (num1 < num2) {
            new_array.push(num1);
            i++;
        } else {
            new_array.push(num2);
            j++;
        }
    }

    //S'il reste des elements dans le tableau
    while (i < array1.length) new_array.push(parseInt(array1[i++]));
    while (j < array2.length) new_array.push(parseInt(array2[j++]));

    return new_array;
}

function main() {
    error_arguments(process.argv);

    const fusionIndex = process.argv.indexOf('fusion');
    const array1 = process.argv.slice(2, fusionIndex);
    const array2 = process.argv.slice(fusionIndex + 1);

    console.log(sorted_fusion(array1, array2).join(' '));
}

main();
