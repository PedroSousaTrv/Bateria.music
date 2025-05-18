document.body.addEventListener("keyup", (event)=>{
    playsong(event.code.toLowerCase());
});

document.querySelector(".inputs button").addEventListener("click", ()=>{
    let song = document.querySelector("#input").value;

    if (song !== "" ){
        let songArray = song.split("");
        playcomposition(songArray);
    } else {
        alert("Preencha o campo");
    }
});

document.querySelectorAll(`div[data-key]`).forEach((keyElement)  => {
    keyElement.addEventListener("click", ()=>{
    let key = keyElement.getAttribute("data-key");
    playsong(key);
    })
})


function playcomposition(songArray){
    let wait = 0;

    for( let songItem of songArray){
        setTimeout(() => {
            playsong(`key${songItem}`)
        }, wait);

        wait += 250;    
    }

}

function playsong(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)


    if (audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement){
        keyElement.classList.add("active")
    }

    setTimeout(() => {
       keyElement.classList.remove("active") 
    }, 300);


}
