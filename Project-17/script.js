document.addEventListener("DOMContentLoaded",(e)=>{
    
    const text = document.getElementById("text");
    const btn = document.getElementById("btn");

    btn.addEventListener("click",()=>{
        text.select();
    })
    
})