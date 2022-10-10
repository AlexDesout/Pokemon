const url = "https://pokeapi.co/api/v2/pokemon/" // l’url de la ressource de l’API

function getPokemons(){
    let fetchOptions = {method : 'GET'} // les options de fetch
    // executer la req AJAX
    fetch(url, fetchOptions)
    .then( (response) => { return response.json() })
    .then( (dataJSON) => { // dataJSON = les données renvoyées
    console.log(dataJSON)// ici le traitement des données
    let pokemon = dataJSON.results;
    pokemon.sort( (v1, v2) => v1.name < v2.name ? -1 : 1);
    let textHTML = "";
    

    
    for (let p of pokemon){
    
        textHTML += `<option value="${p.url}">${p.name}</option>`;
        document.getElementById("liste").innerHTML = textHTML;
        
    }
})
    .catch( (error) => {
    console.log(error) // gestion des erreurs
    })

}

document.getElementById("liste").addEventListener("change", getPokemon);


function getPokemon(event){
    let detail = document.getElementById("detail");
    console.log(event.target.value);
    

    const pokeUrl = event.target.value;
    let fetchOptions = {method : 'GET'} // les options de fetch
    
    fetch(pokeUrl, fetchOptions)
    .then( (response) => { return response.json() })
    .then( (dataJSON) => { // dataJSON = les données renvoyées
    console.log(dataJSON)// ici le traitement des données
    let poke = dataJSON;

    console.log(poke.weight);

    detail.innerHTML = `Le pokemon ${poke.name} mesure ${poke.height} cm et pèse ${poke.weight} kg <br>`;
    const image = document.createElement("img");
    image.src= poke.sprites.front_default
    detail.appendChild(image);
        


        
        
    
    
})
    
}


getPokemons();