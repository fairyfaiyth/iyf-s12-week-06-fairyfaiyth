async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

async function main() {
  try {
    const base = "https://jsonplaceholder.typicode.com";

    const users = await getJSON(`${base}/users`);
    console.log("Total users:", users.length);
    users.forEach((u) => console.log("-", u.name, "|", u.address.city));

    const posts = await getJSON(`${base}/users/1/posts`);
    console.log("Posts for user 1:", posts.length);
    console.log("First post title:", posts[0].title);

    await getJSON(`${base}/users/9999`);
  } catch (error) {
    console.error("Caught:", error.message);
  }
}

main();
