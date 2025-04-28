// Block right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  
  // Block important keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Block F12
    if (event.keyCode === 123) {
      event.preventDefault();
      return false;
    }
    // Block Ctrl+Shift+I (Inspect)
    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
      event.preventDefault();
      return false;
    }
    // Block Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
      event.preventDefault();
      return false;
    }
    // Block Ctrl+U (View Source)
    if (event.ctrlKey && event.keyCode === 85) {
      event.preventDefault();
      return false;
    }
    // Block Ctrl+S (Save)
    if (event.ctrlKey && event.keyCode === 83) {
      event.preventDefault();
      return false;
    }
    // Block Ctrl+P (Print)
    if (event.ctrlKey && event.keyCode === 80) {
      event.preventDefault();
      return false;
    }
    // Block Ctrl+C (Copy)
    if (event.ctrlKey && event.keyCode === 67) {
      event.preventDefault();
      return false;
    }
    // Block Ctrl+V (Paste)
    if (event.ctrlKey && event.keyCode === 86) {
      event.preventDefault();
      return false;
    }
  });


// Hero Slider

var swiper = new Swiper ('.heroswiper', {
    slidesPerview: 1,
    spaceBetween: 0,
    loop: true, 
        autoplay: {
            delay:2000,
        },
    navigaton: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev'
    },
});


// Popular Categories Swiper

var swiper = new Swiper('.popular-categories-swiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
        1200: {
            slidesPerView: 6,
        },
        1199: {
            slidesPerView: 5,
        },
        767: {
            slidesPerView: 4,
        },
        575: {
            slidesPerView: 3,
        },
        425: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});


// New Arrivals Swiper

var swiper = new Swiper ('.new-arrivals-swiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay:true,
    breakpoints: {
        1200: {
            slidesPerView: 5,
        },
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

// Brands Swiper

var swiper = new Swiper('.brand-swiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay:true,
    breakpoints: {
        992: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

// Best Sell Swiper

var swiper = new Swiper('.best-sell-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay:true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

// Update Nav Count

function updateNavCounts() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let wishlistCount = wishlist.length;
    let wishlistSpan = document.querySelector('.wishlist-span');
    if(wishlistSpan){
        wishlistSpan.textContent = wishlistCount;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let uniqueCart = [];
    cart.forEach(item => {
        if(!uniqueCart.find(prod => prod.id == item.id)){
            uniqueCart.push(item);
        }
    });

    let cartCount = uniqueCart.length;
    let cartSpan = document.querySelector('.cart-span');
    if(cartSpan){
        cartSpan.textContent = cartCount;
    }


}

document.addEventListener('DOMContentLoaded', () =>{
 updateNavCounts();
});