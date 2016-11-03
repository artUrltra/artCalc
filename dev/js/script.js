////////////////////////////////////////////////////////////////////////////////////////////// Функции работы с обьектом
// Установка даты и текста //
function setDataAndText(group, text) {
    $('*[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').attr('data-' + group, text);
    $('*[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').find('.' + group).text(text);
}
//  ============================= //

function message(text) {
    $.snackbar({content: text});
}

// Получение даты //
function getFromData(name) {
    return $('*[data-id="' + $('.BAFFLE_SEKECTOR_CLASS').val() + '"]').attr('data-' + name);
}
//  ============================= //

// Проверка числа на 0 и прочее. Результат 0 или число. //
function checkTheErrorNumber(e) {
    e = parseInt(e)
    if (e == NaN || e == 'NaN' || e == 0 || e == '' || e == '0' || e == null || isNaN(e)) {
        return 0;
    } else {
        return e;
    }
}
//  ============================= //

// ==================================================================================================================== //

////////////////////////////////////////////////////////////////////////////////////////////// Прочие функции

// Отрисовка блоков //
function PAINTING() {
    $('#PAINTING-DIAGRAMMA').html("");
    if ($('#TOTAL_PAINTING_ID').val() >= $('#MOVABLE_PAINTING_ID').val()) {
        for (i = 1; i <= parseInt($('#TOTAL_PAINTING_ID').val()); i++) {
            var type = "";
            if (i <= $('#MOVABLE_PAINTING_ID').val()) {
                type = "M";
            } else {
                type = "S";
            }
            var left = 50;
            var top = 20;
            $('#PAINTING-DIAGRAMMA').append('<div  class="drag PAINTING-DIAGRAMMA-EL" style="left:' + left * i + 'px;top:' + top * i + 'px;"' +
                'data-id="' + i + '"' +
                'data-type="' + type + '"' +
                'data-height=""' +
                'data-width=""' +
                'data-price=""' +
                'data-price-in-profil=""' +
                'data-price-in-napolnenii=""' +
                'data-area=""' +
                'data-decor-price=""' +
                'data-group=""' +
                'data-karkas-img=""' +
                'data-karkas-name=""' +
                'data-karkas-info=""' +
                'data-karkas-tsvet-uplotnitelya=""' +
                'data-karkas-tsvet-zaglushki=""' +
                'data-karkas-tsvet-zaglushki-tortsevoy=""' +
                'data-karkas-vid-krepleniya=""' +
                'data-karkas-price="0"' +
                'data-karkas-full-price="0"' +
                'data-vertikalnue-pereochki-count=""' +
                'data-vertikalnue-pereochki-img=""' +
                'data-vertikalnue-pereochki-name=""' +
                'data-vertikalnue-pereochki-price=""' +
                'data-vertikalnue-pereochki-price-for-one=""' +
                'data-horizontal-pereochki-count=""' +
                'data-horizontal-pereochki-img=""' +
                'data-horizontal-pereochki-name=""' +
                'data-horizontal-pereochki-price=""' +
                'data-horizontal-pereochki-price-for-one=""' +
                'data-furnitura-razdvizh-mehanizm="Standart до 40 кг"' +
                'data-furnitura-dovodchik=""' +
                'data-furnitura-skladnoi-mehanizm=""' +
                'data-material-1-type=""' +
                'data-material-1-color=""' +
                'data-material-1-width=""' +
                'data-material-1-height=""' +
                'data-material-1-kol=""' +
                'data-material-1-zakalka-stekla=""' +
                'data-material-1-dvoynoe-zapolnenie=""' +
                'data-material-1-tolschina=""' +
                'data-material-1-ploschad=""' +
                'data-material-1-price="0"' +
                'data-material-2-type=""' +
                'data-material-2-color=""' +
                'data-material-2-width=""' +
                'data-material-2-height=""' +
                'data-material-2-kol=""' +
                'data-material-2-zakalka-stekla=""' +
                'data-material-2-dvoynoe-zapolnenie=""' +
                'data-material-2-tolschina=""' +
                'data-material-2-ploschad=""' +
                'data-material-2-price="0"' +
                'data-material-3-type=""' +
                'data-material-3-color=""' +
                'data-material-3-width=""' +
                'data-material-3-height=""' +
                'data-material-3-kol=""' +
                'data-material-3-zakalka-stekla=""' +
                'data-material-3-dvoynoe-zapolnenie=""' +
                'data-material-3-tolschina=""' +
                'data-material-3-ploschad=""' +
                'data-material-3-price="0"' +
                'data-material-4-type=""' +
                'data-material-4-color=""' +
                'data-material-4-width=""' +
                'data-material-4-height=""' +
                'data-material-4-kol=""' +
                'data-material-4-zakalka-stekla=""' +
                'data-material-4-dvoynoe-zapolnenie=""' +
                'data-material-4-tolschina=""' +
                'data-material-4-ploschad=""' +
                'data-material-4-price="0"' +
                'data-material-5-type=""' +
                'data-material-5-color=""' +
                'data-material-5-width=""' +
                'data-material-5-height=""' +
                'data-material-5-kol=""' +
                'data-material-5-zakalka-stekla=""' +
                'data-material-5-dvoynoe-zapolnenie=""' +
                'data-material-5-tolschina=""' +
                'data-material-5-ploschad=""' +
                'data-material-5-price="0"' +
                '>' +
                '<div class="hideBlock">id = <span class="id">' + i + '</span></div>' +
                '<div class="hideBlock">type = <span class="type">' + type + '</span></div>' +
                '<div class="hideBlock">height = <span class="height"></span></div>' +
                '<div class="hideBlock">width = <span class="width"></span></div>' +
                '<div class="hideBlock">price = <span class="price"></span></div>' +
                '<div class="hideBlock">data-price-in-profil = <span class="data-price-in-profil"></span></div>' +
                '<div class="hideBlock">data-price-in-napolnenii = <span class="data-price-in-napolnenii"></span></div>' +
                '<div class="hideBlock">area = <span class="area"></span></div>' +
                '<div class="hideBlock">decor price = <span class="decor-price"></span></div>' +
                    // '<div>group = <span class="group">0</span></div>' +
                '<div class="hideBlock">group = <span class="group"></span></div>' +
                '<div class="hideBlock">karkas-img = <span class="karkas-img"></span></div>' +
                '<div class="hideBlock">karkas-name = <span class="karkas-name"></span></div>' +
                '<div class="hideBlock">karkas-info = <span class="karkas-info"></span></div>' +
                '<div class="hideBlock">karkas-tsvet-uplotnitelya = <span class="karkas-tsvet-uplotnitelya"></span></div>' +
                '<div class="hideBlock">karkas-tsvet-zaglushki-tortsevoy = <span class="karkas-tsvet-zaglushki-tortsevoy"></span></div>' +
                '<div class="hideBlock">karkas-tsvet-zaglushki = <span class="karkas-tsvet-zaglushki"></span></div>' +
                '<div class="hideBlock">karkas-vid-krepleniya = <span class="karkas-vid-krepleniya"></span></div>' +
                '<div class="hideBlock">karkas-price = <span class="karkas-price">0</span></div>' +
                '<div class="hideBlock">karkas-full-price = <span class="karkas-full-price">0</span></div>' +
                '<div class="hideBlock">vertikalnue-pereochki-count = <span class="vertikalnue-pereochki-count"></span></div>' +
                '<div class="hideBlock">vertikalnue-pereochki-img = <span class="vertikalnue-pereochki-img"></span></div>' +
                '<div class="hideBlock">vertikalnue-pereochki-name = <span class="vertikalnue-pereochki-name"></span></div>' +
                '<div class="hideBlock">vertikalnue-pereochki-price = <span class="vertikalnue-pereochki-price"></span></div>' +
                '<div class="hideBlock">vertikalnue-pereochki-price-for-one = <span class="vertikalnue-pereochki-price-for-one"></span></div>' +
                '<div class="hideBlock">horizontal-pereochki-count = <span class="horizontal-pereochki-count"></span></div>' +
                '<div class="hideBlock">horizontal-pereochki-img = <span class="horizontal-pereochki-img"></span></div>' +
                '<div class="hideBlock">horizontal-pereochki-name = <span class="horizontal-pereochki-name"></span></div>' +
                '<div class="hideBlock">horizontal-pereochki-price = <span class="horizontal-pereochki-price"></span></div>' +
                '<div class="hideBlock">horizontal-pereochki-price-for-one = <span class="horizontal-pereochki-price-for-one"></span></div>' +
                '<div class="hideBlock">data-material-1-type = <span class="material-1-type"></span></div>' +
                '<div class="hideBlock">data-material-1-color = <span class="material-1-color"></span></div>' +
                '<div class="hideBlock">data-material-1-width = <span class="material-1-width"></span></div>' +
                '<div class="hideBlock">data-material-1-height = <span class="material-1-height"></span></div>' +
                '<div class="hideBlock">data-material-1-kol = <span class="material-1-kol"></span></div>' +
                '<div class="hideBlock">data-material-1-zakalka-stekla = <span class="material-1-zakalka-stekla"></span></div>' +
                '<div class="hideBlock">data-material-1-dvoynoe-zapolnenie = <span class="material-1-dvoynoe-zapolnenie"></span></div>' +
                '<div class="hideBlock">data-material-1-tolschina = <span class="material-1-tolschina"></span></div>' +
                '<div class="hideBlock">data-material-1-ploschad = <span class="material-1-ploschad"></span></div>' +
                '<div class="hideBlock">data-material-1-price = <span class="material-1-price"></span></div>' +
                '<div class="hideBlock">data-material-2-type = <span class="material-2-type"></span></div>' +
                '<div class="hideBlock">data-material-2-color = <span class="material-2-color"></span></div>' +
                '<div class="hideBlock">data-material-2-width = <span class="material-2-width"></span></div>' +
                '<div class="hideBlock">data-material-2-height = <span class="material-2-height"></span></div>' +
                '<div class="hideBlock">data-material-2-kol = <span class="material-2-kol"></span></div>' +
                '<div class="hideBlock">data-material-2-zakalka-stekla = <span class="material-2-zakalka-stekla"></span></div>' +
                '<div class="hideBlock">data-material-2-dvoynoe-zapolnenie = <span class="material-2-dvoynoe-zapolnenie"></span></div>' +
                '<div class="hideBlock">data-material-2-tolschina = <span class="material-2-tolschina"></span></div>' +
                '<div class="hideBlock">data-material-2-ploschad = <span class="material-2-ploschad"></span></div>' +
                '<div class="hideBlock">data-material-2-price = <span class="material-2-price"></span></div>' +
                '<div class="hideBlock">data-material-3-type = <span class="material-3-type"></span></div>' +
                '<div class="hideBlock">data-material-3-color = <span class="material-3-color"></span></div>' +
                '<div class="hideBlock">data-material-3-width = <span class="material-3-width"></span></div>' +
                '<div class="hideBlock">data-material-3-height = <span class="material-3-height"></span></div>' +
                '<div class="hideBlock">data-material-3-kol = <span class="material-3-kol"></span></div>' +
                '<div class="hideBlock">data-material-3-zakalka-stekla = <span class="material-3-zakalka-stekla"></span></div>' +
                '<div class="hideBlock">data-material-3-dvoynoe-zapolnenie = <span class="material-3-dvoynoe-zapolnenie"></span></div>' +
                '<div class="hideBlock">data-material-3-tolschina = <span class="material-3-tolschina"></span></div>' +
                '<div class="hideBlock">data-material-3-ploschad = <span class="material-3-ploschad"></span></div>' +
                '<div class="hideBlock">data-material-3-price = <span class="material-3-price"></span></div>' +
                '<div class="hideBlock">data-material-4-type = <span class="material-4-type"></span></div>' +
                '<div class="hideBlock">data-material-4-color = <span class="material-4-color"></span></div>' +
                '<div class="hideBlock">data-material-4-width = <span class="material-4-width"></span></div>' +
                '<div class="hideBlock">data-material-4-height = <span class="material-4-height"></span></div>' +
                '<div class="hideBlock">data-material-4-kol = <span class="material-4-kol"></span></div>' +
                '<div class="hideBlock">data-material-4-zakalka-stekla = <span class="material-4-zakalka-stekla"></span></div>' +
                '<div class="hideBlock">data-material-4-dvoynoe-zapolnenie = <span class="material-4-dvoynoe-zapolnenie"></span></div>' +
                '<div class="hideBlock">data-material-4-tolschina = <span class="material-4-tolschina"></span></div>' +
                '<div class="hideBlock">data-material-4-ploschad = <span class="material-4-ploschad"></span></div>' +
                '<div class="hideBlock">data-material-4-price = <span class="material-4-price"></span></div>' +
                '<div class="hideBlock">data-material-5-type = <span class="material-5-type"></span></div>' +
                '<div class="hideBlock">data-material-5-color = <span class="material-5-color"></span></div>' +
                '<div class="hideBlock">data-material-5-width = <span class="material-5-width"></span></div>' +
                '<div class="hideBlock">data-material-5-height = <span class="material-5-height"></span></div>' +
                '<div class="hideBlock">data-material-5-kol = <span class="material-5-kol"></span></div>' +
                '<div class="hideBlock">data-material-5-zakalka-stekla = <span class="material-5-zakalka-stekla"></span></div>' +
                '<div class="hideBlock">data-material-5-dvoynoe-zapolnenie = <span class="material-5-dvoynoe-zapolnenie"></span></div>' +
                '<div class="hideBlock">data-material-5-tolschina = <span class="material-5-tolschina"></span></div>' +
                '<div class="hideBlock">data-material-5-ploschad = <span class="material-5-ploschad"></span></div>' +
                '<div class="hideBlock">data-material-5-price = <span class="material-5-price"></span></div>' +
                '</div>');


        }
        DandDStart();
        // paintingInDiadramma();
    }
    SET_BAFFLE_SEKECTOR();
}
//  ============================= //

// Отрисовка половинчатых створок //
$('#POLOVINCHATAYA_KOL').bind('input', function () {
    var type = $('#TYPE_BAFFLE_ID').val();
    if (type != 2) {
        message("Использование половинчатой створки невозможно сданным типом!");
        $('#POLOVINCHATAYA_KOL').val('');
    } else {
        var p = $('#TOTAL_PAINTING_ID').val();
        var mp = $('#MOVABLE_PAINTING_ID').val();
        var h = $('#HIGHT_SETS_ID').val();
        var w = $('#WIDTH_SETS_ID').val();
        if (p == '' || mp == '' || h == '' || w == '') {
            message("Для использования половинчатой створки заполните поля: Всего полотен, Подвижные полотна, Высота, Ширина!");
            $('#POLOVINCHATAYA_KOL').val('');
        } else {
            p = checkTheErrorNumber(p);
            mp = checkTheErrorNumber(mp);
            var ps = checkTheErrorNumber($('#POLOVINCHATAYA_KOL').val());
            if (( p - mp ) <= ps) {
                message("Для использования половинчатой створки должно быть: полотен - подвижных полотен > половинчатых створок!");
                $('#POLOVINCHATAYA_KOL').val('');
            } else {
                PAINTING();
                w = checkTheErrorNumber(w);
                h = checkTheErrorNumber(h);
                var widthForOnePS = ( w / p ) / 2;
                var widthForOneOtherP = ( w - ( widthForOnePS * ps ) ) / ( p - ps );
                for (i = 1; i <= p; i++) {
                    if (i == 1) {
                        $('#tab-profil-shirina').val(widthForOnePS);
                        $("#NUMBER_OF_DUPLICATOR_ID").val(0);
                    }
                    if (i < ( p - ps )) {
                        $('*[data-id="' + i + '"]').attr('data-width', widthForOneOtherP);
                        $('*[data-id="' + i + '"]').find('.width').text(widthForOneOtherP);
                        $('*[data-id="' + i + '"]').find(".group").text(0);
                        $('*[data-id="' + i + '"]').attr("data-group", 0);
                    } else {
                        $('*[data-id="' + i + '"]').attr('data-width', widthForOnePS);
                        $('*[data-id="' + i + '"]').find('.width').text(widthForOnePS);
                        $('*[data-id="' + i + '"]').find(".group").text(1);
                        $('*[data-id="' + i + '"]').attr("data-group", 1);
                    }
                    $('*[data-id="' + i + '"]').attr('data-height', h);
                    $('*[data-id="' + i + '"]').find(".height").text(h);
                    $('#tab-profil-vyisota').val(h)
                }
            }
        }
    }
    loadFurnitura();
    $('#furnitura-tab .price').text(0);
});
//  ============================= //

// Выбор изображения после диалога //
function setImg(number, total_painting, movable_painting) {
    TOTAL_PAINTING = total_painting;
    MOVABLE_PAINTING = movable_painting;
    setAllSaveParameters();
    $(".drawing img").attr("src", "http://fasts-like.com//SchemeOfDoors/" + number + ".png");
    PAINTING();
}
//  ============================= //

// Установка селектов полотен //
function SET_BAFFLE_SEKECTOR() {
    $(".BAFFLE_SEKECTOR_CLASS").empty();
    for (i = 1; i <= parseInt($('#TOTAL_PAINTING_ID').val()); i++) {
        if (i <= $('#MOVABLE_PAINTING_ID').val()) {
            $(".BAFFLE_SEKECTOR_CLASS").prepend($('<option value="' +
                i + '">' +
                'Подвижные полотна ' +
                i +
                '</option>'));
        } else {
            $(".BAFFLE_SEKECTOR_CLASS").prepend($('<option value="' +
                i + '">' +
                'Полотна ' +
                i +
                '</option>'));
        }
    }
}
//  ============================= //

// Событие смены селектов полотен
$(".BAFFLE_SEKECTOR_CLASS").change(function () {
    console.log('change');
    $(".BAFFLE_SEKECTOR_CLASS").val($(this).val());

    $('*').removeClass('used');
    $('*[data-id="' + $(this).val() + '"]').addClass('used');
    $('.PAINTING-DIAGRAMMA-EL').css({'z-index': '0'});
    $('*[data-id="' + $(this).val() + '"]').css({'z-index': '1000'});

    $('#tab-profil-vyisota').val($('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').find(".height").text());
    $('#tab-profil-shirina').val($('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').find(".width").text());
    $("#NUMBER_OF_DUPLICATOR_ID").val($('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').find(".group").text());
    $("#tab-profil-v-peremyichki-shtuk").val($('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').data('vertikalnue-pereochki-count'));

    SelectTabKarkasEnd(getFromData('horizontal-pereochki-name'),"H");
    SelectTabKarkasEnd(getFromData('vertikalnue-pereochki-name'),"V");

    setPriceInProfil();


    $('.add-material-block-past div').remove();

    for (var i = 1; i <= 5; i++) {
        var el = getFromData('material-' + i + '-type');
        if (el != '' && el != 0) {
            $(".add-material-block-past").append('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 napolnenie-el" data-material-el-id="' + i + '">' + $(".napolnenie-el-set").html() + '</div>');
            $('*[data-material-el-id="' + i + '"]').find('.napolnenie-el-material').val(getFromData('material-' + i + '-type'));
            napolnenieImg(getFromData('material-' + i + '-type'), i);
            $('*[data-material-el-id="' + i + '"]').find('.napolnenie-el-tolschina').val(getFromData('material-' + i + '-tolschina'));
            $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-shirina').val(getFromData('material-' + i + '-width'));
            $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-vyisota').val(getFromData('material-' + i + '-height'));
            $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-kollichestvo').val(getFromData('material-' + i + '-kol'));
            if (getFromData('material-' + i + '-dvoynoe-zapolnenie') == 'true') {
                $('*[data-material-el-id="' + i + '"]').find('.dvoinoeZapolnenieCheckbox input').attr('checked', 'checked');
            }
            if (getFromData('material-' + i + '-zakalka-stekla') == 'true') {
                $('*[data-material-el-id="' + i + '"]').find('.zakalkaStekla input').attr('checked', 'checked');
            }
        }
    }

    DekorRePrice2();

});

//  выбор фурнитуры //
$("#furnitura-tab").on('click', '#razdvizhnyie-mehanizmyi-select', function () {
    var count = parseInt($("#TOTAL_PAINTING_ID").val());
    if (!isNaN(count)) {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        var html = $('.razdvizhnyie-mehanizmyi-modal').html();
        var templateData = {
            price1: count * 475,
            price2: count * 830,
            price3: count * 650,
            price4: count * 705,
            price5: count * 500,
            price6: count * 2000
        };
        var resultHtml = makeHTMLFromTemplate(html, templateData);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    } else {
        message("Укажите количество полотен!");
    }
});
function SelectRazdvizhnyieMehanizmyiEnd(img, text, price) {
    $(".razdvizhnyie-mehanizmyi img").attr('src', img);
    $(".razdvizhnyie-mehanizmyi .text").text(text);
    $(".razdvizhnyie-mehanizmyi .price").text(price);
    setDataAndText("furnitura-razdvizh-mehanizm", text);

    $(".mehanizm-sinhronizatsii img").attr('src', "img/furnityra/0.png");
    $(".mehanizm-sinhronizatsii .text").text("Не выбрано");
    $(".mehanizm-sinhronizatsii .price").text(0);
    $(".napravlyayuschie img").attr('src', "img/furnityra/0.png");
    $(".napravlyayuschie .text").text("Не выбрано");
    $(".napravlyayuschie .price").text(0);
    $(".vidKrepleniyaNapravlyayuschey img").attr('src', "img/furnityra/0.png");
    $(".vidKrepleniyaNapravlyayuschey .text").text("Не выбрано");
    $(".vidKrepleniyaNapravlyayuschey .price").text(0);
    $(".povodok img").attr('src', "img/furnityra/0.png");
    $(".povodok .text").text("Не выбрано");
    $(".povodok .price").text(0);
    getDataFurnitura();
};

