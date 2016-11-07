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
                    sendUrl2(response);
                },
                error:function(xhr, ajaxOptions, thrownError){
                }
            });
        }
    });
}

function getScreen3() {
    html2canvas($( "#state3" ).contents().find("#PAINTING-DIAGRAMMA"), {
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
                    sendUrl3(response);
                },
                error:function(xhr, ajaxOptions, thrownError){
                }
            });
        }
    });
}

// 2 - отправка
function sendUrl(screen) {
    var TOTAL_PAINTING = parseInt($( "#state1" ).contents().find('#TOTAL_PAINTING_ID').val());
    var furnituraSelect = $( "#state1" ).contents().find("#TYPE_BAFFLE_ID").val();
    var Allheight = $( "#state1" ).contents().find('#HIGHT_SETS_ID').val();
    var Allwidth = $( "#state1" ).contents().find('#WIDTH_SETS_ID').val();
    var count = TOTAL_PAINTING;
    var count1 = $( "#state1" ).contents().find('#MOVABLE_PAINTING_ID').val();
    var TOTAL = $( "#state1" ).contents().find('.summaBezParametrov .price').text();
    var TOTAL2 = $( "#state1" ).contents().find('.summaSParametrami .price').text();
    var productionRub = $( "#state1" ).contents().find('.proizvaodstvoTo input').val();
    var installationRub = $( "#state1" ).contents().find('.montazhTo input').val();
    var urgencyRub = $( "#state1" ).contents().find('.srochnostTo input').val();
    var shippingRub = $( "#state1" ).contents().find('.srochnostTo input').val();
    var marginRub = $( "#state1" ).contents().find('.dostavkaTo input').val();
    var TotalPolotno = 0;
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        var s = $( "#state1" ).contents().find('*[data-id="' + i + '"]').find(".data-price-in-profil").text();
        TotalPolotno = TotalPolotno + parseInt(s);
    }
    var AddonTotal = 0;
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        AddonTotal = AddonTotal + parseInt( $( "#state1" ).contents().find('*[data-id="' + i + '"]').find(".data-price-in-napolnenii").text() );
    }
    var FurnituraTotal = $( "#state1" ).contents().find('.furnitura-price .price').html();
    var selectedMaterials = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
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
    var l = $( "#state1" ).contents().find('.loadImgBlock input[type=file]').length - 1;
    var fotoNames = '';
    for (i = 0; i <= l; i++) {
        fotoNames = fotoNames + $( "#state1" ).contents().find('.loadImgBlock input[type=file]')[i].files[0].name;
        if (i < l) {
            fotoNames = fotoNames + ',';
        }
    }
    var fullAllPriceInNapolnenie = 0;
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
            var p = $( "#state1" ).contents().find('*[data-id=' + i + ']').find('.material-' + i + '-price').text();
            if (isNaN(p) || p == 'NaN' || p == '' || p == 0 || p == '0') {
                p = 0;
            }
            fullAllPriceInNapolnenie = parseFloat(fullAllPriceInNapolnenie) + parseFloat(p);
        }
    }
    var selectedKarkas = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        var karkasName = $( "#state1" ).contents().find('*[data-id=' + j + ']').find('.karkas-name').text();
        if (karkasName == 'Optimax2') {
            selectedKarkas = selectedKarkas + 'OptimaхTwo';
        } else if (karkasName == 'Statusx1') {
            selectedKarkas = selectedKarkas + 'StatusхOne';
        } else if (karkasName == 'Statusx2') {
            selectedKarkas = selectedKarkas + 'StatusхTwo';
        } else {
            selectedKarkas = selectedKarkas + $( "#state1" ).contents().find('*[data-id=' + j + ']').find('.karkas-name').text();
        }
        if (j < TOTAL_PAINTING) {
            selectedKarkas = selectedKarkas + ',';
        }
    }

    // Отдельная цена  за кажен каркас (без наполнений,фурнитуры,покраски) - justCarcassPrice
    var justCarcassPriceStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $( "#state1" ).contents().find('*[data-id=' + j + ']').attr('data-karkas-price');
    }
    ////////////////////////////////////////////////////////////////////////////

    // Названия елементов фурнитуры
    var furnituraNameStr = '';
    if (furnituraSelect == 1) {
        var slidingMechanisms = $( "#state1" ).contents().find(".razdvizhnyie-mehanizmyi h4.text").html();
        var synchronizationMechanism = $( "#state1" ).contents().find(".mehanizm-sinhronizatsii h4.text").html();
        var runners = $( "#state1" ).contents().find(".napravlyayuschie h4.text").html();
        var typeOfMountingRunners = $( "#state1" ).contents().find(".vidKrepleniyaNapravlyayuschey h4.text").html();
        var lead = $( "#state1" ).contents().find(".povodok h4.text").html();
        var closers = $( "#state1" ).contents().find(".dovodchik h4.text").html();
        var coverStripForProfile = $( "#state1" ).contents().find(".dekorativnayaPlankaDlyaProfilya h4.text").html();
        var brushSeal = $( "#state1" ).contents().find(".schetochnyiyUplotnitel h4.text").html();
        var pen = $( "#state1" ).contents().find('.rakovina h4.text').html();
        var doorLock = $( "#state1" ).contents().find('.zamok h4.text').html();
        if ($( "#state1" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraNameStr = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
        }else{
            furnituraNameStr = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead;
        }
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        var foldingMechanisms = $( "#state1" ).contents().find('.setSkladnyieMehanizmyi h4.text').html();
        var loops = $( "#state1" ).contents().find('.petli-skladnie h4.text').html();
        var runners = $( "#state1" ).contents().find('.napravlyayuschie-skladnie h4.text').html();
        var typeOfMountingRunners = $( "#state1" ).contents().find('.vidKrepleniya-skladnie h4.text').html();
        var coverStripForProfile = $( "#state1" ).contents().find('.dekorativnayaPlankaDlyaProfilya-skladnie h4.text').html();
        var brushSeal = $( "#state1" ).contents().find('.schetochnyiyUplotnitel-skladnie h4.text').html();
        var pen = $( "#state1" ).contents().find('.rakovina-skladnie h4.text').html();
        var mountingPen = $( "#state1" ).contents().find('.kreplenieRuchki-skladnie h4.text').html();
        var doorLock = $( "#state1" ).contents().find('.zamokSkladnyie-skladnie h4.text').html();
        if ($( "#state1" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraNameStr = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
        }else{
            furnituraNameStr = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners;
        }
    } else if (furnituraSelect == 4) {
        var legs = $( "#state1" ).contents().find('.nozhki-mobil h4.text').html();
        var stands = $( "#state1" ).contents().find('.stoyki-mobil h4.text').html();
        var typeOfConnectionPaintings = $( "#state1" ).contents().find('.tipSoedineniyaPoloten-mobil h4.text').html();
        furnituraNameStr = legs + "$" + stands + "$" + typeOfConnectionPaintings;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Цена елементов фурнитуры
    var furnituraElPrice = '';
    if (furnituraSelect == 1) {
        var slidingMechanisms = parseInt($( "#state1" ).contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').html());
        var synchronizationMechanism = parseInt($( "#state1" ).contents().find('.tab-content .mehanizm-sinhronizatsii .price').html());
        var runners = parseInt($( "#state1" ).contents().find('.tab-content .napravlyayuschie .price').html());
        var typeOfMountingRunners = parseInt($( "#state1" ).contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').html());
        var lead = parseInt($( "#state1" ).contents().find('.tab-content .povodok .price').html());

        var closers = parseInt($( "#state1" ).contents().find('.tab-content .dovodchik .price').html());
        var coverStripForProfile = parseInt($( "#state1" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').html());
        var brushSeal = parseInt($( "#state1" ).contents().find('.tab-content .schetochnyiyUplotnitel .price').html());
        var pen = parseInt($( "#state1" ).contents().find('.tab-content .rakovina .price').html());
        var doorLock = parseInt($( "#state1" ).contents().find('.tab-content .zamok .price').html());
        if ($( "#state1" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraElPrice = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
        }else{
            furnituraElPrice = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead;
        }
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        var foldingMechanisms = parseInt($( "#state1" ).contents().find('.tab-content .setSkladnyieMehanizmyi .price').html());
        var loops = parseInt($( "#state1" ).contents().find('.tab-content .petli-skladnie .price').html());
        var runners = parseInt($( "#state1" ).contents().find('.tab-content .napravlyayuschie-skladnie .price').html());
        var typeOfMountingRunners = parseInt($( "#state1" ).contents().find('.tab-content .vidKrepleniya-skladnie .price').html());

        var coverStripForProfile = parseInt($( "#state1" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya-skladnie .price').html());
        var brushSeal = parseInt($( "#state1" ).contents().find('.tab-content .schetochnyiyUplotnitel-skladnie .price').html());
        var pen = parseInt($( "#state1" ).contents().find('.tab-content .rakovina-skladnie .price').html());
        var mountingPen = parseInt($( "#state1" ).contents().find('.tab-content .kreplenieRuchki-skladnie .price').html());
        var doorLock = parseInt($( "#state1" ).contents().find('.tab-content .zamokSkladnyie-skladnie .price').html());
        if ($( "#state1" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraElPrice = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
        }else{
            furnituraElPrice = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners;
        }
    } else if (furnituraSelect == 4) {
        var legs = parseInt($( "#state1" ).contents().find('.tab-content .nozhki-mobil .price').html());
        var stands = parseInt($( "#state1" ).contents().find('.tab-content .stoyki-mobil .price').html());
        var typeOfConnectionPaintingsPrice = parseInt($( "#state1" ).contents().find('.tab-content .tipSoedineniyaPoloten-mobil .price').html());
        furnituraElPrice = legs + "$" + stands + "$" + typeOfConnectionPaintingsPrice;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Название картинки покраски профиля - nameProfilePicturePainting
    var nameProfilePicturePainting = $( "#state1" ).contents().find("#pokraskaTypeAndName").val();
    ////////////////////////////////////////////////////////////////////////////

    // Цену покраски профиля - priceProfilePainting
    var priceProfilePainting = $( "#state1" ).contents().find(".TAB-POKRASKA-PRICE").html();
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
        m[i][2] = parseInt($( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-width') ) + parseInt(( $( "#state1" ).contents().find('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
        m[i][3] =
            $( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-uplotnitelya') + "," +
            $( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki') + "," +
            $( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + "," +
            $( "#state1" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-vid-krepleniya');
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
        justCarcassPriceStr +
        '&screen=' + screen +
        '&furnituraelementsnames=' + furnituraNameStr +
        '&furnituraelementsprice=' + furnituraElPrice +
        '&priceprofilepainting=' + priceProfilePainting +
        '&nameprofilepicturepainting=' + nameProfilePicturePainting +
        '&selectedKarkas=' + m2 +
        '&state2Profile=' + '15290' +
        '&state2Furnitura=' + '19320' +
        '&state2Zapolnenie=' + '4930' +
        '&state2Production=' + '1000' +
        '&state2Zamer=' + '1000' +
        '&state2Montaj=' + '10000' +
        '&state2Dostavka=' + '1000'+
        '&state3Profile=' + '15290' +
        '&state3Furnitura=' + '19320' +
        '&state3Zapolnenie=' + '4930' +
        '&state3Production=' + '1000' +
        '&state3Zamer=' + '1000' +
        '&state3Montaj=' + '10000' +
        '&state3Dostavka=' + '1000';
    url = url.replace(/°/g, "");
    url = urlLit(url, 0);
    window.open('http://fasts-like.com/html2pdf.php' + url, '_blank');
};

function sendUrl2(screen) {
    var TOTAL_PAINTING = parseInt($( "#state2" ).contents().find('#TOTAL_PAINTING_ID').val());
    var furnituraSelect = $( "#state2" ).contents().find("#TYPE_BAFFLE_ID").val();
    var Allheight = $( "#state2" ).contents().find('#HIGHT_SETS_ID').val();
    var Allwidth = $( "#state2" ).contents().find('#WIDTH_SETS_ID').val();
    var count = TOTAL_PAINTING;
    var count1 = $( "#state2" ).contents().find('#MOVABLE_PAINTING_ID').val();
    var TOTAL = $( "#state2" ).contents().find('.summaBezParametrov .price').text();
    var TOTAL2 = $( "#state2" ).contents().find('.summaSParametrami .price').text();
    var productionRub = $( "#state2" ).contents().find('.proizvaodstvoTo input').val();
    var installationRub = $( "#state2" ).contents().find('.montazhTo input').val();
    var urgencyRub = $( "#state2" ).contents().find('.srochnostTo input').val();
    var shippingRub = $( "#state2" ).contents().find('.srochnostTo input').val();
    var marginRub = $( "#state2" ).contents().find('.dostavkaTo input').val();
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
    var FurnituraTotal = $( "#state2" ).contents().find('.furnitura-price .price').html();
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

    // Отдельная цена  за кажен каркас (без наполнений,фурнитуры,покраски) - justCarcassPrice
    var justCarcassPriceStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        // justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $('*[data-id=' + j + ']').attr('data-karkas-price');
        justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $( "#state2" ).contents().find('*[data-id=' + j + ']').attr('data-karkas-price');
    }
    ////////////////////////////////////////////////////////////////////////////

    // Названия елементов фурнитуры
    var furnituraNameStr = '';
    if (furnituraSelect == 1) {
        var slidingMechanisms = $( "#state2" ).contents().find(".razdvizhnyie-mehanizmyi h4.text").html();
        var synchronizationMechanism = $( "#state2" ).contents().find(".mehanizm-sinhronizatsii h4.text").html();
        var runners = $( "#state2" ).contents().find(".napravlyayuschie h4.text").html();
        var typeOfMountingRunners = $( "#state2" ).contents().find(".vidKrepleniyaNapravlyayuschey h4.text").html();
        var lead = $( "#state2" ).contents().find(".povodok h4.text").html();
        var closers = $( "#state2" ).contents().find(".dovodchik h4.text").html();
        var coverStripForProfile = $( "#state2" ).contents().find(".dekorativnayaPlankaDlyaProfilya h4.text").html();
        var brushSeal = $( "#state2" ).contents().find(".schetochnyiyUplotnitel h4.text").html();
        var pen = $( "#state2" ).contents().find('.rakovina h4.text').html();
        var doorLock = $( "#state2" ).contents().find('.zamok h4.text').html();
        if ($( "#state2" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraNameStr = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
        }else{
            furnituraNameStr = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead;
        }
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        var foldingMechanisms = $( "#state2" ).contents().find('.setSkladnyieMehanizmyi h4.text').html();
        var loops = $( "#state2" ).contents().find('.petli-skladnie h4.text').html();
        var runners = $( "#state2" ).contents().find('.napravlyayuschie-skladnie h4.text').html();
        var typeOfMountingRunners = $( "#state2" ).contents().find('.vidKrepleniya-skladnie h4.text').html();
        var coverStripForProfile = $( "#state2" ).contents().find('.dekorativnayaPlankaDlyaProfilya-skladnie h4.text').html();
        var brushSeal = $( "#state2" ).contents().find('.schetochnyiyUplotnitel-skladnie h4.text').html();
        var pen = $( "#state2" ).contents().find('.rakovina-skladnie h4.text').html();
        var mountingPen = $( "#state2" ).contents().find('.kreplenieRuchki-skladnie h4.text').html();
        var doorLock = $( "#state2" ).contents().find('.zamokSkladnyie-skladnie h4.text').html();
        if ($( "#state2" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraNameStr = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
        }else{
            furnituraNameStr = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners;
        }
    } else if (furnituraSelect == 4) {
        var legs = $( "#state2" ).contents().find('.nozhki-mobil h4.text').html();
        var stands = $( "#state2" ).contents().find('.stoyki-mobil h4.text').html();
        var typeOfConnectionPaintings = $( "#state2" ).contents().find('.tipSoedineniyaPoloten-mobil h4.text').html();
        furnituraNameStr = legs + "$" + stands + "$" + typeOfConnectionPaintings;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Цена елементов фурнитуры
    var furnituraElPrice = '';
    if (furnituraSelect == 1) {
        var slidingMechanisms = parseInt($( "#state2" ).contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').html());
        var synchronizationMechanism = parseInt($( "#state2" ).contents().find('.tab-content .mehanizm-sinhronizatsii .price').html());
        var runners = parseInt($( "#state2" ).contents().find('.tab-content .napravlyayuschie .price').html());
        var typeOfMountingRunners = parseInt($( "#state1" ).contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').html());
        var lead = parseInt($( "#state2" ).contents().find('.tab-content .povodok .price').html());

        var closers = parseInt($( "#state2" ).contents().find('.tab-content .dovodchik .price').html());
        var coverStripForProfile = parseInt($( "#state2" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').html());
        var brushSeal = parseInt($( "#state2" ).contents().find('.tab-content .schetochnyiyUplotnitel .price').html());
        var pen = parseInt($( "#state2" ).contents().find('.tab-content .rakovina .price').html());
        var doorLock = parseInt($( "#state2" ).contents().find('.tab-content .zamok .price').html());
        if ($( "#state2" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraElPrice = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
        }else{
            furnituraElPrice = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead;
        }
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        var foldingMechanisms = parseInt($( "#state2" ).contents().find('.tab-content .setSkladnyieMehanizmyi .price').html());
        var loops = parseInt($( "#state2" ).contents().find('.tab-content .petli-skladnie .price').html());
        var runners = parseInt($( "#state2" ).contents().find('.tab-content .napravlyayuschie-skladnie .price').html());
        var typeOfMountingRunners = parseInt($( "#state2" ).contents().find('.tab-content .vidKrepleniya-skladnie .price').html());

        var coverStripForProfile = parseInt($( "#state2" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya-skladnie .price').html());
        var brushSeal = parseInt($( "#state2" ).contents().find('.tab-content .schetochnyiyUplotnitel-skladnie .price').html());
        var pen = parseInt($( "#state2" ).contents().find('.tab-content .rakovina-skladnie .price').html());
        var mountingPen = parseInt($( "#state2" ).contents().find('.tab-content .kreplenieRuchki-skladnie .price').html());
        var doorLock = parseInt($( "#state2" ).contents().find('.tab-content .zamokSkladnyie-skladnie .price').html());
        if ($( "#state2" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraElPrice = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
        }else{
            furnituraElPrice = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners;
        }
    } else if (furnituraSelect == 4) {
        var legs = parseInt($( "#state2" ).contents().find('.tab-content .nozhki-mobil .price').html());
        var stands = parseInt($( "#state2" ).contents().find('.tab-content .stoyki-mobil .price').html());
        var typeOfConnectionPaintingsPrice = parseInt($( "#state2" ).contents().find('.tab-content .tipSoedineniyaPoloten-mobil .price').html());
        furnituraElPrice = legs + "$" + stands + "$" + typeOfConnectionPaintingsPrice;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Название картинки покраски профиля - nameProfilePicturePainting
    var nameProfilePicturePainting = $( "#state2" ).contents().find("#pokraskaTypeAndName").val();
    ////////////////////////////////////////////////////////////////////////////

    // Цену покраски профиля - priceProfilePainting
    var priceProfilePainting = $( "#state2" ).contents().find(".TAB-POKRASKA-PRICE").html();
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
        m[i][2] = parseInt($( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-width') ) + parseInt(( $( "#state2" ).contents().find('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
        m[i][3] =
            $( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-uplotnitelya') + "," +
            $( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki') + "," +
            $( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + "," +
            $( "#state2" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-vid-krepleniya');
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
        justCarcassPriceStr +
        '&screen=' + screen +
        '&furnituraelementsnames=' + furnituraNameStr +
        '&furnituraelementsprice=' + furnituraElPrice +
        '&priceprofilepainting=' + priceProfilePainting +
        '&nameprofilepicturepainting=' + nameProfilePicturePainting +
        '&selectedKarkas=' + m2 +
        '&state2Profile=' + '15290' +
        '&state2Furnitura=' + '19320' +
        '&state2Zapolnenie=' + '4930' +
        '&state2Production=' + '1000' +
        '&state2Zamer=' + '1000' +
        '&state2Montaj=' + '10000' +
        '&state2Dostavka=' + '1000'+
        '&state3Profile=' + '15290' +
        '&state3Furnitura=' + '19320' +
        '&state3Zapolnenie=' + '4930' +
        '&state3Production=' + '1000' +
        '&state3Zamer=' + '1000' +
        '&state3Montaj=' + '10000' +
        '&state3Dostavka=' + '1000';
    url = url.replace(/°/g, "");
    url = urlLit(url, 0);
    window.open('http://fasts-like.com/html2pdf.php' + url, '_blank');
};

function sendUrl3(screen) {
    var TOTAL_PAINTING = parseInt($( "#state3" ).contents().find('#TOTAL_PAINTING_ID').val());
    var furnituraSelect = $( "#state3" ).contents().find("#TYPE_BAFFLE_ID").val();
    var Allheight = $( "#state3" ).contents().find('#HIGHT_SETS_ID').val();
    var Allwidth = $( "#state3" ).contents().find('#WIDTH_SETS_ID').val();
    var count = TOTAL_PAINTING;
    var count1 = $( "#state3" ).contents().find('#MOVABLE_PAINTING_ID').val();
    var TOTAL = $( "#state3" ).contents().find('.summaBezParametrov .price').text();
    var TOTAL2 = $( "#state3" ).contents().find('.summaSParametrami .price').text();
    var productionRub = $( "#state3" ).contents().find('.proizvaodstvoTo input').val();
    var installationRub = $( "#state3" ).contents().find('.montazhTo input').val();
    var urgencyRub = $( "#state3" ).contents().find('.srochnostTo input').val();
    var shippingRub = $( "#state3" ).contents().find('.srochnostTo input').val();
    var marginRub = $( "#state3" ).contents().find('.dostavkaTo input').val();
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
    var FurnituraTotal = $( "#state3" ).contents().find('.furnitura-price .price').html();
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

    // Отдельная цена  за кажен каркас (без наполнений,фурнитуры,покраски) - justCarcassPrice
    var justCarcassPriceStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        // justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $('*[data-id=' + j + ']').attr('data-karkas-price');
        justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $( "#state3" ).contents().find('*[data-id=' + j + ']').attr('data-karkas-price');
    }
    ////////////////////////////////////////////////////////////////////////////

    // Названия елементов фурнитуры
    var furnituraNameStr = '';
    if (furnituraSelect == 1) {
        var slidingMechanisms = $( "#state3" ).contents().find(".razdvizhnyie-mehanizmyi h4.text").html();
        var synchronizationMechanism = $( "#state3" ).contents().find(".mehanizm-sinhronizatsii h4.text").html();
        var runners = $( "#state3" ).contents().find(".napravlyayuschie h4.text").html();
        var typeOfMountingRunners = $( "#state3" ).contents().find(".vidKrepleniyaNapravlyayuschey h4.text").html();
        var lead = $( "#state3" ).contents().find(".povodok h4.text").html();
        var closers = $( "#state3" ).contents().find(".dovodchik h4.text").html();
        var coverStripForProfile = $( "#state3" ).contents().find(".dekorativnayaPlankaDlyaProfilya h4.text").html();
        var brushSeal = $( "#state3" ).contents().find(".schetochnyiyUplotnitel h4.text").html();
        var pen = $( "#state3" ).contents().find('.rakovina h4.text').html();
        var doorLock = $( "#state3" ).contents().find('.zamok h4.text').html();
        if ($( "#state3" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraNameStr = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
        }else{
            furnituraNameStr = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead;
        }
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        var foldingMechanisms = $( "#state3" ).contents().find('.setSkladnyieMehanizmyi h4.text').html();
        var loops = $( "#state3" ).contents().find('.petli-skladnie h4.text').html();
        var runners = $( "#state3" ).contents().find('.napravlyayuschie-skladnie h4.text').html();
        var typeOfMountingRunners = $( "#state3" ).contents().find('.vidKrepleniya-skladnie h4.text').html();
        var coverStripForProfile = $( "#state3" ).contents().find('.dekorativnayaPlankaDlyaProfilya-skladnie h4.text').html();
        var brushSeal = $( "#state3" ).contents().find('.schetochnyiyUplotnitel-skladnie h4.text').html();
        var pen = $( "#state3" ).contents().find('.rakovina-skladnie h4.text').html();
        var mountingPen = $( "#state3" ).contents().find('.kreplenieRuchki-skladnie h4.text').html();
        var doorLock = $( "#state3" ).contents().find('.zamokSkladnyie-skladnie h4.text').html();
        if ($( "#state3" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            furnituraNameStr = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
        }else{
            furnituraNameStr = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners;
        }
    } else if (furnituraSelect == 4) {
        var legs = $( "#state3" ).contents().find('.nozhki-mobil h4.text').html();
        var stands = $( "#state3" ).contents().find('.stoyki-mobil h4.text').html();
        var typeOfConnectionPaintings = $( "#state3" ).contents().find('.tipSoedineniyaPoloten-mobil h4.text').html();
        furnituraNameStr = legs + "$" + stands + "$" + typeOfConnectionPaintings;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Цена елементов фурнитуры
    var furnituraElPrice = '';
    if (furnituraSelect == 1) {
        var slidingMechanisms = parseInt($( "#state3" ).contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').html());
        var synchronizationMechanism = parseInt($( "#state3" ).contents().find('.tab-content .mehanizm-sinhronizatsii .price').html());
        var runners = parseInt($( "#state3" ).contents().find('.tab-content .napravlyayuschie .price').html());
        var typeOfMountingRunners = parseInt($( "#state3" ).contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').html());
        var lead = parseInt($( "#state3" ).contents().find('.tab-content .povodok .price').html());

        var closers = parseInt($( "#state3" ).contents().find('.tab-content .dovodchik .price').html());
        var coverStripForProfile = parseInt($( "#state3" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').html());
        var brushSeal = parseInt($( "#state3" ).contents().find('.tab-content .schetochnyiyUplotnitel .price').html());
        var pen = parseInt($( "#state3" ).contents().find('.tab-content .rakovina .price').html());
        var doorLock = parseInt($( "#state3" ).contents().find('.tab-content .zamok .price').html());
        if ($( "#state3" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            urnituraElPrice = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead + "$" + closers + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + doorLock;
        }else{
            urnituraElPrice = slidingMechanisms + "$" + synchronizationMechanism + "$" + runners + "$" + typeOfMountingRunners + "$" + lead;
        }
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        var foldingMechanisms = parseInt($( "#state3" ).contents().find('.tab-content .setSkladnyieMehanizmyi .price').html());
        var loops = parseInt($( "#state3" ).contents().find('.tab-content .petli-skladnie .price').html());
        var runners = parseInt($( "#state3" ).contents().find('.tab-content .napravlyayuschie-skladnie .price').html());
        var typeOfMountingRunners = parseInt($( "#state3" ).contents().find('.tab-content .vidKrepleniya-skladnie .price').html());

        var coverStripForProfile = parseInt($( "#state3" ).contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya-skladnie .price').html());
        var brushSeal = parseInt($( "#state3" ).contents().find('.tab-content .schetochnyiyUplotnitel-skladnie .price').html());
        var pen = parseInt($( "#state3" ).contents().find('.tab-content .rakovina-skladnie .price').html());
        var mountingPen = parseInt($( "#state3" ).contents().find('.tab-content .kreplenieRuchki-skladnie .price').html());
        var doorLock = parseInt($( "#state3" ).contents().find('.tab-content .zamokSkladnyie-skladnie .price').html());
        if ($( "#state3" ).contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            urnituraElPrice = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners + "$" + coverStripForProfile + "$" + brushSeal + "$" + pen + "$" + mountingPen + "$" + doorLock;
        }else{
            urnituraElPrice = foldingMechanisms + "$" + loops + "$" + runners + "$" + typeOfMountingRunners;
        }
    } else if (furnituraSelect == 4) {
        var legs = parseInt($( "#state3" ).contents().find('.tab-content .nozhki-mobil .price').html());
        var stands = parseInt($( "#state3" ).contents().find('.tab-content .stoyki-mobil .price').html());
        var typeOfConnectionPaintingsPrice = parseInt($( "#state3" ).contents().find('.tab-content .tipSoedineniyaPoloten-mobil .price').html());
        furnituraElPrice = legs + "$" + stands + "$" + typeOfConnectionPaintingsPrice;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Название картинки покраски профиля - nameProfilePicturePainting
    var nameProfilePicturePainting = $( "#state3" ).contents().find("#pokraskaTypeAndName").val();
    ////////////////////////////////////////////////////////////////////////////

    // Цену покраски профиля - priceProfilePainting
    var priceProfilePainting = $( "#state3" ).contents().find(".TAB-POKRASKA-PRICE").html();
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
        m[i][2] = parseInt($( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-width') ) + parseInt(( $( "#state3" ).contents().find('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
        m[i][3] =
            $( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-uplotnitelya') + "," +
            $( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki') + "," +
            $( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + "," +
            $( "#state3" ).contents().find('*[data-id="' + (i+1) + '"]').attr('data-karkas-vid-krepleniya');
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
        justCarcassPriceStr +
        '&screen=' + screen +
        '&furnituraelementsnames=' + furnituraNameStr +
        '&furnituraelementsprice=' + furnituraElPrice +
        '&priceprofilepainting=' + priceProfilePainting +
        '&nameprofilepicturepainting=' + nameProfilePicturePainting +
        '&selectedKarkas=' + m2 +
        '&state2Profile=' + '15290' +
        '&state2Furnitura=' + '19320' +
        '&state2Zapolnenie=' + '4930' +
        '&state2Production=' + '1000' +
        '&state2Zamer=' + '1000' +
        '&state2Montaj=' + '10000' +
        '&state2Dostavka=' + '1000'+
        '&state3Profile=' + '15290' +
        '&state3Furnitura=' + '19320' +
        '&state3Zapolnenie=' + '4930' +
        '&state3Production=' + '1000' +
        '&state3Zamer=' + '1000' +
        '&state3Montaj=' + '10000' +
        '&state3Dostavka=' + '1000';
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

