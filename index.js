// document.addEventListener("DOMContentLoaded", ()=>{
//     fetchFilms()
// })
// fetch request
fetch(" http://localhost:3000/films")
    .then(r => r.json())
    .then(data => {


const home = document.querySelector(".container")
        for(let i = 0; i< data.length;i++){
        // console.log(data[i]);

        document.getElementById('buy-ticket').addEventListener('click', buyTicket);

        let image = data[i].poster;
        let name = data[i].title;
        let Cap = data[i].capacity;
        let time = data[i].runtime;
        let show = data[i].showtime;
        const card = document.createElement("div");
        card.classList.add('card');
        
       card.innerHTML += `
        ${name}
        ${time}
        ${Cap}
        ${show}
        <img src="${image}" style="height:100px; width = 150px;">

        `
        home.appendChild(card)
        }
        

    })