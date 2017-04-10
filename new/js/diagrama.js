var diagrama = {



    // инициализация
    start: function () {
        diagrama.events();
    },



    // события
    events: function () {
        $('#HIGHT_SETS_ID, #WIDTH_SETS_ID, #TOTAL_PAINTING_ID, #MOVABLE_PAINTING_ID, #NUMBER_OF_DUPLICATOR_ID').on("change", function () {
            diagrama.rules();
        });
        $("#tab-profil-vyisota").bind('input', function () {
            $('*[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').attr('data-height', $('#tab-profil-vyisota').val());
            setHeightDandDEl();
        });
        $( '#PAINTING-DIAGRAMMA-BLOCK-HS' ).click(function () {
            $( "#PAINTING-DIAGRAMMA-BLOCK" ).slideToggle( "slow" );
        });
        $('#PAINTING-DIAGRAMMA').on( "click resize", ".PAINTING-DIAGRAMMA-EL", function(event,ui) {
            var id = parseInt( $( this ).data()['id'] );
            $('.PAINTING-DIAGRAMMA-EL').css({'z-index':'0'});
            $('*[data-id="' + id + '"]').css({'z-index':'1000'});
            $('.BAFFLE_SEKECTOR_CLASS').val(id);
            $(".BAFFLE_SEKECTOR_CLASS option[value=" + id + "]").trigger('change');
            var heightEvent = event['currentTarget']['clientHeight'];
            $('#tab-profil-vyisota').val(heightEvent*10);
            $("#tab-profil-vyisota").trigger('change');
            var widthEvent = event['currentTarget']['clientWidth'];
            $('#tab-profil-shirina').val(widthEvent*10);
            $("#tab-profil-shirina").trigger('change');
            $( '*' ).removeClass( 'used' );
            $( this ).addClass( 'used' );
            $('.resizeY').remove();
            $('.resizeX').remove();
            var p = parseInt( $('#TOTAL_PAINTING_ID').val() );
            for ( i=0; i<=p; i++){
                $('.PAINTING-DIAGRAMMA-EL').eq( i ).append('<div class="resizeY">');
                $('.PAINTING-DIAGRAMMA-EL').eq( i ).append('<div class="resizeX">');
            }
            $('.resizeY').append('<div class="arrowTop" onclick="diagrama.arrowTop(' + id + ')">');
            $('.resizeY').append('<div class="arrowBottom" onclick="diagrama.arrowBottom(' + id + ')">');
            $('.resizeY').append('<div class="arrowY1">');
            $('.resizeY').append('<div class="arrowY2">');
            $('.resizeY').append('<div class="indicatorY">' + parseInt($('.resizeY').height() + 2) );
            $('.resizeX').append('<div class="arrowLeft" onclick="diagrama.arrowLeft(' + id + ')">');
            $('.resizeX').append('<div class="arrowRight" onclick="diagrama.arrowRight(' + id + ')">');
            $('.resizeX').append('<div class="arrowX1">');
            $('.resizeX').append('<div class="arrowX2">');
            $('.resizeX').append('<div class="indicatorX">' + parseInt($('.resizeX').width() + 2) );
        });
        $('#POLOVINCHATAYA_KOL').bind('input', function() {
            var type = $('#TYPE_BAFFLE_ID').val();
            if (type != 2) {
                parent.message("Использование половинчатой створки невозможно сданным типом!");
                $('#POLOVINCHATAYA_KOL').val('');
            } else {
                var p = $('#TOTAL_PAINTING_ID').val();
                var mp = $('#MOVABLE_PAINTING_ID').val();
                var h = $('#HIGHT_SETS_ID').val();
                var w = $('#WIDTH_SETS_ID').val();
                if (p === '' || mp === '' || h === '' || w === '') {
                    parent.message("Для использования половинчатой створки заполните поля: Всего полотен, Подвижные полотна, Высота, Ширина!");
                    $('#POLOVINCHATAYA_KOL').val('');
                } else {
                    p = checkTheErrorNumber(p);
                    mp = checkTheErrorNumber(mp);
                    var ps = checkTheErrorNumber($('#POLOVINCHATAYA_KOL').val());
                    //if ((p - mp) <= ps) {
                        //parent.message("Для использования половинчатой створки должно быть: полотен - подвижных полотен > половинчатых створок!");
                        //$('#POLOVINCHATAYA_KOL').val('');
                    //} else {
                        w = checkTheErrorNumber(w);
                        h = checkTheErrorNumber(h);
                        var widthForOnePS = (w / p) / 2;
                        var widthForOneOtherP = (w - (widthForOnePS * ps)) / (p - ps);
                        for (i = 1; i <= p; i++) {
                            if (i == 1) {
                                $('#tab-profil-shirina').val(widthForOnePS);
                                $("#NUMBER_OF_DUPLICATOR_ID").val(0);
                            }
                            if (i <= (p - ps)) {
                                $('*[data-id="' + i + '"]').attr('data-width', widthForOneOtherP);
                                $('*[data-id="' + i + '"]').attr("data-group", 1);
                            } else {
                                $('*[data-id="' + i + '"]').attr('data-width', widthForOnePS);
                                $('*[data-id="' + i + '"]').attr("data-group", 0);
                            }
                            $('*[data-id="' + i + '"]').attr('data-height', h);
                            $('#tab-profil-vyisota').val(h);
                        }
                        diagrama.rules();
                    //}
                }
            }
            nfurnitura.loadFurnitura();
            $('#furnitura-tab .price').text(0);
        });
        window.onkeydown = function () { diagrama.rules(); };
        window.oninput = function () { diagrama.rules(); };
        window.onresize = function () { diagrama.rules(); };
        window.onclick = function () { diagrama.rules(); };
    },



    // отрисовка блоков
    painting: function () {
        $('#PAINTING-DIAGRAMMA').html("");
        setTimeout(function(){
            var TYPE_BAFFLE_ID = parseInt($("#TYPE_BAFFLE_ID").val());
            if ($('#TOTAL_PAINTING_ID').val() >= $('#MOVABLE_PAINTING_ID').val()) {
                for (i = 1; i <= parseInt($('#TOTAL_PAINTING_ID').val()); i++) {
                    var type = "";
                    if (i <= $('#MOVABLE_PAINTING_ID').val()) {
                        type = "M";
                    } else {
                        type = "S";
                    }
                    var top = 212;
                    var left = 440 + (50 * i);
                    $('#PAINTING-DIAGRAMMA').append('<div class="drag PAINTING-DIAGRAMMA-EL" style="left:' + left + 'px;top:' + top + 'px;"' +
                        'data-id="' + i + '"' +
                        'data-type="' + type + '"' +
                        'data-height=""' +
                        'data-width=""' +
                        'data-price=""' +
                        'data-price-in-profil=""' +
                        'data-price-in-napolnenii=""' +
                        'data-area=""' +
                        'data-decor-price=""' +
                        'data-group="0"' +
                        'data-karkas-doubleFilling=""' +
                        'data-karkas-thicknessSteklo=""' +
                        'data-karkas-thicknessMaterials=""' +
                        'data-karkas-img=""' +
                        'data-karkas-id=""' +
                        'data-karkas-name=""' +
                        'data-karkas-info=""' +
                        'data-karkas-tsvet-uplotnitelya=""' +
                        'data-karkas-tsvet-zaglushki=""' +
                        'data-karkas-tsvet-zaglushki-tortsevoy=""' +
                        'data-karkas-vid-krepleniya=""' +
                        'data-karkas-tsvet-uplotnitelya-price="0"' +
                        'data-karkas-tsvet-zaglushki-price="0"' +
                        'data-karkas-tsvet-zaglushki-tortsevoy-price="0"' +
                        'data-karkas-vid-krepleniya-price="0"' +
                        'data-karkas-price="0"' +
                        'data-karkas-price2="0"' +
                        'data-karkas-priceK="0"' +
                        'data-karkas-full-price="0"' +
                        'data-vertikalnue-pereochki-id=""' +
                        'data-vertikalnue-pereochki-count=""' +
                        'data-vertikalnue-pereochki-img=""' +
                        'data-vertikalnue-pereochki-name=""' +
                        'data-vertikalnue-pereochki-price="0"' +
                        'data-vertikalnue-pereochki-price-for-one="0"' +
                        'data-horizontal-pereochki-id=""' +
                        'data-horizontal-pereochki-count=""' +
                        'data-horizontal-pereochki-img=""' +
                        'data-horizontal-pereochki-name=""' +
                        'data-horizontal-pereochki-price="0"' +
                        'data-horizontal-pereochki-price-for-one="0"' +
                        'data-furnitura-razdvizh-mehanizm="Standart до 40 кг"' +
                        'data-furnitura-dovodchik=""' +
                        'data-furnitura-skladnoi-mehanizm="B-100 до 80 кг (Degon, Польша)"' +
                        'data-material-1-id="0"' +
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
                        'data-material-2-id="0"' +
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
                        'data-material-3-id="0"' +
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
                        'data-material-4-id="0"' +
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
                        'data-material-5-id="0"' +
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
                        '</div><div class="hideBlock">price = <span class="price"></span></div>');
                }
                diagrama.DandDStart();
                calcNow();
            }
            SET_BAFFLE_SEKECTOR();
        }, 100);
    },



    // правила
    rules: function () {
        var painting = $('#TOTAL_PAINTING_ID').val();            // всего полотен
        var height = $('#HIGHT_SETS_ID').val();                  // общая высота
        var widht = $('#WIDTH_SETS_ID').val();                   // общая ширина
        var painting_movable = $('#MOVABLE_PAINTING_ID').val();  // подвижных полотен
        var tab_profil_vyisota = $('#tab-profil-vyisota').val(); // высота профиля
        var tab_profil_shirina = $('#tab-profil-shirina').val(); // ширина профиля
        var this_id = getFromData('id');                         // текущий id
        var this_width = $('*[data-id="' + this_id + '"]').attr('data-width'); // текущая ширина
        var paintingThisGroupCount = 0;                          // текущее количество полотен
        var widhtPlusPlus = 0;                                   // сумма всех текущих ширин
        var oneGroupFTArray = [];                                // массив полотен одной группы
        for (i = 1; i <= painting; i++) {
            if (getFromData('group') == $('*[data-id=' + i + ']').attr('data-group')) {
                paintingThisGroupCount++;
            }
            widhtPlusPlus = widhtPlusPlus + parseInt($('*[data-id=' + i + ']').attr('data-width'));
            if (isNaN(widhtPlusPlus)) {
                widhtPlusPlus = 0;
            }
            var g = $('*[data-id=' + i + ']').attr('data-group');
            var find = oneGroupFTArray.indexOf(g);
            if (find == -1) {
                oneGroupFTArray.push(g);
            }
        }

        // если высота профиля больше общей высоты, или же пустая, установить ее равной общей высоте
        if (parseInt(tab_profil_vyisota) > parseInt(height) || tab_profil_vyisota == '' || oneGroupFTArray.length <= 1) {
            $('#tab-profil-vyisota').val(height);
            $("#tab-profil-vyisota").trigger('change');
        }

        // если высота профиля равна общей высоте, то установить ее равной общей высоте
        if (parseInt(tab_profil_vyisota) == parseInt(height)) {
            $('#tab-profil-vyisota').val(height);
            $("#tab-profil-vyisota").trigger('change');
        }

        // если сумма текущих ширин больше общей ширины
        if (widhtPlusPlus > parseInt(widht)) {

            // если текущая ширина больше общей ширины, или
            // если произведение текущей ширины и количтва полотен в группе плюс разность полотен и количества полотен в группе больше общей ширины
            if (this_width > parseInt(widht) || (this_width * paintingThisGroupCount) + (parseInt(painting) - parseInt(paintingThisGroupCount)) > parseInt(widht)) {
                var polotenDr = parseInt(painting) - paintingThisGroupCount;
                var widthMinusDr = polotenDr - parseInt(widht);
                var maxWidthThisG = widthMinusDr / paintingThisGroupCount;
                var maxWidthThisGP = Math.abs(maxWidthThisG)
                $('#tab-profil-shirina').val(maxWidthThisGP);
                $('#tab-profil-shirina').trigger('change');
            } else {
                var minSizeToOther = widhtPlusPlus - widht;
                var elNotInThisGruap = 0;
                for (i = 1; i <= painting; i++) {
                    if (getFromData('group') != $('*[data-id=' + i + ']').attr('data-group')) {
                        elNotInThisGruap = elNotInThisGruap + 1;
                    }
                }
                var minSizeToOther = minSizeToOther / elNotInThisGruap;
                for (i = 1; i <= painting; i++) {
                    if (getFromData('group') != $('*[data-id=' + i + ']').attr('data-group')) {
                        var w = parseInt($('*[data-id="' + i + '"]').attr('data-width'));
                        $('*[data-id="' + i + '"]').attr('data-width', w - parseInt(minSizeToOther));
                    }
                }
            }

        // если сумма текущих ширин меньше общей ширины
        } else if (widhtPlusPlus < parseInt(widht)) {

            // если количество полотен в группе меньше равно единице, или
            // если ширина профиля меньше или равна единице, неопределена или пустая
            if (oneGroupFTArray.length <= 1 || parseInt(tab_profil_shirina) < 1 || parseInt(tab_profil_shirina) == NaN || parseInt(tab_profil_shirina) == 'NaN' || parseInt(tab_profil_shirina) == 1 || tab_profil_shirina == '') {
                $('#tab-profil-shirina').val(widht / painting);
                $("#tab-profil-shirina").trigger('change');
            } else {
                var addSizeToOther = widht - widhtPlusPlus;
                var elNotInThisGruap = 0;
                for (i = 1; i <= painting; i++) {
                    if (getFromData('group') != $('*[data-id=' + i + ']').attr('data-group')) {
                        elNotInThisGruap = elNotInThisGruap + 1;
                    }
                }
                var addSizeToOtherToOne = addSizeToOther / elNotInThisGruap;
                for (i = 1; i <= painting; i++) {
                    if (getFromData('group') != $('*[data-id=' + i + ']').attr('data-group')) {
                        var w = parseInt($('*[data-id="' + i + '"]').attr('data-width'));
                        $('*[data-id="' + i + '"]').attr('data-width', w + parseInt(addSizeToOtherToOne));
                    }
                }
            }
        }
        setDataAndText('width', $('#tab-profil-shirina').val());
        setDataAndText('height', $('#tab-profil-vyisota').val());
        diagrama.setWidthDandDEl();
        diagrama.setHeightDandDEl();
        diagrama.setDHW();
    },



    // механизм перетаскивания / изменения размера диаграммы
    DandDStart: function (st) {
        diagrama.rules();
        setTimeout(function(){
            diagrama.rules();
            $( ".PAINTING-DIAGRAMMA-EL").resizable({
                containment:'#PAINTING-DIAGRAMMA',
                handles:'n,e,s,w,se',
                maxHeight: parseInt( $( '#HIGHT_SETS_ID').val() / 10 ),
                maxWidth: parseInt( $( '#WIDTH_SETS_ID').val() ) / 10,
                resize: function( event, ui ) {
                    calcNow();
                    diagrama.rules();
                },
            });
        }, 1000);
        $(".drag").draggable({
            containment: "#PAINTING-DIAGRAMMA",
            snap: true,
            snapMode: "both"
        });
        paintingInDiadramma();
        diagrama.rules();
    },



    // увеличение высоты диаграммы кликом по стрелке
    arrowBottom: function (id) {
        var heightDiagramma = $('*[data-id="' + id + '"]').height();
        $('*[data-id="' + id + '"]').height(heightDiagramma + 50);
    },



    // уменьшение высоты диаграммы кликом по стрелке
    arrowTop: function (id) {
        var heightDiagramma = $('*[data-id="' + id + '"]').height();
        $('*[data-id="' + id + '"]').height(heightDiagramma - 50);
    },



    // увеличение ширины диаграммы кликом по стрелке
    arrowRight: function (id) {
        var heightDiagramma = $('*[data-id="' + id + '"]').width();
        $('*[data-id="' + id + '"]').width(heightDiagramma + 50);
    },



    // уменьшение ширины диаграммы кликом по стрелке
    arrowLeft: function (id) {
        var heightDiagramma = $('*[data-id="' + id + '"]').width();
        $('*[data-id="' + id + '"]').width(heightDiagramma - 50);
    },



    // отображение размеров на диаграмме
    setDHW: function () {
        for ( i=0; i<=parseInt( $('#TOTAL_PAINTING_ID').val() ); i++){
            var h = $('.PAINTING-DIAGRAMMA-EL').eq( i ).attr('data-height');
            var w = $('.PAINTING-DIAGRAMMA-EL').eq( i ).attr('data-width');
            $('.PAINTING-DIAGRAMMA-EL').eq( i ).find('.indicatorX').text(w);
            $('.PAINTING-DIAGRAMMA-EL').eq( i ).find('.indicatorY').text(h);
        }
    },



    // установка высоты диаграммы
    setHeightDandDEl: function () {
        var p = parseInt( $('#TOTAL_PAINTING_ID').val() );
        for ( i=0; i<=p; i++){
            var wi = parseFloat( $('*[data-id="' + i + '"]').attr( 'data-height' ) );
            $('*[data-id="' + i + '"]').css('height', wi/10 );
        }
        diagrama.setDHW();
    },



    // установка ширины диаграммы
    setWidthDandDEl: function () {
        var p = parseInt( $('#TOTAL_PAINTING_ID').val() );
        for ( i=0; i<=p; i++){
            var wi = parseFloat( $('*[data-id="' + i + '"]').attr( 'data-width' ) );
            $('*[data-id="' + i + '"]').css('width', wi/10 );
        }
        diagrama.setDHW();
    },



};

$( document ).ready(function() {
    diagrama.start();
});
