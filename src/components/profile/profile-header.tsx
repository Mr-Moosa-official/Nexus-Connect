import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User } from '@/lib/types';
import { MapPin, Plus, MessageSquare, Edit } from 'lucide-react';
import Link from 'next/link';

type ProfileHeaderProps = {
  user: User;
  isCurrentUser: boolean;
};

export default function ProfileHeader({ user, isCurrentUser }: ProfileHeaderProps) {
  return (
    <Card>
      <div className="h-32 bg-secondary rounded-t-lg" />
      <CardContent className="relative p-6">
        <Avatar className="absolute -top-16 left-6 w-32 h-32 border-4 border-background">
          <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint={user.avatarHint} />
          <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex justify-end mb-4">
          {isCurrentUser ? (
            <Button asChild variant="outline">
              <Link href="/profile/edit"><Edit className="mr-2 h-4 w-4" /> Edit Profile</Link>
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Connect
              </Button>
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" /> Message
              </Button>
            </div>
          )}
        </div>
        <div className="pt-16">
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-lg text-muted-foreground">{user.headline}</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{user.location}</span>
          </div>
          <p className="mt-2 text-sm text-primary font-medium">{user.connections.length} connections</p>
        </div>
      </CardContent>
    </Card>
  );
}
