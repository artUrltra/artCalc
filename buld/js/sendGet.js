// 1 - клик
$('.sendGet').click(function () {
    if ($('iframe#state1').get(0).style.display != 'none') getScreen();
    if ($('iframe#state2').get(0).style.display != 'none') getScreen2();
    if ($('iframe#state3').get(0).style.display != 'none') getScreen3();
});
// 1 - получение скрина
function getScreen() {
    html2canvas($( "#state1" ).contents().find("#PAINTING-DIAGRAMMA"), {
        background:'#e5e5e5',
        onrendered: function(canvas) {
            var imgData = canvas.toDataURL('image/jpeg');
            var url = 'loadImg.php';
            $.ajax({
                type: "POST",
                url: url,
                dataType: 'text',
                async: false,
                data: {
                    screen : imgData
                },
                success: function(response){
                    response = "" + response;
                    sendUrl(response);
                },
                error:function(xhr, ajaxOptions, thrownError){
                }
            });
        }
    });
}

function getScreen2() {
    html2canvas($( "#state2" ).contents().find("#PAINTING-DIAGRAMMA"), {
        background:'#fff',
        onrendered: function(canvas) {
            var imgData = canvas.toDataURL('image/jpeg');
            var url = 'loadImg.php';
            $.ajax({
                type: "POST",
                url: url,
                dataType: 'text',
                async: false,
                data: {
                    screen : imgData
                },
                success: function(response){
                    response = "" + response;
                    sendUrl2(response);
                    // console.log("html2canvas success", response)
                },
                error:function(xhr, ajaxOptions, thrownError){
                    // console.log("html2canvas error", xhr.responseText )
                }
            });
        }
    });
}

function getScreen3() {
    html2canvas($( "#state3" ).contents().find("#PAINTING-DIAGRAMMA"), {
        background:'#fff',
        onrendered: function(canvas) {
            var imgData = canvas.toDataURL('image/jpeg');
            var url = 'loadImg.php';
            $.ajax({
                type: "POST",
                url: url,
                dataType: 'text',
                async: false,
                data: {
                    screen : imgData
                },
                success: function(response){
                    response = "" + response;
                    sendUrl3(response);
                    // console.log("html2canvas success", response)
                },
                error:function(xhr, ajaxOptions, thrownError){
                    // console.log("html2canvas error", xhr.responseText )
                }
            });
        }
    });
}

