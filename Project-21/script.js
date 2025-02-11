document.addEventListener("DOMContentLoaded",()=>{

    const url = document.getElementById("url");
    const clear = document.getElementById("clear");
    const btn = document.getElementById("btn");
    const result = document.getElementById("result");

    clear.addEventListener("click",()=>{
        url.value = "";
        result.value = "";
    });

    //https://www.youtube.com/watch?v=vrOH5barqE8&t=22661s

    btn.addEventListener("click",()=>{
        let value = url.value.split("v=")[1].substring(0,11);
        result.innerText = value;
        result.style.display = "block";
    });

})