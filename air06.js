function error_arguments(input) {
    if (input.length < 3) {
        console.error('Veuillez passer au moins un argument');
        process.exit(1);
    }
}

function insert_sorted_array(array, new_element) {
    let new_array = [];
    let placed = false;
    const num = parseInt(new_element);
    if(isNaN(num)) {
        console.error('Le dernier element n\'est pas un nombre');
        process.exit(1);
    }

    for(const el of array) {
        const num_el = parseInt(el);
        if(isNaN(num_el)) {
            console.error('Tout les elements doivent etre des nombres');
            process.exit(1);
        }

        if(num <= num_el && !placed) {
            new_array.push(num);
            placed = true;
        }
        new_array.push(num_el);
    }

    if(!placed) new_array.push(num);
    return new_array;
}

function main() {
    error_arguments(process.argv);
    
    console.log(insert_sorted_array(process.argv.slice(2, -1), process.argv.slice(-1)));
}

main();
