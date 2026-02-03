import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type SummarySectionProps = {
  summary: string;
};

export default function SummarySection({ summary }: SummarySectionProps) {
    if (!summary) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm whitespace-pre-wrap">{summary}</p>
      </CardContent>
    </Card>
  );
}
