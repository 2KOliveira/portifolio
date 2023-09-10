/*const pares = [10];

let aNPOMQZ = "Ja é";

for (let i = 0; i < pares.length; i++)
{
    if (pares[i] % 2 !== 0 || pares[i] < 0)
    {
        aNPOMQZ = "K.O";
        break;
    }
}

console.log("Pelo menos um número não é par ou menor que zero?", aNPOMQZ, "(Exercicio01)")



let myArray = [3, 5, 7];
myArray.foo = "hello";

for (var i in myArray)
{
    console.log("O rezultado da expreção é", i);
}

for (var i of myArray)
{
    console.log("O rezultado da expreção é", i);
}

console.log("Valor da propriedade foo:", myArray.foo, "(Exercicio02)");*/


const Exercio3 = [1, 'dois', 3, 'nove', 8, 'deis', 16];

const mappedExercio3 = Exercio3.map((element) => 
{

    if (element === 1) 
    {
        return element * 3 + 2 ;
    }
    else if (typeof element === 'number') 
    {
      return element * 2;
  
    }
    
    else if (typeof element === 'string') 
    {
      return element.toUpperCase();
    }

    else 
    {
      return element;
    }
  
  });
  console.log('Array mapeado:', mappedExercio3, "(Exercicio03)");

  const filteredmappedExercio3 = mappedExercio3.filter((element) => typeof element === 'number');

  console.log('Array filtrado:', filteredmappedExercio3, "(Exercicio04)");

  const filteredppedExercio3 = mappedExercio3.filter((element) => typeof element === 'string');

  console.log('Array filtrado:', filteredppedExercio3, "(Exercicio04)");
  const sum = filteredppedExercio3.join(', ') 
  
  console.log('Soma:', sum);
