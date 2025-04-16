document.querySelectorAll('a[href^="index.html"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const albumLinks = document.querySelectorAll('.album');
    const albumImageContainer = document.getElementById('album-image-container');
    const albumImage = document.getElementById('album-image');

    // Adiciona o evento de clique nos links dos álbuns
    albumLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Recupera o valor do atributo 'data-album' para saber qual álbum foi clicado
            const album = this.getAttribute('data-album');
            let imageSrc = '';

            // Define a imagem correspondente ao álbum
            switch (album) {
                case 'gnx':
                    imageSrc = 'caminho/para/capa/gnx.jpg'; // Coloque o caminho da imagem
                    break;
                case 'morale':
                    imageSrc = 'caminho/para/capa/morale.jpg';
                    break;
                case 'damn':
                    imageSrc = 'caminho/para/capa/damn.jpg';
                    break;
                case 'butterfly':
                    imageSrc = 'caminho/para/capa/butterfly.jpg';
                    break;
                case 'kidcity':
                    imageSrc = 'caminho/para/capa/kidcity.jpg';
                    break;
                default:
                    imageSrc = ''; // Se não for reconhecido, não exibe nada
                    break;
            }

            // Exibe a imagem no contêiner
            if (imageSrc) {
                albumImage.src = imageSrc;
                albumImage.style.display = 'block'; // Torna a imagem visível
            } else {
                albumImage.style.display = 'none'; // Se não tiver imagem, esconde o container
            }
        });
    });
});

