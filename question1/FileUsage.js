// const fs = require("fs")

const fs = require("fs");
  

fs.stat("File1.log", (error, stats) => {
  if (error) {
    console.log(error);
  }
  else {
    console.log(stats.size);
  }
});
fs.stat("File2.tmp", (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
        console.log(stats.size);
    }
  });
  fs.stat("Test.txt", (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
        console.log(stats.size);
    }
  });
  fs.stat("New.log", (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
        console.log(stats.size);
    }
  });
  
  fs.stat("README.md", (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
        console.log(stats.size);
    }
  });