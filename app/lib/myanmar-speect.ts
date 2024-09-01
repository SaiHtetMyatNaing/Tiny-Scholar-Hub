
// Function to speak the given text
export function speakText(text: string , rate : number = 1 , pitch : number = 100) {
    // Check if the browser supports the Web Speech API
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      // Set the language to Burmese (Myanmar)
      utterance.lang = 'my-MM'; 
      utterance.rate = rate; 
      utterance.pitch = pitch;
      window.speechSynthesis.speak(utterance);
  
      console.log("Success! Text sent to speech synthesis.");
    } else {
      console.error("Sorry, your browser doesn't support text-to-speech.");
    }
  }