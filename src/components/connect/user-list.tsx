import { User } from '@/lib/types';
import UserCard from './user-card';

type UserListProps = {
  users: User[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
