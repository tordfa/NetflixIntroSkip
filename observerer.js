//Defining skip intro button class name.
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
  //Checking if the Skip button exists
  if(document.getElementsByClassName(skipIntro)[0]){
    console.log("skip")
    simulateClick(skipIntro);
  } 
}

//Creating observer
const observer = new MutationObserver(callback);
// Defining which node to observe
let targetNode = document.querySelector('body')
//Start observing the targetNode
observer.observe(targetNode, {subtree:true, childList: true});
