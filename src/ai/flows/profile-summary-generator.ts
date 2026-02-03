'use server';

/**
 * @fileOverview AI-powered tool to generate a professional summary for user profiles.
 *
 * - generateProfileSummary - Generates a professional summary based on inputted skills, experience, and career goals.
 * - ProfileSummaryInput - The input type for the generateProfileSummary function.
 * - ProfileSummaryOutput - The return type for the generateProfileSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProfileSummaryInputSchema = z.object({
  skills: z
    .string()
    .describe('List of professional skills the user possesses.'),
  experience: z
    .string()
    .describe('Summary of the user\'s professional experience.'),
  careerGoals: z
    .string()
    .describe('Description of the user\'s career goals.'),
});
export type ProfileSummaryInput = z.infer<typeof ProfileSummaryInputSchema>;

const ProfileSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A professional summary generated based on the input data.'),
});
export type ProfileSummaryOutput = z.infer<typeof ProfileSummaryOutputSchema>;

export async function generateProfileSummary(
  input: ProfileSummaryInput
): Promise<ProfileSummaryOutput> {
  return profileSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'profileSummaryPrompt',
  input: {schema: ProfileSummaryInputSchema},
  output: {schema: ProfileSummaryOutputSchema},
  prompt: `You are a professional profile writer. Generate a professional summary based on the user's skills, experience, and career goals.

Skills: {{{skills}}}
Experience: {{{experience}}}
Career Goals: {{{careerGoals}}}

Summary:`,
});

const profileSummaryFlow = ai.defineFlow(
  {
    name: 'profileSummaryFlow',
    inputSchema: ProfileSummaryInputSchema,
    outputSchema: ProfileSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
