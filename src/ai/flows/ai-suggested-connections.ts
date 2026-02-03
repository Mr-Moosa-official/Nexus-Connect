'use server';

/**
 * @fileOverview AI-powered connection suggestions based on user profile data, skills, and industry.
 *
 * - aiSuggestedConnections - A function that provides AI-driven connection suggestions.
 * - AISuggestedConnectionsInput - The input type for the aiSuggestedConnections function.
 * - AISuggestedConnectionsOutput - The return type for the aiSuggestedConnections function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISuggestedConnectionsInputSchema = z.object({
  profileData: z.string().describe('User profile data, including skills, experience, and industry.'),
  currentConnections: z.array(z.string()).describe('List of current connections for the user.'),
  numberOfSuggestions: z.number().default(5).describe('The number of connection suggestions to provide.'),
});
export type AISuggestedConnectionsInput = z.infer<typeof AISuggestedConnectionsInputSchema>;

const AISuggestedConnectionsOutputSchema = z.object({
  suggestedConnections: z.array(z.string()).describe('A list of suggested connections based on the user profile data.'),
});
export type AISuggestedConnectionsOutput = z.infer<typeof AISuggestedConnectionsOutputSchema>;

export async function aiSuggestedConnections(input: AISuggestedConnectionsInput): Promise<AISuggestedConnectionsOutput> {
  return aiSuggestedConnectionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSuggestedConnectionsPrompt',
  input: {schema: AISuggestedConnectionsInputSchema},
  output: {schema: AISuggestedConnectionsOutputSchema},
  prompt: `You are a professional networking expert. Based on the user's profile data, their current connections, and the desired number of suggestions, provide a list of suggested connections to expand their professional network. Ensure suggestions are relevant to their skills, experience, and industry.

Profile Data: {{{profileData}}}
Current Connections: {{#each currentConnections}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Number of Suggestions: {{{numberOfSuggestions}}}

Suggested Connections:`, 
});

const aiSuggestedConnectionsFlow = ai.defineFlow(
  {
    name: 'aiSuggestedConnectionsFlow',
    inputSchema: AISuggestedConnectionsInputSchema,
    outputSchema: AISuggestedConnectionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
