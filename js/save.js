/**
 * Created by Андрей on 26.05.2017.
 */
let save = {
        flag: true,
        state: 1,
        getP(){
            let p = storage.p.find(v => v.id === info.profileId);
            return {
                n: p.name,
                i: p.id,
                p: info.priceResProf
            }
        },
        getPH(){
            let pH = storage.PHW.find(v => v.id === info.profileHeightId);
            return {
                n: pH.name,
                i: pH.id,
                p: info.priceProfileHeight,
                c: info.countProfileHeight
            };
        },
        getPW(){
            let pW = storage.PHW.find(v => v.id === info.profileWidthId);
            return {
                n: pW.name,
                i: pW.id,
                p: info.priceProfileWidth,
                c: info.countProfileWidth
            };
        },
        getD(){
            return {
                i: info.decorId,
                n: info.decorName,
                p: info.decorPrice
            };
        },
        getA(){
            let array = [];
            $('#SUPPLEMENTS .col-md-3').each(function () {
                let flag = $(this).find('.input-sm').val() == 'Есть' ? true : false;
                if (flag) {
                    array.push({
                        name: $(this).find('.addition').text(),
                        img: $(this).find('img').attr('src'),
                        id: ParserIntAndNan($(this).find('#PriceSupplements').attr('data-pricesupplements')),
                        price: ParserIntAndNan($(this).find('#PriceSupplements span').attr('data-price')),
                        count: ParserIntAndNan($(this).find('input:text').val()),
                        sum: ParserIntAndNan($(this).find('#PriceSupplements span').text())
                    });
                } else {
                    array.push(flag);
                }
            });
            return array;
        },
        getM(){
            let array_napol = [];
            $('.napolnenie-el').each(function () {
                array_napol.push({
                    vyisota: $(this).find('.tab-napolnenie-vyisota').val(),
                    shirina: $(this).find('.tab-napolnenie-shirina').val(),
                    tolschina: ParserIntAndNan($(this).find('.napolnenie-el-tolschina [value=' + $(this).find('.napolnenie-el-tolschina').val() + ']').text()),
                    kollichestvo: $(this).find('.tab-napolnenie-kollichestvo').val(),
                    img: $(this).find('#open-material-img').attr('src'),
                    ploschad: $(this).find('.tab-napolnenie-ploschad').text(),
                    price: $(this).find('.tab-napolnenie-price').text(),
                    dz: $(this).find('.materialsBlockSwith2').prop("checked"),
                    zk: $(this).find('.materialsBlockSwith').prop("checked")

                });
            });
            return array_napol;
        },
        getF(){
            let arr = [];
            $('#furnitura-tab .col-md-15').each(function () {
                if ($(this).find('select').val() === '1') {
                    arr.push({
                        img: $(this).find('img').attr('src'),
                        price: $(this).find('.price').text(),
                        name: $(this).find('h4:eq(0)').text()
                    })
                } else {
                    arr.push(false)
                }
            });
            return arr;
        },
        init()
        {
            if (this.flag) {
                //Перенос профилей
                this.copy(this.optimal.p, this.getP());
                this.copy(this.econom.p, this.getP());
                this.copy(this.premium.p, this.getP());

                //Перенос перенос вертикальней профиля
                this.copy(this.optimal.pH, this.getPH());
                this.copy(this.econom.pH, this.getPH());
                this.copy(this.premium.pH, this.getPH());

                //Перенос перенос горизантального профиля
                this.copy(this.optimal.pW, this.getPW());
                this.copy(this.econom.pW, this.getPW());
                this.copy(this.premium.pW, this.getPW());

                //Перенос перенос Декора
                this.copy(this.optimal.d, this.getD());
                this.copy(this.econom.d, this.getD());
                this.copy(this.premium.d, this.getD());

                //Перенос дополнение
                this.copy(this.optimal.a, this.getA());
                this.copy(this.econom.a, this.getA());
                this.copy(this.premium.a, this.getA());

                //Перенос матереалов
                this.copy(this.optimal.m, this.getM());
                this.copy(this.econom.m, this.getM());
                this.copy(this.premium.m, this.getM());

                //Перенос Фурнетуры
                this.copy(this.optimal.f, this.getF());
                this.copy(this.econom.f, this.getF());
                this.copy(this.premium.f, this.getF());

                this.optimal.profilRes = info.priceResProf;
                this.optimal.adRes = info.additionResPrice;
                this.optimal.decorRes = info.decorPrice;
                this.optimal.marirealRes = info.materialsResPrice;
                this.optimal.furnituraResPrice = info.furnituraResPrice;
                this.optimal.bezParam = info.resPriceBez;
                this.optimal.resPricesBez = info.resPricesBez;

                this.econom.profilRes = info.priceResProf;
                this.econom.adRes = info.additionResPrice;
                this.econom.decorRes = info.decorPrice;
                this.econom.marirealRes = info.materialsResPrice;
                this.econom.furnituraResPrice = info.furnituraResPrice;
                this.econom.bezParam = info.resPriceBez;
                this.econom.resPricesBez = info.resPricesBez;

                this.premium.profilRes = info.priceResProf;
                this.premium.adRes = info.additionResPrice;
                this.premium.decorRes = info.decorPrice;
                this.premium.marirealRes = info.materialsResPrice;
                this.premium.furnituraResPrice = info.furnituraResPrice;
                this.premium.bezParam = info.resPriceBez;
                this.premium.resPricesBez = info.resPricesBez;

                this.flag = false;


            }
        }
        ,
        set()
        {
            let i;
            switch (this.state) {
                case 1: {
                    i = this.optimal;
                    break;
                }
                case 2: {
                    i = this.econom;
                    break;
                }
                case 3: {
                    i = this.premium;
                    break;
                }
            }
            this.copy(i.p, this.getP());
            this.copy(i.pH, this.getPH());
            this.copy(i.pW, this.getPW());
            this.copy(i.d, this.getD());
            this.copy(i.a, this.getA());
            this.copy(i.m, this.getM());
            this.copy(i.f, this.getF());

            i.profilRes = info.priceResProf;
            i.adRes = info.additionResPrice;
            i.decorRes = info.decorPrice;
            i.marirealRes = info.materialsResPrice;
            i.furnituraResPrice = info.furnituraResPrice;
            i.bezParam = info.resPriceBez;
            i.resPricesBez = info.resPricesBez;
        }
        ,
        get()
        {
            let i;
            switch (this.state) {
                case 1: {
                    i = this.optimal;
                    break;
                }
                case 2: {
                    i = this.econom;
                    break;
                }
                case 3: {
                    i = this.premium;
                    break;
                }
            }
            profiles.setProfile(i.p.i);
            profiles.set_vertical_profile(i.pH.i);
            profiles.set_horizontal_profile(i.pW.i);
            $('#tab-profil-peremyichki-horizontal-shtuk').val(i.pW.c);
            $('#tab-profil-v-peremyichki-shtuk').val(i.pH.c);
            decor.decorPrice(i.d.i);

            i.a.forEach(function (v, index) {
                let $additions = $('#SUPPLEMENTS .col-md-3:eq(' + index + ')');
                if (v) {
                    $additions.find('.input-sm').val('Есть');
                    addition.SelectSupplements(v.img, v.name, v.price, v.id);

                } else {
                    $additions.find('.input-sm').val('Нет');
                }
            });
            addition.priceAddition();

            $(".add-material-block-past").html('');
            i.m.forEach(function (v, index) {
                let img = v.img.substr(8);
                nmaterials.addMaterialBtn();
                nmaterials.addMaterials(storage.m.find(v => v.img === img).id, index);

                $material = $('.napolnenie-el:eq(' + index + ')');
                $material.find('.tab-napolnenie-vyisota').val(v.vyisota);
                $material.find('.tab-napolnenie-shirina').val(v.shirina);
                $material.find('.napolnenie-el-tolschina').val(v.tolschina);
                $material.find('.tab-napolnenie-kollichestvo').val(v.kollichestvo);
                $material.find('.tab-napolnenie-ploschad').text(v.ploschad);
                $material.find('.tab-napolnenie-price').text(v.price);
                $material.find('.materialsBlockSwith2').prop("checked", v.dz);
                $material.find('.materialsBlockSwith').prop("checked", v.zk);
            });
            nmaterials.ResSumm();

            i.f.forEach(function (v, i) {
                let $i = $('#furnitura-tab .col-md-15:eq(' + i + ')');
                if (v) {
                    $i.find('img').attr('src', v.img);
                    $i.find('.price').text(v.price);
                    $i.find('h4:eq(0)').text(v.name);
                    $i.find('select').val('1').change();
                } else {
                    $i.find('select').val('0').change();
                }
            });
        },
        copy(obj, i)
        {
            for (let k in i)
                obj[k] = i[k]
        }
        ,
        optimal: {
            p: {}
            ,
            pH: {}
            ,
            pW: {}
            ,
            d: {}
            ,
            a: [],
            m: [], f: []
        }
        ,
        econom: {
            p: {}
            ,
            pH: {}
            ,
            pW: {}
            ,
            d: {}
            ,
            a: [],
            m: [],
            f: []
        }
        ,
        premium: {
            p: {}
            ,
            pH: {}
            ,
            pW: {}
            ,
            d: {}
            ,
            a: [],
            m: [],
            f: []
        }
    }
;
