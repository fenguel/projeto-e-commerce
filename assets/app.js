function increment(id) {
    let element = document.getElementById(id);
    let counter = Number(element.textContent)+1;
    element.innerHTML = counter;
}


function decrement(id) {
    let element = document.getElementById(id);
    let counter = Number(element.textContent)-1;
    element.innerHTML = counter;     
}
