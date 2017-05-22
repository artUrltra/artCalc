/**
 * Created by Андрей on 12.04.2017.
 */

var catalogs = {
        flag: true,
        init: function () {
            var father = storage.catalogs.filter(function (v) {
                return v.parent_id === 0;
            });
            var lefthtml;
            var left = $('.left-bloks');
            var bodycatalogs = $('.catalog-body');
            var leftitems = father.filter(function (v) {
                return v.left === 1;
            });
            leftitems.forEach(function (v) {
                lefthtml = '<div class="panel panel-primary"><div class="panel-heading"><div class="togglebutton"><label><input type="checkbox">';
                lefthtml += v.name;
                lefthtml += '</label></div></div> <div class="panel-body">';
                var item = storage.catalogs.filter(function (s) {
                    return s.parent_id === v.id;
                });
                item.forEach(function (v) {
                    if (v.group === 1) {
                        lefthtml += '<div class="panel panel-primary"><div class="panel-heading"><div class="togglebutton"><label><input type="checkbox">' + v.name + '</label></div></div><div class="panel-body">';
                        var item_3 = storage.catalogs.filter(function (f) {
                            return f.parent_id === v.id;
                        });
                        item_3.forEach(function (p) {
                            if (p.hide !== 1 && p.group !== 1) {
                                lefthtml += '<div class="checkbox"><label><input type="checkbox">' + p.name + '</label> </div>';
                            }
                        });
                        lefthtml += '</div> </div>';
                    } else {
                        if (v.hide !== 1 && v.group !== 1) {
                            lefthtml += '<div class="checkbox"><label><input type="checkbox">' + v.name + '</label> </div>';
                        }
                    }
                });
                lefthtml += '</div> </div>';
                left.append(lefthtml);
            });
            let level1 = father.filter((v) => v.left === 0 && v.parent_id === 0 && v.separately === 0);
            let level2 = [];
            let level3 = [];
            level1.forEach((v) => {
                $('#level1').append('<div class="checkbox"><label style="font-size: 20px"><input type="checkbox">' + v.name + '</label></div>');
                storage.catalogs.filter((s) => s.parent_id === v.id).forEach((s) => {
                    if (!level2.find((d) => d.name === s.name))
                        level2.push(s);

                    storage.catalogs.filter((b) => b.parent_id === s.id).forEach((v) => {
                        if (!level3.find((d) => d.name === v.name))
                            level3.push(v);
                    });
                });
            });
            level2.forEach((v) => {
                $('#level2').append('<div class="checkbox"><label style="font-size: 16px"><input type="checkbox">' + v.name + '</label></div>');
            });
            level3.forEach((v) => {
                $('#level3').append('<div class="col-md-6"><div class="checkbox"><label style="font-size: 12px"><input type="checkbox">' + v.name + '</label></div></div>');
            });
            let level1_0 = storage.catalogs.filter((v) => v.left === 0 && v.parent_id === 0 && v.separately === 1);
            level1_0.forEach((d) => {
                let _h = '<div class="col-md-12"><hr><div class="row"><div class="col-md-4"><div class="checkbox"><label style="font-size: 20px"><input type="checkbox">' + d.name;
                _h += '</label></div></div>';
                _h += '<div class="col-md-4">';
                let a = [];
                storage.catalogs.filter((v) => v.parent_id === d.id).forEach((s) => {
                    _h += '<div class="checkbox"><label style="font-size: 16px"><input type="checkbox">' + s.name + '</label></div>';
                    storage.catalogs.filter((_a) => _a.parent_id === s.id).forEach((_d) => {
                        if (!a.find((d) => d.name === _d.name))
                            a.push(_d);
                    });
                });
                _h += '</div>';

                if (a.length > 0) {
                    _h += '<div class="col-md-4"><div class="row">';
                    a.forEach((l3) => {
                        _h += '<div class="col-md-6"><div class="checkbox"><label style="font-size: 12px"><input type="checkbox">' + l3.name + '</label></div></div>';
                    });
                    _h += '</div></div>';
                }


                _h += '</div>';
                $('.catalog-body').append(_h);

            });

            $.material.init();
            $('.catalogs').hide(100);
        },
        hide_show: function () {
            if (this.flag) {
                $('.catalogs').show(100);
                catalogs.flag = false;
            } else {
                $('.catalogs').hide(100);
                catalogs.flag = true;
            }
        }
        ,
        setcat: function (arr) {
            if (arr !== '') {
                var items = arr.split(';');
                items = items.map(function (v) {
                    return parseInt(v);
                });
                var $catalogs = $('.panel input[type="checkbox"]');
                items.forEach(function (i) {
                    var item = storage.catalogs.find(function (v) {
                        return v.id === i;
                    });
                    $catalogs.each(function () {
                        if ($(this).parent().text() === item.name) {
                            $(this).click();
                        }
                    });
                });
            }
        }
    }
