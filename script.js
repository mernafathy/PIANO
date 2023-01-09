const keyOfPiano = document.querySelectorAll(".pianoKays");
const volumeSlider = document.querySelector(".volume input");
const checkBox = document.querySelector(".checkbox input");

 

let allKeys = [];//array to sava data-key value
let audio = new Audio (`./sounds/notificationa.wav`) ; //src of tune by default tune of a


function playTune (key) {
    audio.src = `./sounds/notification${key.getAttribute('data-Key')}.wav`; // passing audio src based on key pressed
    audio.play(); ///playing audio
 key.classList.add ("active");  //adding active class to the clicked key element

 setTimeout(() => {key.classList.remove("active");

},50); //remove active class after 150 ms from the clicked key element
 }

keyOfPiano.forEach( key => 
    {
        allKeys.push(key.dataset.key); //add data-key value to the allkeys array //calling playtune function with passing data-key value as an argument
        key.addEventListener("click",()=>playTune(key.dataset.key));
    });


function handelValue  (e) 
{
    console.log(e.target.value);
    audio.volume = e.target.value; //passing the range value as an audio volume;
}


const showHideKeys = ()=>
{
    keyOfPiano.forEach(key => key.classList.toggle("hide")); //toggling hide class from each key on the chickbox click
}

const pressedKey = (e) =>
{
    if(allKeys.includes(e.key)) playTune(e.key); //if the pressed key is in allkeys array , call the playTune function only
}

checkBox.addEventListener("click",showHideKeys);
volumeSlider.addEventListener("input",handelValue);
document.addEventListener("keydown",pressedKey);