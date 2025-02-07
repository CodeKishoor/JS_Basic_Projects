document.addEventListener("DOMContentLoaded",()=>{

    const word = document.getElementById("word");
    const reverseword = document.getElementById("reverseword");

    word.addEventListener("input",()=>{
        let value = word.value;
        let seperate = value.split(" ");
        let reverse = seperate.reverse().join(" ");
        reverseword.innerHTML = reverse;
    })

})