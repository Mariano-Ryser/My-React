const getPosts = async (postId) => {
    const url = "https://jsonplaceholder.typicode.com/comments?postId=" + postId;
    const res = await fetch(url);
    const posts = await res.json();

    return posts;
}

export default getPosts;