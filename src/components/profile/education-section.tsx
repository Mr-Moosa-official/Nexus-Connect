import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Education } from '@/lib/types';
import { GraduationCap } from 'lucide-react';

type EducationSectionProps = {
  education: Education[];
};

export default function EducationSection({ education }: EducationSectionProps) {
  if (education.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={edu.id}>
              <div className="flex gap-4">
                <GraduationCap className="h-10 w-10 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">{edu.school}</h3>
                  <p className="text-sm">
                    {edu.degree}, {edu.fieldOfStudy}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {edu.startYear} - {edu.endYear || 'Present'}
                  </p>
                </div>
              </div>
              {index < education.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
