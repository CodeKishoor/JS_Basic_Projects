document.addEventListener("DOMContentLoaded",()=>{

    const num = document.getElementById("num");
    const whole = document.querySelector(".whole");
    const fraction = document.querySelector(".fraction");
    const btn = document.getElementById("btn");

    btn.addEventListener("click",()=>{
        let result = num.value.toString().split(".");
        whole.innerHTML = result[0];
        fraction.innerHTML = result[1];
    })

})