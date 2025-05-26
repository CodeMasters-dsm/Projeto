function mostrarImagem(id) {
    var imagens = document.getElementsByClassName('imagem');
    for (var i = 0; i < imagens.length; i++) {
        imagens[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}