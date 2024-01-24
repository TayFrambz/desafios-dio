const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Valor para ser convertido (com até 2 casas decimais): ', (valor) => {
  rl.question('Moeda de origem: ', (moedaOrigem) => {
    rl.question('Moeda de destino: ', (moedaDestino) => {
      
      const taxasConversao = 0.18

      
      let valorConvertido = (valor*taxasConversao)

      
      console.log(`${valor} ${moedaOrigem} equivalem a ${valorConvertido.toFixed(2)} ${moedaDestino}.`);

      
      rl.close();
    });
  });
});
