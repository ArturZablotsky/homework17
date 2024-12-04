function randomDelayPrint(message) {
    if (typeof message !== "string" ) {
      console.error("Error");
      return;
    };
  
    let totalDelay = 0;
    message.split("").forEach((char) => {
      const delay = Math.random() * 1000;
      totalDelay += delay;
  
      setTimeout(() => {
        process.stdout.write(char);
      }, totalDelay);
    });
    setTimeout(() => console.log(), totalDelay);
  }
  randomDelayPrint("Hello");