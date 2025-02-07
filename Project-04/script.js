document.addEventListener("DOMContentLoaded",()=>{
    const character = document.getElementById("character");
    const result = document.getElementById("result");

    let lettersLimit = 40;
    result.innerHTML = 0 + '/' + lettersLimit;
    
    character.addEventListener("input",()=>{
        let ch = character.value.length;
        result.innerHTML = ch + '/' + lettersLimit;

        if(ch>lettersLimit){
            character.style.borderColor = "red";
            character.style.borderStyle = "solid";
            result.style.color = "red";
        }

    })

})    
