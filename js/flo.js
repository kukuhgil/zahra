const words = [
    "Zahrotul Laili…",
    "Kau bagai bunga biru yang lembut",
    "Tumbuh perlahan, selalu menyejukkan",
    "Setiap detik bersamamu terasa hangat",
    "Terima kasih telah hadir dalam hidupku 💖"
];

let i = 0;
const flower = document.getElementById("flowerSVG");
const word = document.getElementById("word");
const music = document.getElementById("music");
const backBtn = document.getElementById("backBtn");
const petals = Array.from(document.querySelectorAll("#petals circle"));
const center = document.getElementById("center");

flower.addEventListener("click", () => {
    if(i === 0) music.play();
    flower.classList.add("open");

    // Hilangkan satu kelopak per klik
    const petal = petals.find(p => !p.classList.contains("gone"));
    if(petal){
        const x = (Math.random()-0.5)*250 + "px";
        const y = (-Math.random()*250 - 50) + "px";
        const r = Math.random()*360 + "deg";
        petal.style.setProperty("--x", x);
        petal.style.setProperty("--y", y);
        petal.style.setProperty("--r", r);
        petal.style.transition = "all 0.8s ease";
        petal.style.transform = `translate(${x},${y}) rotate(${r})`;
        petal.style.opacity = 0;
        petal.classList.add("gone");
    }

    // Morph lingkaran menjadi hati kalau semua kelopak hilang
    if(petals.every(p=>p.classList.contains("gone"))){
        morphHeart();
    }

    // Update teks
    if(i < words.length){
        word.style.opacity = 0;
        setTimeout(()=>{
            word.textContent = words[i];
            word.style.opacity = 1;
        }, 400);
        i++;
    }
});

function morphHeart(){
    // Hapus lingkaran lama
    center.remove();

    // Buat path SVG hati
    const ns = "http://www.w3.org/2000/svg";
    const heart = document.createElementNS(ns, "path");

    // Path hati proporsional di dalam viewBox 200x200
    heart.setAttribute("d",
    "M100,125 " +               // Titik bawah hati
    "C75,100 55,60 100,75 " +   // Kurva kiri atas
    "C145,60 125,100 100,125 Z" // Kurva kanan atas dan kembali ke bawah
);

    heart.setAttribute("fill","#ff4d6d");
    heart.setAttribute("stroke","#ff7b8f");
    heart.setAttribute("stroke-width","2");
    heart.style.transition = "all 0.8s ease";

    // Masukkan ke SVG
    flower.appendChild(heart);
}


// Tombol kembali
backBtn.addEventListener("click", () => {
    window.history.back();
});
