/*
collect info
store info
put stored info in arrays
build cards - based off items in array
*/

const submitBtn = document.getElementById('submitBtn');
const gameCards = document.getElementById('gameCards');
let games = [];

const collectInfo =()=> {
    //collect info
    const gameName = document.getElementById('gameName').value;
    const category = document.querySelector('select[name=category]').value;
    const gameImage = document.getElementById('gameImage').value;

    if(gameName == '' || category == '' || gameImage == '') {
        alert('Please fill out fields')
    }else {

    //store info in an object
    let data = {
        gameName, category, gameImage
    };
        addInfo(games, data);
};
};

const addInfo = (arr, obj)=> {
    arr = [...arr, obj]
    buildCard(arr);

};

const buildCard = (arr, obj)=> {
    let card;
    // Build card
    arr.forEach(item =>{
        card = `<div class="col-md-3">
        <div class="card border-danger">
        <div class="card-header">
        <h2 class="h3">${item.gameName}</h2>
        </div>
        <img src="${item.gameImage}" alt="${item.gameName}" class="img-fluid placeholder-image" />
        <div class="card-body">
        <p class="card-text">Category: <span id="gameCategory">${item.category}</span></p>
        </div>
        </div>
        </div>`
    }) 
    gameCards.innerHTML += card;
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    
    collectInfo();
    
})














