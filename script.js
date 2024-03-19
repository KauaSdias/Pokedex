var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");
let menuAberto = false;

window.addEventListener("keydown", function (e){
    if (e.key === "Enter") {
        // Verificar se o foco está no campo de pesquisa
        var campoPesquisa = document.getElementById("pesquisa");
        if (document.activeElement === campoPesquisa) {
            pesquisar();
        }
    }
});


menuButton.addEventListener('click', function (event) {
  // Impedir que o evento se propague para o documento
  event.stopPropagation();
  sideBar();
});

document.addEventListener('click', function (event) {
  // Verifique se o clique foi fora do menu e do botão do menu
  if (!menu.contains(event.target) && event.target !== menuButton) {
    menu.style.display = "none";
  }
});

function sideBar() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function pesquisar() {
  var termoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
  var pokemons = document.getElementsByClassName("pokemon");

  for (var i = 0; i < pokemons.length; i++) {
      var nomePokemon = pokemons[i].querySelector("p").innerText.toLowerCase();
      var tipoPokemon1 = pokemons[i].querySelector('aside').querySelectorAll('p')[0].innerText.toLowerCase();
      var tipoPokemon2 = pokemons[i].querySelector('aside').querySelectorAll('p')[1].innerText.toLowerCase();

      // Verifique se o termo de pesquisa está presente no nome ou em qualquer um dos tipos do Pokémon
      if (nomePokemon.includes(termoPesquisa) || tipoPokemon1.includes(termoPesquisa) || tipoPokemon2.includes(termoPesquisa)) {
          pokemons[i].style.display = "block";
      } else {
          pokemons[i].style.display = "none";
      }
  }
}