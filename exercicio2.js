let metalivros = (7)

livroslidos = ['amor', 'comedia', 'romance', 'dark']

for (i = 0; i < livroslidos.length; i++){
    console.log('livros lidos: ' + livroslidos[i])
}
let quantidade = metalivros - i
if(i > metalivros){
    console.log('Meta Atingida: Parabéns! Você atingiu sua meta de leitura!')
}else{
    console.log('Meta Não Atingida: Você está progredindo! Faltam ' + quantidade + ' livros para atingir sua meta.')
}