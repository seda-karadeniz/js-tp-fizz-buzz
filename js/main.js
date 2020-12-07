document.documentElement.classList.add('js-enabled');

for (let i = 1; i <= 100; i++) {
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
