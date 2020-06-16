const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
console.log(secondHand);

const allHands = document.querySelectorAll('.hand');

function setDate(){
    // console.log('Hi');
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90; //Think 0 second as 360 degree
    // It’s a basic percentage calculation. Part divided by whole times 100%, or in this case 360 degrees.
    // We add the 90 degrees because we’ve offset all of the hands 90 degrees to turn them upwards.

    m = checkTime(minutes);
    s = checkTime(seconds);

    console.log(secondsDegrees);
    secondHand.style.transform =`rotate(${secondsDegrees}deg)`;
    // To turn the hands we add an inline style using Javascript

    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if(secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')
    } else {
        allHands.forEach(hand => hand.style.transition = '')
    }

    const digital = document.querySelector('.digital');

    digital.innerHTML=`${hours} : ${m} : ${s}`;
    
// if(secondsDegrees === 90) {
//     secondHand.style.transition = 'none';
// } else {
//     secondHand.style.transition = '';
// }

}

function checkTime(i){
if(i<10){
    
    i = "0" + i;

}
return i;
}

// setDate();

setInterval(setDate,1000); //Call the function setDate every 1second