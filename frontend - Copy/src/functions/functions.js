
export default function functions() {

  function sum(no1,no2){
    let sum = no1 + no2;
    return sum;
  }

  // toggle class
  const toggleClass = (slection,nextClass)=>{
    let elem = document.querySelector(slection);
    elem.classList.toggle(nextClass);
    // return true
  }

  function addClass(slection,addClass){
    let elem = document.querySelector(slection);
    elem.classList.add(addClass);
  }

  function removeClass(slection,addClass){
    let elem = document.querySelector(slection);
    elem.classList.remove(addClass);
  }

  const toggleLayout = (layout)=>{
    localStorage.setItem("layout",localStorage.getItem("layout") == "grid" ? "row" : "grid");
  }

  function clickable(elem){
    let el = document.querySelector(elem);
    el.click();
  }

  function togglePwd(pwdInput,toggleBtn){
    let toggleButton = document.querySelector(toggleBtn)
    let input = document.querySelector(pwdInput);
    if(input.getAttribute("type") == "password"){
      input.setAttribute("type","text");
      toggleButton.classList.replace("ri-eye-off-line","ri-eye-line");
    }
    else{
      input.setAttribute("type","password");
      toggleButton.classList.replace("ri-eye-line","ri-eye-off-line");
    }
  }


  return { sum,toggleClass,toggleLayout,addClass,removeClass,clickable,togglePwd };
}