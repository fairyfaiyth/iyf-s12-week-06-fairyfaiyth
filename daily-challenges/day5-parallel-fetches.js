async function fetchJSON(label, url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${label}: HTTP ${response.status}`);
  }
  const data = await response.json();
  console.log(`${label} finished`);
  return data;
}

async function main() {
  const base = "https://jsonplaceholder.typicode.com";

  console.time("parallel");
  const results = await Promise.allSettled([
    fetchJSON("Users", `${base}/users`),
    fetchJSON("Posts", `${base}/posts`),
    fetchJSON("Broken", `${base}/does-not-exist`)
  ]);
  console.timeEnd("parallel");

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`#${i + 1} OK, items:`, result.value.length);
    } else {
      console.log(`#${i + 1} FAILED:`, result.reason.message);
    }
  });
}

main();
