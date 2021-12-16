let menu_bar1 = document.getElementById("menu-bar1");
let menu_bar2 = document.getElementById("menu-bar2");
let menu_bar3 = document.getElementById("menu-bar3");
let menu = document.getElementById("menu");
let menu_cover = document.getElementById("menu_cover");
let position=1;
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img1b = document.getElementById("img1b");
let img5b = document.getElementById("img5b");
let mcontainer = document.getElementById("mcontainer");
let leftcontainer = document.getElementById("leftcontainer");
let menuitem1 = document.getElementById("menuitem1");
let menuitem2 = document.getElementById("menuitem2");
let menuitem3 = document.getElementById("menuitem3");
let menuitem4 = document.getElementById("menuitem4");
let menuitem5 = document.getElementById("menuitem5");
const im1=document.querySelector("div.images_item1");
const im2=document.querySelector("div.images_item2");
const im3=document.querySelector("div.images_item3");
const im4=document.querySelector("div.images_item4");
const im5=document.querySelector("div.images_item5");
const im1b=document.querySelector("div.images_item1b");
const im5b=document.querySelector("div.images_item5b");

function bar1(){
    menu_bar1.style.transform = "rotate(130deg) scale(0.7, 1) translate(10px, -15px)";
    menu_bar1.style.transition = "1s";
}
function bar2(){
    menu_bar2.style.transform = "rotate(90deg)";
    menu_bar2.style.transition = "1s";
}
function bar3(){
    menu_bar3.style.transform = "rotate(50deg) scale(0.7, 1) translate(-8px, 5px)";
    menu_bar3.style.transition = "1s";
}
function menuc(){
    menu_cover.style.transform ="translateY(40px)";
}
function bar1r(){
    menu_bar1.style.transform = "rotate(0deg) scale(1, 1) translate(0px, 0px)";
    menu_bar1.style.transition = "1s";
}
function bar2r(){
    menu_bar2.style.transform = "rotate(0deg)";
    menu_bar2.style.transition = "1s";
}
function bar3r(){
    menu_bar3.style.transform = "rotate(0deg) scale(1, 1) translate(0px, 0px)";
    menu_bar3.style.transition = "1s";
}
function menucr(){
    menu_cover.style.transform ="translateY(0px)";
}
function pos1(){
    img1.style.opacity=1;
    img1.style.flexGrow=1;
    img1.style.width="70%";
    img2.style.opacity=0.7;
    img2.style.width="15%";
    img3.style.opacity=0;
    img3.style.width="0%";
    img4.style.opacity=0;
    img4.style.width="0%";
    img5.style.opacity=0;
    img5.style.width="0%";
    img1b.style.opacity=0;
    img1b.style.width="0%";
    img5b.style.opacity=0.7;
    img5b.style.width="15%";
}
function pos2(){
    img1.style.opacity=0.7;
    img1.style.width="15%";
    img2.style.opacity=1;
    img2.style.flexGrow=1;
    img2.style.width="70%";
    img3.style.opacity=0.7;
    img3.style.width="15%";
    img4.style.opacity=0;
    img4.style.width="0%";
    img5.style.opacity=0;
    img5.style.width="0%";
    img1b.style.opacity=0;
    img1b.style.width="0%";
    img5b.style.opacity=0;
    img5b.style.width="0%";
}
function pos3(){
    img1.style.opacity=0;
    img1.style.width="0px";
    img2.style.opacity=0.7;
    img2.style.width="15%";
    img3.style.opacity=1;
    img3.style.flexGrow=1;
    img3.style.width="70%";
    img4.style.opacity=0.7;
    img4.style.width="15%";
    img5.style.opacity=0;
    img5.style.width="0px";
    img1b.style.opacity=0;
    img1b.style.width="0px";
    img5b.style.opacity=0;
    img5b.style.width="0px";
}
function pos4(){
    img1.style.opacity=0;
    img1.style.width="0px";
    img2.style.opacity=0;
    img2.style.width="0px";
    img3.style.opacity=0.7;
    img3.style.width="15%";
    img4.style.opacity=1;
    img4.style.flexGrow=1;
    img4.style.width="70%";
    img5.style.opacity=0.7;
    img5.style.width="15%";
    img1b.style.opacity=0;
    img1b.style.width="0px";
    img5b.style.opacity=0;
    img5b.style.width="0px";
}
function pos5(){
    img1.style.opacity=0;
    img1.style.width="0px";
    img2.style.opacity=0;
    img2.style.width="0px";
    img3.style.opacity=0;
    img3.style.width="0px";
    img4.style.opacity=0.7;
    img4.style.width="15%";
    img5.style.opacity=1;
    img5.style.flexGrow=1;
    img5.style.width="70%";
    img1b.style.opacity=0.7;
    img1b.style.width="15%";
    img5b.style.opacity=0;
    img5b.style.width="0px";
}
function mopen(){
mcontainer.style.width="20%";
leftcontainer.style.width="0%"
}
function mclose(){
mcontainer.style.width="0%";
leftcontainer.style.width="10%"
}
function menutexton1(){
    menuitem1.style.opacity=1;
}
function menutextoff1(){
    menuitem1.style.opacity=0;
}
function menutexton2(){
    menuitem2.style.opacity=1;
}
function menutextoff2(){
    menuitem2.style.opacity=0;
}
function menutexton3(){
    menuitem3.style.opacity=1;
}
function menutextoff3(){
    menuitem3.style.opacity=0;
}
function menutexton4(){
    menuitem4.style.opacity=1;
}
function menutextoff4(){
    menuitem4.style.opacity=0;
}
function menutexton5(){
    menuitem5.style.opacity=1;
}
function menutextoff5(){
    menuitem5.style.opacity=0;
}
function menucolor1on(){
    menuitem1.style.color="#009DAE";
}
function menucolor1off(){
    menuitem1.style.color="black";
}
function menucolor2on(){
    menuitem2.style.color="#009DAE";
}
function menucolor2off(){
    menuitem2.style.color="black";
}
function menucolor3on(){
    menuitem3.style.color="#009DAE";
}
function menucolor3off(){
    menuitem3.style.color="black";
}
function menucolor4on(){
    menuitem4.style.color="#009DAE";
}
function menucolor4off(){
    menuitem4.style.color="black";
}
function menucolor5on(){
    menuitem5.style.color="#009DAE";
}
function menucolor5off(){
    menuitem5.style.color="black";
}
menu.addEventListener("click", bar1);
menu.addEventListener("click", bar2);
menu.addEventListener("click", bar3);
menu.addEventListener("click", menuc);
menu_cover.addEventListener("click", bar1r);
menu_cover.addEventListener("click", bar2r);
menu_cover.addEventListener("click", bar3r);
menu_cover.addEventListener("click", menucr);
menu.addEventListener("click", mopen);
menu_cover.addEventListener("click", mclose);
menu.addEventListener("click", menutexton1);
menu_cover.addEventListener("click", menutextoff1);
menu.addEventListener("click", menutexton2);
menu_cover.addEventListener("click", menutextoff2);
menu.addEventListener("click", menutexton3);
menu_cover.addEventListener("click", menutextoff3);
menu.addEventListener("click", menutexton4);
menu_cover.addEventListener("click", menutextoff4);
menu.addEventListener("click", menutexton5);
menu_cover.addEventListener("click", menutextoff5);


im1.addEventListener("click", e => {
    pos1();
})
im2.addEventListener("click", e => {
    pos2();
})
im3.addEventListener("click", e => {
    pos3();
})
im4.addEventListener("click", e => {
    pos4();
})
im5.addEventListener("click", e => {
    pos5();
})
im1b.addEventListener("click", e => {
    pos1();
})
im5b.addEventListener("click", e => {
    pos5();
})

menuitem1.addEventListener("mouseover", e => {
    menucolor1on();
})
menuitem2.addEventListener("mouseover", e => {
    menucolor2on();
})
menuitem3.addEventListener("mouseover", e => {
    menucolor3on();
})
menuitem4.addEventListener("mouseover", e => {
    menucolor4on();
})
menuitem5.addEventListener("mouseover", e => {
    menucolor5on();
})
menuitem1.addEventListener("mouseout", e => {
    menucolor1off();
})
menuitem2.addEventListener("mouseout", e => {
    menucolor2off();
})
menuitem3.addEventListener("mouseout", e => {
    menucolor3off();
})
menuitem4.addEventListener("mouseout", e => {
    menucolor4off();
})
menuitem5.addEventListener("mouseout", e => {
    menucolor5off();
})