document.querySelector('#btnLoadSeq')
.addEventListener('click', async function(){
    let response1 = await axios.get("data1.json");
    let response2 = await axios.get('data2.json');

    console.log(response1.data);
    console.log(response2.data);

    document.querySelector('#content1').innerHTML = response1.data.text;
    document.querySelector('#content2').innerHTML = response2.data.text;
})

document.querySelector('#btnLoadParallel')
.addEventListener('click', async function(){
    let request1 = axios.get('data1.json');  // no await in front of the axios
    let request2 = axios.get('data2.json');

    let response1 = await request1; // we only do await after all the axios.get has been started
    let response2 = await request2;

    document.querySelector('#content1').innerHTML = response1.data.text;
    document.querySelector('#content2').innerHTML = response2.data.text;
})

async function loadRequest1() {
    let r = await axios.get('data1.json');
    console.log(r.data);
}

async function loadRequest2() {
    let r = await axios.get('data2.json');
    console.log(r.data);
}

// how to do first come first served with await/async
function run() {
    loadRequest1();
    loadRequest2();
}

// alternatively:
function fcfs() {
    // in the following cases, whichever request finishes
    // first, it will get processed first
    axios.get('data1.json').then(function(r){
        console.log(r.data)
    })
    axios.get('data2.json').then(function(r){
        console.log(r.data);
    })
}