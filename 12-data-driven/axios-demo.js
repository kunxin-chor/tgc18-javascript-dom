// promises in axios:
axios.get('data.txt').then(function(response){
    console.log(response.data);
    document.querySelector('#output').innerHTML = response.data;
})


// await/async
// await only make sense if it is in front of a promise;
// a promise is a process running in the background that take
// some time to finish
// await tells javascript to pause at the line
// until the promise has finished, then return
// the return value of the promise
async function run() {
    let response =  await axios.get('data.txt');
    document.querySelector('#output2').innerHTML = response.data;

    let bookResponse = await axios.get('books.json');
    console.log(bookResponse.data);
    console.log("title=>", bookResponse.data.title);

    let shopResponse = await axios.get('shop.json');
    console.log(shopResponse.data);

}
run();
