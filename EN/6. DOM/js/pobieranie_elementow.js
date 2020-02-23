//1
let $mojNaglowek = document.querySelector('#mojnaglowek');
console.log($mojNaglowek);

//2
let $monInput = document.querySelector('#coTutajJestNapisane');
console.log($monInput);
$monInput.value = 'nowy tekst';


//3
$mojNaglowek.textContent = $monInput.value;