function openModalRadvizh(type) {
    var typeRazdvizhMehanizm = getFromData("furnitura-razdvizh-mehanizm");
    var typeDovodchik = getFromData("furnitura-dovodchik");
    var karkasName = getFromData("karkas-name");
    var Count = parseInt($("#TOTAL_PAINTING_ID").val());
    var width = parseInt($("#WIDTH_SETS_ID").val());
    var allWidth = count * width;
    if (!isNaN(Count) && !isNaN(width)) {
        switch (type) {
            case "mehanizmsinhronizacii":
                if (typeRazdvizhMehanizm == "Standart до 40 кг" || typeRazdvizhMehanizm == "Standart до 100 кг" || typeRazdvizhMehanizm == "B-103 до 100 кг" || typeRazdvizhMehanizm == "B-104 до 100 кг" || typeRazdvizhMehanizm == "R3 до 60 кг") {
                    var count = 1;
                    var arr = ['src="img/furnityra/3.png"', 'img/furnityra/3.png', 'Механизм синхронизации', 'Синхронный', 1590 * Count / 2];
                }
                if (typeRazdvizhMehanizm == "D 80 до 80 кг") {
                    var count = 3;
                    var arr = ['src="img/furnityra/3.png"', 'img/furnityra/3.png', 'Механизм синхронизации', 'Синхронный', 1590 * Count / 2,
                        'src="img/furnityra/37.png"', 'img/furnityra/37.png', 'Механизм синхронизации', 'D-80 Synchro, Ducasse', 6320 * Count / 2,
                        'src="img/furnityra/37.png"', 'img/furnityra/37.png', 'Механизм синхронизации', 'D-80 Telescopic, Ducasse', 6320 * Count / 2];
                }
                break;
            case "naprav":
                var count = 2;
                var arr = ['src="img/furnityra/4.png"', 'img/furnityra/4.png', 'Направляющие', 'Неокрашенная, Россия', (145 * (width * 2 / 1000)) * 1.05,
                    'src="img/furnityra/5.png"', 'img/furnityra/5.png', 'Направляющие', 'Цвет: серебро, Россия', (215 * (width * 2 / 1000)) * 1.05];
                break;
            case "vidkreplenianaprav":
                if (width > 3000) {
                    var double = 2;
                } else {
                    var double = 1;
                }
                if (typeRazdvizhMehanizm == "Standart до 40 кг" || typeRazdvizhMehanizm == "Standart до 100 кг") {
                    var count = 2;
                    var arr = ['src="img/furnityra/6.png"', 'img/furnityra/6.png', 'Вид крепления направляющей', 'К стене, Россия', 50 * 2 * double,
                        'src="img/furnityra/7.png"', 'img/furnityra/7.png', 'Вид крепления направляющей', 'К потолку, Россия', 50 * 2 * double];
                }
                if (typeRazdvizhMehanizm == "B-103 до 100 кг" || typeRazdvizhMehanizm == "B-104 до 100 кг" || typeRazdvizhMehanizm == "R3 до 60 кг") {
                    var count = 1;
                    var arr = ['src="img/furnityra/28.png"', 'img/furnityra/28.png', 'Вид крепления направляющей', 'Уголок крепежный, Degon Польша и Китайя', 50 * 2 * double];
                }
                if (typeRazdvizhMehanizm == "D 80 до 80 кг") {
                    var count = 2;
                    var arr = ['src="img/furnityra/33.png"', 'img/furnityra/33.png', 'Вид крепления направляющей', 'Кронштейн, Ducasse Испания', 50 * 2 * double,
                        'src="img/furnityra/34.png"', 'img/furnityra/34.png', 'Вид крепления направляющей', 'Кронштейн широкий, Ducasse Испания', 680 * 2 * double];
                }
                break;
            case "povodok":
                if (typeRazdvizhMehanizm == "Standart до 40 кг" || typeRazdvizhMehanizm == "Standart до 100 кг" || typeRazdvizhMehanizm == "B-103 до 100 кг" || typeRazdvizhMehanizm == "B-104 до 100 кг" || typeRazdvizhMehanizm == "R3 до 60 кг") {
                    var count = 2;
                    var arr = ['src="img/furnityra/8.png"', 'img/furnityra/8.png', 'Поводок', 'Белый', 20 * Count,
                        'src="img/furnityra/9.png"', 'img/furnityra/9.png', 'Поводок', 'Коричневый', 20 * Count];
                }
                if (typeRazdvizhMehanizm == "D 80 до 80 кг") {
                    var count = 1;
                    var arr = ['src="img/furnityra/36.png"', 'img/furnityra/36.png', 'Поводок', 'Поводок, Ducasse Испания', 110 * Count];
                }
                break;
            case "dovodchik":
                var count = 4;
                var arr = ['src="img/furnityra/12.png"', 'img/furnityra/12.png', 'Доводчик', 'Standart до 25 кг, Россия', 1260 * Count,
                    'src="img/furnityra/12.png"', 'img/furnityra/12.png', 'Доводчик', 'Standart до 50 кг, Россия', 1260 * Count,
                    'src="img/furnityra/12.png"', 'img/furnityra/12.png', 'Доводчик', 'Standart до 100 кг, Россия', 1260 * Count,
                    'src="img/furnityra/35.png"', 'img/furnityra/35.png', 'Доводчик', 'Soft, Ducasse Испания', 5180 * Count];
                break;
            case "dekplankadlyaprofilya":
                if (typeDovodchik == "Standart до 25 кг, Россия" || typeDovodchik == "Standart до 50 кг, Россия" || typeDovodchik == "Standart до 100 кг, Россия") {
                    var count = 1;
                    var arr = ['src="img/furnityra/13.png"', 'img/furnityra/13.png', 'Декоративная планка для профиля', 'Цвет: серебро, Россия', ((width * 2 / 1000) * 1.1) * 320 * 1.05 + 150 * 2 + 55 * 2];
                }
                if (typeDovodchik == "Soft, Ducasse Испания") {
                    var count = 1;
                    var arr = ['src="img/furnityra/32.png"', 'img/furnityra/32.png', 'Декоративная планка для профиля', 'Алюм. карниз, Ducasse Испания', ((width * 2 / 1000) * 1.1) * 1500 * 1.05 + 150 * 2 + 55 * 2 + Count * 400];
                }
                break;
            case "schetochniiuplotnitel":
                var count = 2;
                var arr = ['src="img/furnityra/14.png"', 'img/furnityra/14.png', 'Щеточный уплотнитель', '6 мм (Серый, бронза, золото)', width / 1000 * 12,
                    'src="img/furnityra/15.png"', 'img/furnityra/15.png', 'Щеточный уплотнитель', '12 мм (Серый, бронза, золото)', width / 1000 * 25];
                break;
            case "ruchka":
                if (karkasName == "Optima" || karkasName == "Optimax2") {
                    var count = 5;
                    var arr = ['src="img/furnityra/16.png"', 'img/furnityra/16.png', 'Ручка', 'Ручка-раковина бронза Besana (Италия)', '260',
                        'src="img/furnityra/41.png"', 'img/furnityra/41.png', 'Ручка', 'Ручка-раковина 64мм хром Производитель: Giusti, Италия', '225',
                        'src="img/furnityra/42.png"', 'img/furnityra/42.png', 'Ручка', 'Ручка-раковина бронза Giusti (Италия)', '160',
                        'src="img/furnityra/43.png"', 'img/furnityra/43.png', 'Ручка', 'Ручка  OL 8 (Китай) Цвет: бронза, медь, матовое золото, матовый никель, золото', '170',
                        'src="img/furnityra/44.png"', 'img/furnityra/44.png', 'Ручка', 'Ручка OL 5 (Китай) Цвет: золото, хром, бронза, матовый никель', '120'];
                }
                if (karkasName == "Standart") {
                    var count = 6;
                    var arr = ['src="img/furnityra/16.png"', 'img/furnityra/16.png', 'Ручка', 'Ручка-раковина бронза Besana (Италия)', '260',
                        'src="img/furnityra/40.png"', 'img/furnityra/40.png', 'Ручка', 'Ручка-раковина бронза состаренная Giusti (Италия)', '395',
                        'src="img/furnityra/41.png"', 'img/furnityra/41.png', 'Ручка', 'Ручка-раковина 64мм хром Производитель: Giusti, Италия', '225',
                        'src="img/furnityra/42.png"', 'img/furnityra/42.png', 'Ручка', 'Ручка-раковина бронза Giusti (Италия)', '160',
                        'src="img/furnityra/43.png"', 'img/furnityra/43.png', 'Ручка', 'Ручка  OL 8 (Китай) Цвет: бронза, медь, матовое золото, матовый никель, золото', '170',
                        'src="img/furnityra/44.png"', 'img/furnityra/44.png', 'Ручка', 'Ручка OL 5 (Китай) Цвет: золото, хром, бронза, матовый никель', '120'];
                }
                break;
            case "zamok":
                var count = 3;
                var arr = ['src="img/furnityra/17.png"', 'img/furnityra/17.png', 'Замок', 'Поворотный', '140',
                    'src="img/furnityra/38.png"', 'img/furnityra/38.png', 'Замок', 'Замок врезной цилиндровый узкопроф.201 (20 mm) (никель) 3 кл.', '750',
                    'src="img/furnityra/39.png"', 'img/furnityra/39.png', 'Замок', 'Замок врезной крестообразный узкопроф.201F (20 mm) (никель) 3 кл.', '1000'];
                break;
        }
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        var html = $('.obshee-modal').html();
        for (var i = 0; i < count * 5; i += 5) {
            var templateData = {
                img: arr[i],
                img2: arr[i + 1],
                text1: arr[i + 2],
                text2: arr[i + 3],
                price: arr[i + 4],
                funcName: type
            };
            var resultHtml = makeHTMLFromTemplate(html, templateData);
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
        }
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    } else {
        message("Укажите количество полотен и ширину!");
    }
}
function SelectmehanizmsinhronizaciiEnd(img, text, price) {
    $(".mehanizm-sinhronizatsii img").attr('src', img);
    $(".mehanizm-sinhronizatsii .text").text(text);
    $(".mehanizm-sinhronizatsii .price").text(price);
    getDataFurnitura();
};
function SelectnapravEnd(img, text, price) {
    $(".napravlyayuschie img").attr('src', img);
    $(".napravlyayuschie .text").text(text);
    $(".napravlyayuschie .price").text(price);
    getDataFurnitura();
};
function SelectvidkreplenianapravEnd(img, text, price) {
    $(".vidKrepleniyaNapravlyayuschey img").attr('src', img);
    $(".vidKrepleniyaNapravlyayuschey .text").text(text);
    $(".vidKrepleniyaNapravlyayuschey .price").text(price);
    getDataFurnitura();
};
function SelectpovodokEnd(img, text, price) {
    $(".povodok img").attr('src', img);
    $(".povodok .text").text(text);
    $(".povodok .price").text(price);
    getDataFurnitura();
};

function SelectdovodchikEnd(img, text, price) {
    $(".dovodchik img").attr('src', img);
    $(".dovodchik .text").text(text);
    $(".dovodchik .price").text(price);
    setDataAndText("furnitura-dovodchik", text);

    $(".dekorativnayaPlankaDlyaProfilya img").attr('src', "img/furnityra/0.png");
    $(".dekorativnayaPlankaDlyaProfilya .text").text("Не выбрано");
    $(".dekorativnayaPlankaDlyaProfilya .price").text(0);
    getDataFurnitura();
};
function SelectdekplankadlyaprofilyaEnd(img, text, price) {
    $(".dekorativnayaPlankaDlyaProfilya img").attr('src', img);
    $(".dekorativnayaPlankaDlyaProfilya .text").text(text);
    $(".dekorativnayaPlankaDlyaProfilya .price").text(price);
    getDataFurnitura();
};
function SelectschetochniiuplotnitelEnd(img, text, price) {
    $(".schetochnyiyUplotnitel img").attr('src', img);
    $(".schetochnyiyUplotnitel .text").text(text);
    $(".schetochnyiyUplotnitel .price").text(price);
    getDataFurnitura();
};
function SelectruchkaEnd(img, text, price) {
    $(".rakovina img").attr('src', img);
    $(".rakovina .text").text(text);
    $(".rakovina .price").text(price);
    getDataFurnitura();
};
function SelectzamokEnd(img, text, price) {
    $(".zamok img").attr('src', img);
    $(".zamok .text").text(text);
    $(".zamok .price").text(price);
    getDataFurnitura();
};

$("#furnitura-tab").on('click', '#mehanizm-sinhronizacii-select', function () {
    if (getFromData("furnitura-razdvizh-mehanizm") != "" || !isNaN(getFromData("furnitura-razdvizh-mehanizm"))) {
        openModalRadvizh("mehanizmsinhronizacii");
    } else {
        message("Выберите раздвижной механизм!");
    }
});
$("#furnitura-tab").on('click', '#naprav-select', function () {
    openModalRadvizh("naprav");
});
$("#furnitura-tab").on('click', '#vid-kreplenia-naprav-select', function () {
    openModalRadvizh("vidkreplenianaprav");
});
$("#furnitura-tab").on('click', '#povodok-select', function () {
    openModalRadvizh("povodok");
});

$("#furnitura-tab").on('click', '#dovodchik-select', function () {
    openModalRadvizh("dovodchik");
});
$("#furnitura-tab").on('click', '#dek-planka-dlya-profilya-select', function () {
    openModalRadvizh("dekplankadlyaprofilya");
});
$("#furnitura-tab").on('click', '#schetochnii-uplotnitel-select', function () {
    openModalRadvizh("schetochniiuplotnitel");
});
$("#furnitura-tab").on('click', '#ruchka-select', function () {
    var karkasName = getFromData("karkas-name");
    if (karkasName == "Optima" || karkasName == "Optimax2" || karkasName == "Standart") {
        openModalRadvizh("ruchka");
    } else {
        message("Ручки для выбраных профилей нет!");
    }
});
$("#furnitura-tab").on('click', '#zamok-select', function () {
    openModalRadvizh("zamok");
});


function openModalSkladnie(type) {
    var typeSkladnoiMehanizm = getFromData("furnitura-skladnoi-mehanizm");
    var karkasName = getFromData("karkas-name");
    var Count = parseInt($("#TOTAL_PAINTING_ID").val());
    var width = parseInt($("#WIDTH_SETS_ID").val());
    if (!isNaN(Count) && !isNaN(width)) {
        switch (type) {
            case "mehanizmsinhronskladnie":
                var count = 2;
                var arr = ['src="img/furnityra/10.png"', 'img/furnityra/10.png', 'Складные механизмы', 'Stanfold до 40 кг (Россия)', 950 * Count,
                    'src="img/furnityra/29.png"', 'img/furnityra/29.png', 'Складные механизмы', 'B-100 до 80 кг (Degon, Польша)', 490 * Count];
                break;
            case "petliskladnie":
                if (typeSkladnoiMehanizm == "Stanfold до 40 кг (Россия)") {
                    var count = 1;
                    var arr = ['src="img/furnityra/11.png"', 'img/furnityra/11.png', 'Петли', 'Комплектные, Россия', 50 * 3 * Count];
                }
                if (typeSkladnoiMehanizm == "B-100 до 80 кг (Degon, Польша)") {
                    var count = 1;
                    var arr = ['src="img/furnityra/11.png"', 'img/furnityra/11.png', 'Петли', 'Комплектные, Degon Польша', 30 * 3 * Count];
                }
                break;
            case "napravlyayuschieskladnie":
                if (typeSkladnoiMehanizm == "Stanfold до 40 кг (Россия)") {
                    var count = 2;
                    var arr = ['src="img/furnityra/4.png"', 'img/furnityra/4.png', 'Направляющие', 'Неокрашенная, Россия', (145 * (width / 1000)) * 1.05,
                        'src="img/furnityra/5.png"', 'img/furnityra/5.png', 'Направляющие', 'Цвет: серебро, Россия', (215 * (width / 1000)) * 1.05];
                }
                if (typeSkladnoiMehanizm == "B-100 до 80 кг (Degon, Польша)") {
                    var count = 1;
                    var arr = ['src="img/furnityra/25.png"', 'img/furnityra/25.png', 'Направляющие', 'Неокрашенная, Degon Польша', (145 * (width / 1000)) * 1.05];
                }
                break;
            case "vidkrepleniyanapravlyayuschihskladnie":
                if (width > 3000) {
                    var double = 2;
                } else {
                    var double = 1;
                }
                if (typeSkladnoiMehanizm == "Stanfold до 40 кг (Россия)") {
                    var count = 2;
                    var arr = ['src="img/furnityra/6.png"', 'img/furnityra/6.png', 'Вид крепления направляющей', 'К стене', 50 * 2 * double,
                        'src="img/furnityra/7.png"', 'img/furnityra/7.png', 'Вид крепления направляющей', 'К потолку', 50 * 2 * double];
                }
                if (typeSkladnoiMehanizm == "B-100 до 80 кг (Degon, Польша)") {
                    var count = 3;
                    var arr = ['src="img/furnityra/6.png"', 'img/furnityra/6.png', 'Вид крепления направляющей', 'К стене', 50 * 2 * double,
                        'src="img/furnityra/7.png"', 'img/furnityra/7.png', 'Вид крепления направляющей', 'К потолку', 50 * 2 * double,
                        'src="img/furnityra/28.png"', 'img/furnityra/28.png', 'Вид крепления направляющей', 'Уголок крепежный, Degon Польша', 50 * 2 * double];
                }
                break;
            case "dekplankadlyaprofilyaskladnie":
                var count = 1;
                var arr = ['src="img/furnityra/13.png"', 'img/furnityra/13.png', 'Декоративная планка для профиля', 'Цвет: серебро, Россия', ((width * 2 / 1000) * 1.1) * 320 * 1.05 + 150 * 2 + 55 * 2];
                break;
            case "schetochniiuplotnitelskladnie":
                var count = 2;
                var arr = ['src="img/furnityra/14.png"', 'img/furnityra/14.png', 'Щеточный уплотнитель', '6 мм (Серый, бронза, золото)', width / 1000 * 12,
                    'src="img/furnityra/15.png"', 'img/furnityra/15.png', 'Щеточный уплотнитель', '12 мм (Серый, бронза, золото)', width / 1000 * 15];
                break;
            case "ruchkaskladnie":
                var count = 1;
                var arr = ['src="img/furnityra/16.png"', 'img/furnityra/16.png', 'Ручка', 'Раковина', '215'];
                break;
            case "kreplenieruchliskladnie":
                var count = 1;
                var arr = ['src="img/furnityra/18.png"', 'img/furnityra/18.png', 'Крепление ручки', 'К двери-гармошке', '50'];
                break;
            case "zamokskladnie":
                var count = 1;
                var arr = ['src="img/furnityra/17.png"', 'img/furnityra/17.png', 'Замок', 'Поворотный', '140'];
                break;
        }
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        var html = $('.obshee-modal').html();
        for (var i = 0; i < count * 5; i += 5) {
            var templateData = {
                img: arr[i],
                img2: arr[i + 1],
                text1: arr[i + 2],
                text2: arr[i + 3],
                price: arr[i + 4],
                funcName: type
            };
            var resultHtml = makeHTMLFromTemplate(html, templateData);
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
        }
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    } else {
        message("Укажите количество полотен и ширину!");
    }
}

$("#furnitura-tab").on('click', '#mehanizm-sinhron-skladnie', function () {
    openModalSkladnie("mehanizmsinhronskladnie");
});
$("#furnitura-tab").on('click', '#petli-skladnie', function () {
    if (getFromData("furnitura-skladnoi-mehanizm") != "" || !isNaN(getFromData("furnitura-skladnoi-mehanizm"))) {
        openModalSkladnie("petliskladnie");
    } else {
        message("Выберите синхронный механизм!");
    }
});
$("#furnitura-tab").on('click', '#napravlyayuschie-skladnie', function () {
    if (getFromData("furnitura-skladnoi-mehanizm") != "" || !isNaN(getFromData("furnitura-skladnoi-mehanizm"))) {
        openModalSkladnie("napravlyayuschieskladnie");
    } else {
        message("Выберите синхронный механизм!");
    }
});
$("#furnitura-tab").on('click', '#vid-krepleniya-napravlyayuschih-skladnie', function () {
    if (getFromData("furnitura-skladnoi-mehanizm") != "" || !isNaN(getFromData("furnitura-skladnoi-mehanizm"))) {
        openModalSkladnie("vidkrepleniyanapravlyayuschihskladnie");
    } else {
        message("Выберите синхронный механизм!");
    }
});

$("#furnitura-tab").on('click', '#dek-planka-dlya-profilya-skladnie', function () {
    openModalSkladnie("dekplankadlyaprofilyaskladnie");
});
$("#furnitura-tab").on('click', '#schetochnii-uplotnitel-skladnie', function () {
    openModalSkladnie("schetochniiuplotnitelskladnie");
});
$("#furnitura-tab").on('click', '#ruchka-skladnie', function () {
    openModalSkladnie("ruchkaskladnie");
});
$("#furnitura-tab").on('click', '#kreplenie-ruchli-skladnie', function () {
    openModalSkladnie("kreplenieruchliskladnie");
});
$("#furnitura-tab").on('click', '#zamok-skladnie', function () {
    openModalSkladnie("zamokskladnie");
});

function SelectmehanizmsinhronskladnieEnd(img, text, price) {
    $(".setSkladnyieMehanizmyi img").attr('src', img);
    $(".setSkladnyieMehanizmyi .text").text(text);
    $(".setSkladnyieMehanizmyi .price").text(price);
    getDataFurnitura();
    setDataAndText("furnitura-skladnoi-mehanizm", text);
};
function SelectpetliskladnieEnd(img, text, price) {
    $(".petli-skladnie img").attr('src', img);
    $(".petli-skladnie .text").text(text);
    $(".petli-skladnie .price").text(price);
    getDataFurnitura();
};
function SelectnapravlyayuschieskladnieEnd(img, text, price) {
    $(".napravlyayuschie-skladnie img").attr('src', img);
    $(".napravlyayuschie-skladnie .text").text(text);
    $(".napravlyayuschie-skladnie .price").text(price);
    getDataFurnitura();
};
function SelectvidkrepleniyanapravlyayuschihskladnieEnd(img, text, price) {
    $(".vidKrepleniya-skladnie img").attr('src', img);
    $(".vidKrepleniya-skladnie .text").text(text);
    $(".vidKrepleniya-skladnie .price").text(price);
    getDataFurnitura();
};

function SelectdekplankadlyaprofilyaskladnieEnd(img, text, price) {
    $(".dekorativnayaPlankaDlyaProfilya-skladnie img").attr('src', img);
    $(".dekorativnayaPlankaDlyaProfilya-skladnie .text").text(text);
    $(".dekorativnayaPlankaDlyaProfilya-skladnie .price").text(price);
    getDataFurnitura();
};
function SelectschetochniiuplotnitelskladnieEnd(img, text, price) {
    $(".schetochnyiyUplotnitel-skladnie img").attr('src', img);
    $(".schetochnyiyUplotnitel-skladnie .text").text(text);
    $(".schetochnyiyUplotnitel-skladnie .price").text(price);
    getDataFurnitura();
};
function SelectruchkaskladnieEnd(img, text, price) {
    $(".rakovina-skladnie img").attr('src', img);
    $(".rakovina-skladnie .text").text(text);
    $(".rakovina-skladnie .price").text(price);
    getDataFurnitura();
};
function SelectkreplenieruchliskladnieEnd(img, text, price) {
    $(".kreplenieRuchki-skladnie img").attr('src', img);
    $(".kreplenieRuchki-skladnie .text").text(text);
    $(".kreplenieRuchki-skladnie .price").text(price);
    getDataFurnitura();
};
function SelectzamokskladnieEnd(img, text, price) {
    $(".zamokSkladnyie-skladnie img").attr('src', img);
    $(".zamokSkladnyie-skladnie .text").text(text);
    $(".zamokSkladnyie-skladnie .price").text(price);
    getDataFurnitura();
};


