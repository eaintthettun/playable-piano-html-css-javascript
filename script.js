const pianoKeys=document.querySelectorAll(".piano-keys .key");
const volumeSlider=document.querySelector(".volume-slider input");
const keysCheckbox=document.querySelector(".keys-checkbox input");

let allKeys=[];
let audio=new Audio("tunes/a.wav"); //by default, audio src is "a" tune
const playTune = (key) =>{
    audio.src=`tunes/${key}.wav`;
    audio.play();
    
    //for keyboard events
    const clickedKey=document.querySelector(`[data-key="${key}"]`); 
    //console.log(clickedKey); //return li
    clickedKey.classList.add("active");

    setTimeout (()=>{
        clickedKey.classList.remove("active");
    },150); //remove active class after 150ms of playing
}
pianoKeys.forEach(key=>{
    allKeys.push(key.dataset.key);
    //calling playtune function with passing data-key value as an argument
    key.addEventListener("click",()=>playTune(key.dataset.key)); //a,s,d,f...
});

//play the piano on keyboard key clicks
const pressedKey=(e)=>{
    //console.log(e);
    if(allKeys.includes(e.key))  playTune(e.key);
}
document.addEventListener("keydown",pressedKey);


const handleVolume=(e)=>{
    audio.volume=e.target.value;
}

volumeSlider.addEventListener("input",handleVolume);

const showHideKeys = () =>{
    pianoKeys.forEach(key=>key.classList.toggle("hide"));
}
keysCheckbox.addEventListener("click",showHideKeys);