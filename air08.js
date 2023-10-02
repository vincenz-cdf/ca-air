function error_arguments(input) {
    if (input.length < 3) {
        console.error('Veuillez passer au moins deux arguments');
        process.exit(1);
    }
}

function ma_rotation(array) {
	new_array = []

    for(let i = 1; i < array.length; i++) {
        new_array.push(array[i]);
    }
    new_array.push(array[0])
	return new_array
}

function main() {
    error_arguments(process.argv);
    
    console.log(ma_rotation(process.argv.slice(2)))
}

main()