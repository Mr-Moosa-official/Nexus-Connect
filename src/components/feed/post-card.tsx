import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Post, User } from '@/lib/types';
import { ThumbsUp, MessageSquare, Repeat, Send } from 'lucide-react';

type PostCardProps = {
  post: Post;
  author: User;
};

export default function PostCard({ post, author }: PostCardProps) {
  return (
    <Card>
      <CardHeader className="p-4">
        <div className="flex items-center gap-3">
          <Link href={`/profile/${author.id}`}>
            <Avatar>
              <AvatarImage src={author.avatarUrl} alt={author.name} data-ai-hint={author.avatarHint} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </Link>
          <div>
            <Link href={`/profile/${author.id}`}>
              <p className="font-semibold hover:underline">{author.name}</p>
            </Link>
            <p className="text-xs text-muted-foreground">{author.headline}</p>
            <p className="text-xs text-muted-foreground">{post.createdAt}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <p className="text-sm">{post.content}</p>
      </CardContent>
      {post.imageUrl && (
        <div className="relative w-full h-64 mt-2">
          <Image
            src={post.imageUrl}
            alt="Post image"
            fill
            className="object-cover"
            data-ai-hint={post.imageHint}
          />
        </div>
      )}
      <div className="flex justify-between p-2 text-xs text-muted-foreground">
        <span>{post.likes} Likes</span>
        <span>{post.comments} Comments</span>
      </div>
      <Separator />
      <CardFooter className="p-1">
        <div className="flex w-full justify-around">
          <Button variant="ghost" className="flex-1">
            <ThumbsUp className="mr-2 h-5 w-5" /> Like
          </Button>
          <Button variant="ghost" className="flex-1">
            <MessageSquare className="mr-2 h-5 w-5" /> Comment
          </Button>
          <Button variant="ghost" className="flex-1">
            <Repeat className="mr-2 h-5 w-5" /> Repost
          </Button>
          <Button variant="ghost" className="flex-1">
            <Send className="mr-2 h-5 w-5" /> Send
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
