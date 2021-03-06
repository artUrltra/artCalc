////////////////////////////////////////////////////////////////////////////////////////////// Функции работы с обьектом
// Установка даты и текста //
function setDataAndText(group, text) {
    $('#PAINTING-DIAGRAMMA *[data-group="' + $("#NUMBER_OF_DUPLICATOR_ID").val() + '"]').attr('data-' + group, text);
}
// ============================= //

// Получение даты //
function getFromData(name) {
    return $('#PAINTING-DIAGRAMMA *[data-id="' + $('.BAFFLE_SEKECTOR_CLASS').val() + '"]').attr('data-' + name);
}
// ============================= //
// Проверка числа на 0 и прочее. Результат 0 или число. //
function checkTheErrorNumber(e) {
    e = parseInt(e);
    if (isNaN(e) || e == 'NaN' || e === 0 || e === '' || e == '0' || e === null) {
        return 0;
    } else {
        return e;
    }
}
// =============================================== //
// Проверка на заполненность верхнего блока. begin
function checkTopBlock() {
    return $('#TOTAL_PAINTING_ID').val() > 0 && $('#HIGHT_SETS_ID').val() > 0 && $('#WIDTH_SETS_ID').val() > 0 ? 1 : 0;
}
// Проверка на заполненность верхнего блока. end
// =============================================== //

// ==================================================================================================================== //
////////////////////////////////////////////////////////////////////////////////////////////// Прочие функции
// ============================= //

// ДОПОЛНЕНИЯ //

var addon = {

    start: function () {
        addon.set_price_res();
        nfurnitura.fullprice();
    },

    // МЕТОДЫ
    // Цена
    set_price_res: function () {

    }
};

$(".addon-block").keypress(function () {

    var i = 0,
        diff = 0,
        d = new Date();
    var timer = setTimeout(function () {
        diff += new Date() - d;
        timer = setTimeout(arguments.callee, 0);
        if (i++ == 500) {
            clearTimeout(timer);
            addon.start();
        }
        d = new Date();
    }, 0);
});

// ============================= //
// Выбор изображения после диалога //
function setImg(number, total_painting, movable_painting) {
    TOTAL_PAINTING = total_painting;
    MOVABLE_PAINTING = movable_painting;
    setAllSaveParameters();
    $(".drawing img").attr("src", "img/schemas/" + number + ".png");
    $("#MOVABLE_PAINTING_ID").change();
    parent.state.setTopBlock();
}
// ============================= //
// Установка селектов полотен //
function SET_BAFFLE_SEKECTOR() {
    $(".BAFFLE_SEKECTOR_CLASS").empty();
    for (i = 1; i <= parseInt($('#TOTAL_PAINTING_ID').val()); i++) {
        if (i <= $('#MOVABLE_PAINTING_ID').val()) {
            $(".BAFFLE_SEKECTOR_CLASS").prepend($('<option value="' +
                i + '">' +
                'подвижные № ' +
                i +
                '</option>'));
        } else {
            $(".BAFFLE_SEKECTOR_CLASS").prepend($('<option value="' +
                i + '">' +
                '№ ' +
                i +
                '</option>'));
        }
    }
}
// ============================= //
// Событие смены селектов полотен
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ТАБ ПРОФИЛЬ - Выбор декора для профиля //
function addDecor(id) {
    $("#pokraskaTypeAndName").val(id);
    dekorRePrice();
}

