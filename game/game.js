const pertanyaanEl = document.getElementById('pertanyaan');
const jawabanEl = document.getElementById('jawaban');
const kumpulkanEl = document.getElementById('Kumpulkan')

// pertanyaan{Nama kontaknya fadhra di hp nya dania, orang yang dania cinta, nama boneka unicorn.}
// jawaban{mavi, Fadhra, guzell}
const soal = [
    {
      pertanyaan: 'Nama kontaknya Fadhra di HP-nya Dania?',
      jawaban: 'mavi'
    },
    {
      pertanyaan: 'Orang yang Dania cinta?',
      jawaban: 'fadhra'
    },
    {
      pertanyaan: 'Gabungan nama kita',
      jawaban: 'fania'
    }
  ];
  let index = 0;
  let nilai = 0
pertanyaan.textContent = soal[index].pertanyaan
kumpulkanEl.addEventListener('click', function() {
  const jawabanUser = jawabanEl.value.trim().toLowerCase();
  const jawabanBenarSoal = soal[index].jawaban.toLowerCase(); // Gunakan nama variabel yang lebih spesifik
  const overlayGame = document.getElementById('overlay');
  const gambarEl = document.getElementById('gambar_koreksi');
  const koreksian = document.getElementById('koreksian');
  const directionEl = document.getElementById('direction');
  const BaletEl = document.getElementById('Balet');
  let pesan_game = koreksian.getElementsByClassName('pesan')
  const chanel = document.getElementById('chanel')
  // Kondisi jika user tidak mengetikkan apapun
  if (jawabanUser === '') {
    alert('Harap masukkan jawaban Anda terlebih dahulu!');
    return; // Hentikan eksekusi fungsi jika tidak ada jawaban
  }

  overlayGame.classList.add('active');
  koreksian.classList.add('active');

  // koreksi gambar
  const gambarBenar = 'game/centang.jpg';
  const gambarSalah = 'game/silang.jpg';

  if (jawabanUser === jawabanBenarSoal) {
    nilai = 0
    gambarEl.src = gambarBenar;
    pesan_game[0].style.color = 'rgb(65, 219, 104)'
    if (index == 0){
      pesan_game[0].textContent = 'yeay Dania bener !'
    }else if(index == 1){
      pesan_game[0].textContent = 'Woo Dania bener lagi'
    }else if(index == 2){
      pesan_game[0].textContent = 'Sayangkuuu hebatt hehe'
    }

    directionEl.textContent = 'lanjut'
    index++;
    directionEl.addEventListener('click', function(){
      overlayGame.classList.remove('active');
      koreksian.classList.remove('active');
      if (index < soal.length) {
        pertanyaanEl.textContent = soal[index].pertanyaan;
        jawabanEl.value = '';
      } else {
        pertanyaanEl.textContent = 'Yay! Kamu berhasil jawab semua! 💖';
        jawabanEl.style.display = 'none';
        koreksian.style.display = 'none';
        chanel.style.display = 'block'

      }
    })

  } else {
    gambarEl.src = gambarSalah;
    pesan_game[0].textContent = 'Tetott, coba lagi cantik';
    directionEl.textContent = 'lagi';
     pesan_game[0].style.color = 'rgb(241, 100, 100)';
    nilai ++;
    if(nilai >=3){
      pesan_game[0].textContent = 'Mau Fadhra Bantu?'
    }
    directionEl.addEventListener('click', function(){
      overlayGame.classList.remove('active');
      koreksian.classList.remove('active');
    })
    // Anda mungkin ingin menambahkan logika atau pesan lain jika jawaban salah di sini
  }
});