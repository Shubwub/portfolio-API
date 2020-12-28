const { PORT = 9090 } = process.env;
const { app } = require("./index");

app.listen(PORT, () => {
  console.log("+-------------------------+");
  console.log(`+ listening on ${PORT}...    +`);
  console.log("+-------------------------+");
});
