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
        var centeritems = father.filter(function (v) {
            return v.left === 0 && v.parent_id === 0;
        });
        console.log(centeritems.length);
        var bodyhtml;
        centeritems.forEach(function (v) {
            bodyhtml = '<div class="col-md-4"><div class="panel panel-primary"><div class="panel-heading"><div class="togglebutton"><label><input type="checkbox">';
            bodyhtml += v.name;
            bodyhtml += '</label></div></div><div class="panel-body">';
            var items = storage.catalogs.filter(function (s) {
                return s.parent_id === v.id;
            });
            items.forEach(function (s) {
                if (s.hide !== 1 && s.group === 0) {
                    bodyhtml += '<div class="checkbox"><label><input type="checkbox">' + s.name + '</label> </div>';
                }
                if (s.group === 1) {
                    bodyhtml += '<div class="panel panel-primary"><div class="panel-heading"><div class="togglebutton"><label><input type="checkbox">' + s.name + '</label></div></div><div class="panel-body">';
                    var item_3 = storage.catalogs.filter(function (f) {
                        return f.parent_id === s.id;
                    });
                    item_3.forEach(function (p) {
                        if (p.hide !== 1 && p.group !== 1) {
                            bodyhtml += '<div class="checkbox"><label><input type="checkbox">' + p.name + '</label> </div>';
                        }
                    });
                    bodyhtml += '</div></div>';
                }
            });
            bodyhtml += '</div></div></div>';
            bodycatalogs.append(bodyhtml);
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
    },
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
};
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

