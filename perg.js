let rlSync = require('readline-sync')
let name = rlSync.question("Qual o seu nome?\n")

let rlSync1 = require('readline-sync')
let idade = rlSync1.question("Qual o seu nome?\n")

idade++
let rlSync2 = require('readline-sync')
let ano = rlSync2.question(`você faz, ${idade} sim ou não?`)

if(ano === "sim")
{
    console.log(`Olá, ${name}`, `você faz , ${idade} esse ano`)
}

else
{
    idade--

    console.log(`Olá, ${name}`, `você faz , ${idade} esse ano`)
}

var arr
