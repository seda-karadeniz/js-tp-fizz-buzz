document.documentElement.classList.add('js-enabled');

let start = 1;
function generate(start) {
   const end = start + 10;
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 ===0 ) {
               document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
        }
        else if (i % 3 ===0) {
            document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend', '<li class="fizz">FI<i>zz</i></li>');
    
        }
        else if (i % 5 ===0) {
            document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
    
        }
        else{
            document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend', `<li>${i}</li>`);
       
        }
        
    }
    return end;
}
start = generate(start);

document.addEventListener('scroll', function (event) {
    if (window.innerHeight + window.scrollY <= document.body.scrollHeight) {
        start = generate(start);
 
    }
})


