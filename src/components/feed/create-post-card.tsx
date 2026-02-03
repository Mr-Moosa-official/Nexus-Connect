'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getUserById } from '@/lib/data';
import { Image as ImageIcon, Video, Calendar, Edit3 } from 'lucide-react';

export default function CreatePostCard() {
  const currentUser = getUserById('1');
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={currentUser?.avatarUrl} alt={currentUser?.name} data-ai-hint={currentUser?.avatarHint} />
            <AvatarFallback>{currentUser?.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <Input placeholder="Start a post..." className="flex-1" />
        </div>
        <div className="mt-4 flex justify-around">
          <Button variant="ghost">
            <ImageIcon className="mr-2 h-5 w-5 text-blue-500" />
            Photo
          </Button>
          <Button variant="ghost">
            <Video className="mr-2 h-5 w-5 text-green-500" />
            Video
          </Button>
          <Button variant="ghost">
            <Calendar className="mr-2 h-5 w-5 text-orange-500" />
            Event
          </Button>
          <Button variant="ghost">
            <Edit3 className="mr-2 h-5 w-5 text-red-500" />
            Write article
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
