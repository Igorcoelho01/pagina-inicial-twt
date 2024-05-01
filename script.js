const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector('.conteudoPrincipal__lista   ');    

function pegarTweet(event) {
    event.preventDefault();
    
    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea);   
}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto){

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    
    const tweet = {
        nome: "Igor",
        foto: "/img/eu - Copia.jpeg",
        usuario: "igor01",
        texto: tweetTexto,
        tempo:`${hora}:${minutos}`
    }
    
    listarTweet(tweet);
}

function listarTweet(tweet){

    const {nome,foto,usuario,texto,tempo} = tweet

    let li = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet")

    let img = document.createElement("img");
    img.src = foto
    img.classList.add("conteudoPrincipal__tweet")

    let div = document.createElement("div");
    div.classList.add("tweet__conteudo")

    let h2 = document.createElement("h2");
    h2.innerText = nome

    let span = document.createElement("span");
    span.innerText = `${usuario} - ${tempo}`

    let p = document.createElement("p");
    p.innerText = texto

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div); 
    feed.appendChild(li);
    textarea.value = "";
}