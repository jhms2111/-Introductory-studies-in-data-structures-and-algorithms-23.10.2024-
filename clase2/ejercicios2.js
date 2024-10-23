const comidas = [
    {nome: 'fruta', tipos:['banana','laranja','limao']}
 ]

 function adicionarFruta(comidas, tipoFrutas, frutas) {
    const comida = comidas.find(f => f.nome === tipoFrutas)
    if (comida) {
        comida.tipos.push(frutas);
    }
 };
 adicionarFruta(comidas,'fruta', 'melancia')
 console.log(comidas)


 const animais = [
    { especie:'cachorro',  raca:['Pastor','Shitzu','Dog Alemao']}
 ]

 function adicionarRaca(animais, tipoEspecie, addRaca) {
    const animal = animais.find(a =>a.especie === tipoEspecie)
    if (animal) {
        animal.raca.push(addRaca);
    }
 };
 adicionarRaca(animais,'cachorro','Dog Argentino')
 console.log(animais)


 const jogadores = [ 
    {
        time: 'Palmeiras', nomes:['Dudu','Valdivia','Marcelo']
    }
 ]

 function adicionarJogador(jogadores, buscarJogadores, addJogadores) {
    const jogador = jogadores.find(j => j.time === buscarJogadores)
    if(jogador) {
        jogador.nomes.push(addJogadores);
    }
 }

 adicionarJogador(jogadores,'Palmeiras', 'Ronaldo')
 console.log(jogadores)