import { useLoaderData, Link } from "react-router-dom";

export const loader = async ({ params }) => {
  const users = await fetch("http://localhost:3000/users");
  const post = await fetch(`http://localhost:3000/posts/${params.postId}`);
  const comments = await fetch(
    `http://localhost:3000/comments?postId=${params.postId}`
  );
  return {
    users: await users.json(),
    post: await post.json(),
    comments: await comments.json(),
  };
};

export const Post = () => {
  const { post, comments, users } = useLoaderData();
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>
        by{" "}
        <Link to={`/user/${post.userId}`}>
          {users.find((user) => user.id === post.userId).name}
        </Link>
      </p>
      <p>{post.body}</p>
      <hr />

      {comments.length > 0 && (
        <div className="comments">
          <h2>Comments:</h2>
          {comments.map((comment) => {
            const commenter = users.find((user) => user.id === comment.userId);
            return (
              <div key={comment.id} className="comment">
                <p>
                  <Link to={`/user/${comment.userId}`}>
                    {commenter.name} commented:
                  </Link>
                </p>
                <p>{comment.comment}</p>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
