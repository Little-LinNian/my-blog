function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
location.reload();
sleep(600)  