function openModalMobil(type) {
    var karkasName = getFromData("karkas-name");
    var Count = parseInt($("#TOTAL_PAINTING_ID").val());
    var width = parseInt($("#WIDTH_SETS_ID").val());
    var height = parseInt($("#HIGHT_SETS_ID").val());
    if (!isNaN(Count) && !isNaN(width) && karkasName != "") {
        switch (type) {
            case "nozhkimobilnie":
                var count = 5;
                var arr = ['src="img/furnityra/19.png"', 'img/furnityra/19.png', 'Ножки', 'Euroshop/Standart - круглая регулируемая', 42 * 2 * Count,
                    'src="img/furnityra/19.png"', 'img/furnityra/19.png', 'Ножки', 'Optima - круглая регулируемая', 42 * 2 * Count,
                    'src="img/furnityra/20.png"', 'img/furnityra/20.png', 'Ножки', 'Optima - Широкая двухсторонняя', 275 * 2 * Count,
                    'src="img/furnityra/19.png"', 'img/furnityra/19.png', 'Ножки', 'M. Light - круглая регулируемая', 42 * 2 * Count,
                    'src="img/furnityra/21.png"', 'img/furnityra/21.png', 'Ножки', 'M. Light - Широкая двухсторонняя', 450 * 2 * Count];
                break;
            case "stoykimobilnie" :
                if (karkasName == 'Euroshop' || karkasName == 'EuroshopLite') {
                    var count = 5;
                    var arr = ['src="img/furnityra/mobilnyie/1.png"', 'img/furnityra/mobilnyie/1.png', 'Стойки', 'Стойка скругленная 90 °', (Count - 1) * height / 1000 * 141,
                        'src="img/furnityra/mobilnyie/2.png"', 'img/furnityra/mobilnyie/2.png', 'Стойки', 'Стойка 135 °', (Count - 1) * height / 1000 * 136,
                        'src="img/furnityra/mobilnyie/3.png"', 'img/furnityra/mobilnyie/3.png', 'Стойки', 'Стойка угловая 90 °', (Count - 1) * height / 1000 * 159,
                        'src="img/furnityra/mobilnyie/4.png"', 'img/furnityra/mobilnyie/4.png', 'Стойки', 'Стойка Т-образная', (Count - 1) * height / 1000 * 193,
                        'src="img/furnityra/mobilnyie/5.png"', 'img/furnityra/mobilnyie/5.png', 'Стойки', 'Стойка Т-образная скругленная', (Count - 1) * height / 1000 * 272];
                } else if (karkasName == 'Standart' || karkasName == 'StandartStoika') {
                    var count = 4;
                    var arr = ['src="img/furnityra/mobilnyie/7.png"', 'img/furnityra/mobilnyie/6.png', 'Стойки', 'Стойка четырёхгранная', (Count - 1) * height / 1000 * 184,
                        'src="img/furnityra/mobilnyie/7.png"', 'img/furnityra/mobilnyie/7.png', 'Стойки', 'Стойка 90 °', (Count - 1) * height / 1000 * 200,
                        'src="img/furnityra/mobilnyie/8.png"', 'img/furnityra/mobilnyie/8.png', 'Стойки', 'Стойка Т-образная', (Count - 1) * height / 1000 * 184,
                        'src="img/furnityra/mobilnyie/9.png"', 'img/furnityra/mobilnyie/9.png', 'Стойки', 'Стойка три паза', (Count - 1) * height / 1000 * 211];
                } else if (karkasName == 'Tur') {
                    var count = 4;
                    var arr = ['src="img/furnityra/mobilnyie/10.png"', 'img/furnityra/mobilnyie/10.png', 'Стойки', 'Стойка угловая трехгранная', (Count - 1) * height / 1000 * 87,
                        'src="img/furnityra/mobilnyie/11.png"', 'img/furnityra/mobilnyie/11.png', 'Стойки', 'Стойка угловая', (Count - 1) * height / 1000 * 116,
                        'src="img/furnityra/mobilnyie/12.png"', 'img/furnityra/mobilnyie/12.png', 'Стойки', 'Стойка восьмигранная', (Count - 1) * height / 1000 * 293,
                        'src="img/furnityra/mobilnyie/13.png"', 'img/furnityra/mobilnyie/13.png', 'Стойки', 'Угловая пятигранная', (Count - 1) * height / 1000 * 166];
                } else if (karkasName == 'Optima' || karkasName == 'OptimaLite' || karkasName == 'Optimax2') {
                    var count = 1;
                    var arr = ['src="img/furnityra/mobilnyie/14.png"', 'img/furnityra/mobilnyie/14.png', 'Стойки', 'Стойка угловая 90 °', (Count - 1) * height / 1000 * 304];
                } else if (karkasName == 'Statusx1' || karkasName == 'Statusx2') {
                    var count = 2;
                    var arr = ['src="img/furnityra/mobilnyie/15.png"', 'img/furnityra/mobilnyie/15.png', 'Стойки', 'Стойка поворотная односторонняя 90 °', (Count - 1) * height / 1000 * 640,
                        'src="img/furnityra/mobilnyie/16.png"', 'img/furnityra/mobilnyie/16.png', 'Стойки', 'Стойка поворотная двухсторонняя 90 °', (Count - 1) * height / 1000 * 550];
                } else if (karkasName == 'MobyLight') {
                    var count = 1;
                    var arr = ['src="img/furnityra/mobilnyie/17.png"', 'img/furnityra/mobilnyie/17.png', 'Мобилайт стойка', 0];
                } else if (karkasName == 'Base') {
                    var count = 4;
                    var arr = ['src="img/furnityra/mobilnyie/18.png"', 'img/furnityra/mobilnyie/18.png', 'Стойки', 'Столб три грани', (Count - 1) * height / 1000 * 783,
                        'src="img/furnityra/mobilnyie/19.png"', 'img/furnityra/mobilnyie/19.png', 'Стойки', 'Угловой столб дуга', (Count - 1) * height / 1000 * 701,
                        'src="img/furnityra/mobilnyie/20.png"', 'img/furnityra/mobilnyie/20.png', 'Стойки', 'Столб универсальный', (Count - 1) * height / 1000 * 617];
                }
                break;
            case "tipSoedineniyaPolotenmobilnie":
                var count = 1;
                var arr = ['src="img/furnityra/11.png"', 'img/furnityra/11.png', 'Тип соединения полотен', 'Петли', 50 * 3 * Count];
                break;
        }
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        var html = $('.obshee-modal').html();
        for (var i = 0; i < count * 5; i += 5) {
            var templateData = {
                img: arr[i],
                img2: arr[i + 1],
                text1: arr[i + 2],
                text2: arr[i + 3],
                price: arr[i + 4],
                funcName: type
            };
            var resultHtml = makeHTMLFromTemplate(html, templateData);
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
        }
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    } else {
        message("Укажите количество полотен, ширину и профиль!");
    }
}

$("#furnitura-tab").on('click', '#nozhki-mobilnie', function () {
    openModalMobil("nozhkimobilnie");
});
$("#furnitura-tab").on('click', '#stoyki-mobilnie', function () {
    var Count = parseInt($("#TOTAL_PAINTING_ID").val());
    if (Count > 1) {
        openModalMobil("stoykimobilnie");
    } else {
        message("Количество полотен должно быть минимум 2!");
    }
});
$("#furnitura-tab").on('click', '#tipSoedineniyaPoloten-mobilnie', function () {
    openModalMobil("tipSoedineniyaPolotenmobilnie");
});

function SelectnozhkimobilnieEnd(img, text, price) {
    $(".nozhki-mobil img").attr('src', img);
    $(".nozhki-mobil .text").text(text);
    $(".nozhki-mobil .price").text(price);
    getDataFurnitura();
};
function SelectkstoykimobilnieEnd(img, text, price) {
    $(".stoyki-mobil img").attr('src', img);
    $(".stoyki-mobil .text").text(text);
    $(".stoyki-mobil .price").text(price);
    getDataFurnitura();
};
function SelecttipSoedineniyaPolotenmobilnieEnd(img, text, price) {
    $(".tipSoedineniyaPoloten-mobil img").attr('src', img);
    $(".tipSoedineniyaPoloten-mobil .text").text(text);
    $(".tipSoedineniyaPoloten-mobil .price").text(price);
    getDataFurnitura();
};

// ТАБ ПРОФИЛЬ - Выбор декора для профиля //

$('#btn-dekor-profil').click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    var html = $('.dekor-profil').html();
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(html);
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
});

$('#KREPLENIE-BLOCK').click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    var html = $('.kreplenie-modal').html();
    var karkasName = getFromData('karkas-name');
    if (karkasName == "Euroshop" || karkasName == "EuroshopLite") {
        var count = 2;
        var arr = ['src="img/addontoprofil/Euroshop/kreplenie-otkritoe.png"', 'img/addontoprofil/Euroshop/kreplenie-otkritoe.png', 'Вид крепления', 'Открытое', 'E401/E401', '35',
            'src="img/addontoprofil/Euroshop/kreplenie-skritoe.png"', 'img/addontoprofil/Euroshop/kreplenie-skritoe.png', 'Вид крепления', 'Скрытое', 'E401/E401', '186'];
    } else {
        var count = 1;
        var arr = ['src="img/addontoprofil/Euroshop/kreplenie-otkritoe.png"', 'img/addontoprofil/Euroshop/kreplenie-otkritoe.png', 'Вид крепления', 'Открытое', 'E401/E401', '35'];
    }
    for (var i = 0; i < count * 6; i += 6) {
        var templateData = {
            img: arr[i],
            img2: arr[i + 1],
            text1: arr[i + 2],
            text2: arr[i + 3],
            text3: arr[i + 4],
            price: arr[i + 5]
        };
        var resultHtml = makeHTMLFromTemplate(html, templateData);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
    }
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
});

$('#ZAGLUSHKA-TORCEVAYA-BLOCK').click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    var html = $('.zaglushka-torcevaya-modal').html();
    var count = 1;
    var arr = ['src="img/addontoprofil/Euroshop/zaglushka-dek.png"', 'img/addontoprofil/Euroshop/zaglushka-dek.png', 'Заглушка торцевая', 'Заглушка торцевая', 'A14', '0', '0', '0'];
    for (var i = 0; i < count * 8; i += 8) {
        var templateData = {
            img: arr[i],
            img2: arr[i + 1],
            text1: arr[i + 2],
            text2: arr[i + 3],
            text3: arr[i + 4],
            price1: arr[i + 5],
            price2: arr[i + 6],
            price3: arr[i + 7],
        };
        var resultHtml = makeHTMLFromTemplate(html, templateData);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
    }
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
});

$('#ZAGLUSHKA-V-PAZ-BLOCK').click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    var html = $('.zaglushka-modal').html();
    var count = 2;
    var arr = ['src="img/addontoprofil/Euroshop/zaglushka-dek-v-paz.png"', 'img/addontoprofil/Euroshop/zaglushka-dek-v-paz.png', 'Заглушка в паз', 'Заглушка декоративная', 'K403', '24.61', '24.61', '24.61',
        'src="img/addontoprofil/Euroshop/zaglushka-dek-v-paz-alternativa.png"', 'img/addontoprofil/Euroshop/zaglushka-dek-v-paz-alternativa.png', 'Заглушка в паз', 'Заглушка декоративная', 'K404', '20.54', '20.54', '20.54'];
    for (var i = 0; i < count * 8; i += 8) {
        var templateData = {
            img: arr[i],
            img2: arr[i + 1],
            text1: arr[i + 2],
            text2: arr[i + 3],
            text3: arr[i + 4],
            price1: arr[i + 5],
            price2: arr[i + 6],
            price3: arr[i + 7],
            price: arr[i + 7],
        };
        var resultHtml = makeHTMLFromTemplate(html, templateData);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
    }
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
});

$('#UPLOTNITEL-BLOCK').click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    var html = $('.uplotnitel-modal').html();
    var count = 2;
    var arr = ['src="img/addontoprofil/Euroshop/uplotnitel-2.png"', 'img/addontoprofil/Euroshop/uplotnitel-2.png', 'Уплотнитель', 'Уплотнитель', 'K402', '18.05', '18.05', '18.05', '18.05',
        'src="img/addontoprofil/Euroshop/uplotnitel.png"', 'img/addontoprofil/Euroshop/uplotnitel.png', 'Уплотнитель', 'Уплотнитель', 'K401', '41.56', '49.89', '58.90', '58.90'];
    for (var i = 0; i < count * 9; i += 9) {
        var templateData = {
            img: arr[i],
            img2: arr[i + 1],
            text1: arr[i + 2],
            text2: arr[i + 3],
            text3: arr[i + 4],
            price1: arr[i + 5],
            price2: arr[i + 6],
            price3: arr[i + 7],
            price4: arr[i + 8],
        };
        var resultHtml = makeHTMLFromTemplate(html, templateData);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
    }
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
});

function SelectKreplenieEnd(img, text1, text2, price) {
    setDataAndText('karkas-vid-krepleniya', price);
    $("#kreplenie-img").attr('src', img);
    $("#kreplenie-text1").text(text1);
    $("#kreplenie-text2").text(text2);
    $("#kreplenie-price").text(price);
};
function SelectZaglushkaEnd(img, text1, text2, price) {
    setDataAndText('karkas-tsvet-zaglushki', price);
    $("#zaglushka-v-paz-img").attr('src', img);
    $("#zaglushka-v-paz-text1").text(text1);
    $("#zaglushka-v-paz-text2").text(text2);
    $("#zaglushka-v-paz-price").text(price);
};
function SelectZaglushkaTorcevayaEnd(img, text1, text2, price) {
    setDataAndText('karkas-tsvet-zaglushki-tortsevoy', price);
    $("#zaglushka-torcevaya-img").attr('src', img);
    $("#zaglushka-torcevaya-text1").text(text1);
    $("#zaglushka-torcevaya-text2").text(text2);
    $("#zaglushka-torcevaya-price").text(price);
};
function SelectUplotnitelEnd(img, text1, text2, price) {
    setDataAndText('karkas-tsvet-uplotnitelya', price);
    $("#uplotnitel-img").attr('src', img);
    $("#uplotnitel-text1").text(text1);
    $("#uplotnitel-text2").text(text2);
    $("#uplotnitel-price").text(price);
};

$(".add-material-block-past").on('click', '#open-material-btn', function () {
    var polotnoId = getFromData('id');
    var materialId = $(this).parent().parent().parent().parent().attr('data-material-el-id');
    var html = $('.napolnenie-left-tab').html();
    var ploschad = getFromData('material-' + materialId + '-ploschad');
    var kol = $('*[data-material-el-id="' + materialId + '"]').find('.tab-napolnenie-kollichestvo').val();

    var templateData = {
        LDSP: parseInt((300 * ploschad) * kol),
        fanera: parseInt((285 * ploschad) * kol),
        faneraTrudnogoryuchaya: parseInt((360 * ploschad) * kol),
        MDFshlifovannyiy: parseInt((93 * ploschad) * kol),
        DSPshlifovannyiy: parseInt((150 * ploschad) * kol),
        stekloObyichnoe: parseInt((500 * ploschad) * kol),
        stekloMatovoe: parseInt((900 * ploschad) * kol),
        stekloBronzaSeroe: parseInt((950 * ploschad) * kol),
        stekloTonirovannoeSeroe: parseInt((1000 * ploschad) * kol),
        stekloTonirovannoeBronza: parseInt((1000 * ploschad) * kol),
        stekloTonirovannoeGoluboe: parseInt((2100 * ploschad) * kol),
        tripleks: parseInt((1400 * ploschad) * kol),
        tripleksMatovyiy: parseInt((2200 * ploschad) * kol),
        orgstekloEkstruz: parseInt((1480 * ploschad) * kol),
        orgstekloEkstruzMatovoe: parseInt((1598.4 * ploschad) * kol),
        stekloProtivopozharnoe: parseInt((4000 * ploschad) * kol),
        zerkaloSerebro: parseInt((1050 * ploschad) * kol),
        zerkaloBronza: parseInt((1300 * ploschad) * kol),
        polikarbonatMonolit: parseInt((1600 * ploschad) * kol),
        polikarbonatSotovyiy: parseInt((160 * ploschad) * kol),
        PVHvspenennyiy: parseInt((560 * ploschad) * kol),
        sendvichPaneliPVH: parseInt((225 * ploschad) * kol),
        gipsovinil12: parseInt((590 * ploschad) * kol),
        gipsodekor12: parseInt((348 * ploschad) * kol),
        gipsokarton12: parseInt((210 * ploschad) * kol),
        dekorativnyiyBumazhno: parseInt((1465 * ploschad) * kol),
        number: materialId
    };
    var resultHtml = makeHTMLFromTemplate(html, templateData);


    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtml);
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
});

function SelectMaterialEnd(name, number) {
    setDataAndText('material-' + number + '-type', name);
    napolnenieImg(name, number);
}

$('body').on("change", function () {
    DekorRePrice2();
    PriceForKarkas();
});

function PriceForKarkas() {
    var karkasPrice = parseInt(getFromData('karkas-price'));
    var horizontalPerPrice = parseInt(getFromData('horizontal-pereochki-price'));
    var vertikalnuePerPrice = parseInt(getFromData('vertikalnue-pereochki-price'));
    if (karkasPrice < 0 || karkasPrice == "" || isNaN(karkasPrice)) {
        karkasPrice = 0;
    }
    if (horizontalPerPrice < 0 || horizontalPerPrice == "" || isNaN(horizontalPerPrice)) {
        horizontalPerPrice = 0;
    }
    if (vertikalnuePerPrice < 0 || vertikalnuePerPrice == "" || isNaN(vertikalnuePerPrice)) {
        vertikalnuePerPrice = 0;
    }
    var sum = karkasPrice + horizontalPerPrice + vertikalnuePerPrice;
    $(".TAB-PROFIL-KARKAS-PRICE").text(sum);
}

function DekorRePrice2() {
    var typeAndText = $("#pokraskaTypeAndName").val();
    var data = explode(".", typeAndText);
    var type = data[0];
    var img = data[1];
    var TotalPrice = 0;
    var count = parseInt($("#TOTAL_PAINTING_ID").val());

    if (type == "anod") {
        if (count > 0) {
            for (var i = 0; i < count; i++) {
                var num = i + 1;
                var karkasname = $('*[data-id=' + num + ']').find('.karkas-name').text();
                switch (karkasname) {
                    case "Tur":
                        var priceKarkas = 94;
                        break;
                    case "Euroshop":
                        var priceKarkas = 111;
                        break;
                    case "Base":
                        var priceKarkas = 427;
                        break;
                    case "Standart":
                        var priceKarkas = 266;
                        break;
                    case "MobyLight":
                        var priceKarkas = 183;
                        break;
                    case "Optima":
                        var priceKarkas = 272;
                        break;
                    case "Optimax2":
                        var priceKarkas = 415;
                        break;
                    case "Statusx2":
                        var priceKarkas = 525;
                        break;
                    case "Statusx1":
                        var priceKarkas = 415;
                        break;
                    case "OptimaLite":
                        var priceKarkas = 187;
                        break;
                    case "StandartStoika":
                        var priceKarkas = 216;
                        break;
                    case "EuroshopLite":
                        var priceKarkas = 89;
                        break;
                }
                var sizeW = parseInt($('*[data-id=' + num + ']').find('.width').text());
                var sizeH = parseInt($('*[data-id=' + num + ']').find('.height').text());
                var countPerH = parseInt($('*[data-id=' + num + ']').find('.horizontal-pereochki-count').text());
                var countPerV = parseInt($('*[data-id=' + num + ']').find('.vertikalnue-pereochki-count').text());
                if (countPerH == "0" || isNaN(countPerH) || countPerH == null || countPerH < 1) {
                    var sumPerH = 0;
                } else {
                    var sumPerH = (sizeW * 0.001 * priceKarkas * countPerH);
                }
                if (countPerV == "0" || isNaN(countPerV) || countPerV == null || countPerV < 1) {
                    var sumPerV = 0;
                } else {
                    var sumPerV = (sizeH * 0.001 * priceKarkas * countPerV);
                }
                TotalPrice = TotalPrice + ((((sizeW + sizeH) * 0.002) * priceKarkas) + sumPerH + sumPerV);
            }

        }
    } else {
        if (type == "color") {

            var price = {

                "Tur": 40,

                "Euroshop": 34,

                "EuroshopLite": 34,

                "Optimax2": 92,

                "Standart": 47,

                "MobyLight": 41,

                "Optima": 57,

                "Base": 94,

                "Statusx1": 124,

                "Statusx2": 101,

                "OptimaLite": 41,

                "StandartStoika": 38

            };

        }

        if (type == "image") {

            var price = {

                "Tur": 89,

                "Euroshop": 76,

                "EuroshopLite": 76,

                "Optimax2": 205,

                "Standart": 105,

                "MobyLight": 92,

                "Optima": 127,

                "Base": 209,

                "Statusx1": 276,

                "Statusx2": 225,

                "OptimaLite": 92,

                "StandartStoika": 85

            };

        }

        if (count > 0) {

            for (var i = 0; i < count; i++) {

                var num = i + 1;

                var karkasname = $('*[data-id=' + num + ']').find('.karkas-name').text();

                var sizeW = parseInt($('*[data-id=' + num + ']').find('.width').text());

                var sizeH = parseInt($('*[data-id=' + num + ']').find('.height').text());

                var countPerH = parseInt($('*[data-id=' + num + ']').find('.horizontal-pereochki-count').text());

                var countPerV = parseInt($('*[data-id=' + num + ']').find('.vertikalnue-pereochki-count').text());

                var countProfil = 1;

                if (karkasname in price) {

                    var price2 = price[karkasname];

                }

                if (countPerH > 0) {

                    var sizePerH = sizeW * 0.002 * countPerH;

                } else {

                    var sizePerH = 0;

                }

                if (sizePerV > 0) {

                    var sizePerV = sizeW * 0.002 * countPerV;

                } else {

                    var sizePerV = 0;

                }

                TotalPrice = TotalPrice + ((((sizeW + sizeH) * 0.002) + (sizePerH + sizePerV)) * price2) * countProfil;
            }

        }

        if (img == "RAL9006" || img == "RAL9016" || img == "RAL9003") {
        } else {
            if (TotalPrice < 3650) {
                TotalPrice = 3650;
            }
        }
    }
    var ploshad = (sizeW * sizeH) / 1000000;
    if (isNaN(ploshad)) {
        ploshad = 0;
    }
    $(".TAB-POKRASKA-PRICE").text(parseInt(TotalPrice));
    $(".TAB-POKRASKA-PLOSHAD").text(parseInt(ploshad));
    setDataAndText('decor-price', parseInt(TotalPrice));

}

function SelectDekorEnd(type, img) {
    $("#DekorType").val(type);
    if (type == "color" || type == "anod") {
        $(".vyiborDekoraDlyaProfilya img").attr("src", "img/dekorRal/" + img + ".png");
    }
    if (type == "image") {
        $(".vyiborDekoraDlyaProfilya img").attr("src", "img/dekor/" + img + ".png");
    }
    DekorRePrice(img, type);
}

function DekorRePrice(img, type) {

    var count = parseInt($("#TOTAL_PAINTING_ID").val());

    var count1 = parseInt($("#MOVABLE_PAINTING_ID").val());

    var count2 = count - count1;

    var TotalPrice = 0;

    if (type == "anod") {
        if (count > 0) {
            for (var i = 0; i < count; i++) {
                var num = i + 1;
                var karkasname = $('*[data-id=' + num + ']').find('.karkas-name').text();
                switch (karkasname) {
                    case "Tur":
                        var priceKarkas = 94;
                        break;
                    case "Euroshop":
                        var priceKarkas = 111;
                        break;
                    case "Base":
                        var priceKarkas = 427;
                        break;
                    case "Standart":
                        var priceKarkas = 266;
                        break;
                    case "MobyLight":
                        var priceKarkas = 183;
                        break;
                    case "Optima":
                        var priceKarkas = 272;
                        break;
                    case "Optimax2":
                        var priceKarkas = 415;
                        break;
                    case "Statusx2":
                        var priceKarkas = 525;
                        break;
                    case "Statusx1":
                        var priceKarkas = 415;
                        break;
                    case "OptimaLite":
                        var priceKarkas = 187;
                        break;
                    case "StandartStoika":
                        var priceKarkas = 216;
                        break;
                    case "EuroshopLite":
                        var priceKarkas = 89;
                        break;
                }
                var sizeW = parseInt($('*[data-id=' + num + ']').find('.width').text());
                var sizeH = parseInt($('*[data-id=' + num + ']').find('.height').text());
                var countPerH = parseInt($('*[data-id=' + num + ']').find('.horizontal-pereochki-count').text());
                var countPerV = parseInt($('*[data-id=' + num + ']').find('.vertikalnue-pereochki-count').text());
                if (countPerH == "0" || isNaN(countPerH) || countPerH == null || countPerH < 1) {
                    var sumPerH = 0;
                } else {
                    var sumPerH = (sizeW * 0.001 * priceKarkas * countPerH);
                }
                if (countPerV == "0" || isNaN(countPerV) || countPerV == null || countPerV < 1) {
                    var sumPerV = 0;
                } else {
                    var sumPerV = (sizeH * 0.001 * priceKarkas * countPerV);
                }
                TotalPrice = TotalPrice + ((((sizeW + sizeH) * 0.002) * priceKarkas) + sumPerH + sumPerV);
            }

        }
    } else {
        if (type == "color") {

            var price = {

                "Tur": 40,

                "Euroshop": 34,

                "EuroshopLite": 34,

                "Optimax2": 92,

                "Standart": 47,

                "MobyLight": 41,

                "Optima": 57,

                "Base": 94,

                "Statusx1": 124,

                "Statusx2": 101,

                "OptimaLite": 41,

                "StandartStoika": 38

            };

        }

        if (type == "image") {

            var price = {

                "Tur": 89,

                "Euroshop": 76,

                "EuroshopLite": 76,

                "Optimax2": 205,

                "Standart": 105,

                "MobyLight": 92,

                "Optima": 127,

                "Base": 209,

                "Statusx1": 276,

                "Statusx2": 225,

                "OptimaLite": 92,

                "StandartStoika": 85

            };

        }

        if (count > 0) {

            for (var i = 0; i < count; i++) {

                var num = i + 1;

                var karkasname = $('*[data-id=' + num + ']').find('.karkas-name').text();

                var sizeW = parseInt($('*[data-id=' + num + ']').find('.width').text());

                var sizeH = parseInt($('*[data-id=' + num + ']').find('.height').text());

                var countPerH = parseInt($('*[data-id=' + num + ']').find('.horizontal-pereochki-count').text());

                var countPerV = parseInt($('*[data-id=' + num + ']').find('.vertikalnue-pereochki-count').text());

                var countProfil = 1;

                if (karkasname in price) {

                    var price2 = price[karkasname];

                }

                if (countPerH > 0) {

                    var sizePerH = sizeW * 0.002 * countPerH;

                } else {

                    var sizePerH = 0;

                }

                if (sizePerV > 0) {

                    var sizePerV = sizeW * 0.002 * countPerV;

                } else {

                    var sizePerV = 0;

                }

                TotalPrice = TotalPrice + ((((sizeW + sizeH) * 0.002) + (sizePerH + sizePerV)) * price2) * countProfil;
            }

        }

        if (img == "RAL9006" || img == "RAL9016" || img == "RAL9003") {
        } else {
            if (TotalPrice < 3650) {
                TotalPrice = 3650;
            }
        }
    }

    $("#pokraskaTypeAndName").val(type + "." + img);
    $(".TAB-POKRASKA-PRICE").text(parseInt(TotalPrice));
    setDataAndText('decor-price', parseInt(TotalPrice));

}
//  ============================= //

