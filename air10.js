function error_arguments(input) {
    if (input.length != 4) {
        console.error('Veuillez passer deux arguments');
        process.exit(1);
    }
}

function generate_pyramid(arguments) {
    const style = arguments[0];
    const height = parseInt(arguments[1]);

    for(let i = 0; i < height; i++) {
        let space = '';
        for(let s = 0; s < height - i; s++) {
            space += ' ';
        }
        let chars = '';
        for(let c = 0; c < 2*i+1; c++) {
            space += style;
        }
        console.log(space + chars)
    }
}

function main() {
    error_arguments(process.argv)
    generate_pyramid(process.argv.slice(2))
}

main()