function dekorRePrice() {
    if (getFromData("karkas-id") !== '' && getFromData("karkas-id") !== 0) {
        var id = $("#pokraskaTypeAndName").val();
        $.post("./admin/ajax.php?getDekor1", "id=" + id, function (data) {
            var obj = JSON.parse(data);
            $.post("./admin/ajax.php?getProfile", "get=1", function (data) {
                var objK = JSON.parse(data);
                var count = parseInt($("#TOTAL_PAINTING_ID").val());
                var TotalPrice = 0;
                // console.info(obj[0])
                if (obj[0] !== undefined) {
                    // console.info(obj[0].parent_id)
                    switch (obj[0].parent_id) {
                        case 1:
                            for (var i = 0; i < count; i++) {
                                var num = i + 1;
                                var idKarkas = $('*[data-id=' + num + ']').attr('data-karkas-id');
                                for (var j = 0; j < objK.length; j++) {
                                    if (objK[j].id == idKarkas) {
                                        var priceKarkas = objK[j].priceColor;
                                    }
                                }
                                var sizeW = parseInt($('*[data-id=' + num + ']').attr('data-width'));
                                var sizeH = parseInt($('*[data-id=' + num + ']').attr('data-height'));
                                var countPerH = parseInt($('*[data-id=' + num + ']').attr('data-horizontal-pereochki-count'));
                                var countPerV = parseInt($('*[data-id=' + num + ']').attr('data-vertikalnue-pereochki-count'));
                                var countProfil = 1;
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
                                TotalPrice = TotalPrice + ((((sizeW + sizeH) * 0.002) + (sizePerH + sizePerV)) * priceKarkas) * countProfil;
                            }
                            if (isNaN(TotalPrice)) {
                                TotalPrice = 0;
                            }
                            if (TotalPrice < 3860) {
                                TotalPrice = 3860;
                            }
                            $("span.TAB-POKRASKA-PRICE").text(parseInt(TotalPrice));
                            var area = (parseInt($("#WIDTH_SETS_ID").val()) * parseInt($("#HIGHT_SETS_ID").val())) / 1000000;
                            $(".TAB-POKRASKA-PLOSHAD").text(area.toFixed(1));
                            break;
                        case 3:
                            for (var i = 0; i < count; i++) {
                                var num = i + 1;
                                var idKarkas = $('*[data-id=' + num + ']').attr('data-karkas-id');
                                for (var j = 0; j < objK.length; j++) {
                                    if (objK[j].id == idKarkas) {
                                        var priceKarkas = objK[j].priceDekor;
                                    }
                                }
                                var sizeW = parseInt($('*[data-id=' + num + ']').attr('data-width'));
                                var sizeH = parseInt($('*[data-id=' + num + ']').attr('data-height'));
                                var countPerH = parseInt($('*[data-id=' + num + ']').attr('data-horizontal-pereochki-count'));
                                var countPerV = parseInt($('*[data-id=' + num + ']').attr('data-vertikalnue-pereochki-count'));
                                var countProfil = 1;
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
                                TotalPrice = TotalPrice + ((((sizeW + sizeH) * 0.002) + (sizePerH + sizePerV)) * priceKarkas) * countProfil;
                            }
                            if (isNaN(TotalPrice)) {
                                TotalPrice = 0;
                            }
                            if (TotalPrice < 3860) {
                                TotalPrice = 3860;
                            }
                            $("span.TAB-POKRASKA-PRICE").text(parseInt(TotalPrice));
                            var area = (parseInt($("#WIDTH_SETS_ID").val()) * parseInt($("#HIGHT_SETS_ID").val())) / 1000000;
                            $(".TAB-POKRASKA-PLOSHAD").text(area.toFixed(1));
                            break;
                        case 4:
                            for (var i = 0; i < count; i++) {
                                var num = i + 1;
                                var idKarkas = $('*[data-id=' + num + ']').attr('data-karkas-id');
                                for (var j = 0; j < objK.length; j++) {
                                    if (objK[j].id == idKarkas) {
                                        var priceKarkas = objK[j].priceAnod;
                                    }
                                }
                                var sizeW = parseInt($('*[data-id=' + num + ']').attr('data-width'));
                                var sizeH = parseInt($('*[data-id=' + num + ']').attr('data-height'));
                                var countPerH = parseInt($('*[data-id=' + num + ']').attr('data-horizontal-pereochki-count'));
                                var countPerV = parseInt($('*[data-id=' + num + ']').attr('data-vertikalnue-pereochki-count'));
                                if (countPerH == "0" || isNaN(countPerH) || countPerH === null || countPerH < 1) {
                                    var sumPerH = 0;
                                } else {
                                    var sumPerH = (sizeW * 0.001 * priceKarkas * countPerH);
                                }
                                if (countPerV == "0" || isNaN(countPerV) || countPerV === null || countPerV < 1) {
                                    var sumPerV = 0;
                                } else {
                                    var sumPerV = (sizeH * 0.001 * priceKarkas * countPerV);
                                }
                                TotalPrice = TotalPrice + ((((sizeW + sizeH) * 0.002) * priceKarkas) + sumPerH + sumPerV);
                            }
                            if (isNaN(TotalPrice)) {
                                TotalPrice = 0;
                            }
                            $("span.TAB-POKRASKA-PRICE").text(parseInt(TotalPrice));
                            var area = (parseInt($("#WIDTH_SETS_ID").val()) * parseInt($("#HIGHT_SETS_ID").val())) / 1000000;
                            $(".TAB-POKRASKA-PLOSHAD").text(area.toFixed(1));
                            break;
                    }
                    $('#img-dekor-profil').attr('src', './admin/' + obj[0].img);
                    $("#pokraskaTypeAndName").val(id);
                } else {
                    var area = (parseInt($("#WIDTH_SETS_ID").val()) * parseInt($("#HIGHT_SETS_ID").val())) / 1000000;
                    $(".TAB-POKRASKA-PLOSHAD").text(area.toFixed(1));
                    $("span.TAB-POKRASKA-PRICE").text(parseInt(3650));
                    $('#img-dekor-profil').attr('src', './admin/dekor/ral1.PNG');
                }
            });
        });
    }
}

function dekorV(id) {
    if (getFromData("karkas-id") !== '' && getFromData("karkas-id") !== 0) {
        $('#ral-select').remove();
        $.post("./admin/ajax.php?fullgetdekor", "id=" + id, function (data) {
            var priceDekor = 0;
            var obj = JSON.parse(data);
            $.post("./admin/ajax.php?getProfile", "get=1", function (data) {
                var objK = JSON.parse(data);
                var item = "";
                if (obj.length > 0) {
                    for (var i = 0; i < obj.length; i++) {
                        item += '<div  class="col-md-2"><center><h4>' + obj[i].name + '</h4><img src="./admin/' + obj[i].img + '" onclick="addDecor(' + obj[i].id + ',' + priceDekor + ')"; data-dismiss="modal" style="max-width: 100%;width: 159px;height: 95px;"></center><br></div>';
                    }
                    var TotalPrice = 0;
                    var count = parseInt($("#TOTAL_PAINTING_ID").val());
                    switch (id) {
                        case 1:
                            for (var i = 0; i < count; i++) {
                                var num = i + 1;
                                var idKarkas = $('*[data-id=' + num + ']').attr('data-karkas-id');
                                for (var j = 0; j < objK.length; j++) {
                                    if (objK[j].id == idKarkas) {
                                        var priceKarkas = objK[j].priceColor;
                                    }
                                }
                                var sizeW = parseInt($('*[data-id=' + num + ']').attr('data-width'));
                                var sizeH = parseInt($('*[data-id=' + num + ']').attr('data-height'));
                                var countPerH = parseInt($('*[data-id=' + num + ']').attr('data-horizontal-pereochki-count'));
                                var countPerV = parseInt($('*[data-id=' + num + ']').attr('data-vertikalnue-pereochki-count'));
                                var countProfil = 1;
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
                                TotalPrice = TotalPrice + ((((sizeW + sizeH) * 0.002) + (sizePerH + sizePerV)) * priceKarkas) * countProfil;
                                $(".tab-content-dekor").remove();
                            }
                            if (TotalPrice < 3860) {
                                TotalPrice = 3860;
                            }
                            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append('<div class="tab-content tab-content-dekor"><div id="ral-select" class="tab-pane active">' +
                                '<div class="col-md-12">' +
                                '<div class="col-md-4">' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '<h3 align="right">Цена: ' + parseInt(TotalPrice) + ' руб.</h3>' +
                                '</div>' +
                                '</div>' + item + '</div>');
                            break;
                        case 3:
                            for (var i = 0; i < count; i++) {
                                var num = i + 1;
                                var idKarkas = $('*[data-id=' + num + ']').attr('data-karkas-id');
                                for (var j = 0; j < objK.length; j++) {
                                    if (objK[j].id == idKarkas) {
                                        var priceKarkas = objK[j].priceDekor;
                                    }
                                }
                                var sizeW = parseInt($('*[data-id=' + num + ']').attr('data-width'));
                                var sizeH = parseInt($('*[data-id=' + num + ']').attr('data-height'));
                                var countPerH = parseInt($('*[data-id=' + num + ']').attr('data-horizontal-pereochki-count'));
                                var countPerV = parseInt($('*[data-id=' + num + ']').attr('data-vertikalnue-pereochki-count'));
                                var countProfil = 1;
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
                                TotalPrice = TotalPrice + ((((sizeW + sizeH) * 0.002) + (sizePerH + sizePerV)) * priceKarkas) * countProfil;
                                if (TotalPrice < 3860) {
                                    TotalPrice = 3860;
                                }
                                $(".tab-content-dekor").remove();
                            }
                            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append('<div class="tab-content tab-content-dekor"><div id="ral-select" class="tab-pane active">' +
                                '<div class="col-md-12">' +
                                '<div class="col-md-4">' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '<h3 align="right">Цена: ' + parseInt(TotalPrice) + ' руб.</h3>' +
                                '</div>' +
                                '</div>' + item + '</div>');
                            break;
                        case 4:
                            for (var i = 0; i < count; i++) {
                                var num = i + 1;
                                var idKarkas = $('*[data-id=' + num + ']').attr('data-karkas-id');
                                for (var j = 0; j < objK.length; j++) {
                                    if (objK[j].id == idKarkas) {
                                        var priceKarkas = objK[j].priceAnod;
                                    }
                                }
                                var sizeW = parseInt($('*[data-id=' + num + ']').attr('data-width'));
                                var sizeH = parseInt($('*[data-id=' + num + ']').attr('data-height'));
                                var countPerH = parseInt($('*[data-id=' + num + ']').attr('data-horizontal-pereochki-count'));
                                var countPerV = parseInt($('*[data-id=' + num + ']').attr('data-vertikalnue-pereochki-count'));
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

                                $(".tab-content-dekor").remove();
                            }
                            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append('<div class="tab-content tab-content-dekor"><div id="ral-select" class="tab-pane active">' +
                                '<div class="col-md-12">' +
                                '<div class="col-md-4">' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '<h3 align="right">Цена: ' + parseInt(TotalPrice) + ' руб.</h3>' +
                                '</div>' +
                                '</div>' + item + '</div>');
                            break;
                    }
                }
            });
        });
    }
}

