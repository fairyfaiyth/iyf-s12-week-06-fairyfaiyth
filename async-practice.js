// Lesson 11 practice: callbacks, Promises, async/await

function loadUser(userId, callback) {
  setTimeout(() => callback({ id: userId, name: "Amina" }), 1500);
}

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) resolve({ id: userId, name: "User " + userId });
      else reject("Invalid user ID");
    }, 1000);
  });
}

async function main() {
  try {
    loadUser(5, (user) => console.log("Callback:", user));

    console.time("parallel");
    const users = await Promise.all([
      getUserData(1),
      getUserData(2),
      getUserData(3)
    ]);
    console.timeEnd("parallel");
    console.log("Users:", users);

    await getUserData(-1);
  } catch (error) {
    console.error("Caught:", error);
  }
}

main();
