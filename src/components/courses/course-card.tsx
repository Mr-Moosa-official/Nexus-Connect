import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, BarChart } from 'lucide-react';
import type { Course } from '@/lib/types';
import { Button } from '../ui/button';

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            className="object-cover rounded-t-lg"
            data-ai-hint={course.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4 space-y-2">
        <CardTitle className="text-lg">{course.title}</CardTitle>
        <CardDescription>By {course.instructor}</CardDescription>
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart className="h-4 w-4" />
            <span>{course.level}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{course.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">({course.reviewCount})</span>
        </div>
        <Button>Enroll Now</Button>
      </CardFooter>
    </Card>
  );
}
