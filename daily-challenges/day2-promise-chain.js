function randomStep(name) {
  return new Promise((resolve) => {
    const ms = Math.floor(Math.random() * 1000) + 500;
    setTimeout(() => {
      console.log(name, "done after", ms, "ms");
      resolve(name);
    }, ms);
  });
}

const stepOne = () => randomStep("Step 1");
const stepTwo = () => randomStep("Step 2");
const stepThree = () => randomStep("Step 3");

console.time("total");
stepOne()
  .then(stepTwo)
  .then(stepThree)
  .then(() => console.timeEnd("total"))
  .catch((err) => console.error("Error:", err));
