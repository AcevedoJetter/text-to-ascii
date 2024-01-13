let figlet = require("figlet");

figlet.fonts(function (err, fonts) {
  if (err) {
    console.log("something went wrong...");
    console.dir(err);
    return;
  }
  console.log(fonts);
});