function showDekorProfil() {
    var count = parseInt($("#TOTAL_PAINTING_ID").val());
    var sizeW = parseInt($("#WIDTH_SETS_ID").val());
    var sizeH = parseInt($("#HIGHT_SETS_ID").val());
    if (count > 0 && sizeW > 0 && sizeH > 0) {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        var data = "select=categorydekor";
        $.post("./admin/ajax.php", data, function (data) {
            var text = "";
            var obj = JSON.parse(data);
            for (var i = 0; i < obj.length; i++) {
                var isFirst = '';
                if (i == 0)
                    isFirst = 'active';
                text += '<li class=' + isFirst + '>' +
                    '<a onclick="dekorV(' + obj[i].id + ')" data-toggle="tab" style="font-size: 20px;">' + obj[i].name + '</a>' +
                    '<div class="triangle"></div>' +
                    '<div class="triangle-w"></div>' +
                    '</li>';
            }
            dekorV(obj[0].id);
            var html = '<div><ul id="myTab" class="nav nav-tabs">' + text + '</ul></div><div class="tab-content"></div>';
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(html);

            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        });
    } else {
        parent.message("Укажите количество полотен,ширину и высоту!");
    }
}
$('#btn-dekor-profil').click(showDekorProfil);
$('#img-dekor-profil').click(showDekorProfil);

/*function PriceForKarkas() {
 var sum = karkasPrice + horizontalPerPrice + vertikalnuePerPrice;

 }*/
// БЛОК ЦЕНА //
$('body').on('click', function () {
    globalPrice();
    var i = 0,
        diff = 0,
        d = new Date();
    var timer = setTimeout(function () {
        diff += new Date() - d;
        timer = setTimeout(arguments.callee, 0)
        if (i++ == 400) {
            clearTimeout(timer);
            globalPrice()
        }
        d = new Date()
    }, 0);
});

function globalPrice() {
    addon.start();
    var globalFurnityraPrice = checkTheErrorNumber($('.furnitura-price .price').html());
    var countIzdelie = checkTheErrorNumber($("#NUMBER_SETS_ID").val());
    var dekor = ParserIntAndNan($(".TAB-POKRASKA-PRICE").html());
    var addons = ParserIntAndNan($(".price-res1").html());

    var globalProfilPrice = ParserIntAndNan($('.TAB-PROFIL-PRICE1').text());
    var globalMaterialPrice = ParserIntAndNan($('#Pnap').text());

    var globalPrice = (globalProfilPrice + globalMaterialPrice + globalFurnityraPrice + dekor + addons);
    if (countIzdelie > 0) {
        globalPrice = globalPrice * countIzdelie;
    }
    $('.summaBezParametrov .price').text(globalPrice);
    procPrice(globalPrice);
}

