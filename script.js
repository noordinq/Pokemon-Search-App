const allPokemons = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
//const searchInput = document.getElementById("search-input");
//const searchBtn = document.getElementById("search-button");
//const display = document.getElementById("display");

const fetchData = async () => {
    try{
        const res = await fetch(allPokemons);
        const data = await res.json();
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

fetchData();