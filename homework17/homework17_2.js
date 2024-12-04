function debounce(callback, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  }
  
  const logMessage = debounce((message) => {
    console.log(`Message: ${message}`);
  }, 2000);
  
  logMessage("Hello");
  logMessage("How are you?");
  setTimeout(() => logMessage("Hello"), 2500);