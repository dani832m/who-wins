const calculateBtn = document.querySelector("#calculate");
const englishVictoryTxt = document.querySelector("#english-victory");
const danishVictoryTxt = document.querySelector("#danish-victory");
const drawTxt = document.querySelector("#draw");
const em1992Txt = document.querySelector("#em-1992");
const dolbergTxt = document.querySelector("#dolberg");
const kjaerSchmeichelTxt = document.querySelector("#kjaer-schmeichel");
const gulddrengTxt = document.querySelector("#gulddreng");
const resultReadyTxt = document.querySelector("#result-ready");
const denmarkWinsTxt = document.querySelector("#denmark-wins");
const forSureTxt = document.querySelector("#for-sure");

calculateBtn.addEventListener("click", () => {
  calculateBtn.style.display = "none";
  setTimeout(() => {
    englishVictoryTxt.style.display = "block";
  }, 500);
  setTimeout(() => {
    englishVictoryTxt.style.opacity = "0.6";
    danishVictoryTxt.style.display = "block";
  }, 4000);
  setTimeout(() => {
    danishVictoryTxt.style.opacity = "0.6";
    drawTxt.style.display = "block";
  }, 7000);
  setTimeout(() => {
    drawTxt.style.opacity = "0.6";
    em1992Txt.style.display = "block";
  }, 10000);
  setTimeout(() => {
    em1992Txt.style.opacity = "0.6";
    dolbergTxt.style.display = "block";
  }, 13000);
  setTimeout(() => {
    dolbergTxt.style.opacity = "0.6";
    kjaerSchmeichelTxt.style.display = "block";
  }, 16000);
  setTimeout(() => {
    kjaerSchmeichelTxt.style.opacity = "0.6";
    gulddrengTxt.style.display = "block";
  }, 19000);
  setTimeout(() => {
    gulddrengTxt.style.opacity = "0.6";
    resultReadyTxt.style.display = "block";
  }, 22000);
  setTimeout(() => {
    englishVictoryTxt.style.display = "none";
    danishVictoryTxt.style.display = "none";
    drawTxt.style.display = "none";
    em1992Txt.style.display = "none";
    dolbergTxt.style.display = "none";
    kjaerSchmeichelTxt.style.display = "none";
    gulddrengTxt.style.display = "none";
    resultReadyTxt.style.display = "none";
    denmarkWinsTxt.style.display = "block";
    forSureTxt.style.display = "block";
  }, 26000);
});
