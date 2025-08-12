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
        <p><strong>Informatika adalah ilmu yang mempelajari pemrosesan informasi menggunakan komputer! 🖥️</strong></p>
        <p>Berdasarkan Kurikulum Merdeka, informatika mencakup 4 aspek utama: <strong>Berpikir Komputasional, Teknologi Informasi dan Komunikasi, Sistem Komputer, dan Jaringan Komputer.</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🖥️ Sistem Komputer (Hardware & Software)</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Komponen Utama Komputer:</strong></p>
          <ul class="list-disc list-inside space-y-1">
            <li><strong>CPU (Central Processing Unit)</strong> - Otak komputer yang menjalankan instruksi program</li>
            <li><strong>Memory (RAM)</strong> - Tempat penyimpanan sementara data yang sedang diproses</li>
            <li><strong>Storage (HDD/SSD)</strong> - Penyimpanan permanen untuk data dan program</li>
            <li><strong>Motherboard</strong> - Papan utama yang menghubungkan semua komponen</li>
            <li><strong>Input Devices</strong> - Keyboard, mouse, scanner untuk memasukkan data</li>
            <li><strong>Output Devices</strong> - Monitor, printer, speaker untuk menampilkan hasil</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">💾 Perangkat Lunak (Software)</h4>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Sistem Operasi</strong> - Windows, macOS, Linux yang mengelola hardware</li>
          <li><strong>Aplikasi</strong> - Program yang dibuat untuk tugas tertentu</li>
          <li><strong>Driver</strong> - Software untuk mengontrol hardware</li>
          <li><strong>Utility</strong> - Program bantu seperti antivirus, defragmenter</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🌐 Jaringan Komputer</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p><strong>Jenis Jaringan:</strong></p>
          <ul class="list-disc list-inside space-y-1">
            <li><strong>LAN (Local Area Network)</strong> - Jaringan dalam satu gedung/kantor</li>
            <li><strong>WAN (Wide Area Network)</strong> - Jaringan antar kota/negara</li>
            <li><strong>Internet</strong> - Jaringan global yang menghubungkan seluruh dunia</li>
            <li><strong>Intranet</strong> - Jaringan internal organisasi</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔐 Keamanan Informasi</h4>
        <p>Aspek penting dalam era digital yang wajib dipahami:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Autentikasi</strong> - Memverifikasi identitas pengguna</li>
          <li><strong>Otorisasi</strong> - Mengatur hak akses pengguna</li>
          <li><strong>Enkripsi</strong> - Mengamankan data dengan kode rahasia</li>
          <li><strong>Backup</strong> - Membuat salinan data untuk keamanan</li>
        </ul>
      `
    },
    {
      id: "kemampuan",
      title: "Kemampuan Umum dalam Informatika",
      emoji: "🚀",
      content: `
        <p><strong>Kompetensi yang wajib dikuasai siswa kelas X sesuai Kurikulum Merdeka! 📚</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔍 Literasi Digital</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Kemampuan menggunakan teknologi digital secara efektif:</strong></p>
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Digital Tools</strong> - Menggunakan aplikasi produktivitas (Word, Excel, PowerPoint)</li>
            <li><strong>Information Literacy</strong> - Mencari, mengevaluasi, dan menggunakan informasi digital</li>
            <li><strong>Digital Communication</strong> - Berkomunikasi efektif melalui berbagai platform digital</li>
            <li><strong>Digital Content Creation</strong> - Membuat konten digital yang informatif dan menarik</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🤝 Kolaborasi Digital</h4>
        <p>Kemampuan bekerja sama dalam lingkungan digital:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Online Collaboration</strong> - Bekerja sama menggunakan tools digital</li>
          <li><strong>Project Management</strong> - Mengelola proyek menggunakan software manajemen</li>
          <li><strong>Version Control</strong> - Mengelola perubahan dokumen/kode secara kolaboratif</li>
          <li><strong>Communication Tools</strong> - Menggunakan platform komunikasi digital secara efektif</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🎯 Problem Solving</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p><strong>Kemampuan menyelesaikan masalah secara sistematis:</strong></p>
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Problem Analysis</strong> - Menganalisis masalah secara mendalam</li>
            <li><strong>Solution Design</strong> - Merancang solusi yang efektif</li>
            <li><strong>Implementation</strong> - Menerapkan solusi dengan tepat</li>
            <li><strong>Evaluation</strong> - Mengevaluasi hasil dan melakukan perbaikan</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📊 Data Literacy</h4>
        <p>Kemampuan memahami dan menggunakan data:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Data Collection</strong> - Mengumpulkan data yang relevan</li>
          <li><strong>Data Analysis</strong> - Menganalisis data untuk mendapatkan insight</li>
          <li><strong>Data Visualization</strong> - Menampilkan data dalam bentuk yang mudah dipahami</li>
          <li><strong>Data Interpretation</strong> - Menafsirkan hasil analisis data</li>
        </ul>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🛡️ Digital Citizenship</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p><strong>Menjadi warga digital yang bertanggung jawab:</strong></p>
          <ul class="list-disc list-inside space-y-1">
            <li><strong>Digital Ethics</strong> - Berperilaku etis di dunia digital</li>
            <li><strong>Privacy Protection</strong> - Melindungi privasi diri dan orang lain</li>
            <li><strong>Cyberbullying Prevention</strong> - Mencegah dan mengatasi cyberbullying</li>
            <li><strong>Copyright Awareness</strong> - Menghormati hak cipta dan kekayaan intelektual</li>
            <li><strong>Digital Footprint</strong> - Mengelola jejak digital dengan bijak</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔒 Keamanan Cyber</h4>
        <p>Kemampuan melindungi diri dari ancaman digital:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Password Security</strong> - Membuat dan mengelola password yang kuat</li>
          <li><strong>Two-Factor Authentication</strong> - Mengaktifkan autentikasi dua faktor</li>
          <li><strong>Phishing Awareness</strong> - Mengenali dan menghindari serangan phishing</li>
          <li><strong>Software Updates</strong> - Selalu memperbarui software untuk keamanan</li>
          <li><strong>Safe Browsing</strong> - Berinternet dengan aman dan bijak</li>
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
        <p><strong>4 Elemen fundamental yang wajib dikuasai siswa kelas X! 🎯</strong></p>
        <p>Berdasarkan Kurikulum Merdeka, Berpikir Komputasional adalah kemampuan untuk memecahkan masalah dengan cara berpikir yang sistematis, logis, dan efisien menggunakan konsep informatika.</p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔨 Dekomposisi (Decomposition)</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Memecah masalah besar menjadi bagian-bagian kecil yang dapat dikelola:</strong></p>
          <p class="mt-2"><strong>Contoh Praktis:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Membuat Website Sekolah:</strong> Header → Navigation → Content → Sidebar → Footer</li>
            <li><strong>Mengorganisir Acara:</strong> Persiapan → Pelaksanaan → Evaluasi → Dokumentasi</li>
            <li><strong>Menyelesaikan Soal Matematika:</strong> Baca soal → Identifikasi rumus → Hitung → Verifikasi jawaban</li>
            <li><strong>Membuat Presentasi:</strong> Outline → Research → Design → Practice → Delivery</li>
          </ul>
          <p class="mt-2 text-sm"><strong>Manfaat:</strong> Masalah menjadi lebih mudah dipahami dan diselesaikan</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔍 Pengenalan Pola (Pattern Recognition)</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p><strong>Mengidentifikasi kesamaan dan perbedaan dalam masalah:</strong></p>
          <p class="mt-2"><strong>Contoh Real World:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Login Systems:</strong> Semua aplikasi menggunakan username + password + validation</li>
            <li><strong>E-commerce:</strong> Browse → Add to cart → Checkout → Payment → Confirmation</li>
            <li><strong>Social Media:</strong> Post → Like → Comment → Share → Follow</li>
            <li><strong>Learning Management:</strong> Course → Module → Assignment → Quiz → Grade</li>
          </ul>
          <p class="mt-2 text-sm"><strong>Manfaat:</strong> Dapat menggunakan solusi yang sudah terbukti efektif</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">✨ Abstraksi (Abstraction)</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p><strong>Memfokuskan pada hal-hal penting dan mengabaikan detail yang tidak relevan:</strong></p>
          <p class="mt-2"><strong>Contoh: Sistem Informasi Akademik</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Fokus (Essential):</strong> NIS, Nama, Kelas, Mata Pelajaran, Nilai</li>
            <li><strong>Abstrak (Ignore):</strong> Warna interface, font, animasi, logo</li>
            <li><strong>Data Structure:</strong> Student → Courses → Grades → Attendance</li>
            <li><strong>Business Logic:</strong> IF nilai >= 75 THEN lulus ELSE tidak lulus</li>
          </ul>
          <p class="mt-2 text-sm"><strong>Manfaat:</strong> Fokus pada solusi inti tanpa terdistraksi detail</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">⚙️ Desain Algoritma (Algorithm Design)</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Membuat langkah-langkah yang jelas dan sistematis untuk menyelesaikan masalah:</strong></p>
          <p class="mt-2"><strong>Contoh: Algoritma Pencarian Data Siswa</strong></p>
          <div class="bg-background p-3 rounded mt-2 font-mono text-sm">
            <p>1. Mulai dari awal database</p>
            <p>2. Baca data siswa satu per satu</p>
            <p>3. Bandingkan NIS dengan NIS yang dicari</p>
            <p>4. IF NIS cocok THEN tampilkan data siswa</p>
            <p>5. ELSE lanjut ke siswa berikutnya</p>
            <p>6. Ulangi sampai data ditemukan atau database habis</p>
            <p>7. IF data tidak ditemukan THEN tampilkan "Data tidak ditemukan"</p>
          </div>
          <p class="mt-2 text-sm"><strong>Manfaat:</strong> Solusi dapat dijalankan secara konsisten dan dapat diulang</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🎯 Aplikasi dalam Kehidupan Sehari-hari</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p class="font-semibold">Contoh Penerapan 4 Elemen:</p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Membuat Jadwal Belajar:</strong> Dekomposisi (pecah per mata pelajaran), Pattern (setiap hari ada pola yang sama), Abstraksi (fokus waktu dan mata pelajaran), Algoritma (buat tabel → isi jadwal → review)</li>
            <li><strong>Mengorganisir Tugas:</strong> Dekomposisi (urutkan prioritas), Pattern (deadline → submission → feedback), Abstraksi (fokus deadline dan requirement), Algoritma (buat checklist → kerjakan → submit → follow up)</li>
            <li><strong>Menyelesaikan Masalah Kelompok:</strong> Dekomposisi (bagi per anggota), Pattern (brainstorm → discuss → decide → execute), Abstraksi (fokus tujuan dan timeline), Algoritma (meeting → assign task → monitor → evaluate)</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📚 Sumber Referensi</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p><strong>Berdasarkan Kurikulum Merdeka Informatika Kelas X:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li>Kompetensi Dasar: 3.1 Menerapkan elemen berpikir komputasional dalam pemecahan masalah</li>
            <li>Indikator: Siswa dapat mengidentifikasi dan menerapkan 4 elemen berpikir komputasional</li>
            <li>Materi Pokok: Dekomposisi, Pengenalan Pola, Abstraksi, dan Desain Algoritma</li>
          </ul>
        </div>
      `
    },
    {
      id: "struktur",
      title: "Struktur Data & Algoritma",
      emoji: "📚",
      content: `
        <p><strong>Memahami cara komputer menyimpan, mengorganisir, dan memproses data! 🖥️</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📦 Stack (LIFO - Last In First Out)</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p><strong>Struktur data yang mengikuti prinsip "yang terakhir masuk, yang pertama keluar":</strong></p>
          <p class="mt-2"><strong>Aplikasi dalam Kehidupan Sehari-hari:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Undo/Redo System</strong> - Microsoft Word, Photoshop, Code Editor</li>
            <li><strong>Browser History</strong> - Tombol back dan forward</li>
            <li><strong>Function Calls</strong> - Pemanggilan fungsi dalam programming</li>
            <li><strong>Expression Evaluation</strong> - Kalkulator matematika</li>
            <li><strong>Game Save States</strong> - Checkpoint dalam game</li>
          </ul>
          
          <p class="font-semibold mt-4">Operasi Dasar Stack:</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li><strong>PUSH</strong> - Menambahkan elemen ke atas stack</li>
            <li><strong>POP</strong> - Mengambil dan menghapus elemen teratas</li>
            <li><strong>PEEK/TOP</strong> - Melihat elemen teratas tanpa menghapus</li>
            <li><strong>isEmpty</strong> - Mengecek apakah stack kosong</li>
            <li><strong>size</strong> - Mengetahui jumlah elemen dalam stack</li>
          </ol>
          
          <p class="text-sm mt-2 font-mono bg-background p-2 rounded">
            Stack: [] → [A] → [A,B] → [A,B,C] → [A,B] → [A] → []<br/>
            Operasi: push(A) → push(B) → push(C) → pop() → pop() → pop()
          </p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🚶‍♂️ Queue (FIFO - First In First Out)</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Struktur data yang mengikuti prinsip "yang pertama masuk, yang pertama keluar":</strong></p>
          <p class="mt-2"><strong>Aplikasi dalam Kehidupan Sehari-hari:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Print Queue</strong> - Antrian dokumen yang akan dicetak</li>
            <li><strong>Playlist Music</strong> - Daftar lagu yang akan diputar</li>
            <li><strong>CPU Scheduling</strong> - Proses yang menunggu giliran eksekusi</li>
            <li><strong>Network Packets</strong> - Data yang dikirim melalui internet</li>
            <li><strong>Customer Service</strong> - Antrian pelanggan yang menunggu</li>
          </ul>
          
          <p class="font-semibold mt-4">Operasi Dasar Queue:</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li><strong>ENQUEUE</strong> - Menambahkan elemen ke belakang queue</li>
            <li><strong>DEQUEUE</strong> - Mengambil dan menghapus elemen terdepan</li>
            <li><strong>FRONT</strong> - Melihat elemen terdepan tanpa menghapus</li>
            <li><strong>REAR</strong> - Melihat elemen terbelakang</li>
            <li><strong>isEmpty</strong> - Mengecek apakah queue kosong</li>
          </ol>
          
          <p class="text-sm mt-2 font-mono bg-background p-2 rounded">
            Queue: [] → [A] → [A,B] → [A,B,C] → [B,C] → [C] → []<br/>
            Operasi: enqueue(A) → enqueue(B) → enqueue(C) → dequeue() → dequeue() → dequeue()
          </p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔄 Algoritma Sorting</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p><strong>Teknik untuk mengurutkan data dari kecil ke besar (ascending) atau sebaliknya:</strong></p>
          
          <p class="font-semibold mt-4">1. Bubble Sort</p>
          <p>Membandingkan dua elemen bersebelahan dan menukar posisi jika urutannya salah. Proses diulang sampai semua data terurut.</p>
          <p class="text-sm font-mono bg-background p-2 rounded mt-1">
            [64, 34, 25, 12] → [34, 64, 25, 12] → [34, 25, 64, 12] → [34, 25, 12, 64]
          </p>
          <p class="text-sm mt-1"><strong>Kompleksitas:</strong> O(n²) - Cocok untuk data kecil</p>
          
          <p class="font-semibold mt-4">2. Selection Sort</p>
          <p>Mencari elemen terkecil dan menempatkannya di posisi pertama. Proses diulang untuk posisi berikutnya.</p>
          <p class="text-sm mt-1"><strong>Kompleksitas:</strong> O(n²) - Lebih efisien dari Bubble Sort</p>
          
          <p class="font-semibold mt-4">3. Insertion Sort</p>
          <p>Membangun array terurut dengan memasukkan satu elemen pada satu waktu ke posisi yang tepat.</p>
          <p class="text-sm mt-1"><strong>Kompleksitas:</strong> O(n²) - Efisien untuk data yang hampir terurut</p>
          
          <p class="font-semibold mt-4">4. Quick Sort (Advanced)</p>
          <p>Memilih pivot, membagi array menjadi dua bagian, dan secara rekursif mengurutkan bagian kiri dan kanan.</p>
          <p class="text-sm mt-1"><strong>Kompleksitas:</strong> O(n log n) - Salah satu algoritma tercepat</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔍 Algoritma Searching</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Teknik untuk mencari data dalam kumpulan data:</strong></p>
          
          <p class="font-semibold mt-4">1. Linear Search</p>
          <p>Mengecek satu per satu elemen dari awal sampai data ditemukan atau sampai akhir array.</p>
          <p class="text-sm mt-1"><strong>Kompleksitas:</strong> O(n) - Cocok untuk data tidak terurut</p>
          
          <p class="font-semibold mt-4">2. Binary Search</p>
          <p>Membagi array menjadi dua bagian dan mencari di bagian yang sesuai. Hanya bisa digunakan pada array yang sudah terurut.</p>
          <p class="text-sm mt-1"><strong>Kompleksitas:</strong> O(log n) - Sangat efisien untuk data besar</p>
          
          <p class="font-semibold mt-4">3. Hash Table Search</p>
          <p>Menggunakan fungsi hash untuk langsung mengakses data berdasarkan key.</p>
          <p class="text-sm mt-1"><strong>Kompleksitas:</strong> O(1) - Paling cepat untuk data yang sudah di-hash</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🎮 Aplikasi dalam Dunia Nyata</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p class="font-semibold">Struktur data dan algoritma dalam aplikasi sehari-hari:</p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li><strong>Social Media:</strong> Stack untuk undo post, Queue untuk feed timeline</li>
            <li><strong>E-commerce:</strong> Array untuk product catalog, Hash table untuk user database</li>
            <li><strong>Navigation Apps:</strong> Graph untuk road network, Dijkstra algorithm untuk shortest path</li>
            <li><strong>Search Engines:</strong> Binary search untuk sorted data, Hash table untuk fast lookup</li>
            <li><strong>Gaming:</strong> Stack untuk game states, Queue untuk multiplayer matchmaking</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📚 Kompetensi Kurikulum Merdeka</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p><strong>Berdasarkan KD 3.2 Menerapkan struktur data dan algoritma dalam pemecahan masalah:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li>Memahami konsep dasar struktur data (Stack, Queue, Array)</li>
            <li>Menerapkan algoritma sorting dan searching sederhana</li>
            <li>Mengidentifikasi struktur data yang tepat untuk masalah tertentu</li>
            <li>Menganalisis efisiensi algoritma berdasarkan kompleksitas waktu</li>
          </ul>
        </div>
      `
    },
    {
      id: "flowchart",
      title: "Flowchart & Pseudocode",
      emoji: "📊",
      content: `
        <p><strong>Membuat roadmap dan blueprint sebelum coding! 🗺️</strong></p>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📋 Simbol Flowchart Standar</h4>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-primary/10 p-3 rounded-lg">
            <p><strong>🔵 Oval:</strong> Start/End (Mulai/Selesai)</p>
            <p><strong>📄 Rectangle:</strong> Process (Proses)</p>
            <p><strong>💎 Diamond:</strong> Decision (Keputusan Ya/Tidak)</p>
            <p><strong>📂 Parallelogram:</strong> Input/Output (Masukan/Keluaran)</p>
            <p><strong>🔗 Connector:</strong> Penghubung antar halaman</p>
          </div>
          <div class="bg-secondary/10 p-3 rounded-lg">
            <p><strong>Contoh: Sistem Login</strong></p>
            <p class="text-sm mt-2">
              START → Input Username → Input Password → 
              Valid? → [Ya] Welcome → END<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ [Tidak] Error Message → Input Username
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
          <p class="mt-2 text-sm"><strong>Keuntungan:</strong> Mudah dipahami, tidak bergantung pada bahasa pemrograman tertentu</p>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🎯 Project: Sistem Informasi Akademik</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p class="font-semibold">Flowchart untuk proses input nilai siswa:</p>
          <div class="bg-background p-3 rounded mt-2 font-mono text-xs">
            <p>START</p>
            <p>↓</p>
            <p>Input NIS Siswa</p>
            <p>↓</p>
            <p>Validasi NIS?</p>
            <p>↓ [Ya]</p>
            <p>Input Mata Pelajaran</p>
            <p>↓</p>
            <p>Input Nilai (0-100)</p>
            <p>↓</p>
            <p>Validasi Nilai?</p>
            <p>↓ [Ya]</p>
            <p>Simpan ke Database</p>
            <p>↓</p>
            <p>Hitung Rata-rata</p>
            <p>↓</p>
            <p>Tampilkan Hasil</p>
            <p>↓</p>
            <p>END</p>
          </div>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">🔧 Pseudocode untuk Sistem Nilai</h4>
        <div class="bg-secondary/10 p-4 rounded-lg">
          <p class="font-semibold">Algoritma untuk menghitung rata-rata dan menentukan kelulusan:</p>
          <div class="bg-background p-3 rounded mt-2 font-mono text-xs">
            <p>BEGIN</p>
            <p>&nbsp;&nbsp;INPUT nilai_matematika, nilai_bahasa, nilai_inggris</p>
            <p>&nbsp;&nbsp;rata_rata = (nilai_matematika + nilai_bahasa + nilai_inggris) / 3</p>
            <p>&nbsp;&nbsp;IF rata_rata >= 75</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;status = "LULUS"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;PRINT "Selamat! Anda lulus dengan rata-rata", rata_rata</p>
            <p>&nbsp;&nbsp;ELSE</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;status = "TIDAK LULUS"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;PRINT "Maaf, Anda tidak lulus. Rata-rata:", rata_rata</p>
            <p>&nbsp;&nbsp;ENDIF</p>
            <p>&nbsp;&nbsp;SAVE status, rata_rata to database</p>
            <p>END</p>
          </div>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📱 Aplikasi Mobile: Kalkulator BMI</h4>
        <div class="bg-accent/10 p-4 rounded-lg">
          <p class="font-semibold">Flowchart untuk aplikasi kalkulator Body Mass Index:</p>
          <div class="bg-background p-3 rounded mt-2 font-mono text-xs">
            <p>START</p>
            <p>↓</p>
            <p>Input Berat Badan (kg)</p>
            <p>↓</p>
            <p>Input Tinggi Badan (m)</p>
            <p>↓</p>
            <p>BMI = Berat / (Tinggi × Tinggi)</p>
            <p>↓</p>
            <p>IF BMI < 18.5</p>
            <p>&nbsp;&nbsp;Kategori = "Kurus"</p>
            <p>ELSEIF BMI < 25</p>
            <p>&nbsp;&nbsp;Kategori = "Normal"</p>
            <p>ELSEIF BMI < 30</p>
            <p>&nbsp;&nbsp;Kategori = "Gemuk"</p>
            <p>ELSE</p>
            <p>&nbsp;&nbsp;Kategori = "Obesitas"</p>
            <p>ENDIF</p>
            <p>↓</p>
            <p>Display BMI dan Kategori</p>
            <p>↓</p>
            <p>END</p>
          </div>
        </div>
        
        <h4 class="font-semibold text-lg mt-4 mb-2">📚 Kompetensi Kurikulum Merdeka</h4>
        <div class="bg-primary/10 p-4 rounded-lg">
          <p><strong>Berdasarkan KD 3.3 Menerapkan flowchart dan pseudocode dalam perancangan algoritma:</strong></p>
          <ul class="list-disc list-inside space-y-1 mt-2">
            <li>Mengidentifikasi simbol flowchart yang tepat untuk setiap proses</li>
            <li>Membuat flowchart yang logis dan sistematis</li>
            <li>Menulis pseudocode yang jelas dan mudah dipahami</li>
            <li>Mengkonversi flowchart menjadi pseudocode dan sebaliknya</li>
            <li>Menerapkan flowchart dan pseudocode dalam pemecahan masalah</li>
          </ul>
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
