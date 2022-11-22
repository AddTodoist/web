import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        More Info
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 gap-y-6 md:gap-y-12 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
