function media() {
  var nomeAluno = document.getElementById('iNome').value
  var nota1 = parseFloat(document.getElementById('iNota1').value)
  var nota2 = parseFloat(document.getElementById('iNota2').value);

  if (!campoObrigatorio(nomeAluno, nota1, nota2)) {
    return;
  }

  var media = (nota1 + nota2) / 2;
  alert(`A média do aluno ${nomeAluno} foi: ${media}`)
}

function campoObrigatorio(nomeAluno, nota1, nota2) {
  var nomeAluno = document.getElementById('iNome').value
  var nota1 = parseFloat(document.getElementById('iNota1').value)
  var nota2 = parseFloat(document.getElementById('iNota2').value);

  if (nota1 === "" || nota2 === "" || nomeAluno === "") {
    alert('Preencha ambos os campos');
    return false;
  }

  if (isNaN(nota1) || isNaN(nota2)) {
    alert('Insira um número válido');
    return false; 
  }

  return true;
}