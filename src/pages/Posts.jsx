import { useState } from "react";
import Button from "../components/Button/Button";
import ButtonAddPost from "../components/ButtonAddPost/ButtonAddPost";
import PostsList from "../components/PostsList/PostsList";
import postsData from "../posts.json";

function Posts() {
  const [posts, setPosts] = useState(postsData);

  return (
    <section className="p-1 pt-2 m-auto max-width">
      {/* call to actions */}
      <div className="flex justify-between">
        <div className="flex" style={{ gap: "0.5rem" }}>
          <Button theme="primary-rounded">All posts</Button>
          <Button theme="outline-rounded">Favorites</Button>
        </div>
        <div>
          <Button theme="outline-rounded">
            <ButtonAddPost />
          </Button>
        </div>
      </div>

      {/* posts */}
      <PostsList posts={posts} />
    </section>
  );
}

export default Posts;
