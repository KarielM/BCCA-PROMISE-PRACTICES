// fetch('promise_practice1\\index.html').then((response) => {
//     console.log('resolved', response);
// }).catch((err) => {
//     console.log('rejected', err)
// })

//---------------------------------------chaining promises -------------------------
// let response = 'https://jsonplaceholder.typicode.com/todos';
// fetch(response).then((responseStatus) => {
//     console.log('resolved', responseStatus);
//     return response;
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('reject', err);
// })

fetch('https://fakestoreapi.com/products')
.then(promise => {
    return promise.json();
})
.then(responseArray => {
    // let position = document.querySelector('#content');
    // position.insertAdjacentHTML('beforeend', )
    console.log(responseArray);
    responseArray.forEach(item => {
        document.querySelector('#content').innerHTML += `<h3>${item.title}</h3>`;
        document.querySelector('#content').innerHTML += `<img src = '${item.image}' />`;
        document.querySelector('#content').innerHTML += `<h4>Price: $${item.price}</h4>`;
        document.querySelector('#content').innerHTML += `<p>${item.description}</p>`;
        document.querySelector('#content').innerHTML += `<hr>`;
        
        // console.log(item.id);}
        // console.log(item.title);
        // console.log(item.price);
        // console.log(item.description);
    });
    // responseArray.forEach(i =>{
    //     console.log(i)
    // })
});
// fetch ('https://fakestoreapi.com/products')
// .then(result => {
//     let promise = result.json();
// // }).then(promise => {
//     console.log(promise);
// });