/* navbar에서 button을 누르면 밑에 메뉴들이 나오는 것을 만들어야함
    button : addEventListener하고 있어야한다.
             누르면 메뉴들이 나와야한다.
    div : button click하면 menu list가 나온다.
     */

const nav = document.querySelector(".navbar");
const navBtn = nav.querySelector(".navbar-toggler");

const menus = document.querySelector(".navbar-menus");
const anItemDiv = menus.querySelector(".anItem");
const secondItemDiv = menus.querySelector(".secondItem");
const thirdItemDiv = menus.querySelector(".thirdItem");
const fourthItemDiv = menus.querySelector(".fourthItem");
const fifthItemDiv = menus.querySelector(".fifthItem");

const anItem = document.createElement("span");
anItem.innerText = "An item";
const secondItem = document.createElement("span");
secondItem.innerText = "A second item";
const thirdItem = document.createElement("span");
thirdItem.innerText = "A third item";
const fourthItem = document.createElement("span");
fourthItem.innerText = "A fourth item";
const fifthItem = document.createElement("span");
fifthItem.innerText = "And a fifth one";

anItemDiv.appendChild(anItem);
secondItemDiv.appendChild(secondItem);
thirdItemDiv.appendChild(thirdItem);
fourthItemDiv.appendChild(fourthItem);
fifthItemDiv.appendChild(fifthItem);

function navbarBtnClick() {
  menus.classList.toggle(HIDDEN_CLASSNAME);
}

menus.classList.add(HIDDEN_CLASSNAME);
navBtn.addEventListener("click", navbarBtnClick);
