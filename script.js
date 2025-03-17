const balon = document.getElementById('balon');
const outer = document.getElementById('outer')
const main = document.getElementById('main')
const  content1 = document.getElementById('content1')
const sound_greeting = document.getElementById('greeting_sound')
balon.addEventListener('click',()=>{
    balon.classList.add('active');
    outer.classList.add('active');
    // sound_greeting.play();
    content1.classList.add('active')
     // Tambahkan kelas active ke main setelah 3 detik (3000 milidetik)
     setTimeout(() => {
        main.classList.add('active');
    }, 3000);

});


const greetings = document.getElementById('Greeting-text');
const ayam = new Typewriter(greetings, {
    loop: false, // Nonaktifkan pengulangan
    delay: 100, // Sesuaikan kecepatan mengetik (opsional)
});
ayam
.pauseFor(4000)
.typeString('Happy Birth Day <br> Dania Rizky Maulita')
.start();

