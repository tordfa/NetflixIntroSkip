let skipIntro = "watch-video--skip-content-button";

function simulateClick(knapp) {
    // Get the element to send a click event
    cb = document.getElementsByClassName(knapp)[0];
    // Create a synthetic click MouseEvent
    let evt = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window
      });
    // Send the event to skip button
    cb.dispatchEvent(evt);
    }

function callback() {
  //Sjekker om Skip knappen eksisterer
  if(document.getElementsByClassName(skipIntro)[0]){
    console.log("skip")
    simulateClick(skipIntro);
  } 
}

//Oppretter en observer
const observer = new MutationObserver(callback);
// Definerer hvilken node som skal observeres
let maal = document.querySelector('body')
//Starter observeringen av body
observer.observe(maal, {subtree:true, childList: true});