// ТАБ НАПОЛНИТЕЛ установка толщины
function setNapolnenieElTolschinaShow(napolnenieType, id) {
    var karkasname = getFromData("karkas-name");
    switch (karkasname) {
        case "Tur":
            var thickness = {
                1: {4: 500},
                2: {4: 900},
                3: {4: 1050},
                4: {4: 1300},
                5: {0: 0},
                6: {0: 0},

                7: {4: 160},
                8: {4: 560, 5: 665},
                9: {4: 1600, 5: 2000},

                10: {4: 1480},

                11: {0: 0},
                12: {4: 93},
                13: {0: 0},
                14: {4: 285},
                15: {0: 0},

                16: {4: 1000},
                17: {4: 1000},
                18: {0: 0},
                19: {4: 360},
                20: {4: 1598.4},
                21: {5: 1465},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {4: 950},
                26: {4: 4000}
            };
            break;
        case "Euroshop":
            var thickness = {
                1: {4: 500, 5: 625, 6: 720},
                2: {4: 900, 5: 1100},
                3: {4: 1050, 5: 1350},
                4: {4: 1300},
                5: {6: 1400},
                6: {0: 0},

                7: {4: 160, 6: 260, 8: 345, 16: 660},
                8: {4: 560, 5: 665, 6: 820, 8: 1200},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200},

                10: {4: 1480, 5: 1850},

                11: {8: 300, 16: 350},
                12: {4: 93, 6: 120, 8: 150, 16: 325},
                13: {16: 165},
                14: {4: 285, 6: 380, 8: 480, 16: 800},
                15: {8: 225, 16: 340},

                16: {4: 1000, 5: 1250},
                17: {4: 1000},
                18: {0: 0},
                19: {4: 360, 6: 465, 8: 590},
                20: {4: 1598.4, 5: 1998},
                21: {5: 1465, 6: 2475, 8: 2250},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {4: 950, 5: 1300},
                26: {4: 4000, 5: 5000}
            };
            break;
        case "EuroshopLite":
            var thickness = {
                1: {4: 500, 5: 625, 6: 720},
                2: {4: 900, 5: 1100},
                3: {4: 1050, 5: 1350},
                4: {4: 1300},
                5: {6: 1400},
                6: {0: 0},

                7: {4: 160, 6: 260, 8: 345, 16: 660},
                8: {4: 560, 5: 665, 6: 820, 8: 1200},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200},

                10: {4: 1480, 5: 1850},

                11: {8: 300, 16: 350},
                12: {4: 93, 6: 120, 8: 150, 16: 325},
                13: {16: 165},
                14: {4: 285, 6: 380, 8: 480, 16: 800},
                15: {8: 225, 16: 340},

                16: {4: 1000, 5: 1250},
                17: {4: 1000},
                18: {0: 0},
                19: {4: 360, 6: 465, 8: 590},
                20: {4: 1598.4, 5: 1998},
                21: {5: 1465, 6: 2475, 8: 2250},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {4: 950, 5: 1300},
                26: {4: 4000, 5: 5000}
            };
            break;
        case "Base":
            var thickness = {
                1: {5: 625, 6: 720, 8: 1050},
                2: {5: 1100, 6: 1300, 8: 1600},
                3: {6: 1600},
                4: {0: 0},
                5: {6: 1400, 8: 1600},
                6: {6: 2200, 8: 2400},

                7: {4: 160, 6: 260, 8: 345, 10: 395},
                8: {4: 560, 5: 665, 6: 820, 8: 1200, 10: 1470},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200, 10: 4000},

                10: {5: 1850, 6: 2200, 8: 2960},

                11: {8: 300, 10: 320},
                12: {4: 93, 6: 120, 8: 150, 10: 211, 12: 253},
                13: {10: 150},
                14: {4: 285, 6: 380, 8: 480, 10: 565, 12: 660},
                15: {8: 225, 10: 270},

                16: {5: 1250},
                17: {6: 1500, 8: 2000},
                18: {8: 2100},
                19: {4: 360, 6: 465, 8: 590},
                20: {5: 1998, 6: 2376, 8: 3196.8},
                21: {5: 1465, 6: 2475, 8: 2250},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {5: 1300, 6: 1500, 8: 2000},
                26: {5: 5000}
            };
            break;
        case "Standart":
            var thickness = {
                1: {4: 500, 5: 625, 6: 720},
                2: {4: 900, 5: 1100},
                3: {4: 1050, 5: 1350},
                4: {4: 1300},
                5: {6: 1400},
                6: {0: 0},

                7: {4: 160, 6: 260, 8: 345, 16: 660},
                8: {4: 560, 5: 665, 6: 820, 8: 1200},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200},

                10: {4: 1480, 5: 1850},

                11: {8: 300, 16: 350},
                12: {4: 93, 6: 120, 8: 150, 16: 325},
                13: {16: 165},
                14: {4: 285, 6: 380, 8: 480, 16: 800},
                15: {8: 225, 16: 340},

                16: {4: 1000, 5: 1250},
                17: {4: 1000},
                18: {0: 0},
                19: {4: 360, 6: 465, 8: 590},
                20: {4: 1598.4, 5: 1998},
                21: {5: 1465, 6: 2475, 8: 2250},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {4: 950, 5: 1300},
                26: {4: 4000, 5: 5000}
            };
            break;
        case "MobyLight":
            var thickness = {
                1: {4: 500, 5: 625, 6: 720},
                2: {4: 900, 5: 1100},
                3: {4: 1050, 5: 1350},
                4: {4: 1300},
                5: {6: 1400},

                6: {0: 0},

                7: {4: 160, 6: 260, 8: 345, 16: 660},
                8: {4: 560, 5: 665, 6: 820, 8: 1200},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200},

                10: {4: 1480, 5: 1850},

                11: {8: 300, 16: 350},
                12: {4: 93, 6: 120, 8: 150, 16: 325},
                13: {10: 150, 16: 165},
                14: {4: 285, 6: 380, 8: 480, 16: 800},
                15: {8: 225, 16: 340},

                16: {4: 1000, 5: 1250},
                17: {4: 1000},
                18: {0: 0},
                19: {4: 360, 6: 465, 8: 590, 16: 1035},
                20: {4: 1598.4, 5: 1998},
                21: {5: 1465, 6: 2475, 8: 2250, 16: 4320},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {4: 950, 5: 1300},
                26: {4: 4000, 5: 5000}
            };
            break;
        case "Optima":
            var thickness = {
                1: {4: 500, 5: 625, 6: 720},
                2: {4: 900, 5: 1100},
                3: {4: 1050, 5: 1350},
                4: {4: 1300},
                5: {6: 1400},
                6: {0: 0},

                7: {4: 160, 6: 260, 8: 345, 16: 660},
                8: {4: 560, 5: 665, 6: 820, 8: 1200},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200},

                10: {4: 1480, 5: 1850},

                11: {8: 300, 16: 350},
                12: {4: 93, 6: 120, 8: 150, 16: 325},
                13: {10: 150, 16: 165},
                14: {4: 285, 6: 380, 8: 480, 16: 800},
                15: {8: 225, 16: 340},

                16: {4: 1000, 5: 1250},
                17: {4: 1000},
                18: {0: 0},
                19: {4: 360, 6: 465, 8: 590, 16: 1035},
                20: {4: 1598.4, 5: 1998},
                21: {5: 1465, 6: 2475, 8: 2250, 16: 4320},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {4: 950, 5: 1300},
                26: {4: 4000, 5: 5000}
            };
            break;
        case "Optimax2":
            var thickness = {
                1: {4: 500, 5: 625},
                2: {4: 900, 5: 1100},
                3: {4: 1050, 5: 1350},
                4: {4: 1300},
                5: {0: 0},
                6: {0: 0},

                7: {4: 160, 6: 260, 8: 345, 16: 660},
                8: {4: 560, 5: 665, 6: 820, 8: 1200},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200},

                10: {4: 1480, 5: 1850},

                11: {8: 300, 16: 350},
                12: {4: 93, 6: 120, 8: 150, 16: 325},
                13: {10: 150, 16: 165},
                14: {4: 285, 6: 380, 8: 480, 16: 800},
                15: {8: 225, 16: 340},

                16: {4: 1000, 5: 1250},
                17: {4: 1000},
                18: {0: 0},
                19: {4: 360, 6: 465, 8: 590, 16: 1035},
                20: {4: 1598.4, 5: 1998},
                21: {5: 1465, 6: 2475, 8: 2250, 16: 4320},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {4: 950, 5: 1300},
                26: {4: 4000, 5: 5000}
            };
            break;
        case "Statusx1":
            var thickness = {
                1: {5: 625, 6: 720, 8: 1050, 10: 1300},
                2: {5: 1100, 6: 1300, 8: 1600, 10: 2000},
                3: {5: 1350, 6: 1600},
                4: {0: 0},
                5: {6: 1400, 8: 1600, 10: 2000},
                6: {6: 2200, 8: 2400, 10: 2600},

                7: {4: 160, 6: 260, 8: 345, 10: 395},
                8: {4: 560, 5: 665, 6: 820, 8: 1200, 10: 1470},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200, 10: 4000},

                10: {5: 1850, 6: 2200, 8: 2960, 10: 3700},

                11: {8: 300, 10: 320},
                12: {4: 93, 6: 120, 8: 150, 10: 211, 12: 253},
                13: {10: 150},
                14: {4: 285, 6: 380, 8: 480, 10: 565, 12: 660},
                15: {8: 225, 10: 270},

                16: {5: 1250, 10: 2500},
                17: {6: 1500, 8: 2000, 10: 2500},
                18: {8: 2100},
                19: {4: 360, 6: 465, 8: 590, 10: 690, 12: 830},
                20: {5: 1998, 6: 2376, 8: 3196.8, 10: 3996},
                21: {5: 1465, 6: 2475, 8: 2250, 10: 2625, 12: 3170},
                22: {12: 590},
                23: {12: 348},
                24: {12: 210},
                25: {5: 1300, 6: 1500, 8: 2000, 10: 2300},
                26: {5: 5000, 10: 7500}
            };
            break;
        case "Statusx2":
            var thickness = {
                1: {5: 625, 6: 720, 8: 1050, 10: 1300},
                2: {5: 1100, 6: 1300, 8: 1600, 10: 2000},
                3: {5: 1350, 6: 1600},
                4: {0: 0},
                5: {6: 1400, 8: 1600, 10: 2000},
                6: {6: 2200, 8: 2400, 10: 2600},

                7: {4: 160, 6: 260, 8: 345, 10: 395},
                8: {4: 560, 5: 665, 6: 820, 8: 1200, 10: 1470},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200, 10: 4000},

                10: {5: 1850, 6: 2200, 8: 2960, 10: 3700},

                11: {8: 300, 10: 320},
                12: {4: 93, 6: 120, 8: 150, 10: 211, 12: 253},
                13: {10: 150},
                14: {4: 285, 6: 380, 8: 480, 10: 565, 12: 660},
                15: {8: 225, 10: 270},

                16: {5: 1250, 10: 2500},
                17: {6: 1500, 8: 2000, 10: 2500},
                18: {8: 2100},
                19: {4: 360, 6: 465, 8: 590, 10: 690, 12: 830},
                20: {5: 1998, 6: 2376, 8: 3196.8, 10: 3996},
                21: {5: 1465, 6: 2475, 8: 2250, 10: 2625, 12: 3170},
                22: {12: 590},
                23: {12: 348},
                24: {12: 210},
                25: {5: 1300, 6: 1500, 8: 2000, 10: 2300},
                26: {5: 5000, 10: 7500}
            };
            break;
        case "OptimaLite":
            var thickness = {
                1: {4: 500, 5: 625},
                2: {4: 900, 5: 1100},
                3: {4: 1050, 5: 1350},
                4: {4: 1300},
                5: {0: 0},
                6: {0: 0},

                7: {4: 160, 6: 260, 8: 345, 16: 660},
                8: {4: 560, 5: 665, 6: 820, 8: 1200},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200},

                10: {4: 1480, 5: 1850},

                11: {8: 300, 16: 350},
                12: {4: 93, 6: 120, 8: 150, 16: 325},
                13: {10: 150, 16: 165},
                14: {4: 285, 6: 380, 8: 480, 16: 800},
                15: {8: 225, 16: 340},

                16: {4: 1000, 5: 1250},
                17: {4: 1000},
                18: {0: 0},
                19: {4: 360, 6: 465, 8: 590, 16: 1035},
                20: {4: 1598.4, 5: 1998},
                21: {5: 1465, 6: 2475, 8: 2250, 16: 4320},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {4: 950, 5: 1300},
                26: {4: 4000, 5: 5000}
            };
            break;
        case "StandartStoika":
            var thickness = {
                1: {4: 500, 5: 625},
                2: {4: 900, 5: 1100},
                3: {4: 1050, 5: 1350},
                4: {4: 1300},
                5: {0: 0},
                6: {0: 0},

                7: {4: 160, 6: 260, 8: 345, 16: 660},
                8: {4: 560, 5: 665, 6: 820, 8: 1200},
                9: {4: 1600, 5: 2000, 6: 2400, 8: 3200},

                10: {4: 1480, 5: 1850},

                11: {8: 300, 16: 350},
                12: {4: 93, 6: 120, 8: 150, 16: 325},
                13: {10: 150, 16: 165},
                14: {4: 285, 6: 380, 8: 480, 16: 800},
                15: {8: 225, 16: 340},

                16: {4: 1000, 5: 1250},
                17: {4: 1000},
                18: {0: 0},
                19: {4: 360, 6: 465, 8: 590},
                20: {4: 1598.4, 5: 1998},
                21: {5: 1465, 6: 2475, 8: 2250},
                22: {0: 0},
                23: {0: 0},
                24: {0: 0},
                25: {4: 950, 5: 1300},
                26: {4: 4000, 5: 5000}
            };
            break;
    }
    switch (napolnenieType) {
        case "stekloObyichnoe":
            var value = 1;
            break;
        case "stekloMatovoe":
            var value = 2;
            break;
        case "zerkaloSerebro":
            var value = 3;
            break;
        case "zerkaloBronza":
            var value = 4;
            break;
        case "tripleks":
            var value = 5;
            break;
        case "tripleksMatovyiy":
            var value = 6;
            break;
        case "polikarbonatSotovyiy":
            var value = 7;
            break;
        case "PVHvspenennyiy":
            var value = 8;
            break;
        case "polikarbonatMonolit":
            var value = 9;
            break;
        case "orgstekloEkstruz":
            var value = 10;
            break;
        case "LDSP":
            var value = 11;
            break;
        case "MDFshlifovannyiy":
            var value = 12;
            break;
        case "DSPshlifovannyiy":
            var value = 13;
            break;
        case "fanera":
            var value = 14;
            break;
        case "sendvichPaneliPVH":
            var value = 15;
            break;
        case "stekloTonirovannoeSeroe":
            var value = 16;
            break;
        case "stekloTonirovannoeBronza":
            var value = 17;
            break;
        case "stekloTonirovannoeGoluboe":
            var value = 18;
            break;
        case "faneraTrudnogoryuchaya":
            var value = 19;
            break;
        case "orgstekloEkstruzMatovoe":
            var value = 20;
            break;
        case "dekorativnyiyBumazhno":
            var value = 21;
            break;
        case "gipsovinil12":
            var value = 22;
            break;
        case "gipsodekor12":
            var value = 23;
            break;
        case "gipsokarton12":
            var value = 24;
            break;
        case "stekloBronzaSeroe":
            var value = 25;
            break;
        case "stekloProtivopozharnoe":
            var value = 26;
            break;
    }

    if (value in thickness) {
        thickness = thickness[value];
    }
    $('*[data-material-el-id="' + id + '"]').find('.napolnenie-el-tolschina').empty();
    for (var Val in thickness) {
        $('*[data-material-el-id="' + id + '"]').find('.napolnenie-el-tolschina').append($("<option value=" + thickness[Val] + " >" + Val + " мм</option>"));
    }

    // }

}

//  ============================= //

// ТАБ НАПОЛНЕНИЕ картинка //
function napolnenieImg(name, id) {
    switch (name) {
        case "LDSP":
            var img = 11;
            break;
        case "fanera":
            var img = 14;
            break;
        case "faneraTrudnogoryuchaya":
            var img = 14;
            break;
        case "MDFshlifovannyiy":
            var img = 12;
            break;
        case "DSPshlifovannyiy":
            var img = 13;
            break;

        case "stekloObyichnoe":
            var img = 1;
            break;
        case "stekloMatovoe":
            var img = 2;
            break;
        case "stekloBronzaSeroe":
            var img = 2;
            break;
        case "stekloTonirovannoeSeroe":
            var img = 16;
            break;
        case "stekloTonirovannoeBronza":
            var img = 17;
            break;
        case "stekloTonirovannoeGoluboe":
            var img = 18;
            break;
        case "tripleks":
            var img = 5;
            break;
        case "tripleksMatovyiy":
            var img = 6;
            break;
        case "orgstekloEkstruz":
            var img = 10;
            break;
        case "orgstekloEkstruzMatovoe":
            var img = 20;
            break;
        case "stekloProtivopozharnoe":
            var img = 26;
            break;

        case "zerkaloSerebro":
            var img = 3;
            break;
        case "zerkaloBronza":
            var img = 4;
            break;

        case "polikarbonatMonolit":
            var img = 9;
            break;
        case "polikarbonatSotovyiy":
            var img = 7;
            break;
        case "PVHvspenennyiy":
            var img = 8;
            break;

        case "sendvichPaneliPVH":
            var img = 15;
            break;
        case "gipsovinil12":
            var img = 22;
            break;
        case "gipsodekor12":
            var img = 23;
            break;
        case "gipsokarton12":
            var img = 24;
            break;
        case "dekorativnyiyBumazhno":
            var img = 21;
            break;
    }

    $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'img/material/' + img + '.png');
    setNapolnenieElTolschinaShow(name, id)
}
//  ============================= //

// ТАБ НАПОЛНЕНИЕ картинка //
function removeElNapolnenie(t) {
    $(t).parent().parent().parent().parent().remove();
    var id = $(t).parent().parent().parent().parent().data('material-el-id');
    setDataAndText('material-' + id + '-type', '');
    setDataAndText('material-' + id + '-color', '');
    setDataAndText('material-' + id + '-width', '');
    setDataAndText('material-' + id + '-kol', '');
    setDataAndText('material-' + id + '-zakalka-stekla', '');
    setDataAndText('material-' + id + '-dvoynoe-zapolnenie', '');
    setDataAndText('material-' + id + '-tolschina', '');
}
//  ============================= //

// ТАБ НАПОЛНЕНИЕ установка высоты //
function addWHElNapolnenie() {
    for (i = 1; i <= 5; i++) {
        $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-vyisota').val(getFromData('height'));
    }
}
//  ============================= //

