let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active'); 
    Searchbar.classList.remove('active');
    cartItem.classList.remove('active');
}
let Searchbar = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    Searchbar.classList.toggle('active');
    navbar.classList.remove('active'); 
    
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.header .cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active'); 
    Searchbar.classList.remove('active');
    
}


window.onscroll=()=>{
    navbar.classList.remove('active'); 
    Searchbar.classList.remove('active');
    cartItem.classList.remove('active');
}

