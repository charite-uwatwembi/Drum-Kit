// Function to handle transition end event
function removeTransition(event) {
    // Check if the property name of the transition is 'transform'
    if (event.propertyName !== 'transform') return;
  
    // Remove the 'playing' class from the target element
    event.target.classList.remove('playing');
  }

function playSound(e){
    let keyCode = e.keyCode
    const audio =  document.querySelector(`audio[data-key="${keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    if(!audio)return;
    audio.currentTime = 0;
    audio.play()
    
    key.classList.add('playing')
}
// Select all elements with class 'key' and convert NodeList to array
const keys = Array.from(document.querySelectorAll('.key'));

// Add event listener to each key for the transition end event
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add event listener to the window for the keydown event
window.addEventListener('keydown', playSound);