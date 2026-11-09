function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "John" });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}

getUserData(1)
  .then((user) => console.log("Success:", user))
  .catch((error) => console.log("Error:", error));

getUserData(-1)
  .then((user) => console.log("Success:", user))
  .catch((error) => console.log("Error:", error));