;
$('body').on('change', '.togglebutton input[type="checkbox"]', function () {
    var item = $(this);
    if (item.prop("checked") === true) {
        var children = $(this).parent().parent().parent().parent().find('.checkbox  input[type="checkbox"]');
        children.each(function (v) {
            $(this).prop("checked", true);
        });
    } else {
        var children = $(this).parent().parent().parent().parent().find('.checkbox  input[type="checkbox"]');
        children.each(function (v) {
            $(this).prop("checked", false);
        });
    }
});
function getcatalogs() {
    let arr = [];
    let _arr = [];
    $('.left-bloks input[type="checkbox"]').each(function () {
        if ($(this).prop('checked')) {
            let name = $(this).parent().text();
            let _i = storage.catalogs.filter((s) => s.name === name)[0];
            if (_i) {
                if (_i.link !== '')
                    arr.push({
                        name: _i.description !== '' ? _i.description : _i.name,
                        link: _i.link,
                        id: _i.id
                    });
            }
        }
    });
    $('.catalogs-center-blocks  input[type="checkbox"]').each(function () {
        if ($(this).prop('checked')) {
            let name = $(this).parent().text();
            let _i = storage.catalogs.filter((s) => s.name === name);
            if (_i)
                _i.forEach((i) => {
                    _arr.push(i)
                });
        }
    });
    if (_arr.length > 0) {
        let l0 = _arr.filter((v) => v.parent_id === 0);
        let l1 = [];
        let l2 = [];
        if (l0.length > 0) {
            l0.forEach((i) => {
                let _i = _arr.filter((v) => v.parent_id === i.id);
                if (_i)
                    _i.forEach((v) => {
                        l1.push(v);
                    });
            });
        }
        if (l0.length > 0) {
            l2 = _arr.map((s) => {
                if (l0.concat(l1).find((_s) => _s.name === s.name)) {
                    return undefined
                } else {
                    return s
                }
            }).filter((s) => s !== undefined);
            let _l2 = [];
            l2.forEach((v) => {
                let _i = storage.catalogs.find((s) => s.id === v.parent_id);
                if (_i) {
                    if (l0.find((s) => s.id === _i.parent_id)) {
                        _l2.push(v);
                    }
                }
            });
            l2 = _l2;
        }
        if (l0.length === 0 && l1.length === 0) {
            l2 = _arr;
        }
        if (l0.length > 0 && l1.length === 0 && l2.length > 0) {
            l2.forEach((_i) => {
                if (_i.link !== '')
                    arr.push({
                        name: _i.description !== '' ? _i.description : _i.name,
                        link: _i.link,
                        id: _i.id
                    });
            });
        } else if (l0.length === 0 && l1.length === 0 && l2.length > 0) {
            l2.forEach((_i) => {
                if (_i.link !== '')
                    arr.push({
                        name: _i.description !== '' ? _i.description : _i.name,
                        link: _i.link,
                        id: _i.id
                    });
            });
        } else if (l0.length > 0 && l1.length > 0 && (l2.length > 0 || l2.length === 0)) {
            l1.forEach((_i) => {
                if (_i.link !== '')
                    arr.push({
                        name: _i.description !== '' ? _i.description : _i.name,
                        link: _i.link,
                        id: _i.id
                    });
            });
        } else if (l0.length > 0 && l1.length === 0 && l2.length === 0) {
            l0.forEach((b) => {
                let i = storage.catalogs.filter((s) => s.parent_id === b.id);
                if (i)
                    i.forEach((_i) => {
                        if (_i.link !== '')
                            arr.push({
                                name: _i.description !== '' ? _i.description : _i.name,
                                link: _i.link,
                                id: _i.id
                            });
                    });
            });
        }
    }
    return arr;
}