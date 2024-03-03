fetch('https://rickandmortyapi.com/api/character')
.then(result => result.json())
.then(charactersArray => {
    let characters = charactersArray.results;
    let index = Math.ceil(Math.random() * characters.length);
    let area = document.getElementById('content');
    document.documentElement.addEventListener('click', () => {
        area.innerHTML = 
        `
        <div>
            <h1>${characters[index].status}</h1>
            <h2>${characters[index].name}</h2>
            <img src = ${characters[index].image} />
            <p>Species: ${characters[index].species}</p>
        </div>
        `;
        document.documentElement.style.background = (characters[index].status == 'Alive') ? 'green': 
        (characters[index].status == 'Dead') ? 'red':
        'white';
    });
});

// fetch('https://rickandmortyapi.com/api/character').then(result => {
//     return result.json();
// })
// .then(result => {
//     result.forEach(item => {
//         console.log(item);
//     })
// })
// -------script.js:5 Uncaught (in promise) TypeError: result.forEach is not a function
//----- error ended up being that the response was an single object and the content/array we needed
//----- was nested in the value. resolved by specifying value only -> variableName(for response).results(value name)

// let charactersArray;
// fetch('https://rickandmortyapi.com/api/character')
// .then(result => result.json()
// )
// .then(result => {
//     return result.results;
// })
// .then(charactersArray => {
//     let indexRandomized = Math.ceil(Math.random() * charactersArray.length);
//     document.documentElement.addEventListener('click', () => {
//         console.log(charactersArray);
//         // debugger
//         document.querySelector('#content').innerHTML += `<h1>${charactersArray[indexRandomized].status}<h1>`;
//         document.querySelector('#content').innerHTML += `<h2>${charactersArray[indexRandomized].name}</h2>`;
//         document.querySelector('#content').innerHTML += `<img src = ${charactersArray[indexRandomized].image} />`;
//         document.querySelector('#content').innerHTML += `<p>Species: ${charactersArray[indexRandomized].species}</p>`;
//         document.documentElement.style.background = (charactersArray[indexRandomized].status == 'Alive') ? 'green': 
//         (charactersArray[indexRandomized].status == 'Dead') ? 'red':
//         'white';
//     })
// });