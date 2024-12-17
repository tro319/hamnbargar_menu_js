

// header-list の、設定(三本線など)。

$(window).on("load", function() {
    $('.open-btn1').click(function() {
      if ($('.header-list').hasClass('hidden')) {
        $('.header-list').removeClass('hidden').addClass('visible');
      } else {
        $('.header-list').removeClass('visible').addClass('hidden');
      }
      $(this).toggleClass('active');
    });
  
    $(window).resize(function() {
      if ($(window).width() > 768) {
        $('.header-list').removeClass('hidden visible');
      } else {
        $('.header-list').addClass('hidden').removeClass('visible');
      }
      $('.open-btn1').removeClass('active');
    }).resize();
  });




// スクロールを促す矢印の設定

document.querySelectorAll('.arrow-inner').forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        const nextPhoto = document.querySelectorAll('.main-img')[index + 1];
        if(nextPhoto) {
            window.scroll({
                top: nextPhoto.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    document.querySelectorAll('.arrow-inner').forEach((arrow) => {
            const photoTop = arrow.parentElement.offsetTop;
            if(window.scrollY > photoTop - window.innerHeight + 600) {
                arrow.classList.add('delete');
            }
    });
});



// スクロールしたら表示

const move = function() {
    const targets = document.getElementsByClassName("main-img");

    const position = Math.floor(window.innerHeight * 0.75);

    for(let i = 0; i < targets.length; i++) {
        let offsetTop = Math.floor(targets[i].getBoundingClientRect().top);

        if (offsetTop < position) {
            targets[i].classList.add('active');
        }
    }

    
}

window.addEventListener("scroll", move, false);
window.addEventListener("load", move, false);





