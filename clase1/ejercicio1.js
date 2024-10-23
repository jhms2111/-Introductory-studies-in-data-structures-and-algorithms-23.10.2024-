

      const equipos = [ 
         {nombre: 'Real Madrid', futbolista: ["Courtois", "Vinícius Júnior", "Bellingham", "Mbappé"]},
         {nombre: 'Barcelona', futbolista: ["Ter Stegen", "Lewandowski", "Pedri", "Gavi"]},
      ]

      function futbolistasPorEquipo(equipos, nombreDeEquipo) { 
        const equipo = equipos.find(t => t.nombre === nombreDeEquipo)
        return equipo ? equipo.futbolista :[];
      }

      console.log(futbolistasPorEquipo(equipos,'Real Madrid'));
      console.log(futbolistasPorEquipo(equipos,'Barcelona'));


      const comidas = [
        {tipos: 'frutas', nombres: ['banana','manzana','fresa']},
        {tipos: 'pastas', nombres: ['spagheti','lasagna','raviolli']},
      ]

     function tiposDeComidas(comidas, nombresDeComidas) {
        const comida = comidas.find(c => c.tipos === nombresDeComidas)
        return comida ? comida.nombres :[];
     }

     console.log(tiposDeComidas(comidas, 'frutas')) 


     const viagem = [
      {continente:'Europa', paises:['Espanha','Italia','Portugal','Alemanha']},
      {continente:'America', paises:['Brasil','Argentina','Colombia','Uruguai']},
     ];

     function paisesPorContinente(viagem, buscarPaises) {
      const pais = viagem.find(v => v.continente === buscarPaises)
      return pais ? pais.paises: [];
     }

     console.log(paisesPorContinente(viagem, 'Europa'))


     const cidades = [
      {nome: 'Goiania', bairros:['A','B','C']}
     ]

     function buscarBairros(cidades, nomesBairros) {
      const cidade = cidades.find(c => c.nome === nomesBairros)
      return cidade ? cidade.bairros: [];
     }

     console.log(buscarBairros(cidades, 'Goiania'))


     const Brasil = [
      {estado: 'Sao Paulo', cidade:['Sao Paulo','Santos','Buaru']},

     ]


     function buscarCidade(Brasil, nomeCidade) {
      const Br = Brasil.find(b => b.estado === nomeCidade)
      return Br ? Br.cidade: [];
     }

     console.log(buscarCidade(Brasil, 'Sao Paulo'))



     const numerosPares = [
      { n:'pares', numeros:['2','4','6']}
     ]

     function buscarN(numerosPares, bucarnp) {
      const np = numerosPares.find(n => n.n === bucarnp)
      return np ? np.numeros: [];
     }

     console.log(buscarN(numerosPares,'pares'))


     const M1 = [
      {y:'1' , x:['23','33','55']},

     ]

     function  TXZ(M1, ZR) {
      const V8 = M1.find(p => p.y === ZR)
      return V8 ? V8.x:[];
     }

     console.log(TXZ(M1,'1'))