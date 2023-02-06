// Open mobile popup menu
function displayPopUp(){
 const pop_up_menu=document.querySelector("#popup-menu-id");
 pop_up_menu.style.display="block";
 pop_up_menu.style.right=0;
}

// close mobile popup menu
function closePopUp(){
  const pop_up_menu=document.querySelector("#popup-menu-id");
  pop_up_menu.style.right='-23em';
  pop_up_menu.style.display="none";
}

//popup window will go here for project details