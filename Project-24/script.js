document.addEventListener("DOMContentLoaded",()=>{

    const alert = document.getElementById("alert");
    const close = document.getElementById("close");
    const btn = document.getElementById("btn");

    btn.addEventListener("click",()=>{
        alert.style.display = "block";
        btn.style.display = "none";
    });

    close.addEventListener("click",()=>{
        alert.style.display = "none";
        btn.style.display = "block";
    });

})