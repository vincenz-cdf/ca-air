if (process.argv.length != 4) {
    console.error('No argument provided');
    process.exit(1);
}

function ma_fonction(string_à_couper, string_séparateur) { 
    tableau = string_à_couper.split(string_séparateur)
	return (tableau)
}

console.log(ma_fonction(process.argv[2], process.argv[3]).join("\n"))