// ТАБ НАПОЛНЕНИЕ  выставленеи ширины одинаковой у всех //
function addWElNapolnenieToFive() {
    var allElInC = $('.add-material-block-past > div').length;
    for (i = 1; i <= 5; i++) {
        $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-shirina').val(getFromData('width') / allElInC);
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА загрузка по типу плотна //
function loadFurnitura() {
    $('#furnitura-tab').html("")
    var type = $('#TYPE_BAFFLE_ID').val();
    if (type == 0) {
        $('#furnitura-tab').html($('.furnitura-net').html());
    } else if (type == 1) {
        $('#furnitura-tab').html($('.furnitura-razdvizhnyie').html());
    } else if (type == 2 || type == 3) {
        $('#furnitura-tab').html($('.skladnaya-peregorodka').html());
    } else if (type == 4) {
        $('#furnitura-tab').html($('.mobilnyie-peregorodki').html());
        loadStoyki();
    }
}
loadFurnitura();
$("#TYPE_BAFFLE_ID").change(function () {
    loadFurnitura();
    getDataFurnitura();
});
//  ============================= //
function setDekorativnayaPlankaDlyaProfilya() {
    var allWidth = parseInt($("#WIDTH_SETS_ID").val());
    var price = 0;
    var kornevoiiY = 120 * 2;
    var kreplenieP = 55 * 2;
    var id = $('.dekorativnayaPlankaDlyaProfilya select').val();
    if (id == 0) {
        $('.dekorativnayaPlankaDlyaProfilya .price').text(0);
        $('.dekorativnayaPlankaDlyaProfilya img').attr('src', 'img/furnityra/0.png');
    } else if (id == 1) {
        price = 320;
        $('.dekorativnayaPlankaDlyaProfilya .price').text(((allWidth * 2 / 1000) * 1.1) * price * 1.05 + kornevoiiY + kreplenieP);
        $('.dekorativnayaPlankaDlyaProfilya img').attr('src', 'img/furnityra/13.png');
    } else if (id == 2) {
        price = 1500;
        $('.dekorativnayaPlankaDlyaProfilya .price').text(((allWidth * 2 / 1000) * 1.1) * price * 1.05 + kornevoiiY + kreplenieP);
        $('.dekorativnayaPlankaDlyaProfilya img').attr('src', 'img/furnityra/32.png');
    }
}
//  ============================= //
function getDataFurnitura() {
    var type = $('#TYPE_BAFFLE_ID').val();
    var Count = parseInt($("#TOTAL_PAINTING_ID").val());
    var width = parseInt($("#WIDTH_SETS_ID").val());
    if (width > 3000) {
        var double = 2;
    } else {
        var double = 1;
    }
    var height = parseInt($("#HIGHT_SETS_ID").val());
    if (type == 1) {
        var razdvizhnyieMehanizmyi = $(".razdvizhnyie-mehanizmyi .text").html();
        var mehanizmSinhronizatsii = $(".mehanizm-sinhronizatsii .text").html();
        var napravlyayuschie = $(".napravlyayuschie .text").html();
        var vidKrepleniyaNapravlyayuschey = $(".vidKrepleniyaNapravlyayuschey .text").html();
        var povodok = $(".povodok .text").html();

        switch (razdvizhnyieMehanizmyi) {
            case "Standart до 40 кг":
                var razdvizhnyieMehanizmyiPrice = 475 * Count;
                break;
            case "Standart до 100 кг":
                var razdvizhnyieMehanizmyiPrice = 830 * Count;
                break;
            case "B-103 до 100 кг":
                var razdvizhnyieMehanizmyiPrice = 650 * Count;
                break;
            case "B-104 до 100 кг":
                var razdvizhnyieMehanizmyiPrice = 705 * Count;
                break;
            case "R3 до 60 кг":
                var razdvizhnyieMehanizmyiPrice = 500 * Count;
                break;
            case "D 80 до 80 кг":
                var razdvizhnyieMehanizmyiPrice = 2000 * Count;
                break;
            case "Не выбрано":
                var razdvizhnyieMehanizmyiPrice = 0;
                break;
        }
        if (isNaN(razdvizhnyieMehanizmyiPrice)) {
            var razdvizhnyieMehanizmyiPrice = 0;
        }
        switch (mehanizmSinhronizatsii) {
            case "Синхронный":
                var mehanizmSinhronizatsiiPrice = 1590 * Count / 2;
                break;
            case "D-80 Synchro, Ducasse":
                var mehanizmSinhronizatsiiPrice = 6320 * Count / 2;
                break;
            case "D-80 Telescopic, Ducasse":
                var mehanizmSinhronizatsiiPrice = 6320 * Count / 2;
                break;
            case "Не выбрано":
                var mehanizmSinhronizatsiiPrice = 0;
                break;
        }
        if (isNaN(mehanizmSinhronizatsiiPrice)) {
            var mehanizmSinhronizatsiiPrice = 0;
        }
        switch (napravlyayuschie) {
            case "Неокрашенная, Россия":
                var napravlyayuschiePrice = 145 * width * 2 / 1000 * 1.05;
                break;
            case "Цвет: серебро, Россия":
                var napravlyayuschiePrice = 215 * width * 2 / 1000 * 1.05;
                break;
            case "Не выбрано":
                var napravlyayuschiePrice = 0;
                break;
        }
        if (isNaN(napravlyayuschiePrice)) {
            var napravlyayuschiePrice = 0;
        }
        switch (vidKrepleniyaNapravlyayuschey) {
            case "К стене, Россия":
                var vidKrepleniyaNapravlyayuscheyPrice = 50 * 2 * double;
                break;
            case "К потолку, Россия":
                var vidKrepleniyaNapravlyayuscheyPrice = 50 * 2 * double;
                break;
            case "Уголок крепежный, Degon Польша и Китайя":
                var vidKrepleniyaNapravlyayuscheyPrice = 50 * 2 * double;
                break;
            case "Не выбрано":
                var vidKrepleniyaNapravlyayuscheyPrice = 0;
                break;
        }
        if (isNaN(vidKrepleniyaNapravlyayuscheyPrice)) {
            var vidKrepleniyaNapravlyayuscheyPrice = 0;
        }
        switch (povodok) {
            case "Белый":
                var povodokPrice = 20 * Count;
                break;
            case "Коричневый":
                var povodokPrice = 20 * Count;
                break;
            case "Поводок, Ducasse Испания":
                var povodokPrice = 110 * Count;
                break;
            case "Не выбрано":
                var povodokPrice = 0;
                break;
        }
        if (isNaN(povodokPrice)) {
            var povodokPrice = 0;
        }

        $(".razdvizhnyie-mehanizmyi .price").text(razdvizhnyieMehanizmyiPrice);
        $(".mehanizm-sinhronizatsii .price").text(mehanizmSinhronizatsiiPrice);
        $(".napravlyayuschie .price").text(napravlyayuschiePrice);
        $(".vidKrepleniyaNapravlyayuschey .price").text(vidKrepleniyaNapravlyayuscheyPrice);
        $(".povodok .price").text(povodokPrice);

        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            var dovodchik = $(".dovodchik .text").html();
            var dekorativnayaPlankaDlyaProfilya = $(".dekorativnayaPlankaDlyaProfilya .text").html();
            var schetochnyiyUplotnitel = $(".schetochnyiyUplotnitel .text").html();
            var rakovina = $(".rakovina .text").html();
            var zamok = $(".zamok .text").html();

            switch (dovodchik) {
                case "Standart до 25 кг, Россия":
                    var dovodchikPrice = 1260 * Count;
                    break;
                case "Standart до 50 кг, Россия":
                    var dovodchikPrice = 1260 * Count;
                    break;
                case "Standart до 100 кг, Россия":
                    var dovodchikPrice = 1260 * Count;
                    break;
                case "Soft, Ducasse Испания":
                    var dovodchikPrice = 5180 * Count;
                    break;
                case "Не выбрано":
                    var dovodchikPrice = 0;
                    break;
            }
            if (isNaN(dovodchikPrice)) {
                var dovodchikPrice = 0;
            }
            switch (dekorativnayaPlankaDlyaProfilya) {
                case "Цвет: серебро, Россия":
                    var dekorativnayaPlankaDlyaProfilyaPrice = ((width * 2 / 1000) * 1.1) * 320 * 1.05 + 150 * 2 + 55 * 2;
                    break;
                case "Алюм. карниз, Ducasse Испания":
                    var dekorativnayaPlankaDlyaProfilyaPrice = ((width * 2 / 1000) * 1.1) * 1500 * 1.05 + 150 * 2 + 55 * 2;
                    break;
                case "Не выбрано":
                    var dekorativnayaPlankaDlyaProfilyaPrice = 0;
                    break;
            }
            if (isNaN(dekorativnayaPlankaDlyaProfilyaPrice)) {
                var dekorativnayaPlankaDlyaProfilyaPrice = 0;
            }
            switch (schetochnyiyUplotnitel) {
                case "6 мм (Серый, бронза, золото)":
                    var schetochnyiyUplotnitelPrice = width / 1000 * 12;
                    break;
                case "12 мм (Серый, бронза, золото)":
                    var schetochnyiyUplotnitelPrice = width / 1000 * 25;
                    break;
                case "Не выбрано":
                    var schetochnyiyUplotnitelPrice = 0;
                    break;
            }
            if (isNaN(schetochnyiyUplotnitelPrice)) {
                var schetochnyiyUplotnitelPrice = 0;
            }
            switch (rakovina) {
                case "Ручка-раковина бронза Besana (Италия)":
                    var rakovinaPrice = 260;
                    break;
                case "Ручка-раковина бронза состаренная Giusti (Италия)":
                    var rakovinaPrice = 395;
                    break;
                case "Ручка-раковина 64мм хром Производитель: Giusti, Италия":
                    var rakovinaPrice = 225;
                    break;
                case "Ручка-раковина бронза Giusti (Италия)":
                    var rakovinaPrice = 160;
                    break;
                case "Ручка OL 8 (Китай) Цвет: бронза, медь, матовое золото, матовый никель, золото":
                    var rakovinaPrice = 170;
                    break;
                case "Ручка OL 5 (Китай) Цвет: золото, хром, бронза, матовый никель":
                    var rakovinaPrice = 120;
                    break;
                case "Не выбрано":
                    var rakovinaPrice = 0;
                    break;
            }
            if (isNaN(rakovinaPrice)) {
                var rakovinaPrice = 0;
            }
            switch (zamok) {
                case "Поворотный":
                    var zamokPrice = 140;
                    break;
                case "Замок врезной цилиндровый узкопроф.201 (20 mm) (никель) 3 кл.":
                    var zamokPrice = 750;
                    break;
                case "Замок врезной крестообразный узкопроф.201F (20 mm) (никель) 3 кл.":
                    var zamokPrice = 1000;
                    break;
                case "Не выбрано":
                    var zamokPrice = 0;
                    break;
            }
            if (isNaN(zamokPrice)) {
                var zamokPrice = 0;
            }

            $(".dovodchik .price").text(dovodchikPrice);
            $(".dekorativnayaPlankaDlyaProfilya .price").text(dekorativnayaPlankaDlyaProfilyaPrice);
            $(".schetochnyiyUplotnitel .price").text(schetochnyiyUplotnitelPrice);
            $(".rakovina .price").text(rakovinaPrice);
            $(".zamok .price").text(zamokPrice);
        }
    }
    if (type == 2 || type == 3) {
        var setSkladnyieMehanizmyi = $(".setSkladnyieMehanizmyi .text").html();
        var petliSkladnie = $(".petli-skladnie .text").html();
        var napravlyayuschieSkladnie = $(".napravlyayuschie-skladnie .text").html();
        var vidKrepleniyaSkladnie = $(".vidKrepleniya-skladnie .text").html();

        switch (setSkladnyieMehanizmyi) {
            case "Stanfold до 40 кг (Россия)":
                var setSkladnyieMehanizmyiPrice = 950 * Count;
                break;
            case "B-100 до 80 кг (Degon, Польша)":
                var setSkladnyieMehanizmyiPrice = 490 * Count;
                break;
            case "Не выбрано":
                var setSkladnyieMehanizmyiPrice = 0;
                break;
        }
        if (isNaN(setSkladnyieMehanizmyiPrice)) {
            var setSkladnyieMehanizmyiPrice = 0;
        }
        switch (petliSkladnie) {
            case "Комплектные, Россия":
                var petliSkladniePrice = 50 * 3 * Count;
                break;
            case "Комплектные, Degon Польша":
                var petliSkladniePrice = 30 * 3 * Count;
                break;
            case "Не выбрано":
                var petliSkladniePrice = 0;
                break;
        }
        if (isNaN(petliSkladniePrice)) {
            var petliSkladniePrice = 0;
        }
        switch (napravlyayuschieSkladnie) {
            case "Неокрашенная, Россия":
                var napravlyayuschieSkladniePrice = 145 * width / 1000 * 1.05;
                break;
            case "Цвет: серебро, Россия":
                var napravlyayuschieSkladniePrice = 215 * width / 1000 * 1.05;
                break;
            case "Неокрашенная, Degon Польша":
                var napravlyayuschieSkladniePrice = 145 * width / 1000 * 1.05;
                break;
            case "Не выбрано":
                var napravlyayuschieSkladniePrice = 0;
                break;
        }
        if (isNaN(napravlyayuschieSkladniePrice)) {
            var napravlyayuschieSkladniePrice = 0;
        }
        switch (vidKrepleniyaSkladnie) {
            case "К стене":
                var vidKrepleniyaSkladniePrice = 50 * 2 * double;
                break;
            case "К потолку":
                var vidKrepleniyaSkladniePrice = 50 * 2 * double;
                break;
            case "Уголок крепежный, Degon Польша":
                var vidKrepleniyaSkladniePrice = 50 * 2 * double;
                break;
            case "Не выбрано":
                var vidKrepleniyaSkladniePrice = 0;
                break;
        }
        if (isNaN(vidKrepleniyaSkladniePrice)) {
            var vidKrepleniyaSkladniePrice = 0;
        }

        $(".setSkladnyieMehanizmyi .price").text(setSkladnyieMehanizmyiPrice);
        $(".petli-skladnie .price").text(petliSkladniePrice);
        $(".napravlyayuschie-skladnie .price").text(napravlyayuschieSkladniePrice);
        $(".vidKrepleniya-skladnie .price").text(vidKrepleniyaSkladniePrice);

        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            var dekorativnayaPlankaDlyaProfilyaSkladnie = $(".dekorativnayaPlankaDlyaProfilya-skladnie .text").html();
            var schetochnyiyUplotnitelSkladnie = $(".schetochnyiyUplotnitel-skladnie .text").html();
            var rakovinaSkladnie = $(".rakovina-skladnie .text").html();
            var kreplenieRuchkiSkladnie = $(".kreplenieRuchki-skladnie .text").html();
            var zamokSkladnyieSkladnie = $(".zamokSkladnyie-skladnie .text").html();

            switch (dekorativnayaPlankaDlyaProfilyaSkladnie) {
                case "Цвет: серебро, Россия":
                    var dekorativnayaPlankaDlyaProfilyaSkladniePrice = ((width * 2 / 1000) * 1.1) * 320 * 1.05 + 150 * 2 + 55 * 2;
                    break;
                case "Не выбрано":
                    var dekorativnayaPlankaDlyaProfilyaSkladniePrice = 0;
                    break;
            }
            if (isNaN(dekorativnayaPlankaDlyaProfilyaSkladniePrice)) {
                var dekorativnayaPlankaDlyaProfilyaSkladniePrice = 0;
            }
            switch (schetochnyiyUplotnitelSkladnie) {
                case "6 мм (Серый, бронза, золото)":
                    var schetochnyiyUplotnitelSkladniePrice = width / 1000 * 12;
                    break;
                case "12 мм (Серый, бронза, золото)":
                    var schetochnyiyUplotnitelSkladniePrice = width / 1000 * 25;
                    break;
                case "Не выбрано":
                    var schetochnyiyUplotnitelSkladniePrice = 0;
                    break;
            }
            if (isNaN(schetochnyiyUplotnitelSkladniePrice)) {
                var schetochnyiyUplotnitelSkladniePrice = 0;
            }
            switch (rakovinaSkladnie) {
                case "Раковина":
                    var rakovinaSkladniePrice = 215;
                    break;
                case "Не выбрано":
                    var rakovinaSkladniePrice = 0;
                    break;
            }
            if (isNaN(rakovinaSkladniePrice)) {
                var rakovinaSkladniePrice = 0;
            }
            switch (kreplenieRuchkiSkladnie) {
                case "К двери-гармошке":
                    var kreplenieRuchkiSkladniePrice = 50;
                    break;
                case "Не выбрано":
                    var kreplenieRuchkiSkladniePrice = 0;
                    break;
            }
            if (isNaN(kreplenieRuchkiSkladniePrice)) {
                var kreplenieRuchkiSkladniePrice = 0;
            }
            switch (zamokSkladnyieSkladnie) {
                case "Поворотный":
                    var zamokSkladnyieSkladniePrice = 140;
                    break;
                case "Не выбрано":
                    var zamokSkladnyieSkladniePrice = 0;
                    break;
            }
            if (isNaN(zamokSkladnyieSkladniePrice)) {
                var zamokSkladnyieSkladniePrice = 0;
            }

            $(".dekorativnayaPlankaDlyaProfilya-skladnie .price").text(dekorativnayaPlankaDlyaProfilyaSkladniePrice);
            $(".schetochnyiyUplotnitel-skladnie .price").text(schetochnyiyUplotnitelSkladniePrice);
            $(".rakovina-skladnie .price").text(rakovinaSkladniePrice);
            $(".kreplenieRuchki-skladnie .price").text(kreplenieRuchkiSkladniePrice);
            $(".zamokSkladnyie-skladnie .price").text(zamokSkladnyieSkladniePrice);
        }
    }
    if (type == 4) {
        var nozhkiMobil = $(".nozhki-mobil .text").html();
        var stoykiMobil = $(".stoyki-mobil .text").html();
        var tipSoedineniyaPolotenMobil = $(".tipSoedineniyaPoloten-mobil .text").html();

        switch (nozhkiMobil) {
            case "Euroshop/Standart - круглая регулируемая":
                var nozhkiMobilPrice = 42 * Count;
                break;
            case "Optima - круглая регулируемая":
                var nozhkiMobilPrice = 42 * Count;
                break;
            case "Optima - Широкая двухсторонняя":
                var nozhkiMobilPrice = 275 * Count;
                break;
            case "M. Light - круглая регулируемая":
                var nozhkiMobilPrice = 42 * Count;
                break;
            case "M. Light - Широкая двухсторонняя":
                var nozhkiMobilPrice = 450 * Count;
                break;
            case "Не выбрано":
                var nozhkiMobilPrice = 0;
                break;
        }
        if (isNaN(nozhkiMobilPrice)) {
            var nozhkiMobilPrice = 0;
        }
        switch (stoykiMobil) {
            case "Стойка скругленная 90 °":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 141;
                break;
            case "Стойка 135 °":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 136;
                break;
            case "Стойка угловая 90 °":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 159;
                break;
            case "Стойка Т-образная":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 193;
                break;
            case "Стойка Т-образная скругленная":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 272;
                break;
            case "Стойка четырёхгранная":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 184;
                break;
            case "Стойка 90 °":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 200;
                break;
            case "Стойка Т-образная":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 184;
                break;
            case "Стойка три паза":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 211;
                break;
            case "Стойка угловая трехгранная":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 87;
                break;
            case "Стойка угловая":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 116;
                break;
            case "Стойка восьмигранная":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 293;
                break;
            case "Угловая пятигранная":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 166;
                break;
            case "Стойка угловая 90 °":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 304;
                break;
            case "Стойка поворотная односторонняя 90 °":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 640;
                break;
            case "Стойка поворотная двухсторонняя 90 °":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 550;
                break;
            case "Мобилайт стойка":
                var stoykiMobilPrice = 0;
                break;
            case "Столб три грани":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 783;
                break;
            case "Угловой столб дуга":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 701;
                break;
            case "Столб универсальный":
                var stoykiMobilPrice = (Count - 1) * height / 1000 * 617;
                break;
            case "Не выбрано":
                var stoykiMobilPrice = 0;
                break;
        }
        if (isNaN(stoykiMobilPrice)) {
            var stoykiMobilPrice = 0;
        }
        switch (tipSoedineniyaPolotenMobil) {
            case "Петли":
                var tipSoedineniyaPolotenMobilPrice = 50 * 3 * Count;
                break;
            case "Не выбрано":
                var tipSoedineniyaPolotenMobilPrice = 0;
                break;
        }
        if (isNaN(tipSoedineniyaPolotenMobilPrice)) {
            var tipSoedineniyaPolotenMobilPrice = 0;
        }

        $(".nozhki-mobil .price").text(nozhkiMobilPrice);
        $(".stoyki-mobil .price").text(stoykiMobilPrice);
        $(".tipSoedineniyaPoloten-mobil .price").text(tipSoedineniyaPolotenMobilPrice);
    }
}
function aksessuaryiBlockSwith() {
    $(".aksessuaryi-block-swith input").prop("checked") ? $(".aksessuaryi-block-hs").show() : $(".aksessuaryi-block-hs").hide()
}
//  ============================= //

// БЛОК ЦЕНА //
function globalPrice() {

    var p = checkTheErrorNumber($('#TOTAL_PAINTING_ID').val());


    var globalPrice = 0;
    var globalMaterialPrice = 0;
    var globalProfilPrice = 0;
    var globalFurnityraPrice = checkTheErrorNumber($('.furnitura-price .price').text());
    var countIzdelie = checkTheErrorNumber($("#NUMBER_SETS_ID").val());

    // 1 сумма все профилей data-price-in-profil
    // 2 сумма всех материалов data-data-price-in-napolnenii
    // 3 фурнитура .furnitura-price .price

    for (j = 1; j <= p; j++) {
        globalProfilPrice = globalProfilPrice + checkTheErrorNumber($('*[data-id="' + j + '"]').attr('data-data-price-in-profil'));
        globalMaterialPrice = globalMaterialPrice + checkTheErrorNumber($('*[data-id="' + j + '"]').attr('data-data-price-in-napolnenii'));
    }
    globalPrice = ( globalProfilPrice + globalMaterialPrice + globalFurnityraPrice );
    if (countIzdelie > 0) {
        globalPrice = globalPrice * countIzdelie;
    }
    $('.summaBezParametrov .price').text(globalPrice);

    procPrice(globalPrice);
}

function procPrice(summ) {
    var Total = summ;
    var productionPercent = parseInt($('.proizvaodstvoIn input').val());
    var installationPercent = parseInt($('.montazhIn input').val());
    var shippingPercent = parseInt($('.dostavkaIn input').val());
    var urgencyPercent = parseInt($('.srochnostIn input').val());
    var marginPercent = parseInt($('.nashProtsentIn input').val());

    var productionRub = parseInt($('.proizvaodstvoTo input').val());
    var installationRub = parseInt($('.montazhTo input').val());
    var shippingRub = parseInt($('.dostavkaTo input').val());
    var urgencyRub = parseInt($('.srochnostTo input').val());
    var marginRub = parseInt($('.nashProtsentTo input').val());

    if (isNaN(productionPercent)) {
        if (!isNaN(productionRub)) {
            Total = Total + productionRub;
        }
    } else {
        if (!isNaN(productionPercent)) {
            $('.proizvaodstvoTo input').val(parseInt(Total * productionPercent / 100));
            Total = Total + (Total * productionPercent / 100);
        }
    }
    if (isNaN(installationPercent)) {
        if (!isNaN(installationRub)) {
            if (installationRub < 3000) {
                installationRub = 3000;
                $('.montazhTo input').val(3000);
            }
            Total = Total + installationRub;
        }
    } else {
        if (!isNaN(installationPercent)) {
            if ((Total * installationPercent / 100) < 3000) {
                installationRub = 3000;
                $('.montazhTo input').val(3000);
                Total = Total + 3000;
            } else {
                $('.montazhTo input').val(parseInt(Total * installationPercent / 100));
                Total = Total + (Total * installationPercent / 100);
            }
        }
    }
    if (isNaN(shippingPercent)) {
        if (!isNaN(shippingRub)) {
            Total = Total + shippingRub;
        }
    } else {
        if (!isNaN(shippingPercent)) {
            $('.dostavkaTo input').val(parseInt(Total * shippingPercent / 100));
            Total = Total + (Total * shippingPercent / 100);
        }
    }
    if (isNaN(urgencyPercent)) {
        if (!isNaN(urgencyRub)) {
            Total = Total + urgencyRub;
        }
    } else {
        if (!isNaN(urgencyPercent)) {
            $('.srochnostTo input').val(parseInt(Total * urgencyPercent / 100));
            Total = Total + (Total * urgencyPercent / 100);
        }
    }
    if (isNaN(marginPercent)) {
        if (!isNaN(marginRub)) {
            Total = Total + marginRub;
        }
    } else {
        if (!isNaN(marginPercent)) {
            $('.nashProtsentTo input').val(parseInt(Total * marginPercent / 100));
            Total = Total + (Total * marginPercent / 100);
        }
    }
    if (isNaN(Total)) {
        $('.summaSParametrami .price').text("0");
    } else {
        $('.summaSParametrami .price').text(parseInt(Total));
    }

}

function TableForInfo() {
    $(".TableForInfo").html('');
    var groupArr = []
    var html = '<table class="table table-striped table-hover">'
    for (i = 1; i <= parseInt($('#TOTAL_PAINTING_ID').val()); i++) {
        var group = $('*[data-id=' + i + ']').find('.group').text();
        if (group == '') {
            group = 0;
        }
        var search = $.inArray(group, groupArr);
        if (search == -1) {
            groupArr.push(group);
            var type = '';
            if ($('*[data-id=' + i + ']').find('.type ').text() == 'M') {
                type = 'Подвижное';
            } else {
                type = 'Cтационарное';
            }
            var area = parseInt($('*[data-id=' + i + ']').find('.area').text());
            var karkasFullPrice = parseInt($('*[data-id=' + i + ']').find('.karkas-full-price').text());
            if (area > 1) {
                var Sebestoimost = karkasFullPrice / area;
            } else {
                var Sebestoimost = karkasFullPrice * area;
            }
            html = html + "" +
                "<tr>" +
                "<td>" +
                type +
                "</td>" +
                "<td>" +
                area +
                "</td>" +
                "<td>" +
                parseInt(Sebestoimost) +
                "</td>" +
                "<td>" +
                karkasFullPrice +
                "</td>" +
                "</tr>";
        }
    }
    html = html + '</table>';
    $(".TableForInfo").append(html);
}

