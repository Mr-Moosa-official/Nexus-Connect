'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { User } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { generateSummaryAction } from '@/actions';
import { Loader2, Wand2 } from 'lucide-react';

const profileFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  headline: z.string().min(5, 'Headline must be at least 5 characters.'),
  location: z.string().min(2, 'Location is required.'),
  industry: z.string().min(2, 'Industry is required.'),
  summary: z.string().max(2000, 'Summary must be less than 2000 characters.').optional(),
  skills: z.string().optional(),
  experience: z.string().optional(),
  careerGoals: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

type EditProfileFormProps = {
  user: User;
};

export default function EditProfileForm({ user }: EditProfileFormProps) {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user.name,
      headline: user.headline,
      location: user.location,
      industry: user.industry,
      summary: user.summary,
      skills: user.skills.join(', '),
      experience: user.experience.map(exp => `${exp.title} at ${exp.company}`).join('\n'),
      careerGoals: '',
    },
    mode: 'onChange',
  });

  async function onSubmit(data: ProfileFormValues) {
    toast({
      title: 'Profile Updated!',
      description: 'Your profile has been saved successfully.',
    });
    console.log(data);
  }

  async function handleGenerateSummary() {
    setIsGenerating(true);
    const { skills, experience, careerGoals } = form.getValues();
    const result = await generateSummaryAction({
      skills: skills || '',
      experience: experience || '',
      careerGoals: careerGoals || '',
    });
    if (result.error) {
        toast({
            title: "Error Generating Summary",
            description: result.error,
            variant: "destructive"
        })
    } else if (result.summary) {
        form.setValue('summary', result.summary, { shouldValidate: true });
        toast({
            title: "Summary Generated!",
            description: "The AI has generated a summary for you."
        })
    }
    setIsGenerating(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your basic profile information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="headline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Headline</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Senior Software Engineer at TechCorp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., San Francisco, CA" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., Computer Software" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
            </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>AI Summary Generator</CardTitle>
                <CardDescription>Use AI to craft a compelling professional summary. Fill in your skills, experience, and goals below, then generate.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Skills</FormLabel>
                        <FormControl>
                            <Textarea placeholder="List your professional skills, separated by commas." {...field} />
                        </FormControl>
                         <FormDescription>Example: React, TypeScript, Node.js, Project Management</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Experience Summary</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Briefly describe your key roles and achievements." {...field} />
                        </FormControl>
                        <FormDescription>Example: Led a team of 5 engineers to launch a new feature... </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="careerGoals"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Career Goals</FormLabel>
                        <FormControl>
                            <Textarea placeholder="What are your professional aspirations?" {...field} />
                        </FormControl>
                        <FormDescription>Example: To become a principal engineer in a leading tech company...</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your Summary</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="Your generated summary will appear here."
                                className="min-h-[150px]"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="button" onClick={handleGenerateSummary} disabled={isGenerating}>
                    {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                    Generate with AI
                </Button>
            </CardContent>
        </Card>

        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  );
}
