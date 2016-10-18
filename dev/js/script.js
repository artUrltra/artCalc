////////////////////////////////////////////////////////////////////////////////////////////// Функции работы с обьектом
// Установка даты и текста //
function setDataAndText(group, text) {
    $('*[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').attr('data-' + group, text);
    $('*[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').find('.' + group).text(text);
}
//  ============================= //

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
                'data-vertikalnue-pereochki-info=""' +
                'data-vertikalnue-pereochki-price=""' +
                'data-vertikalnue-pereochki-price-for-one=""' +
                'data-horizontal-pereochki-count=""' +
                'data-horizontal-pereochki-img=""' +
                'data-horizontal-pereochki-name=""' +
                'data-horizontal-pereochki-info=""' +
                'data-horizontal-pereochki-price=""' +
                'data-horizontal-pereochki-price-for-one=""' +
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
                '<div class="hideBlock">vertikalnue-pereochki-info = <span class="vertikalnue-pereochki-info"></span></div>' +
                '<div class="hideBlock">vertikalnue-pereochki-price = <span class="vertikalnue-pereochki-price"></span></div>' +
                '<div class="hideBlock">vertikalnue-pereochki-price-for-one = <span class="vertikalnue-pereochki-price-for-one"></span></div>' +
                '<div class="hideBlock">horizontal-pereochki-count = <span class="horizontal-pereochki-count"></span></div>' +
                '<div class="hideBlock">horizontal-pereochki-img = <span class="horizontal-pereochki-img"></span></div>' +
                '<div class="hideBlock">horizontal-pereochki-name = <span class="horizontal-pereochki-name"></span></div>' +
                '<div class="hideBlock">horizontal-pereochki-info = <span class="horizontal-pereochki-info"></span></div>' +
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
    if ($('#POLOVINCHATAYA_CHECKBOX').prop('checked') == false) {
        $.snackbar({content: "Для использования половинчатой створки поставьте галочку!!!"});
        $('#POLOVINCHATAYA_KOL').val('');
    } else {
        var p = $('#TOTAL_PAINTING_ID').val();
        var mp = $('#MOVABLE_PAINTING_ID').val();
        var h = $('#HIGHT_SETS_ID').val();
        var w = $('#WIDTH_SETS_ID').val();
        if (p == '' || mp == '' || h == '' || w == '') {
            $.snackbar({content: "Для использования половинчатой створки заполните поля: Всего полотен, Подвижные полотна, Высота, Ширина!!!!"});
            $('#POLOVINCHATAYA_KOL').val('');
        } else {
            p = checkTheErrorNumber(p);
            mp = checkTheErrorNumber(mp);
            var ps = checkTheErrorNumber($('#POLOVINCHATAYA_KOL').val());
            if (( p - mp ) <= ps) {
                $.snackbar({content: "Для использования половинчатой створки должно быть: полотен - подвижных полотен > половинчатых створок!!!!"});
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
    $('#KARKAS-NAME').text(getFromData('karkas-name'));
    $('#KARKAS-BLOCK img').attr('src', getFromData('karkas-img'));
    $('#KARKAS-INFO').text(getFromData('karkas-info'));
    $('#KARKAS-PRICE').text(getFromData('karkas-price'));
    $('#HORIZONTAL-PEREMOCHKI-BLOCK img').attr('src', getFromData('horizontal-pereochki-img'));
    $('#HORIZONTAL-PEREMOCHKI-NAME').text(getFromData('horizontal-pereochki-name'));
    $('#HORIZONTAL-PEREMOCHKI-INFO').text(getFromData('horizontal-pereochki-info'));
    $('#tab-profil-peremyichki-horizontal-shtuk').val(getFromData('horizontal-pereochki-count'));
    $('#HORIZONTAL-PEREMOCHKI-PRICE').text(getFromData('horizontal-pereochki-price-for-one') * getFromData('horizontal-pereochki-count'));
    $('#VERTIKALNUE-PEREMOCHKI-BLOCK img').attr('src', getFromData('vertikalnue-pereochki-img'));
    $('#VERTIKALNUE-PEREMOCHKI-NAME').text(getFromData('vertikalnue-pereochki-name'));
    $('#VERTIKALNUE-PEREMOCHKI-INFO').text(getFromData('vertikalnue-pereochki-info'));
    $('#tab-profil-v-peremyichki-shtuk').val(getFromData('vertikalnue-pereochki-count'));
    $('#VERTIKALNUE-PEREMOCHKI-PRICE').text(getFromData('vertikalnue-pereochki-price-for-one') * getFromData('vertikalnue-pereochki-count'));

    if (getFromData('karkas-tsvet-uplotnitelya') == '') {
        $("#karkas-tsvet-uplotnitelya").val('');
    } else {
        $("#karkas-tsvet-uplotnitelya").val('');
        $("#karkas-tsvet-uplotnitelya").val(getFromData('karkas-tsvet-uplotnitelya'));
    }

    if (getFromData('karkas-tsvet-zaglushki') == '') {
        $("#karkas-tsvet-zaglushki").val('');
    } else {
        $("#karkas-tsvet-zaglushki").val('');
        $("#karkas-tsvet-zaglushki").val(getFromData('karkas-tsvet-zaglushki'));
    }

    if (getFromData('karkas-tsvet-zaglushki-tortsevoy') == '') {
        $("#karkas-tsvet-zaglushki-tortsevoy").val('');
    } else {
        $("#karkas-tsvet-zaglushki-tortsevoy").val('');
        $("#karkas-tsvet-zaglushki-tortsevoy").val(getFromData('karkas-tsvet-zaglushki-tortsevoy'));
    }

    if (getFromData('karkas-vid-krepleniya') == '') {
        $("#karkas-vid-krepleniya").val('');
    } else {
        $("#karkas-vid-krepleniya").val('');
        $("#karkas-vid-krepleniya").val(getFromData('karkas-vid-krepleniya'));
    }

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

//  ============================= //

// ТАБ ПРОФИЛЬ - Выбор декора для профиля //
$('#btn-decor').click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append($('.decor').html());
});

$('#btn-ral').click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    var html = $('.rai').html();
    var templateData = {
        type: "color"
    };
    var resultHtml = makeHTMLFromTemplate(html, templateData);
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
});

$('#btn-anod').click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    var html = $('.rai').html();
    var templateData = {
        type: "anod"
    };
    var resultHtml = makeHTMLFromTemplate(html, templateData);
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
});

$(".add-material-block-past").on('click', '#open-material-btn', function () {
    // $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    // var html = $('.napolnenie-block').html();
    // $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(html);
    // $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    var text = $('.napolnenie-left-tab').html();
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(text);
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
});

$('body').on("change",function () {
    DekorRePrice2();
});

function DekorRePrice2(){
    var typeAndText = $("#pokraskaTypeAndName").val();
    var data = explode(".",typeAndText);
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
                }else{
                    var sumPerH = (sizeW * 0.001 * priceKarkas * countPerH);
                }
                if (countPerV == "0" || isNaN(countPerV) || countPerV == null || countPerV < 1) {
                    var sumPerV = 0;
                }else{
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

    $(".TAB-POKRASKA-PRICE").text(parseInt(TotalPrice));
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
                }else{
                    var sumPerH = (sizeW * 0.001 * priceKarkas * countPerH);
                }
                if (countPerV == "0" || isNaN(countPerV) || countPerV == null || countPerV < 1) {
                    var sumPerV = 0;
                }else{
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

    var karkasname = $('*[data-id=' + id + ']').find('.karkas-name').text();
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
                5: {0: 0, 6: 1400},
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
                5: {0: 0, 6: 1400},
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
                3: {5: 1350, 6: 1600},
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
                5: {0: 0, 6: 1400},
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
                5: {0: 0, 6: 1400},

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
                5: {0: 0, 6: 1400},
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
        default:
            var thickness = {
                1: {0: 0}
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
        case "orgstekloEkstruz":
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
function napolnenieImg(napolnenieType, id) {
    if (napolnenieType == 'stekloObyichnoe') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10790837.png');
    } else if (napolnenieType == 'stekloMatovoe') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10787765.png');
    } else if (napolnenieType == 'zerkaloSerebro') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10797000.png');
    } else if (napolnenieType == 'zerkaloBronza') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10784712.png');
    } else if (napolnenieType == 'tripleks') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10785736.png');
    } else if (napolnenieType == 'tripleksMatovyiy') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10775496.png');
    } else if (napolnenieType == 'polikarbonatSotovyiy') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10777544.png');
    } else if (napolnenieType == 'PVHvspenennyiy') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10772424.png');
    } else if (napolnenieType == 'polikarbonatMonolit') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10760136.png');
    } else if (napolnenieType == 'orgstekloEkstruz') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10757064.png');
    } else if (napolnenieType == 'LDSP') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10763208.png');
    } else if (napolnenieType == 'MDFshlifovannyiy') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10750920.png');
    } else if (napolnenieType == 'DSPshlifovannyiy') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10756040.png');
    } else if (napolnenieType == 'fanera') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10790859.png');
    } else if (napolnenieType == 'sendvichPaneliPVH') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10784715.png');
    } else if (napolnenieType == 'stekloTonirovannoeSeroe') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/11657586.jpg');/////
    } else if (napolnenieType == 'stekloTonirovannoeBronza') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/11611506.jpg');
    } else if (napolnenieType == 'stekloTonirovannoeGoluboe') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/11600245.jpg');
    } else if (napolnenieType == 'faneraTrudnogoryuchaya') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10785736.png');
    } else if (napolnenieType == 'orgstekloEkstruz') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/10757064.png');
    } else if (napolnenieType == 'dekorativnyiyBumazhno') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/11655542.jpg');
    } else if (napolnenieType == 'gipsovinil12') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/11619702.jpg');
    } else if (napolnenieType == 'gipsodekor12') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/11619702.jpg');
    } else if (napolnenieType == 'gipsokarton12') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/11619702.jpg');
    } else if (napolnenieType == 'stekloBronzaSeroe') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/11663497.jpg');
    } else if (napolnenieType == 'stekloProtivopozharnoe') {
        $('*[data-material-el-id="' + id + '"]').find('img').attr('src', 'http://savepic.ru/11609225.jpg');
    }

    setNapolnenieElTolschinaShow(napolnenieType, id)
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

    // $( '#POLOVINCHATAYA_KOL' ).val('');
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
    // - показать/скрыть четбокс
    if (type == 2) {
        $('.POLOVINCHATAYA').show();
    } else {
        $('.POLOVINCHATAYA').hide();
        $(".POLOVINCHATAYA input").prop("checked", false);
    }
    // =
}
loadFurnitura();
$("#TYPE_BAFFLE_ID").change(function () {
    loadFurnitura();
});
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - Раздвижные механизмы//
function loadRazdvizhnyieMehanizmyiPrice(t) {
    var id = $(t).val();
    if (id == 0) {
        $('.razdvizhnyie-mehanizmyi .price').text(0);
        $('.razdvizhnyie-mehanizmyi img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.razdvizhnyie-mehanizmyi .price').text(475 * $('#TOTAL_PAINTING_ID').val());
        $('.razdvizhnyie-mehanizmyi img').attr('src', 'img/furnityra/1.jpg');
    } else if (id == 2) {
        $('.razdvizhnyie-mehanizmyi .price').text(830 * $('#TOTAL_PAINTING_ID').val());
        $('.razdvizhnyie-mehanizmyi img').attr('src', 'img/furnityra/1.jpg');
    } else if (id == 3) {
        $('.razdvizhnyie-mehanizmyi .price').text(650 * $('#TOTAL_PAINTING_ID').val());
        $('.razdvizhnyie-mehanizmyi img').attr('src', 'img/furnityra/22.jpg');
    } else if (id == 4) {
        $('.razdvizhnyie-mehanizmyi .price').text(705 * $('#TOTAL_PAINTING_ID').val());
        $('.razdvizhnyie-mehanizmyi img').attr('src', 'img/furnityra/23.jpg');
    } else if (id == 5) {
        $('.razdvizhnyie-mehanizmyi .price').text(500 * $('#TOTAL_PAINTING_ID').val());
        $('.razdvizhnyie-mehanizmyi img').attr('src', 'img/furnityra/24.jpg');
    } else if (id == 6) {
        $('.razdvizhnyie-mehanizmyi .price').text(2000 * $('#TOTAL_PAINTING_ID').val());
        $('.razdvizhnyie-mehanizmyi img').attr('src', 'img/furnityra/30.jpg');
    }
    loadMehanizmSinhronizatsii(id);
    loadNapravlyayuschie(id);
    loadVidKrepleniyaNapravlyayuschie(id);
    loadPovodok(id);
}
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - механизмы синхронизации //
function loadMehanizmSinhronizatsii(id) {
    $(".mehanizm-sinhronizatsii select").html('');
    if (id == 0) {
        $(".mehanizm-sinhronizatsii select").prepend($('' +
            '<option value="0">Нет</option>'
        ));
        $('.mehanizm-sinhronizatsii .price').text(0);
    } else if (id == 1 || id == 2 || id == 3 || id == 4 || id == 5) {
        $(".mehanizm-sinhronizatsii select").prepend($('' +
            '<option value="1">Нет</option>' +
            '<option value="2">Синхронный</option>'
        ));
        $('.mehanizm-sinhronizatsii .price').text(0);
    } else if (id == 6) {
        $(".mehanizm-sinhronizatsii select").prepend($('' +
            '<option value="1">Нет</option>' +
            '<option value="2" >Синхронный</option>' +
            '<option value="3">D-80 Synchro, Ducasse</option>' +
            '<option value="4">D-80 Telescopic, Ducasse</option>'
        ));
        $('.mehanizm-sinhronizatsii .price').text(0);
    }
}

