document.addEventListener("DOMContentLoaded",()=>{

    const fahrenheit = document.getElementById("fahrenheit");
    const celcius = document.getElementById("celcius");

    celcius.addEventListener("input",()=>{
        let f = ((celcius.value*9)/5)+32;
        fahrenheit.value = f;
    })

    fahrenheit.addEventListener("input",()=>{
        let c = ((fahrenheit.value-32)*5)/9;
        celcius.value = c;
    })

})