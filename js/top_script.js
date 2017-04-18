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
        frames[0].$('.furnituraElFlag').each(function(index){
            frames[1].$('.furnituraElFlag:eq('+index+')').val($(this).val());
            frames[2].$('.furnituraElFlag:eq('+index+')').val($(this).val());
        });

        frames[1].nfurnitura.viewTotalFurnitura();
        frames[2].nfurnitura.viewTotalFurnitura();

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
    document.getElementById('text_ifr').removeAttribute('title');
};

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
    tinyMCE.get('text').setContent(item.text);
});

/**
 * Создание pdf письма
 */
function sendMail() {
    SaveToPdfToFile();
    message("Создается pdf для письма");
    setTimeout(loadmail, 8500);
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
    console.log(matireals);
    var sms = tinyMCE.get('text').getContent();
    sms = sms.replace(/#name/g, $('#namek').val());
    sms = sms.replace(/#w/g, States.TopWidth);
    sms = sms.replace(/#h/g, States.TopHeight);
    sms = sms.replace(/#s/g, (States.TopWidth / 1000) * (States.TopHeight / 1000));
    sms = sms.replace(/#pm/g, States.TopCountMovePoloten);
    sms = sms.replace(/#p/g, States.TopCountPoloten);
    sms = sms.replace(/#Profile/g, frames[0].profiles.profile_name);
    sms = sms.replace(/#Matireals/g, matireals);

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
