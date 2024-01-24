const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let saldo = 1000;
const titularConta = "João";

function verificarSaldo() {
  console.log(`Titular: ${titularConta}`);
  console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
}

function realizarDeposito(valorDeposito) {
  saldo += valorDeposito;
  console.log(`Depósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso.`);
  console.log('Novo saldo: R$ ' + saldo.toFixed(2));
}

function realizarSaque(valorSaque) {
  if (valorSaque <= saldo) {
    saldo -= valorSaque;
    console.log(`Saque de R$ ${valorSaque.toFixed(2)} realizado com sucesso.`);
    console.log('Novo saldo: R$ ' + saldo.toFixed(2));
  } else {
    console.log("Saldo insuficiente para realizar o saque.");
  }
}

rl.question('Escolha uma opção:\n[ 1 ] - Verificar Saldo\n[ 2 ] - Realizar Depósito\n[ 3 ] - Realizar Saque\n', (opcao) => {
  opcao = parseInt(opcao);

  if (opcao === 1) {
    verificarSaldo();
  } else if (opcao === 2) {
    rl.question('Digite o valor do depósito: ', (valorDeposito) => {
      realizarDeposito(parseFloat(valorDeposito));
      
      rl.close();
    });
  } else if (opcao === 3) {
    rl.question('Digite o valor do saque: ', (valorSaque) => {
      realizarSaque(parseFloat(valorSaque));
    
      rl.close();
    });
  } else {
    console.log('Opção inválida. Tente novamente.');
    rl.close();
  }
});