//  ============================= //

// ==================================================================================================================== //


function calcNow() {

    //  глобавльная ширина и высота //
    function globalHightAndWidth() {
        var height = $('#HIGHT_SETS_ID').val();
        var widht = $('#WIDTH_SETS_ID').val();
        var painting = $('#TOTAL_PAINTING_ID').val();
        var painting_movable = $('#MOVABLE_PAINTING_ID').val();
        var tab_profil_vyisota = $('#tab-profil-vyisota').val();
        var tab_profil_shirina = $('#tab-profil-shirina').val();
        var this_id = getFromData('id');
        var this_width = $('*[data-id="' + this_id + '"]').attr('data-width');
        var paintingThisGroupCount = 0;
        var widhtPlusPlus = 0;
        var oneGroupFTArray = [];
        var oneGroupFT;
        for (i = 1; i <= painting; i++) {
            if (getFromData('group') == $('*[data-id=' + i + ']').find('.group').text()) {
                paintingThisGroupCount++;
            }
            widhtPlusPlus = widhtPlusPlus + parseInt($('*[data-id=' + i + ']').find('.width ').text());
            if (isNaN(widhtPlusPlus)) {
                widhtPlusPlus = 0;
            }
            var g = $('*[data-id=' + i + ']').attr('data-group');
            var find = oneGroupFTArray.indexOf(g);
            if (find == -1) {
                oneGroupFTArray.push(g);
            }
        }
        if (parseInt(tab_profil_vyisota) > parseInt(height) || tab_profil_vyisota == '' || oneGroupFTArray.length <= 1) {
            // if ( tab_profil_vyisota == '' || oneGroupFTArray.length <= 1) {
            $('#tab-profil-vyisota').val(height);
            $("#tab-profil-vyisota").trigger('change');
        }

        if (parseInt(tab_profil_vyisota) == parseInt(height)) {
            $('#tab-profil-vyisota').val(height);
        }

        if (widhtPlusPlus > parseInt(widht)) {
            if (this_width > parseInt(widht) || (this_width * paintingThisGroupCount) + (parseInt(painting) - parseInt(paintingThisGroupCount)) > parseInt(widht)) {
                var polotenDr = parseInt(painting) - paintingThisGroupCount;
                var widthMinusDr = polotenDr - parseInt(widht);
                var maxWidthThisG = widthMinusDr / paintingThisGroupCount;
                var maxWidthThisGP = Math.abs(maxWidthThisG)
                $('#tab-profil-shirina').val(maxWidthThisGP);
            } else {
                var minSizeToOther = widhtPlusPlus - widht;
                var elNotInThisGruap = 0;
                for (i = 1; i <= painting; i++) {
                    if (getFromData('group') != $('*[data-id=' + i + ']').find('.group').text()) {
                        elNotInThisGruap = elNotInThisGruap + 1;
                    }
                }
                var minSizeToOther = minSizeToOther / elNotInThisGruap;
                for (i = 1; i <= painting; i++) {
                    if (getFromData('group') != $('*[data-id=' + i + ']').find('.group').text()) {
                        var w = parseInt($('*[data-id="' + i + '"]').attr('data-width'));
                        $('*[data-id="' + i + '"]').attr('data-width', w - minSizeToOther);
                        $('*[data-id="' + i + '"]').find('.width').text(w - minSizeToOther);
                    }
                }
            }
        } else if (widhtPlusPlus < parseInt(widht)) {
            if (oneGroupFTArray.length <= 1 || parseInt(tab_profil_shirina) < 1 || parseInt(tab_profil_shirina) == NaN || parseInt(tab_profil_shirina) == 'NaN' || parseInt(tab_profil_shirina) == 1 || tab_profil_shirina == '') {
                $('#tab-profil-shirina').val(widht / painting);
                $("#tab-profil-shirina").trigger('change');
            } else {
                var addSizeToOther = widht - widhtPlusPlus;
                var elNotInThisGruap = 0;
                for (i = 1; i <= painting; i++) {
                    if (getFromData('group') != $('*[data-id=' + i + ']').find('.group').text()) {
                        elNotInThisGruap = elNotInThisGruap + 1;
                    }
                }
                var addSizeToOtherToOne = addSizeToOther / elNotInThisGruap;
                for (i = 1; i <= painting; i++) {
                    if (getFromData('group') != $('*[data-id=' + i + ']').find('.group').text()) {
                        var w = parseInt($('*[data-id="' + i + '"]').attr('data-width'));
                        $('*[data-id="' + i + '"]').attr('data-width', w + addSizeToOtherToOne);
                        $('*[data-id="' + i + '"]').find('.width').text(w + addSizeToOtherToOne);
                    }
                }
            }
        }
    }

    globalHightAndWidth();
    //  ============================= //

    //  глобавльная площадь //
    function globalArea() {
        $('#AREA_ID').val($('#HIGHT_SETS_ID').val() * $('#WIDTH_SETS_ID').val() / 1000000);
    }

    globalArea();
    //  ============================= //

    // ТАБ ПРОФИЛЬ ширина //
    function profilWidth() {
        setDataAndText('width', $('#tab-profil-shirina').val());
    }

    profilWidth();
    //  ============================= //


    // ТАБ ПРОФИЛЬ если пустой каркас //
    function ifEmptyCarcas() {
        if ($('#TOTAL_PAINTING_ID').val() != '' && getFromData('karkas-name') == '') {
            SelectTabKarkasEnd('Euroshop', 'K');
        }
    }

    ifEmptyCarcas();
    //  ============================= //

    // ТАБ ПРОФИЛЬ если пустой вид крепления //
    function ifEmptyVidKrepleniya() {
        if ($('#TOTAL_PAINTING_ID').val() != '' && getFromData('karkas-vid-krepleniya') == '') {
            SelectKreplenieEnd('img/addontoprofil/Euroshop/kreplenie-otkritoe.png', 'Открытое', 'E401/E401', '35');
        }
    }
    ifEmptyVidKrepleniya();
//  ============================= //
// ТАБ ПРОФИЛЬ если пустой уплотнитель //
    function ifEmptyUplotnitel() {
        if ($('#TOTAL_PAINTING_ID').val() != '' && getFromData('karkas-tsvet-uplotnitelya') == '') {
            SelectUplotnitelEnd('img/addontoprofil/Euroshop/uplotnitel.png', 'белый', 'K401', '58.90');
        }
    }
    ifEmptyUplotnitel();
//  ============================= //
// ТАБ ПРОФИЛЬ если пустая заглушка в паз //
    function ifEmptyZaglushkaVPaz() {
        if ($('#TOTAL_PAINTING_ID').val() != '' && getFromData('karkas-tsvet-zaglushki') == '') {
            SelectZaglushkaEnd('img/addontoprofil/Euroshop/zaglushka-dek-v-paz.png', 'белый', 'K403', '24.61');
        }
    }
    ifEmptyZaglushkaVPaz();
//  ============================= //
// ТАБ ПРОФИЛЬ если пустая заглушка торцевая //
    function ifEmptyZaglushkaTortsevaja() {
        if ($('#TOTAL_PAINTING_ID').val() != '' && getFromData('karkas-tsvet-zaglushki-tortsevoy') == '') {
            SelectZaglushkaTorcevayaEnd('img/addontoprofil/Euroshop/zaglushka-dek.png', 'белый', 'A14', '0');
        }
    }
    ifEmptyZaglushkaTortsevaja();
//

    // ТАБ ПРОФИЛЬ если перемычки пусти //
    function ifEmptyPeremuchka() {
        if (getFromData('vertikalnue-pereochki-name') == '') {
            if (getFromData('karkas-name') == 'Tur') {
                SelectTabKarkasEnd('Tur','V');
            } else if (getFromData('karkas-name') == 'Euroshop') {
                SelectTabKarkasEnd('Euroshop','V');
            } else if (getFromData('karkas-name') == 'EuroshopLite') {
                SelectTabKarkasEnd('EuroshopLite','V');
            } else if (getFromData('karkas-name') == 'Optimax2') {
                SelectTabKarkasEnd('Optimax2','V');
            } else if (getFromData('karkas-name') == 'Standart') {
                SelectTabKarkasEnd('Standart','V');
            } else if (getFromData('karkas-name') == 'MobyLight') {
                SelectTabKarkasEnd('MobyLight','V');
            } else if (getFromData('karkas-name') == 'Optima') {
                SelectTabKarkasEnd('Optima','V');
            } else if (getFromData('karkas-name') == 'OptimaLite') {
                SelectTabKarkasEnd('Optima','V');
            }  else if (getFromData('karkas-name') == 'Base') {
                SelectTabKarkasEnd('Base','V');
            } else if (getFromData('karkas-name') == 'Statusx1') {
                SelectTabKarkasEnd('Statusx1','V');
            } else if (getFromData('karkas-name') == 'Statusx2') {
                SelectTabKarkasEnd('Statusx2','V');
            } else if (getFromData('karkas-name') == 'StandartStoika') {
                SelectTabKarkasEnd('StandartStoika','V');
            }
        }
        if (getFromData('horizontal-pereochki-name') == '') {
            if (getFromData('karkas-name') == 'Tur') {
                SelectTabKarkasEnd('Tur','H');
            } else if (getFromData('karkas-name') == 'Euroshop') {
                SelectTabKarkasEnd('Euroshop','H');
            } else if (getFromData('karkas-name') == 'EuroshopLite') {
                SelectTabKarkasEnd('EuroshopLite','H');
            } else if (getFromData('karkas-name') == 'Optimax2') {
                SelectTabKarkasEnd('Optimax2','H');
            } else if (getFromData('karkas-name') == 'Standart') {
                SelectTabKarkasEnd('Standart','H');
            } else if (getFromData('karkas-name') == 'MobyLight') {
                SelectTabKarkasEnd('MobyLight','H');
            } else if (getFromData('karkas-name') == 'Optima') {
                SelectTabKarkasEnd('Optima','H');
            } else if (getFromData('karkas-name') == 'OptimaLite') {
                SelectTabKarkasEnd('Optima','H');
            }  else if (getFromData('karkas-name') == 'Base') {
                SelectTabKarkasEnd('Base','H');
            } else if (getFromData('karkas-name') == 'Statusx1') {
                SelectTabKarkasEnd('Statusx1','H');
            } else if (getFromData('karkas-name') == 'Statusx2') {
                SelectTabKarkasEnd('Statusx2','H');
            } else if (getFromData('karkas-name') == 'StandartStoika') {
                SelectTabKarkasEnd('StandartStoika','H');
            }
        }
    }

    ifEmptyPeremuchka();
    //  ============================= //

    // ТАБ ПРОФИЛЬ каркас подсчет цены //
    function carcasPrice() {
        if (getFromData('karkas-name') == 'Tur') {
            SelectTabKarkasEnd('Tur','K');
        } else if (getFromData('karkas-name') == 'Euroshop') {
            SelectTabKarkasEnd('Euroshop','K');
        } else if (getFromData('karkas-name') == 'EuroshopLite') {
            SelectTabKarkasEnd('EuroshopLite','K');
        } else if (getFromData('karkas-name') == 'Optimax2') {
            SelectTabKarkasEnd('Optimax2','K');
        } else if (getFromData('karkas-name') == 'Standart') {
            SelectTabKarkasEnd('Standart','K');
        } else if (getFromData('karkas-name') == 'MobyLight') {
            SelectTabKarkasEnd('MobyLight','K');
        } else if (getFromData('karkas-name') == 'Optima') {
            SelectTabKarkasEnd('Optima','K');
        } else if (getFromData('karkas-name') == 'OptimaLite') {
            SelectTabKarkasEnd('Optima','K');
        }  else if (getFromData('karkas-name') == 'Base') {
            SelectTabKarkasEnd('Base','K');
        } else if (getFromData('karkas-name') == 'Statusx1') {
            SelectTabKarkasEnd('Statusx1','K');
        } else if (getFromData('karkas-name') == 'Statusx2') {
            SelectTabKarkasEnd('Statusx2','K');
        } else if (getFromData('karkas-name') == 'StandartStoika') {
            SelectTabKarkasEnd('StandartStoika','K');
        }
    }

    carcasPrice();

    // ТАБ НАПОЛНЕНИЕ запись колличества //
    function addNapolnenieEl() {
        var allElInC = $('.add-material-block-past > div').length;
        for (i = 1; i <= allElInC; i++) {
            var count = $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-kollichestvo').val();
            setDataAndText('material-' + i + '-kol', count)
        }
    }

    addNapolnenieEl();
    //  ============================= //

    // ТАБ НАПОЛНЕНИЕ сохранение высоты //
    function seveHeightNapolnenie() {
        for (i = 1; i <= 5; i++) {
            var obj = $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-vyisota').val();
            setDataAndText('material-' + i + '-height', obj);

            var obj = $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-shirina').val();
            setDataAndText('material-' + i + '-width', obj);
        }
    }

    seveHeightNapolnenie();
    //  ============================= //

    // ТАБ НАПОЛНЕНИЕ толщина соxранение //
    function seveTolshina() {

        for (i = 1; i <= 5; i++) {

            var obj = $('*[data-material-el-id="' + i + '"]').find('.napolnenie-el-tolschina').val();

            var tolschina = parseInt($('*[data-material-el-id="' + i + '"]').find('.napolnenie-el-tolschina :selected').text());

            var el = getFromData('*[data-material-' + i + '-tolschina]');

            if (obj != el && obj != null) {

                setDataAndText('material-' + i + '-priceForOne', obj);

                setDataAndText('material-' + i + '-tolschina', tolschina);

            }

        }

    }

    seveTolshina();
    //  ============================= //

    // ТАБ НАПОЛНЕНИЕ заказлка стекла да/нет//zakalkaStekla
    function zakalkaStekla() {
        for (i = 1; i <= 5; i++) {
            var checked = $('*[data-material-el-id="' + i + '"]').find('.zakalkaStekla input').is(':checked');
            if (checked == true) {
                setDataAndText('material-' + i + '-zakalka-stekla', true);
            } else {
                setDataAndText('material-' + i + '-zakalka-stekla', false);
            }
        }
    }

    zakalkaStekla();
    //  ============================= //

    // ТАБ НАПОЛНЕНИЕ двойное заполнение доступно/нет//
    function dvoinoeZapolnenieShowHide() {
        var karkas = getFromData('karkas-name');
        for (i = 1; i <= 5; i++) {
            if (karkas == 'Optimax2' || karkas == 'Statusx2' || karkas == 'Base') {
                $('*[data-material-el-id=' + i + ']').find('.dvoinoeZapolnenieCheckbox').show();
                var checked = $('*[data-material-el-id="' + i + '"]').find('.dvoinoeZapolnenieCheckbox input').is(':checked');
                if (checked == true) {
                    setDataAndText('material-' + i + '-dvoynoe-zapolnenie', true);
                } else {
                    setDataAndText('material-' + i + '-dvoynoe-zapolnenie', false);
                }
            } else {
                $('*[data-material-el-id=' + i + ']').find('.dvoinoeZapolnenieCheckbox').hide();
                setDataAndText('material-' + i + '-dvoynoe-zapolnenie', false);
            }
        }
    }

    dvoinoeZapolnenieShowHide()
    //  ============================= //

    // ТАБ ПРОФИЛЬ площ //
    var area = $("#tab-profil-vyisota").val() * $("#tab-profil-shirina").val() / 1000000;
    $('.TAB-PROFIL-AREA').text(area.toFixed(1));
    setDataAndText('area', area.toFixed(1));
    //  ============================= //

    // ТАБ ПРОФИЛЬ - группа //
    $("#NUMBER_OF_DUPLICATOR_ID").val($('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').find(".group").text());
    //  ============================= //

    // ТАБ НАПОЛНЕНИЕ площ //
    function napolneniePlosh() {
        // var tab_napolnenie_ploschad = 0;
        for (i = 1; i <= 5; i++) {
            var H = $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-shirina').val();
            var W = $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-vyisota').val();
            var res = H * W / 1000000;
            $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-ploschad').text((H * W / 1000000).toFixed(1));
            setDataAndText('material-' + i + '-ploschad', res.toFixed(1));
        }
    }

    napolneniePlosh();
    //  ============================= //

    // ТАБ НАПОЛНЕНИЕ цена //
    function napolneniePrice() {
        var data_price_in_napolnenii = 0;
        for (i = 1; i <= 5; i++) {
            var priceStekla = 0;
            var priceZakalka = 0;

            var tolshinaMateriala = getFromData('material-' + i + '-tolschina');
            var napolnenieType = getFromData('material-' + i + '-type');
            var zkalka = getFromData('material-' + i + '-zakalka-stekla');

            if (napolnenieType == 'stekloObyichnoe') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 500;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 625;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 720;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 1050;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 1300;
                }
            } else if (napolnenieType == 'stekloMatovoe') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 900;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 1100;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 1300;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 1600;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 2000;
                }
            } else if (napolnenieType == 'zerkaloSerebro') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 1050;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 1350;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 1600;
                }
            } else if (napolnenieType == 'zerkaloBronza') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 1300;
                }
            } else if (napolnenieType == 'tripleks') {
                if (tolshinaMateriala == 6) {
                    priceStekla = 1400;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 1600;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 2000;
                } else if (tolshinaMateriala == 12) {
                    priceStekla = 2500;
                }
            } else if (napolnenieType == 'tripleksMatovyiy') {
                if (tolshinaMateriala == 6) {
                    priceStekla = 2200;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 2400;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 2600;
                } else if (tolshinaMateriala == 12) {
                    priceStekla = 3000;
                }
            } else if (napolnenieType == 'polikarbonatSotovyiy') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 160;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 260;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 345;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 395;
                } else if (tolshinaMateriala == 16) {
                    priceStekla = 660;
                }
            } else if (napolnenieType == 'PVHvspenennyiy') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 560;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 665;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 820;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 1200;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 1470;
                }
            } else if (napolnenieType == 'polikarbonatMonolit') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 1600;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 2000;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 2400;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 3200;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 4000;
                }
            } else if (napolnenieType == 'orgstekloEkstruz') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 1480;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 1850;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 2200;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 2960;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 3700;
                }
            } else if (napolnenieType == 'LDSP') {
                if (tolshinaMateriala == 8) {
                    priceStekla = 300;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 320;
                } else if (tolshinaMateriala == 16) {
                    priceStekla = 350;
                }
            } else if (napolnenieType == 'MDFshlifovannyiy') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 93;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 120;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 150;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 211;
                } else if (tolshinaMateriala == 12) {
                    priceStekla = 253;
                } else if (tolshinaMateriala == 16) {
                    priceStekla = 325;
                }
            } else if (napolnenieType == 'DSPshlifovannyiy') {
                if (tolshinaMateriala == 10) {
                    priceStekla = 150;
                } else if (tolshinaMateriala == 16) {
                    priceStekla = 165;
                }
            } else if (napolnenieType == 'fanera') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 285;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 380;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 480;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 565;
                } else if (tolshinaMateriala == 12) {
                    priceStekla = 660;
                } else if (tolshinaMateriala == 16) {
                    priceStekla = 800;
                }
            } else if (napolnenieType == 'sendvichPaneliPVH') {
                if (tolshinaMateriala == 8) {
                    priceStekla = 225;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 270;
                } else if (tolshinaMateriala == 16) {
                    priceStekla = 340;
                }
            } else if (napolnenieType == 'stekloTonirovannoeSeroe') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 1000;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 1250;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 2500;
                }
            } else if (napolnenieType == 'stekloTonirovannoeBronza') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 1000;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 1500;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 2000;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 2500;
                }
            } else if (napolnenieType == 'stekloTonirovannoeGoluboe') {
                if (tolshinaMateriala == 8) {
                    priceStekla = 2100;
                }
            } else if (napolnenieType == 'faneraTrudnogoryuchaya') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 360;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 465;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 590;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 690;
                } else if (tolshinaMateriala == 12) {
                    priceStekla = 830;
                } else if (tolshinaMateriala == 16) {
                    priceStekla = 1035;
                }
            } else if (napolnenieType == 'orgstekloEkstruz') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 1598.4;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 1998;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 2376;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 3196.8;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 3996;
                }
            } else if (napolnenieType == 'dekorativnyiyBumazhno') {
                if (tolshinaMateriala == 5) {
                    priceStekla = 1465;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 2475;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 2250;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 2625;
                } else if (tolshinaMateriala == 12) {
                    priceStekla = 3170;
                } else if (tolshinaMateriala == 16) {
                    priceStekla = 4320;
                }
            } else if (napolnenieType == 'gipsovinil12') {
                if (tolshinaMateriala == 12) {
                    priceStekla = 590;
                }
            } else if (napolnenieType == 'gipsodekor12') {
                if (tolshinaMateriala == 12) {
                    priceStekla = 348;
                }
            } else if (napolnenieType == 'gipsokarton12') {
                if (tolshinaMateriala == 12) {
                    priceStekla = 210;
                }
            } else if (napolnenieType == 'stekloBronzaSeroe') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 950;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 1300;
                } else if (tolshinaMateriala == 6) {
                    priceStekla = 1500;
                } else if (tolshinaMateriala == 8) {
                    priceStekla = 2000;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 2300;
                }
            } else if (napolnenieType == 'stekloProtivopozharnoe') {
                if (tolshinaMateriala == 4) {
                    priceStekla = 4000;
                } else if (tolshinaMateriala == 5) {
                    priceStekla = 5000;
                } else if (tolshinaMateriala == 10) {
                    priceStekla = 7500;
                }
            }
            if (zkalka == 'true') {
                if (napolnenieType == 'stekloObyichnoe') {
                    if (tolshinaMateriala == 4) {
                        priceZakalka = 200;
                    } else if (tolshinaMateriala == 5) {
                        priceZakalka = 225;
                    } else if (tolshinaMateriala == 6) {
                        priceZakalka = 280;
                    } else if (tolshinaMateriala == 8) {
                        priceZakalka = 350;
                    } else if (tolshinaMateriala == 10) {
                        priceZakalka = 450;
                    }
                } else if (napolnenieType == 'stekloMatovoe') {
                    if (tolshinaMateriala == 4) {
                        priceZakalka = 230;
                    } else if (tolshinaMateriala == 5) {
                        priceZakalka = 255;
                    } else if (tolshinaMateriala == 6) {
                        priceZakalka = 310;
                    } else if (tolshinaMateriala == 8) {
                        priceZakalka = 380;
                    } else if (tolshinaMateriala == 10) {
                        priceZakalka = 480;
                    }
                }
            }
            var ploschad = getFromData('material-' + i + '-ploschad');
            var kol = $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-kollichestvo').val();
            var res = ((priceStekla + priceZakalka) * ploschad) * kol;
            $('*[data-material-el-id="' + i + '"]').find('.tab-napolnenie-price').text(parseInt(res));
            setDataAndText('material-' + i + '-price', parseInt(res));
            if (isNaN(parseInt(res)) == false) {
                data_price_in_napolnenii = parseInt(data_price_in_napolnenii) + parseInt(res);
            }
        }
        setDataAndText('data-price-in-napolnenii', parseInt(data_price_in_napolnenii));
    }

    napolneniePrice();
    //  ============================= //

    // ТАБ ПРОФИЛЬ высота //
    function profilHeight() {
        setDataAndText('height', $('#tab-profil-vyisota').val());
    }

    profilHeight();
    //  ============================= //


    globalPrice();
}

var calcNowTimer = setInterval(function () {
    calcNow();
}, 4000);


