let nomeHeroi = "Carlos";
let xp = 3000;
let categoria = ""

if (xp <= 1000) {
    categoria = "Ferro"
} else if (xp > 1000 && xp <= 2000) {
    categoria = "Bronze"
} else if (xp > 2000 && xp <= 5000) {
    categoria = "Prata"
} else if (xp > 5000 && xp <= 7000) {
    categoria = "Ouro"
} else if (xp > 7000 && xp <= 8000) {
    categoria = "Platina"
} else if (xp > 8000 && xp <= 9000) {
    categoria = "Ascendente"
} else if (xp > 9000 && xp <= 10000) {
    categoria = "Imortal"
} else {
    categoria = "Radiante"
}

console.log(`O herói de nome ${nomeHeroi} está no nível de ${categoria}`)