import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AccordionSection } from "@/components/AccordionSection";
import { QuizSection } from "@/components/QuizSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Data untuk materi Informatika dan Kemampuan Umum
  const informatikaTopics = [
    {
      id: "pengertian",
      title: "Pengertian Informatika",
      emoji: "💡",
      content: `
        <p><strong>Informatika itu kayak otaknya komputer, bro! 😎</strong></p>
        <p>Informatika adalah ilmu yang mempelajari pemrosesan informasi menggunakan komputer. Bayangin aja, semua yang ada di HP kalian - dari Instagram, TikTok, sampai game favorit - semuanya hasil dari ilmu informatika!</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🖥️ Perangkat Keras (Hardware)</h4>
        <ul class="list-disc list-inside space-y-1">
          <li>Processor (CPU) - otaknya komputer</li>
          <li>Memory (RAM) - tempat nyimpen data sementara</li>
          <li>Storage (HDD/SSD) - tempat nyimpen data permanen</li>
          <li>Input/Output devices - keyboard, mouse, monitor</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">💾 Perangkat Lunak (Software)</h4>
        <ul class="list-disc list-inside space-y-1">
          <li>Sistem Operasi (Windows, macOS, Linux)</li>
          <li>Aplikasi (Browser, Game, Editor)</li>
          <li>Programming Languages (Python, JavaScript, C++)</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🌍 Dampak Sosial</h4>
        <p>E-commerce kayak Shopee, Tokopedia udah ngubah cara kita belanja. Sekarang tinggal klik-klik aja, barang sampai di rumah! 📦✨</p>
      `
    },
    {
      id: "kemampuan",
      title: "Kemampuan Umum dalam Informatika",
      emoji: "🚀",
      content: `
        <p><strong>Skills yang harus dikuasai buat jadi pro di dunia digital! 💪</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🤝 Kolaborasi</h4>
        <p>Kerja tim itu penting banget! Kayak bikin project bareng temen, harus bisa komunikasi dan bagi tugas dengan baik.</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🎯 Definisi Masalah</h4>
        <p>Sebelum coding, harus tau dulu masalahnya apa. Kayak mau bikin app, tujuannya buat apa? Siapa yang bakal pakai?</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔍 Abstraksi</h4>
        <p>Fokus ke hal-hal penting aja, abaikan detail yang nggak perlu. Kayak pas bikin flowchart, fokus ke alur utamanya dulu.</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📢 Komunikasi Hasil</h4>
        <p>Bisa jelasin hasil kerja ke orang lain dengan simple dan mudah dimengerti.</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📊 Contoh: Infografis Anti-Hoax</h4>
        <p>Bikin poster digital yang ngasih tau cara bedain berita hoax vs fakta. Pake visual menarik biar mudah dipahami! 🛡️</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔒 Keamanan HTTPS</h4>
        <p>Kalau liat website ada "https://" dan icon gembok 🔒, itu artinya koneksi kalian aman. Data yang dikirim udah dienkripsi jadi nggak bisa dibaca sama hacker!</p>
      `
    }
  ];

  // Data untuk materi Berpikir Komputasional
  const berpikirTopics = [
    {
      id: "elemen",
      title: "Elemen Berpikir Komputasional",
      emoji: "🧩",
      content: `
        <p><strong>4 Elemen Super Power buat solve masalah kayak programmer! 🦸‍♂️</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔨 Dekomposisi</h4>
        <p>Pecah masalah besar jadi bagian-bagian kecil. Kayak mau bikin website, dipecah jadi: header, navbar, content, footer. Lebih gampang kan? 🧱</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔍 Pengenalan Pola</h4>
        <p>Cari kesamaan atau pola dari masalah yang udah pernah diselesaikan. Misalnya, cara login di Instagram mirip sama cara login di TikTok! 🔄</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">✨ Abstraksi</h4>
        <p>Fokus ke hal penting, ignore yang nggak perlu. Pas bikin algoritma sorting, yang penting itu logiknnya, bukan warna atau font yang dipake! 📝</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">⚙️ Desain Algoritma</h4>
        <p>Bikin langkah-langkah detail buat solve masalah. Kayak resep masak, step by step sampai kelar! 👨‍🍳</p>
        
        <div class="bg-accent/10 p-4 rounded-lg mt-4">
          <p class="font-semibold">💡 Contoh Real Life:</p>
          <p>Mau bikin sistem presensi online? <br/>
          1. <strong>Dekomposisi:</strong> Login → Pilih Kelas → Absen → Konfirmasi <br/>
          2. <strong>Pola:</strong> Mirip sama sistem vote online <br/>
          3. <strong>Abstraksi:</strong> Fokus ke database siswa & waktu <br/>
          4. <strong>Algoritma:</strong> IF siswa terdaftar THEN simpan data absen</p>
        </div>
      `
    },
    {
      id: "struktur",
      title: "Struktur Data Sederhana",
      emoji: "📚",
      content: `
        <p><strong>Cara komputer nyimpen dan ngatur data, super cool! 🤓</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📦 Stack (LIFO - Last In First Out)</h4>
        <p>Kayak tumpukan piring! Yang terakhir ditaro, yang pertama diambil. Perfect buat fitur <strong>Undo/Redo</strong> di editor! ↩️</p>
        
        <div class="bg-secondary/10 p-4 rounded-lg mt-2 mb-4">
          <p class="font-semibold">Contoh Stack:</p>
          <p>1. Ketik "Hello" → push ke stack <br/>
          2. Ketik "World" → push ke stack <br/>
          3. Pencet Ctrl+Z → pop "World" (yang terakhir) <br/>
          4. Pencet Ctrl+Z lagi → pop "Hello"</p>
          <p class="text-sm mt-2">Stack: [Hello] → [Hello, World] → [Hello] → []</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🚶‍♂️ Queue (FIFO - First In First Out)</h4>
        <p>Kayak antrian di kantin! Yang pertama ngantri, yang pertama dilayani. Perfect buat sistem <strong>antrian print</strong> atau <strong>playlist musik</strong>! 🎵</p>
        
        <div class="bg-primary/10 p-4 rounded-lg mt-2">
          <p class="font-semibold">Contoh Queue:</p>
          <p>1. Andi print dokumen → masuk queue <br/>
          2. Budi print tugas → masuk queue <br/>
          3. Printer selesai → Andi keluar queue (yang pertama) <br/>
          4. Printer siap lagi → Budi keluar queue</p>
          <p class="text-sm mt-2">Queue: [Andi] → [Andi, Budi] → [Budi] → []</p>
        </div>
        
        <div class="bg-accent/10 p-4 rounded-lg mt-4">
          <p class="font-semibold">🎮 Fun Fact:</p>
          <p>Game favorit kalian juga pake struktur data ini loh! Stack buat nyimpen history move, Queue buat matchmaking player! 🎯</p>
        </div>
      `
    }
  ];

  // Data kuis untuk setiap section
  const informatikaQuiz = [
    {
      id: "informatika-q1",
      question: "Apa protokol aman untuk internet yang ditandai dengan icon gembok? 🔒",
      options: [
        { value: "http", label: "HTTP" },
        { value: "https", label: "HTTPS" }
      ],
      correctAnswer: "https",
      feedback: {
        correct: "Benar! Kamu pro keamanan data! 🔒🚀 HTTPS mengenkripsi data kamu jadi aman dari hacker!",
        incorrect: "Salah, jawabannya HTTPS. HTTP itu nggak aman bro, data bisa dibaca sama orang lain! Baca lagi yuk! 💡"
      }
    }
  ];

  const berpikirQuiz = [
    {
      id: "berpikir-q1", 
      question: "Apa singkatan dari FIFO dalam struktur data Queue? 📚",
      options: [
        { value: "fifo", label: "First In First Out" },
        { value: "lifo", label: "Last In First Out" }
      ],
      correctAnswer: "fifo",
      feedback: {
        correct: "Keren! Seperti antrian asli! 📋🌟 Yang pertama masuk, yang pertama keluar!",
        incorrect: "Ups, jawabannya First In First Out. LIFO itu untuk Stack ya! Keep learning! 📘"
      }
    }
  ];

  const totalQuiz = [
    {
      id: "total-q1",
      question: "Protokol internet yang aman dan dienkripsi adalah? 🔐",
      options: [
        { value: "http", label: "HTTP" },
        { value: "https", label: "HTTPS" }
      ],
      correctAnswer: "https",
      feedback: {
        correct: "Perfect! Kamu tau keamanan internet! 🛡️✨",
        incorrect: "HTTPS yang benar! HTTP nggak aman buat data penting! 🚨"
      }
    },
    {
      id: "total-q2",
      question: "Struktur data yang menggunakan konsep 'Last In First Out' adalah? 📦",
      options: [
        { value: "stack", label: "Stack" },
        { value: "queue", label: "Queue" }
      ],
      correctAnswer: "stack",
      feedback: {
        correct: "Mantap! Stack emang kayak tumpukan piring! 📦🎯",
        incorrect: "Stack yang benar! Queue itu FIFO (First In First Out)! 🔄"
      }
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gradient animate-bounce-in">
                Belajar Informatika Kelas X 🚀
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Interaktif & Fun untuk Gen-Z! ✨
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="card-modern p-6 text-center space-y-3">
                <div className="text-4xl">💻</div>
                <h3 className="text-xl font-bold text-primary">Informatika & Kemampuan Umum</h3>
                <p className="text-muted-foreground">Pelajari dasar-dasar informatika dan skill yang dibutuhkan!</p>
              </div>
              
              <div className="card-modern p-6 text-center space-y-3">
                <div className="text-4xl">🧠</div>
                <h3 className="text-xl font-bold text-accent">Berpikir Komputasional</h3>
                <p className="text-muted-foreground">Master cara berpikir seperti programmer sejati!</p>
              </div>
              
              <div className="card-modern p-6 text-center space-y-3">
                <div className="text-4xl">🏆</div>
                <h3 className="text-xl font-bold text-secondary">Kuis Interaktif</h3>
                <p className="text-muted-foreground">Test pemahaman kamu dengan kuis seru!</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={() => setActiveSection("informatika")}
                className="btn-hero text-lg px-8 py-4"
              >
                Mulai Belajar! 🎯
              </button>
              <button 
                onClick={() => setActiveSection("kuis")}
                className="btn-success text-lg px-8 py-4"
              >
                Langsung Kuis! ⚡
              </button>
            </div>
          </div>
        );

      case "informatika":
        return (
          <div className="space-y-8">
            <AccordionSection
              title="Informatika & Kemampuan Umum"
              emoji="💻"
              topics={informatikaTopics}
            />
            <QuizSection
              title="Kuis: Informatika & Kemampuan Umum"
              questions={informatikaQuiz}
            />
          </div>
        );

      case "berpikir":
        return (
          <div className="space-y-8">
            <AccordionSection
              title="Berpikir Komputasional"
              emoji="🧠"
              topics={berpikirTopics}
            />
            <QuizSection
              title="Kuis: Berpikir Komputasional"
              questions={berpikirQuiz}
            />
          </div>
        );

      case "kuis":
        return (
          <QuizSection
            title="Kuis Total - Informatika Kelas X"
            questions={totalQuiz}
            showScore={true}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      
      <footer className="text-center py-8 text-muted-foreground">
        <p>🎓 Informatika Kelas X - Kurikulum Merdeka | Dibuat dengan ❤️ untuk Gen-Z</p>
      </footer>
    </div>
  );
};

export default Index;
