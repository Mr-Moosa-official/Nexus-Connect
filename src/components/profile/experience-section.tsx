import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Experience } from '@/lib/types';
import { Briefcase } from 'lucide-react';

type ExperienceSectionProps = {
  experience: Experience[];
};

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  if (experience.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div key={job.id}>
              <div className="flex gap-4">
                <Briefcase className="h-10 w-10 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm">{job.company}</p>
                  <p className="text-xs text-muted-foreground">
                    {job.startDate} - {job.endDate || 'Present'}
                  </p>
                  <p className="text-xs text-muted-foreground">{job.location}</p>
                  <p className="mt-2 text-sm">{job.description}</p>
                </div>
              </div>
              {index < experience.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
