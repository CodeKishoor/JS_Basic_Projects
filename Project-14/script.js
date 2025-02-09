document.addEventListener("DOMContentLoaded",()=>{

    const num = document.getElementById("num");
    const result = document.getElementById("result");
    const btn = document.getElementById("btn");

    btn.addEventListener("click",()=>{
        let value = num.value;
        if(value%10==1 && value%100!=11){
            result.innerHTML = value + "st";
        }else if(value%10==2 && value%100!=12){
            result.innerHTML = value + "nd";
        }else if(value%10==3 && value%100!=13){
            result.innerHTML = value + "rd";
        }else{
            result.innerHTML = value + "th";
        }
        num.value = "";
    })

})