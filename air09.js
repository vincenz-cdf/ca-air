const fs = require('fs');

function error_arguments(input) {
    if (input.length != 3) {
        console.error('Veuillez passer un argument');
        process.exit(1);
    }
}

function read_file(filepath) {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.error('Impossible de lire le fichier:', err);
            process.exit(1);
        }
        console.log(data);
    });
}

function main() {
    error_arguments(process.argv);
    
    const filepath = process.argv[2];
    read_file(filepath);
}

main();