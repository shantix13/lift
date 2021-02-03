$(function() {

    // Якорь на кнопки
    $('[data-anchor]').click(function (e) {
        e.preventDefault();
        var div = $(this).attr('data-anchor');
        $("html, body").animate({
            scrollTop: $(div).offset().top - 110
        }, 900, 'swing');
    });

    // Картинка во весь блок
    $('.image-cover-wrap > .image-cover').each(function(){
        var image = $(this).attr('src');
        $(this).parent().css({'background-image':'url('+image+')'});
    });

    // Модальные окна
    // $('[data-modal]').click(function (e) {
    //     e.preventDefault();
    //     var that = $(this);
    //     var target = that.attr('data-modal');
    //     $(target).arcticmodal();
    // });

    // Свернуть/развернуть блок
    $('.collapse').each(function(e){
        var that = $(this);
        if ( that.hasClass('active') ){
            that.find('.collapse-body').fadeIn();
        }
        else{

        }
    });
    $('.collapse-button').click(function(e){
        var that = $(this);
        var parent = that.parents('.collapse');
        var body = parent.find('.collapse-body');
        if ( parent.hasClass('active') ){
            parent.removeClass('active');
            body.slideUp(200);
        }
        else{
            parent.addClass('active');
            body.slideDown(200);
        }
    });

    // Свернуть/развернуть список элементов
    $('.hide-button').click(function(e){
        var that = $(this);
        var parent = that.parents('.hide');
        var body = parent.find('.hide-body');
        parent.toggleClass('active');
        // body.slideToggle(200);
    });
    $('.vacancies-list-more').click(function(e){
        var that = $(this);
        that.fadeOut(200);
    });

    // Свернуть/развернуть фильтр вакансий
    $('.vacancies-sidebar-toggle').click(function(e){
        var that = $(this);
        var parent = $('.vacancies-sidebar');
        var body = $('.vacancies-sidebar-body');
        if ( parent.hasClass('active') ){
            parent.removeClass('active');
            that.text('Показать фильтры');
            body.slideUp(200);
        }
        else{
            parent.addClass('active');
            that.text('Свернуть фильтры');
            body.slideDown(200);
        }
    });
    $('.vacancies-filters-toggle').click(function(e){
        var that = $(this);
        if ( that.hasClass('active') ){
            that.removeClass('active');
            that.text('Показать все');
        }
        else{
            that.addClass('active');
            that.text('Свернуть');
        }
    });

    // Шапка
    function Header(){
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('active');
        }
        else {
            $('.header').removeClass('active');
        }
    }
    Header();
    $(window).scroll(function() {
        Header();
    });

    // Выпадающее меню юзера
    $('.header-user-button').click(function(e){
        var that = $(this);
        $('.header-user-menu').fadeToggle(200);
    });
    $(document).mouseup(function (e) {
        var el1 = $('.header-user');
        if (!el1.is(e.target) && el1.has(e.target).length === 0) {
            $('.header-user-menu').fadeOut(200);
        }
    });

    // Плавное появление блоков
    new WOW().init({
        mobile: false
    });

    // Главный слайдер
    $('.main-slider').slick({
        fade: true,
        infinite: true,
        easing: 'swing',
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 700,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Слайдер курсов
    $('.courses-slider .slider').slick({
        infinite: true,
        easing: 'swing',
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 600,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Слайдер вакансий
    $('.vacancies-slider .slider').slick({
        infinite: true,
        easing: 'swing',
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 600,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Слайдер вакансий в сайдбаре
    var $vacancy_sidebar_slider = $('.vacancy-block-sidebar .list');
    var $vacancy_sidebar_slider_settings = {
        infinite: true,
        easing: 'swing',
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 600,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 99999,
                settings: "unslick"
            },
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    $vacancy_sidebar_slider.slick($vacancy_sidebar_slider_settings);
    $(window).on('resize', function() {
        if (!$vacancy_sidebar_slider.hasClass('slick-initialized')) {
            return $vacancy_sidebar_slider.slick($vacancy_sidebar_slider_settings);
        }
    });

    // Прочие слайдеры
    $('.lessons-slider .slider').slick({
        infinite: true,
        easing: 'swing',
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 600,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.reviews-slider .slider').slick({
        infinite: true,
        easing: 'swing',
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 600,
        draggable: false,
        slidesToShow: 2,
        slidesToScroll: 2
    });

    // Показать ещё
    $('.vacancies-more-button').click(function(e){
        var that = $(this);
        that.parents('.items-more').fadeOut(200);
        $('.vacancies .vacancy').css({ opacity: 0, display: 'inline-block' }).animate({opacity:1}, 300);
    });
    var categories_more_button_text = $('.course-card-categories-more-button').text();
    $('.course-card-categories-more-button').click(function(e){
        var that = $(this);
        if ( that.hasClass('active') ){
            $('.course-card-category.hidden').slideUp(150);
            that.removeClass('active');
            that.text(categories_more_button_text);
        }
        else{
            $('.course-card-category.hidden').slideDown(150);
            that.addClass('active');
            that.text('Свернуть');
        }
    });

    // Закрыть алерт
    $('.alert-close').click(function(e){
        var that = $(this);
        that.parents('.alert').fadeOut(200);
    });


    // Закрыть нотификацию чекбоксов
    $('.check-notification .closer').click(function(e){
        var that = $(this);
        that.parents('.check-notification').fadeOut(200);
    });

    // Выделяем строку по по клику на чекбокс
    $('.table-row .checkbox-filter:not(.favorite-checkbox) input[type=checkbox]').on('change', function(){
        $(this).closest('.table-row').toggleClass('actioned-row');
    });

    // Маска
    $('.field-date').mask("99.99.9999");

    // Формы
    var validationLang = {
        errorTitle: "Ошибка отправки формы!",
        requiredField: "Это обязательное поле",
        requiredFields: "Вы задали не все обязательные поля",
        badTime: "Вы задали некорректное время",
        badEmail: "Вы задали некорректный e-mail",
        badTelephone: "Вы задали некорректный номер телефона",
        badSecurityAnswer: "Вы задали некорректный ответ на секретный вопрос",
        badDate: "Вы задали некорректную дату",
        lengthBadStart: "Значение должно быть длиной ",
        lengthBadEnd: " символов",
        lengthTooLongStart: "Значение длинее, чем ",
        lengthTooShortStart: "Значение меньше, чем ",
        notConfirmed: "Введённые значения не могут быть подтверждены",
        badDomain: "Некорректное значение домена",
        badUrl: "Некорретный URL",
        badCustomVal: "Введённое значение неверно",
        andSpaces: " и пробелы ",
        badInt: "Значение - не число",
        badSecurityNumber: "Введённый защитный номер - неправильный",
        badUKVatAnswer: "Некорректный UK VAT номер",
        badStrength: "Пароль не достаточно надёжен",
        badNumberOfSelectedOptionsStart: "Вы должны выбрать как минимум ",
        badNumberOfSelectedOptionsEnd: " ответов",
        badAlphaNumeric: "Значение должно содержать только числа и буквы ",
        badAlphaNumericExtra: " и ",
        wrongFileSize: "Загружаемый файл слишком велик (максимальный размер %s)",
        wrongFileType: "Принимаются файлы следующих типов %s",
        groupCheckedRangeStart: "Выберите между ",
        groupCheckedTooFewStart: "Выберите как минимум ",
        groupCheckedTooManyStart: "Выберите максимум из ",
        groupCheckedEnd: " элемент(ов)",
        badCreditCard: "Номер кредитной карты некорректен",
        badCVV: "CVV номер некорректно",
        wrongFileDim: "Неверные размеры графического файла,",
        imageTooTall: "изображение не может быть уже чем",
        imageTooWide: "изображение не может быть шире чем",
        imageTooSmall: "изображение слишком мало",
        min: "минимум",
        max: "максимум",
        imageRatioNotAccepted: "Изображение с таким соотношением сторон не принимается",
        badBrazilTelephoneAnswer: "Введённый номер телефона неправильный",
        badBrazilCEPAnswer: "CEP неправильный",
        badBrazilCPFAnswer: "CPF неправильный"
    };
    $.validate({
        form : '#form-feedback',
        language : validationLang,
        borderColorOnError: '',
        scrollToTopOnError : false,
        onSuccess : function($form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $form.serialize()
            }).done(function() {
                $form.find("input").val('');
                $form.get(0).reset();
            });
            return false;
        }
    });
    $.validate({
        form : '#form-login',
        language : validationLang,
        borderColorOnError: '',
        scrollToTopOnError : false,
        onSuccess : function($form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $form.serialize()
            }).done(function() {
                $form.find("input").val('');
                $form.get(0).reset();
            });
            return false;
        }
    });
    $.validate({
        form : '#form-password-recovery',
        language : validationLang,
        borderColorOnError: '',
        scrollToTopOnError : false,
        onSuccess : function($form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $form.serialize()
            }).done(function() {
                $form.find("input").val('');
                $form.get(0).reset();
            });
            return false;
        }
    });
    $.validate({
        form : '#form-content-login',
        language : validationLang,
        borderColorOnError: '',
        scrollToTopOnError : false,
        onSuccess : function($form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $form.serialize()
            }).done(function() {
                $form.find("input").val('');
                $form.get(0).reset();
            });
            return false;
        }
    });
    $.validate({
        form : '#form-registration',
        language : validationLang,
        borderColorOnError: '',
        scrollToTopOnError : false,
        onSuccess : function($form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $form.serialize()
            }).done(function() {
                $form.find("input").val('');
                $form.get(0).reset();
            });
            return false;
        }
    });
    $.validate({
        form : '#form-activation',
        language : validationLang,
        borderColorOnError: '',
        scrollToTopOnError : false,
        onSuccess : function($form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $form.serialize()
            }).done(function() {
                $form.find("input").val('');
                $form.get(0).reset();
            });
            return false;
        }
    });
    $.validate({
        form : '#form-name-change',
        language : validationLang,
        borderColorOnError: '',
        scrollToTopOnError : false,
        onSuccess : function($form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $form.serialize()
            }).done(function() {
                $form.find("input").val('');
                $form.get(0).reset();
            });
            return false;
        }
    });
    $.validate({
        form : '#form-password-change',
        language : validationLang,
        borderColorOnError: '',
        scrollToTopOnError : false,
        onSuccess : function($form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $form.serialize()
            }).done(function() {
                $form.find("input").val('');
                $form.get(0).reset();
            });
            return false;
        }
    });

});