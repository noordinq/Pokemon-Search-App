const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const display = document.getElementById("display");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const spriteContainer = document.getElementById("sprite-container");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const fetchData = async () => {
    try{
      const pokemonNameOrId = searchInput.value.toLowerCase();
      const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
      const data = await res.json();

      pokemonName.textContent = `${data.name.toUpperCase()}`;
      pokemonId.textContent = `#${data.id}`;
      weight.textContent = `Weight: ${data.weight}`;
      height.textContent = `Height: ${data.height}`;
      spriteContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`;
       types.innerHTML = data.types.map((obj) => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');
      hp.textContent = data.stats[0].base_stat;
      attack.textContent = data.stats[1].base_stat;
      defense.textContent = data.stats[2].base_stat;
      spAttack.textContent = data.stats[3].base_stat;
      spDefense.textContent = data.stats[4].base_stat;
      speed.textContent = data.stats[5].base_stat;
      
      
    } catch (err) {
        alert("Pokémon not found");
        resetDisplay();
    }
}

const resetDisplay = () => {
  const sprite = document.getElementById("sprite");
  //if (sprite) sprite.remove();

  // Reset Stats
  pokemonName.textContent = '';
  pokemonID.textContent = '';
  types.innerHTML = '';
  height.textContent = '';
  weight.textContent = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
})