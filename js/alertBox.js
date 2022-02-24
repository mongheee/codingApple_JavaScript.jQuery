const loginBox = document.querySelector(".login-alert-box");
const loginBtn = document.querySelector("#login-btn");
const popupWrap = document.querySelector("#popup-wrap");

const HIDDEN_CLASSNAME = "hidden";
const FADEOUT_CLASSNAME = "popup-fade-out";
const FADEIN_CLASSNAME = "popup-fade-in";

/* 모달창 만들기 */
const alertBox = document.createElement("div");
alertBox.classList.add("alertBox");
alertBox.classList.add(HIDDEN_CLASSNAME);
const alertText = document.createElement("span");
alertText.innerText =
  "로그인 해라 이놈아, 로그인아이디랑 비밀번호 기억해내라 이놈아, 한번에 로그인 하도록!";
const alertBtn = document.createElement("button");
alertBtn.innerText = "Login Go";
alertBtn.classList.add("btn");
alertBtn.classList.add("btn-danger");
alertBox.appendChild(alertText);
alertBox.appendChild(alertBtn);
popupWrap.appendChild(alertBox);

/* login input */
const loginForm = document.createElement("form");
loginForm.classList.add("login-form");
const id = document.createElement("input");
id.placeholder = "아이디를 입력해라";
id.required = true;
const pw = document.createElement("input");
pw.placeholder = "비밀번호를 입력해라";
pw.type = "password";
pw.required = true;
const submitLogin = document.createElement("button");
submitLogin.innerText = "👍👍";
submitLogin.classList.add("icon");

loginForm.appendChild(id);
loginForm.appendChild(pw);
loginForm.appendChild(submitLogin);
loginBox.appendChild(loginForm);

/*  welcom content*/
const welcome = document.createElement("h1");
loginBox.after(welcome);
welcome.classList.add("welcome-user");
welcome.classList.add(HIDDEN_CLASSNAME);

function paintUser(user) {
  welcome.innerText = `Hello, ${user} :)`;
  welcome.classList.toggle(HIDDEN_CLASSNAME);
}

function handlesubmitLogin(e) {
  e.preventDefault();
  const userId = id.value;
  const userPw = pw.value;
  localStorage.setItem("userId", userId);
  localStorage.setItem("userPw", userPw);
  loginBox.classList.toggle(HIDDEN_CLASSNAME);
  paintUser(userId);
}

function alertBtnClick() {
  loginForm.addEventListener("submit", handlesubmitLogin);
  popupWrap.classList.replace(FADEIN_CLASSNAME, FADEOUT_CLASSNAME);
  loginBox.classList.remove(HIDDEN_CLASSNAME);
}

function loginClick() {
  loginBtn.classList.add(HIDDEN_CLASSNAME);
  popupWrap.classList.remove(HIDDEN_CLASSNAME);
  popupWrap.classList.replace(FADEOUT_CLASSNAME, FADEIN_CLASSNAME);
  alertBox.classList.remove(HIDDEN_CLASSNAME);
  alertBtn.addEventListener("click", alertBtnClick);
}

const saveId = localStorage.getItem("userId");

if (saveId !== null) {
  paintUser(saveId);
  loginBtn.classList.toggle(HIDDEN_CLASSNAME);
  popupWrap.classList.toggle(FADEOUT_CLASSNAME);
} else {
  loginBtn.addEventListener("click", loginClick);
  popupWrap.classList.toggle(FADEOUT_CLASSNAME);
}