function procPrice(summ) {
    var Total = ParserIntAndNan(summ);
    var productionPercent = ParserIntAndNan($('.proizvaodstvoIn input').val());
    var installationPercent = ParserIntAndNan($('.montazhIn input').val());
    var urgencyPercent = ParserIntAndNan($('.srochnostIn input').val());
    var marginPercent = ParserIntAndNan($('.nashProtsentIn input').val());
    var Zamer = ParserIntAndNan($('.nashZamerTo input').val());
    var Dostavka = ParserIntAndNan($('.dostavkaTo input').val());

    var Proizvodstvo = parseInt(ParserIntAndNan(summ) * (1 + productionPercent / 100) * 1.1);
    var FProizvodstvo = Proizvodstvo - ParserIntAndNan(summ);
    $('.proizvaodstvoTo input').val(FProizvodstvo);
    Total += FProizvodstvo;
    var NashProsent = parseInt(Proizvodstvo * (1 + marginPercent / 100)) - Proizvodstvo;
    $('.nashProtsentTo input').val(NashProsent);
    Total += NashProsent;
    if (installationPercent === 0) {
        $('.montazhTo input').val(0);
        Total += 0;
    } else {
        var Montaz = Math.round(ParserIntAndNan(summ) * (installationPercent / 100) * (marginPercent / 100));
        if (Montaz < 3000) {
            $('.montazhTo input').val(3000);
            Total += 3000;
        } else {
            $('.montazhTo input').val(Montaz);
            Total += Montaz;
        }
    }
    Total += Zamer;
    Total += Dostavka;

    var Srochnosti = Math.round((Total) * urgencyPercent / 100);
    $('.srochnostTo input').val(Srochnosti);

    Total += Srochnosti;

    if (isNaN(Total)) {
        $('.summaSParametrami .price').text("0");
    } else {
        $('.summaSParametrami .price').text(Total);
        switch (checkState(window)) {
            case 0: {
                top.$('*[data-slider-id="1"]').find('.price span').text(Total);
                break;
            }
            case 1: {
                top.$('*[data-slider-id="2"]').find('.price span').text(Total);
                break;
            }
            case 2: {
                top.$('*[data-slider-id="3"]').find('.price span').text(Total);
                break;
            }
        }
    }

}

