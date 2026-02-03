import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col overflow-hidden rounded-lg border">
            {project.imageUrl && (
              <div className="relative h-40 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-4">
              <div className='flex justify-between items-start'>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                {project.url && (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                )}
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
