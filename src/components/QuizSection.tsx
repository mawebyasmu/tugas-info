import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
interface QuizQuestion {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
  }[];
  correctAnswer: string;
  feedback: {
    correct: string;
    incorrect: string;
  };
}
interface QuizSectionProps {
  title: string;
  questions: QuizQuestion[];
  showScore?: boolean;
}
export const QuizSection = ({
  title,
  questions,
  showScore = false
}: QuizSectionProps) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };
  const handleSubmit = (questionId: string) => {
    setSubmitted(prev => ({
      ...prev,
      [questionId]: true
    }));
    if (showScore) {
      // For total quiz, show results after all questions
      const allAnswered = questions.every(q => answers[q.id]);
      if (allAnswered) {
        setShowResults(true);
      }
    }
  };
  const handleSubmitAll = () => {
    const newSubmitted: Record<string, boolean> = {};
    questions.forEach(q => {
      newSubmitted[q.id] = true;
    });
    setSubmitted(newSubmitted);
    setShowResults(true);
  };
  const getScore = () => {
    const correct = questions.filter(q => answers[q.id] === q.correctAnswer).length;
    return {
      correct,
      total: questions.length
    };
  };
  const getScoreMessage = (score: {
    correct: number;
    total: number;
  }) => {
    const percentage = score.correct / score.total * 100;
    if (percentage === 100) return "Keren! Kamu programmer masa depan! 🏅✨";
    if (percentage >= 80) return "Bagus banget! Keep it up! 🚀";
    if (percentage >= 60) return "Lumayan! Belajar lagi yuk! 📚💪";
    return "Coba lagi bro! Kamu pasti bisa! 💡🔥";
  };
  return <Card className="card-modern border-2 animate-fade-in">
      
      
    </Card>;
};