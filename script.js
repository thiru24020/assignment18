let hrs = document.querySelector("#h");
let mns = document.querySelector("#m");
let scs = document.querySelector("#s");

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    
    hrs.style.transform = 
    `rotateZ(${hh+(mm/12)}deg)`;
    mns.style.transform =
     `rotateZ(${mm}deg)`;
    scs.style.transform = 
    `rotateZ(${ss}deg)`;
})