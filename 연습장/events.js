const rm = document.querySelector("div.hello:first-child h1");

function lm() {
  rm.style.color = "blue";
}

function fm() {
  rm.innerText = "마우스가 올라갔습니다."
}

function im() {
  rm.innerText = "마우스가 내려갔습니다."
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOOOD");
}

rm.onclick = lm;
rm.addEventListener("mouseenter", fm);
rm.addEventListener("mouseleave", im);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);