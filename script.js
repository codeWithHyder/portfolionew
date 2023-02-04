function displayPopUp(){
 let pop_up_menu= document.getElementById("popup-menu-id");
 pop_up_menu.style.display="block";
 pop_up_menu.style.right=0;
 pop_up_menu.style.top=0;
 pop_up_menu.style.transition="ease-in-out 0.5s";
 pop_up_menu.style.zIndex=1;
}

function closePopUp(){
  let ele=document.getElementById("popup-menu-id");
  ele.style.display="none";
  ele.style.right="-23em";
  ele.style.display.top=0;
  ele.style.transition="0.5s ease-in-out";
  ele.style.zIndex=2;
}