function setMehanizmSinhronizatsii(t) {
    var id = $(t).val();
    if (id == 0 || id == 1) {
        $('.mehanizm-sinhronizatsii .price').text(0);
        $('.mehanizm-sinhronizatsii img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 2) {
        $('.mehanizm-sinhronizatsii .price').text(1590 * $('#TOTAL_PAINTING_ID').val() / 2);
        $('.mehanizm-sinhronizatsii img').attr('src', 'img/furnityra/3.jpg');
    } else if (id == 3) {
        $('.mehanizm-sinhronizatsii .price').text(6320 * $('#TOTAL_PAINTING_ID').val() / 2);
        $('.mehanizm-sinhronizatsii img').attr('src', 'img/furnityra/37.jpg');
    } else if (id == 4) {
        $('.mehanizm-sinhronizatsii .price').text(6320 * $('#TOTAL_PAINTING_ID').val() / 2);
        $('.mehanizm-sinhronizatsii img').attr('src', 'img/furnityra/37.jpg');
    }
};
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - напрявляющие //
function loadNapravlyayuschie(id) {
    $(".napravlyayuschie select").html('');
    if (id == 1 || id == 2) {
        $(".napravlyayuschie select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="1">Неокрашенная, Россия</option>' +
            '<option value="2">Цвет: серебро, Россия</option>'
        ));
        // $('.mehanizm-sinhronizatsii .price').text(0);
    } else if (id == 3 || id == 4) {
        $(".napravlyayuschie select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="3">Неокрашенная, Degon Польша</option>'
        ));
    } else if (id == 5) {
        $(".napravlyayuschie select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="4">Неокрашенная, Китай</option>'
        ));
    } else if (id == 6) {
        $(".napravlyayuschie select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="5">Направляющия U-21, Ducasse Испания</option>'
        ));
    }
}

function setNapravlyayuschie() {
    var kol = $('.napravlyayuschie input').val();
    var id = $(".napravlyayuschie select").val();
    var allWidth = parseInt($("#WIDTH_SETS_ID").val());


    if (id == 0) {
        var res = 0;
        var img = 0;
    } else if (id == 1) {
        var res = (245 * allWidth * 2 / 1000) * 1.05;
        var img = 4;
    } else if (id == 2) {
        var res = (315 * allWidth * 2 / 1000) * 1.05;
        var img = 5;
    } else if (id == 3) {
        var res = (245 * allWidth * 2 / 1000) * 1.05;
        var img = 25;
    } else if (id == 4) {
        var res = (400 * allWidth * 2 / 1000) * 1.05;
        var img = 26;
    } else if (id == 5) {
        var res = (275 * allWidth * 2 / 1000) * 1.05;
        var img = 26;
    }
    console.log(245 * allWidth * 2 / 1000);
    $('.napravlyayuschie img').attr('src', 'img/furnityra/' + img + '.jpg');
    $('.napravlyayuschie .price').text(parseInt(res * kol));

}
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - напрявляющие //
function loadVidKrepleniyaNapravlyayuschie(id) {
    $(".vidKrepleniyaNapravlyayuschey select").html('');
    if (id == 1 || id == 2) {
        $(".vidKrepleniyaNapravlyayuschey select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="1" >К стене, Россия</option>' +
            '<option value="2">К потолку, Россия</option>'
        ));
    } else if (id == 3 || id == 4 || id == 5) {
        $(".vidKrepleniyaNapravlyayuschey select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="3" >Уголок крепежный, Degon Польша и Китайя</option>'
        ));
    } else if (id == 6) {
        $(".vidKrepleniyaNapravlyayuschey select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="4" >Кронштейн, Ducasse Испания</option>' +
            '<option value="5">Кронштейн широкий, Ducasse Испания</option>'
        ));
    }
}

