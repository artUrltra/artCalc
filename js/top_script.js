/**
 * Created by Андрей on 16.04.2017.
 *
 */
/**
 * Функция перевода числа из srt в int
 * @param number
 * @returns {*}
 * @constructor
 */
function ParserIntAndNan(number) {
    if (isNaN(parseInt(number))) {
        return 0;
    } else {
        return parseInt(number);
    }
}

window.id_pdf = new Date().getTime();
$.material.init();

function message(e) {
    $.snackbar({
        content: e
    });
}
// Общий флаг для перенноса данных из стейтов
var _FLAG = true;

/**
 * Функция переноса даных между стейтами
 * @constructor
 */
function GloblPrice_FLAG() {
    if (_FLAG) {
        let type = frames[0].$('#TYPE_BAFFLE_ID').val();
        frames[1].$('#TYPE_BAFFLE_ID').val(type);
        frames[1].$('#TYPE_BAFFLE_ID').change();
        frames[2].$('#TYPE_BAFFLE_ID').val(type);
        frames[2].$('#TYPE_BAFFLE_ID').change();
        let profile = top.storage.p.find(function (v) {
            return v.name === frames[0].profiles.profile_name
        });
        if (profile) {
            frames[1].profiles.setProfile(profile.id);
            frames[2].profiles.setProfile(profile.id);
        }
        let profile_h = top.storage.PHW.find(function (v) {
            return v.name === frames[0].profiles.profile_horizontal_name
        });
        if (profile_h) {
            frames[1].profiles.set_horizontal_profile(profile_h.id);
            frames[2].profiles.set_horizontal_profile(profile_h.id);
        }
        let profile_w = top.storage.PHW.find(function (v) {
            return v.name === frames[0].profiles.profile_vertical_name
        });
        if (profile_w) {
            frames[1].profiles.set_vertical_profile(profile_w.id);
            frames[2].profiles.set_vertical_profile(profile_w.id);
        }

        let array = [];
        frames[0].$('#SUPPLEMENTS .col-md-3').each(function () {
            let flag = $(this).find('.input-sm').val() == 'Есть' ? true : false;
            if (flag) {
                array.push({
                    name: $(this).find('h3').text(),
                    img: $(this).find('img').attr('src'),
                    id: ParserIntAndNan($(this).find('#PriceSupplements').attr('data-pricesupplements')),
                    price: ParserIntAndNan($(this).find('#PriceSupplements span').attr('data-price'))
                });
            } else {
                array.push(flag);
            }
        });

        array.forEach(function (v, index) {
            let $additions = frames[1].$('#SUPPLEMENTS .col-md-3:eq(' + index + ')');
            if (v) {
                $additions.find('.input-sm').val('Есть');
                frames[1].addition.SelectSupplements(v.img, v.name, v.price, v.id);

            } else {
                $additions.find('.input-sm').val('Нету');
            }
        });
        array.forEach(function (v, index) {
            let $additions = frames[2].$('#SUPPLEMENTS .col-md-3:eq(' + index + ')');
            if (v) {
                $additions.find('.input-sm').val('Есть');
                frames[2].addition.SelectSupplements(v.img, v.name, v.price, v.id);

            } else {
                $additions.find('.input-sm').val('Нету');
            }
        });


        frames[1].$('#tab-profil-peremyichki-horizontal-shtuk').val(frames[0].$('#tab-profil-peremyichki-horizontal-shtuk').val());
        frames[1].$('#tab-profil-v-peremyichki-shtuk').val(frames[0].$('#tab-profil-v-peremyichki-shtuk').val());
        frames[1].aaa();

        frames[1].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);
        frames[1].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);
        frames[1].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);

        frames[1].$('#l-11').val(frames[0].$('#l-11').val());
        frames[1].$('#l-21').val(frames[0].$('#l-21').val());
        frames[1].$('#l-41').val(frames[0].$('#l-41').val());
        frames[1].$('#l-51').val(frames[0].$('#l-51').val());
        frames[1].$('#l-32').val(frames[0].$('#l-32').val());
        frames[1].$('#l-51').val(frames[0].$('#l-51').val());
        frames[1].$('.nashZamerTo #l-52').val(frames[0].$('.nashZamerTo #l-52').val());

        frames[1].$(".add-material-block-past").html('');
        frames[1].$(".add-material-block-past").append(frames[0].$('.napolnenie-el').clone());
        var count = frames[0].$('.napolnenie-el .napolnenie-el-tolschina').length;
        for (var i = 0; i < count; i++) {
            frames[1].$('.napolnenie-el-tolschina:eq(' + i + ')').val(frames[0].$('.napolnenie-el-tolschina:eq(' + i + ')').val());
        }
        frames[1].nmaterials.ResSumm();

        frames[2].$('#tab-profil-peremyichki-horizontal-shtuk').val(frames[0].$('#tab-profil-peremyichki-horizontal-shtuk').val());
        frames[2].$('#tab-profil-v-peremyichki-shtuk').val(frames[0].$('#tab-profil-v-peremyichki-shtuk').val());
        frames[2].aaa();

        frames[2].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);
        frames[2].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);
        frames[2].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);

        frames[2].$('#l-11').val(frames[0].$('#l-11').val());
        frames[2].$('#l-21').val(frames[0].$('#l-21').val());
        frames[2].$('#l-41').val(frames[0].$('#l-41').val());
        frames[2].$('#l-51').val(frames[0].$('#l-51').val());
        frames[2].$('#l-32').val(frames[0].$('#l-32').val());
        frames[2].$('#l-51').val(frames[0].$('#l-51').val());
        frames[2].$('.nashZamerTo #l-52').val(frames[0].$('.nashZamerTo #l-52').val());
        frames[2].$(".add-material-block-past").html('');
        frames[2].$(".add-material-block-past").append(frames[0].$('.napolnenie-el').clone());
        for (var i = 0; i < count; i++) {
            frames[2].$('.napolnenie-el-tolschina:eq(' + i + ')').val(frames[0].$('.napolnenie-el-tolschina:eq(' + i + ')').val());
        }
        frames[2].nmaterials.ResSumm();

        //Перенос селекторов фурнитуры
        frames[0].$('.furnituraElFlag').each(function (index) {
            frames[1].$('.furnituraElFlag:eq(' + index + ')').val($(this).val());
            frames[2].$('.furnituraElFlag:eq(' + index + ')').val($(this).val());
        });

        frames[1].nfurnitura.viewTotalFurnitura();
        frames[2].nfurnitura.viewTotalFurnitura();

        if (frames[0].info.array) {
            frames[0].info.setpaint();

            frames[1].$('.BAFFLE_SEKECTOR_CLASS').off('click', frames[1].init_info);
            frames[2].$('.BAFFLE_SEKECTOR_CLASS').off('click', frames[2].init_info);

            frames[1].$('.BAFFLE_SEKECTOR_CLASS').val(frames[0].$('.BAFFLE_SEKECTOR_CLASS').val());
            frames[2].$('.BAFFLE_SEKECTOR_CLASS').val(frames[0].$('.BAFFLE_SEKECTOR_CLASS').val());

            frames[1].info.array = frames[0].info.array;
            frames[2].info.array = frames[0].info.array;

            frames[1].info.index = frames[0].info.index;
            frames[2].info.index = frames[0].info.index;

        } else {
            frames[0].info.init();
        }


        state.stateSetPrice();
    }
}