// 2 - отправка
function sendUrl(screen) {
    var TOTAL_PAINTING = parseInt($('#TOTAL_PAINTING_ID').val());
    var furnituraSelect = $("#TYPE_BAFFLE_ID").val();
    var Allheight = $('#HIGHT_SETS_ID').val();
    var Allwidth = $('#WIDTH_SETS_ID').val();
    var count = TOTAL_PAINTING;
    var count1 = $('#MOVABLE_PAINTING_ID').val();
    var TOTAL = $('.summaBezParametrov .price').text();
    var TOTAL2 = $('.summaSParametrami .price').text();
    var productionRub = $('.proizvaodstvoTo input').val();
    var installationRub = $('.montazhTo input').val();
    var urgencyRub = $('.srochnostTo input').val();
    var shippingRub = $('.srochnostTo input').val();
    var marginRub = $('.dostavkaTo input').val();
    var TotalPolotno = 0;
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        // var s = $('*[data-id="' + i + '"]').find(".data-price-in-profil").text();
        var s = $( "#state1" ).contents().find('*[data-id="' + i + '"]').find(".data-price-in-profil").text();
        TotalPolotno = TotalPolotno + parseInt(s);
    }
    var AddonTotal = 0;
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        // AddonTotal = AddonTotal + parseInt($('*[data-id="' + i + '"]').find(".data-price-in-napolnenii").text());
        AddonTotal = AddonTotal + parseInt( $( "#state1" ).contents().find('*[data-id="' + i + '"]').find(".data-price-in-napolnenii").text() );
    }
    var FurnituraTotal = $('.furnitura-price .price').text();
    var selectedMaterials = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
            // var text = $('*[data-id=' + j + ']').find('.material-' + i + '-type').text();
            var text = $( "#state1" ).contents().find('*[data-id=' + j + ']').find('.material-' + i + '-type').text();
            if (text == NaN || text == 'NaN' || text == '' || text == 0 || text == '0') {
                text = '';
            } else {
                selectedMaterials = selectedMaterials + text + ',';
            }
        }
    }
    selectedMaterials = selectedMaterials.substring(0, selectedMaterials.length - 1);
    console.log('f ', selectedMaterials);
    // var l = $('.loadImgBlock input[type=file]').length - 1;
    var l = $( "#state1" ).contents().find('.loadImgBlock input[type=file]').length - 1;
    var fotoNames = '';
    for (i = 0; i <= l; i++) {
        // fotoNames = fotoNames + $('.loadImgBlock input[type=file]')[i].files[0].name;
        fotoNames = fotoNames + $( "#state1" ).contents().find('.loadImgBlock input[type=file]')[i].files[0].name;
        if (i < l) {
            fotoNames = fotoNames + ',';
        }
    }
    var fullAllPriceInNapolnenie = 0;
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
            // var p = $('*[data-id=' + i + ']').find('.material-' + i + '-price').text();
            var p = $( "#state1" ).contents().find('*[data-id=' + i + ']').find('.material-' + i + '-price').text();
            if (p == NaN || p == 'NaN' || p == '' || p == 0 || p == '0') {
                p = 0;
            }
            fullAllPriceInNapolnenie = parseFloat(fullAllPriceInNapolnenie) + parseFloat(p);
        }
    }
    var selectedKarkas = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {

        // var karkasName = $('*[data-id=' + j + ']').find('.karkas-name').text();
        var karkasName = $( "#state1" ).contents().find('*[data-id=' + j + ']').find('.karkas-name').text();

        if (karkasName == 'Optimax2') {
            selectedKarkas = selectedKarkas + 'OptimaхTwo';
        } else if (karkasName == 'Statusx1') {
            selectedKarkas = selectedKarkas + 'StatusхOne';
        } else if (karkasName == 'Statusx2') {
            selectedKarkas = selectedKarkas + 'StatusхTwo';
        } else {
            // selectedKarkas = selectedKarkas + $('*[data-id=' + j + ']').find('.karkas-name').text();
            selectedKarkas = selectedKarkas + $( "#state1" ).contents().find('*[data-id=' + j + ']').find('.karkas-name').text();
        }

        if (j < TOTAL_PAINTING) {
            selectedKarkas = selectedKarkas + ',';
        }
    }

    // Имя менеджера - nameM Телефон менеджера - phoneM Email менеджера - emailM
    var nameM = $('#nameM').val();
    var phoneM = $('#phoneM').val();
    var emailM = $('#emailM').val();
    ////////////////////////////////////////////////////////////////////////////

    // Отдельная цена  за кажен каркас (без наполнений,фурнитуры,покраски) - justCarcassPrice
    var justCarcassPriceStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        // justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $('*[data-id=' + j + ']').attr('data-karkas-price');
        justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $( "#state1" ).contents().find('*[data-id=' + j + ']').attr('data-karkas-price');
    }
    ////////////////////////////////////////////////////////////////////////////

    // Названия дополнений (на английском, я потом буду брать из бд) - colourSealant - colorDecorativeCap - colorDecorativeCapIn - typeMunting
    // var colourSealant = $('#karkas-tsvet-uplotnitelya').val();
    var colourSealant = $( "#state1" ).contents().find('#karkas-tsvet-uplotnitelya').val();
    // var colorDecorativeCap = $('#karkas-tsvet-zaglushki').val();
    var colorDecorativeCap = $( "#state1" ).contents().find('#karkas-tsvet-zaglushki').val();
    // var colorDecorativeCapIn = $('#karkas-tsvet-zaglushki-tortsevoy').val();
    var colorDecorativeCapIn = $( "#state1" ).contents().find('#karkas-tsvet-zaglushki-tortsevoy').val();
    // var typeMunting = $('#karkas-vid-krepleniya').val();
    var typeMunting = $( "#state1" ).contents().find('#karkas-vid-krepleniya').val();
    ////////////////////////////////////////////////////////////////////////////

    // Цена дополнений - priceAdditions
    var priceAdditions = 0;
    if (typeMunting == 'ДА') {
        priceAdditions = 186;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Кол.во дополнений - quantityAdditions
    var quantityAdditions = TOTAL_PAINTING;
    ////////////////////////////////////////////////////////////////////////////

    // Названия елементов фурнитуры
    var furnituraNameStr = '';
    if (furnituraSelect == 1) {
        // var slidingMechanisms = $(".razdvizhnyie-mehanizmyi option:selected").html();
        var slidingMechanisms = $( "#state1" ).contents().find(".razdvizhnyie-mehanizmyi option:selected").html();
        // var synchronizationMechanism = $(".mehanizm-sinhronizatsii option:selected").html();
        var synchronizationMechanism = $( "#state1" ).contents().find(".mehanizm-sinhronizatsii option:selected").html();
        // var runners = $(".napravlyayuschie option:selected").html();
        var runners = $( "#state1" ).contents().find(".napravlyayuschie option:selected").html();
        // var typeOfMountingRunners = $(".vidKrepleniyaNapravlyayuschey option:selected").html();
        var typeOfMountingRunners = $( "#state1" ).contents().find(".vidKrepleniyaNapravlyayuschey option:selected").html();
        // var lead = $(".povodok option:selected").html();
        var lead = $( "#state1" ).contents().find(".povodok option:selected").html();
        // var closers = $(".dovodchik option:selected").html();
        var closers = $( "#state1" ).contents().find(".dovodchik option:selected").html();
        // var coverStripForProfile = $(".dekorativnayaPlankaDlyaProfilya option:selected").html();
        var coverStripForProfile = $( "#state1" ).contents().find(".dekorativnayaPlankaDlyaProfilya option:selected").html();
        // var brushSeal = $(".schetochnyiyUplotnitel option:selected").html();
        var brushSeal = $( "#state1" ).contents().find(".schetochnyiyUplotnitel option:selected").html();
        // var pen = $('.rakovina option:selected').html();
        var pen = $( "#state1" ).contents().find('.rakovina option:selected').html();
        // var doorLock = $('.zamok option:selected').html();
        var doorLock = $( "#state1" ).contents().find('.zamok option:selected').html();
        furnituraNameStr = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        // var foldingMechanisms = $('.setSkladnyieMehanizmyi option:selected').html();
        var foldingMechanisms = $( "#state1" ).contents().find('.setSkladnyieMehanizmyi option:selected').html();
        // var loops = $('.petli option:selected').html();
        var loops = $( "#state1" ).contents().find('.petli option:selected').html();
        // var runners = $('.napravlyayuschie option:selected').html();
        var runners = $( "#state1" ).contents().find('.napravlyayuschie option:selected').html();
        // var typeOfMountingRunners = $('.vidKrepleniya option:selected').html();
        var typeOfMountingRunners = $( "#state1" ).contents().find('.vidKrepleniya option:selected').html();
        // var coverStripForProfile = $('.dekorativnayaPlankaDlyaProfilya option:selected').html();
        var coverStripForProfile = $( "#state1" ).contents().find('.dekorativnayaPlankaDlyaProfilya option:selected').html();
        // var brushSeal = $('.schetochnyiyUplotnitel option:selected').html();
        var brushSeal = $( "#state1" ).contents().find('.schetochnyiyUplotnitel option:selected').html();
        // var pen = $('.rakovina option:selected').html();
        var pen = $( "#state1" ).contents().find('.rakovina option:selected').html();
        // var mountingPen = $('.kreplenieRuchki option:selected').html();
        var mountingPen = $( "#state1" ).contents().find('.kreplenieRuchki option:selected').html();
        // var doorLock = $('.zamokSkladnyie option:selected').html();
        var doorLock = $( "#state1" ).contents().find('.zamokSkladnyie option:selected').html();
        furnituraNameStr = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
    } else if (furnituraSelect == 4) {
        // var legs = $('.nozhki option:selected').html();
        var legs = $( "#state1" ).contents().find('.nozhki option:selected').html();
        // var stands = $('.stoyki option:selected').html();
        var stands = $( "#state1" ).contents().find('.stoyki option:selected').html();
        // var typeOfConnectionPaintings = $('.tipSoedineniyaPoloten option:selected').html();
        var typeOfConnectionPaintings = $( "#state1" ).contents().find('.tipSoedineniyaPoloten option:selected').html();
        furnituraNameStr = legs + "$" + stands + "$" + typeOfConnectionPaintings;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Цена елементов фурнитуры
    var furnituraElPrice = '';
    if (furnituraSelect == 1) {
        // var slidingMechanisms = parseInt($('.tab-content .razdvizhnyie-mehanizmyi .price').text());
        var slidingMechanisms = parseInt($( "#state1" ).contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').text());
        // var synchronizationMechanism = parseInt($('.tab-content .mehanizm-sinhronizatsii .price').text());
        var synchronizationMechanism = parseInt($( "#state1" ).contents().find('.tab-content .mehanizm-sinhronizatsii .price').text());
        // var runners = parseInt($('.tab-content .napravlyayuschie .price').text());
        var runners = parseInt($( "#state1" ).contents().find('.tab-content .napravlyayuschie .price').text());
        // var typeOfMountingRunners = parseInt($('.tab-content .vidKrepleniyaNapravlyayuschey .price').text());
        var typeOfMountingRunners = parseInt($( "#state1" ).contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').text());
        // var lead = parseInt($('.tab-content .povodok .price').text());
        var lead = parseInt($( "#state1" ).contents().find('.tab-content .povodok .price').text());

        // var closers = parseInt($('.tab-content .dovodchik .price').text());
        var closers = parseInt($( "#state1" ).contents().find('.tab-content .dovodchik .price').text());
        // var coverStripForProfile = parseInt($('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        var coverStripForProfile = parseInt($( "#state1" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        // var brushSeal = parseInt($('.tab-content .schetochnyiyUplotnitel .price').text());
        var brushSeal = parseInt($( "#state1" ).contents().find('.tab-content .schetochnyiyUplotnitel .price').text());
        // var pen = parseInt($('.tab-content .rakovina .price').text());
        var pen = parseInt($( "#state1" ).contents().find('.tab-content .rakovina .price').text());
        // var doorLock = parseInt($('.tab-content .zamok .price').text());
        var doorLock = parseInt($( "#state1" ).contents().find('.tab-content .zamok .price').text());
        furnituraElPrice = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        // var foldingMechanisms = parseInt($('.tab-content .setSkladnyieMehanizmyi .price').text());
        var foldingMechanisms = parseInt($( "#state1" ).contents().find('.tab-content .setSkladnyieMehanizmyi .price').text());
        // var loops = parseInt($('.tab-content .petli .price').text());
        var loops = parseInt($( "#state1" ).contents().find('.tab-content .petli .price').text());
        // var runners = parseInt($('.tab-content .napravlyayuschie .price').text());
        var runners = parseInt($( "#state1" ).contents().find('.tab-content .napravlyayuschie .price').text());
        // var typeOfMountingRunners = parseInt($('.tab-content .vidKrepleniya .price').text());
        var typeOfMountingRunners = parseInt($( "#state1" ).contents().find('.tab-content .vidKrepleniya .price').text());

        // var coverStripForProfile = parseInt($('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        var coverStripForProfile = parseInt($( "#state1" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        // var brushSeal = parseInt($('.tab-content .schetochnyiyUplotnitel .price').text());
        var brushSeal = parseInt($( "#state1" ).contents().find('.tab-content .schetochnyiyUplotnitel .price').text());
        // var pen = parseInt($('.tab-content .rakovina .price').text());
        var pen = parseInt($( "#state1" ).contents().find('.tab-content .rakovina .price').text());
        // var mountingPen = parseInt($('.tab-content .kreplenieRuchki .price').text());
        var mountingPen = parseInt($( "#state1" ).contents().find('.tab-content .kreplenieRuchki .price').text());
        // var doorLock = parseInt($('.tab-content .zamokSkladnyie .price').text());
        var doorLock = parseInt($( "#state1" ).contents().find('.tab-content .zamokSkladnyie .price').text());
        furnituraElPrice = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
    } else if (furnituraSelect == 4) {
        // var legs = parseInt($('.tab-content .nozhki .price').text());
        var legs = parseInt($( "#state1" ).contents().find('.tab-content .nozhki .price').text());
        // var stands = parseInt($('.tab-content .stoyki .price').text());
        var stands = parseInt($( "#state1" ).contents().find('.tab-content .stoyki .price').text());
        // var typeOfConnectionPaintingsPrice = parseInt($('.tab-content .tipSoedineniyaPoloten .price').text());
        var typeOfConnectionPaintingsPrice = parseInt($( "#state1" ).contents().find('.tab-content .tipSoedineniyaPoloten .price').text());
        furnituraElPrice = legs + "$" + stands + "$" + typeOfConnectionPaintingsPrice;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Название картинки покраски профиля - nameProfilePicturePainting
    // var nameProfilePicturePainting = $('.vyiborDekoraDlyaProfilya img').attr('src');
    var nameProfilePicturePainting = $( "#state1" ).contents().find('.vyiborDekoraDlyaProfilya img').attr('src');
    nameProfilePicturePainting = nameProfilePicturePainting.match(/([\w,\s-]+)\.[A-Za-z]{3}/)[1];
    ////////////////////////////////////////////////////////////////////////////

    // Цену покраски профиля - priceProfilePainting
    var priceProfilePaintingStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        // priceProfilePaintingStr = priceProfilePaintingStr + '&priceProfilePaintingPrice-' + j + '=' + $('*[data-id=' + j + ']').attr('data-decor-price');
        priceProfilePaintingStr = priceProfilePaintingStr + '&priceProfilePaintingPrice-' + j + '=' + $( "#state1" ).contents().find('*[data-id=' + j + ']').attr('data-decor-price');
    }
    ////////////////////////////////////////////////////////////////////////////


    var m = [];
    var m2 = [];
    // var TOTAL_PAINTING = parseInt($('#TOTAL_PAINTING_ID').val());
    var TOTAL_PAINTING = parseInt($( "#state1" ).contents().find('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)){
        TOTAL_PAINTING = 0;
    }
    // =
    // - Создали внутренние массивы
    if (TOTAL_PAINTING > 0){
        for (i = 0; i <= TOTAL_PAINTING-1; i++) {
            m[i] = new Array(4);
        }
    }
    // =
    // - Массив со всеми данными
    for (var i = 0; i < TOTAL_PAINTING; i++) {

        // var karkasName = $('*[data-id=' + (i + 1) + ']').find('.karkas-name').text();
        var karkasName = $( "#state1" ).contents().find('*[data-id=' + (i + 1) + ']').find('.karkas-name').text();
        if (karkasName == 'Optimax2') {
            selectedKarkas = 'OptimaхTwo';
        } else if (karkasName == 'Statusx1') {
            selectedKarkas = 'StatusхOne';
        } else if (karkasName == 'Statusx2') {
            selectedKarkas = 'StatusхTwo';
        } else {
            selectedKarkas = karkasName;
        }

        m[i][0] = selectedKarkas;
        // m[i][1] = parseInt($('*[data-id="' + (i+1) + '"]').attr('data-karkas-price') );
        m[i][1] = parseInt($( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-price') );
        // m[i][2] = parseInt($('*[data-id="' + (i+1) + '"]').attr('data-width') ) + parseInt(( $('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
        m[i][2] = parseInt($( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-width') ) + parseInt(( $('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
        m[i][3] =
            // '1' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-uplotnitelya') + '$' +
            '1' + $( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-uplotnitelya') + '$' +
            // '2' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki') + '$' +
            '2' + $( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki') + '$' +
            // '3' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + '$' +
            '3' + $( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + '$' +
            // '4' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-vid-krepleniya');
            '4' + $( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-vid-krepleniya');
    }
    for (var i = 0; i < TOTAL_PAINTING; i++) {
        if (m2.length == 0){
            m2.push(m[i][0]);
            m2.push(m[i][1]);
            m2.push(m[i][2]);
            m2.push(m[i][3]);
        }
        else {
            var status = true;
            var price = 0;
            for (var j = 0; j < m2.length; j++) {
                if (m2[j] == m[i][0]) {
                    for (var g = m2.length; g >= 0; g--) {
                        if (m2[g] == m[i][0]){
                            m2[j+1] = parseInt(m2[j+1]) + parseInt(m[i][1]);
                            m2[j+2] = parseInt(m2[j+2]) + parseInt(m[i][2]);
                        }
                    }
                    status = false;
                }
            }
            if (status == true){
                m2.push(m[i][0]);
                m2.push(m[i][1]);
                m2.push(m[i][2]);
                m2.push(m[i][3]);
            }
        }
    }


    var url = '?furnitura-select=' + furnituraSelect +
        '&Allheight=' + Allheight +
        '&Allwidth=' + Allwidth +
        '&count=' + count +
        '&count1=' + count1 +
        '&TOTAL=' + TOTAL +
        '&TOTAL2=' + TOTAL2 +
        '&productionRub=' + productionRub +
        '&installationRub=' + installationRub +
        '&shippingRub=' + shippingRub +
        '&urgencyRub=' + urgencyRub +
        '&marginRub=' + marginRub +
        '&TotalPolotno=' + TotalPolotno +
        '&AddonTotal=' + AddonTotal +
        '&FurnituraTotal=' + FurnituraTotal +
        '&selectedMaterials=' + selectedMaterials +
        '&fotoNames=' + fotoNames +
        '&fullAllPriceInNapolnenie=' + fullAllPriceInNapolnenie +
        '&nameM=' + nameM +
        '&phoneM=' + phoneM +
        '&emailM=' + emailM +
        '&colourSealant=' + colourSealant +
        '&colorDecorativeCap=' + colorDecorativeCap +
        '&colorDecorativeCapIn=' + colorDecorativeCapIn +
        '&typeMunting=' + typeMunting +
        '&priceAdditions=' + priceAdditions +
        '&quantityAdditions=' + quantityAdditions +
        justCarcassPriceStr +
        '&screen=' + screen +
        '&furnituraelementsnames=' + furnituraNameStr +
        '&furnituraelementsprice=' + furnituraElPrice +
        priceProfilePaintingStr +
        nameProfilePicturePainting +
        '&selectedKarkas=' + m2 +
        '&state1Profile=' + '15290' +
        '&state1Furnitura=' + '19320' +
        '&state1Zapolnenie=' + '4930' +
        '&state1Zamer=' + '1000' +
        '&state1Montaj=' + '10000' +
        '&state1Dostavka=' + '1000';
    url = url.replace(/°/g, "");
    url = urlLit(url, 0);
    window.open('http://fasts-like.com/html2pdf.php' + url, '_blank');
};

function sendUrl2(screen) {
    // var TOTAL_PAINTING = parseInt($('#TOTAL_PAINTING_ID').val());
    var TOTAL_PAINTING = parseInt( $( "#state2" ).contents().find( "#TOTAL_PAINTING_ID" ).val() );
    // var furnituraSelect = $("#TYPE_BAFFLE_ID").val();
    var furnituraSelect = $( "#state2" ).contents().find( "#TYPE_BAFFLE_ID" ).val();
    // var Allheight = $('#HIGHT_SETS_ID').val();
    var Allheight = $( "#state2" ).contents().find( "#HIGHT_SETS_ID" ).val();
    // var Allwidth = $('#WIDTH_SETS_ID').val();
    var Allwidth = $( "#state2" ).contents().find( "#WIDTH_SETS_ID" ).val();
    var count = TOTAL_PAINTING;
    // var count1 = $('#MOVABLE_PAINTING_ID').val();
    var count1 = $( "#state2" ).contents().find( "#MOVABLE_PAINTING_ID" ).val();
    // var TOTAL = $('.summaBezParametrov .price').text();
    var TOTAL = $( "#state2" ).contents().find( "#MOVABLE_PAINTING_ID" ).text();
    // var TOTAL2 = $('.summaSParametrami .price').text();
    var TOTAL2 = $( "#state2" ).contents().find( ".summaSParametrami .price" ).text();
    // var productionRub = $('.proizvaodstvoTo input').val();
    var productionRub = $( "#state2" ).contents().find( ".proizvaodstvoTo input" ).val();
    // var installationRub = $('.montazhTo input').val();
    var installationRub = $( "#state2" ).contents().find( ".montazhTo input" ).val();
    // var urgencyRub = $('.srochnostTo input').val();
    var urgencyRub = $( "#state2" ).contents().find( ".srochnostTo input" ).val();
    // var shippingRub = $('.srochnostTo input').val();
    var shippingRub = $( "#state2" ).contents().find( ".srochnostTo input" ).val();
    // var marginRub = $('.dostavkaTo input').val();
    var marginRub = $( "#state2" ).contents().find( ".dostavkaTo input" ).val();
    var TotalPolotno = 0;
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        // var s = $('*[data-id="' + i + '"]').find(".data-price-in-profil").text();
        var s = $( "#state2" ).contents().find('*[data-id="' + i + '"]').find(".data-price-in-profil").text();
        TotalPolotno = TotalPolotno + parseInt(s);
    }
    var AddonTotal = 0;
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        // AddonTotal = AddonTotal + parseInt($('*[data-id="' + i + '"]').find(".data-price-in-napolnenii").text());
        AddonTotal = AddonTotal + parseInt( $( "#state2" ).contents().find('*[data-id="' + i + '"]').find(".data-price-in-napolnenii").text() );
    }
    var FurnituraTotal = $('.furnitura-price .price').text();
    var selectedMaterials = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
            // var text = $('*[data-id=' + j + ']').find('.material-' + i + '-type').text();
            var text = $( "#state2" ).contents().find('*[data-id=' + j + ']').find('.material-' + i + '-type').text();
            if (text == NaN || text == 'NaN' || text == '' || text == 0 || text == '0') {
                text = '';
            } else {
                selectedMaterials = selectedMaterials + text + ',';
            }
        }
    }
    selectedMaterials = selectedMaterials.substring(0, selectedMaterials.length - 1);
    console.log('f ', selectedMaterials);
    // var l = $('.loadImgBlock input[type=file]').length - 1;
    var l = $( "#state2" ).contents().find('.loadImgBlock input[type=file]').length - 1;
    var fotoNames = '';
    for (i = 0; i <= l; i++) {
        // fotoNames = fotoNames + $('.loadImgBlock input[type=file]')[i].files[0].name;
        fotoNames = fotoNames + $( "#state2" ).contents().find('.loadImgBlock input[type=file]')[i].files[0].name;
        if (i < l) {
            fotoNames = fotoNames + ',';
        }
    }
    var fullAllPriceInNapolnenie = 0;
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
            // var p = $('*[data-id=' + i + ']').find('.material-' + i + '-price').text();
            var p = $( "#state2" ).contents().find('*[data-id=' + i + ']').find('.material-' + i + '-price').text();
            if (p == NaN || p == 'NaN' || p == '' || p == 0 || p == '0') {
                p = 0;
            }
            fullAllPriceInNapolnenie = parseFloat(fullAllPriceInNapolnenie) + parseFloat(p);
        }
    }
    var selectedKarkas = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {

        // var karkasName = $('*[data-id=' + j + ']').find('.karkas-name').text();
        var karkasName = $( "#state2" ).contents().find('*[data-id=' + j + ']').find('.karkas-name').text();

        if (karkasName == 'Optimax2') {
            selectedKarkas = selectedKarkas + 'OptimaхTwo';
        } else if (karkasName == 'Statusx1') {
            selectedKarkas = selectedKarkas + 'StatusхOne';
        } else if (karkasName == 'Statusx2') {
            selectedKarkas = selectedKarkas + 'StatusхTwo';
        } else {
            // selectedKarkas = selectedKarkas + $('*[data-id=' + j + ']').find('.karkas-name').text();
            selectedKarkas = selectedKarkas + $( "#state2" ).contents().find('*[data-id=' + j + ']').find('.karkas-name').text();
        }

        if (j < TOTAL_PAINTING) {
            selectedKarkas = selectedKarkas + ',';
        }
    }

    // Имя менеджера - nameM Телефон менеджера - phoneM Email менеджера - emailM
    var nameM = $('#nameM').val();
    var phoneM = $('#phoneM').val();
    var emailM = $('#emailM').val();
    ////////////////////////////////////////////////////////////////////////////

    // Отдельная цена  за кажен каркас (без наполнений,фурнитуры,покраски) - justCarcassPrice
    var justCarcassPriceStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        // justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $('*[data-id=' + j + ']').attr('data-karkas-price');
        justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $( "#state2" ).contents().find('*[data-id=' + j + ']').attr('data-karkas-price');
    }
    ////////////////////////////////////////////////////////////////////////////

    // Названия дополнений (на английском, я потом буду брать из бд) - colourSealant - colorDecorativeCap - colorDecorativeCapIn - typeMunting
    // var colourSealant = $('#karkas-tsvet-uplotnitelya').val();
    var colourSealant = $( "#state2" ).contents().find('#karkas-tsvet-uplotnitelya').val();
    // var colorDecorativeCap = $('#karkas-tsvet-zaglushki').val();
    var colorDecorativeCap = $( "#state2" ).contents().find('#karkas-tsvet-zaglushki').val();
    // var colorDecorativeCapIn = $('#karkas-tsvet-zaglushki-tortsevoy').val();
    var colorDecorativeCapIn = $( "#state2" ).contents().find('#karkas-tsvet-zaglushki-tortsevoy').val();
    // var typeMunting = $('#karkas-vid-krepleniya').val();
    var typeMunting = $( "#state2" ).contents().find('#karkas-vid-krepleniya').val();
    ////////////////////////////////////////////////////////////////////////////

    // Цена дополнений - priceAdditions
    var priceAdditions = 0;
    if (typeMunting == 'ДА') {
        priceAdditions = 186;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Кол.во дополнений - quantityAdditions
    var quantityAdditions = TOTAL_PAINTING;
    ////////////////////////////////////////////////////////////////////////////

    // Названия елементов фурнитуры
    var furnituraNameStr = '';
    if (furnituraSelect == 1) {
        // var slidingMechanisms = $(".razdvizhnyie-mehanizmyi option:selected").html();
        var slidingMechanisms = $( "#state2" ).contents().find(".razdvizhnyie-mehanizmyi option:selected").html();
        // var synchronizationMechanism = $(".mehanizm-sinhronizatsii option:selected").html();
        var synchronizationMechanism = $( "#state2" ).contents().find(".mehanizm-sinhronizatsii option:selected").html();
        // var runners = $(".napravlyayuschie option:selected").html();
        var runners = $( "#state2" ).contents().find(".napravlyayuschie option:selected").html();
        // var typeOfMountingRunners = $(".vidKrepleniyaNapravlyayuschey option:selected").html();
        var typeOfMountingRunners = $( "#state2" ).contents().find(".vidKrepleniyaNapravlyayuschey option:selected").html();
        // var lead = $(".povodok option:selected").html();
        var lead = $( "#state2" ).contents().find(".povodok option:selected").html();
        // var closers = $(".dovodchik option:selected").html();
        var closers = $( "#state2" ).contents().find(".dovodchik option:selected").html();
        // var coverStripForProfile = $(".dekorativnayaPlankaDlyaProfilya option:selected").html();
        var coverStripForProfile = $( "#state2" ).contents().find(".dekorativnayaPlankaDlyaProfilya option:selected").html();
        // var brushSeal = $(".schetochnyiyUplotnitel option:selected").html();
        var brushSeal = $( "#state2" ).contents().find(".schetochnyiyUplotnitel option:selected").html();
        // var pen = $('.rakovina option:selected').html();
        var pen = $( "#state2" ).contents().find('.rakovina option:selected').html();
        // var doorLock = $('.zamok option:selected').html();
        var doorLock = $( "#state2" ).contents().find('.zamok option:selected').html();
        furnituraNameStr = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        // var foldingMechanisms = $('.setSkladnyieMehanizmyi option:selected').html();
        var foldingMechanisms = $( "#state2" ).contents().find('.setSkladnyieMehanizmyi option:selected').html();
        // var loops = $('.petli option:selected').html();
        var loops = $( "#state2" ).contents().find('.petli option:selected').html();
        // var runners = $('.napravlyayuschie option:selected').html();
        var runners = $( "#state2" ).contents().find('.napravlyayuschie option:selected').html();
        // var typeOfMountingRunners = $('.vidKrepleniya option:selected').html();
        var typeOfMountingRunners = $( "#state2" ).contents().find('.vidKrepleniya option:selected').html();
        // var coverStripForProfile = $('.dekorativnayaPlankaDlyaProfilya option:selected').html();
        var coverStripForProfile = $( "#state2" ).contents().find('.dekorativnayaPlankaDlyaProfilya option:selected').html();
        // var brushSeal = $('.schetochnyiyUplotnitel option:selected').html();
        var brushSeal = $( "#state2" ).contents().find('.schetochnyiyUplotnitel option:selected').html();
        // var pen = $('.rakovina option:selected').html();
        var pen = $( "#state2" ).contents().find('.rakovina option:selected').html();
        // var mountingPen = $('.kreplenieRuchki option:selected').html();
        var mountingPen = $( "#state2" ).contents().find('.kreplenieRuchki option:selected').html();
        // var doorLock = $('.zamokSkladnyie option:selected').html();
        var doorLock = $( "#state2" ).contents().find('.zamokSkladnyie option:selected').html();
        furnituraNameStr = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
    } else if (furnituraSelect == 4) {
        // var legs = $('.nozhki option:selected').html();
        var legs = $( "#state2" ).contents().find('.nozhki option:selected').html();
        // var stands = $('.stoyki option:selected').html();
        var stands = $( "#state2" ).contents().find('.stoyki option:selected').html();
        // var typeOfConnectionPaintings = $('.tipSoedineniyaPoloten option:selected').html();
        var typeOfConnectionPaintings = $( "#state2" ).contents().find('.tipSoedineniyaPoloten option:selected').html();
        furnituraNameStr = legs + "$" + stands + "$" + typeOfConnectionPaintings;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Цена елементов фурнитуры
    var furnituraElPrice = '';
    if (furnituraSelect == 1) {
        // var slidingMechanisms = parseInt($('.tab-content .razdvizhnyie-mehanizmyi .price').text());
        var slidingMechanisms = parseInt($( "#state2" ).contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').text());
        // var synchronizationMechanism = parseInt($('.tab-content .mehanizm-sinhronizatsii .price').text());
        var synchronizationMechanism = parseInt($( "#state2" ).contents().find('.tab-content .mehanizm-sinhronizatsii .price').text());
        // var runners = parseInt($('.tab-content .napravlyayuschie .price').text());
        var runners = parseInt($( "#state2" ).contents().find('.tab-content .napravlyayuschie .price').text());
        // var typeOfMountingRunners = parseInt($('.tab-content .vidKrepleniyaNapravlyayuschey .price').text());
        var typeOfMountingRunners = parseInt($( "#state2" ).contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').text());
        // var lead = parseInt($('.tab-content .povodok .price').text());
        var lead = parseInt($( "#state2" ).contents().find('.tab-content .povodok .price').text());

        // var closers = parseInt($('.tab-content .dovodchik .price').text());
        var closers = parseInt($( "#state2" ).contents().find('.tab-content .dovodchik .price').text());
        // var coverStripForProfile = parseInt($('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        var coverStripForProfile = parseInt($( "#state2" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        // var brushSeal = parseInt($('.tab-content .schetochnyiyUplotnitel .price').text());
        var brushSeal = parseInt($( "#state2" ).contents().find('.tab-content .schetochnyiyUplotnitel .price').text());
        // var pen = parseInt($('.tab-content .rakovina .price').text());
        var pen = parseInt($( "#state2" ).contents().find('.tab-content .rakovina .price').text());
        // var doorLock = parseInt($('.tab-content .zamok .price').text());
        var doorLock = parseInt($( "#state2" ).contents().find('.tab-content .zamok .price').text());
        furnituraElPrice = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        // var foldingMechanisms = parseInt($('.tab-content .setSkladnyieMehanizmyi .price').text());
        var foldingMechanisms = parseInt($( "#state2" ).contents().find('.tab-content .setSkladnyieMehanizmyi .price').text());
        // var loops = parseInt($('.tab-content .petli .price').text());
        var loops = parseInt($( "#state2" ).contents().find('.tab-content .petli .price').text());
        // var runners = parseInt($('.tab-content .napravlyayuschie .price').text());
        var runners = parseInt($( "#state2" ).contents().find('.tab-content .napravlyayuschie .price').text());
        // var typeOfMountingRunners = parseInt($('.tab-content .vidKrepleniya .price').text());
        var typeOfMountingRunners = parseInt($( "#state2" ).contents().find('.tab-content .vidKrepleniya .price').text());

        // var coverStripForProfile = parseInt($('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        var coverStripForProfile = parseInt($( "#state2" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        // var brushSeal = parseInt($('.tab-content .schetochnyiyUplotnitel .price').text());
        var brushSeal = parseInt($( "#state2" ).contents().find('.tab-content .schetochnyiyUplotnitel .price').text());
        // var pen = parseInt($('.tab-content .rakovina .price').text());
        var pen = parseInt($( "#state2" ).contents().find('.tab-content .rakovina .price').text());
        // var mountingPen = parseInt($('.tab-content .kreplenieRuchki .price').text());
        var mountingPen = parseInt($( "#state2" ).contents().find('.tab-content .kreplenieRuchki .price').text());
        // var doorLock = parseInt($('.tab-content .zamokSkladnyie .price').text());
        var doorLock = parseInt($( "#state2" ).contents().find('.tab-content .zamokSkladnyie .price').text());
        furnituraElPrice = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
    } else if (furnituraSelect == 4) {
        // var legs = parseInt($('.tab-content .nozhki .price').text());
        var legs = parseInt($( "#state2" ).contents().find('.tab-content .nozhki .price').text());
        // var stands = parseInt($('.tab-content .stoyki .price').text());
        var stands = parseInt($( "#state2" ).contents().find('.tab-content .stoyki .price').text());
        // var typeOfConnectionPaintingsPrice = parseInt($('.tab-content .tipSoedineniyaPoloten .price').text());
        var typeOfConnectionPaintingsPrice = parseInt($( "#state2" ).contents().find('.tab-content .tipSoedineniyaPoloten .price').text());
        furnituraElPrice = legs + "$" + stands + "$" + typeOfConnectionPaintingsPrice;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Название картинки покраски профиля - nameProfilePicturePainting
    // var nameProfilePicturePainting = $('.vyiborDekoraDlyaProfilya img').attr('src');
    var nameProfilePicturePainting = $( "#state2" ).contents().find('.vyiborDekoraDlyaProfilya img').attr('src');
    nameProfilePicturePainting = nameProfilePicturePainting.match(/([\w,\s-]+)\.[A-Za-z]{3}/)[1];
    ////////////////////////////////////////////////////////////////////////////

    // Цену покраски профиля - priceProfilePainting
    var priceProfilePaintingStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        // priceProfilePaintingStr = priceProfilePaintingStr + '&priceProfilePaintingPrice-' + j + '=' + $('*[data-id=' + j + ']').attr('data-decor-price');
        priceProfilePaintingStr = priceProfilePaintingStr + '&priceProfilePaintingPrice-' + j + '=' + $( "#state2" ).contents().find('*[data-id=' + j + ']').attr('data-decor-price');
    }
    ////////////////////////////////////////////////////////////////////////////


    var m = [];
    var m2 = [];
    // var TOTAL_PAINTING = parseInt($('#TOTAL_PAINTING_ID').val());
    var TOTAL_PAINTING = parseInt($( "#state2" ).contents().find('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)){
        TOTAL_PAINTING = 0;
    }
    // =
    // - Создали внутренние массивы
    if (TOTAL_PAINTING > 0){
        for (i = 0; i <= TOTAL_PAINTING-1; i++) {
            m[i] = new Array(4);
        }
    }
    // =
    // - Массив со всеми данными
    for (var i = 0; i < TOTAL_PAINTING; i++) {

        // var karkasName = $('*[data-id=' + (i + 1) + ']').find('.karkas-name').text();
        var karkasName = $( "#state2" ).contents().find('*[data-id=' + (i + 1) + ']').find('.karkas-name').text();
        if (karkasName == 'Optimax2') {
            selectedKarkas = 'OptimaхTwo';
        } else if (karkasName == 'Statusx1') {
            selectedKarkas = 'StatusхOne';
        } else if (karkasName == 'Statusx2') {
            selectedKarkas = 'StatusхTwo';
        } else {
            selectedKarkas = karkasName;
        }

        m[i][0] = selectedKarkas;
        // m[i][1] = parseInt($('*[data-id="' + (i+1) + '"]').attr('data-karkas-price') );
        m[i][1] = parseInt($( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-price') );
        // m[i][2] = parseInt($('*[data-id="' + (i+1) + '"]').attr('data-width') ) + parseInt(( $('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
        m[i][2] = parseInt($( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-width') ) + parseInt(( $('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
        m[i][3] =
            // '1' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-uplotnitelya') + '$' +
            '1' + $( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-uplotnitelya') + '$' +
            // '2' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki') + '$' +
            '2' + $( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki') + '$' +
            // '3' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + '$' +
            '3' + $( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + '$' +
            // '4' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-vid-krepleniya');
            '4' + $( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-vid-krepleniya');
    }
    for (var i = 0; i < TOTAL_PAINTING; i++) {
        if (m2.length == 0){
            m2.push(m[i][0]);
            m2.push(m[i][1]);
            m2.push(m[i][2]);
            m2.push(m[i][3]);
        }
        else {
            var status = true;
            var price = 0;
            for (var j = 0; j < m2.length; j++) {
                if (m2[j] == m[i][0]) {
                    for (var g = m2.length; g >= 0; g--) {
                        if (m2[g] == m[i][0]){
                            m2[j+1] = parseInt(m2[j+1]) + parseInt(m[i][1]);
                            m2[j+2] = parseInt(m2[j+2]) + parseInt(m[i][2]);
                        }
                    }
                    status = false;
                }
            }
            if (status == true){
                m2.push(m[i][0]);
                m2.push(m[i][1]);
                m2.push(m[i][2]);
                m2.push(m[i][3]);
            }
        }
    }


    var url = '?furnitura-select=' + furnituraSelect +
        '&Allheight=' + Allheight +
        '&Allwidth=' + Allwidth +
        '&count=' + count +
        '&count1=' + count1 +
        '&TOTAL=' + TOTAL +
        '&TOTAL2=' + TOTAL2 +
        '&productionRub=' + productionRub +
        '&installationRub=' + installationRub +
        '&shippingRub=' + shippingRub +
        '&urgencyRub=' + urgencyRub +
        '&marginRub=' + marginRub +
        '&TotalPolotno=' + TotalPolotno +
        '&AddonTotal=' + AddonTotal +
        '&FurnituraTotal=' + FurnituraTotal +
        '&selectedMaterials=' + selectedMaterials +
        '&fotoNames=' + fotoNames +
        '&fullAllPriceInNapolnenie=' + fullAllPriceInNapolnenie +
        '&nameM=' + nameM +
        '&phoneM=' + phoneM +
        '&emailM=' + emailM +
        '&colourSealant=' + colourSealant +
        '&colorDecorativeCap=' + colorDecorativeCap +
        '&colorDecorativeCapIn=' + colorDecorativeCapIn +
        '&typeMunting=' + typeMunting +
        '&priceAdditions=' + priceAdditions +
        '&quantityAdditions=' + quantityAdditions +
        justCarcassPriceStr +
        '&screen=' + screen +
        '&furnituraelementsnames=' + furnituraNameStr +
        '&furnituraelementsprice=' + furnituraElPrice +
        priceProfilePaintingStr +
        nameProfilePicturePainting +
        '&selectedKarkas=' + m2 +
        '&state2Profile' + '4930' +
        '&state2Furnitura' + '4930' +
        '&state2Zapolnenie' + '4930' +
        '&state2Zamer' + '1000' +
        '&state2Montaj' + '10000' +
        '&state2Dostavka' + '1000';
    url = url.replace(/°/g, "");
    url = urlLit(url, 0);
    window.open('http://fasts-like.com/html2pdf.php' + url, '_blank');
};

function sendUrl3(screen) {
    // var TOTAL_PAINTING = parseInt($('#TOTAL_PAINTING_ID').val());
    var TOTAL_PAINTING = parseInt( $( "#state3" ).contents().find( "#TOTAL_PAINTING_ID" ).val() );
    // var furnituraSelect = $("#TYPE_BAFFLE_ID").val();
    var furnituraSelect = $( "#state3" ).contents().find( "#TYPE_BAFFLE_ID" ).val();
    // var Allheight = $('#HIGHT_SETS_ID').val();
    var Allheight = $( "#state3" ).contents().find( "#HIGHT_SETS_ID" ).val();
    // var Allwidth = $('#WIDTH_SETS_ID').val();
    var Allwidth = $( "#state3" ).contents().find( "#WIDTH_SETS_ID" ).val();
    var count = TOTAL_PAINTING;
    // var count1 = $('#MOVABLE_PAINTING_ID').val();
    var count1 = $( "#state3" ).contents().find( "#MOVABLE_PAINTING_ID" ).val();
    // var TOTAL = $('.summaBezParametrov .price').text();
    var TOTAL = $( "#state3" ).contents().find( "#MOVABLE_PAINTING_ID" ).text();
    // var TOTAL2 = $('.summaSParametrami .price').text();
    var TOTAL2 = $( "#state3" ).contents().find( ".summaSParametrami .price" ).text();
    // var productionRub = $('.proizvaodstvoTo input').val();
    var productionRub = $( "#state3" ).contents().find( ".proizvaodstvoTo input" ).val();
    // var installationRub = $('.montazhTo input').val();
    var installationRub = $( "#state3" ).contents().find( ".montazhTo input" ).val();
    // var urgencyRub = $('.srochnostTo input').val();
    var urgencyRub = $( "#state3" ).contents().find( ".srochnostTo input" ).val();
    // var shippingRub = $('.srochnostTo input').val();
    var shippingRub = $( "#state3" ).contents().find( ".srochnostTo input" ).val();
    // var marginRub = $('.dostavkaTo input').val();
    var marginRub = $( "#state3" ).contents().find( ".dostavkaTo input" ).val();
    var TotalPolotno = 0;
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        // var s = $('*[data-id="' + i + '"]').find(".data-price-in-profil").text();
        var s = $( "#state3" ).contents().find('*[data-id="' + i + '"]').find(".data-price-in-profil").text();
        TotalPolotno = TotalPolotno + parseInt(s);
    }
    var AddonTotal = 0;
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        // AddonTotal = AddonTotal + parseInt($('*[data-id="' + i + '"]').find(".data-price-in-napolnenii").text());
        AddonTotal = AddonTotal + parseInt( $( "#state3" ).contents().find('*[data-id="' + i + '"]').find(".data-price-in-napolnenii").text() );
    }
    var FurnituraTotal = $('.furnitura-price .price').text();
    var selectedMaterials = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
            // var text = $('*[data-id=' + j + ']').find('.material-' + i + '-type').text();
            var text = $( "#state3" ).contents().find('*[data-id=' + j + ']').find('.material-' + i + '-type').text();
            if (text == NaN || text == 'NaN' || text == '' || text == 0 || text == '0') {
                text = '';
            } else {
                selectedMaterials = selectedMaterials + text + ',';
            }
        }
    }
    selectedMaterials = selectedMaterials.substring(0, selectedMaterials.length - 1);
    console.log('f ', selectedMaterials);
    // var l = $('.loadImgBlock input[type=file]').length - 1;
    var l = $( "#state3" ).contents().find('.loadImgBlock input[type=file]').length - 1;
    var fotoNames = '';
    for (i = 0; i <= l; i++) {
        // fotoNames = fotoNames + $('.loadImgBlock input[type=file]')[i].files[0].name;
        fotoNames = fotoNames + $( "#state3" ).contents().find('.loadImgBlock input[type=file]')[i].files[0].name;
        if (i < l) {
            fotoNames = fotoNames + ',';
        }
    }
    var fullAllPriceInNapolnenie = 0;
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
            // var p = $('*[data-id=' + i + ']').find('.material-' + i + '-price').text();
            var p = $( "#state3" ).contents().find('*[data-id=' + i + ']').find('.material-' + i + '-price').text();
            if (p == NaN || p == 'NaN' || p == '' || p == 0 || p == '0') {
                p = 0;
            }
            fullAllPriceInNapolnenie = parseFloat(fullAllPriceInNapolnenie) + parseFloat(p);
        }
    }
    var selectedKarkas = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {

        // var karkasName = $('*[data-id=' + j + ']').find('.karkas-name').text();
        var karkasName = $( "#state3" ).contents().find('*[data-id=' + j + ']').find('.karkas-name').text();

        if (karkasName == 'Optimax2') {
            selectedKarkas = selectedKarkas + 'OptimaхTwo';
        } else if (karkasName == 'Statusx1') {
            selectedKarkas = selectedKarkas + 'StatusхOne';
        } else if (karkasName == 'Statusx2') {
            selectedKarkas = selectedKarkas + 'StatusхTwo';
        } else {
            // selectedKarkas = selectedKarkas + $('*[data-id=' + j + ']').find('.karkas-name').text();
            selectedKarkas = selectedKarkas + $( "#state3" ).contents().find('*[data-id=' + j + ']').find('.karkas-name').text();
        }

        if (j < TOTAL_PAINTING) {
            selectedKarkas = selectedKarkas + ',';
        }
    }

    // Имя менеджера - nameM Телефон менеджера - phoneM Email менеджера - emailM
    var nameM = $('#nameM').val();
    var phoneM = $('#phoneM').val();
    var emailM = $('#emailM').val();
    ////////////////////////////////////////////////////////////////////////////

    // Отдельная цена  за кажен каркас (без наполнений,фурнитуры,покраски) - justCarcassPrice
    var justCarcassPriceStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        // justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $('*[data-id=' + j + ']').attr('data-karkas-price');
        justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $( "#state3" ).contents().find('*[data-id=' + j + ']').attr('data-karkas-price');
    }
    ////////////////////////////////////////////////////////////////////////////

    // Названия дополнений (на английском, я потом буду брать из бд) - colourSealant - colorDecorativeCap - colorDecorativeCapIn - typeMunting
    // var colourSealant = $('#karkas-tsvet-uplotnitelya').val();
    var colourSealant = $( "#state3" ).contents().find('#karkas-tsvet-uplotnitelya').val();
    // var colorDecorativeCap = $('#karkas-tsvet-zaglushki').val();
    var colorDecorativeCap = $( "#state3" ).contents().find('#karkas-tsvet-zaglushki').val();
    // var colorDecorativeCapIn = $('#karkas-tsvet-zaglushki-tortsevoy').val();
    var colorDecorativeCapIn = $( "#state3" ).contents().find('#karkas-tsvet-zaglushki-tortsevoy').val();
    // var typeMunting = $('#karkas-vid-krepleniya').val();
    var typeMunting = $( "#state3" ).contents().find('#karkas-vid-krepleniya').val();
    ////////////////////////////////////////////////////////////////////////////

    // Цена дополнений - priceAdditions
    var priceAdditions = 0;
    if (typeMunting == 'ДА') {
        priceAdditions = 186;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Кол.во дополнений - quantityAdditions
    var quantityAdditions = TOTAL_PAINTING;
    ////////////////////////////////////////////////////////////////////////////

    // Названия елементов фурнитуры
    var furnituraNameStr = '';
    if (furnituraSelect == 1) {
        // var slidingMechanisms = $(".razdvizhnyie-mehanizmyi option:selected").html();
        var slidingMechanisms = $( "#state3" ).contents().find(".razdvizhnyie-mehanizmyi option:selected").html();
        // var synchronizationMechanism = $(".mehanizm-sinhronizatsii option:selected").html();
        var synchronizationMechanism = $( "#state3" ).contents().find(".mehanizm-sinhronizatsii option:selected").html();
        // var runners = $(".napravlyayuschie option:selected").html();
        var runners = $( "#state3" ).contents().find(".napravlyayuschie option:selected").html();
        // var typeOfMountingRunners = $(".vidKrepleniyaNapravlyayuschey option:selected").html();
        var typeOfMountingRunners = $( "#state3" ).contents().find(".vidKrepleniyaNapravlyayuschey option:selected").html();
        // var lead = $(".povodok option:selected").html();
        var lead = $( "#state3" ).contents().find(".povodok option:selected").html();
        // var closers = $(".dovodchik option:selected").html();
        var closers = $( "#state3" ).contents().find(".dovodchik option:selected").html();
        // var coverStripForProfile = $(".dekorativnayaPlankaDlyaProfilya option:selected").html();
        var coverStripForProfile = $( "#state3" ).contents().find(".dekorativnayaPlankaDlyaProfilya option:selected").html();
        // var brushSeal = $(".schetochnyiyUplotnitel option:selected").html();
        var brushSeal = $( "#state3" ).contents().find(".schetochnyiyUplotnitel option:selected").html();
        // var pen = $('.rakovina option:selected').html();
        var pen = $( "#state3" ).contents().find('.rakovina option:selected').html();
        // var doorLock = $('.zamok option:selected').html();
        var doorLock = $( "#state3" ).contents().find('.zamok option:selected').html();
        furnituraNameStr = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        // var foldingMechanisms = $('.setSkladnyieMehanizmyi option:selected').html();
        var foldingMechanisms = $( "#state3" ).contents().find('.setSkladnyieMehanizmyi option:selected').html();
        // var loops = $('.petli option:selected').html();
        var loops = $( "#state3" ).contents().find('.petli option:selected').html();
        // var runners = $('.napravlyayuschie option:selected').html();
        var runners = $( "#state3" ).contents().find('.napravlyayuschie option:selected').html();
        // var typeOfMountingRunners = $('.vidKrepleniya option:selected').html();
        var typeOfMountingRunners = $( "#state3" ).contents().find('.vidKrepleniya option:selected').html();
        // var coverStripForProfile = $('.dekorativnayaPlankaDlyaProfilya option:selected').html();
        var coverStripForProfile = $( "#state3" ).contents().find('.dekorativnayaPlankaDlyaProfilya option:selected').html();
        // var brushSeal = $('.schetochnyiyUplotnitel option:selected').html();
        var brushSeal = $( "#state3" ).contents().find('.schetochnyiyUplotnitel option:selected').html();
        // var pen = $('.rakovina option:selected').html();
        var pen = $( "#state3" ).contents().find('.rakovina option:selected').html();
        // var mountingPen = $('.kreplenieRuchki option:selected').html();
        var mountingPen = $( "#state3" ).contents().find('.kreplenieRuchki option:selected').html();
        // var doorLock = $('.zamokSkladnyie option:selected').html();
        var doorLock = $( "#state3" ).contents().find('.zamokSkladnyie option:selected').html();
        furnituraNameStr = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
    } else if (furnituraSelect == 4) {
        // var legs = $('.nozhki option:selected').html();
        var legs = $( "#state3" ).contents().find('.nozhki option:selected').html();
        // var stands = $('.stoyki option:selected').html();
        var stands = $( "#state3" ).contents().find('.stoyki option:selected').html();
        // var typeOfConnectionPaintings = $('.tipSoedineniyaPoloten option:selected').html();
        var typeOfConnectionPaintings = $( "#state3" ).contents().find('.tipSoedineniyaPoloten option:selected').html();
        furnituraNameStr = legs + "$" + stands + "$" + typeOfConnectionPaintings;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Цена елементов фурнитуры
    var furnituraElPrice = '';
    if (furnituraSelect == 1) {
        // var slidingMechanisms = parseInt($('.tab-content .razdvizhnyie-mehanizmyi .price').text());
        var slidingMechanisms = parseInt($( "#state3" ).contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').text());
        // var synchronizationMechanism = parseInt($('.tab-content .mehanizm-sinhronizatsii .price').text());
        var synchronizationMechanism = parseInt($( "#state3" ).contents().find('.tab-content .mehanizm-sinhronizatsii .price').text());
        // var runners = parseInt($('.tab-content .napravlyayuschie .price').text());
        var runners = parseInt($( "#state3" ).contents().find('.tab-content .napravlyayuschie .price').text());
        // var typeOfMountingRunners = parseInt($('.tab-content .vidKrepleniyaNapravlyayuschey .price').text());
        var typeOfMountingRunners = parseInt($( "#state3" ).contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').text());
        // var lead = parseInt($('.tab-content .povodok .price').text());
        var lead = parseInt($( "#state3" ).contents().find('.tab-content .povodok .price').text());

        // var closers = parseInt($('.tab-content .dovodchik .price').text());
        var closers = parseInt($( "#state3" ).contents().find('.tab-content .dovodchik .price').text());
        // var coverStripForProfile = parseInt($('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        var coverStripForProfile = parseInt($( "#state3" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        // var brushSeal = parseInt($('.tab-content .schetochnyiyUplotnitel .price').text());
        var brushSeal = parseInt($( "#state3" ).contents().find('.tab-content .schetochnyiyUplotnitel .price').text());
        // var pen = parseInt($('.tab-content .rakovina .price').text());
        var pen = parseInt($( "#state3" ).contents().find('.tab-content .rakovina .price').text());
        // var doorLock = parseInt($('.tab-content .zamok .price').text());
        var doorLock = parseInt($( "#state3" ).contents().find('.tab-content .zamok .price').text());
        furnituraElPrice = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        // var foldingMechanisms = parseInt($('.tab-content .setSkladnyieMehanizmyi .price').text());
        var foldingMechanisms = parseInt($( "#state3" ).contents().find('.tab-content .setSkladnyieMehanizmyi .price').text());
        // var loops = parseInt($('.tab-content .petli .price').text());
        var loops = parseInt($( "#state3" ).contents().find('.tab-content .petli .price').text());
        // var runners = parseInt($('.tab-content .napravlyayuschie .price').text());
        var runners = parseInt($( "#state3" ).contents().find('.tab-content .napravlyayuschie .price').text());
        // var typeOfMountingRunners = parseInt($('.tab-content .vidKrepleniya .price').text());
        var typeOfMountingRunners = parseInt($( "#state3" ).contents().find('.tab-content .vidKrepleniya .price').text());

        // var coverStripForProfile = parseInt($('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        var coverStripForProfile = parseInt($( "#state3" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text());
        // var brushSeal = parseInt($('.tab-content .schetochnyiyUplotnitel .price').text());
        var brushSeal = parseInt($( "#state3" ).contents().find('.tab-content .schetochnyiyUplotnitel .price').text());
        // var pen = parseInt($('.tab-content .rakovina .price').text());
        var pen = parseInt($( "#state3" ).contents().find('.tab-content .rakovina .price').text());
        // var mountingPen = parseInt($('.tab-content .kreplenieRuchki .price').text());
        var mountingPen = parseInt($( "#state3" ).contents().find('.tab-content .kreplenieRuchki .price').text());
        // var doorLock = parseInt($('.tab-content .zamokSkladnyie .price').text());
        var doorLock = parseInt($( "#state3" ).contents().find('.tab-content .zamokSkladnyie .price').text());
        furnituraElPrice = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
    } else if (furnituraSelect == 4) {
        // var legs = parseInt($('.tab-content .nozhki .price').text());
        var legs = parseInt($( "#state3" ).contents().find('.tab-content .nozhki .price').text());
        // var stands = parseInt($('.tab-content .stoyki .price').text());
        var stands = parseInt($( "#state3" ).contents().find('.tab-content .stoyki .price').text());
        // var typeOfConnectionPaintingsPrice = parseInt($('.tab-content .tipSoedineniyaPoloten .price').text());
        var typeOfConnectionPaintingsPrice = parseInt($( "#state3" ).contents().find('.tab-content .tipSoedineniyaPoloten .price').text());
        furnituraElPrice = legs + "$" + stands + "$" + typeOfConnectionPaintingsPrice;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Название картинки покраски профиля - nameProfilePicturePainting
    // var nameProfilePicturePainting = $('.vyiborDekoraDlyaProfilya img').attr('src');
    var nameProfilePicturePainting = $( "#state3" ).contents().find('.vyiborDekoraDlyaProfilya img').attr('src');
    nameProfilePicturePainting = nameProfilePicturePainting.match(/([\w,\s-]+)\.[A-Za-z]{3}/)[1];
    ////////////////////////////////////////////////////////////////////////////

    // Цену покраски профиля - priceProfilePainting
    var priceProfilePaintingStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        // priceProfilePaintingStr = priceProfilePaintingStr + '&priceProfilePaintingPrice-' + j + '=' + $('*[data-id=' + j + ']').attr('data-decor-price');
        priceProfilePaintingStr = priceProfilePaintingStr + '&priceProfilePaintingPrice-' + j + '=' + $( "#state3" ).contents().find('*[data-id=' + j + ']').attr('data-decor-price');
    }
    ////////////////////////////////////////////////////////////////////////////


    var m = [];
    var m2 = [];
    // var TOTAL_PAINTING = parseInt($('#TOTAL_PAINTING_ID').val());
    var TOTAL_PAINTING = parseInt($( "#state3" ).contents().find('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)){
        TOTAL_PAINTING = 0;
    }
    // =
    // - Создали внутренние массивы
    if (TOTAL_PAINTING > 0){
        for (i = 0; i <= TOTAL_PAINTING-1; i++) {
            m[i] = new Array(4);
        }
    }
    // =
    // - Массив со всеми данными
    for (var i = 0; i < TOTAL_PAINTING; i++) {

        // var karkasName = $('*[data-id=' + (i + 1) + ']').find('.karkas-name').text();
        var karkasName = $( "#state3" ).contents().find('*[data-id=' + (i + 1) + ']').find('.karkas-name').text();
        if (karkasName == 'Optimax2') {
            selectedKarkas = 'OptimaхTwo';
        } else if (karkasName == 'Statusx1') {
            selectedKarkas = 'StatusхOne';
        } else if (karkasName == 'Statusx2') {
            selectedKarkas = 'StatusхTwo';
        } else {
            selectedKarkas = karkasName;
        }

        m[i][0] = selectedKarkas;
        // m[i][1] = parseInt($('*[data-id="' + (i+1) + '"]').attr('data-karkas-price') );
        m[i][1] = parseInt($( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-price') );
        // m[i][2] = parseInt($('*[data-id="' + (i+1) + '"]').attr('data-width') ) + parseInt(( $('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
        m[i][2] = parseInt($( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-width') ) + parseInt(( $('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
        m[i][3] =
            // '1' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-uplotnitelya') + '$' +
            '1' + $( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-uplotnitelya') + '$' +
            // '2' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki') + '$' +
            '2' + $( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki') + '$' +
            // '3' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + '$' +
            '3' + $( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + '$' +
            // '4' + $('*[data-id="' + (i+1) + '"]').attr('data-karkas-vid-krepleniya');
            '4' + $( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-vid-krepleniya');
    }
    for (var i = 0; i < TOTAL_PAINTING; i++) {
        if (m2.length == 0){
            m2.push(m[i][0]);
            m2.push(m[i][1]);
            m2.push(m[i][2]);
            m2.push(m[i][3]);
        }
        else {
            var status = true;
            var price = 0;
            for (var j = 0; j < m2.length; j++) {
                if (m2[j] == m[i][0]) {
                    for (var g = m2.length; g >= 0; g--) {
                        if (m2[g] == m[i][0]){
                            m2[j+1] = parseInt(m2[j+1]) + parseInt(m[i][1]);
                            m2[j+2] = parseInt(m2[j+2]) + parseInt(m[i][2]);
                        }
                    }
                    status = false;
                }
            }
            if (status == true){
                m2.push(m[i][0]);
                m2.push(m[i][1]);
                m2.push(m[i][2]);
                m2.push(m[i][3]);
            }
        }
    }


    var url = '?furnitura-select=' + furnituraSelect +
        '&Allheight=' + Allheight +
        '&Allwidth=' + Allwidth +
        '&count=' + count +
        '&count1=' + count1 +
        '&TOTAL=' + TOTAL +
        '&TOTAL2=' + TOTAL2 +
        '&productionRub=' + productionRub +
        '&installationRub=' + installationRub +
        '&shippingRub=' + shippingRub +
        '&urgencyRub=' + urgencyRub +
        '&marginRub=' + marginRub +
        '&TotalPolotno=' + TotalPolotno +
        '&AddonTotal=' + AddonTotal +
        '&FurnituraTotal=' + FurnituraTotal +
        '&selectedMaterials=' + selectedMaterials +
        '&fotoNames=' + fotoNames +
        '&fullAllPriceInNapolnenie=' + fullAllPriceInNapolnenie +
        '&nameM=' + nameM +
        '&phoneM=' + phoneM +
        '&emailM=' + emailM +
        '&colourSealant=' + colourSealant +
        '&colorDecorativeCap=' + colorDecorativeCap +
        '&colorDecorativeCapIn=' + colorDecorativeCapIn +
        '&typeMunting=' + typeMunting +
        '&priceAdditions=' + priceAdditions +
        '&quantityAdditions=' + quantityAdditions +
        justCarcassPriceStr +
        '&screen=' + screen +
        '&furnituraelementsnames=' + furnituraNameStr +
        '&furnituraelementsprice=' + furnituraElPrice +
        priceProfilePaintingStr +
        nameProfilePicturePainting +
        '&selectedKarkas=' + m2 +
        '&state3Profile' + '15290' +
        '&state3Furnitura' + '19320' +
        '&state3Zapolnenie' + '19320' +
        '&state3Zamer' + '1000' +
        '&state3Montaj' + '10000' +
        '&state3Dostavka' + '1000';
    url = url.replace(/°/g, "");
    url = urlLit(url, 0);
    window.open('http://fasts-like.com/html2pdf.php' + url, '_blank');
};

// 1.5  - траслитерация url
function urlLit(w, v) {
    var tr = 'a b v g d e ["zh","j"] z i y k l m n o p r s t u f h c ch sh ["shh","shch"] ~ y ~ e yu ya ~ ["jo","e"]'.split(' ');
    var ww = '';
    w = w.toLowerCase().replace(/ /g, '-');
    for (i = 0; i < w.length; ++i) {
        cc = w.charCodeAt(i);
        ch = (cc >= 1072 ? tr[cc - 1072] : w[i]);
        if (ch.length < 3) ww += ch; else ww += eval(ch)[v];
    }
    return (ww.replace(/~/g, ''));
}

