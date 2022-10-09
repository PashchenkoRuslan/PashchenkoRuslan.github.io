'use strict'


// tabs
const TabsShow = document.querySelectorAll('.show_bonuse'),
      TabsContent = document.querySelectorAll('.tariffs_bonuse-content');



for (let i = 0; i < TabsShow.length; i++) {
    TabsShow[i].addEventListener('click',() => {
        TabsContent[i].classList.toggle('hide');
    });
}


// carousel

const carouselPrevBtn = document.querySelector('.reviews_carousel-prev'),
      carouselNextBtn = document.querySelector('.reviews_carousel-next'),
      carouselContent = document.querySelectorAll('.reviews_carousel-item'),
      carouselStaticHow = document.querySelector('.reviews_tmp-how'),
      carouselStaticAll = document.querySelector('.reviews_tmp-all');

let tmp = 0; 

function checkHowElement() {
    carouselStaticHow.innerHTML = tmp + 1;
}


function HideOtherElements(myElem) {
    for (let i=0; i < carouselContent.length; i++) {
        carouselContent[i].classList.add('hide');
    }

    carouselContent[tmp].classList.remove('hide');
    checkHowElement()
}

carouselPrevBtn.addEventListener('click', ()=> {
    if (tmp == 0) {
        tmp = carouselContent.length - 1;
    } else {
        tmp--;
    }
    
    HideOtherElements(tmp);
    checkHowElement()
});

carouselNextBtn.addEventListener('click', ()=> {
    if (tmp == carouselContent.length - 1) {
        tmp = 0;
    } else {
        tmp++;
    }
    
    HideOtherElements(tmp);
});


// module


const moduleBtn = document.querySelectorAll('.programm_btn'),
      moduleContent = document.querySelectorAll('.programm_content');

for (let i = 0; i < moduleBtn.length; i++) {
    moduleBtn[i].addEventListener('click', ()=> {
        moduleContent[i].classList.toggle('hide');
    });
}