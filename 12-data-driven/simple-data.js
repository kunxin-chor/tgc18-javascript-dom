// fetch takes in one argument
// and that is URL to the
// data that we want to retrieve
// we can provide relative URLs
let a = fetch("data.txt").then(function(response){
    // this annoymous function is executed when the fetch() has finished
    return response.text();  // <-- this also async
}).then(function(text){
    console.log(text);
}); // --> fetch is asynchronous, js will let it run in the background
console.log("hellO!")