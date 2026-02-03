import AiSuggestions from "@/components/connect/ai-suggestions";
import UserList from "@/components/connect/user-list";
import { users } from "@/lib/data";

export default function ConnectPage() {
  // Exclude the current user (ID '1') from the list
  const otherUsers = users.filter(user => user.id !== '1');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Grow Your Network</h1>
        <p className="text-muted-foreground">Find and connect with professionals in your industry.</p>
      </div>
      
      <AiSuggestions />
      
      <div>
        <h2 className="text-2xl font-semibold tracking-tight mb-4">People you may know</h2>
        <UserList users={otherUsers} />
      </div>
    </div>
  );
}
