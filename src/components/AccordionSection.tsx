import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AccordionTopic {
  id: string;
  title: string;
  content: string;
  emoji: string;
}

interface AccordionSectionProps {
  title: string;
  emoji: string;
  topics: AccordionTopic[];
}

export const AccordionSection = ({ title, emoji, topics }: AccordionSectionProps) => {
  return (
    <Card className="card-modern border-2 animate-slide-up">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-gradient flex items-center gap-3">
          {emoji} {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="space-y-4">
          {topics.map((topic) => (
            <AccordionItem 
              key={topic.id} 
              value={topic.id}
              className="border-2 border-border rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <span className="text-lg font-semibold flex items-center gap-3">
                  <span className="text-2xl">{topic.emoji}</span>
                  {topic.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div 
                  className="text-foreground leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: topic.content }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};