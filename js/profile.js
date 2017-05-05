/**

 * Created by Андрей on 14.11.2016.

 */
var profiles = {
    profile_name: '',
    profile_price: 0,
    profile_info: '',
    profile_w: 0,
    profile_horizontal_name: '',
    profile_horizontal_price: 0,
    profile_horizontal_info: '',
    profile_vertical_name: '',
    profile_vertical_price: 0,
    profile_vertical_info: '',
    set_profile_info: function (height, paz, steklo, penal) {
        this.profile_info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до ' + height + ' м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">' + paz + ' мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">' + steklo + ' мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right" id="penal">до ' + penal + ' мм;</p></div>';
    },
    set_profile_horizontal_info: function (height, paz, steklo, penal) {
        this.profile_horizontal_info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до ' + height + ' м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">' + paz + ' мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">' + steklo + ' мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right" id="penal">до ' + penal + ' мм;</p></div>';
    },
    set_profile_vertical_info: function (height, paz, steklo, penal) {
        this.profile_vertical_info = '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до ' + height + ' м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">' + paz + ' мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">' + steklo + ' мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right" id="penal">до ' + penal + ' мм;</p></div>';
    },
    setProfile: function (id) {
        let width = states.TopWidth / states.TopCount;
        let height = states.TopHeight / states.TopCount;
        $.post('./admin/vuborka.php?select', {id: id});
        let Profils = storage.p.find((value) => value.id == id);
        if (Profils) {
            this.profile_name = Profils.name;
            this.profile_price = ParserIntAndNan((((width - (ParserIntAndNan(Profils.model) * 2)) + height) * 0.002 * Profils.price));
            this.set_profile_info(Profils.height, Profils.paz, Profils.steklo, Profils.penal);
            this.profile_w = ParserIntAndNan(Profils.model);
            document.getElementById("KARKAS-IMG").src = './admin/' + Profils.img;
            document.getElementById("KARKAS-NAME").innerHTML = this.profile_name;
            document.getElementById("KARKAS-INFO").innerHTML = this.profile_info;
            document.getElementById("KARKAS-PRICE").innerHTML = this.profile_price;

            states.eco = {
                profile: {
                    name: Profils.name,
                    id: Profils.id
                }
            };

            let obj = storage.PaPHW.filter((value) => value.id_profil == id);
            this.set_horizontal_profile(obj[0].id_h, 0);
            this.set_vertical_profile(obj[0].id_h, 0);
            aaa();
            addition.SetSupplements();
            setPriceInProfil();
            dekorRePrice();
            nmaterials.ifEmptyMaterials();
            globalPrice();
            dekorRePrice();
        }
    },
    set_vertical_profile: function (id, price) {
        var Premichka = storage.PHW.filter(function (value) {
            return value.id == id;
        });
        this.profile_vertical_name = Premichka[0].name;
        this.profile_vertical_price = ParserIntAndNan(price);
        this.set_profile_vertical_info(Premichka[0].height, Premichka[0].paz, Premichka[0].steklo, Premichka[0].penal);
        $('#VERTIKALNUE-PEREMOCHKI-BLOCK img').attr('src', './admin/' + Premichka[0].img);
        $('#VERTIKALNUE-PEREMOCHKI-NAME').text(this.profile_vertical_name);
        $('#VERTIKALNUE-PEREMOCHKI-INFO').html(this.profile_vertical_info);
        $('#VERTIKALNUE-PEREMOCHKI-PRICE').text(this.profile_vertical_price);

        setPriceInProfil();
    },
    set_horizontal_profile: function (id, price) {
        var Premichka = storage.PHW.filter(function (value) {
            return value.id == id;
        });
        this.profile_horizontal_name = Premichka[0].name;
        this.profile_horizontal_price = ParserIntAndNan(price);
        this.set_profile_horizontal_info(Premichka[0].height, Premichka[0].paz, Premichka[0].steklo, Premichka[0].penal);
        $('#HORIZONTAL-PEREMOCHKI-BLOCK img').attr('src', './admin/' + Premichka[0].img);
        $('#HORIZONTAL-PEREMOCHKI-NAME').text(this.profile_horizontal_name);
        $('#HORIZONTAL-PEREMOCHKI-INFO').html(this.profile_horizontal_info);
        $('#HORIZONTAL-PEREMOCHKI-PRICE').text(this.profile_horizontal_price);


        setPriceInProfil();
    }
};