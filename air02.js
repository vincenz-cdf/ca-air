function error_arguments(input) {
    if (input.length < 5) {
        console.error('Veuillez passer au moins deux arguments + un separateur');
        process.exit(1);
    }
}

function ma_fonction(array_de_strings, string_séparateur) {
    string = array_de_strings.join(string_séparateur)
    return string
}

function main() {
    error_arguments(process.argv)
    console.log(ma_fonction(process.argv.slice(2, -1), process.argv.slice(-1)))
}

main()