function setVidKrepleniyaNapravlyayuschie() {
    var id = $(".vidKrepleniyaNapravlyayuschey select").val();
    if (id == 0) {
        $('.vidKrepleniyaNapravlyayuschey .price').text(0);
        $('.vidKrepleniyaNapravlyayuschey img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.vidKrepleniyaNapravlyayuschey .price').text(50);
        $('.vidKrepleniyaNapravlyayuschey img').attr('src', 'img/furnityra/6.jpg');
    } else if (id == 2) {
        $('.vidKrepleniyaNapravlyayuschey .price').text(50);
        $('.vidKrepleniyaNapravlyayuschey img').attr('src', 'img/furnityra/7.jpg');
    } else if (id == 3) {
        $('.vidKrepleniyaNapravlyayuschey .price').text(50);
        $('.vidKrepleniyaNapravlyayuschey img').attr('src', 'img/furnityra/28.jpg');
    } else if (id == 4) {
        $('.vidKrepleniyaNapravlyayuschey .price').text(50);
        $('.vidKrepleniyaNapravlyayuschey img').attr('src', 'img/furnityra/33.jpg');
    } else if (id == 5) {
        $('.vidKrepleniyaNapravlyayuschey .price').text(680);
        $('.vidKrepleniyaNapravlyayuschey img').attr('src', 'img/furnityra/34.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - проводок //
function loadPovodok(id) {
    $(".povodok select").html('');
    if (id == 1 || id == 2 || id == 3 || id == 4 || id == 5) {
        $(".povodok select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="1" >Белый</option>' +
            '<option value="2">Коричневый</option>'
        ));
    } else if (id == 6) {
        $(".povodok select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="3" >Поводок, Ducasse Испания</option>'
        ));
    }
}

function setPovodok() {
    var id = $(".povodok select").val();
    if (id == 0) {
        $('.povodok .price').text(0);
        $('.povodok img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.povodok .price').text(20 * $('#TOTAL_PAINTING_ID').val());
        $('.povodok img').attr('src', 'img/furnityra/8.jpg');
    } else if (id == 2) {
        $('.povodok .price').text(20 * $('#TOTAL_PAINTING_ID').val());
        $('.povodok img').attr('src', 'img/furnityra/9.jpg');
    } else if (id == 3) {
        $('.povodok .price').text(110 * $('#TOTAL_PAINTING_ID').val());
        $('.povodok img').attr('src', 'img/furnityra/36.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Складная перегородка - Складные механизмы //
function setSkladnyieMehanizmyi() {
    var id = $('.setSkladnyieMehanizmyi select').val();
    var ps = checkTheErrorNumber($('#POLOVINCHATAYA_KOL').val());
    var p = checkTheErrorNumber($('#TOTAL_PAINTING_ID').val());

    if (id == 0) {
        $('.setSkladnyieMehanizmyi .price').text(0);
        $('.setSkladnyieMehanizmyi img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.setSkladnyieMehanizmyi .price').text(950 * ( p - ps ));
        $('.setSkladnyieMehanizmyi img').attr('src', 'img/furnityra/10.jpg');
    } else if (id == 2) {
        $('.setSkladnyieMehanizmyi .price').text(490 * ( p - ps ));
        $('.setSkladnyieMehanizmyi img').attr('src', 'img/furnityra/29.jpg');
    }


    // if( $( '#POLOVINCHATAYA_CHECKBOX' ).prop( 'checked' ) == false ) {
    //     if (id == 0) {
    //         $('.setSkladnyieMehanizmyi .price').text(0);
    //         $('.setSkladnyieMehanizmyi img').attr('src', 'img/furnityra/0.jpg');
    //     } else if (id == 1) {
    //         $('.setSkladnyieMehanizmyi .price').text(950 * $('#TOTAL_PAINTING_ID').val());
    //         $('.setSkladnyieMehanizmyi img').attr('src', 'img/furnityra/10.jpg');
    //     } else if (id == 2) {
    //         $('.setSkladnyieMehanizmyi .price').text(490 * $('#TOTAL_PAINTING_ID').val());
    //         $('.setSkladnyieMehanizmyi img').attr('src', 'img/furnityra/29.jpg');
    //     }
    // } else {
    //     if (id == 0) {
    //         $('.setSkladnyieMehanizmyi .price').text(0);
    //         $('.setSkladnyieMehanizmyi img').attr('src', 'img/furnityra/0.jpg');
    //     } else if (id == 1) {
    //         $('.setSkladnyieMehanizmyi .price').text(950 * ( checkTheErrorNumber( $('#TOTAL_PAINTING_ID').val() ) - checkTheErrorNumber( $( '#POLOVINCHATAYA_KOL' ).val() ) ) );
    //         $('.setSkladnyieMehanizmyi img').attr('src', 'img/furnityra/10.jpg');
    //     } else if (id == 2) {
    //         $('.setSkladnyieMehanizmyi .price').text(490 * checkTheErrorNumber( ( $('#TOTAL_PAINTING_ID').val() ) - checkTheErrorNumber( $( '#POLOVINCHATAYA_KOL' ).val() ) ) );
    //         $('.setSkladnyieMehanizmyi img').attr('src', 'img/furnityra/29.jpg');
    //     }
    // }
    loadPetli(id);
    loadNapravlyayuschie(id);
    loadVidKrepleniya(id);
}
//  ============================= //

// ТАБ ФУРНИТУРА - Складная перегородка - Петли // petli
function loadPetli(id) {
    $(".petli select").html('');
    if (id == 1) {
        $(".petli select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="1" >Комплектные, Россия</option>'
        ));
    } else if (id == 2) {
        $(".petli select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="2" >Комплектные, Degon Польша</option>'
        ));
    }
}

function setPetli() {
    var id = $('.petli select').val();
    if (id == 0) {
        $('.petli .price').text(0);
        $('.petli img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.petli .price').text(50 * 3 * $('#TOTAL_PAINTING_ID').val());
        $('.petli img').attr('src', 'img/furnityra/11.jpg');
    } else if (id == 2) {
        $('.petli .price').text(30 * 3 * $('#TOTAL_PAINTING_ID').val());
        $('.petli img').attr('src', 'img/furnityra/11.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Складная перегородка - Петли // napravlyayuschie
function loadNapravlyayuschie(id) {
    $(".napravlyayuschie select").html('');
    if (id == 1) {
        $(".napravlyayuschie select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="1" >Неокрашенная, Россия</option>' +
            '<option value="2">Цвет: серебро, Россия</option>'
        ));
    } else if (id == 2) {
        $(".napravlyayuschie select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="3" >Неокрашенная, Degon Польша</option>'
        ));
    }
}


//  ============================= //

// ТАБ ФУРНИТУРА - Складная перегородка - Вид крепления // vidKrepleniya
function loadVidKrepleniya(id) {
    $(".vidKrepleniya select").html('');
    if (id == 1) {
        $(".vidKrepleniya select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="1" >К стене</option>' +
            '<option value="2">К потолку</option>'
        ));
    } else if (id == 2) {
        $(".vidKrepleniya select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="1" >К стене</option>' +
            '<option value="2">К потолку</option>' +
            '<option value="3">Уголок крепежный, Degon Польша</option>'
        ));
    }
}

function setVidKrepleniya() {
    var id = $('.vidKrepleniya select').val();
    if (id == 0) {
        $('.vidKrepleniya .price').text(0);
        $('.vidKrepleniya img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.vidKrepleniya .price').text(50);
        $('.vidKrepleniya img').attr('src', 'img/furnityra/6.jpg');
    } else if (id == 2) {
        $('.vidKrepleniya .price').text(50);
        $('.vidKrepleniya img').attr('src', 'img/furnityra/7.jpg');
    } else if (id == 3) {
        $('.vidKrepleniya .price').text(50);
        $('.vidKrepleniya img').attr('src', 'img/furnityra/28.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Мобильная перегородка - nozhki
function setNozhki() {
    var id = $('.nozhki select').val();
    if (id == 0) {
        $('.nozhki .price').text(0);
        $('.nozhki img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.nozhki .price').text(42 * 2 * $('#TOTAL_PAINTING_ID').val());
        $('.nozhki img').attr('src', 'img/furnityra/19.jpg');
    } else if (id == 2) {
        $('.nozhki .price').text(42 * 2 * $('#TOTAL_PAINTING_ID').val());
        $('.nozhki img').attr('src', 'img/furnityra/19.jpg');
    } else if (id == 3) {
        $('.nozhki .price').text(275 * 2 * $('#TOTAL_PAINTING_ID').val());
        $('.nozhki img').attr('src', 'img/furnityra/20.jpg');
    } else if (id == 4) {
        $('.nozhki .price').text(42 * 2 * $('#TOTAL_PAINTING_ID').val());
        $('.nozhki img').attr('src', 'img/furnityra/19.jpg');
    } else if (id == 5) {
        $('.nozhki .price').text(450 * 2 * $('#TOTAL_PAINTING_ID').val());
        $('.nozhki img').attr('src', 'img/furnityra/21.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Мобильная перегородка - stoyki
function loadStoyki() {

    var name = getFromData('karkas-name');

    $(".stoyki select").html('');

    if (name == 'Euroshop') {

        $(".stoyki select").prepend($('' +
            '<option value="0">Нет</option>' +

            '<option value="1" >Стойка скругленная 90 °</option>' +

            '<option value="2">Стойка 135 °</option>' +

            '<option value="3">Стойка угловая 90 °</option>' +

            '<option value="4">Стойка Т-образная</option>' +

            '<option value="5">Стойка Т-образная скругленная</option>'
        ));

    } else if (name == 'EuroshopLite') {

        $(".stoyki select").prepend($('' +
            '<option value="0">Нет</option>' +

            '<option value="1" >Стойка скругленная 90 °</option>' +

            '<option value="2">Стойка 135 °</option>' +

            '<option value="3">Стойка угловая 90 °</option>' +

            '<option value="4">Стойка Т-образная</option>' +

            '<option value="5">Стойка Т-образная скругленная</option>'
        ));

    } else if (name == 'Standart' || name == 'StandartStoika') {

        $(".stoyki select").prepend($('' +
            '<option value="0">Нет</option>' +

            '<option value="6" >Стойка четырёхгранная</option>' +

            '<option value="7">Стойка 90 °</option>' +

            '<option value="8">Стойка Т-образная</option>' +

            '<option value="9">Стойка три паза</option>'
        ));

    } else if (name == 'Tur') {

        $(".stoyki select").prepend($('' +
            '<option value="0">Нет</option>' +

            '<option value="10" >Стойка угловая трехгранная</option>' +

            '<option value="11">Стойка угловая</option>' +

            '<option value="12">Стойка восьмигранная</option>' +

            '<option value="13">Угловая пятигранная</option>'
        ));

    } else if (name == 'Optima' || name == 'OptimaLite' || name == 'Optimax2') {

        $(".stoyki select").prepend($('' +
            '<option value="0">Нет</option>' +

            '<option value="14" >Стойка угловая 90 °</option>'
        ));

    } else if (name == 'Statusx1' || name == 'Statusx2') {

        $(".stoyki select").prepend($('' +
            '<option value="0">Нет</option>' +

            '<option value="15" >Стойка поворотная односторонняя 90 °</option>' +

            '<option value="16">Стойка поворотная двухсторонняя 90 °</option>'
        ));

    } else if (name == 'MobyLight') {

        $(".stoyki select").prepend($('' +
            '<option value="0">Нет</option>' +

            '<option value="17" >Мобилайт стойка</option>'
        ));

    } else if (name == 'Base') {

        $(".stoyki select").prepend($('' +
            '<option value="0">Нет</option>' +

            '<option value="18" >Столб три грани</option>' +

            '<option value="19">Угловой столб дуга</option>' +

            '<option value="20">Столб универсальный</option>'
        ));

    }


    setStoyki();

}

//  ============================= //

function setStoyki() {

    var id = parseInt($('.stoyki select').val());

    switch (id) {
        case 1:
            var price = 141;
            break;
        case 2:
            var price = 136;
            break;
        case 3:
            var price = 159;
            break;
        case 4:
            var price = 193;
            break;
        case 5:
            var price = 272;
            break;
        case 6:
            var price = 184;
            break;
        case 7:
            var price = 200;
            break;
        case 8:
            var price = 184;
            break;
        case 9:
            var price = 211;
            break;
        case 10:
            var price = 87;
            break;
        case 11:
            var price = 116;
            break;
        case 12:
            var price = 239;
            break;
        case 13:
            var price = 166;
            break;
        case 14:
            var price = 304;
            break;
        case 15:
            var price = 640;
            break;
        case 16:
            var price = 550;
            break;
        case 17:
            var price = 0;
            break;
        case 18:
            var price = 783;
            break;
        case 19:
            var price = 701;
            break;
        case 20:
            var price = 617;
            break;
        case 0:
            var price = 0;
            break;
    }
    var peremennaia = parseInt($("#TOTAL_PAINTING_ID").val()) - 1;
    if (peremennaia == 0) {
        peremennaia = 1;
    }
    var totalPrice = peremennaia * price * (parseInt($("#HIGHT_SETS_ID").val()) / 1000);
    if (isNaN(totalPrice)) {
        totalPrice = 0;
    }
    $('.stoyki .price').text(totalPrice);
    $('.stoyki img').attr('src', 'img/furnityra/mobilnyie/' + id + '.png');
}
// ТАБ ФУРНИТУРА - Мобильная перегородка - TipSoedineniyaPoloten
function setTipSoedineniyaPoloten() {

    var id = $('.tipSoedineniyaPoloten select').val();

    var count = parseInt($("#MOVABLE_PAINTING_ID").val());

    if($("#MOVABLE_PAINTING_ID").val() == ""){
        count = parseInt($("#TOTAL_PAINTING_ID").val());
    }

    if (id == 1) {

        $('.tipSoedineniyaPoloten .price').text(50 * 3 * count);

        $('.tipSoedineniyaPoloten img').attr('src', 'img/furnityra/11.jpg');

    }

}
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - Аксессуары - показать скрыть аксессуары
function aksessuaryiBlockSwith() {
    if ($('.aksessuaryi-block-swith input').prop('checked')) {
        $('.aksessuaryi-block-hs').show();
    } else {
        $('.aksessuaryi-block-hs').hide();
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - Аксессуары -  Доводчик
function setDovodchik() {
    var id = $('.dovodchik select').val();
    var kolP = $('#TOTAL_PAINTING_ID').val();
    if (id == 0) {
        $('.dovodchik .price').text(0);
        $('.dovodchik img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.dovodchik .price').text(1260 * kolP);
        $('.dovodchik img').attr('src', 'img/furnityra/12.jpg');
    } else if (id == 2) {
        $('.dovodchik .price').text(1260 * kolP);
        $('.dovodchik img').attr('src', 'img/furnityra/12.jpg');
    } else if (id == 3) {
        $('.dovodchik .price').text(1260 * kolP);
        $('.dovodchik img').attr('src', 'img/furnityra/12.jpg');
    } else if (id == 4) {
        $('.dovodchik .price').text(5180 * kolP);
        $('.dovodchik img').attr('src', 'img/furnityra/35.jpg');
    }
    loadDekorativnayaPlankaDlyaProfilya();
    loadRuchkaDlyaProfilya();
}
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - Аксессуары -  Декоративная планка
function loadDekorativnayaPlankaDlyaProfilya() {
    var id = $('.dovodchik select').val();
    $(".dekorativnayaPlankaDlyaProfilya select").html('');
    if (id == 1 || id == 2 || id == 3) {
        $(".dekorativnayaPlankaDlyaProfilya select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="1" >Цвет: серебро, Россия</option>'
        ));
    } else if (id == 4) {
        $(".dekorativnayaPlankaDlyaProfilya select").prepend($('' +
            '<option value="0">Нет</option>' +
            '<option value="2" >Алюм. карниз, Ducasse Испания</option>'
        ));
    }
}

// ТАБ ФУРНИТУРА - Раздвижная перегородка - Аксессуары -  Ручка
function loadRuchkaDlyaProfilya() {
    var karkasname = getFromData('karkas-name');
    var typeFurnitura = parseInt($("#TYPE_BAFFLE_ID").val());
    if (typeFurnitura == 1) {
        if (karkasname == "Standart" || karkasname == "Optima" || karkasname == "Optimax2") {
            if (karkasname == "Standart") {
                $(".rakovina select").empty();
                var ruchki = {
                    1: "Ручка-раковина бронза Besana (Италия)",
                    2: "Ручка-раковина бронза состаренная Giusti (Италия)",
                    3: "Ручка-раковина 64мм хром Производитель: Giusti, Италия",
                    4: "Ручка-раковина бронза Giusti (Италия)",
                    5: "Ручка  OL 8 (Китай) Цвет: бронза, медь, матовое золото, матовый никель, золото",
                    6: "Ручка OL 5 (Китай) Цвет: золото, хром, бронза, матовый никель"
                };
                for (var value in ruchki) {
                    $(".rakovina select").append($("<option value=" + value + " >" + ruchki[value] + "</option>"));
                }
            }
            if (karkasname == "Optima" || karkasname == "Optimax2") {
                $(".rakovina select").empty();
                var ruchki = {
                    1: "Ручка-раковина бронза Besana (Италия)",
                    3: "Ручка-раковина 64мм хром Производитель: Giusti, Италия",
                    4: "Ручка-раковина бронза Giusti (Италия)",
                    5: "Ручка  OL 8 (Китай) Цвет: бронза, медь, матовое золото, матовый никель, золото",
                    6: "Ручка OL 5 (Китай) Цвет: золото, хром, бронза, матовый никель"
                };
                for (var value in ruchki) {
                    $(".rakovina select").append($("<option value=" + value + " >" + ruchki[value] + "</option>"));
                }
            }
        } else {
            $(".rakovina select").empty();
            var ruchki = {
                0: "Нет"
            };
            for (var value in ruchki) {
                $(".rakovina select").append($("<option value=" + value + " >" + ruchki[value] + "</option>"));
            }
        }
    } else {
        $(".rakovina select").empty();
        var ruchki = {
            0: "Нет"
        };
        for (var value in ruchki) {
            $(".rakovina select").append($("<option value=" + value + " >" + ruchki[value] + "</option>"));
        }
    }
}

function setDekorativnayaPlankaDlyaProfilya() {
    var allWidth = parseInt($("#WIDTH_SETS_ID").val());
    var price = 0;
    var kornevoiiY = 120 * 2;
    var kreplenieP = 55 * 2;
    var id = $('.dekorativnayaPlankaDlyaProfilya select').val();
    if (id == 0) {
        $('.dekorativnayaPlankaDlyaProfilya .price').text(0);
        $('.dekorativnayaPlankaDlyaProfilya img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        price = 320;
        $('.dekorativnayaPlankaDlyaProfilya .price').text(((allWidth * 2 / 1000) * 1.1) * price * 1.05 + kornevoiiY + kreplenieP);
        $('.dekorativnayaPlankaDlyaProfilya img').attr('src', 'img/furnityra/13.jpg');
    } else if (id == 2) {
        price = 1500;
        $('.dekorativnayaPlankaDlyaProfilya .price').text(((allWidth * 2 / 1000) * 1.1) * price * 1.05 + kornevoiiY + kreplenieP);
        $('.dekorativnayaPlankaDlyaProfilya img').attr('src', 'img/furnityra/32.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - Аксессуары - Щеточный уплотнитель
function setSchetochnyiyUplotnitel() {
    var id = $('.schetochnyiyUplotnitel select').val();
    var allWidth = parseInt($('#WIDTH_SETS_ID').val());
    if (id == 0) {
        $('.schetochnyiyUplotnitel .price').text(0);
        $('.schetochnyiyUplotnitel img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.schetochnyiyUplotnitel .price').text(allWidth / 1000 * 12);
        $('.schetochnyiyUplotnitel img').attr('src', 'img/furnityra/14.jpg');
    } else if (id == 2) {
        $('.schetochnyiyUplotnitel .price').text(allWidth / 1000 * 25);
        $('.schetochnyiyUplotnitel img').attr('src', 'img/furnityra/15.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - Аксессуары - Ручка
function setRakovina() {
    var id = parseInt($('.rakovina select').val());
    var count1 = parseInt($("#MOVABLE_PAINTING_ID").val());
    if($("#MOVABLE_PAINTING_ID").val() == ""){
        count1 = parseInt($("#TOTAL_PAINTING_ID").val());
    }
    switch (id) {
        case 1:
            var price = 260;
            var src = 16;
            break;
        case 2:
            var price = 395;
            var src = 22;
            break;
        case 3:
            var price = 225;
            var src = 23;
            break;
        case 4:
            var price = 160;
            var src = 24;
            break;
        case 5:
            var price = 170;
            var src = 25;
            break;
        case 6:
            var price = 120;
            var src = 26;
            break;
        default:
            var price = 0;
            var src = 0;
            break;
    }
    $('.rakovina .price').text(price * count1);
    $('.rakovina img').attr('src', 'img/furnityra/' + src + '.jpg');
}
//  ============================= //

// ТАБ ФУРНИТУРА - Раздвижная перегородка - Аксессуары - ЗАмок
function setZamok() {
    var id = $('.zamok select').val();
    if (id == 0) {
        $('.zamok .price').text(0);
        $('.zamok img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.zamok .price').text(140);
        $('.zamok img').attr('src', 'img/furnityra/17.jpg');
    } else if (id == 2) {
        $('.zamok .price').text(750);
        $('.zamok img').attr('src', 'img/furnityra/38.jpg');
    } else if (id == 3) {
        $('.zamok .price').text(1000);
        $('.zamok img').attr('src', 'img/furnityra/39.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Складная перегородка - Аксессуары - Декоративная планка для профиля - Стоимость – ((«Ширина/1000»+10%)*«Цена*1,05 +«Коннектор угловой»*2 +«Крепление планки»*2.
function setDekorativnayaPlankaDlyaProfilya() {
    var id = $('.dekorativnayaPlankaDlyaProfilya select').val();
    var kornevoiiY = 120 * 2;
    var kreplenieP = 55 * 2;
    var allWidth = parseInt($("#WIDTH_SETS_ID").val());
    if (id == 0) {
        $('.dekorativnayaPlankaDlyaProfilya .price').text(0);
        $('.dekorativnayaPlankaDlyaProfilya img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        var price = 320;
        $('.dekorativnayaPlankaDlyaProfilya .price').text(((allWidth * 2 / 1000) * 1.1) * price * 1.05 + kornevoiiY + kreplenieP);
        $('.dekorativnayaPlankaDlyaProfilya img').attr('src', 'img/furnityra/13.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА - Складная перегородка - Аксессуары - Крепление ручки
function setKreplenieRuchki() {
    var id = $('.kreplenieRuchki select').val();
    if (id == 0) {
        $('.kreplenieRuchki .price').text(0);
        $('.kreplenieRuchki img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.kreplenieRuchki .price').text(50);
        $('.kreplenieRuchki img').attr('src', 'img/furnityra/18.jpg');
    }
}
//  ============================= //
// ТАБ ФУРНИТУРА - Складная перегородка - Аксессуары - Замок дверной
function setZamokSkladnyie() {
    var id = $('.zamokSkladnyie select').val();
    if (id == 0) {
        $('.zamokSkladnyie .price').text(0);
        $('.zamokSkladnyie img').attr('src', 'img/furnityra/0.jpg');
    } else if (id == 1) {
        $('.zamokSkladnyie .price').text(140);
        $('.zamokSkladnyie img').attr('src', 'img/furnityra/17.jpg');
    }
}
//  ============================= //

// ТАБ ФУРНИТУРА цена
function setFurnituraPrice() {
    // тип полотна
    var type = $('#TYPE_BAFFLE_ID').val();

    if (type == 1) {
        var razdvizhnyie = parseInt($('#furnitura-tab .razdvizhnyie-mehanizmyi .price').text());
        var mehanizm = parseInt($('#furnitura-tab .mehanizm-sinhronizatsii .price').text());
        var napravlyayuschie = parseInt($('#furnitura-tab .napravlyayuschie .price').text());
        var vidKrepleniyaNapravlyayuschey = parseInt($('#furnitura-tab .vidKrepleniyaNapravlyayuschey .price').text());
        var povodok = parseInt($('#furnitura-tab .povodok .price').text());
        // есть акс
        var dovodchik = 0;
        var dekorativnayaPlankaDlyaProfilya = 0;
        var schetochnyiyUplotnitel = 0;
        var rakovina = 0;
        var zamok = 0;
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            dovodchik = parseInt($('#furnitura-tab .dovodchik .price').text());
            dekorativnayaPlankaDlyaProfilya = parseInt($('#furnitura-tab .dekorativnayaPlankaDlyaProfilya .price').text());
            schetochnyiyUplotnitel = parseInt($('#furnitura-tab .schetochnyiyUplotnitel .price').text());
            rakovina = parseInt($('#furnitura-tab .rakovina .price').text());
            zamok = parseInt($('#furnitura-tab .zamok .price').text());
        }
        $('#furnitura-tab .furnitura-price .price').text(razdvizhnyie + mehanizm + napravlyayuschie + vidKrepleniyaNapravlyayuschey + povodok + dovodchik + dekorativnayaPlankaDlyaProfilya + schetochnyiyUplotnitel + rakovina + zamok);
    } else if (type == 3 || type == 2) {
        var setSkladnyieMehanizmyi = parseInt($('#furnitura-tab .setSkladnyieMehanizmyi .price').text());
        var petli = parseInt($('#furnitura-tab .petli .price').text());
        var napravlyayuschie = parseInt($('#furnitura-tab .napravlyayuschie .price').text());
        var vidKrepleniya = parseInt($('#furnitura-tab .vidKrepleniya .price').text());
        // есть акс
        var dekorativnayaPlankaDlyaProfilya = 0;
        var schetochnyiyUplotnitel = 0;
        var rakovina = 0;
        var kreplenieRuchki = 0;
        var zamokSkladnyie = 0;

        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            var dekorativnayaPlankaDlyaProfilya = parseInt($('#furnitura-tab .dekorativnayaPlankaDlyaProfilya .price').text());
            var schetochnyiyUplotnitel = parseInt($('#furnitura-tab .schetochnyiyUplotnitel .price').text());
            var rakovina = parseInt($('#furnitura-tab .rakovina .price').text());
            var kreplenieRuchki = parseInt($('#furnitura-tab .kreplenieRuchki .price').text());
            var zamokSkladnyie = parseInt($('#furnitura-tab .zamokSkladnyie .price').text());
        }

        $('#furnitura-tab .furnitura-price .price').text(setSkladnyieMehanizmyi + petli + napravlyayuschie + vidKrepleniya + dekorativnayaPlankaDlyaProfilya + schetochnyiyUplotnitel + rakovina + kreplenieRuchki + zamokSkladnyie);
    } else if (type == 4) {
        var nozhki = parseInt($('#furnitura-tab .nozhki .price').text());
        var stoyki = parseInt($('#furnitura-tab .stoyki .price').text());
        var tipSoedineniyaPoloten = parseInt($('#furnitura-tab .tipSoedineniyaPoloten .price').text());
        $('#furnitura-tab .furnitura-price .price').text(nozhki + stoyki + tipSoedineniyaPoloten);
    }
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
            SelectKarkasEnd(111, 'Высота: до 2.6 м, Паз: 8.5 мм, Cтекло: 4,5 мм', 'Euroshop', 'http://pavel.artultra.ru/karkas/Euroshop.png', 14.5, 6, 36, 30);
        }
    }

    ifEmptyCarcas();
    //  ============================= //

    // ТАБ ПРОФИЛЬ если перемычки пусти //
    function ifEmptyPeremuchka() {
        if (getFromData('vertikalnue-pereochki-name') == '') {
            if (getFromData('karkas-name') == 'Tur') {
                SelectPeremyichkaVERTIKALNUE('TUR', 'http://pavel.artultra.ru/karkas/Tur.png', 'Высота: до 2.6 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1101');
            } else if (getFromData('karkas-name') == 'Euroshop') {
                SelectPeremyichkaVERTIKALNUE('Euroshop', 'http://pavel.artultra.ru/karkas/Euroshop.png', 'Высота: до 2.6 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1101');
            } else if (getFromData('karkas-name') == 'EuroshopLite') {
                SelectPeremyichkaVERTIKALNUE('EuroshopLite', 'http://pavel.artultra.ru/karkas/EuroshopLite.png', 'Высота: до 2 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1101');
            } else if (getFromData('karkas-name') == 'Optimax2') {
                SelectPeremyichkaVERTIKALNUE('Optimax2', 'http://pavel.artultra.ru/karkas/Optimax2.png', 'Высота: до 5 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '3110');
            } else if (getFromData('karkas-name') == 'Standart') {
                SelectPeremyichkaVERTIKALNUE('Standart', 'http://pavel.artultra.ru/karkas/Standart.png', 'Высота: до 2.8 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '2029');
            } else if (getFromData('karkas-name') == 'MobyLight') {
                SelectPeremyichkaVERTIKALNUE('MobyLight', 'http://pavel.artultra.ru/karkas/MobyLight.png', 'Высота: до 3 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1669');
            } else if (getFromData('karkas-name') == 'Optima' || name == 'OptimaLite') {
                SelectPeremyichkaVERTIKALNUE('Optima', 'http://pavel.artultra.ru/karkas/Optima.png', 'Высота: до 5 м, Паз: 8.5 мм, Cтекло: 4,5 мм, Глухие панели: до 16 мм', '2135');
            } else if (getFromData('karkas-name') == 'Base') {
                SelectPeremyichkaVERTIKALNUE('Base', 'http://pavel.artultra.ru/karkas/Base.png', 'Высота: до 4 м, Cтекло – 5-8 мм, Глухие панели: до 12,5 мм', '2874');
            } else if (getFromData('karkas-name') == 'Statusx1') {
                SelectPeremyichkaVERTIKALNUE('Statusx1', 'http://pavel.artultra.ru/karkas/Statusx1.png', 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 13 мм', '2702');
            } else if (getFromData('karkas-name') == 'Statusx2') {
                SelectPeremyichkaVERTIKALNUE('Statusx2', 'http://pavel.artultra.ru/karkas/Statusx2.png', 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 12,5 мм', '3446');
            } else if (getFromData('karkas-name') == 'StandartStoika') {
                SelectPeremyichkaVERTIKALNUE('StandartStoika', 'http://pavel.artultra.ru/karkas/StandartStoika.png', 'Высота: до 3 м, Паз: 8,5 мм, Cтекло: 4,5 мм, Глухие панели: до 8,5 мм', '1915');
            }
        }
        if (getFromData('horizontal-pereochki-name') == '') {
            if (getFromData('karkas-name') == 'Tur') {
                SelectHorizontalPeremochki('TUR', 'http://pavel.artultra.ru/karkas/Tur.png', 'Высота: до 2.2 м, Паз: 5.5 мм, Cтекло: 4 мм', '810');
            } else if (getFromData('karkas-name') == 'Euroshop') {
                SelectHorizontalPeremochki('Euroshop', 'http://pavel.artultra.ru/karkas/Euroshop.png', 'Высота: до 2.6 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1101');
            } else if (getFromData('karkas-name') == 'EuroshopLite') {
                SelectHorizontalPeremochki('EuroshopLite', 'http://pavel.artultra.ru/karkas/EuroshopLite.png', 'Высота: до 2 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1101');
            } else if (getFromData('karkas-name') == 'Optimax2') {
                SelectHorizontalPeremochki('Optimax2', 'http://pavel.artultra.ru/karkas/Optimax2.png', 'Высота: до 5 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '3110');
            } else if (getFromData('karkas-name') == 'Standart') {
                SelectHorizontalPeremochki('Standart', 'http://pavel.artultra.ru/karkas/Standart.png', 'Высота: до 2.8 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '2029');
            } else if (getFromData('karkas-name') == 'MobyLight') {
                SelectHorizontalPeremochki('MobyLight', 'http://pavel.artultra.ru/karkas/MobyLight.png', 'Высота: до 3 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1669');
            } else if (getFromData('karkas-name') == 'Optima' || name == 'OptimaLite') {
                SelectHorizontalPeremochki('Optima', 'http://pavel.artultra.ru/karkas/Optima.png', 'Высота: до 5 м, Паз: 8.5 мм, Cтекло: 4,5 мм, Глухие панели: до 16 мм', '2135');
            } else if (getFromData('karkas-name') == 'Base') {
                SelectHorizontalPeremochki('Base', 'http://pavel.artultra.ru/karkas/Base.png', 'Высота: до 4 м, Cтекло – 5-8 мм, Глухие панели: до 12,5 мм', '2874');
            } else if (getFromData('karkas-name') == 'Statusx1') {
                SelectHorizontalPeremochki('Statusx1', 'http://pavel.artultra.ru/karkas/Statusx1.png', 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 13 мм', '2702');
            } else if (getFromData('karkas-name') == 'Statusx2') {
                SelectHorizontalPeremochki('Statusx2', 'http://pavel.artultra.ru/karkas/Statusx2.png', 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 12,5 мм', '3446');
            } else if (getFromData('karkas-name') == 'StandartStoika') {
                SelectHorizontalPeremochki('StandartStoika', 'http://pavel.artultra.ru/karkas/StandartStoika.png', 'Высота: до 3 м, Паз: 8,5 мм, Cтекло: 4,5 мм, Глухие панели: до 8,5 мм', '1915');
            }
        }
    }

    ifEmptyPeremuchka();
    //  ============================= //

    // ТАБ ПРОФИЛЬ каркас подсчет цены //
    function carcasPrice() {
        if (getFromData('karkas-name') == 'Tur') {
            SelectKarkasEnd(94, 'Высота: до 2.2 м, Паз: 5.5 мм, Cтекло: 4 мм', 'Tur', 'http://pavel.artultra.ru/karkas/Tur.png', 13, 20, 22, 0);
        } else if (getFromData('karkas-name') == 'Euroshop') {
            SelectKarkasEnd(111, 'Высота: до 2.6 м, Паз: 8.5 мм, Cтекло: 4,5 мм', 'Euroshop', 'http://pavel.artultra.ru/karkas/Euroshop.png', 14.5, 6, 36, 30);
        } else if (getFromData('karkas-name') == 'EuroshopLite') {
            SelectKarkasEnd(89, 'Высота: до 2 м, Паз: 8.5 мм, Cтекло: 4,5 мм', 'EuroshopLite', 'http://pavel.artultra.ru/karkas/EuroshopLite.png', 14.5, 6, 36, 30);
        } else if (getFromData('karkas-name') == 'Optimax2') {
            SelectKarkasEnd(415, 'Высота: до 5 м, Паз: 8.5 мм, Cтекло: 4,5 мм', 'Optimax2', 'http://pavel.artultra.ru/karkas/Optimax2.png', 17, 6, 53, 30);
        } else if (getFromData('karkas-name') == 'Standart') {
            SelectKarkasEnd(266, 'Высота: до 2.8 м, Паз: 8.5 мм, Cтекло: 4,5 мм', 'Standart', 'http://pavel.artultra.ru/karkas/Standart.png', 14.5, 6.5, 35, 30);
        } else if (getFromData('karkas-name') == 'MobyLight') {
            SelectKarkasEnd(183, 'Высота: до 3 м, Паз: 8.5 мм, Cтекло: 4,5 мм', 'MobyLight', 'http://pavel.artultra.ru/karkas/MobyLight.png', 14.5, 7.2, 24, 30);
        } else if (getFromData('karkas-name') == 'Optima' || name == 'OptimaLite') {
            SelectKarkasEnd(272, 'Высота: до 5 м, Паз: 8.5 мм, Cекло: 4,5 мм, Глухие панели: до 16 мм', 'Optima', 'http://pavel.artultra.ru/karkas/Optima.png', 14.5, 6, 53, 30);
        } else if (getFromData('karkas-name') == 'Base') {
            SelectKarkasEnd(427, 'Высота: до 4 м, Cтекло – 5-8 мм, Глухие панели: до 12,5 мм', 'Base', 'http://pavel.artultra.ru/karkas/Base.png', 15, 0, 33);
        } else if (getFromData('karkas-name') == 'Statusx1') {
            SelectKarkasEnd(415, 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 13 мм', 'Statusx1', 'http://pavel.artultra.ru/karkas/Statusx1.png', 14, 2.5, 27);
        } else if (getFromData('karkas-name') == 'Statusx2') {
            SelectKarkasEnd(525, 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 12,5 мм', 'Statusx2', 'http://pavel.artultra.ru/karkas/Statusx2.png', 14, 2.5, 27);
        } else if (getFromData('karkas-name') == 'StandartStoika') {
            SelectKarkasEnd(216, 'Высота: до 3 м, Паз: 8,5 мм, Cтекло: 4,5 мм, Глухие панели: до 8,5 мм', 'StandartStoika', 'http://pavel.artultra.ru/karkas/StandartStoika.png', 14.5, 8, 35, 30);
        } else if (('karkas-name') == 'OptimaLite') {
            SelectKarkasEnd(187, 'Высота: до 2,8 м, Паз: 8,5 мм, Cтекло: 4,5 мм, Глухие панели: до 16 мм', 'OptimaLite', 'http://pavel.artultra.ru/karkas/OptimaLite.png', 14.5, 9, 53, 30);
        }
        $('#KARKAS-BLOCK img').attr('src', getFromData('karkas-img'));
        $('#KARKAS-NAME').text(getFromData('karkas-name'));
        $('#KARKAS-INFO').text(getFromData('karkas-info'));
    }

    carcasPrice();
    //  ============================= //

    // ТАБ ПРОФИЛЬ Загрузка всех цветов уплотнителей по профилю //
    function loadColorUplotnitelya() {
        if (getFromData('karkas-tsvet-uplotnitelya') == '') {
            $("#karkas-tsvet-uplotnitelya").empty();
            var karkas_name = getFromData('karkas-name');
            if (karkas_name == 'Tur') {
                $("#karkas-tsvet-uplotnitelya").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Прозрачный">Прозрачный</option>'));
            } else if (karkas_name == 'Statusx1' || karkas_name == 'Statusx2' || karkas_name == 'Optimax2') {
                $("#karkas-tsvet-uplotnitelya").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Cерый">Cерый</option>'));
            } else if (karkas_name == 'StandartStoika' || karkas_name == 'OptimaLite' || karkas_name == 'Standart' || karkas_name == 'Euroshop' || karkas_name == 'EuroshopLite' || karkas_name == 'MobyLight' || karkas_name == 'Optima') {
                $("#karkas-tsvet-uplotnitelya").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Серый">Серый</option>' +
                    '<option value="Прозрачный">Прозрачный</option>' +
                    '<option value="Белый">Белый</option>'));
            } else if (karkas_name == 'Base') {
                $("#karkas-tsvet-uplotnitelya").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Белый">Белый</option>' +
                    '<option value="Темно-серый">Темно-серый</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Серый">Серый</option>'));
            }

        }
    }

    loadColorUplotnitelya();
    //  ============================= //

    // ТАБ ПРОФИЛЬ Загрузка всех цветов заглушки по профилю //
    function loadZaglushki() {
        if (getFromData('karkas-tsvet-zaglushki') == '') {
            $("#karkas-tsvet-zaglushki").empty();
            var karkas_name = getFromData('karkas-name');
            if (karkas_name == 'Euroshop' || karkas_name == 'EuroshopLite') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Серый" >Серый</option>' +
                    '<option value="Белый">Белый</option>' +
                    '<option value="Черный">Черный</option>'));
            } else if (karkas_name == 'Optimax2') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Cерый" >Серый</option>'));
            } else if (karkas_name == 'Standart') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Серый">Серый</option>' +
                    '<option value="Белый" >Белый</option>'));
            } else if (karkas_name == 'MobyLight') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Серый" >Серый</option>'));
            } else if (karkas_name == 'Optima') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Серый" >Серый</option>'));
            } else if (karkas_name == 'Base') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="НЕТ" >Нет</option>'));
            } else if (karkas_name == 'Statusx1') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Серый" >Серый</option>'));
            } else if (karkas_name == 'Statusx2') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Серый" >Серый</option>'));
            } else if (karkas_name == 'StandartStoika') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Серый">Серый</option>' +
                    '<option value="Белый" >Белый</option>'));
            } else if (karkas_name == 'OptimaLite') {
                $("#karkas-tsvet-zaglushki").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Серый" >Серый</option>'));
            }
        }
    }

    loadZaglushki();
    //  ============================= //

    // ТАБ ПРОФИЛЬ Загрузка всех цветов заглушки торцевой по профилю //
    function loadZaglushkiTortsevoy() {
        if (getFromData('karkas-tsvet-zaglushki-tortsevoy') == '') {
            $("#karkas-tsvet-zaglushki-tortsevoy").empty();
            var karkas_name = getFromData('karkas-name');
            if (karkas_name == 'Euroshop' || karkas_name == 'EuroshopLite') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Белый">Белый</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Серый" >Серый</option>'));
            } else if (karkas_name == 'Optimax2') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Белый">Белый</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Cерый" >Серый</option>'));
            } else if (karkas_name == 'Standart') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Серый">Серый</option>' +
                    '<option value="Белый" >Белый</option>'));
            } else if (karkas_name == 'MobyLight') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Серый">Серый</option>' +
                    '<option value="Белый" >Белый</option>'));
            } else if (karkas_name == 'Optima') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Серый">Серый</option>' +
                    '<option value="Белый" >Белый</option>'));
            } else if (karkas_name == 'Base') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="НЕТ" >Нет</option>' +
                    ''));
            } else if (karkas_name == 'Statusx1') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="НЕТ" >Нет</option>' +
                    ''));
            } else if (karkas_name == 'Statusx2') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="НЕТ" >Нет</option>' +
                    ''));
            } else if (karkas_name == 'StandartStoika') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="">Нет</option>' +
                    '<option value="Черный">Черный</option>' +
                    '<option value="Белый" >Белый</option>'));
            } else if (karkas_name == 'OptimaLite') {
                $("#karkas-tsvet-zaglushki-tortsevoy").prepend($('' +
                    '<option value="НЕТ" >Нет</option>'));
            }
        }
    }

    loadZaglushkiTortsevoy();
    //  ============================= //

    // ТАБ ПРОФИЛЬ Загрузка всех видов крепления по профилю //
    function loadVidKrepleniya() {
        if (getFromData('karkas-vid-krepleniya') == '') {
            $("#karkas-vid-krepleniya").empty();
            var karkas_name = getFromData('karkas-name');
            if (karkas_name == 'Euroshop' || karkas_name == 'EuroshopLite') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>' +
                    '<option value="ДА">ДА + 186 руб.</option>'));
            } else if (karkas_name == 'Optimax2') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>'));
            } else if (karkas_name == 'Standart') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>' +
                    ''));
            } else if (karkas_name == 'MobyLight') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>' +
                    '<option value="ДА">ДА</option>'));
            } else if (karkas_name == 'Optima') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>' +
                    '<option value="ДА">ДА</option>'));
            } else if (karkas_name == 'Base') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>' +
                    '<option value="ДА">ДА</option>'));
            } else if (karkas_name == 'Statusx1') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>' +
                    '<option value="ДА">ДА</option>'));
            } else if (karkas_name == 'Statusx2') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>' +
                    '<option value="ДА">ДА</option>'));
            } else if (karkas_name == 'StandartStoika') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>' +
                    ''));
            } else if (karkas_name == 'OptimaLite') {
                $("#karkas-vid-krepleniya").prepend($('' +
                    '<option value="НЕТ">Нет</option>' +
                    '<option value="ДА">ДА</option>'));
            }
        }
    }

    loadVidKrepleniya();
    //  ============================= //

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

    // ТАБ НАПОЛНЕНИЕ измение наполнения //
    function napolnenieCange() {
        for (var i = 1; i <= 5; i++) {
            var obj = $('*[data-material-el-id="' + i + '"]').find('.napolnenie-el-material').val();
            var el = getFromData('material-' + i + '-type');
            if (obj == '') {
                obj = 0;
            }
            if (obj != el && obj != null) {
                setDataAndText('material-' + i + '-type', obj);
                napolnenieImg(obj, i);
            }
        }
    }

    napolnenieCange();
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
$("#DIAGRAMMA-DIALOG-WINDOW-BTN").click(function (e) {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    if (TYPE_BAFFLE < 4 && TYPE_BAFFLE > 0) {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html($("#DesignScheme" + TYPE_BAFFLE).html());
    }
});

