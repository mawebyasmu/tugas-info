import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AccordionSection } from "@/components/AccordionSection";
import { QuizSection } from "@/components/QuizSection";
import { QuizConfirmationModal } from "@/components/QuizConfirmationModal";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showInteractiveQuiz, setShowInteractiveQuiz] = useState(false);

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
          <li><strong>Processor (CPU)</strong> - Otaknya komputer yang ngolah semua instruksi. Makin tinggi clock speed (GHz), makin cepat prosesnya!</li>
          <li><strong>Memory (RAM)</strong> - Tempat nyimpen data sementara saat komputer lagi jalan. 8GB udah cukup buat daily use, 16GB buat gaming!</li>
          <li><strong>Storage (HDD/SSD)</strong> - HDD lebih murah tapi lambat, SSD lebih mahal tapi super cepet! Makanya laptop sekarang pake SSD.</li>
          <li><strong>Motherboard</strong> - Papan induk yang nyambungin semua komponen. Kayak jalan raya buat data!</li>
          <li><strong>GPU</strong> - Khusus buat grafis dan gaming. RTX series dari NVIDIA lagi hits banget!</li>
          <li><strong>Input/Output devices</strong> - Mouse gaming mechanical, keyboard RGB, monitor 144Hz buat esports!</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">💾 Perangkat Lunak (Software)</h4>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Sistem Operasi</strong> - Windows 11 (popular), macOS (creative work), Linux (programmer)</li>
          <li><strong>Web Browser</strong> - Chrome, Firefox, Edge, Safari. Chrome paling banyak dipake tapi boros RAM!</li>
          <li><strong>Aplikasi Productivity</strong> - Microsoft Office, Google Workspace, Notion (lagi trending!)</li>
          <li><strong>Programming Languages</strong> - Python (AI/ML), JavaScript (web development), Swift (iOS apps)</li>
          <li><strong>Database</strong> - MySQL, PostgreSQL, MongoDB buat nyimpen data aplikasi</li>
          <li><strong>Cloud Services</strong> - AWS, Google Cloud, Azure. Kayak sewa komputer super kuat!</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🌐 Jaringan Komputer</h4>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Internet</strong> - Jaringan global yang nyambungin seluruh dunia. Bayangkan perpustakaan raksasa!</li>
          <li><strong>WiFi</strong> - Wireless internet. 2.4GHz jangkauan jauh, 5GHz speed tinggi</li>
          <li><strong>IP Address</strong> - Alamat unik setiap device di internet. Kayak alamat rumah tapi digital!</li>
          <li><strong>DNS</strong> - Nerjemahin domain (google.com) jadi IP address yang dimengerti komputer</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🌍 Dampak Sosial Informatika</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p><strong>Revolusi Digital di Indonesia:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>E-commerce</strong> - Shopee, Tokopedia, Blibli. UMKM bisa jualan online ke seluruh Indonesia!</li>
            <li><strong>Fintech</strong> - GoPay, OVO, Dana. Nggak perlu bawa cash kemana-mana!</li>
            <li><strong>EdTech</strong> - Ruangguru, Zenius, Khan Academy. Belajar dari rumah jadi mudah!</li>
            <li><strong>Transportation</strong> - Gojek, Grab. Ojek online revolution!</li>
            <li><strong>Social Media</strong> - Instagram, TikTok, Twitter. Bisa viral dalam hitungan jam!</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔐 Keamanan Cyber</h4>
        <p>Di era digital, keamanan data super penting! Hacker makin pinter, kita harus lebih aware:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Password Strong</strong> - Minimal 12 karakter, campuran huruf, angka, symbol</li>
          <li><strong>Two-Factor Authentication</strong> - Aktivin di semua akun penting (Google, Instagram, dll)</li>
          <li><strong>Phishing</strong> - Jangan klik link mencurigakan di email/SMS</li>
          <li><strong>Software Update</strong> - Selalu update OS dan aplikasi buat patch keamanan</li>
        </ul>
      `
    },
    {
      id: "kemampuan",
      title: "Kemampuan Umum dalam Informatika",
      emoji: "🚀",
      content: `
        <p><strong>Skills yang harus dikuasai buat jadi pro di dunia digital! 💪</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🤝 Kolaborasi Digital</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p>Kerja tim di era digital lebih dari sekedar WhatsApp group!</p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Version Control</strong> - Git untuk track changes di project coding</li>
            <li><strong>Project Management</strong> - Trello, Asana, Monday.com buat manage tasks</li>
            <li><strong>Communication Tools</strong> - Slack, Discord, Microsoft Teams</li>
            <li><strong>Cloud Collaboration</strong> - Google Docs, Figma, Miro buat real-time editing</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🎯 Problem Definition & Analysis</h4>
        <p>Sebelum coding, harus tau dulu masalahnya apa. Framework berpikir:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>5W+1H Method</strong> - What, Who, When, Where, Why, How</li>
          <li><strong>User Research</strong> - Interview, survey, observasi user behavior</li>
          <li><strong>Problem Statement</strong> - "How might we..." format</li>
          <li><strong>Success Metrics</strong> - Gimana cara ngukur berhasil atau nggak</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔍 Abstraksi & Generalisasi</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p><strong>Contoh Real World:</strong></p>
          <p>Bikin sistem login untuk aplikasi:</p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Abstraksi</strong> - Fokus ke: username, password, validation</li>
            <li><strong>Ignore</strong> - Warna button, font, animasi (bisa diurus nanti)</li>
            <li><strong>Pattern</strong> - Login Instagram = Login TikTok = Login YouTube (sama aja!)</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📊 Data Literacy</h4>
        <p>Skill wajib di era Big Data! Bisa baca, analisis, dan interpretasi data:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Data Collection</strong> - Google Analytics, social media insights</li>
          <li><strong>Data Visualization</strong> - Chart, graph, infografis yang menarik</li>
          <li><strong>Statistical Thinking</strong> - Mean, median, correlation, trend analysis</li>
          <li><strong>Tools</strong> - Excel, Google Sheets, Tableau untuk visualisasi data</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📢 Komunikasi Digital</h4>
        <p>Gimana cara jelasin hal teknis ke orang awam:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Storytelling</strong> - Pake cerita dan analogi yang relatable</li>
          <li><strong>Visual Communication</strong> - Infografis, flowchart, mockup design</li>
          <li><strong>Presentation Skills</strong> - Canva, PowerPoint, Prezi buat slide keren</li>
          <li><strong>Documentation</strong> - Bikin tutorial yang mudah diikuti</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🛡️ Digital Citizenship</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p><strong>Jadi netizen yang bertanggung jawab:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Digital Footprint</strong> - Semua yang kita post online itu permanen!</li>
            <li><strong>Fact Checking</strong> - Cek dulu sebelum share. Pake Turnbackhoax.id</li>
            <li><strong>Cyberbullying Prevention</strong> - Think before you type</li>
            <li><strong>Copyright Awareness</strong> - Respect karya orang lain, credit the creator</li>
            <li><strong>Privacy Settings</strong> - Atur siapa aja yang bisa liat profile dan post kita</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔒 HTTPS & Web Security</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Kenapa HTTPS Penting:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Encryption</strong> - Data dienkripsi pakai algoritma AES-256</li>
            <li><strong>Authentication</strong> - Memastikan website itu asli, bukan fake</li>
            <li><strong>Data Integrity</strong> - Data nggak bisa diubah di tengah jalan</li>
            <li><strong>Visual Indicator</strong> - Icon gembok 🔒 di address bar</li>
          </ul>
          <p class="mt-2"><strong>Red Flag:</strong> Kalau ada website HTTP tanpa S, jangan masukin data penting!</p>
        </div>
      `
    },
    {
      id: "etika",
      title: "Etika Digital & Dampak Sosial",
      emoji: "⚖️",
      content: `
        <p><strong>Bermedia digital yang bertanggung jawab itu skill masa depan! 🌟</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🎭 Digital Identity</h4>
        <p>Online persona vs real personality harus balance:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Authentic Content</strong> - Be yourself, jangan fake buat likes</li>
          <li><strong>Personal Branding</strong> - Build reputation yang konsisten</li>
          <li><strong>Professional Image</strong> - LinkedIn profile yang rapih buat career</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔄 Algoritma & Filter Bubble</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p><strong>How Social Media Algorithm Works:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li>Instagram: Engagement rate, time spent, relationship dengan creator</li>
            <li>TikTok: Video completion rate, shares, comments</li>
            <li>YouTube: Watch time, click-through rate, subscriber interaction</li>
          </ul>
          <p class="mt-2"><strong>Escape Filter Bubble:</strong> Actively search diverse content!</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📱 Digital Wellness</h4>
        <p>Technology addiction is real! Balance screen time:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Screen Time Control</strong> - iOS Screen Time, Android Digital Wellbeing</li>
          <li><strong>Notification Management</strong> - Turn off non-essential notifications</li>
          <li><strong>Digital Detox</strong> - Phone-free zones dan waktu tertentu</li>
        </ul>
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
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔨 Dekomposisi (Decomposition)</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Pecah masalah besar jadi bagian-bagian kecil yang manageable!</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Web Development:</strong> Header → Navigation → Content → Sidebar → Footer</li>
            <li><strong>Mobile App:</strong> Login → Dashboard → Features → Settings → Logout</li>
            <li><strong>Game Development:</strong> Character → Environment → Physics → Audio → UI</li>
            <li><strong>E-commerce:</strong> Product Catalog → Cart → Payment → Shipping → Confirmation</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔍 Pengenalan Pola (Pattern Recognition)</h4>
        <p>Cari kesamaan dari masalah yang udah pernah diselesaikan sebelumnya:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Login Systems:</strong> Instagram = TikTok = YouTube (username + password)</li>
          <li><strong>Search Functions:</strong> Google = YouTube = Spotify (input field + filter)</li>
          <li><strong>Shopping Cart:</strong> Shopee = Tokopedia = Amazon (add to cart → checkout)</li>
          <li><strong>Social Media Feed:</strong> Timeline pattern di semua platform</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">✨ Abstraksi (Abstraction)</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p><strong>Fokus ke hal penting, ignore detail yang nggak perlu!</strong></p>
          <p class="mt-2"><strong>Contoh: Bikin Sistem Booking Tiket Bioskop</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Focus:</strong> Pilih film → Pilih jadwal → Pilih kursi → Bayar</li>
            <li><strong>Ignore (for now):</strong> Warna UI, animasi, font, logo design</li>
            <li><strong>Essential Data:</strong> User ID, Movie ID, Seat Number, Payment Status</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">⚙️ Desain Algoritma (Algorithm Design)</h4>
        <p>Bikin langkah-langkah detail dan logis buat solve masalah:</p>
        <div class="bg-accent/10 p-4 rounded-lg mt-2">
          <p class="font-semibold">Contoh: Algoritma Recommendation System (kayak Spotify)</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Collect user listening history</li>
            <li>Analyze genre preferences</li>
            <li>Find similar users (collaborative filtering)</li>
            <li>Recommend songs liked by similar users</li>
            <li>Track click-through rate</li>
            <li>Improve algorithm based on feedback</li>
          </ol>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🎯 Case Study: Bikin App Food Delivery</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p class="font-semibold">Applying 4 Elements:</p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Dekomposisi:</strong> User Registration → Restaurant List → Menu → Order → Payment → Tracking</li>
            <li><strong>Pattern Recognition:</strong> Similar to Gojek Food, Grab Food flow</li>
            <li><strong>Abstraksi:</strong> Focus: User, Restaurant, Food, Order. Ignore: UI colors, animations</li>
            <li><strong>Algoritma:</strong> IF user location detected AND restaurant open THEN show menu</li>
          </ul>
        </div>
      `
    },
    {
      id: "struktur",
      title: "Struktur Data & Algoritma",
      emoji: "📚",
      content: `
        <p><strong>Cara komputer nyimpen dan ngatur data, super cool! 🤓</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📦 Stack (LIFO - Last In First Out)</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p><strong>Kayak tumpukan piring! Yang terakhir ditaro, yang pertama diambil.</strong></p>
          <p class="mt-2"><strong>Real World Applications:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Undo/Redo</strong> - Photoshop, Microsoft Word, Code Editor</li>
            <li><strong>Browser History</strong> - Back button functionality</li>
            <li><strong>Function Calls</strong> - Programming recursion</li>
            <li><strong>Expression Evaluation</strong> - Calculator mathematical operations</li>
          </ul>
          
          <p class="font-semibold mt-4">Stack Operations:</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>PUSH - Masukin data ke top of stack</li>
            <li>POP - Keluarin data dari top of stack</li>
            <li>PEEK/TOP - Liat data teratas tanpa remove</li>
            <li>isEmpty - Cek stack kosong atau nggak</li>
          </ol>
          
          <p class="text-sm mt-2 font-mono bg-background p-2 rounded">
            Stack: [] → [A] → [A,B] → [A,B,C] → [A,B] → [A] → []<br/>
            Operations: push(A) → push(B) → push(C) → pop() → pop() → pop()
          </p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🚶‍♂️ Queue (FIFO - First In First Out)</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Kayak antrian di bank! Yang pertama datang, yang pertama dilayani.</strong></p>
          <p class="mt-2"><strong>Real World Applications:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Print Queue</strong> - Antrian dokumen yang mau di-print</li>
            <li><strong>Playlist</strong> - Lagu next yang bakal diputar</li>
            <li><strong>CPU Scheduling</strong> - Process yang menunggu giliran</li>
            <li><strong>Network Packets</strong> - Data yang dikirim via internet</li>
          </ul>
          
          <p class="font-semibold mt-4">Queue Operations:</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>ENQUEUE - Masukin data ke belakang queue</li>
            <li>DEQUEUE - Keluarin data dari depan queue</li>
            <li>FRONT - Liat data terdepan</li>
            <li>REAR - Liat data terbelakang</li>
          </ol>
          
          <p class="text-sm mt-2 font-mono bg-background p-2 rounded">
            Queue: [] → [A] → [A,B] → [A,B,C] → [B,C] → [C] → []<br/>
            Operations: enqueue(A) → enqueue(B) → enqueue(C) → dequeue() → dequeue() → dequeue()
          </p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔄 Algoritma Sorting</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p><strong>Cara ngurutin data dari kecil ke besar (ascending) atau sebaliknya:</strong></p>
          
          <p class="font-semibold mt-4">1. Bubble Sort</p>
          <p>Bandingin 2 elemen bersebelahan, tukar kalau urutannya salah. Repeat until sorted!</p>
          <p class="text-sm font-mono bg-background p-2 rounded mt-1">
            [64, 34, 25, 12] → [34, 64, 25, 12] → [34, 25, 64, 12] → [34, 25, 12, 64]
          </p>
          
          <p class="font-semibold mt-4">2. Selection Sort</p>
          <p>Cari elemen terkecil, taro di posisi pertama. Repeat untuk posisi berikutnya.</p>
          
          <p class="font-semibold mt-4">3. Quick Sort (Advanced)</p>
          <p>Pilih pivot, partition array, recursively sort left and right. Fastest!</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔍 Algoritma Searching</h4>
        <p>Cara nyari data di dalam kumpulan data:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Linear Search:</strong> Cek satu-satu dari awal sampai ketemu</li>
          <li><strong>Binary Search:</strong> Bagi 2 terus, cuma bisa di sorted array</li>
          <li><strong>Hash Table:</strong> Direct access pake key, super fast!</li>
        </ul>
        
        <div class="bg-primary/10 p-4 rounded-lg mt-4">
          <p class="font-semibold">🎮 Fun Fact: Game Development</p>
          <p>Game favorit kalian pake struktur data ini:</p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Stack:</strong> Undo moves di Chess.com</li>
            <li><strong>Queue:</strong> Matchmaking di Mobile Legends</li>
            <li><strong>Array:</strong> Inventory system di Minecraft</li>
            <li><strong>Graph:</strong> Path finding di Google Maps</li>
          </ul>
        </div>
      `
    },
    {
      id: "flowchart",
      title: "Flowchart & Pseudocode",
      emoji: "📊",
      content: `
        <p><strong>Bikin roadmap sebelum coding, biar nggak bingung! 🗺️</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📋 Flowchart Symbols</h4>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-primary/10 p-3 rounded-lg">
            <p><strong>🔵 Oval:</strong> Start/End</p>
            <p><strong>📄 Rectangle:</strong> Process</p>
            <p><strong>💎 Diamond:</strong> Decision (Yes/No)</p>
            <p><strong>📂 Parallelogram:</strong> Input/Output</p>
          </div>
          <div class="bg-secondary/10 p-3 rounded-lg">
            <p><strong>Example: Login System</strong></p>
            <p class="text-sm mt-2">
              START → Input Username → Input Password → 
              Valid? → [Yes] Welcome → END<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ [No] Error Message → Input Username
            </p>
          </div>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">💻 Pseudocode</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p><strong>Bahasa "hampir programming" yang mudah dibaca manusia:</strong></p>
          <div class="bg-background p-3 rounded mt-2 font-mono text-sm">
            <p>BEGIN</p>
            <p>&nbsp;&nbsp;INPUT username, password</p>
            <p>&nbsp;&nbsp;IF username == "admin" AND password == "123"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;PRINT "Login berhasil"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;REDIRECT to dashboard</p>
            <p>&nbsp;&nbsp;ELSE</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;PRINT "Login gagal"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;RETURN to login page</p>
            <p>&nbsp;&nbsp;ENDIF</p>
            <p>END</p>
          </div>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🎯 Project: Instagram Story Algorithm</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p class="font-semibold">Pseudocode untuk nentuin story mana yang ditampilin duluan:</p>
          <div class="bg-background p-3 rounded mt-2 font-mono text-xs">
            <p>FOR each follower in user_following_list</p>
            <p>&nbsp;&nbsp;IF follower has_active_story AND story_not_viewed</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;calculate_priority = (interaction_frequency * 0.4) + </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(recency_of_interaction * 0.3) +</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(mutual_friends * 0.2) +</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(story_posting_time * 0.1)</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;ADD to priority_queue</p>
            <p>&nbsp;&nbsp;ENDIF</p>
            <p>ENDFOR</p>
            <p>SORT priority_queue by priority_score DESCENDING</p>
            <p>DISPLAY stories in sorted order</p>
          </div>
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
        if (showInteractiveQuiz) {
          return <InteractiveQuiz />;
        }
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-bounce-in">
                🎯 Siap untuk Kuis? 
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Test pemahaman kamu dengan kuis interaktif yang seru! ✨
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="card-modern p-8 text-center space-y-6">
                <div className="text-6xl animate-pulse">🧠</div>
                <h3 className="text-2xl font-bold text-primary">Kuis Interaktif Informatika</h3>
                <p className="text-muted-foreground">
                  Kuis ini akan menguji pemahaman kamu tentang materi 
                  <strong> Informatika & Kemampuan Umum</strong> dan 
                  <strong> Berpikir Komputasional</strong>
                </p>
                
                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <p className="text-sm font-medium">
                    📊 Format Kuis: Multiple Choice, True/False, Fill in the Blanks, Matching<br/>
                    ⏱️ Durasi: Bebas (tidak ada batasan waktu)<br/>
                    🏆 Sistem Poin: Berbeda untuk setiap jenis soal
                  </p>
                </div>
                
                <Button
                  onClick={() => setShowQuizModal(true)}
                  className="btn-hero text-lg px-8 py-4"
                >
                  Mulai Kuis Sekarang! 🚀
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={(section) => {
          if (section === "kuis") {
            setShowQuizModal(true);
          } else {
            setActiveSection(section);
            setShowInteractiveQuiz(false);
          }
        }} 
      />
      
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      
      <QuizConfirmationModal
        isOpen={showQuizModal}
        onClose={() => setShowQuizModal(false)}
        onContinue={() => {
          setShowQuizModal(false);
          setActiveSection("kuis");
          setShowInteractiveQuiz(true);
        }}
      />
      
      <footer className="text-center py-8 text-muted-foreground">
        <p>🎓 Informatika Kelas X - Kurikulum Merdeka | Dibuat dengan ❤️ untuk Gen-Z</p>
      </footer>
    </div>
  );
};

export default Index;
