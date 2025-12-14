const text = `Jika cinta bisa dituliskan, maka hari ini namamu
adalah kalimat terindahnya.

Bertambahnya usiamu bukan hanya tentang waktu,
tetapi tentang semakin banyak doa 
yang kutitipkan untuk kebahagiaanmu.

Semoga hidup selalu menyambutmu dengan hal-hal yang baik,
dengan tawa yang tulus, 
dan hari-hari yang penuh harapan.

Selamat bertambah usia Sayang.
Semoga bahagia selalu memilihmu, 
dan semoga aku
selalu menjadi bagian dari alasan senyummu.💖`;

const el = document.getElementById("typing");
let i = 0;

(function type(){
    if(i < text.length){
        el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
        i++;
        setTimeout(type,50);
    }
})();

const music = document.getElementById("music");
document.addEventListener("click", () => {
    music.volume = 0;
    music.play();
    const fade = setInterval(() => {
        if (music.volume < 0.4) music.volume += 0.01;
        else clearInterval(fade);
    }, 100);
},{ once:true });

    const buttons = document.querySelectorAll(".btn[data-target]");
    const pages = document.querySelectorAll(".page");
    const layout = document.querySelector(".layout");
    
    buttons.forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
    
            const target = btn.dataset.target;
    
            pages.forEach(p => p.classList.remove("active"));
            document.getElementById(target).classList.add("active");
    
            layout.classList.add("blur");
        });
    });
    
    document.querySelectorAll(".back-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            pages.forEach(p => p.classList.remove("active"));
            layout.classList.remove("blur");
        });
    });

        document.querySelectorAll(".back-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            pages.forEach(p => p.classList.remove("active"));
            layout.classList.remove("blur");
        });
    });

    const BOT_TOKEN = "8236393314:AAHdAmLMUDXQ0rFnkQGvjpIV5weP64vKmjI";
    const CHAT_ID = "7376516652";
    
    document.querySelector(".send-tg").addEventListener("click", () => {
        const text = document.getElementById("hopeText").value.trim();
    
        if (!text) {
            alert("Tulis harapan dulu ya 💖");
            return;
        }
    
        const message =
    `💌 Harapan Ulang Tahun
    
    "${text}"
    
    — dari Sayang 🎂`;
    
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        })
        .then(() => {
            alert("Harapan berhasil dikirim 💖");
            document.getElementById("hopeText").value = "";
        })
        .catch(() => {
            alert("Gagal mengirim 😢");
        });
    });
    

    document.querySelectorAll(".link-out").forEach(link=>{
        link.addEventListener("click",e=>{
            e.preventDefault();
            document.body.style.opacity = 0;
            setTimeout(()=>{
                window.location.href = link.href;
            },300);
        });
    });
    
    