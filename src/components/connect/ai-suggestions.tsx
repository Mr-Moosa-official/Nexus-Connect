'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getUserById } from '@/lib/data';
import { getAiSuggestionsAction } from '@/actions';
import { Wand2, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AiSuggestions() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetSuggestions = async () => {
    setLoading(true);
    setError(null);
    setSuggestions([]);
    const currentUser = getUserById('1');
    if (currentUser) {
      const result = await getAiSuggestionsAction(currentUser);
      if (result.error) {
        setError(result.error);
      } else {
        setSuggestions(result.suggestions || []);
      }
    } else {
      setError('Could not find current user.');
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          Smart Suggestions
        </CardTitle>
        <CardDescription>
          Let our AI help you find relevant connections based on your profile.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {suggestions.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center text-center p-6 border-2 border-dashed rounded-lg">
            <p className="mb-4 text-muted-foreground">Click the button to generate AI-powered connection suggestions.</p>
            <Button onClick={handleGetSuggestions}>
              <Wand2 className="mr-2 h-4 w-4" />
              Generate Suggestions
            </Button>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center p-6">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4">Finding connections...</p>
          </div>
        )}

        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {suggestions.length > 0 && (
          <div>
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="p-3 bg-secondary rounded-md text-sm">{suggestion}</li>
              ))}
            </ul>
             <Button onClick={handleGetSuggestions} variant="outline" className="mt-4">
              <Wand2 className="mr-2 h-4 w-4" />
              Regenerate
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
