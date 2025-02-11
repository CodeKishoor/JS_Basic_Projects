document.addEventListener("DOMContentLoaded",()=>{

    const text = document.getElementById("text");
    const result = document.getElementById("result");

    text.addEventListener("keyup",(e)=>{
        if(e.getModifierState("CapsLock")){
            result.style.display = "block";
        }else{
            result.style.display = "none";
        }
    })

})