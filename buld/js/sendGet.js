$('.sendGet').click(function () {
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
        var s = $('*[data-id="' + i + '"]').find(".data-price-in-profil").text();
        TotalPolotno = TotalPolotno + parseInt(s);
    }
    var AddonTotal = 0;
    for (i = 1; i <= TOTAL_PAINTING; i++) {
        AddonTotal = AddonTotal + parseInt($('*[data-id="' + i + '"]').find(".data-price-in-napolnenii").text());
    }
    var FurnituraTotal = $('.furnitura-price .price').text();
    var selectedMaterials = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
            var text = $('*[data-id=' + j + ']').find('.material-' + i + '-type').text();
            if (text == NaN || text == 'NaN' || text == '' || text == 0 || text == '0') {
                text = '';
            } else {
                selectedMaterials = selectedMaterials + text + ',';
            }
        }
    }
    selectedMaterials = selectedMaterials.substring(0, selectedMaterials.length - 1);
    console.log('f ', selectedMaterials);
    var l = $('.loadImgBlock input[type=file]').length - 1;
    var fotoNames = '';
    for (i = 0; i <= l; i++) {
        fotoNames = fotoNames + $('.loadImgBlock input[type=file]')[i].files[0].name;
        if (i < l) {
            fotoNames = fotoNames + ',';
        }
    }
    var fullAllPriceInNapolnenie = 0;
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        for (i = 1; i <= 5; i++) {
            var p = $('*[data-id=' + i + ']').find('.material-' + i + '-price').text();
            if (p == NaN || p == 'NaN' || p == '' || p == 0 || p == '0') {
                p = 0;
            }
            fullAllPriceInNapolnenie = parseFloat(fullAllPriceInNapolnenie) + parseFloat(p);
        }
    }
    var selectedKarkas = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {

        var karkasName = $('*[data-id=' + j + ']').find('.karkas-name').text();

        if (karkasName == 'Optimax2') {
            selectedKarkas = selectedKarkas + 'OptimaхTwo';
        } else if (karkasName == 'Statusx1') {
            selectedKarkas = selectedKarkas + 'StatusхOne';
        } else if (karkasName == 'Statusx2') {
            selectedKarkas = selectedKarkas + 'StatusхTwo';
        } else {
            selectedKarkas = selectedKarkas + $('*[data-id=' + j + ']').find('.karkas-name').text();
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
        justCarcassPriceStr = justCarcassPriceStr + '&karkas-price-' + j + '=' + $('*[data-id=' + j + ']').attr('data-karkas-price');
    }
    ////////////////////////////////////////////////////////////////////////////

    // Названия дополнений (на английском, я потом буду брать из бд) - colourSealant - colorDecorativeCap - colorDecorativeCapIn - typeMunting
    var colourSealant = $('#karkas-tsvet-uplotnitelya').val();
    var colorDecorativeCap = $('#karkas-tsvet-zaglushki').val();
    var colorDecorativeCapIn = $('#karkas-tsvet-zaglushki-tortsevoy').val();
    var typeMunting = $('#karkas-vid-krepleniya').val();
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
        // var slidingMechanisms = '&slidingMechanisms=' + $( '.razdvizhnyie-mehanizmyi select' ).val();
        var slidingMechanisms = '&slidingMechanisms=' + $(".razdvizhnyie-mehanizmyi option:selected").html();
        // var synchronizationMechanism = '&synchronizationMechanism=' + $( '.mehanizm-sinhronizatsii select' ).val();
        var synchronizationMechanism = '&synchronizationMechanism=' + $(".mehanizm-sinhronizatsii option:selected").html();
        // var runners = '&runners=' + $( '.napravlyayuschie select' ).val();
        var runners = '&runners=' + $(".napravlyayuschie option:selected").html();
        // var runnersCount = '&runnersCount=' + $( '.napravlyayuschie input' ).val();
        var runnersCount = '&runnersCount=' + $(".napravlyayuschie option:selected").html();
        // var typeOfMountingRunners = '&typeOfMountingRunners=' + $( '.vidKrepleniyaNapravlyayuschey select' ).val();
        var typeOfMountingRunners = '&typeOfMountingRunners=' + $(".vidKrepleniyaNapravlyayuschey option:selected").html();
        // var lead = '&lead=' + $( '.povodok select' ).val();
        var lead = '&lead=' + $(".povodok option:selected").html();
        // var closers = '&closers=' + $( '.dovodchik select' ).val();
        var closers = '&closers=' + $(".dovodchik option:selected").html();
        // var coverStripForProfile = '&coverStripForProfile=' + $( '.dekorativnayaPlankaDlyaProfilya select' ).val();
        var coverStripForProfile = '&coverStripForProfile=' + $(".dekorativnayaPlankaDlyaProfilya option:selected").html();
        // var brushSeal = '&brushSeal=' + $( '.schetochnyiyUplotnitel select' ).val();
        var brushSeal = '&brushSeal=' + $(".schetochnyiyUplotnitel option:selected").html();
        // var pen = '&pen=' + $( '.rakovina select' ).val();
        var pen = '&pen=' + $('.rakovina option:selected').html();
        // var doorLock = '&doorLock=' + $( '.zamok select' ).val();
        var doorLock = '&doorLock=' + $('.zamok option:selected').html();
        furnituraNameStr = slidingMechanisms + synchronizationMechanism + runners + runnersCount + typeOfMountingRunners + lead + closers + coverStripForProfile + brushSeal + pen + doorLock;
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        // var foldingMechanisms = '&foldingMechanisms=' + $( '.setSkladnyieMehanizmyi select' ).val();
        var foldingMechanisms = '&foldingMechanisms=' + $('.setSkladnyieMehanizmyi option:selected').html();
        // var loops = '&loops=' + $( '.petli select' ).val();
        var loops = '&loops=' + $('.petli option:selected').html();
        // var runners = '&runners=' + $( '.napravlyayuschie select' ).val();
        var runners = '&runners=' + $('.napravlyayuschie option:selected').html();
        // var typeOfMountingRunners = '&typeOfMountingRunners=' + $( '.vidKrepleniya select' ).val();
        var typeOfMountingRunners = '&typeOfMountingRunners=' + $('.vidKrepleniya option:selected').html();
        // var coverStripForProfile = '&coverStripForProfile=' + $( '.dekorativnayaPlankaDlyaProfilya select' ).val();
        var coverStripForProfile = '&coverStripForProfile=' + $('.dekorativnayaPlankaDlyaProfilya option:selected').html();
        // var brushSeal = '&brushSeal=' + $( '.schetochnyiyUplotnitel select' ).val();
        var brushSeal = '&brushSeal=' + $('.schetochnyiyUplotnitel option:selected').html();
        // var pen = '&pen=' + $( '.rakovina select' ).val();
        var pen = '&pen=' + $('.rakovina option:selected').html();
        // var mountingPen = '&mountingPen=' + $( '.kreplenieRuchki select' ).val();
        var mountingPen = '&mountingPen=' + $('.kreplenieRuchki option:selected').html();
        // var doorLock = '&doorLock=' + $( '.zamokSkladnyie select' ).val();
        var doorLock = '&doorLock=' + $('.zamokSkladnyie option:selected').html();
        furnituraNameStr = foldingMechanisms + loops + runners + typeOfMountingRunners + coverStripForProfile + brushSeal + pen + mountingPen + doorLock;
    } else if (furnituraSelect == 4) {
        // var legs = '&legs=' + $( '.nozhki select' ).val();
        var legs = '&legs=' + $('.nozhki option:selected').html();
        // var stands = '&stands=' + $( '.stoyki select' ).val();
        var stands = '&stands=' + $('.stoyki option:selected').html();
        // var typeOfConnectionPaintings = '&typeOfConnectionPaintings=' + $( '.tipSoedineniyaPoloten select' ).val();
        var typeOfConnectionPaintings = '&typeOfConnectionPaintings=' + $('.tipSoedineniyaPoloten option:selected').html();
        furnituraNameStr = legs + stands + typeOfConnectionPaintings;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Цена елементов фурнитуры
    var furnituraElPrice = '';
    if (furnituraSelect == 1) {
        var slidingMechanisms = '&slidingMechanismsPrice=' + $('.tab-content .razdvizhnyie-mehanizmyi .price').text();
        var synchronizationMechanism = '&synchronizationMechanismPrice=' + $('.tab-content .mehanizm-sinhronizatsii .price').text();
        var runners = '&runnersPrice=' + $('.tab-content .napravlyayuschie .price').text();
        var typeOfMountingRunners = '&typeOfMountingRunnersPrice=' + $('.tab-content .vidKrepleniyaNapravlyayuschey .price').text();
        var lead = '&leadPrice=' + $('.tab-content .povodok .price').text();
        var closers = '&closersPrice=' + $('.tab-content .dovodchik .price').text();
        var coverStripForProfile = '&coverStripForProfilePrice=' + $('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text();
        var brushSeal = '&brushSealPrice=' + $('.tab-content .schetochnyiyUplotnitel .price').text();
        var pen = '&penPrice=' + $('.tab-content .rakovina .price').text();
        var doorLock = '&doorLockPrice=' + $('.tab-content .zamok .price').text();
        furnituraElPrice = slidingMechanisms + synchronizationMechanism + runners + runnersCount + typeOfMountingRunners + lead + closers + coverStripForProfile + brushSeal + pen + doorLock;
    } else if (furnituraSelect == 2 || furnituraSelect == 3) {
        var foldingMechanisms = '&foldingMechanismsPrice=' + $('.tab-content .setSkladnyieMehanizmyi .price').text();
        var loops = '&loopsPrice=' + $('.tab-content .petli .price').text();
        var runners = '&runnersPrice=' + $('.tab-content .napravlyayuschie .price').text();
        var typeOfMountingRunners = '&typeOfMountingRunnersPrice=' + $('.tab-content .vidKrepleniya .price').text();
        var coverStripForProfile = '&coverStripForProfilePrice=' + $('.tab-content .dekorativnayaPlankaDlyaProfilya .price').text();
        var brushSeal = '&brushSealPrice=' + $('.tab-content .schetochnyiyUplotnitel .price').text();
        var pen = '&penPrice=' + $('.tab-content .rakovina .price').text();
        var mountingPen = '&mountingPenPrice=' + $('.tab-content .kreplenieRuchki .price').text();
        var doorLock = '&doorLockPrice=' + $('.tab-content .zamokSkladnyie .price').text();
        furnituraElPrice = foldingMechanisms + loops + runners + typeOfMountingRunners + coverStripForProfile + brushSeal + pen + mountingPen + doorLock;
    } else if (furnituraSelect == 4) {
        var legs = '&legsPrice=' + $('.tab-content .nozhki .price').text();
        var stands = '&standsPrice=' + $('.tab-content .stoyki .price').text();
        var typeOfConnectionPaintingsPrice = '&typeOfConnectionPaintings=' + $('.tab-content .tipSoedineniyaPoloten .price').text();
        furnituraElPrice = legs + stands + typeOfConnectionPaintings;
    }
    ////////////////////////////////////////////////////////////////////////////

    // Название картинки покраски профиля - nameProfilePicturePainting
    var nameProfilePicturePainting = $('.vyiborDekoraDlyaProfilya img').attr('src');
    nameProfilePicturePainting = nameProfilePicturePainting.match(/([\w,\s-]+)\.[A-Za-z]{3}/)[1];
    ////////////////////////////////////////////////////////////////////////////

    // Цену покраски профиля - priceProfilePainting
    var priceProfilePaintingStr = '';
    for (j = 1; j <= TOTAL_PAINTING; j++) {
        priceProfilePaintingStr = priceProfilePaintingStr + '&priceProfilePaintingPrice-' + j + '=' + $('*[data-id=' + j + ']').attr('data-decor-price');
    }
    ////////////////////////////////////////////////////////////////////////////


    var m = [];
    var m2 = [];
    var TOTAL_PAINTING = parseInt($('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)){
        TOTAL_PAINTING = 0;
    }
    // =
    // - Создали внутренние массивы
    if (TOTAL_PAINTING > 1){
        for (i = 0; i <= TOTAL_PAINTING-1; i++) {
            m[i] = new Array(3);
        }
    }
    // =
    // - Массив со всеми данными
    for (var i = 0; i < TOTAL_PAINTING; i++) {

        var karkasName = $('*[data-id=' + (i + 1) + ']').find('.karkas-name').text();
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
        m[i][1] = parseInt($('*[data-id="' + (i + 1 ) + '"]').attr('data-karkas-price') );
        m[i][2] = parseInt($('*[data-id="' + (i + 1 ) + '"]').attr('data-width') ) + parseInt(( $('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
    }
    for (var i = 0; i < TOTAL_PAINTING; i++) {
        if (m2.length == 0){
            m2.push(m[i][0]);
            m2.push(m[i][1]);
            m2.push(m[i][2]);
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
        furnituraNameStr +
        furnituraElPrice +
        priceProfilePaintingStr +
        nameProfilePicturePainting +
        '&selectedKarkas=' + m2;
    url = urlLit(url, 0)
    url = url.replace(/[%C2%]/g, "");
    window.open('http://fasts-like.com/html2pdf.php' + url, '_blank');
});

// траслитерация url
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




