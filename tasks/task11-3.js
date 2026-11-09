function loadUser(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "Amina" };
    callback(user);
  }, 1500);
}

loadUser(5, function (user) {
  console.log("User loaded:", user);
});

console.log("Loading user...");
