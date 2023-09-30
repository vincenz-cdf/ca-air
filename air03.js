if (process.argv.length < 4) {
    console.error('Veuillez passer au moins deux arguments');
    process.exit(1);
}

const tableau = process.argv.slice(2, process.argv.length);

let not_pairs = [];

for(let i = 0; i < tableau.length; i++) {
    if(tableau.indexOf(tableau[i]) === i) {
        !not_pairs.includes(tableau[i]) ? not_pairs.push(tableau[i]) : ""
    } else {
        let index = not_pairs.indexOf(tableau[i]);
        if (index !== -1) {
            not_pairs.splice(index, 1);
        }
    }
}

if(not_pairs.length > 0) {
    for(const item of not_pairs) {
        console.log(item)
    }
}