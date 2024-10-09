//criar constante com a chave API
const key = 'e0283766cee7e7e70be7e75409ae8042'

function Pesquisar(){
   let cidade = document.querySelector('.input-cidade').value
   Dados(cidade)
}

//CONSUMINDO DADOS DA API OPENWEATHER
async function Dados(cidade) {
   let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
   console.log(dados)
   ExibirDados(dados)
}

//FUNCAO TROCAR DADOS NA TELA
function ExibirDados(dados){
   document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
   document.querySelector('.graus').innerHTML = "Temperatura : " + (dados.main.temp).toFixed(0) + "°C"
   document.querySelector('.previsao').innerHTML = dados.weather[0].description
   document.querySelector('.umidade').innerHTML ="Umidade relativa do ar : " + dados.main.humidity + "%"
   document.querySelector('.velocidade').innerHTML ="Velocidade do vento : " + dados.wind.speed + " km/h"
   document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
   
}
