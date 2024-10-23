

  const times = [
    {
        nome: 'Real Madrid', jogadores:['Mbappe','Vinicius Jr', 'Rodrygo']
    }
  ]

  function RemoverJogador(times, BuscarTime, DelJogador) {
    const time = times.find(t => t.nome === BuscarTime)
    if (time) {
        time.jogadores = time.jogadores.filter(j => j !== DelJogador)
    }
  }

  RemoverJogador(times, 'Real Madrid','Mbappe')
  console.log(times)



  const pais = [
    {
        nome:'Brasil', cidades:['Goiania', 'Sao Paulo']
    }
  ]

  function RemoverCidade(pais, buscarCidade, DelCidade) {
    const B = pais.find(p => p.nome === buscarCidade)
    if (B) {
        B.cidades = B.cidades.filter(l => l !== DelCidade)
    }
  }

  RemoverCidade(pais, 'Brasil', 'Sao Paulo')
  console.log(pais)



  const numeros = [
    {
        num: 'pares',  n:[2,4]
    }
  ]

  function removerNumero(numeros, buscarNumero, delNum) {
  const T = numeros.find(n => n.num === buscarNumero )
  if (T){
    T.n = T.n.filter(q => q !== delNum)
  }
}

removerNumero(numeros,'pares', 4)
console.log(numeros)



const viagem = [ 
    {
        continente:'Europa', paises:['Portugal','Espanha','Italia']
    }
]

function RemoverPais(viagem, buscarPais, DelPais) {
    const v = viagem.find(v => v.continente === buscarPais)
    if (v){
        v.paises = v.paises.filter(r => r !== DelPais)
    }
}

RemoverPais(viagem, 'Europa','Italia')
console.log(viagem)