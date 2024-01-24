const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Número de conta (6 dígitos): ', (numeroConta) => {
  
  if (
    numeroConta.length === 6 &&
    parseInt(numeroConta[0]) > 0 &&
    numeroConta.split('').reduce((acc, digit) => acc + parseInt(digit), 0) <= 30
  ) {
    console.log('Número de conta válido.');
  } else {
    
    if (numeroConta.length !== 6) {
      console.log('Número de conta deve ter exatamente 6 dígitos.');
    } else if (parseInt(numeroConta[0]) === 0) {
      console.log('O primeiro dígito deve ser maior que zero.');
    } else {
      console.log('A soma dos dígitos do número de conta não deve ser maior que 30.');
    }
  }


  rl.close();
});





