async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("HTTP error " + response.status);
  return response.json();
}

function searchUsers(users, query) {
  const q = query.toLowerCase();
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q)
  );
}

function sortByName(users, direction = "asc") {
  const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
  return direction === "desc" ? sorted.reverse() : sorted;
}

function filterByCity(users, city) {
  return users.filter((user) => user.address.city === city);
}

async function main() {
  try {
    const allUsers = await fetchUsers();

    console.log("--- Search 'le' ---");
    searchUsers(allUsers, "le").forEach((u) => console.log(u.name, "|", u.email));

    console.log("--- Sorted Z-A ---");
    sortByName(allUsers, "desc").forEach((u) => console.log(u.name));

    console.log("--- City: Gwenborough ---");
    filterByCity(allUsers, "Gwenborough").forEach((u) => console.log(u.name));
  } catch (error) {
    console.error("Caught:", error.message);
  }
}

main();
