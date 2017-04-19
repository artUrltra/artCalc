/**
 * Created by Андрей on 14.04.2017.
 */
/**
 * Created by Андрей on 04.04.2017.
 */
var info = {
    index: 0,
    init: function () {
        console.log('INIT');
        this.width = top.States.TopWidth;
        this.height = top.States.TopHeight;
        this.count_paint = top.States.TopCountPoloten;
        this.count_paint_move = top.States.TopCountMovePoloten;
        this.array = new Array(this.count_paint);
        var count_horizontal = ParserIntAndNan($('#tab-profil-peremyichki-horizontal-shtuk').val());
        var count_vertical = ParserIntAndNan($('#tab-profil-v-peremyichki-shtuk').val());
        var array = [];
        $('#SUPPLEMENTS .col-md-3').each(function () {
            var flag = $(this).find('.input-sm').val() == 'Есть' ? true : false;
            if (flag) {
                array.push({
                    name: $(this).find('.addition').text(),
                    img: $(this).find('img').attr('src'),
                    id: ParserIntAndNan($(this).find('#PriceSupplements').attr('data-pricesupplements')),
                    price: ParserIntAndNan($(this).find('#PriceSupplements span').attr('data-price')),
                    sum: ParserIntAndNan($(this).find('#PriceSupplements span').text())
                });
            } else {
                array.push(flag);
            }
        });
        var array_napol = [];
        $('.napolnenie-el').each(function () {
            array_napol.push({
                vyisota: $(this).find('.tab-napolnenie-vyisota').val(),
                shirina: $(this).find('.tab-napolnenie-shirina').val(),
                tolschina: $(this).find('.napolnenie-el-tolschina').val(),
                kollichestvo: $(this).find('.tab-napolnenie-kollichestvo').val(),
                img: $(this).find('#open-material-img').attr('src'),
                ploschad: $(this).find('.tab-napolnenie-ploschad').text(),
                price: $(this).find('.tab-napolnenie-price').text(),
                dz: $(this).find('.materialsBlockSwith2').prop("checked"),
                zk: $(this).find('.materialsBlockSwith').prop("checked")

            });
        });
        for (var i = 0; i < this.array.length; i++) {
            this.array[i] = {
                width: this.width / this.count_paint,
                height: this.height,
                profile: profiles.profile_name,
                profile_horizontal: profiles.profile_horizontal_name,
                count_profile_horizontal: count_horizontal,
                profile_vertical: profiles.profile_vertical_name,
                count_profile_vertical: count_vertical,
                array_additions: array,
                array_filling: array_napol
            }
        }
    },
    setpaint: function () {
        var count_horizontal = ParserIntAndNan($('#tab-profil-peremyichki-horizontal-shtuk').val());
        var count_vertical = ParserIntAndNan($('#tab-profil-v-peremyichki-shtuk').val());
        var array = [];
        $('#SUPPLEMENTS .col-md-3').each(function () {
            var flag = $(this).find('.input-sm').val() == 'Есть' ? true : false;
            if (flag) {
                array.push({
                    name: $(this).find('.addition').text(),
                    img: $(this).find('img').attr('src'),
                    id: ParserIntAndNan($(this).find('#PriceSupplements').attr('data-pricesupplements')),
                    price: ParserIntAndNan($(this).find('#PriceSupplements span').attr('data-price')),
                    sum: ParserIntAndNan($(this).find('#PriceSupplements span').text())
                });
            } else {
                array.push(flag);
            }
        });
        var array_napol = [];
        $('.napolnenie-el').each(function () {
            array_napol.push({
                vyisota: $(this).find('.tab-napolnenie-vyisota').val(),
                shirina: $(this).find('.tab-napolnenie-shirina').val(),
                tolschina: $(this).find('.napolnenie-el-tolschina').val(),
                kollichestvo: $(this).find('.tab-napolnenie-kollichestvo').val(),
                img: $(this).find('#open-material-img').attr('src'),
                ploschad: $(this).find('.tab-napolnenie-ploschad').text(),
                price: $(this).find('.tab-napolnenie-price').text(),
                dz: $(this).find('.materialsBlockSwith2').prop("checked"),
                zk: $(this).find('.materialsBlockSwith').prop("checked")

            });
        });
        this.array[info.index] = {
            width: this.width / this.count_paint,
            height: this.height,
            profile: profiles.profile_name,
            profile_horizontal: profiles.profile_horizontal_name,
            count_profile_horizontal: count_horizontal,
            profile_vertical: profiles.profile_vertical_name,
            count_profile_vertical: count_vertical,
            array_additions: array,
            array_filling: array_napol
        }
    },

    fillpaint: function () {
        $('#tab-profil-peremyichki-horizontal-shtuk').val(this.array[info.index].count_profile_horizontal);
        $('#tab-profil-v-peremyichki-shtuk').val(this.array[info.index].count_profile_vertical);
        profiles.setProfile(top.storage.p.filter(function (value) {
            return value.name == info.array[info.index].profile;
        })[0].id);
        profiles.set_vertical_profile(top.storage.PHW.filter(function (value) {
            return value.name == info.array[info.index].profile_vertical;
        })[0].id, 0);
        profiles.set_horizontal_profile(top.storage.PHW.filter(function (value) {
            return value.name == info.array[info.index].profile_horizontal;
        })[0].id, 0);
        aaa();
        this.array[info.index].array_additions.forEach(function (v, index) {

            var $additions = $('#SUPPLEMENTS .col-md-3:eq(' + index + ')');
            if (v) {
                $additions.find('.input-sm').val('Есть');
                addition.SelectSupplements(v.img, v.name, v.price, v.id);

            } else {
                $additions.find('.input-sm').val('Нету');
            }
        });
        addon.set_price_res();
        $(".add-material-block-past").html('');
        this.array[info.index].array_filling.forEach(function (v, index) {
            var img = v.img.substr(8);
            nmaterials.addMaterialBtn();
            nmaterials.addMaterials(top.storage.m.filter(function (val) {
                return val.img == img
            })[0].id, index);

            $material = $('.napolnenie-el:eq(' + index + ')');
            $material.find('.tab-napolnenie-vyisota').val(v.vyisota);
            $material.find('.tab-napolnenie-shirina').val(v.shirina);
            $material.find('.napolnenie-el-tolschina').val(v.tolschina);
            $material.find('.tab-napolnenie-kollichestvo').val(v.kollichestvo);
            $material.find('.tab-napolnenie-ploschad').text(v.ploschad);
            $material.find('.tab-napolnenie-price').text(v.price);
            $material.find('.materialsBlockSwith2').prop("checked", v.dz);
            $material.find('.materialsBlockSwith').prop("checked", v.zk);
            nmaterials.ResSumm();
        });
    },
    getArrayAllPaint: function () {
        console.time('2');
        this.setpaint();
        let arr = this.array.map((v)=>v.array_additions);

        arr = arr.map((v)=>v.filter((s)=> typeof  s === "object"));
        let ARRAY = [];
        arr.forEach(function (v) {
            v.forEach(function (value) {
                ARRAY.push(value);
            });
        });
        arr = ARRAY;
        ARRAY = [];

        arr.forEach(function (v) {
            let a = arr.filter((s)=> s.id === v.id);
            let c = ARRAY.filter((x) => x.img === v.img);
            if (c.length === 0) {
                if (a.length === 1) {
                    ARRAY.push(v);
                } else {
                    v.sum *= a.length;
                    ARRAY.push(v);
                }
            }
        });
        console.timeEnd('2');
        return ARRAY;
    },
    get: function () {
        info.setpaint();
        return JSON.stringify(this);
    }
};
function init_info() {
    info.init();
    $('.BAFFLE_SEKECTOR_CLASS').off('click', init_info);
}
$('.BAFFLE_SEKECTOR_CLASS').on('click', init_info);
$('.BAFFLE_SEKECTOR_CLASS').on('change', function () {
    info.setpaint();
    info.index = parseInt($(this).val()) - 1;
    info.fillpaint();
});
