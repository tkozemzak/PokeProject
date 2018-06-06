let body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexWrap = 'wrap';
body.style.justifyContent = 'center';
body.style.fontFamily = 'Pokemon';
body.style.margin = '0';
body.style.backgroundColor = 'lightyellow'


let header = document.createElement('h');
document.body.appendChild(header);
header.style.backgroundColor = '#D35056';
header.style.width = '100%';
header.style.height = '188px';
header.style.padding = '10px 0 0 10px';
header.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png)'

let nav = document.createElement('nav');
document.body.appendChild(nav);
nav.style.backgroundColor = 'lightyellow';
nav.style.flex = '1';
nav.style.height = '350px';
nav.style.borderRadius = '10%';
nav.style.backgroundImage = 'url(https://vignette.wikia.nocookie.net/pokemon/images/1/1e/Dratini-GO.png/revision/latest?cb=20160809155728)'
nav.style.backgroundSize = 'cover';


let article = document.createElement('article');
document.body.appendChild(article);
article.style.flex = '4';
article.style.padding = '10px 0 0 10px';
article.style.borderRadius = '10%';
article.style.backgroundImage = 'url(https://www.desktopbackground.org/p/2015/08/10/992844_cartoon-pokemon-wallpapers-wide_4500x3150_h.jpg)'


let aside = document.createElement('aside')
document.body.appendChild(aside);
aside.style.backgroundColor = 'lightyellow';
aside.style.flex = '1';
aside.style.padding = '10px 0 0 10px';
aside.style.backgroundImage = 'url(https://qph.fs.quoracdn.net/main-qimg-e804ba3f9d261dd6e9e02d5637779c23.webp)'
aside.style.backgroundSize = 'cover';

let footer = document.createElement('footer');
document.body.appendChild(footer);
footer.style.width = '100%';
footer.style.backgroundColor = 'limegreen';
footer.style.height = '188px';
footer.style.padding = '10px 0 0 10px';
footer.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png)'

let realFooter = document.createElement('footer');
document.body.appendChild(realFooter);
realFooter.style.width = '100%';
realFooter.style.backgroundColor = 'limegreen';
realFooter.style.height = '100px';

let footDiv = document.createElement('div');
realFooter.appendChild(footDiv);
footDiv.style.display = 'flex';
footDiv.style.justifyContent = 'center'
footDiv.style.paddingTop = '40px'


//bottombuttons
let apiButton = document.createElement('a');
apiButton.setAttribute('href', 'https://pokeapi.co/');
apiButton.innerHTML = 'Source API';
apiButton.style.margin = '10px';
apiButton.style.color = 'blue';
footDiv.appendChild(apiButton)

let ghButton = document.createElement('a');
ghButton.setAttribute('href', 'https://github.com/tkozemzak');
ghButton.innerHTML = "Tim's GitHub";
ghButton.style.margin = '10px';
ghButton.style.color = 'blue';
footDiv.appendChild(ghButton)


//pokefetch
let pokeInput = document.createElement('input');
pokeInput.setAttribute('placeholder', 'Please enter a number from 1 to 802');
article.appendChild(pokeInput);
pokeInput.style.margin = '20px';
pokeInput.style.width = '37%';
pokeInput.style.fontSize = '16px';
pokeInput.style.fontFamily = 'Pokemon';


let catchThatPokemon = document.createElement('button');
catchThatPokemon.innerText = 'Catch That Pokemon!';
catchThatPokemon.style.textAlign = 'center';
article.appendChild(catchThatPokemon);
catchThatPokemon.style.fontSize = '16px';
catchThatPokemon.style.fontFamily = 'Pokemon';



let pokemonOutput = document.createElement('div')
article.appendChild(pokemonOutput);

let pokemonP1 = document.createElement('p');
article.appendChild(pokemonP1);
let pokemonP2 = document.createElement('p');
article.appendChild(pokemonP2);
let pokemonP4 = document.createElement('p');
article.appendChild(pokemonP4);
let pokemonP5 = document.createElement('p');
article.appendChild(pokemonP5);
let pokemonP3 = document.createElement('p');
article.appendChild(pokemonP3);


let pokemonImage = document.createElement('img');
pokemonImage.style.borderRadius = '30%';
article.appendChild(pokemonImage);

//fetch on click
catchThatPokemon.addEventListener('click', function() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput.value}`)
  .then(data => {
    return data.json()
  }).then(results => {
    console.log(results)

    pokemonOutput.innerText = 'Name: ' + results.name[0].toUpperCase() + results.name.slice(1);
    pokemonOutput.style.fontWeight = '500';
    pokemonP1.innerText = 'Height: ' + results.height;
    pokemonP2.innerText = 'Weight: ' + results.weight;
    pokemonP3.innerText = 'Base Experience: ' + results.base_experience;
    pokemonP4.innerText = 'ID: ' + results.id;
    pokemonP5.innerText = 'Order: ' + results.order;
    pokemonImage.setAttribute('src', results.sprites.front_default)
    pokemonImage.style.backgroundColor = 'black';
  })
})



pokeInput.addEventListener('keypress', function(e){
    var key = e.keyCode;
    if (key === 13) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput.value}`)
      .then(data => {
        return data.json()
      }).then(results => {
        console.log(results)

        pokemonOutput.innerText = 'Name: ' + results.name[0].toUpperCase() + results.name.slice(1);
        pokemonOutput.style.fontWeight = '500';
        pokemonP1.innerText = 'Height: ' + results.height;
        pokemonP2.innerText = 'Weight: ' + results.weight;
        pokemonP3.innerText = 'Base Experience: ' + results.base_experience;
        pokemonP4.innerText = 'ID: ' + results.id;
        pokemonP5.innerText = 'Order: ' + results.order;
        pokemonImage.setAttribute('src', results.sprites.front_default)
        pokemonImage.style.backgroundColor = 'black';
      })
    }
    });

//random number generator
    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }


//default fetch
fetch(`https://pokeapi.co/api/v2/pokemon/${getRandom(1,802)}`)
 .then((data) => {
   return data.json()
 }).then((results) => {
   console.log(results)
   pokemonOutput.innerText = 'Name: ' + results.name[0].toUpperCase() + results.name.slice(1);
   pokemonP1.innerText = 'Height: ' + results.height;
   pokemonP2.innerText = 'Weight: ' + results.weight;
   pokemonP3.innerText = 'Base Experience: ' + results.base_experience;
   pokemonP4.innerText = 'ID: ' + results.id;
   pokemonP5.innerText = 'Order: ' + results.order;
   pokemonImage.setAttribute('src', results.sprites.front_shiny)
   pokemonImage.style.backgroundColor = 'black';
 })
