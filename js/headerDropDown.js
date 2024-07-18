const menuHeader = document.getElementById("dropDownElements");
let isVisible = false;

const toggleDropDown = () => {
  if (isVisible == false) menuHeader.style.display = "flex";
  if (isVisible == true) menuHeader.style.display = "none";

  isVisible = !isVisible;
};
