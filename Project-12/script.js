document.addEventListener("DOMContentLoaded",()=>{

    const word = document.getElementById("word");
    const skipword = document.getElementById("skipword");

    word.addEventListener("input",()=>{
        let symbols = "!@#$%^&*(){}[]';:><.,/?+-*/";
        let values = word.value.split("");
        console.log(values)

        let remove = values.filter((value)=>{
            return symbols.indexOf(value)==-1
        })
       
        skipword.innerHTML = remove.join("");
        
    })

})