document.addEventListener('DOMContentLoaded', () => {
  let block = document.querySelector('.block-body');
  let btnSearch = document.querySelector('.search');
  let header = document.querySelector('.header');
  let btnCart = document.querySelector('.cart');
  let boxcart = document.querySelector('.cart-box');
  let container = document.querySelector('.container');
  let logo = document.querySelector('.logo img');
  let menu = document.querySelectorAll('.menu a');

  console.log(logo);
  btnSearch.onclick = () => {
    block.style.opacity = '0.8';
    block.style.visibility = 'visible';
    container.style.transform = 'translateX(-300px)';
    container.style.position = 'fixed';
    boxcart.style.zIndex = '-1';
  }

  btnCart.onclick = () => {
    boxcart.style.zIndex = '0';
    block.style.opacity = '0.8';
    block.style.visibility = 'visible';
    container.style.transform = 'translateX(-300px)';
    container.style.position = 'fixed';

  }

  block.onclick = () => {
    block.style.opacity = '0';
    block.style.visibility = 'hidden';
    container.style.transform = 'translateX(0px)';
    container.style.transform = 'unset';
    container.style.position = 'unset';
    header.style.position = 'fixed';
  }

  window.addEventListener('scroll', () => {
    let trangthai = false;
    if (window.pageYOffset > 200) {
      if (trangthai == false) {
        for(let a = 0;a<menu.length;a++)
        {
          menu[a].style.color = 'black';
        }
        logo.style.opacity = '1';
        logo.style.visibility = 'visible';
        logo.style.height = '70px';
        logo.style.width = '170px';
        header.style.height = '60px';
        header.style.backgroundColor = 'white';
      }
    }
    else if (window.pageYOffset < 200) {
      for(let a = 0;a<menu.length;a++)
        {
          menu[a].style.color = 'white';
        }
      header.style.height = '100px';
      logo.style.height = '80px';
      logo.style.width = '170px';
      // logo.style.opacity = '0';
      // logo.style.visibility = 'hidden';
      header.style.backgroundColor = 'transparent';
    }
  })


  /*slider*/
  let slidecontent = document.querySelectorAll('.slidecontent');
  let btnpre = document.querySelector('.pre');
  let btnnext = document.querySelector('.next');
  let index2 = 1;
  changeslide(index2);
  autochangeslide();
  btnnext.onclick = function (n) {
    n = 1;
    index2 = index2 + n;
    changeslide(index2);
  }

  btnpre.onclick = function (n) {
    n = -1;
    index2 = index2 + n;
    changeslide(index2);
  }



  function changeslide(n) {
    if (n > slidecontent.length) {
      index2 = 1;
    }
    if (n <= 0) {
      index2 = slidecontent.length;
    }
    for (let i = 0; i < slidecontent.length; i++) {
      slidecontent[i].style.opacity = '0';
      slidecontent[i].style.visibility = 'hidden';
    }
    slidecontent[index2 - 1].style.opacity = '1';
    slidecontent[index2 - 1].style.visibility = 'visible';
  }

  function autochangeslide() {
    if (index2 > slidecontent.length) {
      index2 = 1;
    }
    if (index2 <= 0) {
      index2 = slidecontent.length;
    }
    for (let i = 0; i < slidecontent.length; i++) {
      slidecontent[i].style.opacity = '0';
      slidecontent[i].style.visibility = 'hidden';
    }
    slidecontent[index2 - 1].style.opacity = '1';
    slidecontent[index2 - 1].style.visibility = 'visible';
    index2++;
    setTimeout(autochangeslide, 3000);
  }

  /*nav-mobile*/
  let btnNav = document.querySelector('.nav-mobile');
  let navcontent = document.querySelector('.navcontent');

  btnNav.onclick = () => {
    block.style.opacity = '0.8';
    block.style.visibility = 'visible';
    container.style.transform = 'translateX(250px)';
    container.style.position = 'fixed';
  }

  let vitri_len = 300;
  let newclothing = document.querySelector('.new-clothing');
  // newclothing.style.opacity = '0';
  // newclothing.style.transform = 'translateY(' + vitri_len + 'px)';
  let hotproduct = document.querySelector('.hot-product');
  let allproduct = document.querySelector('.all-product');

  // hotproduct.style.opacity = '0';
  hotproduct.style.transform = 'translateY(' + vitri_len + 'px)';
  // allproduct.style.opacity = '0';
  allproduct.style.transform = 'translateY(' + vitri_len + 'px)';
  window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    // if (window.pageYOffset > newclothing.offsetTop - 500) {

    //   newclothing.style.transform = 'translateY(0px)';
    //   newclothing.style.opacity = '1';
    // }
    if (window.pageYOffset > hotproduct.offsetTop - 500) {
      hotproduct.style.transform = 'translateY(0px)';
      hotproduct.style.opacity = '1';
    }
    if(window.pageYOffset < hotproduct.offsetTop - 500)
    {
      hotproduct.style.transform = 'translateY(300px)';
      hotproduct.style.opacity = '0';
    }
    if (window.pageYOffset > allproduct.offsetTop - 500) {
      allproduct.style.transform = 'translateY(0px)';
      allproduct.style.opacity = '1';
    }
    if (window.pageYOffset < allproduct.offsetTop - 500) {
      allproduct.style.transform = 'translateY(300px)';
      allproduct.style.opacity = '0';
    }
  })

  /*nav-content*/
  let nav_mobile_content = document.querySelectorAll('.nav-content');
  let btnnav_content = document.querySelectorAll('.navcontent a');
  let icon_nav = document.querySelectorAll('.navcontent a i');
  let count = 1;
  for(let i = 1;i<btnnav_content.length;i++)
  {
    btnnav_content[i].onclick = ()=>{
      if(count == 1)
   {
    icon_nav[i -1].className = icon_nav[i].className.replace("fas fa-chevron-down","fas fa-chevron-up");
    nav_mobile_content[i - 1].style.opacity = '1';
    nav_mobile_content[i - 1].style.visibility = 'visible';
    nav_mobile_content[i - 1].style.height = '70px';
    count = 2;
   }
   else if(count == 2)
   {
    icon_nav[i-1].className = icon_nav[i].className.replace("fas fa-chevron-up","fas fa-chevron-down");
      nav_mobile_content[i-1].style.opacity = '0';
      nav_mobile_content[i-1].style.visibility = 'hidden';
      nav_mobile_content[i-1].style.height = '0px';
    count = 1;
   }
    }
  }


/*.backtoHeader*/
let btnBack = document.querySelector('.backtoHeader');
// console.log(btnBack);
window.addEventListener('scroll',()=>{
  if(window.pageYOffset > 600)
{
  btnBack.style.opacity = '1';
  btnBack.style.visibility = 'visible';
}
else if(window.pageYOffset < 600){
  btnBack.style.opacity = '0';
  btnBack.style.visibility = 'hidden';
}
})

}, false)