function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log("Data received:", data);
});

console.log("Waiting for data...");
