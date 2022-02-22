const loginBox = document.querySelector(".login-alert-box");
const idBtn = document.querySelector("#login-id");
const pwBtn = document.querySelector("#login-pw");
const btn = document.querySelectorAll(".login-btn button");

const HIDDEN_CLASSNAME = "hidden";

/* login Box */
const loginForm = document.createElement("form");
const loginInfo = document.createElement("input");
loginForm.appendChild(loginInfo);
loginInfo.classList.add("login-input");
const submitBtn = document.createElement("button");
loginForm.appendChild(submitBtn);
submitBtn.classList.add("icon");
loginBox.appendChild(loginForm);

function handleBtn() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.toggle(HIDDEN_CLASSNAME);
  }
}
function submitId(e) {
  e.preventDefault();
  handleBtn();
  const userId = loginInfo.value;
  localStorage.setItem("userId", userId);
  loginBox.classList.toggle(HIDDEN_CLASSNAME);
}
function submitPw(e) {
  e.preventDefault();
  handleBtn();
  const userPw = loginInfo.value;
  localStorage.setItem("userPw", userPw);
  loginBox.classList.toggle(HIDDEN_CLASSNAME);
}

function handleBtnClick() {
  loginInfo.required = true;
  submitBtn.innerText = "👍";
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  submitBtn.addEventListener("submit", submitId);
  handleBtn();
}
function idBtnClick() {
  loginInfo.placeholder = "아이디를 입력해라";
  handleBtnClick();
}
function pwBtnClick() {
  loginInfo.placeholder = "비밀번호를 입력해라";
  handleBtnClick();
}

loginBox.classList.add(HIDDEN_CLASSNAME);
idBtn.addEventListener("click", idBtnClick);
pwBtn.addEventListener("click", pwBtnClick);
