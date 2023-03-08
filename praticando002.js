var nome_aluno = prompt('Ola aluno, poderia se indentificar?')
var res = window.document.getElementById('res')
var titulo = window.document.getElementById('titulo')
var teste = /\d/;
var teste1 = teste.test(nome_aluno)


if (nome_aluno.length.value <= 2 || teste1 === true) {
    alert('Sem brincadeira!')
res.innerText = ''
titulo.innerText = ''
}else {


var n1 = Number(prompt('Qual nota você tirou anteriormente?'))
var n2 = Number(prompt('E qual nota você tirou atualmente?'))
var primeira_letra = nome_aluno.indexOf[0]
var media = (n1 + n2)/2



    if (media >= 7 && media <=10) {
        res.innerHTML += `Parabens ${nome_aluno.charAt(0).toUpperCase()}${nome_aluno.slice(1)}! você foi aprovado.`
} else if (media < 7) {
        res.innerHTML += `Desculpe ${nome_aluno.charAt(0).toUpperCase()}${nome_aluno.slice(1)}! se esforçe mais.`
    }
     
else {
    res.innerHTML = 'Desculpe, mas essa média é incopreensivel.'
}
}