function TableForInfo() {
    $(".TableForInfo").html('');
    var groupArr = []
    var html = '<table class="table table-striped table-hover">'
    for (i = 1; i <= parseInt($('#TOTAL_PAINTING_ID').val()); i++) {
        var group = $('*[data-id=' + i + ']').attr('data-group');
        if (group == '') {
            group = 0;
        }
        var search = $.inArray(group, groupArr);
        if (search == -1) {
            groupArr.push(group);
            var type = '';
            if ($('*[data-id=' + i + ']').attr('data-type ') == 'M') {
                type = 'Подвижное';
            } else {
                type = 'Cтационарное';
            }
            var area = parseInt($('*[data-id=' + i + ']').attr('data-area'));
            var karkasFullPrice = parseInt($('*[data-id=' + i + ']').attr('data-karkas-full-price'));
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
// ============================= //
// ==================================================================================================================== //
function calcNow() {
    addition.UpdateAddition();
    if (checkTopBlock() == 0) return;

    // глобальная ширина и высота //
    diagrama.rules();
    $('#AREA_ID').text((($('#HIGHT_SETS_ID').val() * $('#WIDTH_SETS_ID').val() / 1000000)).toFixed(1));
    //PriceForKarkas();
    // ============================= //

    // ТАБ ПРОФИЛЬ площ //
    var area = $("#tab-profil-vyisota").val() * $("#tab-profil-shirina").val() / 1000000;
    $('.TAB-PROFIL-AREA').text(area.toFixed(1));
    setDataAndText('area', area.toFixed(1));
    // ============================= //

    // ТАБ ПРОФИЛЬ - группа //
    if (typeof $('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').attr("data-group") == "undefined") {
        $("#NUMBER_OF_DUPLICATOR_ID").val(0);
    } else {
        $("#NUMBER_OF_DUPLICATOR_ID").val($('*[data-id="' + $(".BAFFLE_SEKECTOR_CLASS option:selected").val() + '"]').attr("data-group"));
    }
    // ============================= //

    dekorRePrice();
    //viewAddonTotal();
    nfurnitura.getDataFurnitura();
    nfurnitura.viewTotalFurnitura();
    globalPrice();
}

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
        if (TYPE_BAFFLE == 1 || TYPE_BAFFLE == 2 || TYPE_BAFFLE == 4) {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html($("#DesignScheme" + TYPE_BAFFLE).html());
        }
    }
});
////////////////////////////////////////////////////////////////////////////////////////// Поля в ТАБАХ Профиль Наполнение Фурнитура
// - вывод цены профиля
function setPriceInProfil() {
    var res = profiles.profile_price + profiles.profile_horizontal_price + profiles.profile_vertical_price;
    $(".TAB-PROFIL-KARKAS-PRICE").text(res);
    $('.TAB-PROFIL-PRICE').text(res);
    $('.TAB-PROFIL-PRICE1').text(res * parseInt($('#TOTAL_PAINTING_ID').val()));
    setDataAndText('data-price-in-profil', res);
}
// NUMBER_OF_DUPLICATOR_ID
function gruapName() {
    var idEl = $(".BAFFLE_SEKECTOR_CLASS option:selected").val();
    var elType = $('*[data-id="' + idEl + '"]').data("type");
    var elCount = $('*[data-type="' + elType + '"]').length;
    // if (elCount >= $(this).val()){
    if (elCount >= $("#NUMBER_OF_DUPLICATOR_ID").val()) {
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


function SetKakas(id) {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    var width = parseInt($('#tab-profil-shirina').val());
    var height = parseInt($('#tab-profil-vyisota').val());
    var n = parseInt($("#TOTAL_PAINTING_ID").val());
    var TYPE_BAFFLE_ID = parseInt($("#TYPE_BAFFLE_ID").val());
    if (TYPE_BAFFLE_ID != 3) {
        setDataAndText('karkas-tsvet-uplotnitelya', '');
        setDataAndText('karkas-tsvet-zaglushki', '');
        setDataAndText('karkas-tsvet-zaglushki-tortsevoy', '');
        setDataAndText('karkas-vid-krepleniya', '');
        var html = ' <div class="tabbable tabs-left">' +
            '<ul class="nav nav-tabs">';
        var htmlTAB = '';
        $.post('./admin/ajax.php', "data=1", function (data) {
            var data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
                var isFrends = '';
                if (data[i].id == id)
                    isFrends = 'active';
                htmlTAB += '<li class="' + isFrends + '"><a data-toggle="tab" style="font-size: 20px;" onclick="SetKakas(' + data[i].id + ')" >' + data[i].name + '</a><div class="triangle"></div><div class="triangle-w"></div></li>';
            }
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(html + htmlTAB + '</ul>');
            var data = 'h=' + height + "&id=" + id;
            $.post("./admin/ajax.php", data, function (data) {
                var obj = JSON.parse(data);
                for (var i = 0; i < obj.length; i++) {
                    var p = ((width + height) * 0.002 * Number(obj[i].price)) * n;
                    p = Math.round(p);
                    var resultHtml = '<div id="ProfilTabDB" class="col-md-3 profil-select" style="display: inline-block;vertical-align: top;border: solid 1px black;height: 435px;" ng-controller="ngAppDemoController">' +
                        '<center> ' +
                        '<br> ' +
                        '<img src="./admin/' + obj[i].img + '" id="img-modal-Statusx1" class="selectKarkasImg" onclick="load3D(\'Statusx1\')"> ' +
                        '<div id="el-loader-Statusx1"></div>' +
                        '<div id="div-for-3d-Statusx1" class="js-div-for-3d"></div>' +
                        '<h4>' + obj[i].name + '</h4>' +
                        '<div style="height: 140px;width: 180px;">' +
                        '<div style="height: 30px;">' +
                        '<p style="display: inline-block;float: left;font-weight: 300;">Высота:</p>' +
                        '<p style="display: inline-block;float: right;font-weight: 300;">до ' + obj[i].height + '  м</p>' +
                        '</div>' +
                        '<div style="height: 30px;">' +
                        '<p style="display: inline-block;float: left;font-weight: 300;">Паз:</p>' +
                        '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].paz + '  мм</p>' +
                        '</div>' +
                        '<div style="height: 30px;">' +
                        '<p style="display: inline-block;float: left;font-weight: 300;">Cтекло:</p>' +
                        '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].steklo + '  мм</p>' +
                        '</div>' +
                        '<div style="height: 30px;">' +
                        '<p style="display: inline-block;float: left;font-weight: 300;">Глухие панели:</p> ' +
                        '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].penal + '  мм</p>' +
                        '</div>' +
                        '</div>' +
                        '<h4 style="color: red;" >Цена:' + p + ' </h4>' +
                        '<button type="button" class="btn btn-raised btn-default" onclick="profiles.setProfile(' + obj[i].id + ');" data-dismiss="modal">Выбрать </button> ' +
                        '</center></div>';
                    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
                }

            });
        });
        $(".js-div-for-3d").html("");
        $(".js-div-for-3d").hide();
        $("img.selectKarkasImg").show();
    }
}
$('#BTN-KARKAS-SELECTOR').click(function () {

});
// выбор вертикальных перемычек #BTN-VERTIKALNUE-PEREMOCHKI-SELECTOR
$('#BTN-VERTIKALNUE-PEREMOCHKI-SELECTOR').click(function () {

});
// выбор горизонтальных перемычек #BTN-HORIZONTAL-PEREMOCHKI-SELECTOR
$('#BTN-HORIZONTAL-PEREMOCHKI-SELECTOR').click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    var width = parseInt(getFromData('width'));
    var height = parseInt(getFromData('height'));
    var countPer = parseInt(getFromData('horizontal-pereochki-count'));
    var data = "select=1";
    var n = parseInt($("#TOTAL_PAINTING_ID").val());
    $.post("./admin/vuborka.php?select", data, function (data) {
        var obj = JSON.parse(data);
        if (obj.length == 0) {
            parent.message('Извините , но для данного профиля горизонтальные перемычки отсутствуют');
        } else {
            for (var i = 0; i < obj.length; i++) {
                var p = ((width - profiles.profile_w * 2) / 1000 * Number(obj[i].price)) * countPer;
                if (isNaN(p)) {
                    p = 0;
                }
                p = Math.round(p);
                var resultHtml = '<div class="col-md-3 profil-select" style="display: inline-block;vertical-align: top;border: solid 1px black;height: 435px;" ng-controller="ngAppDemoController">' +
                    '<center> ' +
                    '<br> ' +
                    '<img src="./admin/' + obj[i].img + '" id="img-modal-Statusx1" class="selectKarkasImg"> ' +
                    '<div id="el-loader-Statusx1"></div>' +
                    '<div id="div-for-3d-Statusx1" class="js-div-for-3d"></div>' +
                    '<h4>' + obj[i].name + '</h4>' +
                    '<div style="height: 140px;width: 180px;">' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Высота:</p>' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">до ' + obj[i].height + ' м</p>' +
                    '</div>' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Паз:</p>' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].paz + ' мм</p>' +
                    '</div>' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Cтекло:</p>' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].steklo + ' мм</p>' +
                    '</div>' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Глухие панели:</p> ' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].penal + ' мм</p>' +
                    '</div>' +
                    '</div>' +
                    '<h4 style="color: red;" >Цена:' + p + ' </h4>' +
                    '<button type="button" class="btn btn-raised btn-default" onclick="profiles.set_horizontal_profile(' + obj[i].id + ',' + p + ');" data-dismiss="modal">Выбрать </button> ' +
                    '</center></div>';
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }

            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        }
    });
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
    $('.TAB-PROFIL-PRICE').text(parseInt(getFromData('karkas-price')) + parseInt(getFromData('vertikalnue-pereochki-price')) + parseInt(getFromData('horizontal-pereochki-price')));
    $('.TAB-PROFIL-PRICE1').text(parseInt($('.TAB-PROFIL-PRICE').text()) * parseInt($('#TOTAL_PAINTING_ID').val()));
    paintingInDiadramma();
});
$("#tab-profil-peremyichki-horizontal-shtuk").bind('input', function () {
    setDataAndText('horizontal-pereochki-count', $(this).val());
    var perName = getFromData('horizontal-pereochki-name');
    $('.TAB-PROFIL-PRICE').text(parseInt(getFromData('karkas-price')) + parseInt(getFromData('vertikalnue-pereochki-price')) + parseInt(getFromData('horizontal-pereochki-price')));
    $('.TAB-PROFIL-PRICE1').text(parseInt($('.TAB-PROFIL-PRICE').text()) * parseInt($('#TOTAL_PAINTING_ID').val()));
    paintingInDiadramma();
});
$('#HIGHT_SETS_ID').change(function () {
    top.storage.fillPH($('#HIGHT_SETS_ID').val());
    top.state.init('1', 'true');
    childM.send('middlePrice');
});
$("#HIGHT_SETS_ID, #WIDTH_SETS_ID, #TOTAL_PAINTING_ID, #MOVABLE_PAINTING_ID, #NUMBER_SETS_ID").bind('input', function () {
    calcNow();
});
$("#TYPE_BAFFLE_ID").change(function () {
    var TYPE_BAFFLE = parseInt($(this).val());
    if (TYPE_BAFFLE == 2) {
        $("#POLOVINCHATAYA_KOL").prop("disabled", false);
        $(".polovinchtaya-stvorka").show();
    } else {
        $("#POLOVINCHATAYA_KOL").prop("disabled", true);
        $(".polovinchtaya-stvorka").hide();
    }
    if (TYPE_BAFFLE == 3) {
    } else {
        $("#DIAGRAMMA-DIALOG-WINDOW-BTN").show();
        $(".vi-block-55").show();
        $("#KARKAS-BLOCK .well .left").show();
        $("#KARKAS-INFO").show();
        $("#KARKAS-BLOCK .well .right").css("float", "right !important");
        $("#KARKAS-BLOCK .well .right").css("width", "70%");
        $("#HORIZONTAL-PEREMOCHKI-BLOCK .well .left").show();
        $("#HORIZONTAL-PEREMOCHKI-INFO").show();
        $("#HORIZONTAL-PEREMOCHKI-BLOCK .well .right").css("float", "right !important");
        $("#HORIZONTAL-PEREMOCHKI-BLOCK .well .right").css("width", "70%");
        $("#VERTIKALNUE-PEREMOCHKI-BLOCK .well .left").show();
        $("#VERTIKALNUE-PEREMOCHKI-INFO").show();
        $("#VERTIKALNUE-PEREMOCHKI-BLOCK .well .right").css("float", "right !important");
        $("#VERTIKALNUE-PEREMOCHKI-BLOCK .well .right").css("width", "70%");
        $("#KARKAS-BLOCK .well .center").hide();
        $("#HORIZONTAL-PEREMOCHKI-BLOCK .well .center").hide();
        $("#VERTIKALNUE-PEREMOCHKI-BLOCK .well .center").hide();
        $("#HORIZONTAL-PEREMOCHKI-BLOCK .well .top .form-group:eq(1)").show();
        $("#VERTIKALNUE-PEREMOCHKI-BLOCK .well .top .form-group:eq(1)").show();
        $(".raspashnie-addons").hide();
        $(".obichnie-addons").show();
    }
    // viewAddonTotal();
});
// Добавление поля
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

