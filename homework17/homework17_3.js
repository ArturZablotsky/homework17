function intervalRace(functions, t) {
    return new Promise((resolve) => {
      const results = [];
      let index = 0;
  
      const intervalId = setInterval(() => {
        if (index >= functions.length) {
          clearInterval(intervalId);
          resolve(results);
          return;
        }
        const result = functions[index]();
        results.push(result);
  
        index++; 
      }, t);
    });
  }
  const fn1 = () => "Function 1 completed";
  const fn2 = () => "Function 2 completed";
  const fn3 = () => "Function 3 completed";
  
  intervalRace([fn1, fn2, fn3], 500).then((results) => {
    console.log("Results:", results); 
  });