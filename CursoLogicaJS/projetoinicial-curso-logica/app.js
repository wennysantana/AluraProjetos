alert("Boas Vindas ao nosso site!");
let numeroMaximo = 40;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual
while (chute != numeroSecreto) {
  chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
  // se o chute for igual ao numero secreto
  if (chute == numeroSecreto) {
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);
