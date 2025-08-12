import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'matching' | 'drag-drop';
  question: string;
  options?: { value: string; label: string }[];
  correctAnswer: string | string[];
  blanks?: string[];
  pairs?: { left: string; right: string }[];
  feedback: {
    correct: string;
    incorrect: string;
  };
  points: number;
}

const interactiveQuizData: QuizQuestion[] = [
  {
    id: "q1",
    type: "multiple-choice",
    question: "Protokol internet yang menggunakan enkripsi dan ditandai dengan icon gembok adalah?",
    options: [
      { value: "http", label: "HTTP" },
      { value: "https", label: "HTTPS" },
      { value: "ftp", label: "FTP" },
      { value: "tcp", label: "TCP" }
    ],
    correctAnswer: "https",
    feedback: {
      correct: "Perfect! 🔒 HTTPS memang protocol yang aman dengan enkripsi SSL/TLS!",
      incorrect: "Oops! HTTPS yang benar ya. HTTP biasa nggak aman, data bisa disadap! 🚨"
    },
    points: 10
  },
  {
    id: "q2",
    type: "true-false",
    question: "Stack menggunakan prinsip LIFO (Last In First Out), sedangkan Queue menggunakan prinsip FIFO (First In First Out).",
    options: [
      { value: "true", label: "BENAR ✅" },
      { value: "false", label: "SALAH ❌" }
    ],
    correctAnswer: "true",
    feedback: {
      correct: "Mantap! 📦 Stack kayak tumpukan piring, Queue kayak antrian bank!",
      incorrect: "Hmm, coba ingat lagi! Stack itu LIFO, Queue itu FIFO ya! 🔄"
    },
    points: 15
  },
  {
    id: "q3",
    type: "fill-blank",
    question: "Berpikir komputasional memiliki 4 elemen utama: _____, Pengenalan Pola, _____, dan Desain Algoritma.",
    blanks: ["Dekomposisi", "Abstraksi"],
    correctAnswer: ["dekomposisi", "abstraksi"],
    feedback: {
      correct: "Excellent! 🧩 Keempat elemen ini fundamental dalam problem solving!",
      incorrect: "Almost! Jawabannya: Dekomposisi dan Abstraksi. Keep learning! 💡"
    },
    points: 20
  },
  {
    id: "q4",
    type: "matching",
    question: "Cocokkan struktur data dengan contoh penggunaannya yang tepat:",
    pairs: [
      { left: "Stack", right: "Undo/Redo di Text Editor" },
      { left: "Queue", right: "Antrian Print Document" },
      { left: "Array", right: "Menyimpan Inventory Game" }
    ],
    correctAnswer: ["Stack-Undo/Redo di Text Editor", "Queue-Antrian Print Document", "Array-Menyimpan Inventory Game"],
    feedback: {
      correct: "Amazing! 🎯 Kamu benar-benar paham aplikasi struktur data!",
      incorrect: "Good try! Stack untuk Undo/Redo, Queue untuk antrian, Array untuk inventory! 📚"
    },
    points: 25
  },
  {
    id: "q5",
    type: "multiple-choice",
    question: "Manakah yang BUKAN termasuk dalam Digital Citizenship yang baik?",
    options: [
      { value: "fact-check", label: "Fact-checking sebelum share berita" },
      { value: "privacy", label: "Mengatur privacy settings dengan baik" },
      { value: "cyberbully", label: "Cyberbullying untuk 'mendidik' orang" },
      { value: "copyright", label: "Menghormati copyright dan credit creator" }
    ],
    correctAnswer: "cyberbully",
    feedback: {
      correct: "Benar! 🛡️ Cyberbullying never acceptable, no matter the reason!",
      incorrect: "Cyberbullying itu selalu salah ya! Be a good digital citizen! 🌟"
    },
    points: 15
  },
  {
    id: "q6",
    type: "multiple-choice",
    question: "Apa yang terjadi jika kita membuka email dari pengirim yang tidak dikenal?",
    options: [
      { value: "safe", label: "Aman, langsung buka attachment-nya" },
      { value: "dangerous", label: "Berbahaya, bisa berisi virus atau phishing" },
      { value: "fun", label: "Menyenangkan, pasti ada hadiah" },
      { value: "normal", label: "Biasa saja, semua email aman" }
    ],
    correctAnswer: "dangerous",
    feedback: {
      correct: "Smart! 🚨 Email dari pengirim tidak dikenal bisa berisi malware atau phishing scam!",
      incorrect: "Hati-hati! Email tidak dikenal bisa berbahaya. Jangan buka attachment sembarangan! 🛡️"
    },
    points: 12
  },
  {
    id: "q7",
    type: "fill-blank",
    question: "Dalam algoritma pencarian, _____ adalah cara mencari data dengan memeriksa satu per satu, sedangkan _____ adalah cara mencari data yang sudah terurut.",
    blanks: ["Linear Search", "Binary Search"],
    correctAnswer: ["linear search", "binary search"],
    feedback: {
      correct: "Brilliant! 🔍 Linear search seperti mencari kunci di tas, binary search seperti mencari halaman di buku!",
      incorrect: "Linear search = cek satu-satu, Binary search = cek tengah lalu buang setengah! 📖"
    },
    points: 18
  },
  {
    id: "q8",
    type: "true-false",
    question: "Password yang kuat harus mengandung huruf besar, huruf kecil, angka, dan simbol khusus.",
    options: [
      { value: "true", label: "BENAR ✅" },
      { value: "false", label: "SALAH ❌" }
    ],
    correctAnswer: "true",
    feedback: {
      correct: "Excellent! 🔐 Password kuat = kombinasi kompleks = sulit di-hack!",
      incorrect: "Password '123456' itu lemah banget! Gunakan kombinasi kompleks ya! 💪"
    },
    points: 14
  },
  {
    id: "q9",
    type: "matching",
    question: "Pasangkan jenis malware dengan ciri-cirinya:",
    pairs: [
      { left: "Virus", right: "Menyebar melalui file yang dijalankan" },
      { left: "Worm", right: "Menyebar sendiri tanpa bantuan user" },
      { left: "Trojan", right: "Menyamar sebagai program yang aman" }
    ],
    correctAnswer: ["Virus-Menyebar melalui file yang dijalankan", "Worm-Menyebar sendiri tanpa bantuan user", "Trojan-Menyamar sebagai program yang aman"],
    feedback: {
      correct: "Awesome! 🦠 Kamu paham betul jenis-jenis malware yang berbahaya!",
      incorrect: "Virus butuh file, Worm mandiri, Trojan menyamar! Pelajari lagi ya! 📚"
    },
    points: 22
  },
  {
    id: "q10",
    type: "multiple-choice",
    question: "Apa yang harus dilakukan jika komputer terkena virus?",
    options: [
      { value: "ignore", label: "Dibiarkan saja, nanti hilang sendiri" },
      { value: "share", label: "Share ke teman-teman untuk diketahui" },
      { value: "scan", label: "Scan dengan antivirus dan update sistem" },
      { value: "delete", label: "Hapus semua file di komputer" }
    ],
    correctAnswer: "scan",
    feedback: {
      correct: "Perfect! 🛡️ Scan antivirus + update sistem = cara terbaik atasi virus!",
      incorrect: "Jangan dibiarkan! Virus bisa merusak data. Segera scan dan update! 🚨"
    },
    points: 16
  },
  {
    id: "q11",
    type: "fill-blank",
    question: "Dalam jaringan komputer, _____ adalah perangkat yang menghubungkan beberapa komputer, sedangkan _____ adalah perangkat yang mengarahkan data ke tujuan yang tepat.",
    blanks: ["Switch", "Router"],
    correctAnswer: ["switch", "router"],
    feedback: {
      correct: "Amazing! 🌐 Switch = hub lokal, Router = traffic controller internet!",
      incorrect: "Switch untuk hub lokal, Router untuk arahkan data ke internet! 🌍"
    },
    points: 20
  },
  {
    id: "q12",
    type: "true-false",
    question: "Menggunakan WiFi publik tanpa VPN itu aman karena sudah ada password.",
    options: [
      { value: "true", label: "BENAR ✅" },
      { value: "false", label: "SALAH ❌" }
    ],
    correctAnswer: "false",
    feedback: {
      correct: "Smart! 🚫 WiFi publik tetap berbahaya meski ada password. Gunakan VPN!",
      incorrect: "WiFi publik bisa di-sniff! Selalu gunakan VPN untuk keamanan! 🔒"
    },
    points: 13
  },
  {
    id: "q13",
    type: "multiple-choice",
    question: "Apa yang dimaksud dengan 'phishing' dalam keamanan digital?",
    options: [
      { value: "fishing", label: "Kegiatan memancing ikan di laut" },
      { value: "scam", label: "Penipuan untuk mencuri data pribadi" },
      { value: "hacking", label: "Membobol sistem komputer" },
      { value: "gaming", label: "Bermain game online" }
    ],
    correctAnswer: "scam",
    feedback: {
      correct: "Excellent! 🎣 Phishing = memancing korban dengan umpan palsu untuk curi data!",
      incorrect: "Phishing bukan memancing ikan! Ini penipuan digital yang berbahaya! 🚨"
    },
    points: 15
  },
  {
    id: "q14",
    type: "matching",
    question: "Cocokkan istilah keamanan digital dengan artinya:",
    pairs: [
      { left: "Firewall", right: "Tembok api yang memblokir serangan" },
      { left: "Encryption", right: "Mengubah data menjadi kode rahasia" },
      { left: "Backup", right: "Salinan data untuk keamanan" }
    ],
    correctAnswer: ["Firewall-Tembok api yang memblokir serangan", "Encryption-Mengubah data menjadi kode rahasia", "Backup-Salinan data untuk keamanan"],
    feedback: {
      correct: "Brilliant! 🔥 Firewall = pelindung, Encryption = pengaman, Backup = cadangan!",
      incorrect: "Firewall = blokir serangan, Encryption = kode rahasia, Backup = salinan data! 🛡️"
    },
    points: 24
  },
  {
    id: "q15",
    type: "fill-blank",
    question: "Dalam algoritma sorting, _____ adalah cara mengurutkan dengan membandingkan dan menukar elemen berdekatan, sedangkan _____ adalah cara mengurutkan dengan membagi data menjadi dua bagian.",
    blanks: ["Bubble Sort", "Merge Sort"],
    correctAnswer: ["bubble sort", "merge sort"],
    feedback: {
      correct: "Fantastic! 🫧 Bubble sort = gelembung naik, Merge sort = gabung dua bagian!",
      incorrect: "Bubble sort = tukar berdekatan, Merge sort = bagi dan gabung! 📊"
    },
    points: 21
  },
  {
    id: "q16",
    type: "multiple-choice",
    question: "Apa yang harus dilakukan jika menemukan konten tidak pantas di internet?",
    options: [
      { value: "share", label: "Share ke semua teman untuk diketahui" },
      { value: "report", label: "Report ke platform dan jangan share" },
      { value: "ignore", label: "Dibiarkan saja, bukan urusan kita" },
      { value: "download", label: "Download untuk bukti" }
    ],
    correctAnswer: "report",
    feedback: {
      correct: "Perfect! 🚨 Report konten tidak pantas, jangan share yang bisa merugikan orang lain!",
      incorrect: "Jangan share konten tidak pantas! Report saja ke platform yang bersangkutan! 🛡️"
    },
    points: 17
  },
  {
    id: "q17",
    type: "true-false",
    question: "Menggunakan software bajakan itu tidak masalah karena gratis dan bisa hemat uang.",
    options: [
      { value: "true", label: "BENAR ✅" },
      { value: "false", label: "SALAH ❌" }
    ],
    correctAnswer: "false",
    feedback: {
      correct: "Smart! ⚖️ Software bajakan = melanggar hukum dan tidak aman!",
      incorrect: "Software bajakan ilegal dan berbahaya! Gunakan alternatif gratis yang legal! 🚫"
    },
    points: 14
  },
  {
    id: "q18",
    type: "fill-blank",
    question: "Dalam database, _____ adalah kumpulan data yang saling berhubungan, sedangkan _____ adalah baris data dalam tabel.",
    blanks: ["Database", "Record"],
    correctAnswer: ["database", "record"],
    feedback: {
      correct: "Excellent! 🗄️ Database = gudang data, Record = satu baris data!",
      incorrect: "Database = kumpulan data, Record = baris dalam tabel! 📋"
    },
    points: 19
  },
  {
    id: "q19",
    type: "multiple-choice",
    question: "Apa yang dimaksud dengan 'cloud computing'?",
    options: [
      { value: "clouds", label: "Komputasi di awan yang tinggi" },
      { value: "internet", label: "Layanan komputasi melalui internet" },
      { value: "weather", label: "Prediksi cuaca dengan komputer" },
      { value: "gaming", label: "Bermain game di langit" }
    ],
    correctAnswer: "internet",
    feedback: {
      correct: "Amazing! ☁️ Cloud computing = akses layanan komputer dari mana saja via internet!",
      incorrect: "Cloud computing bukan di awan sungguhan! Ini layanan komputasi online! 🌐"
    },
    points: 16
  },
  {
    id: "q20",
    type: "matching",
    question: "Pasangkan teknologi dengan manfaatnya:",
    pairs: [
      { left: "AI", right: "Membantu otomatisasi dan pengambilan keputusan" },
      { left: "IoT", right: "Menghubungkan perangkat sehari-hari" },
      { left: "Blockchain", right: "Mencatat transaksi dengan aman" }
    ],
    correctAnswer: ["AI-Membantu otomatisasi dan pengambilan keputusan", "IoT-Menghubungkan perangkat sehari-hari", "Blockchain-Mencatat transaksi dengan aman"],
    feedback: {
      correct: "Brilliant! 🤖 AI = otomatisasi, IoT = koneksi, Blockchain = keamanan!",
      incorrect: "AI untuk otomatisasi, IoT untuk koneksi, Blockchain untuk keamanan! 🚀"
    },
    points: 25
  }
];

