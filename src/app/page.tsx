import CreatePostCard from '@/components/feed/create-post-card';
import PostCard from '@/components/feed/post-card';
import { getPosts, getUserById } from '@/lib/data';

export default function Home() {
  const posts = getPosts();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <CreatePostCard />
      {posts.map((post) => {
        const author = getUserById(post.authorId);
        if (!author) return null;
        return <PostCard key={post.id} post={post} author={author} />;
      })}
    </div>
  );
}
