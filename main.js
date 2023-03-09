const pokeName = document.querySelector('#pokeName');
const pokeImg = document.querySelector('#pokeImg');
const pokeHp = document.querySelector('#hp');
const pokeAtt = document.querySelector('#att');
const pokeDef = document.querySelector('#def');
const pokeAtt_sp = document.querySelector('#Att_sp');
const pokeDef_sp = document.querySelector('#Def_sp');
const pokeSpeed = document.querySelector('#speed');

fetch('https://pokeapi.co/api/v2/pokemon/charmander')
	.then((res) => res.json())
	.then((poke) => {
        pokeName.innerHTML = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
        pokeImg.setAttribute('src', poke.sprites.other.home.front_default);
        pokeHp.innerHTML = poke.stats[0].base_stat;
        pokeAtt.innerHTML = poke.stats[1].base_stat;
        pokeDef.innerHTML = poke.stats[2].base_stat;
        pokeAtt_sp.innerHTML = poke.stats[3].base_stat;
        pokeDef_sp.innerHTML = poke.stats[4].base_stat;
        pokeSpeed.innerHTML = poke.stats[5].base_stat;
    });
