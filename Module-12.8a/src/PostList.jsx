import { useLoaderData, Link } from "react-router-dom";

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");
  const posts = await fetch("http://localhost:3000/posts");
  return { users: await users.json(), posts: await posts.json() };
};

export const PostList = () => {
  const { users, posts } = useLoaderData();
  console.log("test");
  console.log(users);
  console.log(posts);
  posts.map((p) => {
    console.log(p.title);
  });

  return (
    <div className="post-list">
      <h1>Posts</h1>

      {posts.map((post) => (
        <div key={post.id} className="post">
          <Link to={`post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>
            {" "}
            {post.body.slice(0, 20)}
            {post.body.length > 20 ? "(...)" : ""}
          </p>
          <Link to={`user/${post.userId}`}>
            <p> {users.find((user) => post.userId === user.id).name}</p>
          </Link>
          .
        </div>
      ))}
    </div>
  );
};
