{/* <div class="comment">
    <h2>Autor: Krzysztof Łokaj</h2>
    <span>Wysłane 20.03.2019</span>
    <p>
        Ten warsztat jest po prostu świetny
    </p>
</div> */}

let comment = {
    author: "Andrzej Molek",
    date: "20.03.2019",
    msg: "Ale super ten warsztat robimy już czary mary"
}

let comments = [
    {
        author: "Wojtek Trek",
        date: "20.03.2019",
        msg: "Już taki jestem..."
    },
    {
        author: "Strach na wróble",
        date: "21.03.2019",
        msg: "Zimny drań"
    },
    {
        author: "Wokay",
        date: "24.03.2019",
        msg: "I dobrze mi z tym"
    },
    {
        author: "Zenek Martyniuk",
        date: "26.03.2019",
        msg: "Miłość miłość w zakopanym"
    },
    {
        author: "Sławomir",
        date: "30.03.2019",
        msg: "Ej Zenek, ukradłeś mi tekst..."
    }
]

//1.
let $paragraph = document.createElement('p');
$paragraph.textContent = 'Dabingo Albingo';

let $body = document.querySelector('body');
$body.append($paragraph);

//2.
// Stwórz komentarz i dodaj go do sekcji o id comments,
// poniżej masz jego strukturę:

/* <div class="comment">
<h2>Autor: Krzysztof Łokaj</h2>
<span>Wysłane 20.03.2019</span>
<p>
    Ten warsztat jest po prostu świetny
</p>
</div> */



// >
//     <h2>Autor: Krzysztof Łokaj</h2>
//     <span>Wysłane 20.03.2019</span>
//     <p>
//         Ten warsztat jest po prostu świetny
//     </p>
//     </div>'
// );
document.querySelector('#comments').append(createCommentNode(comment));


function createCommentNode(commentJson) {
    let $commentDiv = document.createElement('div');
    $commentDiv.classList.add("comment");

    let $h2 = document.createElement('h2');
    $h2.innerText = commentJson.author;

    let $span = document.createElement('span');
    $span.innerText = commentJson.date;

    let $commentParagraph = document.createElement('p');
    $commentParagraph.innerText = commentJson.msg;

    $commentDiv.append($h2);
    $commentDiv.append($span);
    $commentDiv.append($commentParagraph);

    return $commentDiv;
}
