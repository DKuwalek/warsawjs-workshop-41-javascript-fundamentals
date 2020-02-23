let data;
let nbpData = fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
    .then(res => res.json())
    .then(res => {
        //pokaż mi swój rezultat i pisz co tutaj się dzieje
        console.error(res[0].rates);
        let rates = res[0].rates;
        loadData(rates);
        let $input = document.querySelector('input');
        $input.addEventListener('input', (e) => {
            console.log(e);
            let inputValue = document.querySelector('input').value.toUpperCase();
            loadData(
                rates.filter(ele => ele.code===inputValue));
        })
        // for (let i = 0; )
        // debugger;
        // <tr>
        //   <th>Alias</th>
        //   <th>Pełna nazwa</th>
        //   <th>Kurs</th>
        // </tr>
    });

function loadData(rates) {
    let $table = document.querySelector('#courses');
    $table.innerHTML = '';
    rates.forEach(ele => {
        console.log(ele);
        let $tr = document.createElement('tr');
        $table.append($tr);

        let $alias = document.createElement('td');
        $alias.textContent = ele.code;
        $tr.append($alias);

        let $name = document.createElement('td');
        $name.textContent = ele.currency;
        $tr.append($name);

        let $rate = document.createElement('td');
        $rate.textContent = ele.mid;
        $tr.append($rate);
    });
}
