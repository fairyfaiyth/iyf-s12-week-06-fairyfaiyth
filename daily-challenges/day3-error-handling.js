const DEFAULT_USER = { id: 0, name: "Guest", email: "none@example.com" };

async function getUserSafe(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (response.status === 404) {
      return DEFAULT_USER;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Network problem:", error.message);
    return DEFAULT_USER;
  }
}

async function main() {
  console.log("User 1:", (await getUserSafe(1)).name);
  console.log("User 9999:", await getUserSafe(9999));
}

main();
