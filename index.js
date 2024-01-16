function saldoVitorias(vitorias, derrotas) {
  saldo=vitorias-derrotas;

  if (saldo<10) {
    alert(`O Herói tem saldo de ${saldo} e está no Rank de Ferro`);
  } else if (saldo>=10 && saldo<20) {
    alert(`O Herói tem saldo de ${saldo} e está no Rank de Bronze`);
  } else if (saldo>=20 && saldo<50) {
    alert(`O Herói tem saldo de ${saldo} e está no Rank de Prata`);
  } else if (saldo>=50 && saldo<80) {
    alert(`O Herói tem saldo de ${saldo} e está no Rank de Ouro`);
  } else if (saldo>=80 && saldo<90) {
    alert(`O Herói tem saldo de ${saldo} e está no Rank de Diamante`);
  } else if (saldo>=90 && saldo<100) {
    alert(`O Herói tem saldo de ${saldo} e está no Rank de Lendário`);
  } else if (saldo>=100) {
    alert(`O Herói tem saldo de ${saldo} e está no Rank de Imortal`);
  }
}

// Região para execução do código

saldoVitorias(10,5);