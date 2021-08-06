$(function () {


    // nav menu

    let pX = $('nav button');
    let nav = $('nav');
    let menuBtn = $('.menu-btn');
    let menuNav = $(".menu-nav");
    let sousMenu = $(".sous-menu");

    sousMenu.hide();

    menuNav.on('click', function () {
        sousMenu.not($(this).children(".sous-menu")).hide();
        $(this).children(".sous-menu").slideToggle(500);
    });
    menuBtn.on('click', function () {
        nav.css('transform', 'translateX(0%)');
        nav.css('transition', '.8s ease');
    });
    pX.on('click', function () {
        nav.css('transform', 'translateX(-100%)');
        nav.css('transition', '.8s ease');
    });

    // header button
    $('header button').on('click', function () {
        window.location.href = 'reservation.html';
    });

    // video event

    let videoEvent1 = $('#videoEventOne');
    let btnVideo1 = $('#videoOne');
    let btnTitle1 = $('#titleOne');
    let videoEvent2 = $('#videoEventTwo');
    let btnVideo2 = $('#videoTwo');
    let btnTitle2 = $('#titleTwo');
    let videoEvent3 = $('#videoEventThree');
    let btnVideo3 = $('#videoThree');
    let btnTitle3 = $('#titleThree');

    videoEvent1.css('transform', 'translateY(-100vh)');
    videoEvent1.css('opacity', '0');
    videoEvent2.css('transform', 'translateY(-100vh)');
    videoEvent2.css('opacity', '0');
    videoEvent3.css('transform', 'translateY(-100vh)');
    videoEvent3.css('opacity', '0');

    btnTitle1.on('click', () => {
        videoEvent1.css('transition', '1s ease-in-out');
        videoEvent1.css('opacity', '1');
        videoEvent1.css('transform', 'translateY(0)');
    });
    btnTitle2.on('click', () => {
        videoEvent2.css('transition', '1s ease-in-out');
        videoEvent2.css('opacity', '1');
        videoEvent2.css('transform', 'translateY(0)');
    });
    btnTitle3.on('click', () => {
        videoEvent3.css('transition', '1s ease-in-out');
        videoEvent3.css('opacity', '1');
        videoEvent3.css('transform', 'translateY(0)');
    });

    btnVideo1.on('click', () => {
        videoEvent1.css('transition', '1s ease-in-out');
        videoEvent1.css('transform', 'translateY(-100vh)');
        videoEvent1.css('opacity', '0');
    });
    btnVideo2.on('click', () => {
        videoEvent2.css('transition', '1s ease-in-out');
        videoEvent2.css('transform', 'translateY(-100vh)');
        videoEvent2.css('opacity', '0');
    });
    btnVideo3.on('click', () => {
        videoEvent3.css('transition', '1s ease-in-out');
        videoEvent3.css('transform', 'translateY(-100vh)');
        videoEvent3.css('opacity', '0');
    });

    // scroll

    window.addEventListener('scroll', function () {
        var offset = window.pageYOffset;
        document.getElementById('parallax').style.backgroundPositionY = -offset * 0.3 + 'px';
    });

    // mainPresse
    let imageOne = $('#imageOne');
    let imageTwo = $('#imageTwo');
    let imageThree = $('#imageThree');
    let imageFour = $('#imageFour');
    let imageFive = $('#imageFive');
    let imageSix = $('#imageSix');

    $('#section1').css('transform', 'translateY(-100vh)');
    $('#section1').css('opacity', '0');
    $('#section2').css('transform', 'translateY(-100vh)');
    $('#section2').css('opacity', '0');
    $('#section3').css('transform', 'translateY(-100vh)');
    $('#section3').css('opacity', '0');
    $('#section4').css('transform', 'translateY(-100vh)');
    $('#section4').css('opacity', '0');
    $('#section5').css('transform', 'translateY(-100vh)');
    $('#section5').css('opacity', '0');
    $('#section6').css('transform', 'translateY(-100vh)');
    $('#section6').css('opacity', '0');

    imageOne.on('click', () => {
        $('#section1').css('transition', '1s ease-in-out');
        $('#section1').css('opacity', '1');
        $('#section1').css('transform', 'translateY(0)');
    });
    imageTwo.on('click', () => {
        $('#section2').css('transition', '1s ease-in-out');
        $('#section2').css('opacity', '1');
        $('#section2').css('transform', 'translateY(0)');
    });
    imageThree.on('click', () => {
        $('#section3').css('transition', '1s ease-in-out');
        $('#section3').css('opacity', '1');
        $('#section3').css('transform', 'translateY(0)');
    });
    imageFour.on('click', () => {
        $('#section4').css('transition', '1s ease-in-out');
        $('#section4').css('opacity', '1');
        $('#section4').css('transform', 'translateY(0)');
    });
    imageFive.on('click', () => {
        $('#section5').css('transition', '1s ease-in-out');
        $('#section5').css('opacity', '1');
        $('#section5').css('transform', 'translateY(0)');
    });
    imageSix.on('click', () => {
        $('#section6').css('transition', '1s ease-in-out');
        $('#section6').css('opacity', '1');
        $('#section6').css('transform', 'translateY(0)');
    });

    $('#section1 button').on('click', () => {
        $('#section1').css('transition', '1s ease-in-out');
        $('#section1').css('transform', 'translateY(-100vh)');
        $('#section1').css('opacity', '0');
    });
    $('#section2 button').on('click', () => {
        $('#section2').css('transition', '1s ease-in-out');
        $('#section2').css('transform', 'translateY(-100vh)');
        $('#section2').css('opacity', '0');
    });
    $('#section3 button').on('click', () => {
        $('#section3').css('transition', '1s ease-in-out');
        $('#section3').css('transform', 'translateY(-100vh)');
        $('#section3').css('opacity', '0');
    });
    $('#section4 button').on('click', () => {
        $('#section4').css('transition', '1s ease-in-out');
        $('#section4').css('transform', 'translateY(-100vh)');
        $('#section4').css('opacity', '0');
    });
    $('#section5 button').on('click', () => {
        $('#section5').css('transition', '1s ease-in-out');
        $('#section5').css('transform', 'translateY(-100vh)');
        $('#section5').css('opacity', '0');
    });
    $('#section6 button').on('click', () => {
        $('#section6').css('transition', '1s ease-in-out');
        $('#section6').css('transform', 'translateY(-100vh)');
        $('#section6').css('opacity', '0');
    });























}); ////////////////////////