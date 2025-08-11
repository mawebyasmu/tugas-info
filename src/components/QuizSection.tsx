import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string }[];
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

export const QuizSection = ({ title, questions, showScore = false }: QuizSectionProps) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (questionId: string) => {
    setSubmitted(prev => ({ ...prev, [questionId]: true }));
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
    return { correct, total: questions.length };
  };

  const getScoreMessage = (score: { correct: number; total: number }) => {
    const percentage = (score.correct / score.total) * 100;
    if (percentage === 100) return "Keren! Kamu programmer masa depan! 🏅✨";
    if (percentage >= 80) return "Bagus banget! Keep it up! 🚀";
    if (percentage >= 60) return "Lumayan! Belajar lagi yuk! 📚💪";
    return "Coba lagi bro! Kamu pasti bisa! 💡🔥";
  };

  return (
    <Card className="card-modern border-2 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gradient flex items-center gap-2">
          🧠 {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {questions.map((question) => {
          const isSubmitted = submitted[question.id];
          const userAnswer = answers[question.id];
          const isCorrect = userAnswer === question.correctAnswer;

          return (
            <div key={question.id} className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                {question.question}
              </h4>
              
              <RadioGroup
                value={userAnswer || ""}
                onValueChange={(value) => handleAnswerChange(question.id, value)}
                disabled={isSubmitted}
              >
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                    <Label 
                      htmlFor={`${question.id}-${option.value}`}
                      className="text-sm font-medium cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {!showScore && (
                <Button
                  onClick={() => handleSubmit(question.id)}
                  disabled={!userAnswer || isSubmitted}
                  className="btn-hero"
                >
                  {isSubmitted ? "Jawaban Terkirim ✅" : "Submit Jawaban 🚀"}
                </Button>
              )}

              {isSubmitted && (
                <div className={`p-4 rounded-lg border-2 ${isCorrect ? 'quiz-correct' : 'quiz-incorrect'}`}>
                  <p className="font-semibold">
                    {isCorrect ? question.feedback.correct : question.feedback.incorrect}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {showScore && (
          <div className="space-y-4">
            <Button
              onClick={handleSubmitAll}
              disabled={questions.some(q => !answers[q.id]) || showResults}
              className="btn-hero w-full"
            >
              {showResults ? "Hasil Sudah Ditampilkan ✅" : "Lihat Hasil Kuis Total 🏆"}
            </Button>

            {showResults && (
              <div className="text-center space-y-4 animate-bounce-in">
                <div className="p-6 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent">
                  <h3 className="text-2xl font-bold text-accent-gradient mb-2">
                    Hasil Kuis Total! 🎉
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-2">
                    Skor: {getScore().correct}/{getScore().total}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {getScoreMessage(getScore())}
                  </p>
                </div>
                
                {questions.map((question) => {
                  const userAnswer = answers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className={`p-4 rounded-lg border-2 ${isCorrect ? 'quiz-correct' : 'quiz-incorrect'}`}>
                      <p className="font-medium mb-2">{question.question}</p>
                      <p className="text-sm">
                        {isCorrect ? question.feedback.correct : question.feedback.incorrect}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};