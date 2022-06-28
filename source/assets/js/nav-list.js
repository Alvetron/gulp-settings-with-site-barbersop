let btn = document.querySelector(".nav__toggle");
let menu = document.querySelector(".nav__list");

const showMenu = () => {
  if(menu.style.right === "0px") {
    btn.style.right = 0 ;
    menu.style.right = -250 + "px";
  } else {
    btn.style.right = 250 + "px";
    menu.style.right = 0;
  }
}

btn.onclick = showMenu;