/**
 * События переноса данных
 */
$("body").on('mouseover', '.container', GloblPrice_FLAG);
$('.slider-container').click(function () {
    console.log('click');
    _FLAG = false;
    $("body").off('mouseover', '.container', GloblPrice_FLAG);

});

/**
 * События включения про крутки
 */
$('body').on('click', function () {
    $(this).css('overflow', 'auto');
});
/**
 *   Блок проверки загрузки каждого стейта отдельно и установки первичных настроек
 * @type {boolean}
 */
window.onload = function () {
    state.stateOneHeight();
    $(".preloade-wrapper").fadeOut(500);
    $("body").css("overflow", "auto");
    _FLAG = true;
    state.checkManager();


    top.frames[0].changeAddition();
    top.frames[0].nfurnitura.setStartValues();
    top.frames[1].changeAddition();
    top.frames[1].nfurnitura.setStartValues();
    top.frames[2].changeAddition();
    top.frames[2].nfurnitura.setStartValues();
};

function delTiteltext() {
    document.getElementById('text_ifr').removeAttribute('title');
    $('body').off('mouseover', '.managerBtn', delTiteltext);
}
$('body').on('mouseover', '.managerBtn', delTiteltext);
/**
 * события изменния селектора менеджеров
 */
$('#calcmanager').change(function () {
    var i = parseInt($(this).val());
    var item = storage.managers.find(function (v) {
        return v.id === i;
    });
    var temps = storage.temp.filter(function (v) {
        return item.name.indexOf(v.user) >= 0
    });
    $("#temp").empty();
    temps.forEach(function (v) {
        $("#temp").prepend($('<option value="' + v.id + '">' + v.name + '</option>'));
    });
    if (temps[0] !== undefined) {
        tinyMCE.get('text').setContent(temps[0].text);
        $('.panel input[type="checkbox"]').prop("checked", false);
        $('#zag').parent().removeClass('is-empty');
        $('#zag').val(temps[0].theme);
        catalogs.setcat(temps[0].code);
    }
    state.checkManagerHide();
});
/**
 * события изменния селектора шаблонов
 */
