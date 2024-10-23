

const pessoas1 = [
    {
        genero:'homens', idade:[22,15,33,55,22,99,77]
    }
]


function BuscarIdade(pessoas1, idadehomens, delIdade) {
    const pessoa = pessoas1.find(i => i.genero === idadehomens)
    if (pessoa){
        pessoa.idade = pessoa.idade.filter(p => p !== delIdade)
    }
}

BuscarIdade(pessoas1,'homens',33)
console.log(pessoas1)




const times = [
    {nome:'Real Madrid', jogadores:['Vini','Mbappe','Rodrigo']},
    {nome:'Barcelona', jogadores:['Lewandowisk','Pedri','Gavi']}
]

function removerJogador(times, buscarJogador, delJogador){
    const jogador = times.find(i => i.nome === buscarJogador)
    if (jogador){
        jogador.jogadores = jogador.jogadores.filter(p => p !== delJogador)
    }
    }

  //  removerJogador(times,'Real Madrid','Vini')
  //  console.log(times)




function adicionaJogador(times, buscarJogador, addJogador) {
    const jogador =times.find(i => i.nome === buscarJogador)
    if(jogador){
        jogador.jogadores.push(addJogador)
    }
}

adicionaJogador(times,'Real Madrid','Ronaldo')
//console.log(times)




function trasferirJogador(times, jogador, deTime, paraTime) {
    removerJogador(times,deTime,jogador),
    adicionaJogador(times,paraTime,jogador)
}

trasferirJogador(times,'Vini','Real Madrid','Barcelona')
console.log(times)




function todosOsJogadores(times){
    return times.map(t => t.jogadores).flat()
}

console.log(todosOsJogadores(times))







const Supermercardo = [
    {comidas:'frutas', nomes:['banana','laranja','melancia']},
    {comidas:'carnes', nomes:['frango','vaca','peixe']}
]

function adicionarComida(Supermercardo, nomeComida,addComida){
    const comida = Supermercardo.find(s => s.comidas === nomeComida)
    if (comida){
        comida.nomes.push(addComida)
    }
}

adicionarComida(Supermercardo,'frutas','morango')
adicionarComida(Supermercardo,'carnes','carneiro')
console.log(Supermercardo)