////////////////// Переменные конструкции
var TOTAL_PAINTING = 0; // Всего полотен
var MOVABLE_PAINTING = 0; // Подвижные полотна
var NUMBER_SETS = 0; // Количество комплектов
var WIDTH_SETS = 0; // Ширина комплекта
var TYPE_BAFFLE = 0; // Тип перегородки

////////////////// Формулы и события
// Установка сохраненных значений
function setAllSaveParameters() {
    $('#TOTAL_PAINTING_ID').val(TOTAL_PAINTING);
    $('#MOVABLE_PAINTING_ID').val(MOVABLE_PAINTING);

    //BAFFLE_SEKECTOR
    $("#BAFFLE_SEKECTOR_ID").empty();
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        $("#BAFFLE_SEKECTOR_ID").prepend($('<option value="0">Полотно ' + i + '</option>'));
    }
    for (i = 1; i <= MOVABLE_PAINTING; i++) {
        $("#BAFFLE_SEKECTOR_ID").prepend($('<option value="0">Подвижное полотно ' + i + '</option>'));
    }

}

// Вызов диалога
$("#DIAGRAMMA-DIALOG-WINDOW-BTN").click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    var TYPE_BAFFLE = parseInt($("#TYPE_BAFFLE_ID").val());
    if (TYPE_BAFFLE == 0) {
        message("Для стационарной перегородки схем не существует!");
    } else {
        if (TYPE_BAFFLE < 4 && TYPE_BAFFLE > 0) {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html($("#DesignScheme" + TYPE_BAFFLE).html());
        }
    }
});

////////////////////////////////////////////////////////////////////////////////////////// Поля в ТАБАХ Профиль Наполнение Фурнитура

// -  вывод цены профиля
function setPriceInProfil() {
    var karkasPrice = checkTheErrorNumber(getFromData('karkas-price'));
    var decorPrice = checkTheErrorNumber(getFromData('decor-price'));
    var vertikalnuePereochkiPrice = checkTheErrorNumber(getFromData('vertikalnue-pereochki-price'));
    var horizontalPereochkiPrice = checkTheErrorNumber(getFromData('horizontal-pereochki-price'));
    var karkasVidKrepleniya = parseInt(getFromData('karkas-vid-krepleniya'));
    if (karkasVidKrepleniya == "" || isNaN(karkasVidKrepleniya)) {
        karkasVidKrepleniya = 0;
    }
    var karkasTsvetUplotnitelya = parseInt(getFromData('karkas-tsvet-uplotnitelya'));
    if (karkasTsvetUplotnitelya == "" || isNaN(karkasTsvetUplotnitelya)) {
        karkasTsvetUplotnitelya = 0;
    }
    var karkasTsvetZaglushki = parseInt(getFromData('karkas-tsvet-zaglushki'));
    if (karkasTsvetZaglushki == "" || isNaN(karkasTsvetZaglushki)) {
        karkasTsvetZaglushki = 0;
    }
    var karkasTsvetZaglushkiTortsevoy = parseInt(getFromData('karkas-tsvet-zaglushki-tortsevoy'));
    if (karkasTsvetZaglushkiTortsevoy == "" || isNaN(karkasTsvetZaglushkiTortsevoy)) {
        karkasTsvetZaglushkiTortsevoy = 0;
    }
    var res = karkasPrice + decorPrice + vertikalnuePereochkiPrice + horizontalPereochkiPrice + karkasVidKrepleniya + karkasTsvetUplotnitelya + karkasTsvetZaglushki + karkasTsvetZaglushkiTortsevoy;
    $('.TAB-PROFIL-PRICE').text(parseInt(res));
    setDataAndText('data-price-in-profil', parseInt(res));
}
// =


function SelectTabKarkasEnd(name, type) {
    var width = parseInt(getFromData('width'));
    var height = parseInt(getFromData('height'));
    var countPer = parseInt(getFromData('vertikalnue-pereochki-count'));
    var vertikalnue_pereochkicount = parseInt(getFromData('vertikalnue-pereochki-count'));
    var horizontal_pereochkicount = parseInt(getFromData('horizontal-pereochki-count'));
    switch (type){
        case "K":
            switch (name){
                case "Tur":
                    var price = ((width + height) * 0.002 * (94 + 13) + (22 + 20) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 2.6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Tur.png';
                    break;
                case "Euroshop":
                    var price = ((width + height) * 0.002 * (111 + 14.5 + 30) + (36 + 6) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота до</p><p class="profil-text-right">2,8м;</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8,5 мм;</p></div><div class="height-30"><p class="profil-text-left">Стекло</p><p class="profil-text-right">4.5 мм;</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right">до 12,4 мм;</p></div>';
                    var img = 'http://fasts-like.com/karkas/Euroshop.png';
                    break;
                case "EuroshopLite":
                    var price = ((width + height) * 0.002 * (89 + 14.5 + 30) + (36 + 6) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 2 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/EuroshopLite.png';
                    break;
                case "Optimax2":
                    var price = ((width + height) * 0.002 * (415 + 17 * 2 + 30) + (53 + 6) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 5 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Optimax2.png';
                    break;
                case "Optima":
                    var price = ((width + height) * 0.002 * (272 + 14.5 + 30 + 55) + (53 + 6) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 5 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 16 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Optima.png';
                    break;
                case "Standart":
                    var price = ((width + height) * 0.002 * (266 + 14.5 + 30) + (35 + 6.5) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 2.8 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Standart.png';
                    break;
                case "MobyLight":
                    var price = ((width + height) * 0.002 * (183 + 14.5 + 30 * 2) + (24 + 7.2) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 3 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/MobyLight.png';
                    break;
                case "OptimaLite":
                    var price = ((width + height) * 0.002 * (187 + 14.5 + 30 + 55) + (53 + 9) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/OptimaLite.png';
                    break;
                case "Base":
                    var price = ((width + height) * 0.002 * (427 + 15 * 2) + 35 * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 4 м</p></div><div class="height-30"><p class="profil-text-left">Cтекло</p><p class="profil-text-right">5-8 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Base.png';
                    break;
                case "Statusx1":
                    var price = ((width + height) * 0.002 * (415 + 14 * 1) + (27 + 2.5 * 2) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 13 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Statusx1.png';
                    break;
                case "Statusx2":
                    var price = ((width + height) * 0.002 * (415 + 14 * 2) + (27 + 2.5 * 2) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Statusx2.png';
                    break;
                case "StandartStoika":
                    var price = ((width + height) * 0.002 * (216 + 14.5 + (30 * 2)) + (35 + 8) * 4);
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/StandartStoika.png';
                    break;
            }
            var decorPrice = getFromData('decor-price');
            if (decorPrice == '' || isNaN(decorPrice)) {
                decorPrice = 0;
            }
            if(isNaN(price)){
                price = 0;
            }
            $('#KARKAS-BLOCK img').attr('src', img);
            $('#KARKAS-NAME').text(name);
            $('#KARKAS-INFO').html(info);
            $('#KARKAS-PRICE').text(parseInt(price));
            setDataAndText('karkas-img', img);
            setDataAndText('karkas-name', name);
            setDataAndText('karkas-price', parseInt(price));
            setDataAndText('karkas-full-price', parseInt((parseFloat(decorPrice) + price)));
            break;
        case "H":
            switch (name){
                case "Tur":
                    var price = (width / 1000 * (94 + 13 * 2) + 22 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 2.6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Tur.png';
                    break;
                case "Euroshop":
                    var price = (width / 1000 * (111 + 14.5 * 2) + 36 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота до</p><p class="profil-text-right">2,8м;</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8,5 мм;</p></div><div class="height-30"><p class="profil-text-left">Стекло</p><p class="profil-text-right">4.5 мм;</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right">до 12,4 мм;</p></div>';
                    var img = 'http://fasts-like.com/karkas/Euroshop.png';
                    break;
                case "EuroshopLite":
                    var price = (width / 1000 * (89 + 14.5 * 2) + 36 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 2 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/EuroshopLite.png';
                    break;
                case "Optimax2":
                    var price = (width / 1000 * (555 + 17 * 4) + 53 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 5 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Optimax2.png';
                    break;
                case "Optima":
                    var price = (width / 1000 * (272 + 14.5 * 2) + 53 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 5 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 16 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Optima.png';
                    break;
                case "Standart":
                    var price = (width / 1000 * (266 + 14.5 * 2) + 35 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 2.8 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Standart.png';
                    break;
                case "MobyLight":
                    var price = (width / 1000 * (176 + 14.5 * 2 + 7.2 * 2) + 24 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 3 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/MobyLight.png';
                    break;
                case "OptimaLite":
                    var price = (width / 1000 * (187 + 14.5 * 2) + 53 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/OptimaLite.png';
                    break;
                case "Base":
                    var price = (width / 1000 * (540 + 15 * 4) + 33 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 4 м</p></div><div class="height-30"><p class="profil-text-left">Cтекло</p><p class="profil-text-right">5-8 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Base.png';
                    break;
                case "Statusx1":
                    var price = (width / 1000 * (395 + 14 * 2) + 27 + 2.5 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 13 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Statusx1.png';
                    break;
                case "Statusx2":
                    var price = (width / 1000 * (490 + 14 * 4) + 27 + 2.5 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Statusx2.png';
                    break;
                case "StandartStoika":
                    var price = (width / 1000 * (216 + 14.5 * 2) + 35 * 2) * countPer;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/StandartStoika.png';
                    break;
            }
            if(isNaN(price)){
                price = 0;
            }
            $('#HORIZONTAL-PEREMOCHKI-BLOCK img').attr('src', img);
            $('#HORIZONTAL-PEREMOCHKI-NAME').text(name);
            $('#HORIZONTAL-PEREMOCHKI-INFO').html(info);

            setDataAndText('horizontal-pereochki-img', img);
            setDataAndText('horizontal-pereochki-name', name);
            setDataAndText('horizontal-pereochki-price-for-one', parseInt(price));

            $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(price));
            setDataAndText('horizontal-pereochki-price', parseInt(price));
            break;
        case "V":
            var uplotnitelPrice = 0;
            var karkasName = getFromData('karkas-name');
            for (var i = 0; i < 5; i++) {
                if (karkasName == "Euroshop" || karkasName == "EuroshopLite" || karkasName == "Standart" || karkasName == "MobyLight" || karkasName == "Optima" || karkasName == "OptimaLite" || karkasName == "StandartStoika") {
                    if (getFromData('material-' + (i + 1) + '-type') == "LDSP" && getFromData('material-' + (i + 1) + '-tolschina') == "16") {
                        uplotnitelPrice = 55;
                    }
                }
            }
            switch (name){
                case "Tur":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 22 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    var price = (height / 1000 * (94 + 13 * 2) + 22 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 2.6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Tur.png';
                    break;
                case "Euroshop":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 36 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    if(uplotnitelPrice == 0){
                        uplotnitelPrice = 14.5;
                    }
                    var price = (height / 1000 * (111 + uplotnitelPrice * 2) + 36 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота до</p><p class="profil-text-right">2,8м;</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8,5 мм;</p></div><div class="height-30"><p class="profil-text-left">Стекло</p><p class="profil-text-right">4.5 мм;</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right">до 12,4 мм;</p></div>';
                    var img = 'http://fasts-like.com/karkas/Euroshop.png';
                    break;
                case "EuroshopLite":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 36 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    if(uplotnitelPrice == 0){
                        uplotnitelPrice = 14.5;
                    }
                    var price = (height / 1000 * (89 + uplotnitelPrice * 2) + 36 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 2 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/EuroshopLite.png';
                    break;
                case "Optimax2":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 53 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    var price = (height / 1000 * (555 + 17 * 4) + 53 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 5 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Optimax2.png';
                    break;
                case "Optima":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 53 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    if(uplotnitelPrice == 0){
                        uplotnitelPrice = 14.5;
                    }
                    var price = (height / 1000 * (272 + uplotnitelPrice * 2) + 53 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 5 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 16 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Optima.png';
                    break;
                case "Standart":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 35 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    if(uplotnitelPrice == 0){
                        uplotnitelPrice = 14.5;
                    }
                    var price = (height / 1000 * (266 + uplotnitelPrice * 2) + 35 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 2.8 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Standart.png';
                    break;
                case "MobyLight":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 24 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    if(uplotnitelPrice == 0){
                        uplotnitelPrice = 14.5;
                    }
                    var price = (height / 1000 * (176 + uplotnitelPrice * 2 + 7.2 * 2) + 24 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 3 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">8.5 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">4,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/MobyLight.png';
                    break;
                case "OptimaLite":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 53 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    if(uplotnitelPrice == 0){
                        uplotnitelPrice = 14.5;
                    }
                    var price = (height / 1000 * (187 + uplotnitelPrice * 2) + 53 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/OptimaLite.png';
                    break;
                case "Base":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 33 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    var price = (height / 1000 * (540 + 15 * 4) + 33 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 4 м</p></div><div class="height-30"><p class="profil-text-left">Cтекло</p><p class="profil-text-right">5-8 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Base.png';
                    break;
                case "Statusx1":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 33 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    var price = (height / 1000 * (395 + 14 * 2) + 27 + 2.5 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 13 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Statusx1.png';
                    break;
                case "Statusx2":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 27 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    var price = (height / 1000 * (490 + 14 * 4) + 27 + 2.5 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/Statusx2.png';
                    break;
                case "StandartStoika":
                    if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
                        var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 35 * 2);
                    }else{
                        var addKreplenie = 0;
                    }
                    if(uplotnitelPrice == 0){
                        uplotnitelPrice = 14.5;
                    }
                    var price = (height / 1000 * (216 + uplotnitelPrice * 2) + 35 * 2) * countPer + addKreplenie;
                    var info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до 6 м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">13 мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">5-10 мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели:</p><p class="profil-text-right">до 12,5 мм</p></div>';
                    var img = 'http://fasts-like.com/karkas/StandartStoika.png';
                    break;
            }
            if(isNaN(price)){
                price = 0;
            }
            $('#VERTIKALNUE-PEREMOCHKI-BLOCK img').attr('src', img);
            $('#VERTIKALNUE-PEREMOCHKI-NAME').text(name);
            $('#VERTIKALNUE-PEREMOCHKI-INFO').html(info);
            setDataAndText('vertikalnue-pereochki-img', img);
            setDataAndText('vertikalnue-pereochki-name', name);
            setDataAndText('vertikalnue-pereochki-price-for-one', parseInt(price));

            $('#VERTIKALNUE-PEREMOCHKI-PRICE').text(parseInt(price));
            setDataAndText('vertikalnue-pereochki-price', parseInt(price));
            break;
    }

    setPriceInProfil();
}

$(".modal-body").on("click", ".selectKarkasImg", function () {
    // - удаляем наполение профиля
    var g = getFromData('group');
    var p = parseInt($('#TOTAL_PAINTING_ID').val());
    for (var i = 1; i <= p; i++) {
        if ($('*[data-id="' + i + '"]').attr('data-group') == g) {
            for (var j = 1; j <= 5; j++) {
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-type', '');
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-color', '');
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-width', '');
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-height', '');
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-kol', '');
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-zakalka-stekla', '');
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-dvoynoe-zapolnenie', '');
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-tolschina', '');
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-ploschad', '');
                $('*[data-id="' + i + '"]').attr('data-material-' + j + '-price', '');

                $('*[data-id="' + i + '"]').find('.material-' + j + '-type').text('');
                $('*[data-id="' + i + '"]').find('.material-' + j + '-color').text('');
                $('*[data-id="' + i + '"]').find('.material-' + j + '-width').text('');
                $('*[data-id="' + i + '"]').find('.material-' + j + '-height').text('');
                $('*[data-id="' + i + '"]').find('.material-' + j + '-kol').text('');
                $('*[data-id="' + i + '"]').find('.material-' + j + '-zakalka-stekla').text('');
                $('*[data-id="' + i + '"]').find('.material-' + j + '-dvoynoe-zapolnenie').text('');
                $('*[data-id="' + i + '"]').find('.material-' + j + '-tolschina').text('');
                $('*[data-id="' + i + '"]').find('.material-' + j + '-ploschad').text('');
                $('*[data-id="' + i + '"]').find('.material-' + j + '-price').text('');

                $('.add-material-block-past div').remove();
            }
        }
    }
    // =
});

// NUMBER_OF_DUPLICATOR_ID
function gruapName() {
    var idEl = $(".BAFFLE_SEKECTOR_CLASS option:selected").val();
    var elType = $('*[data-id="' + idEl + '"]').data("type");
    var elCount = $('*[data-type="' + elType + '"]').length;
    // if (elCount >= $(this).val()){
    if (elCount >= $("#NUMBER_OF_DUPLICATOR_ID").val()) {
        $('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').find(".group").text($("#NUMBER_OF_DUPLICATOR_ID").val());
        $('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').attr("data-group", $("#NUMBER_OF_DUPLICATOR_ID").val());
    } else {
        $("#NUMBER_OF_DUPLICATOR_ID").val(elCount);
    }
}
$("#NUMBER_OF_DUPLICATOR_ID").bind('input', function () {
    gruapName();
});
$("#NUMBER_OF_DUPLICATOR_ID").change(function () {
    gruapName();
});

function load3D(name){
    $(".js-div-for-3d").html("");
    $(".js-div-for-3d").hide();
    $("img.selectKarkasImg").show();

    var html = $("#" + name + "-3d").html();
    $("div#div-for-3d-" + name).append(html);
    $("img#img-modal-" + name).hide();
    $("div#el-loader-" + name).css("position","relative");
    $("div#el-loader-" + name).css("height","202px");
    $("div#el-loader-" + name).append("<div class='loading'></div>");
    setTimeout(function() {
        x3dom.reload();
        $("div.loading").remove();
        $("div#el-loader-" + name).css("height","0px");
        $("div#div-for-3d-" + name).show();
    }, 100);
}

$('#BTN-KARKAS-SELECTOR').click(function () {

    setDataAndText('karkas-tsvet-uplotnitelya', '');

    setDataAndText('karkas-tsvet-zaglushki', '');

    setDataAndText('karkas-tsvet-zaglushki-tortsevoy', '');

    setDataAndText('karkas-vid-krepleniya', '');

    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    var hm = parseInt(getFromData('height'));

    var priceTur = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (94 + 13) + (22 + 20) * 4);
    var priceEuroshop = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (111 + 14.5 + 30) + (36 + 6) * 4);
    var priceEuroshopLite = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (89 + 14.5 + 30) + (36 + 6) * 4);
    var priceOptimax2 = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (415 + 17 * 2 + 30) + (53 + 6) * 4);
    var priceOptima = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (272 + 14.5 + 30 + 55) + (53 + 6) * 4);
    var priceStandart = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (266 + 14.5 + 30) + (35 + 6.5) * 4);
    var priceMobyLight = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (183 + 14.5 + 30 * 2) + (24 + 7.2) * 4);
    var priceOptimaLite = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (187 + 14.5 + 30 + 55) + (53 + 9) * 4);
    var priceBase = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (427 + 15 * 2) + 35 * 4);
    var priceStatusx1 = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (415 + 14 * 1) + (27 + 2.5 * 2) * 4);
    var priceStatusx2 = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (415 + 14 * 2) + (27 + 2.5 * 2) * 4);
    var priceStandartStoika = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (216 + 14.5 + (30 * 2)) + (35 + 8) * 4);

    if (isNaN(priceTur)) {
        priceTur = 0;
    }
    if (isNaN(priceEuroshop)) {
        priceEuroshop = 0;
    }
    if (isNaN(priceEuroshopLite)) {
        priceEuroshopLite = 0;
    }
    if (isNaN(priceOptimax2)) {
        priceOptimax2 = 0;
    }
    if (isNaN(priceOptima)) {
        priceOptima = 0;
    }
    if (isNaN(priceStandart)) {
        priceStandart = 0;
    }
    if (isNaN(priceMobyLight)) {
        priceMobyLight = 0;
    }
    if (isNaN(priceOptimaLite)) {
        priceOptimaLite = 0;
    }
    if (isNaN(priceBase)) {
        priceBase = 0;
    }
    if (isNaN(priceStatusx1)) {
        priceStatusx2 = 0;
    }
    if (isNaN(priceStandartStoika)) {
        priceStandartStoika = 0;
    }

    var templateDataToTur = {
        priceTUR: parseInt(priceTur),
        type: "K"
    };
    var templateDataToEuroshop = {
        priceEuroshop: parseInt(priceEuroshop),
        type: "K"
    };
    var templateDataToEuroshopLite = {
        priceEuroshopLite: parseInt(priceEuroshopLite),
        type: "K"
    };
    var templateDataToOptimax2 = {
        priceOptimax2: parseInt(priceOptimax2),
        type: "K"
    };
    var templateDataToOptima = {
        priceOptima: parseInt(priceOptima),
        type: "K"
    };
    var templateDataToStandart = {
        priceStandart: parseInt(priceStandart),
        type: "K"
    };
    var templateDataToMobyLight = {
        priceMobyLight: parseInt(priceMobyLight),
        type: "K"
    };
    var templateDataToOptimaLite = {
        priceOptimaLite: parseInt(priceOptimaLite),
        type: "K"
    };
    var templateDataToBase = {
        priceBase: parseInt(priceBase),
        type: "K"
    };
    var templateDataToStatusx1 = {
        priceStatusx1: parseInt(priceStatusx1),
        type: "K"
    };
    var templateDataToStatusx2 = {
        priceStatusx2: parseInt(priceStatusx2),
        type: "K"
    };
    var templateDataToStandartStoika = {
        priceStandartStoika: parseInt(priceStandartStoika),
        type: "K"
    };
    var Tur = $('#DesignSchemeKarkasTUR').html();
    var Euroshop = $('#DesignSchemeKarkasEuroshop').html();
    var EuroshopLite = $('#DesignSchemeKarkasEuroshopLite').html();
    var Optimax2 = $('#DesignSchemeKarkasOptimax2').html();
    var Optima = $('#DesignSchemeKarkasOptima').html();
    var Standart = $('#DesignSchemeKarkasStandart').html();
    var MobyLight = $('#DesignSchemeKarkasMobyLight').html();
    var OptimaLite = $('#DesignSchemeKarkasOptimaLite').html();
    var Base = $('#DesignSchemeKarkasBase').html();
    var Statusx1 = $('#DesignSchemeKarkasStatusx1').html();
    var Statusx2 = $('#DesignSchemeKarkasStatusx2').html();
    var StandartStoika = $('#DesignSchemeKarkasStandartStoika').html();

    var resultHtmlTur = makeHTMLFromTemplate(Tur, templateDataToTur);
    var resultHtmlEuroshop = makeHTMLFromTemplate(Euroshop, templateDataToEuroshop);
    var resultHtmlEuroshopLite = makeHTMLFromTemplate(EuroshopLite, templateDataToEuroshopLite);
    var resultHtmlOptimax2 = makeHTMLFromTemplate(Optimax2, templateDataToOptimax2);
    var resultHtmlOptima = makeHTMLFromTemplate(Optima, templateDataToOptima);
    var resultHtmlStandart = makeHTMLFromTemplate(Standart, templateDataToStandart);
    var resultHtmlMobyLight = makeHTMLFromTemplate(MobyLight, templateDataToMobyLight);
    var resultHtmlOptimaLite = makeHTMLFromTemplate(OptimaLite, templateDataToOptimaLite);
    var resultHtmlBase = makeHTMLFromTemplate(Base, templateDataToBase);
    var resultHtmlStatusx1 = makeHTMLFromTemplate(Statusx1, templateDataToStatusx1);
    var resultHtmlStatusx2 = makeHTMLFromTemplate(Statusx2, templateDataToStatusx2);
    var resultHtmlStandartStoika = makeHTMLFromTemplate(StandartStoika, templateDataToStandartStoika);

    if (hm <= 6000 && hm >= 5000) {

        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');

        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx1);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx2);

    } else if (hm <= 5000 && hm >= 4000) {

        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');

        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx1);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptima);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimax2);

    } else if (hm <= 4000 && hm >= 3000) {

        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');

        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx1);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptima);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimax2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlBase);

    } else if (hm <= 3000 && hm >= 2800) {

        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');

        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx1);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptima);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimax2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlBase);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlMobyLight);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandart);

    } else if (hm <= 2800 && hm >= 2600) {

        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');

        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx1);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptima);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimax2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlBase);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlMobyLight);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandart);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandartStoika);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimaLite);

    } else if (hm <= 2600 && hm >= 2200) {

        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');

        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx1);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptima);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimax2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlBase);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlMobyLight);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandart);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandartStoika);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimaLite);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlEuroshop);

    } else if (hm <= 2200 && hm >= 1) {

        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');

        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx1);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStatusx2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptima);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimax2);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlBase);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlMobyLight);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandart);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandartStoika);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimaLite);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlEuroshop);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlEuroshopLite);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlTur);

    } else {
        message("Профилей с такой высотой нет, проверьте высоту полотна.");
    }

    $(".js-div-for-3d").html("");
    $(".js-div-for-3d").hide();
    $("img.selectKarkasImg").show();
});
// выбор вертикальных перемычек #BTN-VERTIKALNUE-PEREMOCHKI-SELECTOR
$('#BTN-VERTIKALNUE-PEREMOCHKI-SELECTOR').click(function () {
    var text = $('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').attr("data-karkas-name");
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    var height = parseInt(getFromData('height'));
    var countPer = parseInt(getFromData('vertikalnue-pereochki-count'));

    var priceTur = (height / 1000 * (94 + 13 * 2) + 22 * 2) * countPer;
    var priceEuroshop = (height / 1000 * (111 + 14.5 * 2) + 36 * 2) * countPer;
    var priceEuroshopLite = (height / 1000 * (89 + 14.5 * 2) + 36 * 2) * countPer;
    var priceOptimax2 = (height / 1000 * (555 + 17 * 4) + 53 * 2) * countPer;
    var priceOptima = (height / 1000 * (272 + 14.5 * 2) + 53 * 2) * countPer;
    var priceStandart = (height / 1000 * (266 + 14.5 * 2) + 35 * 2) * countPer;
    var priceMobyLight = (height / 1000 * (176 + 14.5 * 2 + 7.2 * 2) + 24 * 2) * countPer;
    var priceOptimaLite = (height / 1000 * (187 + 14.5 * 2) + 53 * 2) * countPer;
    var priceBase = (height / 1000 * (540 + 15 * 4) + 33 * 2) * countPer;
    var priceStatusx1 = (height / 1000 * (395 + 14 * 2) + 27 + 2.5 * 2) * countPer;
    var priceStatusx2 = (height / 1000 * (490 + 14 * 4) + 27 + 2.5 * 2) * countPer;
    var priceStandartStoika = (height / 1000 * (216 + 14.5 * 2) + 35 * 2) * countPer;

    if (isNaN(priceTur)) {
        priceTur = 0;
    }
    if (isNaN(priceEuroshop)) {
        priceEuroshop = 0;
    }
    if (isNaN(priceEuroshopLite)) {
        priceEuroshopLite = 0;
    }
    if (isNaN(priceOptimax2)) {
        priceOptimax2 = 0;
    }
    if (isNaN(priceOptima)) {
        priceOptima = 0;
    }
    if (isNaN(priceStandart)) {
        priceStandart = 0;
    }
    if (isNaN(priceMobyLight)) {
        priceMobyLight = 0;
    }
    if (isNaN(priceOptimaLite)) {
        priceOptimaLite = 0;
    }
    if (isNaN(priceBase)) {
        priceBase = 0;
    }
    if (isNaN(priceStatusx1)) {
        priceStatusx2 = 0;
    }
    if (isNaN(priceStandartStoika)) {
        priceStandartStoika = 0;
    }

    var templateDataToTur = {
        priceTUR: parseInt(priceTur),
        type: "V"
    };
    var templateDataToEuroshop = {
        priceEuroshop: parseInt(priceEuroshop),
        type: "V"
    };
    var templateDataToEuroshopLite = {
        priceEuroshopLite: parseInt(priceEuroshopLite),
        type: "V"
    };
    var templateDataToOptimax2 = {
        priceOptimax2: parseInt(priceOptimax2),
        type: "V"
    };
    var templateDataToOptima = {
        priceOptima: parseInt(priceOptima),
        type: "V"
    };
    var templateDataToStandart = {
        priceStandart: parseInt(priceStandart),
        type: "V"
    };
    var templateDataToMobyLight = {
        priceMobyLight: parseInt(priceMobyLight),
        type: "V"
    };
    var templateDataToOptimaLite = {
        priceOptimaLite: parseInt(priceOptimaLite),
        type: "V"
    };
    var templateDataToBase = {
        priceBase: parseInt(priceBase),
        type: "V"
    };
    var templateDataToStatusx1 = {
        priceStatusx1: parseInt(priceStatusx1),
        type: "V"
    };
    var templateDataToStatusx2 = {
        priceStatusx2: parseInt(priceStatusx2),
        type: "V"
    };
    var templateDataToStandartStoika = {
        priceStandartStoika: parseInt(priceStandartStoika),
        type: "V"
    };
    var Tur = $('#DesignSchemeKarkasTUR').html();
    var Euroshop = $('#DesignSchemeKarkasEuroshop').html();
    var EuroshopLite = $('#DesignSchemeKarkasEuroshopLite').html();
    var Optimax2 = $('#DesignSchemeKarkasOptimax2').html();
    var Optima = $('#DesignSchemeKarkasOptima').html();
    var Standart = $('#DesignSchemeKarkasStandart').html();
    var MobyLight = $('#DesignSchemeKarkasMobyLight').html();
    var OptimaLite = $('#DesignSchemeKarkasOptimaLite').html();
    var Base = $('#DesignSchemeKarkasBase').html();
    var Statusx1 = $('#DesignSchemeKarkasStatusx1').html();
    var Statusx2 = $('#DesignSchemeKarkasStatusx2').html();
    var StandartStoika = $('#DesignSchemeKarkasStandartStoika').html();

    var resultHtmlTur = makeHTMLFromTemplate(Tur, templateDataToTur);
    var resultHtmlEuroshop = makeHTMLFromTemplate(Euroshop, templateDataToEuroshop);
    var resultHtmlEuroshopLite = makeHTMLFromTemplate(EuroshopLite, templateDataToEuroshopLite);
    var resultHtmlOptimax2 = makeHTMLFromTemplate(Optimax2, templateDataToOptimax2);
    var resultHtmlOptima = makeHTMLFromTemplate(Optima, templateDataToOptima);
    var resultHtmlStandart = makeHTMLFromTemplate(Standart, templateDataToStandart);
    var resultHtmlMobyLight = makeHTMLFromTemplate(MobyLight, templateDataToMobyLight);
    var resultHtmlOptimaLite = makeHTMLFromTemplate(OptimaLite, templateDataToOptimaLite);
    var resultHtmlBase = makeHTMLFromTemplate(Base, templateDataToBase);
    var resultHtmlStatusx1 = makeHTMLFromTemplate(Statusx1, templateDataToStatusx1);
    var resultHtmlStatusx2 = makeHTMLFromTemplate(Statusx2, templateDataToStatusx2);
    var resultHtmlStandartStoika = makeHTMLFromTemplate(StandartStoika, templateDataToStandartStoika);

    if (text == "Euroshop" || text == "EuroshopLite" || text == "Standart" || text == "MobyLight" || text == "Optima" || text == "OptimaLite" || text == "StandartStoika") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandart);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlMobyLight);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlTur);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptima);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimaLite);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandartStoika);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlEuroshop);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlEuroshopLite);
    }
    if (text == "Tur") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlTur);
    }
    if (text == "Base") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlBase);
    }
    if (text == "Optimax2") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlOptimax2);
    }
    if (text == "Statusx1") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlStatusx1);
    }
    if (text == "Statusx2") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlStatusx2);
    }

    $(".js-div-for-3d").html("");
    $(".js-div-for-3d").hide();
    $("img.selectKarkasImg").show();
});

