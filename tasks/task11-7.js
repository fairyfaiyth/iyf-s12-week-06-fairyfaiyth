function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) resolve({ id: userId, name: "User " + userId });
      else reject("Invalid user ID");
    }, 1000);
  });
}

console.time("all");
Promise.all([getUserData(1), getUserData(2), getUserData(3)])
  .then((results) => {
    console.log("All users:", results);
    console.timeEnd("all");
  })
  .catch((error) => console.error("One failed:", error));

const fast = new Promise((resolve) => setTimeout(() => resolve("Fast wins"), 500));
const slow = new Promise((resolve) => setTimeout(() => resolve("Slow wins"), 2000));

Promise.race([fast, slow]).then((result) => {
  console.log("Winner:", result);
});
