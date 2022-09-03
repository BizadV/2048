const { Setup } = require("./Utils/keypressUtil");

const RL = Setup();

console.clear();
console.log("start");

RL.input.on("keypress", (chunk, key) => {
  if (
    key.name === "right" ||
    key.name === "left" ||
    key.name === "up" ||
    key.name === "down"
  ) {
    console.clear();
    console.log("keyname", key.name);
  } else if (key.name === "q") {
    RL.close();
  } else {
    return;
  }
});