////////////////////////////////////////////////////////////////////////////////////////// Поля в ТАБАХ Профиль Наполнение Фурнитура

// -  вывод цены профиля
function setPriceInProfil() {

    var karkasPrice = checkTheErrorNumber(getFromData('karkas-price'));
    var decorPrice = checkTheErrorNumber(getFromData('decor-price'));
    var vertikalnuePereochkiPrice = checkTheErrorNumber(getFromData('vertikalnue-pereochki-price'));
    var horizontalPereochkiPrice = checkTheErrorNumber(getFromData('horizontal-pereochki-price'));

    var karkasVidKrepleniya = 0;
    if (getFromData('karkas-vid-krepleniya') == 'ДА') {
        karkasVidKrepleniya = 186;
    }

    var res = karkasPrice + decorPrice + vertikalnuePereochkiPrice + horizontalPereochkiPrice + karkasVidKrepleniya;
    $('.TAB-PROFIL-PRICE').text(parseInt(res));
    setDataAndText('data-price-in-profil', parseInt(res));
}
// =


function SelectKarkasEnd(price, text, name, url, uplotnitel, zaglushka, kreplenie, zaglushkavpaz) {
    if (name == 'Tur') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel)) + (kreplenie + zaglushka) * 4);
        SelectHorizontalPeremochki('TUR', 'http://pavel.artultra.ru/karkas/Tur.png', 'Высота: до 2.2 м, Паз: 5.5 мм, Cтекло: 4 мм', '810');
        SelectPeremyichkaVERTIKALNUE('TUR', 'http://pavel.artultra.ru/karkas/Tur.png', 'Высота: до 2.2 м, Паз: 5.5 мм, Cтекло: 4 мм', '810');
    } else if (name == 'Euroshop') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) + parseFloat(zaglushkavpaz)) + (kreplenie + zaglushka) * 4);
        SelectHorizontalPeremochki('Euroshop', 'http://pavel.artultra.ru/karkas/Euroshop.png', 'Высота: до 2.6 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1101');
        SelectPeremyichkaVERTIKALNUE('Euroshop', 'http://pavel.artultra.ru/karkas/Euroshop.png', 'Высота: до 2.6 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1101');
    } else if (name == 'EuroshopLite') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) + parseFloat(zaglushkavpaz)) + (kreplenie + zaglushka) * 4);
        SelectHorizontalPeremochki('EuroshopLite', 'http://pavel.artultra.ru/karkas/EuroshopLite.png', 'Высота: до 2 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1101');
        SelectPeremyichkaVERTIKALNUE('EuroshopLite', 'http://pavel.artultra.ru/karkas/EuroshopLite.png', 'Высота: до 2 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1101');
    } else if (name == 'Optimax2') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) * 2 + parseFloat(zaglushkavpaz)) + (kreplenie + zaglushka) * 4);
        SelectHorizontalPeremochki('Optimax2', 'http://pavel.artultra.ru/karkas/Optimax2.png', 'Высота: до 5 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '3110');
        SelectPeremyichkaVERTIKALNUE('Optimax2', 'http://pavel.artultra.ru/karkas/Optimax2.png', 'Высота: до 5 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '3110');
    } else if (name == 'Standart') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) + parseFloat(zaglushkavpaz)) + (kreplenie + zaglushka) * 4);
        SelectHorizontalPeremochki('Standart', 'http://pavel.artultra.ru/karkas/Standart.png', 'Высота: до 2.8 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '2029');
        SelectPeremyichkaVERTIKALNUE('Standart', 'http://pavel.artultra.ru/karkas/Standart.png', 'Высота: до 2.8 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '2029');
    } else if (name == 'MobyLight') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) + parseFloat(zaglushkavpaz) * 2) + (kreplenie + zaglushka) * 4);
        SelectHorizontalPeremochki('MobyLight', 'http://pavel.artultra.ru/karkas/MobyLight.png', 'Высота: до 3 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1669');
        SelectPeremyichkaVERTIKALNUE('MobyLight', 'http://pavel.artultra.ru/karkas/MobyLight.png', 'Высота: до 3 м, Паз: 8.5 мм, Cтекло: 4,5 мм', '1669');
    } else if (name == 'Optima' || name == 'OptimaLite') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) + parseFloat(zaglushkavpaz) + 55) + (kreplenie + zaglushka) * 4);
        SelectHorizontalPeremochki('Optima', 'http://pavel.artultra.ru/karkas/Optima.png', 'Высота: до 5 м, Паз: 8.5 мм, Cтекло: 4,5 мм, Глухие панели: до 16 мм', '2135');
        SelectPeremyichkaVERTIKALNUE('Optima', 'http://pavel.artultra.ru/karkas/Optima.png', 'Высота: до 5 м, Паз: 8.5 мм, Cтекло: 4,5 мм, Глухие панели: до 16 мм', '2135');
    } else if (name == 'Base') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) * 2) + kreplenie * 4);
        SelectHorizontalPeremochki('Base', 'http://pavel.artultra.ru/karkas/Base.png', 'Высота: до 4 м, Cтекло – 5-8 мм, Глухие панели: до 12,5 мм', '2874');
        SelectPeremyichkaVERTIKALNUE('Base', 'http://pavel.artultra.ru/karkas/Base.png', 'Высота: до 4 м, Cтекло – 5-8 мм, Глухие панели: до 12,5 мм', '2874');
    } else if (name == 'Statusx1') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) * 1) + (kreplenie + zaglushka * 2) * 4);
        SelectHorizontalPeremochki('Statusx1', 'http://pavel.artultra.ru/karkas/Statusx1.png', 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 13 мм', '2702');
        SelectPeremyichkaVERTIKALNUE('Statusx1', 'http://pavel.artultra.ru/karkas/Statusx1.png', 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 13 мм', '2702');
    } else if (name == 'Statusx2') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) * 2) + (kreplenie + zaglushka * 2) * 4);
        SelectHorizontalPeremochki('Statusx2', 'http://pavel.artultra.ru/karkas/Statusx2.png', 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 12,5 мм', '3446');
        SelectPeremyichkaVERTIKALNUE('Statusx2', 'http://pavel.artultra.ru/karkas/Statusx2.png', 'Высота: до 6 м, Паз: 13 мм, Cтекло: 5-10 мм, Глухие панели: до 12,5 мм', '3446');
    } else if (name == 'StandartStoika') {
        price = ((parseInt(getFromData('width')) + (parseInt(getFromData('height')))) * 0.002 * (price + parseFloat(uplotnitel) + (zaglushkavpaz * 2)) + (kreplenie + zaglushka) * 4);
        SelectHorizontalPeremochki('StandartStoika', 'http://pavel.artultra.ru/karkas/StandartStoika.png', 'Высота: до 3 м, Паз: 8,5 мм, Cтекло: 4,5 мм, Глухие панели: до 8,5 мм', '1915');
        SelectPeremyichkaVERTIKALNUE('StandartStoika', 'http://pavel.artultra.ru/karkas/StandartStoika.png', 'Высота: до 3 м, Паз: 8,5 мм, Cтекло: 4,5 мм, Глухие панели: до 8,5 мм', '1915');
    }

    var decorPrice = getFromData('decor-price');
    if (decorPrice == '' || decorPrice == NaN) {
        decorPrice = 0;
    }

    $('#KARKAS-BLOCK img').attr('src', url);
    $('#KARKAS-NAME').text(name);
    $('#KARKAS-INFO').text(text);
    $('#KARKAS-PRICE').text(parseInt(price));
    setDataAndText('karkas-img', url);
    setDataAndText('karkas-name', name);

    setDataAndText('karkas-info', text);
    setDataAndText('karkas-price', parseInt(price));
    setDataAndText('karkas-full-price', parseInt((parseFloat(decorPrice) + price)));
    setPriceInProfil();
}

