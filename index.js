const tablePlayers = [
    {"nome":"Fulano","vitorias":10,"derrotas":3},
    {"nome":"Beltrano","vitorias":70,"derrotas":15},
    {"nome":"Sicrano","vitorias":94,"derrotas":3},
    {"nome":"Maria","vitorias":105,"derrotas":40},
    {"nome":"Jose","vitorias":23,"derrotas":1},
]

console.log('| Tabela de Heróis 🎮 |')
console.table(tablePlayers,["nome","vitorias","derrotas"]);


tablePlayers.forEach((player)=>{ 
  let saldoVitorias = CalculaRanking(player.vitorias,player.derrotas);
  let nivel = CalculaLevel(player.vitorias);
 
  if(!nivel){
    console.error(`Houve um erro ao calcular : ${player.nome}`)
  }else{
    console.info(`O Herói {${player.nome}} tem de saldo de {${saldoVitorias}} está no nível de {${nivel}}`);
    console.info('----------------------------------------------------------------------');
  }
  
})


function CalculaRanking(win,loss) {
    return win - loss;
}

function CalculaLevel(win) {
    if(win <=10){ // Quando fosse igual a 10 não apresentaria então implementei o <=
        return  'Ferro'
    }else if(win<=20){
        return 'Bronze'
    }else if(win<=50){
        return 'Prata'
    }else if(win<=80){
        return 'Ouro'
    }else if(win<=90){
        return 'Diamante'
    }else if(win<=100){
        return 'Lendário'
    }else if(win>=101){
        return 'Imortal'
    }
    
    return undefined;    
}