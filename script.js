const balon = document.getElementById('balon');
const outer = document.getElementById('outer')
const main = document.getElementById('main')
const  content1 = document.getElementById('content1')
const sound_greeting = document.getElementById('greeting_sound')
const moment = document.getElementById('Our_momentSound')
balon.addEventListener('click',()=>{
    balon.classList.add('active');
    outer.classList.add('active');
    sound_greeting.play();
    content1.classList.add('active')
     // Tambahkan kelas active ke main setelah 3 detik (3000 milidetik)
     setTimeout(() => {
        main.classList.add('active');
    }, 3000);

});

var i = 0;
var txt = 'Happy Birth Day \nDania Rizky Maulita'; // Gunakan \n untuk menunjukkan baris baru secara visual
var speed = 100; // Kecepatan mengetik
var delay = 5500; // Delay sebelum mulai mengetik

function typeWriter() {
  if (i < txt.length) {
    if (txt.charAt(i) === '\n') {
      document.getElementById("Greeting-text").innerHTML += '<br>';
    } else {
      document.getElementById("Greeting-text").innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, delay);

// petal daun jatuh
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    document.getElementById("Message").appendChild(petal);

    const startX = Math.random() * document.querySelector(".container").clientWidth;
    const duration = 16;
    const rotation = Math.random() * 360;
    
    petal.style.left = `${startX}px`;
    petal.style.top = `0`;
    petal.style.transform = `rotate(${rotation}deg)`;
    petal.style.animation = `fall ${duration}s linear infinite`;

    setTimeout(() => {
        petal.remove();
    }, 16000);
}

setInterval(createPetal, 750);

// Next Content(Nostalgic)
const Nostalgic = document.getElementById('Nostalgic')
const hide_Container = document.getElementById('hide-Container')
const scrollBUtton = document.getElementById('Scroll-Button')

document.getElementById("lanjut").addEventListener("click", function () {
  const main = document.getElementById("main");
  sound_greeting.pause()
  const targetSection = document.getElementById("Nostalgic");
  hide_Container.classList.add('active')
  // Aktifkan scroll dengan class active
  main.classList.add("active");
  targetSection.classList.add("active");
  moment.play()
  setTimeout(() => {
      let start = main.scrollTop;
      let end = targetSection.offsetTop + targetSection.scrollHeight - main.clientHeight; // Sampai akhir
      let duration = 120000; // 3 detik untuk scroll lebih smooth
      let startTime = null;

      function animateScroll(time) {
          if (!startTime) startTime = time;
          let progress = time - startTime;
          let easeInOut = progress / duration;

          if (easeInOut > 1) easeInOut = 1;

          main.scrollTop = start + (end - start) * easeInOut;

          if (progress < duration) {
              requestAnimationFrame(animateScroll);
          }
      }

      requestAnimationFrame(animateScroll);
  }, 300);
});