var Reflex = {


    can_start: false,
    g_height: 0,
    g_width: 0,
    g_panting: 0,
    g_m_panting: 0,


    start: function () {
        Reflex.events();
    },


    events: function () {
        $('#HIGHT_SETS_ID, #WIDTH_SETS_ID, #TOTAL_PAINTING_ID').on('keypress', function (e) {
            Reflex.can_start_checking();
        });
    },


    can_start_checking: function () {
        var height = $('#HIGHT_SETS_ID').val();
        var width = $('#WIDTH_SETS_ID').val();
        var panting = $('#TOTAL_PAINTING_ID').val();
        if (height == '' || width == '' || panting == '')
            Reflex.can_start = false;
        else {
            Reflex.can_start = true;
            window.onkeydown = Reflex.list();
            window.input = Reflex.list();
            window.onresize = Reflex.list();
            window.onclick = Reflex.list();
        }
    },
    globalArea: function () {
        $('#AREA_ID').text(($('#HIGHT_SETS_ID').val() * $('#WIDTH_SETS_ID').val() / 1000000).toFixed(1));
    },
    list: function () {
        var myEfficientFn = debounce(function () {
            if (checkTopBlock() == 0) return;
            Reflex.globalArea();
            nfurnitura.getDataFurnitura();
            nfurnitura.viewTotalFurnitura();
            globalPrice();
            TableForInfo();
            heightIframe();
            calcNow();
        }, 500);
        if (Reflex.can_start == true)
            myEfficientFn();
    }


};

var myEfficientFn = debounce(function () {
    if (checkTopBlock() == 0) return;
    Reflex.globalArea();
    nfurnitura.getDataFurnitura();
    nfurnitura.viewTotalFurnitura();
    globalPrice();
    TableForInfo();
    heightIframe();
    calcNow();
}, 500);

var ReflexHWT = {

    start: function () {
        ReflexHWT.event();
    },

    event: function () {
        $('#HIGHT_SETS_ID, #WIDTH_SETS_ID, #TOTAL_PAINTING_ID, #MOVABLE_PAINTING_ID').on('keydown', function (e) {
            myVar = setTimeout(function () {
                if ($('#HIGHT_SETS_ID').val() != '' && $('#WIDTH_SETS_ID').val() != '' && $('#TOTAL_PAINTING_ID').val() != '') {
                    parent.state.setTopBlock();
                }
                clearTimeout(myVar);
            }, 1)
        });
    }

};

$(document).ready(function () {
    ReflexHWT.start();
});


function makeHTMLFromTemplate(htmlTemplate, templateData) {
    return htmlTemplate.replace(/%(\w+)%/gi, function (match, p1) {
        return templateData[p1];
    });
}

