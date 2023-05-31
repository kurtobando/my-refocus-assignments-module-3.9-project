import { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import ButtonAddPost from "../components/ButtonAddPost/ButtonAddPost";
import PostsList from "../components/PostsList/PostsList";
import postsData from "../posts.json";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isFavorites, setIsFavorites] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", JSON.stringify(postsData));
    }
    setPosts(JSON.parse(localStorage.getItem("posts")));
  }, []);

  return (
    <section className="p-1 pt-2 m-auto max-width">
      <div className="flex justify-between">
        <div className="flex" style={{ gap: "0.5rem" }}>
          <Button
            theme={!isFavorites ? "primary-rounded" : "outline-rounded"}
            onClick={() => setIsFavorites(false)}
          >
            All posts
          </Button>
          <Button
            theme={isFavorites ? "primary-rounded" : "outline-rounded"}
            onClick={() => setIsFavorites(true)}
          >
            Favorites
          </Button>
        </div>
        <div>
          <Button theme="outline-rounded">
            <ButtonAddPost />
          </Button>
        </div>
      </div>
      <PostsList
        posts={isFavorites ? posts.filter((post) => post.isLiked) : posts}
      />
    </section>
  );
}

export default Posts;