$('body').on('change', '#temp', function () {
    var id = parseInt($(this).val());
    var item = storage.temp.find(function (v) {
        return v.id === id;
    });
    $('.panel input[type="checkbox"]').prop("checked", false);
    $('#zag').parent().removeClass('is-empty');
    $('#zag').val(item.theme);
    catalogs.setcat(item.code);
    tinyMCE.get('text').setContent(item.text.replace(/}/g, '\"'));
});

/**
 * Создание pdf письма
 */
function sendMail() {
    SaveToPdfToFile();
    let flag = true;
    if ($('#mailk').val() === '') {
        flag = false;
        $('#mailk').parent().addClass('has-error');
    } else {
        $('#mailk').parent().removeClass('has-error');
    }
    if ($('#namek').val() === '') {
        flag = false;
        $('#namek').parent().addClass('has-error');
    } else {
        $('#namek').parent().removeClass('has-error');
    }
    if ($('#zag').val() === '') {
        flag = false;
        $('#zag').parent().addClass('has-error');
    } else {
        $('#zag').parent().removeClass('has-error');
    }
    if (flag) {
        message("Создается pdf для письма");
        setTimeout(loadmail, 8500);
    } else {
        message('Заполните все поля')
    }
}
/**
 * Отправка письма клиенту и менеджеру
 */
