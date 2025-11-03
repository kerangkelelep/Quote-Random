document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. DATABASE QUOTE ---
    // (Anda bisa tambahkan sebanyak mungkin di sini)
    const quotes = [
        {
            text: "Hidup adalah apa yang terjadi saat Anda sibuk membuat rencana lain.",
            author: "John Lennon"
        },
        {
            text: "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang Anda lakukan.",
            author: "Steve Jobs"
        },
        {
            text: "Kesuksesan bukanlah final, kegagalan bukanlah fatal: yang terpenting adalah keberanian untuk melanjutkan.",
            author: "Winston Churchill"
        },
        {
            text: "Jadilah perubahan yang ingin Anda lihat di dunia.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Jangan menghitung hari, buatlah hari-hari itu berarti.",
            author: "Muhammad Ali"
        },
        {
            text: "Hal yang paling sulit adalah keputusan untuk bertindak, sisanya hanyalah kegigihan.",
            author: "Amelia Earhart"
        },
        {
            text: "Dua puluh tahun dari sekarang Anda akan lebih kecewa oleh hal-hal yang tidak Anda lakukan daripada oleh hal-hal yang Anda lakukan.",
            author: "Mark Twain"
        }
    ];

    // --- 2. PILIH ELEMEN HTML (CACHE) ---
    const quoteTextEl = document.getElementById("quote-text");
    const quoteAuthorEl = document.getElementById("quote-author");
    const newQuoteBtn = document.getElementById("new-quote-btn");
    const shareBtn = document.getElementById("share-btn");
    const quoteDisplayEl = document.getElementById("quote-display");

    // --- 3. FUNGSI UTAMA ---

    function getNewQuote() {
        // 1. Dapatkan quote acak
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const { text, author } = quotes[randomIndex];

        // --- Fitur Animasi (Fade-Out) ---
        // 2. Tambahkan kelas 'fading' untuk memicu fade-out di CSS
        quoteDisplayEl.classList.add("fading");

        // 3. Tunggu animasi fade-out selesai (400ms)
        setTimeout(() => {
            // 4. Perbarui teks di HTML
            quoteTextEl.innerText = text;
            quoteAuthorEl.innerText = `- ${author || 'Unknown'}`;
            
            // --- Fitur Animasi (Fade-In) ---
            // 5. Hapus kelas 'fading' untuk memicu fade-in di CSS
            quoteDisplayEl.classList.remove("fading");
        }, 400); // Harus cocok dengan durasi transisi di CSS!
    }

    function shareQuote() {
        const currentQuote = quoteTextEl.innerText;
        const currentAuthor = quoteAuthorEl.innerText; // Ini sudah ada tanda '-'
        const shareText = `"${currentQuote}" ${currentAuthor}`;

        // --- Fitur Share (Modern) ---
        if (navigator.share) {
            // Gunakan Web Share API (jika didukung, misal: di HP, Chrome Desktop)
            navigator.share({
                title: 'Quote Inspiratif',
                text: shareText
            })
            .catch(err => console.error('Gagal share:', err));
        } else {
            // --- Fallback (Jalan pintas) ---
            // Gunakan Twitter Web Intent (jika Web Share API tidak ada)
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
            window.open(twitterUrl, '_blank');
        }
    }

    // --- 4. PASANG EVENT LISTENERS ---
    newQuoteBtn.addEventListener("click", getNewQuote);
    shareBtn.addEventListener("click", shareQuote);

    // --- 5. TAMPILKAN QUOTE PERTAMA SAAT HALAMAN DIBUKA ---
    getNewQuote();
});
