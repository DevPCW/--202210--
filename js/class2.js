window.onload = () => {
  console.log("class2.html: " + localStorage.username);
  // window.alert(localStorage.username);

  // const btn = document.querySelector("button");
  // btn.onclick = () => {
  //   print();
  // }

  const btns = document.querySelectorAll("button");
  btns[0].onclick = () => {
    print();
  }

  btns[1].onclick = () => {
    history.back();
  }




  // print();

}