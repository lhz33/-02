var swiper = new Swiper('.swiper-container', {
    // spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 0,
    speed: 600,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // observer:true,//修改swiper自己或子元素时，自动初始化swiper
    // observeParents:true,//修改swiper的父元素时，自动初始化swiper
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });