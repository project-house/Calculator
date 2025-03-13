const btn = document.querySelectorAll("button");
const inputf = document.getElementById("result");
const eqlBtn = document.getElementsByClassName("equals");

for(let i=0; i<eqlBtn.length; i++){
    eqlBtn[i].addEventListener("mouseover", (event) => {
        const x = (event.pageX - eqlBtn[i].offsetLeft);
        const y = (event.pageY - eqlBtn[i].offsetTop);

        eqlBtn[i].style.setProperty("--xPos", x + "px");
        eqlBtn[i].style.setProperty("--yPos", y + "px");
    });
}


for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", ()=>{
        const ival = btn[i].textContent;
        if(ival === "C"){
            clearRes();
        }else if(ival === "="){
            calculate();
        }else if(ival === "DEL"){
            deleteV();
        }else{
            appendVal(ival);
        }
    });
}

function clearRes(){
    inputf.value = "";
}

function calculate(){
    inputf.value = eval(inputf.value);
}

function deleteV(){
    inputf.value = inputf.value.slice(0,-1);
}

function appendVal(ival){
    if(ival === "X") inputf.value += '*';
    else inputf.value += ival;
}