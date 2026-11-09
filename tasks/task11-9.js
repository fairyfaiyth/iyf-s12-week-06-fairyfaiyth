function getUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: userId, name: "User " + userId }), 1000);
  });
}

async function sequential() {
  console.time("sequential");
  const u1 = await getUserData(1);
  const u2 = await getUserData(2);
  const u3 = await getUserData(3);
  console.timeEnd("sequential");
  return [u1, u2, u3];
}

async function parallel() {
  console.time("parallel");
  const [u1, u2, u3] = await Promise.all([
    getUserData(1),
    getUserData(2),
    getUserData(3)
  ]);
  console.timeEnd("parallel");
  return [u1, u2, u3];
}

async function main() {
  await sequential();
  await parallel();
}

main();
