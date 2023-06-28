const app = require("./app");
const { db } = require("./db");

const PORT = process.env.PORT || 8080;

async function init() {
  await db.sync();

  app.listen(PORT, () => {
    console.log("listening to port", PORT);
  });
}

init();
