function mostrarImagem(id) {
    var imagens = document.getElementsByClassName('imagem');
    var imagemSelecionada = document.getElementById(id);

    if (imagemSelecionada.style.display === 'block') {
       
        imagemSelecionada.style.display = 'none';
    } else {
   
        for (var i = 0; i < imagens.length; i++) {
            imagens[i].style.display = 'none';
        }
        imagemSelecionada.style.display = 'block';
    }
}