$(".modal-body").on("click", ".selectKarkasImg", function () {
    // - удаляем наполение профиля
    var g = getFromData('group');
    var p = parseInt($('#TOTAL_PAINTING_ID').val());
    console.log('g', g);
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
// #BTN-KARKAS-SELECTOR
$('#BTN-KARKAS-SELECTOR').click(function () {

    setDataAndText('karkas-tsvet-uplotnitelya', '');

    setDataAndText('karkas-tsvet-zaglushki', '');

    setDataAndText('karkas-tsvet-zaglushki-tortsevoy', '');

    setDataAndText('karkas-vid-krepleniya', '');

    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");

    var hm = getFromData('height');

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
        priceTUR: parseInt(priceTur)
    };
    var templateDataToEuroshop = {
        priceEuroshop: parseInt(priceEuroshop)
    };
    var templateDataToEuroshopLite = {
        priceEuroshopLite: parseInt(priceEuroshopLite)
    };
    var templateDataToOptimax2 = {
        priceOptimax2: parseInt(priceOptimax2)
    };
    var templateDataToOptima = {
        priceOptima: parseInt(priceOptima)
    };
    var templateDataToStandart = {
        priceStandart: parseInt(priceStandart)
    };
    var templateDataToMobyLight = {
        priceMobyLight: parseInt(priceMobyLight)
    };
    var templateDataToOptimaLite = {
        priceOptimaLite: parseInt(priceOptimaLite)
    };
    var templateDataToBase = {
        priceBase: parseInt(priceBase)
    };
    var templateDataToStatusx1 = {
        priceStatusx1: parseInt(priceStatusx1)
    };
    var templateDataToStatusx2 = {
        priceStatusx2: parseInt(priceStatusx2)
    };
    var templateDataToStandartStoika = {
        priceStandartStoika: parseInt(priceStandartStoika)
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
        $.snackbar({content: "Каркасов с такой высотой нет!!! Проверь высоту и полотна."});
    }

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
        priceTUR: parseInt(priceTur)
    };
    var templateDataToEuroshop = {
        priceEuroshop: parseInt(priceEuroshop)
    };
    var templateDataToEuroshopLite = {
        priceEuroshopLite: parseInt(priceEuroshopLite)
    };
    var templateDataToOptimax2 = {
        priceOptimax2: parseInt(priceOptimax2)
    };
    var templateDataToOptima = {
        priceOptima: parseInt(priceOptima)
    };
    var templateDataToStandart = {
        priceStandart: parseInt(priceStandart)
    };
    var templateDataToMobyLight = {
        priceMobyLight: parseInt(priceMobyLight)
    };
    var templateDataToOptimaLite = {
        priceOptimaLite: parseInt(priceOptimaLite)
    };
    var templateDataToBase = {
        priceBase: parseInt(priceBase)
    };
    var templateDataToStatusx1 = {
        priceStatusx1: parseInt(priceStatusx1)
    };
    var templateDataToStatusx2 = {
        priceStatusx2: parseInt(priceStatusx2)
    };
    var templateDataToStandartStoika = {
        priceStandartStoika: parseInt(priceStandartStoika)
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
});
// выбор вертикальных перемычек
function SelectPeremyichkaVERTIKALNUE(name, url, text, price) {

    $('#VERTIKALNUE-PEREMOCHKI-BLOCK img').attr('src', url);

    $('#VERTIKALNUE-PEREMOCHKI-NAME').text(name);

    $('#VERTIKALNUE-PEREMOCHKI-INFO').text(text);

    setDataAndText('vertikalnue-pereochki-img', url);

    setDataAndText('vertikalnue-pereochki-name', name);

    setDataAndText('vertikalnue-pereochki-info', text);

    setDataAndText('vertikalnue-pereochki-price-for-one', parseInt(price));

    var vertikalnue_pereochkicount = parseInt(getFromData('vertikalnue-pereochki-count'));
    var horizontal_pereochkicount = parseInt(getFromData('horizontal-pereochki-count'));
    // if (vertikalnue_pereochkicount == '') {
    //
    //     horizontal_pereochki_count = 0;
    //
    //     $('#tab-profil-v-peremyichki-shtuk').val('0');
    //
    // }
    var uplotnitelPrice = 0;
    var karkasName = getFromData('karkas-name');
    for(var i = 0; i < 5; i++){
        if(karkasName == "Euroshop" || karkasName == "EuroshopLite" || karkasName == "Standart" || karkasName == "MobyLight" || karkasName == "Optima" || karkasName == "OptimaLite" || karkasName == "StandartStoika") {
            if (getFromData('material-' + (i + 1) + '-type') == "LDSP" && getFromData('material-' + (i + 1) + '-tolschina') == "16") {
                uplotnitelPrice = 55;
            }
        }
    }

    if (name == 'TUR') {
        var res = parseInt((getFromData('height') / 1000 * (94 + 13 * 2) + 22 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 22 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'Euroshop') {
        if(uplotnitelPrice == 0){
            uplotnitelPrice = 14.5;
        }
        var res = parseInt((getFromData('height') / 1000 * (111 + uplotnitelPrice * 2) + 36 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 36 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'EuroshopLite') {
        if(uplotnitelPrice == 0){
            uplotnitelPrice = 14.5;
        }
        var res = parseInt((getFromData('height') / 1000 * (89 + uplotnitelPrice * 2) + 36 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 36 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'Standart') {
        if(uplotnitelPrice == 0){
            uplotnitelPrice = 14.5;
        }
        var res = parseInt((getFromData('height') / 1000 * (266 + uplotnitelPrice * 2) + 35 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 35 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'MobyLight') {
        if(uplotnitelPrice == 0){
            uplotnitelPrice = 14.5;
        }
        var res = parseInt((getFromData('height') / 1000 * (176 + uplotnitelPrice * 2 + 30 * 2) + 30 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 30 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'Optima') {
        if(uplotnitelPrice == 0){
            uplotnitelPrice = 14.5;
        }
        var res = parseInt((getFromData('height') / 1000 * (272 + uplotnitelPrice * 2) + 53 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 53 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'OptimaLite') {
        if(uplotnitelPrice == 0){
            uplotnitelPrice = 14.5;
        }
        var res = parseInt((getFromData('height') / 1000 * (187 + uplotnitelPrice * 2) + 53 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 53 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'StandartStoika') {
        if(uplotnitelPrice == 0){
            uplotnitelPrice = 14.5;
        }
        var res = parseInt((getFromData('height') / 1000 * (216 + uplotnitelPrice * 2) + 35 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 35 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'Optimax2') {
        var res = parseInt((getFromData('height') / 1000 * (555 + 17 * 4) + 53 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 53 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'Base') {
        var res = parseInt((getFromData('height') / 1000 * (540 + 15 * 4) + 33 * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 33 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'Statusx1') {
        var res = parseInt((getFromData('height') / 1000 * (395 + 14 * 2) + (27 + 2.5 * 2) * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 27 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    } else if (name == 'Statusx2') {
        var res = parseInt((getFromData('height') / 1000 * (490 + 14 * 4) + (27 + 2.5 * 2) * 2) * getFromData('vertikalnue-pereochki-count'));
        if(vertikalnue_pereochkicount > 0 && horizontal_pereochkicount > 0){
            var addKreplenie = parseInt(vertikalnue_pereochkicount * horizontal_pereochkicount * 27 * 2);
        }else{
            var addKreplenie = 0;
        }
        var result = res + addKreplenie;
    }

    $('#VERTIKALNUE-PEREMOCHKI-PRICE').text(parseInt(result));
    setDataAndText('vertikalnue-pereochki-price', parseInt(result));

    setPriceInProfil();

}

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
        priceTUR: parseInt(priceTur)
    };
    var templateDataToEuroshop = {
        priceEuroshop: parseInt(priceEuroshop)
    };
    var templateDataToEuroshopLite = {
        priceEuroshopLite: parseInt(priceEuroshopLite)
    };
    var templateDataToOptimax2 = {
        priceOptimax2: parseInt(priceOptimax2)
    };
    var templateDataToOptima = {
        priceOptima: parseInt(priceOptima)
    };
    var templateDataToStandart = {
        priceStandart: parseInt(priceStandart)
    };
    var templateDataToMobyLight = {
        priceMobyLight: parseInt(priceMobyLight)
    };
    var templateDataToOptimaLite = {
        priceOptimaLite: parseInt(priceOptimaLite)
    };
    var templateDataToBase = {
        priceBase: parseInt(priceBase)
    };
    var templateDataToStatusx1 = {
        priceStatusx1: parseInt(priceStatusx1)
    };
    var templateDataToStatusx2 = {
        priceStatusx2: parseInt(priceStatusx2)
    };
    var templateDataToStandartStoika = {
        priceStandartStoika: parseInt(priceStandartStoika)
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
});
// выбор горизонтальных перемычек
function SelectHorizontalPeremochki(name, url, text, price) {
    $('#HORIZONTAL-PEREMOCHKI-BLOCK img').attr('src', url);
    $('#HORIZONTAL-PEREMOCHKI-NAME').text(name);
    $('#HORIZONTAL-PEREMOCHKI-INFO').text(text);
    setDataAndText('horizontal-pereochki-img', url);
    setDataAndText('horizontal-pereochki-name', name);
    setDataAndText('horizontal-pereochki-info', text);
    setDataAndText('horizontal-pereochki-price-for-one', parseInt(price));
    var horizontal_pereochki_count = getFromData('horizontal-pereochki-count');
    // if (horizontal_pereochki_count == '') {
    //     horizontal_pereochki_count = 0;
    //     $('#tab-profil-peremyichki-horizontal-shtuk').val('0');
    // }
    if (name == 'TUR') {
        var res = parseInt((getFromData('width') / 1000 * (94 + 13 * 2) + 22 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'Euroshop') {
        var res = parseInt((getFromData('width') / 1000 * (111 + 14.5 * 2) + 36 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'EuroshopLite') {
        var res = parseInt((getFromData('width') / 1000 * (89 + 14.5 * 2) + 36 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'Standart') {
        var res = parseInt((getFromData('width') / 1000 * (266 + 14.5 * 2) + 35 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'MobyLight') {
        var res = parseInt((getFromData('width') / 1000 * (176 + 14.5 * 2 + 30 * 2) + 24 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'Optima') {
        var res = parseInt((getFromData('width') / 1000 * (272 + 14.5 * 2) + 53 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'OptimaLite') {
        var res = parseInt((getFromData('width') / 1000 * (187 + 14.5 * 2) + 53 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'StandartStoika') {
        var res = parseInt((getFromData('width') / 1000 * (216 + 14.5 * 2) + 35 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'Optimax2') {
        var res = parseInt((getFromData('width') / 1000 * (555 + 17 * 4) + 53 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'Base') {
        var res = parseInt((getFromData('width') / 1000 * (540 + 15 * 4) + 33 * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'Statusx1') {
        var res = parseInt((getFromData('width') / 1000 * (395 + 14 * 2) + (27 + 2.5 * 2) * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    } else if (name == 'Statusx2') {
        var res = parseInt((getFromData('width') / 1000 * (490 + 14 * 4) + (27 + 2.5 * 2) * 2) * horizontal_pereochki_count);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(parseInt(res));
        setDataAndText('horizontal-pereochki-price', parseInt(res));
    }
}
//////////////////////////////////////////////////////////////////////////////////////////


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
    SelectPeremyichkaVERTIKALNUE(getFromData('vertikalnue-pereochki-name'), getFromData('vertikalnue-pereochki-img'), getFromData('vertikalnue-pereochki-info'), getFromData('horizontal-pereochki-price-for-one'));
    $('.TAB-PROFIL-PRICE').text(parseInt(getFromData('karkas-price')) + parseInt(getFromData('vertikalnue-pereochki-price')) + parseInt(getFromData('horizontal-pereochki-price')));
    paintingInDiadramma();
});

$("#tab-profil-peremyichki-horizontal-shtuk").bind('input', function () {
    setDataAndText('horizontal-pereochki-count', $(this).val());
    SelectHorizontalPeremochki(getFromData('horizontal-pereochki-name'), getFromData('horizontal-pereochki-img'), getFromData('horizontal-pereochki-info'), getFromData('horizontal-pereochki-price-for-one'));
    $('.TAB-PROFIL-PRICE').text(parseInt(getFromData('karkas-price')) + parseInt(getFromData('vertikalnue-pereochki-price')) + parseInt(getFromData('horizontal-pereochki-price')));
    paintingInDiadramma();
});

$("#TOTAL_PAINTING_ID").bind('blur', function () {
    TOTAL_PAINTING = parseInt($(this).val());
});
$("#MOVABLE_PAINTING_ID").bind('input', function () {
    MOVABLE_PAINTING = parseInt($(this).val());
});
$("#NUMBER_SETS_ID").bind('input', function () {
    NUMBER_SETS = parseInt($(this).val());
});
$("#HIGHT_SETS_ID, #WIDTH_SETS_ID").bind('input', function () {
    DandDStart()
});
// $("#WIDTH_SETS_ID").bind('input', function(){
//     WIDTH_SETS = parseInt($(this).val());
// });
$("#TYPE_BAFFLE_ID").change(function () {
    TYPE_BAFFLE = parseInt($(this).val());
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
$('#karkas-vid-krepleniya').change(function () {
    setDataAndText('karkas-vid-krepleniya', $("#karkas-vid-krepleniya").val())
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
    loop1: for (i = 1; i <= 5; i++) {
        var type = getFromData('material-' + i + '-type');
        if (type == '') {
            $(".add-material-block-past").append('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 napolnenie-el" data-material-el-id="' + i + '">' + $(".napolnenie-el-set").html() + '</div>');
            setDataAndText('material-' + i + '-type', 0);
            break loop1;
        }
    }
    addWElNapolnenieToFive();
    addWHElNapolnenie();
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
    setFurnituraPrice();
    globalPrice();
    TableForInfo();
    setHeightDandDEl();
    setWidthDandDEl();
}, 2500);

window.addEventListener('input', myEfficientFn);

$('#top-furnitura-tab').click(function () {
    loadStoyki();
});
// test

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
