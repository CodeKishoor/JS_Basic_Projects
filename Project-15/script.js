document.addEventListener("DOMContentLoaded",()=>{

    const container = document.querySelector(".container");
    const password = document.getElementById("password");

    password.addEventListener("input",()=>{
        let input = password.value;
        let size = input.length;
        let blurvalue = 20-size*2;
        container.style.filter = `blur(${blurvalue}px)`; 
    })

})