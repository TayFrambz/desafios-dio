const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Capital inicial (em reais, com até 2 casas decimais): ', (capitalInicial) => {
  rl.question('Taxa de juros (em porcentagem, sem o símbolo de porcentagem): ', (taxaJuros) => {
    rl.question('Período de tempo em meses (um número inteiro): ', (periodoTempo) => {
      
      capitalInicial = parseFloat(capitalInicial);
      taxaJuros = parseFloat(taxaJuros);
      periodoTempo = parseInt(periodoTempo);

      
      const jurosSimples = (capitalInicial * taxaJuros * periodoTempo) / 100;

      
      const montanteFinal = capitalInicial + jurosSimples;

      
      console.log(`Montante em ${periodoTempo} meses, com R$ ${capitalInicial.toFixed(2)}, ${taxaJuros}%, e: R$ ${montanteFinal.toFixed(2)}.`);

      
      rl.close();
    });
  });
});