// BEFORE (callbacks):
// function getData(callback) {
//   setTimeout(() => callback({ id: 1, name: "John" }), 1000);
// }
// getData(function (user) { console.log("User:", user); });

// AFTER (async/await):
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "John" }), 1000);
  });
}

async function main() {
  try {
    const user = await getData();
    console.log("User:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