function explode(delimiter, string) {
    var emptyArray = {
        0: ''
    };
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
// Устновка высоты в фрейме
function heightIframe() {
    var stateCount = window.parent.$(".possibleState").length;
    var stateSelected = parent.state.lastSate;
    var explode = function () {
        var setNewHeight = $('body').height();
        window.parent.$("#state" + stateSelected).height(setNewHeight)
    };
    setTimeout(explode, 500);
};
// Устновка высоты в фрейме//
// w_modal
var w_modal = {
    start: function () {
        w_modal.event();
    },
    event: function () {
        $('#DIAGRAMMA-DIALOG-WINDOW').on('shown.bs.modal', function () {
            $("#DIAGRAMMA-DIALOG-WINDOW").css('margin-top', $(window.parent.document).scrollTop());
            window.top.$("body").css({
                overflow: 'hidden',
                height: '100%'
            });
            $(".modal-body").animate({
                scrollTop: 0
            }, 0);
        });
        $('#DIAGRAMMA-DIALOG-WINDOW').on('hide.bs.modal', function () {
            window.top.$("body").css({
                overflow: 'auto',
                height: 'auto'
            });
        });
    }
};

window.onkeydown = function () {
    childM.send('incCounter');
};
window.oninput = function () {
    childM.send('incCounter');
};
window.onresize = function () {
    childM.send('incCounter');
};
window.onclick = function () {
    childM.send('incCounter');
};

$(document).ready(function () {
    w_modal.start();
});

var childM = {
    send: function (m) {
        top.postMessage(m, '*');
    },
    get: function (m) {
        var a = m.split(",");
        switch (a[0]) {
            case 'sayHello':
                console.log('Hello, ' + a[1] + '!');
                break;
            case 'myEfficientFn':
                myEfficientFn();
                break;
            case 'setProfil':
                profiles.setProfile(a[1]);
                break;
            case 'changeTopBlock':
                $('#HIGHT_SETS_ID').trigger('keypress');
                $('#WIDTH_SETS_ID').trigger('keypress');
                $('#TOTAL_PAINTING_ID').trigger('keypress');
                $('#MOVABLE_PAINTING_ID').trigger('keypress');
                break;
            case 'changeTypeBaffleId':
                $('#TYPE_BAFFLE_ID').val(a[1]).change();
                break;
            case 'resetFurnituraFlag':
                $('.furnituraElFlag').val(0).change();
                break;
        }
    },
};
window.addEventListener("message", function (e) {
    childM.get(e.data);
}, false);
/**
 *Функция подсчета цен для Профилей , Перемичек
 *
 * @author Goncharenko Andriy
 * @constructor
 */
$('#HIGHT_SETS_ID, #WIDTH_SETS_ID, #TOTAL_PAINTING_ID,#tab-profil-peremyichki-horizontal-shtuk,#tab-profil-v-peremyichki-shtuk,#dvounoy-uplotnitel').on('keyup', function () {
    aaa();
});
function aaa() {
    top.States.TopWidth = ParserIntAndNan($('#WIDTH_SETS_ID').val());
    top.States.TopHeight = ParserIntAndNan($('#HIGHT_SETS_ID').val());
    top.States.TopCountPoloten = ParserIntAndNan($('#TOTAL_PAINTING_ID').val());
    top.States.TopCountMovePoloten = ParserIntAndNan($('#MOVABLE_PAINTING_ID').val());
    var w = ParserIntAndNan($('#tab-profil-shirina').val());
    var h = ParserIntAndNan($('#tab-profil-vyisota').val());
    var n = ParserIntAndNan($("#TOTAL_PAINTING_ID").val());
    var c0 = ParserIntAndNan($("#tab-profil-peremyichki-horizontal-shtuk").val());
    var c1 = ParserIntAndNan($("#tab-profil-v-peremyichki-shtuk").val());
    var name = '';
    var p0, p1 = 0;
    name = $('#KARKAS-NAME').text();
    if (name != 'Не выбран') {
        var Profils = top.storage.p.filter(function (value) {
            return value.name == name;
        });
        p0 = ParserIntAndNan(((w - (ParserIntAndNan(Profils[0].model) * 2)) + h) * 0.002 * Number(Profils[0].price));

        p0 = Math.round(p0);
        $('#KARKAS-PRICE').text(p0);
        profiles.profile_price = p0;
        setDataAndText('karkas-price', p0);
    }
    name = $('#HORIZONTAL-PEREMOCHKI-NAME').text();
    if (name != 'Не выбран') {
        var Premichka = top.storage.PHW.filter(function (value) {
            return value.name == name;
        });

        if (c0 == 0) {
            p0 = 0;
        } else {
            p0 = ParserIntAndNan(((w - profiles.profile_w * 2) / 1000 * Number(Premichka[0].price)) * c0);
        }
        if (c1 == 0) {
            p1 = 0;
        } else {
            p1 = ParserIntAndNan(((h - profiles.profile_w * 2) / 1000 * Number(Premichka[0].price)) * c1) - (ParserIntAndNan(Premichka[0].width) * c1 * c0 / 1000 * Number(Premichka[0].price));
        }
        if (name == 'Не выбран') {
            p0 = 0;
        }
        if ($('#VERTIKALNUE-PEREMOCHKI-NAME').text() == 'Не выбран') {
            p1 = 0;
        }
        $('#VERTIKALNUE-PEREMOCHKI-PRICE').text(p1);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(p0);
        setDataAndText('vertikalnue-pereochki-price', p1);
        setDataAndText('horizontal-pereochki-price', p0);
        profiles.profile_vertical_price = p1;
        profiles.profile_horizontal_price = p0;

        setPriceInProfil();
        //PriceForKarkas();
        globalPrice();
        dekorRePrice();
    }
};
/**
 * Функция переводит строку в число и проверяет на Nan
 * @author Goncharenko Andiy
 */
function ParserIntAndNan(number) {
    if (isNaN(parseInt(number))) {
        return 0;
    } else {
        return parseInt(number);
    }
}
/**
 * Функкия загзуки 3d
 * @author Goncharenko Andiy
 */
$(document).on({
    click: function () {
        updateImgAndModal();
        if ($(this).attr('data-x3d') === 'null') {
            parent.message('Извините , но 3d модель отсутствует');
        } else {
            $(this).html('<x3d width="200px" height="113px"><scene><inline url="./admin/3d/' + $(this).attr('data-x3d') + '"></inline></scene></x3d>');
            x3dom.reload();
            $(this).attr('data-flag', 1);
        }
    }
}, '.loadx3d');
function updateImgAndModal() {
    $('.loadx3d[data-flag="1"]').each(function () {
        $(this).html('<img src="./admin/' + $(this).attr('data-src') + '" id="img-modal-Statusx1" class="selectKarkasImg"></div>');
    });
}
/**
 Функциия проверки вкакой стейте работает скрит выдает номер стейта
 */

function checkState(state) {
    switch (state) {
        case top.window.frames[0]:
            return 0;
            break;
        case top.window.frames[1]:
            return 1;
            break;
        case top.window.frames[2]:
            return 2;
            break;

    }
}

function checktupematerials(id) {
    switch (id) {
        case 1:
            return 'Дерево';
            break;
        case 2:
            return 'Стекло';
            break;
        case 3:
            return 'Зеркало';
            break;
        case 4:
            return 'Пластики';
            break;
        case 5:
            return 'Панели';
            break;
    }
}
$('#TYPE_BAFFLE_ID').change(function () {
    switch (checkState(window)) {
        case 0 : {
            top.frames[1].$('#TYPE_BAFFLE_ID').val($(this).val());
            top.frames[2].$('#TYPE_BAFFLE_ID').val($(this).val());

            top.frames[1].changeAddition();
            top.frames[2].changeAddition();

            top.frames[1].nfurnitura.loadFurnitura();
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();

            top.frames[2].nfurnitura.loadFurnitura();
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();

            break;
        }
        case 1: {
            top.frames[0].$('#TYPE_BAFFLE_ID').val($(this).val());
            top.frames[2].$('#TYPE_BAFFLE_ID').val($(this).val());

            top.frames[0].changeAddition();
            top.frames[2].changeAddition();

            top.frames[0].nfurnitura.loadFurnitura();
            top.frames[0].nfurnitura.getDataFurnitura();
            top.frames[0].nfurnitura.viewTotalFurnitura();

            top.frames[2].nfurnitura.loadFurnitura();
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
            break;
        }
        case 2: {
            top.frames[1].$('#TYPE_BAFFLE_ID').val($(this).val());
            top.frames[0].$('#TYPE_BAFFLE_ID').val($(this).val());

            top.frames[1].changeAddition();
            top.frames[0].changeAddition();

            top.frames[1].nfurnitura.loadFurnitura();
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();

            top.frames[0].nfurnitura.loadFurnitura();
            top.frames[0].nfurnitura.getDataFurnitura();
            top.frames[0].nfurnitura.viewTotalFurnitura();
            break;
        }
    }
});

$('#shema').change(function () {
    let _flag = $(this).prop("checked");
    console.log(_flag);
    switch (checkState(window)) {
        case 0 : {
            top.frames[1].$('#shema').prop("checked", _flag);
            top.frames[2].$('#shema').prop("checked", _flag);
            break;
        }
        case 1: {
            top.frames[0].$('#shema').prop("checked", _flag);
            top.frames[2].$('#shema').prop("checked", _flag);
            break;
        }
        case 2: {
            top.frames[1].$('#shema').prop("checked", _flag);
            top.frames[0].$('#shema').prop("checked", _flag);
            break;
        }
    }
});
$('body').on('change', '.manufacturer', function () {
    let v = $(this).val();
    let arr = top.storage.f.filter((i) => i.manufacturer === v);
    $('#furnitura-tab h4.text').each(function () {
        let $item = $(this).parent().find('select');
        $item.val(0);
        $item.trigger('change');
    });
    if (arr.length > 0) {
        arr.forEach((i) => {
            if (i.cat == 1)
                nfurnitura.SelectRazdvizhnyieMehanizmyiEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 2)
                nfurnitura.SelectmehanizmsinhronizaciiEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 3)
                nfurnitura.SelectnapravEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 4)
                nfurnitura.SelectvidkreplenianapravEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 5)
                nfurnitura.SelectpovodokEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 6)
                nfurnitura.SelectdovodchikEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 7)
                nfurnitura.SelectdekplankadlyaprofilyaEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 8)
                nfurnitura.SelectschetochniiuplotnitelEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 9)
                nfurnitura.SelectruchkaEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 10)
                nfurnitura.SelectzamokEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 11)
                nfurnitura.SelectmehanizmsinhronskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 12)
                nfurnitura.SelectmehanizmrotorniiEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 13)
                nfurnitura.SelectpetliskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 14)
                nfurnitura.SelectnapravlyayuschieskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 15)
                nfurnitura.SelectvidkrepleniyanapravlyayuschihskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 16)
                nfurnitura.SelectdekplankadlyaprofilyaskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 17)
                nfurnitura.SelectschetochniiuplotnitelskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 18)
                nfurnitura.SelectruchkaskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 19)
                nfurnitura.SelectkreplenieruchliskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 20)
                nfurnitura.SelectzamokskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 21)
                nfurnitura.SelectpetliRaspashnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 22)
                nfurnitura.SelectruchkaRaspashnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 23)
                nfurnitura.SelectzamokRaspashnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 24)
                nfurnitura.SelectnozhkimobilnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 25)
                nfurnitura.SelectkolesikimobilnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 26)
                nfurnitura.SelectstoykimobilnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 27)
                nfurnitura.SelecttipSoedineniyaPolotenmobilnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 28)
                nfurnitura.SelectStoikiStacEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 29)
                nfurnitura.SelectnapravnEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 30)
                nfurnitura.SelectnapravlyayuschienskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 31)
                nfurnitura.SelectmehanizmtelestopEnd("./admin/" + i.img, i.name, i.price);
        });
        $('#furnitura-tab h4.text').each(function () {
            let $item = $(this);
            let str = $item.text();
            let i = arr.find((s) => s.name === str);
            if (i) {
                let $i = $item.parent().find('select');
                $i.val(1);
                $i.trigger('change');

            } else {
                let $i = $item.parent().find('select');
                $i.val(0);
                $i.trigger('change');
            }
        });
    } else {
        parent.message("Извините но у данного производителя нету фурнитуры");
        $('#furnitura-tab h4.text').each(function () {
            let $item = $(this).parent().find('select');
            $item.val(0);
            $item.trigger('change');
        });
    }

});
setTimeout(() => {
    $('.manufacturer').each(function () {
        let e = $(this);
        if (top.storage.manufacturer && top.storage.manufacturer.length > 0) {
            top.storage.manufacturer.forEach(function (i) {
                e.append($('<option value="' + i.name + '">' + i.name + '</option>'));
            })
        }
    });
}, 7000);


