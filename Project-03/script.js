document.addEventListener("DOMContentLoaded",()=>{
    const keyinfo = document.getElementById("keyinfo");
    const table = document.querySelectorAll("table tr td");

     
    keyinfo.addEventListener("keydown",(e)=>{
        console.log(e);
        table[1].innerHTML = e.key;
        table[3].innerHTML = e.keyCode;
        table[5].innerHTML = e.shiftKey;
        table[7].innerHTML = e.altKey;
        table[9].innerHTML = e.ctrlKey;
        table[11].innerHTML = e.metaKey;
        keyinfo.innerHTML = e.code;
    });

})