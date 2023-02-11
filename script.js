
    const hamburger = document.querySelector('.hamburger');
     const  navBar = document.querySelector('#navlinks');
hamburger.addEventListener('click',()=>{
 hamburger.classList.toggle('active');
navBar.classList.toggle('active');
})
//   function removeClass () {
//    let e = document.getElementById('content');
//    e.classList.remove('text');
//  }