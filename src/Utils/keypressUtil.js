const Writable = require("stream").Writable;
const keypress = require("keypress");
const Readline = require("readline");

const customStdout = new Writable({
  write: function (chunk, encoding, callback) {
    if (!this.muted) {
      process.stdout.write(chunk, encoding);
    }
    return callback();
  },
});

function Setup() {
  const RL = Readline.createInterface({
    input: process.stdin,
    output: customStdout,
  });

  Readline.emitKeypressEvents(process.stdin);
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);
  keypress(process.stdin);

  return RL;
}

module.exports = { Setup };
