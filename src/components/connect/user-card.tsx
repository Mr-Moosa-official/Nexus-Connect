import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { User } from '@/lib/types';
import { Plus } from 'lucide-react';

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="flex flex-col text-center">
      <CardHeader className="flex-1">
        <Link href={`/profile/${user.id}`} className="mx-auto">
          <Avatar className="w-24 h-24 mx-auto border-2 border-primary">
            <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint={user.avatarHint} />
            <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
        </Link>
      </CardHeader>
      <CardContent className="flex-1 px-4">
        <Link href={`/profile/${user.id}`}>
          <h3 className="font-semibold hover:underline">{user.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{user.headline}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
}