// выбор горизонтальных перемычек #BTN-HORIZONTAL-PEREMOCHKI-SELECTOR
$('#BTN-HORIZONTAL-PEREMOCHKI-SELECTOR').click(function () {
    var text = $('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').attr("data-karkas-name");
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    var width = parseInt(getFromData('width'));
    var countPer = parseInt(getFromData('horizontal-pereochki-count'));

    var priceTur = (width / 1000 * (94 + 13 * 2) + 22 * 2) * countPer;
    var priceEuroshop = (width / 1000 * (111 + 14.5 * 2) + 36 * 2) * countPer;
    var priceEuroshopLite = (width / 1000 * (89 + 14.5 * 2) + 36 * 2) * countPer;
    var priceOptimax2 = (width / 1000 * (555 + 17 * 4) + 53 * 2) * countPer;
    var priceOptima = (width / 1000 * (272 + 14.5 * 2) + 53 * 2) * countPer;
    var priceStandart = (width / 1000 * (266 + 14.5 * 2) + 35 * 2) * countPer;
    var priceMobyLight = (width / 1000 * (176 + 14.5 * 2 + 7.2 * 2) + 24 * 2) * countPer;
    var priceOptimaLite = (width / 1000 * (187 + 14.5 * 2) + 53 * 2) * countPer;
    var priceBase = (width / 1000 * (540 + 15 * 4) + 33 * 2) * countPer;
    var priceStatusx1 = (width / 1000 * (395 + 14 * 2) + 27 + 2.5 * 2) * countPer;
    var priceStatusx2 = (width / 1000 * (490 + 14 * 4) + 27 + 2.5 * 2) * countPer;
    var priceStandartStoika = (width / 1000 * (216 + 14.5 * 2) + 35 * 2) * countPer;

    if (isNaN(priceTur)) {
        priceTur = 0;
    }
    if (isNaN(priceEuroshop)) {
        priceEuroshop = 0;
    }
    if (isNaN(priceEuroshopLite)) {
        priceEuroshopLite = 0;
    }
    if (isNaN(priceOptimax2)) {
        priceOptimax2 = 0;
    }
    if (isNaN(priceOptima)) {
        priceOptima = 0;
    }
    if (isNaN(priceStandart)) {
        priceStandart = 0;
    }
    if (isNaN(priceMobyLight)) {
        priceMobyLight = 0;
    }
    if (isNaN(priceOptimaLite)) {
        priceOptimaLite = 0;
    }
    if (isNaN(priceBase)) {
        priceBase = 0;
    }
    if (isNaN(priceStatusx1)) {
        priceStatusx2 = 0;
    }
    if (isNaN(priceStandartStoika)) {
        priceStandartStoika = 0;
    }

    var templateDataToTur = {
        priceTUR: parseInt(priceTur),
        type: "H"
    };
    var templateDataToEuroshop = {
        priceEuroshop: parseInt(priceEuroshop),
        type: "H"
    };
    var templateDataToEuroshopLite = {
        priceEuroshopLite: parseInt(priceEuroshopLite),
        type: "H"
    };
    var templateDataToOptimax2 = {
        priceOptimax2: parseInt(priceOptimax2),
        type: "H"
    };
    var templateDataToOptima = {
        priceOptima: parseInt(priceOptima),
        type: "H"
    };
    var templateDataToStandart = {
        priceStandart: parseInt(priceStandart),
        type: "H"
    };
    var templateDataToMobyLight = {
        priceMobyLight: parseInt(priceMobyLight),
        type: "H"
    };
    var templateDataToOptimaLite = {
        priceOptimaLite: parseInt(priceOptimaLite),
        type: "H"
    };
    var templateDataToBase = {
        priceBase: parseInt(priceBase),
        type: "H"
    };
    var templateDataToStatusx1 = {
        priceStatusx1: parseInt(priceStatusx1),
        type: "H"
    };
    var templateDataToStatusx2 = {
        priceStatusx2: parseInt(priceStatusx2),
        type: "H"
    };
    var templateDataToStandartStoika = {
        priceStandartStoika: parseInt(priceStandartStoika),
        type: "H"
    };
    var Tur = $('#DesignSchemeKarkasTUR').html();
    var Euroshop = $('#DesignSchemeKarkasEuroshop').html();
    var EuroshopLite = $('#DesignSchemeKarkasEuroshopLite').html();
    var Optimax2 = $('#DesignSchemeKarkasOptimax2').html();
    var Optima = $('#DesignSchemeKarkasOptima').html();
    var Standart = $('#DesignSchemeKarkasStandart').html();
    var MobyLight = $('#DesignSchemeKarkasMobyLight').html();
    var OptimaLite = $('#DesignSchemeKarkasOptimaLite').html();
    var Base = $('#DesignSchemeKarkasBase').html();
    var Statusx1 = $('#DesignSchemeKarkasStatusx1').html();
    var Statusx2 = $('#DesignSchemeKarkasStatusx2').html();
    var StandartStoika = $('#DesignSchemeKarkasStandartStoika').html();

    var resultHtmlTur = makeHTMLFromTemplate(Tur, templateDataToTur);
    var resultHtmlEuroshop = makeHTMLFromTemplate(Euroshop, templateDataToEuroshop);
    var resultHtmlEuroshopLite = makeHTMLFromTemplate(EuroshopLite, templateDataToEuroshopLite);
    var resultHtmlOptimax2 = makeHTMLFromTemplate(Optimax2, templateDataToOptimax2);
    var resultHtmlOptima = makeHTMLFromTemplate(Optima, templateDataToOptima);
    var resultHtmlStandart = makeHTMLFromTemplate(Standart, templateDataToStandart);
    var resultHtmlMobyLight = makeHTMLFromTemplate(MobyLight, templateDataToMobyLight);
    var resultHtmlOptimaLite = makeHTMLFromTemplate(OptimaLite, templateDataToOptimaLite);
    var resultHtmlBase = makeHTMLFromTemplate(Base, templateDataToBase);
    var resultHtmlStatusx1 = makeHTMLFromTemplate(Statusx1, templateDataToStatusx1);
    var resultHtmlStatusx2 = makeHTMLFromTemplate(Statusx2, templateDataToStatusx2);
    var resultHtmlStandartStoika = makeHTMLFromTemplate(StandartStoika, templateDataToStandartStoika);

    if (text == "Euroshop" || text == "EuroshopLite" || text == "Standart" || text == "MobyLight" || text == "Optima" || text == "OptimaLite" || text == "StandartStoika") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandart);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlMobyLight);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlTur);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptima);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlOptimaLite);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlStandartStoika);
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtmlEuroshop);
    }
    if (text == "Tur") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlTur);
    }
    if (text == "Base") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlBase);
    }
    if (text == "Optimax2") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlOptimax2);
    }
    if (text == "Statusx1") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlStatusx1);
    }
    if (text == "Statusx2") {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(resultHtmlStatusx2);
    }

    $(".js-div-for-3d").html("");
    $(".js-div-for-3d").hide();
    $("img.selectKarkasImg").show();
});

$("#TOTAL_PAINTING_ID, #MOVABLE_PAINTING_ID").change(function () {
    PAINTING();
    paintingInDiadramma();
});
$("#TOTAL_PAINTING_ID, #MOVABLE_PAINTING_ID").bind('input', function () {
    PAINTING();
    paintingInDiadramma();
});

// +-
function PM(pm, t) {
    var inpVal = t.parent().parent().parent().find("input").val();
    if (pm == "-") {
        if (inpVal >= 1) {
            t.parent().parent().parent().find("input").val((--inpVal)).trigger('change');
        } else {
            t.parent().parent().parent().find("input").val("0").trigger('change');
        }
    } else if (pm == "+") {
        t.parent().parent().parent().find("input").val((++inpVal)).trigger('change');
    }
}
$(".btn-plaus").click(function (e) {
    PM("+", $(this))
});
$(".btn-minus").click(function (e) {
    PM("-", $(this))
});

////////////////// init
$("#myTab a").click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

////////////////////////////////////////////////////////////////////////////////////////////// Инпуты и слеекты //

$("#tab-profil-v-peremyichki-shtuk").bind('input', function () {
    setDataAndText('vertikalnue-pereochki-count', $(this).val());
    var perName = getFromData('vertikalnue-pereochki-name');
    SelectTabKarkasEnd(perName,'V');
    $('.TAB-PROFIL-PRICE').text(parseInt(getFromData('karkas-price')) + parseInt(getFromData('vertikalnue-pereochki-price')) + parseInt(getFromData('horizontal-pereochki-price')));
    paintingInDiadramma();
});

$("#tab-profil-peremyichki-horizontal-shtuk").bind('input', function () {
    setDataAndText('horizontal-pereochki-count', $(this).val());
    var perName = getFromData('horizontal-pereochki-name');
    SelectTabKarkasEnd(perName,'H');
    $('.TAB-PROFIL-PRICE').text(parseInt(getFromData('karkas-price')) + parseInt(getFromData('vertikalnue-pereochki-price')) + parseInt(getFromData('horizontal-pereochki-price')));
    paintingInDiadramma();
});

$("#TOTAL_PAINTING_ID").bind('blur', function () {
    TOTAL_PAINTING = parseInt($(this).val());
    getDataFurnitura();
});
$("#MOVABLE_PAINTING_ID").bind('input', function () {
    MOVABLE_PAINTING = parseInt($(this).val());
});
$("#NUMBER_SETS_ID").bind('input', function () {
    NUMBER_SETS = parseInt($(this).val());
});
$("#HIGHT_SETS_ID, #WIDTH_SETS_ID").bind('input', function () {
    DandDStart();
    getDataFurnitura();
});
// $("#WIDTH_SETS_ID").bind('input', function(){
//     WIDTH_SETS = parseInt($(this).val());
// });
$("#TYPE_BAFFLE_ID").change(function () {
    var TYPE_BAFFLE = parseInt($(this).val());
    if(TYPE_BAFFLE == 2){
        $("#POLOVINCHATAYA_KOL").prop("disabled",false);
    }else{
        $("#POLOVINCHATAYA_KOL").prop("disabled",true);
    }
});
// tab-profil-vyisota
// $("#tab-profil-vyisota").change(function () {
//     $('*[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').attr('data-height', $('#tab-profil-vyisota').val());
//     $('*[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').find(".height").text($('#tab-profil-vyisota').val());
// });
$("#tab-profil-vyisota").bind('input', function () {
    $('*[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').attr('data-height', $('#tab-profil-vyisota').val());
    $('*[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').find(".height").text($('#tab-profil-vyisota').val());
    setHeightDandDEl();
});
$('#karkas-tsvet-uplotnitelya').change(function () {
    setDataAndText('karkas-tsvet-uplotnitelya', $("#karkas-tsvet-uplotnitelya").val())
});
$('#karkas-tsvet-zaglushki').change(function () {
    setDataAndText('karkas-tsvet-zaglushki', $("#karkas-tsvet-zaglushki").val())
});
$('#karkas-tsvet-zaglushki-tortsevoy').change(function () {
    setDataAndText('karkas-tsvet-zaglushki-tortsevoy', $("#karkas-tsvet-zaglushki-tortsevoy").val())
});

$("#tab-profil-vyisota, #tab-profil-shirina").change(function () {
    setDataAndText('area', parseInt($("#tab-profil-vyisota").val() * $("#tab-profil-shirina").val() / 1000000));
    // setWidthDandDEl();
    // setHeightDandDEl();

});
$('#tab-profil-vyisota, #tab-profil-shirina').bind('input', function () {
    setDataAndText('area', parseInt($("#tab-profil-vyisota").val() * $("#tab-profil-shirina").val() / 1000000));
    // setWidthDandDEl();
    // setHeightDandDEl();
});
// Добавление поля
$('.add-material-btn').click(function () {
    loop1: for (var i = 1; i <= 5; i++) {
        var type = getFromData('material-' + i + '-type');
        if (type == '') {
            $(".add-material-block-past").append('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 napolnenie-el" data-material-el-id="' + i + '">' + $(".napolnenie-el-set").html() + '</div>');
            setDataAndText('material-' + i + '-type', 'stekloObyichnoe');
            setNapolnenieElTolschinaShow('stekloObyichnoe', i);
            break loop1;
        }
    }
    addWElNapolnenieToFive();
    addWHElNapolnenie();
    calcNow();
});


// Инпуты и слеекты //////////////////////////////////////////////////////////////////////////////////////////////

// Добавить в скирип //////////////////////////////////////////////////////////////////////////////////////////////
$('.proizvaodstvoIn input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.proizvaodstvoTo input').prop("disabled", "true");
    } else {
        $('.proizvaodstvoTo input').removeAttr('disabled');
        $('.proizvaodstvoTo input').val("");
    }
});
$('.montazhIn input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.montazhTo input').attr('disabled', '');
    } else {
        $('.montazhTo input').removeAttr('disabled');
        $('.montazhTo input').val("");
    }
});
$('.dostavkaIn input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.dostavkaTo input').attr('disabled', '');
    } else {
        $('.dostavkaTo input').removeAttr('disabled');
        $('.dostavkaTo input').val("");
    }
});
$('.srochnostIn input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.srochnostTo input').attr('disabled', '');
    } else {
        $('.srochnostTo input').removeAttr('disabled');
        $('.srochnostTo input').val("");
    }
});
$('.nashProtsentIn input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.nashProtsentTo input').attr('disabled', '');
    } else {
        $('.nashProtsentTo input').removeAttr('disabled');
        $('.nashProtsentTo input').val("");
    }
});

$('.proizvaodstvoTo input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.proizvaodstvoIn input').attr('disabled', '');
    } else {
        $('.proizvaodstvoIn input').removeAttr('disabled');
        $('.proizvaodstvoIn input').val("");
    }
});
$('.montazhTo input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.montazhIn input').attr('disabled', '');
    } else {
        $('.montazhIn input').removeAttr('disabled');
        $('.montazhIn input').val("");
    }
});
$('.dostavkaTo input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.dostavkaIn input').attr('disabled', '');
    } else {
        $('.dostavkaIn input').removeAttr('disabled');
        $('.dostavkaIn input').val("");
    }
});
$('.srochnostTo input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.srochnostIn input').attr('disabled', '');
    } else {
        $('.srochnostIn input').removeAttr('disabled');
        $('.srochnostIn input').val("");
    }
});
$('.nashProtsentTo input').on('keyup', function () {
    var value = $(this).val();
    if (value > 0) {
        $('.nashProtsentIn input').attr('disabled', '');
    } else {
        $('.nashProtsentIn input').removeAttr('disabled');
        $('.nashProtsentIn input').val("");
    }
});
// Добавить в скирип //////////////////////////////////////////////////////////////////////////////////////////////


// test
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


var myEfficientFn = debounce(function () {
    calcNow();
    getDataFurnitura();
    globalPrice();
    TableForInfo();
    setHeightDandDEl();
    setWidthDandDEl();
}, 2500);

window.addEventListener('input', myEfficientFn);

function makeHTMLFromTemplate(htmlTemplate, templateData) {
    return htmlTemplate.replace(/%(\w+)%/gi, function (match, p1) {
        return templateData[p1];
    });
}

function explode(delimiter, string) {
    var emptyArray = {0: ''};
    if (arguments.length != 2 ||
        typeof arguments[0] == 'undefined' ||
        typeof arguments[1] == 'undefined') {
        return null;
    }
    if (delimiter === '' ||
        delimiter === false ||
        delimiter === null) {
        return false;
    }
    if (typeof delimiter == 'function' ||
        typeof delimiter == 'object' ||
        typeof string == 'function' ||
        typeof string == 'object') {
        return emptyArray;
    }
    if (delimiter === true) {
        delimiter = '1';
    }
    return string.toString().split(delimiter.toString());
}
