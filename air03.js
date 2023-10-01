function error_arguments(input) {
    if (input.length < 4) {
        console.error('Veuillez passer au moins deux arguments');
        process.exit(1);
    }
}

function find_non_pairs(tableau) {
    let not_pairs = [];

    for (let i = 0; i < tableau.length; i++) {
        if (tableau.indexOf(tableau[i]) === i) {
            !not_pairs.includes(tableau[i]) ? not_pairs.push(tableau[i]) : ""
        } else {
            let index = not_pairs.indexOf(tableau[i]);
            if (index !== -1) {
                not_pairs.splice(index, 1);
            }
        }
    }
    
    return not_pairs;
}

function print_array(tableau) {
    if(tableau.length > 0) {
        for(const item of tableau) {
            console.log(item)
        }
    }
}

function main() {
    error_arguments(process.argv);

    const tableau = process.argv.slice(2);
    const not_pairs = find_non_pairs(tableau);
    print_array(not_pairs);
}

main();
