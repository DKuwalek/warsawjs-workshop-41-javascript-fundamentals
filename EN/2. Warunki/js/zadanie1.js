let papo = +prompt("Tell me:");
if(papo < 15 ) {
    console.log("Parentos " + papo);
} else if (papo >= 15 && papo < 18){
    console.log("Ograniczone masz synu i córko. " + papo);
} else if (papo >= 18 && papo < 150) {
    console.log("You in the army now. " + papo);
} else {
    console.log("You belong to science now. " + papo);
}