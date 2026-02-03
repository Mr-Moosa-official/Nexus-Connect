import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial, User } from "@/lib/types";
import { Quote } from "lucide-react";
import Link from "next/link";

type TestimonialCardProps = {
    testimonial: Testimonial;
    author: User;
    recipient: User;
};

export function TestimonialCard({ testimonial, author, recipient }: TestimonialCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
            <Link href={`/profile/${author.id}`}>
                <Avatar>
                    <AvatarImage src={author.avatarUrl} alt={author.name} data-ai-hint={author.avatarHint} />
                    <AvatarFallback>{author.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
            </Link>
            <div>
                <p className="font-semibold">
                    <Link href={`/profile/${author.id}`} className="hover:underline">{author.name}</Link>
                    <span className="font-normal text-muted-foreground"> for </span> 
                    <Link href={`/profile/${recipient.id}`} className="hover:underline">{recipient.name}</Link>
                </p>
                <p className="text-sm text-muted-foreground">{author.headline}</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <Quote className="absolute top-0 right-4 h-8 w-8 text-muted/20" />
        <p className="text-muted-foreground italic">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
}
