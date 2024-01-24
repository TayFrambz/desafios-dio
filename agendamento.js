//Código usando readlinw

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nome do beneficiário: ', (nomeBeneficiario) => {
  rl.question('Valor a ser pago (em reais, sem casas decimais): ', (valor) => {
    rl.question('Data de vencimento (DD/MM/AAAA): ', (dataVencimento) => {
      
      const mensagemConfirmacao = `Pagamento Agendado! Valor: R$ ${valor}, vencimento ${dataVencimento}.`;

      console.log(mensagemConfirmacao);


      rl.close();
    });
  });
});


//Código simples com prompt

/*
let nome = prompt('Nome do beneficiário: ');
let valor = prompt('Valor a ser pago: ');
let data = prompt('Data de vencimento (DD/MM/AAAA): ');

console.log(`Olá, ${nome}. Seu pagamento foi agendado! Valor: R$ ${valor}, vencimento ${dataVencimento}.`);
*/

