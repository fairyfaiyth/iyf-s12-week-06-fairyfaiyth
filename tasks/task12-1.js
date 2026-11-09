async function getUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    console.log("Status:", response.status);
    console.log("OK:", response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
  }
}

async function main() {
  const user = await getUser(1);
  console.log("Name:", user.name);
  console.log("Email:", user.email);
  console.log("City:", user.address.city);
}

main();
