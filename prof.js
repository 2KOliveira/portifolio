// Array de números

const numeros = [5, 15, 25];

// Verificar se pelo menos um número do array não é par ou menor que 0

let algumNaoParOuMenorQueZero = false;

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 !== 0 || numeros[i] < 0) {

    algumNaoParOuMenorQueZero = true;

    break;

  }
}

  console.log("Pelo menos um número não é par ou menor que zero?", algumNaoParOuMenorQueZero);