function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) resolve({ id: userId, name: "John" });
      else reject("Invalid user ID");
    }, 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 1000);
  });
}

function getPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, text: "Great post!" }]), 1000);
  });
}

async function getDataWithAsync() {
  const user = await getUserData(1);
  const posts = await getUserPosts(user.id);
  const comments = await getPostComments(posts[0].id);
  return comments;
}

async function main() {
  try {
    const comments = await getDataWithAsync();
    console.log("Comments:", comments);
    await getUserData(-1);
  } catch (error) {
    console.error("Caught:", error);
  }
}

main();
