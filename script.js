//API METEO PAGINA PRINCIPALE
const key_meteo = '5b785bc1c9a7d7c521fc344f99e4f6d8';
const url_meteo = 'http://api.openweathermap.org/data/2.5/weather?q=Catania&units=metric&appid='

const meteo_request = url_meteo + key_meteo
fetch(meteo_request).then(onResponse).then(onJSON)

function onResponse(response) {
    return response.json()
}

function onJSON(json) {
    console.log(json)

	const meteo = document.querySelector('#meteo_api');

	const testo = document.createElement("h1")
	testo.textContent = "Controlla il meteo attuale a Catania"
	meteo.appendChild(testo)

	const temperatura = json.main.temp
	console.log(temperatura)
	const misura_temperatura = document.createElement("p")
	var orario = new Date();
	var ora;
	var minuti;
	ora = orario.getHours();
	minuti = orario.getMinutes();
	misura_temperatura.textContent = "La temperatura percepita alle ore " + ora + ":" + minuti + " è di " + temperatura + " °C"
	meteo.appendChild(misura_temperatura)

	const icona = json.weather[0].icon
	console.log(icona)
	const URLimg = 'http://openweathermap.org/img/wn/' + icona + '@2x.png'
	console.log(URLimg)
	const iconameteo = document.createElement("img")
	iconameteo.src = URLimg
	meteo.appendChild(iconameteo)
}

//API RANDOM USER PAGINA "Accedi"
function aggElementi(persone){
    for(let i of persone){
        let elemento=document.createElement("div");
        elemento.setAttribute("class", "name");
       let titolo=document.createElement("h1");
        let testo=document.createTextNode(i.name.first+" "+ i.name.last);
        titolo.appendChild(testo);
        
            
        let imma=document.createElement("img");
        imma.setAttribute("class","persona");
        imma.src=i.picture.medium;
    
        let desc=document.createElement("pe");
        
        let paragrafo=document.createTextNode(i.email);
        desc.appendChild(paragrafo);
        elemento.appendChild(imma);
        elemento.appendChild(titolo);
        elemento.appendChild(desc);
        
         pers.appendChild(elemento);
         
        
        
    }}
    const pers=document.querySelector(".persone"); 

function onResponse(response){
    return response.json();
}
function onerror(error){
    console.log("error: "+error);
}
function onJson(json){
    console.log(json.results);
    aggElementi(json.results);
}
//Utilizzo la fetch per implementare l'api del randomuser, essa non ha bisogno di autorizzazione con apiKey e neanche con Oauth 2.0
//Questa Rest api è un generatore di volti casuali. 

fetch(" https://randomuser.me/api/?nat=es&results=20 ").then(onResponse, onerror).then(onJson);



