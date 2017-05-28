/**

 * Created by Андрей on 14.11.2016.

 */
let profiles = {
    set_profile_info: function (height, paz, steklo, penal) {
        return '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до ' + height + ' м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">' + paz + ' мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">' + steklo + ' мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right" id="penal">до ' + penal + ' мм;</p></div>';
    },
    set_profile_horizontal_info: function (height, paz, steklo, penal) {
        this.profile_horizontal_info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до ' + height + ' м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">' + paz + ' мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">' + steklo + ' мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right" id="penal">до ' + penal + ' мм;</p></div>';
    },
    set_profile_vertical_info: function (height, paz, steklo, penal) {
        this.profile_vertical_info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до ' + height + ' м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">' + paz + ' мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">' + steklo + ' мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right" id="penal">до ' + penal + ' мм;</p></div>';
    },
    setProfile: function (id) {
        let width = ParserIntAndNan($('#tab-profil-shirina').val());
        let height = ParserIntAndNan($('#tab-profil-vyisota').val());
        top.States.WidthProfil = ParserIntAndNan($('#tab-profil-shirina').val());
        top.States.HeightProfil = ParserIntAndNan($('#tab-profil-vyisota').val());

        let Profils = top.storage.p.filter(function (value) {
            return value.id == id;
        });
        this.profile_name = Profils[0].name;
        this.profile_price = ParserIntAndNan((((width - (ParserIntAndNan(Profils[0].model) * 2)) + height) * 0.002 * Profils[0].price));

        this.profile_w = ParserIntAndNan(Profils[0].model);
        document.getElementById("KARKAS-IMG").src = './admin/' + Profils[0].img;
        document.getElementById("KARKAS-NAME").innerHTML = this.profile_name;
        document.getElementById("KARKAS-INFO").innerHTML =  this.set_profile_info(Profils[0].height, Profils[0].paz, Profils[0].steklo, Profils[0].penal);
        document.getElementById("KARKAS-PRICE").innerHTML = this.profile_price;


        let obj = top.storage.PaPHW.filter(function (value) {
            return value.id_profil == id;
        });
        this.set_horizontal_profile(obj[0].id_h, 0);
        this.set_vertical_profile(obj[0].id_h, 0);
        aaa();
        addition.SetSupplements();
        setPriceInProfil();
        dekorRePrice();
        nmaterials.ifEmptyMaterials();
        globalPrice();
        dekorRePrice();
    },
    set_vertical_profile: function (id, price) {
        var Premichka = top.storage.PHW.filter(function (value) {
            return value.id == id;
        });
        this.profile_vertical_name = Premichka[0].name;
        this.profile_vertical_price = ParserIntAndNan(price);
        this.set_profile_vertical_info(Premichka[0].height, Premichka[0].paz, Premichka[0].steklo, Premichka[0].penal);
        $('#VERTIKALNUE-PEREMOCHKI-BLOCK img').attr('src', './admin/' + Premichka[0].img);
        $('#VERTIKALNUE-PEREMOCHKI-NAME').text(this.profile_vertical_name);
        $('#VERTIKALNUE-PEREMOCHKI-INFO').html(this.profile_vertical_info);
        $('#VERTIKALNUE-PEREMOCHKI-PRICE').text(this.profile_vertical_price);

        setDataAndText('vertikalnue-pereochki-img', './admin/' + Premichka[0].img);
        setDataAndText('vertikalnue-pereochki-id', Premichka[0].id);
        setDataAndText('vertikalnue-pereochki-name', this.profile_vertical_name);
        setDataAndText('vertikalnue-pereochki-price-for-one', this.profile_vertical_price);
        setDataAndText('vertikalnue-pereochki-price', this.profile_vertical_price);

        setPriceInProfil();
        //PriceForKarkas();
    },
    set_horizontal_profile: function (id, price) {
        var Premichka = top.storage.PHW.filter(function (value) {
            return value.id == id;
        });
        this.profile_horizontal_name = Premichka[0].name;
        this.profile_horizontal_price = ParserIntAndNan(price);
        this.set_profile_horizontal_info(Premichka[0].height, Premichka[0].paz, Premichka[0].steklo, Premichka[0].penal);
        $('#HORIZONTAL-PEREMOCHKI-BLOCK img').attr('src', './admin/' + Premichka[0].img);
        $('#HORIZONTAL-PEREMOCHKI-NAME').text(this.profile_horizontal_name);
        $('#HORIZONTAL-PEREMOCHKI-INFO').html(this.profile_horizontal_info);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(this.profile_horizontal_price);

        setDataAndText('horizontal-pereochki-img', './admin/' + Premichka[0].img);
        setDataAndText('horizontal-pereochki-id', Premichka[0].id);
        setDataAndText('horizontal-pereochki-name', this.profile_horizontal_name);
        setDataAndText('horizontal-pereochki-price-for-one', this.profile_horizontal_price);
        setDataAndText('horizontal-pereochki-price', this.profile_horizontal_price);

        setPriceInProfil();
        //PriceForKarkas();
    }
}