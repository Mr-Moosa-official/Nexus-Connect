import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/types';
import { getUserById } from '@/lib/data';
import Link from 'next/link';
import { Quote } from 'lucide-react';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (testimonials.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Testimonials</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {testimonials.map((testimonial) => {
          const author = getUserById(testimonial.authorId);
          if (!author) return null;
          return (
            <div key={testimonial.id} className="relative rounded-lg border p-4">
               <Quote className="absolute top-4 right-4 h-6 w-6 text-muted/20" />
               <p className="italic text-muted-foreground mb-4">"{testimonial.content}"</p>
               <div className="flex items-center gap-3">
                    <Link href={`/profile/${author.id}`}>
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={author.avatarUrl} alt={author.name} data-ai-hint={author.avatarHint} />
                            <AvatarFallback>{author.name.substring(0,2)}</AvatarFallback>
                        </Avatar>
                    </Link>
                    <div>
                        <Link href={`/profile/${author.id}`} className="font-semibold hover:underline">{author.name}</Link>
                        <p className="text-sm text-muted-foreground">{author.headline}</p>
                    </div>
               </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
