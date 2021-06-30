function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
   
sleep(600)  