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

/**
 * События включения про крутки
 */
$('body').on('click', function () {
    $(this).css('overflow', 'auto');
});


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
    let id = parseInt($(this).val());
    let item = storage.temp.find(function (v) {
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
        SaveToPDFtoFile();
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
    let catalog = getcatalogs();


    var html = '';
    if (catalog) {
        html = '<p><span style="font-family: \'times new roman\', times, serif;font-size: 14pt;">Ссылки на презентации:</span></p><ol>'
        catalog.forEach(function (v) {
            html += '<li><span style="font-family: \'times new roman\', times, serif; font-size: 14pt;"><a href="' + v.link + '">' + v.name + '</a></span></li>'
        });
        html += '</ol>';
    }

    let sms = tinyMCE.get('text').getContent();
    sms = TagsText(sms);
    let data = {
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
$('body').on('change', '.catalogs input[type="checkbox"]', function () {
    let arr = getcatalogs();
    let drop = $('#dropdowncatalogs');
    drop.html('');
    arr.forEach((v) => {
        drop.append('<li><a href="javascript:void(0)" onclick="addLinkCatalogintext(' + v.id + ')">' + v.name + '</a></li>');
    });
    if (arr.length === 0) {
        $('#dropdownMenu1').attr('disabled', 'disabled');
    } else {
        $('#dropdownMenu1').removeAttr('disabled');
    }
});
function addLinkCatalogintext(id) {
    let item = storage.catalogs.find((v) => v.id === id);
    if (item)
        tinyMCE.execCommand('mceInsertContent', false, '<a href="' + item.link + '">' + item.name + '</a>');
}
/**
 * Функциия для получения типа перегородки
 */
function getTypeKonst(id) {
    switch (parseInt(id)) {
        case 0: {
            return 'Стационарная';
        }
        case 1: {
            return 'Раздвижная перегородка';
        }
        case 2: {
            return 'Складная перегородка';
        }
        case 3: {
            return 'Распашная дверь';
        }
        case 4: {
            return 'Мобильная перегородка';
        }
    }
}
/**
 * функция отрисовки тегов
 * @param text
 * @constructor
 */
function TagsText(text) {
    //тег профиль с индексом и мм
    let strProfilemm = text.match(/#Profile\[\d\]\[mm\]/g);
    if (strProfilemm) {
        strProfilemm.forEach((v) => {
            let p = storage.p.find((v) => v.id === save.optimal.p.i);
            let profile = p.name + ' ' + p.model + 'x' + p.int + ' мм.';
            text = text.replace(v, profile);
        });
    }
    // тег профиль с индексом без мм
    let strProfile = text.match(/#Profile\[\d\]/g);
    if (strProfile) {
        strProfile.forEach((v) => {
            text = text.replace(v, save.optimal.p.n)
        });
    }
    //тег профиль с индексом и мм
    let strEconomProfilemm = text.match(/#EconomProfile\[\d\]\[mm\]/g);
    if (strEconomProfilemm) {
        strEconomProfilemm.forEach((v) => {
            let p = storage.p.find((v) => v.id === save.econom.p.i);
            let profile = p.name + ' ' + p.model + 'x' + p.int + ' мм.';
            text = text.replace(v, profile);
        });
    }

    // тег профиль с индексом без мм
    let strEconomProfile = text.match(/#EconomProfile\[\d\]/g);
    if (strEconomProfile) {
        strEconomProfile.forEach((v) => {
            text = text.replace(v, save.econom.p.n)
        });
    }
    //тег профиль с индексом и мм
    let strPremiumProfilemm = text.match(/#PremiumProfile\[\d\]\[mm\]/g);
    if (strPremiumProfilemm) {
        strPremiumProfilemm.forEach((v) => {
            let p = storage.p.find((v) => v.id === save.premium.p.i);
            let profile = p.name + ' ' + p.model + 'x' + p.int + ' мм.';
            text = text.replace(v, profile);
        });
    }

    // тег профиль с индексом без мм
    let strPremiumProfile = text.match(/#PremiumProfile\[\d\]/g);
    if (strPremiumProfile) {
        strPremiumProfile.forEach((v) => {
            text = text.replace(v, save.premium.p.n);
        });
    }


    let _arrm = [];
    let _arrm_mm = [];

    if (save.optimal.m) {
        save.optimal.m.forEach(function (s) {
            let _i = storage.m.find((d) => d.img === s.img.substr(8));
            let _c = _i.price.split(';').findIndex((_b) => _b === s.tolschina);
            let t = _i.thickness.split(';')[_c];

            let srtm_mm, srtm;
            if (s.zk) {
                srtm_mm = _i.name + ' закаленное ' + t + 'мм.';
                srtm = _i.name + ' закаленное';
            } else {
                srtm_mm = _i.name + ' ' + t + 'мм.';
                srtm = _i.name;
            }
            if (!_arrm_mm.find((_d) => _d === srtm_mm)) {
                _arrm_mm.push(srtm_mm);
            }
            if (!_arrm.find((_d) => _d === srtm)) {
                _arrm.push(srtm);
            }
        });

    }
    let strM = '';
    _arrm.forEach((f) => {
        strM += f + ' ';
    });

    let strM_mm = '';
    _arrm_mm.forEach((f) => {
        strM_mm += f + ' ';
    });
    let e_arrm = [];
    let e_arrm_mm = [];

    if (save.econom.m) {
        save.econom.m.forEach(function (s) {
            let _i = storage.m.find((d) => d.img === s.img.substr(8));
            let _c = _i.price.split(';').findIndex((_b) => _b === s.tolschina);
            let t = _i.thickness.split(';')[_c];

            let srtm_mm, srtm;
            if (s.zk) {
                srtm_mm = _i.name + ' закаленное ' + t + 'мм.';
                srtm = _i.name + ' закаленное';
            } else {
                srtm_mm = _i.name + ' ' + t + 'мм.';
                srtm = _i.name;
            }
            if (!e_arrm_mm.find((_d) => _d === srtm_mm)) {
                e_arrm_mm.push(srtm_mm);
            }
            if (!e_arrm.find((_d) => _d === srtm)) {
                e_arrm.push(srtm);
            }
        });
    }
    let e_strM = '';
    e_arrm.forEach((f) => {
        e_strM += f + ' ';
    });

    let e_strM_mm = '';
    e_arrm_mm.forEach((f) => {
        e_strM_mm += f + ' ';
    });
    let p_arrm = [];
    let p_arrm_mm = [];

    if (save.premium.m) {
        save.premium.m.forEach(function (s) {
            let _i = storage.m.find((d) => d.img === s.img.substr(8));
            let _c = _i.price.split(';').findIndex((_b) => _b === s.tolschina);
            let t = _i.thickness.split(';')[_c];

            let srtm_mm, srtm;
            if (s.zk) {
                srtm_mm = _i.name + ' закаленное ' + t + 'мм.';
                srtm = _i.name + ' закаленное';
            } else {
                srtm_mm = _i.name + ' ' + t + 'мм.';
                srtm = _i.name;
            }
            if (!p_arrm_mm.find((_d) => _d === srtm_mm)) {
                p_arrm_mm.push(srtm_mm);
            }
            if (!p_arrm.find((_d) => _d === srtm)) {
                p_arrm.push(srtm);
            }
        });
    }
    let p_strM = '';
    e_arrm.forEach((f) => {
        p_strM += f + ' ';
    });

    let p_strM_mm = '';
    e_arrm_mm.forEach((f) => {
        p_strM_mm += f + ' ';
    });

// тег матереала с индексом и мм
    let strMimm = text.match(/#Matireals\[\d\]\[mm\]/g);
    if (strMimm) {
        strMimm.forEach((v) => {
            text = text.replace(v, _arrm_mm[ParserIntAndNan(v.match(/\d/)[0]) - 1]);
        });
    }

// тег матереала с индексом без мм
    let strMi = text.match(/#Matireals\[\d\]/g);
    if (strMi) {
        strMi.forEach((v) => {
            text = text.replace(v, _arrm[ParserIntAndNan(v.match(/\d/)[0]) - 1]);
        });
    }
// тег матереала с индексом и мм
    strMimm = text.match(/#EconomMatireals\[\d\]\[mm\]/g);
    if (strMimm) {
        strMimm.forEach((v) => {
            text = text.replace(v, e_arrm_mm[ParserIntAndNan(v.match(/\d/)[0]) - 1]);
        });
    }

// тег матереала с индексом без мм
    strMi = text.match(/#EconomMatireals\[\d\]/g);
    if (strMi) {
        strMi.forEach((v) => {
            text = text.replace(v, e_arrm[ParserIntAndNan(v.match(/\d/)[0]) - 1] ? e_arrm[ParserIntAndNan(v.match(/\d/)[0]) - 1] : ' ');
        });
    }
// тег матереала с индексом и мм
    strMimm = text.match(/#PremiumMatireals\[\d\]\[mm\]/g);
    if (strMimm) {
        strMimm.forEach((v) => {
            text = text.replace(v, p_arrm_mm[ParserIntAndNan(v.match(/\d/)[0]) - 1]);
        });
    }

// тег матереала с индексом без мм
    strMi = text.match(/#PremiumMatireals\[\d\]/g);
    if (strMi) {
        strMi.forEach((v) => {
            text = text.replace(v, p_arrm[ParserIntAndNan(v.match(/\d/)[0]) - 1]);
        });
    }

    text = text.replace(/#MatirealsPriceP/g, Math.round(parseInt($('#Pnap').text()) * 1.5 * 1.3 * 1.1));
    text = text.replace(/#MatirealsPrice/g, $('#Pnap').text());
    text = text.replace(/#Matireals\[mm]/g, strM_mm);
    text = text.replace(/#Matireals/g, strM);
    text = text.replace(/#EconomMatireals\[mm]/g, e_strM_mm);
    text = text.replace(/#EconomMatireals/g, e_strM);
    text = text.replace(/#PremiumMatireals\[mm]/g, p_strM_mm);
    text = text.replace(/#PremiumMatireals/g, p_strM);
    text = text.replace(/#name/g, $('#namek').val());
    text = text.replace(/#w/g, info.width);
    text = text.replace(/#h/g, info.height);
    text = text.replace(/#s/g, (info.width / 1000) * (info.height / 1000));
    text = text.replace(/#pm/g, info.count);
    text = text.replace(/#p/g, info.countMove);
    text = text.replace(/#type/g, $('#TYPE_BAFFLE_ID').find('option:eq('+$('#TYPE_BAFFLE_ID').val()+')').text());
    text = text.replace(/#EconomPrice/g, ParserIntAndNan($('.slider-container .price:eq(0)').text()));
    text = text.replace(/#OptimalPrice/g, ParserIntAndNan($('.slider-container .price:eq(1)').text()));
    text = text.replace(/#FyllPrice/g, ParserIntAndNan($('.slider-container .price:eq(2)').text()));
    text = text.replace(/#EconomFurn/g,  save.econom.fm);
    text = text.replace(/#OptimalFurn/g,  save.optimal.fm);
    text = text.replace(/#FyllFurn/g,  save.premium.fm);
    text = text.replace(/#CP/g, $('#orderNumber').val() ? $('#orderNumber').val() : '');

    let detorid = parseInt($('#pokraskaTypeAndName').val());
    if (detorid) {
        let _i = storage.d.find((v) => v.id === detorid);
        if (_i) {
            switch (_i.parent_id) {
                case 1: {
                    text = text.replace(/#Dekor/g, 'RAL : ' + _i.name);
                    break;
                }
                case 3: {
                    text = text.replace(/#Dekor/g, 'Декор : ' + _i.name);
                    break;
                }
                case 4: {
                    text = text.replace(/#Dekor/g, 'Анодирование : ' + _i.name);
                    break;
                }
            }
        }
    }

//Тег профиль мм
    if (save.econom.p) {
        let p = storage.p.find((v) => v.name === save.econom.p.n);
        if (p)
            text = text.replace(/#EconomProfile\[mm]/g, p.name + ' ' + p.model + 'x' + p.int + ' мм.');
    }
    if (save.econom.p) {
        text = text.replace(/#EconomProfile/g, save.econom.p.name);
    }
//Тег профиль мм
    if (save.premium.p) {
        let p = storage.p.find((v) => v.name === save.premium.p.n);
        if (p)
            text = text.replace(/#PremiumProfile\[mm]/g, p.name + ' ' + p.model + 'x' + p.int + ' мм.');
    }
    if (save.premium.p) {
        text = text.replace(/#PremiumProfile/g, save.premium.p.n);
    }
//Тег профиль мм
    if (save.optimal.p) {
        let p = storage.p.find((v) => v.name === save.optimal.p.n);
        if (p)
            text = text.replace(/#Profile\[mm]/g, p.name + ' ' + p.model + 'x' + p.int + ' мм.');
    }
    if (save.optimal.p) {
        text = text.replace(/#Profile/g, save.optimal.p.n);
    }
    return text;
}
$('#orderNumber').on('keyup', function () {
    $('#zag').val('Коммерческое предложение №' + $(this).val());
});