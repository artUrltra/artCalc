// Автор: Владимир
// Дата:  29.12.2016
// ТЗ:    Оформление функционала материалов отдельным модулем.

var nmaterials = {

    index: 0,
    flag: true,

    // инициализация
    start: function () {
        nmaterials.events();
    },
    // события
    events: function () {
        $(".add-material-block-past").on('click', '#open-material-btn', nmaterials.selectMaterialOnClick);
        $(".add-material-block-past").on('click', '#open-material-img', nmaterials.selectMaterialOnClick);
        $('.add-material-btn').click(nmaterials.addMaterialBtn);
    },

    // скопировать материал
    copyElNapolnenie: function (t) {
        var $item = $(t).parent().parent().parent().parent('.napolnenie-el');
        $(".add-material-block-past").append($item.clone());
        $('.napolnenie-el:last').find('.napolnenie-el-tolschina').val($item.find('.napolnenie-el-tolschina').val());
        nmaterials.addWElNapolnenieToFive();
        nmaterials.addWHElNapolnenie();
        heightIframe();
        nmaterials.ResSumm();
        globalPrice();
    },

    // удалить материал
    removeElNapolnenie: function (t) {
        $(t).parent().parent().parent().parent('.napolnenie-el').remove();
        nmaterials.addWElNapolnenieToFive();
        nmaterials.addWHElNapolnenie();
        heightIframe();
        nmaterials.ResSumm();
        globalPrice();
    },

    // вспомогательная функция для выбора материала
    materialV: function (type, material) {
        $('.tab-content-materials').remove();
        setTimeout(function () {
            var obj = parent.storage.fillMT(type);
            var item = "";
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var data2 = explode(";", obj[i].price);
                    var priceOne = data2[0];
                    item += '<div  class="col-md-3"><center><h4>' + obj[i].name + '</h4><img src="./admin/' + obj[i].img + '" onclick="nmaterials.addMaterials(' + obj[i].id + ',' + material + ');" data-dismiss="modal" class="width-130"><h4>Цена: ' + priceOne + '</h4></center><br></div>';
                }
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append('<div class="tab-content tab-content-materials"><div id="typeMaterial' + type + '" class="tab-pane active">' + item + '</div></div>');
            }
        }, 0);
    },

    // выбрать материал, кликнув на картинку
    selectMaterialOnClick: function () {
        var material = $(this).parent().parent().parent().parent();
        var index = $('.napolnenie-el').index(material);

        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        var style, text = "",
            obj = parent.storage.mC;
        for (var i = 0; i < obj.length; i++) {
            if (i === 0) style = "class='active'";
            else style = "class=''";
            text += '<li ' + style + '><a onclick="nmaterials.materialV(' + obj[i].id + ',' + index + ');" href="#typeMaterial' + obj[i].id + '" data-toggle="tab" style="font-size: 20px;">' + obj[i].name + '</a>' +
                '<div class="triangle"></div>' +
                '<div class="triangle-w"></div>' +
                '</li>';
        }
        nmaterials.materialV(obj[0].id, index);
        var html = '<div class="tabbable tabs-left"><ul class="nav nav-tabs">' + text + '</ul></div><div class="tab-content"></div>';
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(html);
        $("#DIAGRAMMA-DIALOG-WINDOW").modal("toggle");
    },

    // добавление нового материала
    addMaterials: function (id, matireal) {
        var obj = top.storage.m.filter(function (v) {
            return v.id == id
        })[0];
        var $material;
        if (matireal == 'last') {
            $material = $('.napolnenie-el:last');
        } else {
            $material = $('.napolnenie-el:eq(' + matireal + ')');
        }
        $material.find('img').attr('src', './admin/' + obj.img);
        if (obj.zakalka === '' || obj.zakalka === 0) {
            $material.find('.zakalkaStekla').hide();
        } else {
            $material.find('.zakalkaStekla').show();
        }
        var doubleFillingK = top.storage.p.filter(function (value) {
            return value.name == profiles.profile_name;
        })[0].doubleFilling;

        var dataPrice = explode(";", obj.price);
        var dataThickness = explode(";", obj.thickness);
        var dataPriceEnd = [];
        var dataThicknessEnd = [];
        for (var i = 0; i < dataThickness.length; i++) {
            dataPriceEnd.push(dataPrice[i]);
            dataThicknessEnd.push(dataThickness[i]);
        }
        $material.find('.napolnenie-el-tolschina').empty();
        for (var i = 0; i < dataThicknessEnd.length; i++)
            $material.find('.napolnenie-el-tolschina').append($('<option value="' + dataPriceEnd[i] + '">' + dataThicknessEnd[i] + ' мм</option>'));
        if (doubleFillingK == 1) {
            $material.find('.dvoinoeZapolnenieCheckbox').show();
        }
        else $material.find('.dvoinoeZapolnenieCheckbox').hide();
        if (obj.type == '2') {
            top.storage.ExpMatireals.forEach(function (i) {
                if (i.arr_p.indexOf(obj.id.toString()) >= 0) {
                    var $block = $material.find('.photo1');
                    $block.css('display', 'block');
                    $block.find('button').attr('onclick', 'bPhoto(' + nmaterials.i + ')');
                }
            });
        } else {
            $material.find('.photo1').css('display', 'none');
        }
        top.States.PushMarerials({
            name: obj.name,
            id: obj.id,
            type: obj.type
        }, nmaterials.i, checkState(window));
        nmaterials.ResSumm();
        nfurnitura.loadFurnitura();
    },

    // реакция на нажатие кнопки добавление нового материала
    addMaterialBtn: function () {
        if (profiles.profile_name != "") {
            var obj = top.storage.m.filter(filteMatirealsStart)[0];
            var paz = top.storage.p.filter(function (value) {
                return value.name == profiles.profile_name;
            })[0].paz;
            if (obj.thickness !== '' && obj.thickness !== 0) {
                var dataThickness = explode(";", obj.thickness);
                var canAdd = false;
                for (var j = 0; j < dataThickness.length; j++)
                    if (dataThickness[j] <= paz) {
                        canAdd = true;
                        break;
                    }
                if (canAdd) {
                    $(".add-material-block-past").append('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 napolnenie-el">' + $(".napolnenie-el-set").html() + '</div>');
                    nmaterials.addMaterials(parent.storage.mS, 'last');
                    nmaterials.addWElNapolnenieToFive();
                    nmaterials.addWHElNapolnenie();
                }
            } else parent.message("Толщина стандартного материала не подходит к толщине выбраного профиля");
        } else parent.message("Выберите профиль!");
    },
    // пересчет цены материалов
    ResSumm: function () {
        var $material = $('.napolnenie-el');
        var sum = 0;
        var TopS = 0
        $material.each(function () {
            var str = $(this).find('#open-material-img').attr('src').substr(8);
            var obj = top.storage.m.filter(function (v) {
                return v.img == str
            })[0];
            var vyisota = ParserIntAndNan($(this).find('.tab-napolnenie-vyisota').val());
            var shirina = ParserIntAndNan($(this).find('.tab-napolnenie-shirina').val());
            var count = ParserIntAndNan($(this).find('.tab-napolnenie-kollichestvo').val());
            var S = (vyisota * 0.001) * (shirina * 0.001) * count;
            TopS += S;
            var price = ParserIntAndNan($(this).find('.napolnenie-el-tolschina').val());
            if ($(this).find('.materialsBlockSwith').prop("checked")) {
                price += ParserIntAndNan(explode(";", obj.zakalka)[explode(";", obj.price).indexOf(price.toString())]);
            }
            if ($(this).find('.materialsBlockSwith2').prop("checked")) {
                price *= 2
            }

            var res = Math.round(price * S);
            sum += res;


            $(this).find('.tab-napolnenie-ploschad').text(S.toFixed(2));
            $(this).find('.tab-napolnenie-price').text(res);
        });
        $('#Pnap').text(sum * top.States.TopCountPoloten);
        $('#Snap').text((TopS * top.States.TopCountPoloten).toFixed(2));
        globalPrice();
    },


    // установка высоты материалов
    addWHElNapolnenie: function () {
        if (top.States.TopHeight !== 0) {
            let $items = $('.napolnenie-el');
            let hight = top.States.TopHeight;
            let count = 0;
            $items.each(function () {
                if ($(this).find('#savehight').prop("checked") === true) {
                    hight -= ParserIntAndNan($(this).find('.tab-napolnenie-vyisota').val());
                } else {
                    count++;
                }
            });
            let res = Math.round(hight / count);
            $items.each(function () {
                if ($(this).find('#savehight').prop("checked") === false) {
                    $(this).find('.tab-napolnenie-vyisota').val(res);
                }
            });
        }
    },


    // выставление у всех материалов одинаковой ширины
    addWElNapolnenieToFive: function () {
        if (top.States.TopWidth !== 0) {
            $('.napolnenie-el .tab-napolnenie-shirina').each(function () {
                $(this).val(ParserIntAndNan(top.States.TopWidth / top.States.TopCountPoloten));
            });
        } else setTimeout(nmaterials.addWElNapolnenieToFive, 5000);
    },
    // обработка ситуации отсутствия материалов
    ifEmptyMaterials: function () {
        if (nmaterials.flag) {
            $('.add-material-block-past div').remove();
            this.addMaterialBtn();
            nmaterials.flag = false;
        }
    }
};

