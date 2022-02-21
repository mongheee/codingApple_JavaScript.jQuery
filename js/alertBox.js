// 평소에는 숨겨져있지만 버튼을 눌렀을 때 나오는 div
// 띄우기 버튼을 누르면 생성되고
// 삭제 버튼을 누르면 삭제된다.
const alertBox = document.querySelector(".alert-box");
const boxBtn = document.querySelector("button");

const HIDDEN_CLASSNAME = "hidden";

/* alertBox */
const alert = document.createElement("span");
alert.innerText = "알림창";
const closeBtn = document.createElement("button");
closeBtn.innerText = "👎";
closeBtn.classList.add("icon");

function clickClosed() {
  alertBox.classList.toggle(HIDDEN_CLASSNAME);
  boxBtn.classList.toggle(HIDDEN_CLASSNAME);
}

function handleBoxClick() {
  alertBox.classList.toggle(HIDDEN_CLASSNAME);
  closeBtn.addEventListener("click", clickClosed);
  alertBox.appendChild(alert);
  alertBox.appendChild(closeBtn);
  boxBtn.classList.toggle(HIDDEN_CLASSNAME);
}
alertBox.classList.add("hidden");
boxBtn.addEventListener("click", handleBoxClick);