function loadmail() {

    var id_manager = parseInt($('#calcmanager').val());
    var manager = storage.managers.find(function (v) {
        return v.id === id_manager
    });
    var catalog = [];
    $('.checkbox  input[type="checkbox"]').each(function () {
        if ($(this).prop('checked')) {
            var text = $(this).parent().text();
            var item = storage.catalogs.find(function (v) {
                return v.name === text;
            });
            catalog.push({name: item.name, link: item.link});
        }
    });
    var html = '';
    if (catalog) {
        html = '<p><span style="font-family: \'times new roman\', times, serif;font-size: 14pt;">Ссылки на презентации:</span></p><ol>'
        catalog.forEach(function (v) {
            html += '<li><span style="font-family: \'times new roman\', times, serif; font-size: 14pt;"><a href="' + v.link + '">' + v.name + '</a></span></li>'
        });
        html += '</ol>';
    }
    var arr = [];

    if (frames[0].info.array) {
        frames[0].info.array.forEach(function (v) {
            v.array_filling.forEach(function (s) {
                arr.push(s.img.substr(8));
            });
        });
    } else {
        var $material = frames[0].$('.napolnenie-el');
        $material.each(function () {
            arr.push($(this).find('#open-material-img').attr('src').substr(8));
        });
    }
    matireals = '';
    var l = arr.length;
    arr.forEach(function (v, index) {
        var item = top.storage.m.find(function (s) {
            return s.img === v
        });
        if (index !== l - 1) {
            matireals += item.name + ', ';
        } else {
            matireals += item.name + ' ';
        }
    });
    let sms = tinyMCE.get('text').getContent();
    let str = sms.match(/#Matireals\[\d\]/g);
    let item_str = '';
    if (str) {
        let str_id = ParserIntAndNan(str[0].match(/\d/)[0]);
        let item = top.storage.m.find((v) => v.img === arr[str_id - 1]);
        if (item.name) {
            item_str = item.name;
        }
    }
    sms = sms.replace(/#Matireals\[\d]/g, item_str);
    sms = sms.replace(/#MatirealsPriceP/g, Math.round(parseInt(frames[0].$('#Pnap').text()) * 1.5 * 1.3 * 1.1));
    sms = sms.replace(/#MatirealsPrice/g, frames[0].$('#Pnap').text());
    sms = sms.replace(/#Matireals/g, matireals);
    sms = sms.replace(/#name/g, $('#namek').val());
    sms = sms.replace(/#w/g, States.TopWidth);
    sms = sms.replace(/#h/g, States.TopHeight);
    sms = sms.replace(/#s/g, (States.TopWidth / 1000) * (States.TopHeight / 1000));
    sms = sms.replace(/#pm/g, States.TopCountMovePoloten);
    sms = sms.replace(/#p/g, States.TopCountPoloten);
    sms = sms.replace(/#Profile/g, frames[0].profiles.profile_name);

    var data = {
        mail: manager.mail,
        name: manager.name,
        mailk: $('#mailk').val(),
        namek: $('#namek').val(),
        title: $('#zag').val(),
        body: sms + html,
    };
    $.post('admin/mail.php', data, function (data) {
        if (data === 'Ok') {
            message("Письмо было отправлено клиенту");
        } else {
            message('При отправки письма возникла ошибка!!!');
        }
    });

}
function savetemp() {
    let id_manager = parseInt($('#calcmanager').val());
    let manager = storage.managers.find(function (v) {
        return v.id === id_manager
    });
    let person = prompt("Введите название шаблона");

    if (person) {
        let data = {
            name: person,
            manager: manager.name.replace(/ /, ''),
            theme: $('#zag').val(),
            code: '',
            text: tinyMCE.get('text').getContent()
        };
        $.ajax({
            url: "./admin/ajax.php?add=addtemp",
            type: "POST",
            data: data,
            success: function (d) {
                tinymce.triggerSave();
                $.ajaxSetup({async: false});
                storage.filltemp();
                $.ajaxSetup({async: true});
                message(data.name + 'был сохранен');
                let item = storage.temp.find((v) => v.name === data.name);
                $('#temp').val(item.id).change();
            },
            error: function (data) {
                console.log(data);
                message('Произошла ошибка');
            }
        });
    }
}
$('body').on('change', '.checkbox input[type="checkbox"]', function () {
    let arr = [];
    $('.checkbox  input[type="checkbox"]').each(function () {
        if ($(this).prop('checked')) {
            var text = $(this).parent().text();
            var item = storage.catalogs.find(function (v) {
                return v.name === text;
            });
            arr.push(item);
        }
    });
    let drop = $('#dropdowncatalogs');
    drop.html('');
    arr.forEach((v) => {
        drop.append('<li><a href="javascript:void(0)" onclick="addLinkCatalogintext(' + v.id + ')">' + v.name + '</a></li>');
    });
});
function addLinkCatalogintext(id) {
    let item = storage.catalogs.find((v) => v.id === id);
    if (item)
        tinyMCE.execCommand('mceInsertContent', false, '<a href="' + item.link + '">' + item.name + '</a>');
}