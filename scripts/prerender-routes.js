const file = require('fs');
const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;



(async () => {
    await loadData();
})();

async function loadData(){
    const ids = Array.from({length: TOTAL_POKEMONS}, (_, i) => i + 1);
    const pages = Array.from({length: TOTAL_PAGES}, (_, i) => i +1);

    const content = pages.map(p => "/pokemons/page/" + p).join(`\n`);
    let fileContent = content + '\n' + ids.map(id => '/pokemons/' + id).join(`\n`) + '\n';

    const pokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
        .then(res => res.json());
    fileContent += pokemonList.results.map(r => `/pokemons/${r.name}`).join('\n');


    file.writeFileSync("routes.txt", fileContent, {encoding: "utf-8"});
}
