const ENCRYPTMAP  = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

const DECRYPTMAP  = {
    "ai": "a" ,
    "enter": "e" ,
    "imes": "i" ,
    "ober": "o" ,
    "ufat": "u" 
}

function UpperOrLower(isUpper,text){
    text = isUpper ?  text.toUpperCase() : text;
    return  text;
}

function Encrypt(){
    const inputText = document.getElementById("input-text");
    let rta = ""
    inputText.value.split("").forEach( (c) =>{
        const isUpperCase = c === c.toUpperCase();
        c = c.toLowerCase();
        if(ENCRYPTMAP[c] !== undefined){
            rta += UpperOrLower(isUpperCase,ENCRYPTMAP[c]);
        }else{
            rta +=  UpperOrLower(isUpperCase,c);
        }
    });
    ShowAnswer(rta);
}

function Decrypt(){
    const inputText = document.getElementById("input-text").value;
    let rta = ""
    const size = inputText.length;
    for(let i = 0; i < size ; i++){
        if(i+2 <= size){
            let holderText = inputText.slice(i,i+2);
            const isUpperCase = holderText === holderText.toUpperCase();
            holderText = holderText.toLowerCase();
            if(DECRYPTMAP[holderText] !== undefined){
                rta += UpperOrLower(isUpperCase,DECRYPTMAP[holderText]);
                i++;
                continue;
            }
        }
        if(i+4 <= size){
            let holderText = inputText.slice(i,i+4);
            const isUpperCase = holderText === holderText.toUpperCase();
            holderText = holderText.toLowerCase();
            if(DECRYPTMAP[holderText] !== undefined){
                rta += UpperOrLower(isUpperCase,DECRYPTMAP[holderText]);
                i += 3;
                continue;
            }
        }

        if(i+5 <= size){
            let holderText = inputText.slice(i,i+5);
            const isUpperCase = holderText === holderText.toUpperCase();
            holderText = holderText.toLowerCase();
            if(DECRYPTMAP[holderText] !== undefined){
                rta += UpperOrLower(isUpperCase,DECRYPTMAP[holderText]);
                i += 4;
                continue;
            }
        }

        rta += inputText[i];

    }

    ShowAnswer(rta);
}


function  ShowAnswer(text){
    if(text === ""){
        NotFoundState();
        return;
    }
    const rightImageContainer = document.getElementById("right-container-image");
    const statusTitle = document.getElementById("status-title");
    const statusText = document.getElementById("status-text");
    const copyButton = document.getElementById("copy-button");

    rightImageContainer.classList.add("hide");
    statusTitle.classList.add("hide");
    statusText.innerHTML = text;
    copyButton.classList.remove("hide");
    
}

function  NotFoundState(){
    const viewportWidth = window.innerWidth;
    const rightImageContainer = document.getElementById("right-container-image");
    const statusTitle = document.getElementById("status-title");
    const statusText = document.getElementById("status-text");
    const copyButton = document.getElementById("copy-button");

    if(viewportWidth > 1200){
        rightImageContainer.classList.remove("hide");
    } else{
        rightImageContainer.classList.add("hide");
    }
    statusTitle.classList.remove("hide");
    statusTitle.innerHTML = "No message was found";
    statusText.innerHTML = "Enter the text you want to encrypt or decrypt.";
    copyButton.classList.add("hide");
}

function copy() {
    let copyText = document.getElementById("status-text");
    copyText.select();
    document.execCommand("copy");
  }

window.addEventListener("resize", () =>{
    const statusTitle = document.getElementById("status-title");
    if(!statusTitle.classList.contains("hide")){
        NotFoundState();
    }
});
