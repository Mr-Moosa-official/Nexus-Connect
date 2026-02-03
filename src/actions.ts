'use server';

import { aiSuggestedConnections } from '@/ai/flows/ai-suggested-connections';
import { generateProfileSummary } from '@/ai/flows/profile-summary-generator';
import { users } from '@/lib/data';
import type { User } from '@/lib/types';

export async function getAiSuggestionsAction(currentUser: User) {
  try {
    const profileData = `
      Name: ${currentUser.name}
      Headline: ${currentUser.headline}
      Industry: ${currentUser.industry}
      Skills: ${currentUser.skills.join(', ')}
      Experience: ${currentUser.experience.map((e) => `${e.title} at ${e.company}`).join('; ')}
    `;

    const currentConnectionNames = currentUser.connections
      .map((id) => users.find((u) => u.id === id)?.name)
      .filter(Boolean) as string[];

    const result = await aiSuggestedConnections({
      profileData,
      currentConnections: currentConnectionNames,
      numberOfSuggestions: 5,
    });
    
    return { suggestions: result.suggestedConnections };
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    return { error: 'Failed to get AI suggestions.' };
  }
}

export async function generateSummaryAction(formData: {
  skills: string;
  experience: string;
  careerGoals: string;
}) {
  try {
    const result = await generateProfileSummary(formData);
    return { summary: result.summary };
  } catch (error) {
    console.error('Error generating profile summary:', error);
    return { error: 'Failed to generate summary.' };
  }
}
