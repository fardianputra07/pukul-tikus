const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papanSkor");
const maxScore = document.getElementById("maxScore");
const sound = document.querySelector("#audio");
// const mulai = document.querySelector(".muali");
let bil;
let selesai;
let skor = 0;
let skor_tinggi = 0;

function random() {
  let rand = Math.floor(Math.random() * tanah.length);
  console.log("bilangan = ", bil, "acak = ", rand);
  if (rand == bil) {
    random();
  } else {
    bil = rand;
  }
}

function tRandom(max, min) {
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
}

function munculkanTikus() {
  random();
  tanah[bil].classList.add("muncul");
  setTimeout(() => {
    if (!selesai) {
      tanah[bil].classList.remove("muncul");
      munculkanTikus(tanah);
    }
  }, tRandom(500, 1000));
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = skor;
  console.log("muali");
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
    tanah[bil].classList.remove("muncul");
    // sembunyikanTikus();
  }, 15000);
}

function sembunyikanTikus() {
  for (let index = 0; index < tanah.length; index++) {
    tanah[index].classList.remove("muncul");
  }
}

function pukul() {
  sound.play();
  skor = skor + 1;
  if (skor > skor_tinggi) {
    skor_tinggi = skor;
  }
  papanSkor.textContent = skor;
  maxScore.textContent = skor_tinggi;
  sembunyikanTikus();
}

tikus.forEach((t) => {
  t.addEventListener("click", function () {
    pukul();
  });
});
