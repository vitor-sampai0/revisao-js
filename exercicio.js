let armas = ['missil', 'espada', 'granada santa', 'tompson', 'spas', 'kamekameha']

let ataque = []

nomedorobo = ["kingvitor"]

ataque.push(armas[1])
ataque.push(armas[5])
ataque.push(armas[2])
ataque.push(armas[4])
ataque.push(armas[2])
console.log('Nome do robô: ' + nomedorobo)
for (i = 1; i < armas.length; i++) {
    console.log('ataque ' + [i] + ': ' + armas[i])
}