export const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [submitted, setSubmitted] = useState<{ [key: string]: boolean }>({});
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  
  const maxScore = interactiveQuizData.reduce((sum, q) => sum + q.points, 0);
  const question = interactiveQuizData[currentQuestion];
  const isLastQuestion = currentQuestion === interactiveQuizData.length - 1;
  const userAnswer = answers[question.id];
  const isSubmitted = submitted[question.id];

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({ ...prev, [question.id]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(prev => ({ ...prev, [question.id]: true }));
    
    // Check if answer is correct and calculate score
    let isCorrect = false;
    if (question.type === 'fill-blank') {
      const userAnswers = userAnswer?.map((ans: string) => ans.toLowerCase().trim()) || [];
      const correctAnswers = question.correctAnswer as string[];
      isCorrect = userAnswers.length === correctAnswers.length && 
                 userAnswers.every((ans: string, idx: number) => ans === correctAnswers[idx]);
    } else if (question.type === 'matching') {
      // Simplified matching check
      isCorrect = Array.isArray(userAnswer) && userAnswer.length === 3;
    } else {
      isCorrect = userAnswer === question.correctAnswer;
    }
    
    if (isCorrect) {
      setTotalScore(prev => prev + question.points);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple-choice':
      case 'true-false':
        return (
          <RadioGroup
            value={userAnswer || ""}
            onValueChange={handleAnswer}
            disabled={isSubmitted}
            className="space-y-3"
          >
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/5 border border-transparent hover:border-accent/20">
                <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                <Label 
                  htmlFor={`${question.id}-${option.value}`}
                  className="text-base font-medium cursor-pointer flex-1"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'fill-blank':
        return (
          <div className="space-y-4">
            <p className="text-lg">{question.question}</p>
            <div className="space-y-3">
              {question.blanks?.map((blank, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`blank-${index}`} className="text-sm font-medium">
                    Blank {index + 1}: {blank}
                  </Label>
                  <Input
                    id={`blank-${index}`}
                    placeholder={`Isi jawaban untuk blank ${index + 1}...`}
                    value={userAnswer?.[index] || ""}
                    onChange={(e) => {
                      const newAnswers = [...(userAnswer || [])];
                      newAnswers[index] = e.target.value;
                      handleAnswer(newAnswers);
                    }}
                    disabled={isSubmitted}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 'matching':
        return (
          <div className="space-y-4">
            <p className="text-lg mb-4">{question.question}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Struktur Data:</h4>
                {question.pairs?.map((pair, index) => (
                  <div key={index} className="p-3 bg-primary/10 rounded-lg border">
                    <Label className="font-medium">{pair.left}</Label>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Penggunaan:</h4>
                {question.pairs?.map((pair, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox
                      id={`match-${index}`}
                      checked={userAnswer?.includes(`${pair.left}-${pair.right}`) || false}
                      onCheckedChange={(checked) => {
                        const matchString = `${pair.left}-${pair.right}`;
                        if (checked) {
                          handleAnswer([...(userAnswer || []), matchString]);
                        } else {
                          handleAnswer((userAnswer || []).filter((item: string) => item !== matchString));
                        }
                      }}
                      disabled={isSubmitted}
                    />
                    <Label htmlFor={`match-${index}`} className="flex-1 cursor-pointer">
                      {pair.right}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showResults) {
    const percentage = (totalScore / maxScore) * 100;
    return (
      <Card className="card-modern border-2 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gradient text-center">
            🏆 Hasil Kuis Interaktif! 🎉
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="text-8xl animate-bounce">
            {percentage >= 80 ? "🥇" : percentage >= 60 ? "🥈" : "🥉"}
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border-2 border-primary/20">
              <p className="text-4xl font-bold text-primary mb-2">
                {totalScore}/{maxScore} Poin
              </p>
              <p className="text-xl font-semibold text-accent">
                {percentage.toFixed(1)}% - {
                  percentage >= 90 ? "Outstanding! Kamu genius! 🧠✨" :
                  percentage >= 80 ? "Excellent! Future programmer! 🚀" :
                  percentage >= 70 ? "Good job! Keep learning! 📚" :
                  percentage >= 60 ? "Not bad! Practice more! 💪" :
                  "Keep trying! You can do it! 🌟"
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {interactiveQuizData.map((q, index) => {
                const userAns = answers[q.id];
                let isCorrect = false;
                
                if (q.type === 'fill-blank') {
                  const userAnswers = userAns?.map((ans: string) => ans.toLowerCase().trim()) || [];
                  const correctAnswers = q.correctAnswer as string[];
                  isCorrect = userAnswers.length === correctAnswers.length && 
                             userAnswers.every((ans: string, idx: number) => ans === correctAnswers[idx]);
                } else if (q.type === 'matching') {
                  isCorrect = Array.isArray(userAns) && userAns.length === 3;
                } else {
                  isCorrect = userAns === q.correctAnswer;
                }
                
                return (
                  <div key={q.id} className={`p-4 rounded-lg border-2 ${isCorrect ? 'quiz-correct' : 'quiz-incorrect'}`}>
                    <p className="font-medium mb-2">Q{index + 1}: {q.question.substring(0, 50)}...</p>
                    <p className="text-sm">
                      {isCorrect ? q.feedback.correct : q.feedback.incorrect}
                    </p>
                    <p className="text-xs mt-1 font-bold">
                      {isCorrect ? `+${q.points} poin` : '0 poin'}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 space-y-4">
              <Input
                type="text"
                placeholder="Nama Lengkap"
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
                required
                className="w-full"
              />
              <Input
                type="text"
                placeholder="Kelas (misal: X-1)"
                value={studentClass}
                onChange={e => setStudentClass(e.target.value)}
                required
                className="w-full"
              />
              <Button
                className="w-full"
                disabled={!studentName || !studentClass}
                onClick={() => {
                  const waNumber = "6285785377790";
                  const waText = encodeURIComponent(
                    `Nama: ${studentName}\nKelas: ${studentClass}\nSkor: ${totalScore}/${maxScore}\nJawaban: ${JSON.stringify(answers, null, 2)}`
                  );
                  window.open(`https://wa.me/${waNumber}?text=${waText}`);
                }}
              >
                Kirim ke WhatsApp Guru
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-modern border-2 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gradient flex items-center justify-between">
          <span>🧠 Kuis Interaktif - Informatika Kelas X</span>
          <span className="text-sm bg-accent/20 px-3 py-1 rounded-full">
            {currentQuestion + 1}/{interactiveQuizData.length}
          </span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Poin untuk soal ini: {question.points}</span>
          <span>Total skor: {totalScore}</span>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {question.question}
            </h3>
            
            {renderQuestion()}
          </div>
          
          {!isSubmitted && (
            <Button
              onClick={handleSubmit}
              disabled={!userAnswer || (Array.isArray(userAnswer) && userAnswer.length === 0)}
              className="btn-hero w-full"
            >
              Submit Jawaban 🚀
            </Button>
          )}
          
          {isSubmitted && (
            <div className={(() => {
              if (question.type === 'fill-blank') {
                const userAnswers = userAnswer?.map((ans: string) => ans.toLowerCase().trim()) || [];
                const correctAnswers = question.correctAnswer as string[];
                return userAnswers.length === correctAnswers.length && userAnswers.every((ans: string, idx: number) => ans === correctAnswers[idx])
                  ? 'quiz-correct p-4 rounded-lg border-2'
                  : 'quiz-feedback-wrong';
                } else if (question.type === 'matching') {
                  return Array.isArray(userAnswer) && userAnswer.length === 3
                    ? 'quiz-correct p-4 rounded-lg border-2'
                    : 'quiz-feedback-wrong';
                } else {
                  return userAnswer === question.correctAnswer
                    ? 'quiz-correct p-4 rounded-lg border-2'
                    : 'quiz-feedback-wrong';
                }
              })()}>
                <p className="font-semibold">
                  {(() => {
                    if (question.type === 'fill-blank') {
                      const userAnswers = userAnswer?.map((ans: string) => ans.toLowerCase().trim()) || [];
                      const correctAnswers = question.correctAnswer as string[];
                      const isCorrect = userAnswers.length === correctAnswers.length && userAnswers.every((ans: string, idx: number) => ans === correctAnswers[idx]);
                      return isCorrect ? question.feedback.correct : question.feedback.incorrect;
                    } else if (question.type === 'matching') {
                      const isCorrect = Array.isArray(userAnswer) && userAnswer.length === 3;
                      return isCorrect ? question.feedback.correct : question.feedback.incorrect;
                    } else {
                      return userAnswer === question.correctAnswer ? question.feedback.correct : question.feedback.incorrect;
                    }
                  })()}
                </p>
              </div>
          )}
          
          {isSubmitted && (
            <div className="flex gap-2">
              {currentQuestion > 0 && (
                <Button onClick={handlePrevious} variant="outline" className="flex-1">
                  ⬅️ Sebelumnya
                </Button>
              )}
              <Button onClick={handleNext} className="flex-1">
                {isLastQuestion ? "🏁 Lihat Hasil" : "Selanjutnya ➡️"}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};