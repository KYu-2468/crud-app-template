const { db, models } = require("../server/db");
const { User } = models;

async function seed() {
  await User.create({ username: "Tester" });
}

seed().then(() => {
  console.log("Seeding complete!");
  process.exit();
});
