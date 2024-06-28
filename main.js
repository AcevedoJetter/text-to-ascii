/**
 * Text To Ascii Art
 */

const figlet = require("figlet");
const fs = require("fs");

// Change this string to the text you want the ascii art to say
const stringToPrint = "Acevedo Jetter";
const fonts = figlet.fontsSync();

for (const font of fonts) {
  figlet.text(stringToPrint, { font: font }, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    fs.appendFile(`${stringToPrint}.txt`, `${font}:\n${data}\n\n`, (err2) => {
      if (err2) throw err2;
    });
  });
}
