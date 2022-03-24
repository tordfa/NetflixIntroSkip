function simulateClick() {
    // Get the element to send a click event
    target = document.getElementsByClassName("button-primary watch-video--skip-content-button medium hasLabel ltr-ublg01")[0];
    
    // Create a synthetic click MouseEvent
      let evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      });
    
    // Send the event to the html element
    target.dispatchEvent(evt);
    }