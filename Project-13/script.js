document.addEventListener("DOMContentLoaded",()=>{

    const num = document.getElementById("num");
    const btn = document.getElementById("btn");
    const result = document.querySelector(".result");

    btn.addEventListener("click",()=>{
        let values = num.value;
        console.log(values)
        if(values>0 && values<1000){
            result.innerHTML = values;
        }else if(values>=1000 && values<1000000){
           result.innerHTML = (values/1000).toFixed(1)+"K";
        }else if(values>=1000000 && values<100000000){
            result.innerHTML = (values/100000).toFixed(1)+"M";
        }else if(values>=100000000 && values<10000000000){
            result.innerHTML = (values/10000000).toFixed(1)+"B";
        }else{
            result.innerHTML = (values/1000000000).toFixed(1)+"T";
        }
    })

})