document.addEventListener('DOMContentLoaded', function() {
    const hollow = this.getElementById('hollow');
    const hornet = this.getElementById('hornet');
    const cornifer = this.getElementById('cornifer');
    const imagem = this.getElementById('imagem_personagens');
    const tituloPersonagem = this.getElementById('titulo-personagem');
    const textoPersonagem = this.getElementById('texto-personagem');

    hollow.addEventListener('click', function() {
        imagem.style.opacity = 0;
        tituloPersonagem.style.opacity = 0;
        textoPersonagem.style.opacity = 0;
        setTimeout(function() {
            imagem.src = 'dist/img/knight.jpg';
            imagem.alt = 'Knight';
            tituloPersonagem.innerText = 'O Cavaleiro';
            textoPersonagem.innerText = 'O Cavaleiro é um Receptáculo. Ele é filho do Rei Pálido e da Dama Branca, nascido em no Abismo com Vazio dentro de sua carapaça. Hornet é irmã do Cavaleiro por meio de seu pai comum. Como o restante de seus irmãos Vasos, o Cavaleiro não tem gênero.'
            imagem.style.opacity = 0.4;
            tituloPersonagem.style.opacity = 1;
            textoPersonagem.style.opacity = 1;
        }, 500)
    });
    hornet.addEventListener('click', function() {
        imagem.style.opacity = 0;
        tituloPersonagem.style.opacity = 0;
        textoPersonagem.style.opacity = 0;
        setTimeout(() => {
            imagem.src = 'dist/img/hornet.jpg';
            imagem.alt = 'Hornet';
            tituloPersonagem.innerText = 'Hornet';
            textoPersonagem.innerText = 'Hornet é filha do Rei Pálido e Herrah a Besta, a rainha do Ninho Profundo. Seu nascimento foi fruto de uma barganha para que sua mãe se tornasse uma Sonhadora, e como tal, ela passou pouco tempo com Herrah. Seu pai compartilhado com o Cavaleiro e o resto dos Receptáculos os torna irmãos.'
            imagem.style.opacity = 0.4;
            tituloPersonagem.style.opacity = 1;
            textoPersonagem.style.opacity = 1;
            
        }, 500);
    });
    cornifer.addEventListener('click', function() {
        imagem.style.opacity = 0;
        tituloPersonagem.style.opacity = 0;
        textoPersonagem.style.opacity = 0;
        setTimeout(() => {
            imagem.src = 'dist/img/cornifer-fundo.jpg';
            imagem.alt = 'Cornifer e seu amigo';
            tituloPersonagem.innerText = 'Cornifer';
            textoPersonagem.innerText = 'Quando Cornifer nasceu, ele se afastou imediatamente, deixando seus irmãos e sua mãe para trás. Mais tarde, ele se mudou para Dirtmouth com Iselda assim que pôde.'
            imagem.style.opacity = 0.3;
            tituloPersonagem.style.opacity = 1;
            textoPersonagem.style.opacity = 1;
        }, 500);
    })
});