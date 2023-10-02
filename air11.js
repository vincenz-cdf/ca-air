function error_arguments(input) {
    if (input.length < 4) {
        console.error('Veuillez passer au moins deux arguments');
        process.exit(1);
    }
}

function quick_sort(array) {

    if (array.length <= 1) return array;

    const pivot = parseInt(array[array.length-1]);
    let left = [];
    let right = [];

    for(let i = 0; i < array.length-1; i++) {
        if(parseInt(array[i]) < pivot) {
            left.push(parseInt(array[i]))
        } else {
            right.push(parseInt(array[i]))
        }
    }

    return [...quick_sort(left), pivot, ...quick_sort(right)]
}

function main() {
    error_arguments(process.argv)
    
    console.log(quick_sort(process.argv.slice(2)));
}

main();