$(document).ready(function () {
    nmaterials.start();
});
function _item(name, img, price, id) {
    return '<div class="col-md-3"><center><h4>' + name + '</h4><img src="./admin/' + img + '" onclick="setnumber(\'' + name + '\',' + id + ')" style="max-width: 100%;width: 159px;height: 95px;"><h5>' + price + ' руб.</h5></center></div>';
}
function bPhoto(id) {
    var item_id = String(getFromData('material-' + id + '-id'));
    var $modal = $('#DIAGRAMMA-DIALOG-WINDOW');
    var $bodym = $('#DIAGRAMMA-DIALOG-WINDOW .modal-body');
    var array = top.storage.ExpMatireals.filter(function (v) {
        if (v.arr_p.indexOf(item_id) >= 0)
            return v;
    });
    var html = ' <ul class="nav nav-tabs" role="tablist">'
        + '<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Пескоструйные рисунки</a></li>'
        + '<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Фотопечать</a></li>'
        + '<li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Жалюзи</a></li>'
        + '<li role="presentation"><a href="#otdelka" aria-controls="messages" role="tab" data-toggle="tab">Отделка</a></li>'
        + '</ul>'
        + ' <div class="tab-content"><div role="tabpanel" class="tab-pane active" id="home"><div class="row">';
    var arr = array.filter(function (value) {
        return value.type == 1;
    });
    var arr0 = array.filter(function (value) {
        return value.type == 2;
    });
    var arr1 = array.filter(function (value) {
        return value.type == 3;
    });
    var arr2 = array.filter(function (value) {
        return value.type == 4;
    });

    arr.forEach(function (i) {
        html += _item(i.name, i.img, i.price, id);
    });
    html += '</div></div><div role="tabpanel" class="tab-pane" id="profile"><div class="row">'
    arr0.forEach(function (i) {
        html += _item(i.name, i.img, i.price, id);
    });
    html += '</div></div><div role="tabpanel" class="tab-pane" id="messages"><div class="row">'
    arr1.forEach(function (i) {
        html += _item(i.name, i.img, i.price, id);
    });
    html += '</div></div><div role="tabpanel" class="tab-pane" id="otdelka"><div class="row">'
    arr2.forEach(function (i) {
        html += _item(i.name, i.img, i.price, id);
    });
    html += '</div></div></div>';

    $bodym.html(html);
    $modal.modal('toggle');
}
function setnumber(name, id) {
    $('#DIAGRAMMA-DIALOG-WINDOW').modal('hide');
    var arr = top.storage.ExpMatireals.filter(function (value) {
        return value.name == name;
    })[0];
    var h = ParserIntAndNan($('*[data-material-el-id="' + id + '"]').find('.tab-napolnenie-vyisota').val());
    var w = ParserIntAndNan($('*[data-material-el-id="' + id + '"]').find('.tab-napolnenie-shirina').val());
    $('*[data-material-el-id="' + id + '"]').find('#namber').text(arr.name);
    var $price = $('*[data-material-el-id="' + id + '"]').find('.tab-napolnenie-price');

    $price.text(ParserIntAndNan($price.text()) + (h * w) * arr.price * 0.001);
}
$('.add-material-block-past').on('keyup change click mouseover', '.napolnenie-el', function () {
    nmaterials.ResSumm();
});
$('body').on('click', '#myTab', function () {
    nmaterials.ResSumm();
});
/**
 * Функция филтрует материалы по id стартового матиреала
 */
function filteMatirealsStart(v) {
    return v.id == top.storage.mS;
}
$('body').on('keyup', '.napolnenie-el input.form-control.tab-napolnenie-vyisota', function () {
    $(this).parent().parent().parent().find('#savehight').prop("checked", true);
    nmaterials.addWHElNapolnenie();
});

$('body').on('change', '.napolnenie-el #savehight', function () {
    nmaterials.addWHElNapolnenie();
});