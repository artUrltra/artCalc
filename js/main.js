/**
 * Created by Андрей on 22.05.2017.
 */

function ParserIntAndNan(n) {
    n = parseInt(n);
    return isNaN(n) ? 0 : n;
}
function makeHTMLFromTemplate(htmlTemplate, templateData) {
    return htmlTemplate.replace(/%(\w+)%/gi, (match, p1) => templateData[p1]);
}
function message(e) {
    $.snackbar({
        content: e
    });
}
function explode(delimiter, string) {
    let emptyArray = {
        0: ''
    };
    if (arguments.length != 2 ||
        typeof arguments[0] == 'undefined' ||
        typeof arguments[1] == 'undefined') {
        return null;
    }
    if (delimiter === '' ||
        delimiter === false ||
        delimiter === null) {
        return false;
    }
    if (typeof delimiter == 'function' ||
        typeof delimiter == 'object' ||
        typeof string == 'function' ||
        typeof string == 'object') {
        return emptyArray;
    }
    if (delimiter === true) {
        delimiter = '1';
    }
    return string.toString().split(delimiter.toString());
}
function fornituraPrice(price, index) {
    let Price = ParserIntAndNan(price);
    let Width = ParserIntAndNan($('#WIDTH_SETS_ID').val());
    let Hight = ParserIntAndNan($('#HIGHT_SETS_ID').val());
    let Count = ParserIntAndNan($('#TOTAL_PAINTING_ID').val());
    let CountProfilH = ParserIntAndNan($('#tab-profil-peremyichki-horizontal-shtuk').val());
    let CountProfilW = ParserIntAndNan($('#tab-profil-v-peremyichki-shtuk').val());
    let CountMobilityPaintings = ParserIntAndNan($('#MOVABLE_PAINTING_ID').val());
    let WidthPainting = Width / Count;
    if (isNaN(WidthPainting)) {
        WidthPainting = 0;
    }
    let WidthDesign = WidthPainting * CountMobilityPaintings;
    if (isNaN(WidthDesign)) {
        WidthDesign = 0;
    }
    let LengthGguide = (WidthPainting * 2) * 1.5;
    if (isNaN(LengthGguide)) {
        LengthGguide = 0;
    }
    for (let i = 0; i < storage.Fo.length; i++) {
        if (Object.is(storage.Fo[i].name, index)) {
            let price = eval(storage.Fo[i].formula);
            if (isNaN(price)) {
                price = 0;
            }
            return Math.round(price);
        }
    }
    return 'НЕТ ФОРМУЛ!';

}
function setImg(number, total_painting, movable_painting) {
    $(".drawing img").attr("src", "img/schemas/" + number + ".png");
}

let storage = {
    p: [],
    pH: [],
    pS: '',
    f: [],
    fC: [],
    m: [],
    mC: [],
    mS: '',
    profil_h: [],
    d: [],
    PAS: [], //Связка дополнения к профилям
    TS: [], //Типы дополнения
    S: [], //Дополнения
    Fo: [], //формулами для фурнитуры
    PHW: [], //Горизонтальные Вертикальные Перемычки
    PaPHW: [],//Связка между Перемычками и Профилями,
    Furn: [],//Типи фурнитуры
    ItemFurn: [],//Элементы фурнытуры
    ExpMatireals: [],
    images: [],
    managers: [],
    catalogs: [],
    temp: [],
    manufacturer: [],
    init: function () {
        storage.fillP();
        storage.fillmanufacturer();
        storage.fillPS();
        storage.fillF();
        storage.fillM();
        storage.fillMC();
        storage.fillMS();
        storage.fillD();
        storage.fillPAS();
        storage.fillTS();
        storage.fillS();
        storage.fillFo();
        storage.fillPHW();
        storage.fillPaPHW();
        storage.fillFurn();
        storage.fillps();
        storage.fillprofil_h();
        storage.fillimages();
        storage.fillmanagers();
        storage.fillcatalogs();
        storage.filltemp();
    },
    fillprofil_h(){
        $.get('./admin/ajax.php?profil_h=1', function (data) {
            storage.profil_h = JSON.parse(data);
        });
    },
    fillmanufacturer: function () {
        $.post('./admin/ajax.php?getmanufacturer=1', function (data) {
            storage.manufacturer = JSON.parse(data);
            $('.manufacturer').each(function () {
                let e = $(this);
                e.html('');
                storage.manufacturer.forEach(function (i) {
                    e.append($('<option value="' + i.name + '">' + i.name + '</option>'));
                });
            });
        });
    },
    filltemp: function () {
        $.post('./admin/ajax.php?getteml=1', function (data) {
            storage.temp = JSON.parse(data);
            let temps = storage.temp.filter(function (v) {
                return v.user === state.checkManagerGetCookie("name")
            });
            $("#temp").empty();
            temps.forEach(function (v) {
                $("#temp").prepend($('<option value="' + v.id + '">' + v.name + '</option>'));
            });
            if (temps.length > 0) {
                let srt = temps[0].text;
                tinyMCE.get('text').setContent(srt);
                catalogs.setcat(temps[0].code);
                $('#zag').parent().removeClass('is-empty');
                $('#zag').val(temps[0].theme);
            }
        });
    },
    fillcatalogs: function () {
        $.post('./admin/ajax.php?getcatalogs=1', function (data) {
            storage.catalogs = JSON.parse(data);
            catalogs.init();
        });

    },
    fillmanagers: function () {
        storage.managers = [];
        $.post('./admin/ajax.php?getmanagers=1', function (data) {
            storage.managers = JSON.parse(data);
            state.initCalcManagers();
            state.checkManager();
        });
    },
    fillimages: function () {
        storage.images = [];
        $.post('./admin/ajax.php?getimeges=1', function (data) {
            storage.images = JSON.parse(data);
            storage.images.forEach(function (v) {
                v.tags = v.tags.split(',');
            });
            pushimg();
        });
    },
    fillFurn: function () {
        $.post('./admin/ajax.php?getcastomfurn=1', function (data) {
            storage.Furn = JSON.parse(data);
        });
        $.post('./admin/ajax.php?getitemsnewfurn=1', function (data) {
            storage.ItemFurn = JSON.parse(data);
        });


    },
    fillD: function () {
        $.post('./admin/ajax.php?getAllDekor=1', '', function (data) {
            storage.d = JSON.parse(data);
        });
    },
    fillPHW: function () {
        $.post('./admin/ajax.php', 'getPeremochki=1', function (data) {
            storage.PHW = JSON.parse(data);
        });
    },
    fillPaPHW: function () {
        $.post('./admin/ajax.php', 'getprofil_h=1', function (data) {
            storage.PaPHW = JSON.parse(data);
        });
    },
    fillP: function () {
        $.post('./admin/ajax.php?getProfilesByPriceSort', '', function (data) {
            storage.p = JSON.parse(data);
            storage.pSort = storage.p.sort((a, b) => a.price - b.price).map(v => v.id);
            slader.init();
        });
    },
    fillPH: function (height) {
        storage.pH = [];
        for (let i = 0; i < storage.p.length; i++)
            if (storage.p[i].height >= height / 1000) storage.pH.push(storage.p[i]);
    },
    fillPS: function () {
        $.post("./admin/starprofil.php", "get=1", function (data) {
            storage.pS = data;
        });
    },
    fillPAS: function () {
        $.post('./admin/ajax.php', "getProfilAndSupplements=1", function (data) {
            storage.PAS = JSON.parse(data);
        });
    },
    fillTS: function () {
        $.post('./admin/ajax.php', {getSupplementsm: 1}, function (data) {
            storage.TS = JSON.parse(data);
            addition.changeAddition();
        });
    },
    fillS: function () {
        $.post('./admin/ajax.php', {getSupplements: 1}, function (data) {
            storage.S = JSON.parse(data);
        });
    },
    fillF: function () {
        $.post("./admin/ajax.php?selectFurnitura", "", function (data) {
            storage.f = JSON.parse(data);
        });
    },
    fillFC: function (cat) {
        storage.fC = [];
        for (let i = 0; i < storage.f.length; i++)
            if (storage.f[i].cat == cat) storage.fC.push(storage.f[i]);
    },
    fillFo: function () {
        $.post("./admin/ajax.php", {getFormuls: 1}, function (data) {
            storage.Fo = JSON.parse(data);
        });
    },
    fillM: function () {
        $.post("./admin/ajax.php?getAllMaterials", "", function (data) {
            storage.m = JSON.parse(data);
            nmaterials.sort();
        });
    },
    fillMC: function () {
        $.post("./admin/ajax.php", "select=categorymaterials", function (data) {
            storage.mC = JSON.parse(data);
        });
    },
    fillps: function () {
        $.post("./admin/ajax.php?getexpm=1", {id: 0}, function (data) {
            storage.ExpMatireals = JSON.parse(data);
        });
    },
    fillMT: function (type) {
        let i, result = [];
        for (i = 0; i < storage.m.length; i++) if (storage.m[i].type == type) result.push(storage.m[i]);
        return result;
    },
    fillMS: function () {
        $.post("./admin/starmaterial.php", "get=1", function (data) {
            storage.mS = data;
        });
    },
};
let profiles = {
    set_profile_info: function (height, paz, steklo, penal) {
        return '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до ' + height + ' м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">' + paz + ' мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">' + steklo + ' мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right" id="penal">до ' + penal + ' мм;</p></div>';
    },
    set_profile_horizontal_info: function (height, paz, steklo, penal) {
        return '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до ' + height + ' м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">' + paz + ' мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">' + steklo + ' мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right" id="penal">до ' + penal + ' мм;</p></div>';
    },
    set_profile_vertical_info: function (height, paz, steklo, penal) {
        return '<div class="height-30"><p class="profil-text-left">Высота:</p><p class="profil-text-right">до ' + height + ' м</p></div><div class="height-30"><p class="profil-text-left">Паз:</p><p class="profil-text-right">' + paz + ' мм</p></div><div class="height-30"><p class="profil-text-left">Cтекло:</p><p class="profil-text-right">' + steklo + ' мм</p></div><div class="height-30"><p class="profil-text-left">Глухие панели</p><p class="profil-text-right" id="penal">до ' + penal + ' мм;</p></div>';
    },
    modalProfileHeight(){
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        let items = storage.profil_h.filter(v => v.id_profil === info.profileId).map(v => storage.PHW.find(s => s.id === v.id_h));
        let prof = storage.p.find(v => v.id === info.profileId);
        items.forEach(i => {
            let p = Math.round((info.paintHeight - prof.model * 2) / 1000 * i.price * info.countProfileWidth - i.width * info.countProfileWidth * info.countProfileHeight / 1000 * i.price);

            let resultHtml = '<div class="col-md-3 profil-select" style="display: inline-block;vertical-align: top;border: solid 1px black;height: 435px;" ng-controller="ngAppDemoController">' +
                '<center> ' +
                '<br> ' +
                '<img src="./admin/' + i.img + '" class="selectKarkasImg"> ' +
                '<h4>' + i.name + '</h4>' +
                '<div style="height: 140px;width: 180px;">' +
                '<div style="height: 30px;">' +
                '<p style="display: inline-block;float: left;font-weight: 300;">Высота:</p>' +
                '<p style="display: inline-block;float: right;font-weight: 300;">до ' + i.height + ' м</p>' +
                '</div>' +
                '<div style="height: 30px;">' +
                '<p style="display: inline-block;float: left;font-weight: 300;">Паз:</p>' +
                '<p style="display: inline-block;float: right;font-weight: 300;">' + i.paz + ' мм</p>' +
                '</div>' +
                '<div style="height: 30px;">' +
                '<p style="display: inline-block;float: left;font-weight: 300;">Cтекло:</p>' +
                '<p style="display: inline-block;float: right;font-weight: 300;">' + i.steklo + ' мм</p>' +
                '</div>' +
                '<div style="height: 30px;">' +
                '<p style="display: inline-block;float: left;font-weight: 300;">Глухие панели:</p> ' +
                '<p style="display: inline-block;float: right;font-weight: 300;">' + i.penal + ' мм</p>' +
                '</div>' +
                '</div>' +
                '<h4 style="color: red;" >Цена:' + p + ' </h4>' +
                '<button type="button" class="btn btn-raised btn-default" onclick="profiles.set_vertical_profile(' + i.id + ');" data-dismiss="modal">Выбрать </button> ' +
                '</center></div>';
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
        });
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    },
    modalProfileWidth()
    {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        let items = storage.profil_h.filter(v => v.id_profil === info.profileId).map(v => storage.PHW.find(s => s.id === v.id_h));
        let prof = storage.p.find(v => v.id === info.profileId);
        items.forEach(i => {
            let p = Math.round((info.paintWidth - prof.model * 2) / 1000 * i.price * info.countProfileHeight);
            let resultHtml = '<div class="col-md-3 profil-select" style="display: inline-block;vertical-align: top;border: solid 1px black;height: 435px;" ng-controller="ngAppDemoController">' +
                '<center> ' +
                '<br> ' +
                '<img src="./admin/' + i.img + '" class="selectKarkasImg"> ' +
                '<h4>' + i.name + '</h4>' +
                '<div style="height: 140px;width: 180px;">' +
                '<div style="height: 30px;">' +
                '<p style="display: inline-block;float: left;font-weight: 300;">Высота:</p>' +
                '<p style="display: inline-block;float: right;font-weight: 300;">до ' + i.height + ' м</p>' +
                '</div>' +
                '<div style="height: 30px;">' +
                '<p style="display: inline-block;float: left;font-weight: 300;">Паз:</p>' +
                '<p style="display: inline-block;float: right;font-weight: 300;">' + i.paz + ' мм</p>' +
                '</div>' +
                '<div style="height: 30px;">' +
                '<p style="display: inline-block;float: left;font-weight: 300;">Cтекло:</p>' +
                '<p style="display: inline-block;float: right;font-weight: 300;">' + i.steklo + ' мм</p>' +
                '</div>' +
                '<div style="height: 30px;">' +
                '<p style="display: inline-block;float: left;font-weight: 300;">Глухие панели:</p> ' +
                '<p style="display: inline-block;float: right;font-weight: 300;">' + i.penal + ' мм</p>' +
                '</div>' +
                '</div>' +
                '<h4 style="color: red;" >Цена:' + p + ' </h4>' +
                '<button type="button" class="btn btn-raised btn-default" onclick="profiles.set_horizontal_profile(' + i.id + ');" data-dismiss="modal">Выбрать </button> ' +
                '</center></div>';
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
        });
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    }
    ,
    modalProfile()
    {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        let html = ' <div class="tabbable tabs-left">' +
            '<ul class="nav nav-tabs">';
        let htmlTAB = '';
        $.post('./admin/ajax.php', "data=1", function (data) {
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                let isFrends = '';
                if (i === 0)
                    isFrends = 'active';
                htmlTAB += '<li class="' + isFrends + '"><a data-toggle="tab" style="font-size: 20px;" onclick="SetKakas(' + data[i].id + ')" >' + data[i].name + '</a><div class="triangle"></div><div class="triangle-w"></div></li>';
            }
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(html + htmlTAB + '</ul>');
            let obj = storage.p.filter(v => v.max >= info.paintHeight);
            let resultHtml = '';
            for (let i = 0; i < obj.length; i++) {
                let p = ((info.paintHeight + info.paintWidth) * 0.002 * obj[i].price);
                p = Math.round(p);
                resultHtml += '<div id="ProfilTabDB" class="col-md-3 profil-select" style="display: inline-block;vertical-align: top;border: solid 1px black;height: 435px;" ng-controller="ngAppDemoController">' +
                    '<center> ' +
                    '<br> ' +
                    '<div class="loadx3d" data-src="' + obj[i].img + '" data-flag="0" data-x3d="' + obj[i].x3d + '"><img src="./admin/' + obj[i].img + '" id="img-modal-Statusx1" class="selectKarkasImg"></div> ' +
                    '<div id="el-loader-Statusx1"></div>' +
                    '<div id="div-for-3d-Statusx1" class="js-div-for-3d"></div>' +
                    '<h4>' + obj[i].name + '</h4>' +
                    '<div style="height: 140px;width: 180px;">' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Высота:</p>' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">до ' + obj[i].height + '  м</p>' +
                    '</div>' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Паз:</p>' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].paz + '  мм</p>' +
                    '</div>' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Cтекло:</p>' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].steklo + '  мм</p>' +
                    '</div>' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Глухие панели:</p> ' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].penal + '  мм</p>' +
                    '</div>' +
                    '</div>' +
                    '<h4 style="color: red;" >Цена:' + p + ' </h4>' +
                    '<button type="button" class="btn btn-raised btn-default" onclick="profiles.setProfile(' + obj[i].id + ');" data-dismiss="modal">Выбрать </button> ' +
                    '</center></div>';
            }
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
        });
    }
    ,
    setProfile(id)
    {

        let p = storage.p.find(v => v.id === id);
        document.getElementById("KARKAS-IMG").src = './admin/' + p.img;
        document.getElementById("KARKAS-NAME").innerHTML = p.name;
        document.getElementById("KARKAS-INFO").innerHTML = this.set_profile_info(p.height, p.paz, p.steklo, p.penal);

        info.profileId = p.id;

        let obj = storage.PaPHW.find(v => v.id_profil === id);
        if (obj) {
            this.set_horizontal_profile(obj.id_h, 0);
            this.set_vertical_profile(obj.id_h, 0);
        }
        addition.SetSupplements();
        info.priceTop();

    }
    ,
    set_vertical_profile(id)
    {
        let p = storage.PHW.find(v => v.id === id);
        $('#VERTIKALNUE-PEREMOCHKI-BLOCK img').attr('src', './admin/' + p.img);
        $('#VERTIKALNUE-PEREMOCHKI-NAME').text(p.name);
        $('#VERTIKALNUE-PEREMOCHKI-INFO').html(this.set_profile_vertical_info(p.height, p.paz, p.steklo, p.penal));
        info.profileHeightId = p.id;
        info.priceTop();
    }
    ,
    set_horizontal_profile(id)
    {
        let p = storage.PHW.find(v => v.id === id);
        $('#HORIZONTAL-PEREMOCHKI-BLOCK img').attr('src', './admin/' + p.img);
        $('#HORIZONTAL-PEREMOCHKI-NAME').text(p.name);
        $('#HORIZONTAL-PEREMOCHKI-INFO').html(this.set_profile_horizontal_info(p.height, p.paz, p.steklo, p.penal));
        info.profileWidthId = p.id;
        info.priceTop();
    }
};
let decor = {
    showDekorProfil(){
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        let data = "select=categorydekor";
        $.post("./admin/ajax.php", data, function (data) {
            let text = "";
            let obj = JSON.parse(data);
            for (let i = 0; i < obj.length; i++) {
                let isFirst = '';
                if (i == 0)
                    isFirst = 'active';
                text += '<li class=' + isFirst + '>' +
                    '<a onclick="decor.decorSee(' + obj[i].id + ')" data-toggle="tab" style="font-size: 20px;">' + obj[i].name + '</a>' +
                    '<div class="triangle"></div>' +
                    '<div class="triangle-w"></div>' +
                    '</li>';
            }
            decor.decorSee(obj[0].id);
            let html = '<div><ul id="myTab" class="nav nav-tabs">' + text + '</ul></div><div class="tab-content"></div>';
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(html);

            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        });
    },
    decorSee(id){
        $('#ral-select').remove();

        $.post("./admin/ajax.php?fullgetdekor", "id=" + id, function (data) {
            let obj = JSON.parse(data);
            let item = '';
            let prof = storage.p.find(v => v.id === info.profileId);
            let TotalPrice;
            if (obj.length > 0) {
                for (let i = 0; i < obj.length; i++) {
                    item += '<div  class="col-md-2"><center><h4>' + obj[i].name + '</h4><img src="./admin/' + obj[i].img + '" onclick="decor.decorPrice(' + obj[i].id + ')"; data-dismiss="modal" style="max-width: 100%;width: 159px;height: 95px;"></center><br></div>';
                }
                let sizePerV, sizePerH;
                if (info.countProfileHeight > 0) {
                    sizePerH = info.paintHeight * 0.002 * info.countProfileHeight;
                } else {
                    sizePerH = 0;
                }

                if (info.countProfileWidth > 0) {
                    sizePerV = info.paintWidth * 0.002 * info.countProfileWidth;
                } else {
                    sizePerV = 0;
                }
                $(".tab-content-dekor").remove();
                switch (id) {
                    case 1:
                        TotalPrice = (((info.paintWidth + info.paintWidth) * 0.002) + (sizePerH + sizePerV)) * prof.priceColor;

                        if (TotalPrice < 3860) {
                            TotalPrice = 3860;
                        }
                        break;
                    case 3:
                        TotalPrice = (((info.paintWidth + info.paintWidth) * 0.002) + (sizePerH + sizePerV)) * prof.priceColor;
                        if (TotalPrice < 3860) {
                            TotalPrice = 3860;
                        }
                        break;
                    case 4:
                        let sumPerH = 0;
                        let sumPerV = 0;
                        if (info.countProfileHeight > 0) {
                            sumPerH = info.paintHeight * 0.001 * prof.priceColor * info.countProfileHeight;
                        }
                        if (info.countProfileWidth > 0) {
                            sumPerV = info.paintWidth * 0.001 * prof.priceColor * info.countProfileWidth;
                        }
                        TotalPrice = (((info.paintHeight + info.paintWidth) * 0.002) * prof.priceColor) + sumPerH + sumPerV;
                        break;
                }
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append('<div class="tab-content tab-content-dekor"><div id="ral-select" class="tab-pane active">' +
                    '<div class="col-md-12">' +
                    '<div class="col-md-4">' +
                    '</div>' +
                    '<div class="col-md-4">' +
                    '</div>' +
                    '<div class="col-md-4">' +
                    '<h3 align="right">Цена: ' + Math.round(TotalPrice) + ' руб.</h3>' +
                    '</div>' +
                    '</div>' + item + '</div>');
            }
        });
    },
    decorPrice(id){
        let i = storage.d.find(v => v.id === id);
        let TotalPrice = 0;
        let prof = storage.p.find(v => v.id === info.profileId);
        let sizePerV = 0;
        let sizePerH = 0;
        if (info.countProfileHeight > 0) {
            sizePerH = info.paintHeight * 0.002 * info.countProfileHeight;
        }
        if (info.countProfileWidth > 0) {
            sizePerV = info.paintWidth * 0.002 * info.countProfileWidth;
        }
        if (i) {
            switch (i.parent_id) {
                case 1:
                    TotalPrice = (((info.paintWidth + info.paintWidth) * 0.002) + (sizePerH + sizePerV)) * prof.priceColor;

                    if (TotalPrice < 3860) {
                        TotalPrice = 3860;
                    }
                    break;
                case 3:
                    TotalPrice = (((info.paintWidth + info.paintWidth) * 0.002) + (sizePerH + sizePerV)) * prof.priceColor;
                    if (TotalPrice < 3860) {
                        TotalPrice = 3860;
                    }
                    break;
                case 4:
                    let sumPerH = 0;
                    let sumPerV = 0;
                    if (info.countProfileHeight > 0) {
                        sumPerH = info.paintHeight * 0.001 * prof.priceColor * info.countProfileHeight;
                    }
                    if (info.countProfileWidth > 0) {
                        sumPerV = info.paintWidth * 0.001 * prof.priceColor * info.countProfileWidth;
                    }
                    TotalPrice = (((info.paintHeight + info.paintWidth) * 0.002) * prof.priceColor) + sumPerH + sumPerV;
                    break;
            }
            info.decorPrice = TotalPrice;
            info.decorId = i.id;
            info.decorName = i.name;
            $("span.TAB-POKRASKA-PRICE").text(TotalPrice);
            $('#img-dekor-profil').attr('src', './admin/' + i.img);
            $("#pokraskaTypeAndName").val(i.id);
            info.footerRes();
        }
    }
};
let info = {
    width: 0,
    height: 0,
    count: 0,
    countMove: 0,
    type: 0,
    flag: true,
    paintWidth: 0,
    paintHeight: 0,
    priceProfile: 0,
    priceProfileHeight: 0,
    priceProfileWidth: 0,
    priceResProf: 0,
    countProfileWidth: 0,
    countProfileHeight: 0,
    decorPrice: 0,
    additionResPrice: 0,
    materialsResPrice: 0,
    furnituraResPrice: 0,
    kits: 1,
    init(){
        if (this.width > 0 && this.height && this.count > 0) {

            this.paintWidth = this.width / this.count;
            this.paintHeight = this.height;

            $('#tab-profil-vyisota').val(this.paintHeight);
            $('#tab-profil-shirina').val(this.paintWidth);
            $('#NUMBER_OF_DUPLICATOR_ID').val(0);
            $(".BAFFLE_SEKECTOR_CLASS").empty();
            for (let i = 1; i <= this.count; i++) {
                if (i <= this.countMove) {
                    $(".BAFFLE_SEKECTOR_CLASS").prepend($(`<option value="${i}">подвижные № ${i}</option>`));
                } else {
                    $(".BAFFLE_SEKECTOR_CLASS").prepend($(`<option value="${i}">№ ${i}</option>`));
                }
            }
            $('#AREA_ID').text((this.width / 1000 * this.height / 1000).toFixed(1));
            let a = (this.paintHeight / 1000 * this.paintWidth / 1000).toFixed(1);
            $('.TAB-PROFIL-AREA').text(a);
            $('.TAB-POKRASKA-PLOSHAD').text(a);
            if (this.flag) {
                profiles.setProfile(ParserIntAndNan(storage.pS));
                addition.SetSupplements();
                decor.decorPrice(359);
                $('.add-material-btn').click();
                this.flag = false;
            }
            diagrama.painting();
            this.priceTop();
        }
    },
    footerRes(){
        this.resPriceBez = ((this.priceResProf + this.additionResPrice + this.materialsResPrice) * this.count + this.furnituraResPrice + this.decorPrice) * this.kits;
        $('.summaBezParametrov .price').text(this.resPriceBez);
        this.footerResFull();
    },
    footerResFull(){
        let Total = info.resPriceBez;
        let productionPercent = ParserIntAndNan($('.proizvaodstvoIn input').val());
        let installationPercent = ParserIntAndNan($('.montazhIn input').val());
        let urgencyPercent = ParserIntAndNan($('.srochnostIn input').val());
        let marginPercent = ParserIntAndNan($('.nashProtsentIn input').val());
        let Zamer = ParserIntAndNan($('.nashZamerTo input').val());
        let Dostavka = ParserIntAndNan($('.dostavkaTo input').val());

        let Proizvodstvo = Math.round(info.resPriceBez * (1 + productionPercent / 100) * 1.1);
        let FProizvodstvo = Proizvodstvo - info.resPriceBez;
        $('.proizvaodstvoTo input').val(FProizvodstvo);
        Total += FProizvodstvo;
        let NashProsent = Math.round(Proizvodstvo * (1 + marginPercent / 100) - Proizvodstvo);
        $('.nashProtsentTo input').val(NashProsent);
        Total += NashProsent;
        if (installationPercent === 0) {
            $('.montazhTo input').val(0);
        } else {
            let Montaz = Math.round(info.resPriceBez * (installationPercent / 100) * (marginPercent / 100));
            if (Montaz < 3000) {
                $('.montazhTo input').val(3000);
                Total += 3000;
            } else {
                $('.montazhTo input').val(Montaz);
                Total += Montaz;
            }
        }
        Total += Zamer;
        Total += Dostavka;

        let Srochnosti = Math.round((Total) * urgencyPercent / 100);
        $('.srochnostTo input').val(Srochnosti);

        Total += Srochnosti;

        this.resPricesBez = Total;
        $('.summaSParametrami .price').text(Total);
        if (save.flag) {
            $('.slider-container .price').text(Total + '.руб');
        } else if (save.state === 1) {
            $('.slider-container:eq(1) .price').text(Total + '.руб');
        } else if (save.state === 2) {
            $('.slider-container:eq(0) .price').text(Total + '.руб');
        } else if (save.state === 3) {
            $('.slider-container:eq(2) .price').text(Total + '.руб');
        }
    },
    priceTop (){

        let p = storage.p.find(v => v.id === info.profileId);
        if (p) {
            this.priceProfile = Math.round((this.paintWidth - (p.model * 2) + this.paintHeight) * 0.002 * p.price);
            $('#KARKAS-PRICE').text(this.priceProfile);
        }

        let ph = storage.PHW.find(v => v.id === info.profileHeightId);
        if (ph && this.countProfileWidth > -1) {
            this.priceProfileHeight = Math.round((this.paintWidth - p.model * 2) / 1000 * ph.price * this.countProfileWidth);
            $('#HORIZONTAL-PEREMOCHKI-PRICE').text(this.priceProfileHeight);
        }

        let pw = storage.PHW.find(v => v.id === info.profileWidthId);
        if (pw && this.countProfileHeight > -1) {
            this.priceProfileWidth = Math.round((this.paintHeight - p.model * 2) / 1000 * pw.price * this.countProfileHeight - pw.width * this.countProfileWidth * this.countProfileHeight / 1000 * pw.price);
            $('#VERTIKALNUE-PEREMOCHKI-PRICE').text(this.priceProfileWidth);
        }

        this.priceResProf = this.priceProfile + this.priceProfileHeight + this.priceProfileWidth;
        $('.TAB-PROFIL-KARKAS-PRICE').text(this.priceResProf);
        $('.TAB-PROFIL-PRICE1').text((this.priceResProf * this.count).toFixed(0));
        $('.TAB-PROFIL-PRICE').text(this.priceResProf);

        info.footerRes();
    }
};

// Автор: Владимир
// Дата:  29.12.2016
// ТЗ:    Оформление функционала материалов отдельным модулем.

let nmaterials = {

    index: 0,
    flag: true,
    sort(){
        this.sortArray = [];
        let _str = s => ParserIntAndNan(s.substring(0, s.indexOf(';') !== -1 ? s.indexOf(';') : s.length));
        storage.mC.forEach(i => {
            this.sortArray.push(storage.m.filter(_i => _i.type === i.id.toString()).sort((_a, _b) => _str(_a.price) - _str(_b.price)).map(_i => _i.id));
        });
    },

    // инициализация
    start() {
        nmaterials.events();
    },
    // события
    events() {
        $(".add-material-block-past").on('click', '#open-material-btn', nmaterials.selectMaterialOnClick);
        $(".add-material-block-past").on('click', '#open-material-img', nmaterials.selectMaterialOnClick);
        $('.add-material-btn').click(nmaterials.addMaterialBtn);
    },

    // скопировать материал
    copyElNapolnenie: function (t) {
        let $item = $(t).parent().parent().parent().parent('.napolnenie-el');
        $(".add-material-block-past").append($item.clone());
        $('.napolnenie-el:last').find('.napolnenie-el-tolschina').val($item.find('.napolnenie-el-tolschina').val());
        nmaterials.addWElNapolnenieToFive();
        nmaterials.addWHElNapolnenie();
        nmaterials.ResSumm();
    },

    // удалить материал
    removeElNapolnenie: function (t) {
        $(t).parent().parent().parent().parent('.napolnenie-el').remove();
        nmaterials.addWElNapolnenieToFive();
        nmaterials.addWHElNapolnenie();
        nmaterials.ResSumm();
    },

    // вспомогательная функция для выбора материала
    materialV: function (type, material) {
        $('.tab-content-materials').remove();
        setTimeout(function () {
            let obj = storage.fillMT(type);
            let item = "";
            if (obj.length > 0) {
                for (let i = 0; i < obj.length; i++) {
                    let data2 = explode(";", obj[i].price);
                    let priceOne = data2[0];
                    item += '<div  class="col-md-3"><center><h4>' + obj[i].name + '</h4><img src="./admin/' + obj[i].img + '" onclick="nmaterials.addMaterials(' + obj[i].id + ',' + material + ');" data-dismiss="modal" class="width-130"><h4>Цена: ' + priceOne + '</h4></center><br></div>';
                }
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append('<div class="tab-content tab-content-materials"><div id="typeMaterial' + type + '" class="tab-pane active">' + item + '</div></div>');
            }
        }, 0);
    },

    // выбрать материал, кликнув на картинку
    selectMaterialOnClick: function () {
        let material = $(this).parent().parent().parent().parent();
        let index = $('.napolnenie-el').index(material);

        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        let style, text = "",
            obj = storage.mC;
        for (let i = 0; i < obj.length; i++) {
            if (i === 0) style = "class='active'";
            else style = "class=''";
            text += '<li ' + style + '><a onclick="nmaterials.materialV(' + obj[i].id + ',' + index + ');" href="#typeMaterial' + obj[i].id + '" data-toggle="tab" style="font-size: 20px;">' + obj[i].name + '</a>' +
                '<div class="triangle"></div>' +
                '<div class="triangle-w"></div>' +
                '</li>';
        }
        nmaterials.materialV(obj[0].id, index);
        let html = '<div class="tabbable tabs-left"><ul class="nav nav-tabs">' + text + '</ul></div><div class="tab-content"></div>';
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(html);
        $("#DIAGRAMMA-DIALOG-WINDOW").modal("toggle");
    },

    // добавление нового материала
    addMaterials: function (id, matireal) {
        let obj = storage.m.filter(function (v) {
            return v.id == id
        })[0];
        let $material;
        if (matireal == 'last') {
            $material = $('.napolnenie-el:last');
        } else {
            $material = $(`.napolnenie-el:eq(${matireal})`);
        }
        $material.find('img').attr('src', './admin/' + obj.img);
        if (obj.zakalka === '' || obj.zakalka === 0) {
            $material.find('.zakalkaStekla').hide();
        } else {
            $material.find('.zakalkaStekla').show();
        }
        let doubleFillingK = storage.p.filter(v => v.name === profiles.profile_name).doubleFilling;
        let dataPrice = explode(";", obj.price);
        let dataThickness = explode(";", obj.thickness);
        let dataPriceEnd = [];
        let dataThicknessEnd = [];
        for (let i = 0; i < dataThickness.length; i++) {
            dataPriceEnd.push(dataPrice[i]);
            dataThicknessEnd.push(dataThickness[i]);
        }
        $material.find('.napolnenie-el-tolschina').empty();
        for (let i = 0; i < dataThicknessEnd.length; i++)
            $material.find('.napolnenie-el-tolschina').append($('<option value="' + dataPriceEnd[i] + '">' + dataThicknessEnd[i] + ' мм</option>'));
        if (doubleFillingK == 1) {
            $material.find('.dvoinoeZapolnenieCheckbox').show();
        }
        else $material.find('.dvoinoeZapolnenieCheckbox').hide();
        if (obj.type == '2') {
            let c = $('.napolnenie-el').length - 1;
            let $block = $material.find('.photo1');
            $block.css('display', 'block');
            $block.find('button').attr('onclick', 'bPhoto(' + c + ')');
        } else {
            $material.find('.photo1').css('display', 'none');
        }
        nmaterials.ResSumm();
    },

    // реакция на нажатие кнопки добавление нового материала
    addMaterialBtn: function () {
        if (info.profileId) {
            let obj = storage.m.find(v => v.id.toString() === storage.mS);
            let paz = storage.p.find(v => v.id === info.profileId).paz;
            if (obj.thickness !== '' && obj.thickness !== 0) {
                let dataThickness = explode(";", obj.thickness);
                let canAdd = false;
                for (let j = 0; j < dataThickness.length; j++)
                    if (dataThickness[j] <= paz) {
                        canAdd = true;
                        break;
                    }
                if (canAdd) {
                    $(".add-material-block-past").append('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 napolnenie-el">' + $(".napolnenie-el-set").html() + '</div>');
                    nmaterials.addMaterials(storage.mS, 'last');
                    nmaterials.addWElNapolnenieToFive();
                    nmaterials.addWHElNapolnenie();
                }
            } else  message("Толщина стандартного материала не подходит к толщине выбраного профиля");
        } else  message("Выберите профиль!");
    },
    // пересчет цены материалов
    ResSumm: function () {
        let $material = $('.napolnenie-el');
        let sum = 0;
        let TopS = 0
        $material.each(function () {
            let str = $(this).find('#open-material-img').attr('src').substr(8);
            let obj = storage.m.filter(function (v) {
                return v.img == str
            })[0];
            let vyisota = ParserIntAndNan($(this).find('.tab-napolnenie-vyisota').val());
            let shirina = ParserIntAndNan($(this).find('.tab-napolnenie-shirina').val());
            let count = ParserIntAndNan($(this).find('.tab-napolnenie-kollichestvo').val());
            let S = (vyisota * 0.001) * (shirina * 0.001) * count;
            TopS += S;
            let price = ParserIntAndNan($(this).find('.napolnenie-el-tolschina').val());
            if ($(this).find('.materialsBlockSwith').prop("checked")) {
                price += ParserIntAndNan(explode(";", obj.zakalka)[explode(";", obj.price).indexOf(price.toString())]);
            }
            if ($(this).find('.materialsBlockSwith2').prop("checked")) {
                price *= 2
            }
            if ($(this).find('#namber').text() !== 'Номер') {
                let t = $(this).find('#namber').text();
                let i = storage.ExpMatireals.find((v) => v.name === t);
                if (i) {
                    price += i.price;
                }
            }

            let res = Math.round(price * S);
            sum += res;


            $(this).find('.tab-napolnenie-ploschad').text(S.toFixed(2));
            $(this).find('.tab-napolnenie-price').text(res);
        });
        info.materialsResPrice = sum;
        $('#Pnap').text(sum * info.count);
        $('#Snap').text((TopS * info.count).toFixed(2));
        info.footerRes();

    },


    // установка высоты материалов
    addWHElNapolnenie: function () {
        if (info.height !== 0) {
            let $items = $('.napolnenie-el');
            let hight = info.height;
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
        if (info.width !== 0) {
            $('.napolnenie-el .tab-napolnenie-shirina').each(function () {
                $(this).val(info.width / info.count);
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

function _item(name, img, price, id) {
    return '<div class="col-md-3"><center><h4>' + name + '</h4><img src="./admin/' + img + '" onclick="setnumber(\'' + name + '\',' + id + ')" style="max-width: 100%;width: 159px;height: 95px;"><h5>' + price + ' руб.</h5></center></div>';
}
function bPhoto(id) {
    let $modal = $('#DIAGRAMMA-DIALOG-WINDOW');
    let $bodym = $('#DIAGRAMMA-DIALOG-WINDOW .modal-body');
    let array = storage.ExpMatireals;
    let html = ' <ul class="nav nav-tabs" role="tablist">'
        + '<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Пескоструйные рисунки</a></li>'
        + '<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Фотопечать</a></li>'
        + '<li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Жалюзи</a></li>'
        + '<li role="presentation"><a href="#otdelka" aria-controls="messages" role="tab" data-toggle="tab">Отделка</a></li>'
        + '</ul>'
        + ' <div class="tab-content"><div role="tabpanel" class="tab-pane active" id="home"><div class="row">';
    let arr = array.filter(function (value) {
        return value.cat == 1;
    });
    let arr0 = array.filter(function (value) {
        return value.cat == 2;
    });
    let arr1 = array.filter(function (value) {
        return value.cat == 3;
    });
    let arr2 = array.filter(function (value) {
        return value.cat == 4;
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
    let arr = storage.ExpMatireals.find((v) => v.name === name);
    let $i = $(`.napolnenie-el:eq(${id})`);
    let h = ParserIntAndNan($i.find('.tab-napolnenie-vyisota').val());
    let w = ParserIntAndNan($i.find('.tab-napolnenie-shirina').val());
    $i.find('#namber').text(arr.name);
    let $price = $i.find('.tab-napolnenie-price');

    $price.text(ParserIntAndNan($price.text()) + (h * w) * arr.price * 0.001);
}


let addition = {
    SetTypeSupplements: function (id, typeprice, name) {
        switch (typeprice) {
            case 'Поштучно': {
                $('#SUPPLEMENTS').append('<div class="col-md-3"><input type="hidden" class="nsupp" value="' + id + '" /><input type="hidden" class="nsupp' + id + '" value="' + name + '" /><button id="buttonSupplements' + id + '" onclick="addition.SeeSupplements(' + id + ')" class="btn btn-raised btn-default btn-block">Выбрать</button><select class="form-control input-sm" id="selectSupplements' + id + '"><option>Есть</option><option>Нет</option></select><center><h3 class="inline-block " id="typeSupplements' + id + '"  data-typeSupplements="' + id + '">' + name + '</h3><input  value="1" maxlength="2" id="CountSupplements' + id + '" data-price="0" placeholder="0" type="text" class="form-control input-custom-block-super-mini inline-block width-20"><label class=" inline-block width-20">шт.</label></input><center><h3 id="textSupplements' + id + '" class="addition" >Не выбран</h3></center><img src="img/material/undefined.png"  id="imageSupplements' + id + '" class="img-responsive" alt=""><h4 id="PriceSupplements" data-PriceSupplements="' + id + '">Цена: <span data-type="1" data-price="0" id="priceSupplements' + id + '" data-price="0">0</span>руб</h4></div>');
                break;
            }
            case 'Поштучно c автоматическим подсчетом': {
                $('#SUPPLEMENTS').append('<div class="col-md-3"><input type="hidden" class="nsupp" value="' + id + '" /><input type="hidden" class="nsupp' + id + '" value="' + name + '" /><button id="buttonSupplements' + id + '" onclick="addition.SeeSupplements(' + id + ')" class="btn btn-raised btn-default btn-block">Выбрать</button><select class="form-control input-sm" id="selectSupplements' + id + '"><option>Есть</option><option>Нет</option></select><center><h3 class="inline-block " id="typeSupplements' + id + '"  data-typeSupplements="' + id + '">' + name + '</h3><input  value="1" maxlength="2" id="CountSupplements' + id + '" data-price="0" placeholder="0" type="text" class="form-control input-custom-block-super-mini inline-block width-20"><label class=" inline-block width-20">шт.</label></input><input type="checkbox" id="checkboxSupplements' + id + '" checked><center><h3 id="textSupplements' + id + '" class="addition" >Не выбран</h3></center><img src="img/material/undefined.png"  id="imageSupplements' + id + '" class="img-responsive" alt=""><h4 id="PriceSupplements" data-PriceSupplements="' + id + '">Цена: <span data-type="6" data-price="0" id="priceSupplements' + id + '" data-price="0">0</span>руб</h4></div>');
                break;
            }
            case 'Поштучно за количество соединений': {
                $('#SUPPLEMENTS').append('<div class="col-md-3"><input type="hidden" class="nsupp" value="' + id + '" /><input type="hidden" class="nsupp' + id + '" value="' + name + '" /><button id="buttonSupplements' + id + '" onclick="addition.SeeSupplements(' + id + ')" class="btn btn-raised btn-default btn-block">Выбрать</button><select class="form-control input-sm" id="selectSupplements' + id + '"><option>Есть</option><option>Нет</option></select><center><h3 class="inline-block" id="typeSupplements' + id + '"  data-typeSupplements="' + id + '">' + name + '</h3><center><h3 id="textSupplements' + id + '" class="addition">Не выбран</h3></center><img src="img/material/undefined.png"  id="imageSupplements' + id + '" class="img-responsive" alt=""><h4 id="PriceSupplements" data-PriceSupplements="' + id + '">Цена: <span data-type="5" data-price="0" id="priceSupplements' + id + '" data-price="0">0</span>руб</h4></div>');
                break;
            }
            case 'с периметром': {
                $('#SUPPLEMENTS').append('<div class="col-md-3"><input type="hidden" class="nsupp" value="' + id + '" /><input type="hidden" class="nsupp' + id + '" value="' + name + '" /><button id="buttonSupplements' + id + '" onclick="addition.SeeSupplements(' + id + ')" class="btn btn-raised btn-default btn-block">Выбрать</button><select class="form-control input-sm" id="selectSupplements' + id + '"><option>Есть</option><option>Нет</option></select><center><h3 id="typeSupplements' + id + '"  data-typeSupplements="' + id + '">' + name + '</h3><center><h3 id="textSupplements' + id + '" class="addition">Не выбран</h3></center><img src="img/material/undefined.png"  id="imageSupplements' + id + '" class="img-responsive" alt=""><h4 id="PriceSupplements" data-PriceSupplements="' + id + '">Цена: <span data-type="2" data-price="0" id="priceSupplements' + id + '">0</span>руб</h4></div>');
                break;
            }
            case 'С периметром + перемычки': {
                $('#SUPPLEMENTS').append('<div class="col-md-3"><input type="hidden" class="nsupp" value="' + id + '" /><input type="hidden" class="nsupp' + id + '" value="' + name + '" /><button id="buttonSupplements' + id + '" onclick="addition.SeeSupplements(' + id + ')" class="btn btn-raised btn-default btn-block">Выбрать</button><select class="form-control input-sm" id="selectSupplements' + id + '"><option>Есть</option><option>Нет</option></select><center><h3 id="typeSupplements' + id + '"  data-typeSupplements="' + id + '">' + name + '</h3><center><h3 id="textSupplements' + id + '" class="addition">Не выбран</h3></center><img src="img/material/undefined.png"  id="imageSupplements' + id + '" class="img-responsive" alt=""><h4 id="PriceSupplements" data-PriceSupplements="' + id + '">Цена: <span id="priceSupplements' + id + '" data-type="3" data-price="0">0</span>руб</h4></div>');
                break;

            }
            case 'С периметром + перемычки +дввойной или одинарный': {
                $('#SUPPLEMENTS').append('<div class="col-md-3"><input type="hidden" class="nsupp" value="' + id + '" /><input type="hidden" class="nsupp' + id + '" value="' + name + '" /><button id="buttonSupplements' + id + '" onclick="addition.SeeSupplements(' + id + ')" class="btn btn-raised btn-default btn-block">Выбрать</button><select class="form-control input-sm" id="selectSupplements' + id + '"><option>Есть</option><option>Нет</option></select><center><h3 id="typeSupplements' + id + '" data-typeSupplements="' + id + '">' + name + '</h3><center><h3 id="textSupplements' + id + '" class="addition">Не выбран</h3></center><img src="img/material/undefined.png"  id="imageSupplements' + id + '" class="img-responsive" alt=""><h4 id="PriceSupplements" data-PriceSupplements="' + id + '">Цена: <span id="priceSupplements' + id + '" data-type="4" data-price="0">0</span>руб</h4></div>');
                break;
            }
            case 'С периметром + перемычки +двойной или одинарный': {
                $('#SUPPLEMENTS').append('<div class="col-md-3"><input type="hidden" class="nsupp" value="' + id + '" /><input type="hidden" class="nsupp' + id + '" value="' + name + '" /><button id="buttonSupplements' + id + '" onclick="addition.SeeSupplements(' + id + ')" class="btn btn-raised btn-default btn-block">Выбрать</button><select class="form-control input-sm" id="selectSupplements' + id + '"><option>Есть</option><option>Нет</option></select><center><h3 id="typeSupplements' + id + '" data-typeSupplements="' + id + '">' + name + '</h3><center><h3 id="textSupplements' + id + '" class="addition">Не выбран</h3></center><img src="img/material/undefined.png"  id="imageSupplements' + id + '" class="img-responsive" alt=""><h4 id="PriceSupplements" data-PriceSupplements="' + id + '">Цена: <span id="priceSupplements' + id + '" data-type="4" data-price="0">0</span>руб</h4></div>');
                break;
            }
            default: {
                $('#SUPPLEMENTS').append('<div class="col-md-3"><input type="hidden" class="nsupp" value="' + id + '" /><input type="hidden" class="nsupp' + id + '" value="' + name + '" /><button id="buttonSupplements' + id + '" onclick="addition.SeeSupplements(' + id + ')" class="btn btn-raised btn-default btn-block">Выбрать</button><select class="form-control input-sm" id="selectSupplements' + id + '"><option>Есть</option><option>Нет</option></select><center><h3 id="typeSupplements' + id + '"  data-typeSupplements="' + id + '">' + name + '</h3><center><h3 id="textSupplements' + id + '" class="addition">Не выбран</h3></center><img src="img/material/undefined.png"  id="imageSupplements' + id + '" class="img-responsive" alt=""><h4 id="PriceSupplements" data-PriceSupplements="' + id + '">Цена: <span data-type="' + typeprice + '" data-price="0" id="priceSupplements' + id + '">0</span>руб</h4></div>');
                break;
            }
        }
    },
    SelectSupplements: function (img, text, price, id) {
        $('#textSupplements' + id).text(text);
        $('#imageSupplements' + id).attr('src', img);
        $('#priceSupplements' + id).text(price);
        $('#priceSupplements' + id).attr('data-price', price);
        $('#CountSupplements' + id).attr('data-price', price);
        addition.priceAddition();
    },
    SeeSupplements: function (id) {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        let html = $('.zaglushka-torcevaya-block-modal').html();
        let obj = storage.S;
        let profils = storage.PAS;
        let idK = info.profileId;
        for (let j = 0; j < profils.length; j++) {
            if (profils[j].Profil == idK) {
                if (obj.length === 0) {
                    message('Извините , но для данного профиля заглушки торцевые отсутствуют');
                } else {
                    for (let i = 0; i < obj.length; i++) {
                        if (obj[i].id == profils[j].Supplements && obj[i].patern_id == id) {
                            let templateData = {
                                id: id,
                                img: 'src="./admin/' + obj[i].img + '"',
                                img2: "./admin/" + obj[i].img,
                                text1: obj[i].name,
                                price1: obj[i].price,
                            };
                            let resultHtml = makeHTMLFromTemplate(html, templateData);
                            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
                        }
                    }
                }
            }
        }
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    },
    SetSupplements() {
        if (info.profileId) {
            let obj = storage.S;
            let obj1 = storage.PAS.filter(v => v.Profil === info.profileId);
            $('.addon-block select').prop('value', 'Нет');

            for (let j = 0; j < obj1.length; j++) {
                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].id === obj1[j].Supplements) {
                        let item = storage.TS.find(v => v.id === obj[i].patern_id);
                        $('#textSupplements' + obj[i].patern_id).text(obj[i].name);
                        $('#imageSupplements' + obj[i].patern_id).attr('src', './admin/' + obj[i].img);
                        $('#priceSupplements' + obj[i].patern_id).text(obj[i].price);
                        $('#priceSupplements' + obj[i].patern_id).attr('data-price', obj[i].price);
                        $('#CountSupplements' + obj[i].patern_id).attr('data-price', obj[i].price);
                        if (item) {
                            $('#selectSupplements' + obj[i].patern_id).val(item.flag === 'Да' ? 'Есть' : 'Нет');
                        } else {
                            $('#selectSupplements' + obj[i].patern_id).val('Есть');
                        }

                    }
                }
            }
            addition.priceAddition();
        }
    },
    changeAddition() {
        let obj;
        $('#SUPPLEMENTS').html('');
        switch (info.type) {
            case 0: {
                obj = storage.TS.filter(v => v.type === 'Стационарная');
                break;
            }
            case 1: {
                obj = storage.TS.filter(v => v.type === 'Раздвижная перегородка');
                break;
            }
            case 2: {
                obj = storage.TS.filter(v => v.type === 'Складная перегородка');
                break;
            }
            case 3: {
                obj = storage.TS.filter(v => v.type === 'Распашная дверь');
                break;
            }
            case 4: {
                obj = storage.TS.filter(v => v.type === 'Мобильная перегородка');
                break;
            }
        }
        obj.forEach(v => {
            addition.SetTypeSupplements(v.id, v.typeprice, v.name);
        });
        this.SetSupplements();
    },
    priceAddition(){
        let addon_price_res = 0;
        let $a = $('#PriceSupplements span');
        $a.each(function () {
            let Pl, Pw, str, check, Pln, PWn, P;

            str = $(this).attr('id');
            Pl = info.paintHeight * 0.001;
            Pw = info.paintWidth * 0.001;
            Pln = ParserIntAndNan($('#tab-profil-v-peremyichki-shtuk').val());
            PWn = ParserIntAndNan($('#tab-profil-peremyichki-horizontal-shtuk').val());
            switch ($(this).attr('data-type')) {
                case '1': {
                    check = 'CountSupplements' + str.replace(/\D+/g, "");
                    $(this).text(ParserIntAndNan($(this).attr('data-price')) * ParserIntAndNan($('#' + check).val()));
                    break;
                }
                case '6': {
                    check = 'CountSupplements' + str.replace(/\D+/g, "");
                    check1 = 'checkboxSupplements' + str.replace(/\D+/g, "");
                    if ($('#' + check1).prop("checked")) {
                        $('#' + check).attr('disabled', 'disabled');
                        $('#' + check).val(4 + (Pln) * 2 + (PWn) * 2 + (Pln) * (PWn) * 2);
                    } else {
                        $('#' + check).removeAttr('disabled');
                    }
                    $(this).text(ParserIntAndNan($(this).attr('data-price')) * ParserIntAndNan($('#' + check).val()));
                    break;
                }
                case '2': {
                    $(this).text(Math.round(ParserIntAndNan($(this).attr('data-price')) * (2 * (Pl + Pw))));
                    break;
                }
                case '3': {
                    check = 'checkboxSupplements' + str.replace(/\D+/g, "");
                    $(this).text(Math.round(((Pl + Pw) * 2 + ((Pl * Pln) + (Pw * PWn)) * 2) * parseInt($(this).attr('data-price'))));
                    break;
                }
                case '4': {
                    check = 'checkboxSupplements' + str.replace(/\D+/g, "");
                    $(this).text(Math.round(((Pl + Pw) * 2 + ((Pl * Pln) + (Pw * PWn)) * 2) * parseInt($(this).attr('data-price'))));
                    break;
                }
                case '5': {
                    P = 4 + (Pln * 2) + (PWn * 2) + (PWn * Pln);
                    $(this).text(P * ParserIntAndNan($(this).attr('data-price')));
                    break;
                }
                default : {
                    $(this).text(fornituraPrice(ParserIntAndNan($(this).attr('data-price')), $(this).attr('data-type')));
                    break;
                }
            }
        });
        $a.each(function () {
            switch ($('#selectSupplements' + $(this).attr('id').replace(/\D+/g, "")).val()) {
                case 'Есть': {
                    $('#buttonSupplements' + $(this).attr('id').replace(/\D+/g, "")).removeAttr('disabled');
                    $('#CountSupplements' + $(this).attr('id').replace(/\D+/g, "")).removeAttr('disabled');
                    $('#CountSupplements' + $(this).attr('id').replace(/\D+/g, "")).css('opacity', '1');
                    $('#checkboxSupplements' + $(this).attr('id').replace(/\D+/g, "")).removeAttr('disabled');
                    $('#checkboxSupplements' + $(this).attr('id').replace(/\D+/g, "")).css('opacity', '1');
                    $('#imageSupplements' + $(this).attr('id').replace(/\D+/g, "")).css('opacity', '1');
                    $('#textSupplements' + $(this).attr('id').replace(/\D+/g, "")).css('opacity', '1');
                    $('[data-pricesupplements="' + $(this).attr('id').replace(/\D+/g, "") + '"]').css('opacity', '1');
                    $('[data-typeSupplements="' + $(this).attr('id').replace(/\D+/g, "") + '"]').css('opacity', '1');
                    break;
                }
                case 'Нет': {
                    $('#buttonSupplements' + $(this).attr('id').replace(/\D+/g, "")).attr('disabled', 'disabled');
                    $('#imageSupplements' + $(this).attr('id').replace(/\D+/g, "")).css('opacity', '0.25');
                    $('#textSupplements' + $(this).attr('id').replace(/\D+/g, "")).css('opacity', '0.25');
                    $('#CountSupplements' + $(this).attr('id').replace(/\D+/g, "")).attr('disabled', 'disabled');
                    $('#CountSupplements' + $(this).attr('id').replace(/\D+/g, "")).css('opacity', '0.25');
                    $('#checkboxSupplements' + $(this).attr('id').replace(/\D+/g, "")).attr('disabled', 'disabled');
                    $('#checkboxSupplements' + $(this).attr('id').replace(/\D+/g, "")).css('opacity', '0.25');
                    $('[data-pricesupplements="' + $(this).attr('id').replace(/\D+/g, "") + '"]').css('opacity', '0.25');
                    $('[data-typeSupplements="' + $(this).attr('id').replace(/\D+/g, "") + '"]').css('opacity', '0.25');
                    $(this).text('0');
                    break;
                }
            }
        });
        $a.each(function () {
            addon_price_res += ParserIntAndNan($(this).text());
        });
        info.additionResPrice = addon_price_res;
        $(".addon-block .price-res").html(addon_price_res);
        $(".addon-block .price-res1").html(addon_price_res * info.count);
        info.footerRes();
    }
};

// Автор: Владимир
// Дата:  23.01.2017
// ТЗ:    Оформление функционала фурнитуры отдельным модулем.

let nfurnitura = {

    // инициализация
    start: function () {
        nfurnitura.events();
        nfurnitura.loadFurnitura();

    },

    // события
    events: function () {
        $("#TYPE_BAFFLE_ID").change(function () {
            nfurnitura.loadFurnitura();
            nfurnitura.viewTotalFurnitura();
        });
        $("#furnitura-tab").on('click', '#stoiki-stac-select .addonImg', function () {
            if (!isNaN(parseInt($("#TOTAL_PAINTING_ID").val()))) {
                nfurnitura.openModalStac("StoikiStac");
            } else {
                message("Укажите количество полотен!");
            }
        });
        $("#furnitura-tab").on('click', '#razdvizhnyie-mehanizmyi-select .addonImg', function () {
            nfurnitura.openModalRadvizh("RazdvizhnyieMehanizmyi");
        });
        $("#furnitura-tab").on('click', '#mehanizm-sinhronizacii-select .addonImg', function () {
            nfurnitura.openModalRadvizh("mehanizmsinhronizacii");
        });
        $("#furnitura-tab").on('click', '#mehanizm-teleskop-select .addonImg', function () {
            nfurnitura.openModalRadvizh("telestop");
        });
        $("#furnitura-tab").on('click', '#naprav-select .addonImg', function () {
            nfurnitura.openModalRadvizh("naprav");
        });
        $("#furnitura-tab").on('click', '#napravn-select .addonImg', function () {
            nfurnitura.openModalRadvizh("napravn");
        });
        $("#furnitura-tab").on('click', '#vid-kreplenia-naprav-select .addonImg', function () {
            nfurnitura.openModalRadvizh("vidkreplenianaprav");
        });
        $("#furnitura-tab").on('click', '#povodok-select .addonImg', function () {
            nfurnitura.openModalRadvizh("povodok");
        });
        $("#furnitura-tab").on('click', '#dovodchik-select .addonImg', function () {
            nfurnitura.openModalRadvizh("dovodchik");
        });
        $("#furnitura-tab").on('click', '#dek-planka-dlya-profilya-select .addonImg', function () {
            nfurnitura.openModalRadvizh("dekplankadlyaprofilya");
        });
        $("#furnitura-tab").on('click', '#schetochnii-uplotnitel-select .addonImg', function () {
            nfurnitura.openModalRadvizh("schetochniiuplotnitel");
        });
        $("#furnitura-tab").on('click', '#ruchka-select .addonImg', function () {
            nfurnitura.openModalRadvizh("ruchka");
        });
        $("#furnitura-tab").on('click', '#zamok-select .addonImg', function () {
            nfurnitura.openModalRadvizh("zamok");
        });
        $("#furnitura-tab").on('click', '#mehanizm-sinhron-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("mehanizmsinhronskladnie");
        });
        $("#furnitura-tab").on('click', '#mehanizm-rotornii .addonImg', function () {
            nfurnitura.openModalSkladnie("mehanizmrotornii");
        });
        $("#furnitura-tab").on('click', '#petli-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("petliskladnie");
        });
        $("#furnitura-tab").on('click', '#napravlyayuschie-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("napravlyayuschieskladnie");
        });
        $("#furnitura-tab").on('click', '#napravlyayuschien-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("napravlyayuschienskladnie");
        });
        $("#furnitura-tab").on('click', '#vid-krepleniya-napravlyayuschih-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("vidkrepleniyanapravlyayuschihskladnie");
        });
        $("#furnitura-tab").on('click', '#dek-planka-dlya-profilya-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("dekplankadlyaprofilyaskladnie");
        });
        $("#furnitura-tab").on('click', '#schetochnii-uplotnitel-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("schetochniiuplotnitelskladnie");
        });
        $("#furnitura-tab").on('click', '#ruchka-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("ruchkaskladnie");
        });
        $("#furnitura-tab").on('click', '#kreplenie-ruchli-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("kreplenieruchliskladnie");
        });
        $("#furnitura-tab").on('click', '#zamok-skladnie .addonImg', function () {
            nfurnitura.openModalSkladnie("zamokskladnie");
        });
        $("#furnitura-tab").on('click', '#nozhki-mobilnie .addonImg', function () {
            nfurnitura.openModalMobil("nozhkimobilnie");
        });
        $("#furnitura-tab").on('click', '#kolesiki-mobilnie .addonImg', function () {
            nfurnitura.openModalMobil("kolesikimobilnie");
        });
        $("#furnitura-tab").on('click', '#stoyki-mobilnie .addonImg', function () {
            let Count = parseInt($("#TOTAL_PAINTING_ID").val());
            if (Count > 1) {
                nfurnitura.openModalMobil("stoykimobilnie");
            } else {
                message("Количество полотен должно быть минимум 2!");
            }
        });
        $("#furnitura-tab").on('click', '#tipSoedineniyaPoloten-mobilnie .addonImg', function () {
            nfurnitura.openModalMobil("tipSoedineniyaPolotenmobilnie");
        });
        $("#furnitura-tab").on('click', '#petli-raspashnie .addonImg', function () {
            nfurnitura.openModalRaspashnie("petliRaspashnie");
        });
        $("#furnitura-tab").on('click', '#ruchka-raspashnie .addonImg', function () {
            nfurnitura.openModalRaspashnie("ruchkaRaspashnie");
        });
        $("#furnitura-tab").on('click', '#zamok-raspashnie .addonImg', function () {
            nfurnitura.openModalRaspashnie("zamokRaspashnie");
        });

        $("#furnitura-tab").on('change', '.furnitura-count', function () {
            nfurnitura.getDataFurnitura();
            nfurnitura.viewTotalFurnitura();
        });
        $(".furnitura-count").change(function () {
            setTimeout(function () {
                nfurnitura.getDataFurnitura();
                nfurnitura.viewTotalFurnitura();
            }, 500);
        });

        $("#furnitura-tab").on('input', '#stoiki-stac-count', function () {
            nfurnitura.getDataFurnitura();
            nfurnitura.viewTotalFurnitura();
        });
        $("#furnitura-tab").on('input', '#stoyki-mobilnie-count', function () {
            nfurnitura.getDataFurnitura();
            nfurnitura.viewTotalFurnitura();
        });

        /**
         * Анимации описания
         * Дата 10.01.2016
         * @author Виталий
         */
        let description_trigger;
        $(document).on("mouseenter", ".description-trigger", function () {
            description_trigger = $(this).prev(".podvesyi-modal-left .description");
            $(description_trigger).animate({
                opacity: 0.9,
                top: "-5"
            }, 100, function () {
            });
        });

        $(document).on("mouseleave", ".description-trigger", function () {
            $(description_trigger).animate({
                opacity: 0,
                top: "-150"
            }, 100, function () {
            });
        });
    },

    setStartValues: function () {
        let item;
        item = storage.f.find((v) => v.cat === 1);
        if (item)
            nfurnitura.SelectRazdvizhnyieMehanizmyiEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 2);
        if (item)
            nfurnitura.SelectmehanizmsinhronizaciiEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 3);
        if (item)
            nfurnitura.SelectnapravEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 4);
        if (item)
            nfurnitura.SelectvidkreplenianapravEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 5);
        if (item)
            nfurnitura.SelectpovodokEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 6);
        if (item)
            nfurnitura.SelectdovodchikEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 7);
        if (item)
            nfurnitura.SelectdekplankadlyaprofilyaEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 8);
        if (item)
            nfurnitura.SelectschetochniiuplotnitelEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 9);
        if (item)
            nfurnitura.SelectruchkaEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 10);
        if (item)
            nfurnitura.SelectzamokEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 11);
        if (item)
            nfurnitura.SelectmehanizmsinhronskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 12);
        if (item)
            nfurnitura.SelectmehanizmrotorniiEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 13);
        if (item)
            nfurnitura.SelectpetliskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 14);
        if (item)
            nfurnitura.SelectnapravlyayuschieskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 15);
        if (item)
            nfurnitura.SelectvidkrepleniyanapravlyayuschihskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 16);
        if (item)
            nfurnitura.SelectdekplankadlyaprofilyaskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 17);
        if (item)
            nfurnitura.SelectschetochniiuplotnitelskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 18);
        if (item)
            nfurnitura.SelectruchkaskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 19);
        if (item)
            nfurnitura.SelectkreplenieruchliskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 20);
        if (item)
            nfurnitura.SelectzamokskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 21);
        if (item)
            nfurnitura.SelectpetliRaspashnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 22);
        if (item)
            nfurnitura.SelectruchkaRaspashnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 23);
        if (item)
            nfurnitura.SelectzamokRaspashnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 24);
        if (item)
            nfurnitura.SelectnozhkimobilnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 25);
        if (item)
            nfurnitura.SelectkolesikimobilnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 26);
        if (item)
            nfurnitura.SelectstoykimobilnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 27);
        if (item)
            nfurnitura.SelecttipSoedineniyaPolotenmobilnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 28);
        if (item)
            nfurnitura.SelectStoikiStacEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 29);
        if (item)
            nfurnitura.SelectnapravnEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 30);
        if (item)
            nfurnitura.SelectnapravlyayuschienskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = storage.f.find((v) => v.cat === 31);
        if (item)
            nfurnitura.SelectmehanizmtelestopEnd("./admin/" + item.img, item.name, item.price);
    },

    openModalStac: function (type) {
        let Count = info.count;
        let width = info.width;
        if (!isNaN(Count) && !isNaN(width)) {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            let html = $('.obshee-modal').html();
            switch (type) {
                case "StoikiStac":
                    storage.fillFC(28);
                    break;
            }
            let obj = storage.fC;
            for (let i = 0; i < obj.length; i++) {
                let templateData = {
                    img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                    img2: "./admin/" + obj[i].img,
                    text1: obj[i].cname,
                    text2: obj[i].name,
                    description: obj[i].description,
                    price: fornituraPrice(obj[i].price, obj[i].formula),
                    funcName: type
                };
                let resultHtml = makeHTMLFromTemplate(html, templateData);
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        } else {
            message("Укажите количество полотен и ширину!");
        }
    },

    openModalRadvizh: function (type) {
        if (!isNaN(parseInt($("#TOTAL_PAINTING_ID").val())) && !isNaN(parseInt($("#WIDTH_SETS_ID").val()))) {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            let cat,
                html = $('.obshee-modal').html();
            switch (type) {
                case "RazdvizhnyieMehanizmyi":
                    storage.fillFC(1);
                    break;
                case "mehanizmsinhronizacii":
                    storage.fillFC(2);
                    break;
                case "naprav":
                    storage.fillFC(3);
                    break;
                case "napravn":
                    storage.fillFC(29);
                    break;
                case "vidkreplenianaprav":
                    storage.fillFC(4);
                    break;
                case "povodok":
                    storage.fillFC(5);
                    break;
                case "dovodchik":
                    storage.fillFC(6);
                    break;
                case "dekplankadlyaprofilya":
                    storage.fillFC(7);
                    break;
                case "schetochniiuplotnitel":
                    storage.fillFC(8);
                    break;
                case "ruchka":
                    storage.fillFC(9);
                    break;
                case "zamok":
                    storage.fillFC(10);
                    break;
                case "telestop": {
                    type = 'mehanizmtelestop';
                    storage.fillFC(31);
                    break;
                }
            }
            let obj = storage.fC;
            for (let i = 0; i < obj.length; i++) {
                let templateData = {
                    img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                    img2: "./admin/" + obj[i].img,
                    text1: obj[i].cname,
                    text2: obj[i].name,
                    description: obj[i].description,
                    price: fornituraPrice(obj[i].price, obj[i].formula),
                    funcName: type
                };
                let resultHtml = makeHTMLFromTemplate(html, templateData);
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        } else {
            message("Укажите количество полотен и ширину!");
        }
    },

    openModalSkladnie: function (type) {
        if (!isNaN(parseInt($("#TOTAL_PAINTING_ID").val())) && !isNaN(parseInt($("#WIDTH_SETS_ID").val()))) {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            let cat,
                html = $('.obshee-modal').html();
            switch (type) {
                case "mehanizmsinhronskladnie":
                    storage.fillFC(11);
                    break;
                case "mehanizmrotornii":
                    storage.fillFC(12);
                    break;
                case "petliskladnie":
                    storage.fillFC(13);
                    break;
                case "napravlyayuschieskladnie":
                    storage.fillFC(14);
                    break;
                case "napravlyayuschienskladnie":
                    storage.fillFC(30);
                    break;
                case "vidkrepleniyanapravlyayuschihskladnie":
                    storage.fillFC(15);
                    break;
                case "dekplankadlyaprofilyaskladnie":
                    storage.fillFC(16);
                    break;
                case "schetochniiuplotnitelskladnie":
                    storage.fillFC(17);
                    break;
                case "ruchkaskladnie":
                    storage.fillFC(18);
                    break;
                case "kreplenieruchliskladnie":
                    storage.fillFC(19);
                    break;
                case "zamokskladnie":
                    storage.fillFC(20);
                    break;
            }
            let obj = storage.fC;
            for (let i = 0; i < obj.length; i++) {
                let templateData = {
                    img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                    img2: "./admin/" + obj[i].img,
                    text1: obj[i].cname,
                    text2: obj[i].name,
                    description: obj[i].description,
                    price: fornituraPrice(obj[i].price, obj[i].formula),
                    funcName: type
                };
                let resultHtml = makeHTMLFromTemplate(html, templateData);
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        } else {
            message("Укажите количество полотен и ширину!");
        }
    },

    openModalMobil: function (type) {
        if (!isNaN(parseInt($("#TOTAL_PAINTING_ID").val())) && !isNaN(parseInt($("#WIDTH_SETS_ID").val())) && getFromData("karkas-name") !== "") {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            let cat,
                html = $('.obshee-modal').html();
            switch (type) {
                case "nozhkimobilnie":
                    storage.fillFC(24);
                    break;
                case "kolesikimobilnie":
                    storage.fillFC(25);
                    break;
                case "stoykimobilnie":
                    storage.fillFC(26);
                    break;
                case "tipSoedineniyaPolotenmobilnie":
                    storage.fillFC(27);
                    break;
            }
            let obj = storage.fC;
            for (let i = 0; i < obj.length; i++) {
                let templateData = {
                    img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                    img2: "./admin/" + obj[i].img,
                    text1: obj[i].cname,
                    text2: obj[i].name,
                    description: obj[i].description,
                    price: fornituraPrice(obj[i].price, obj[i].formula),
                    funcName: type
                };
                let resultHtml = makeHTMLFromTemplate(html, templateData);
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        } else {
            message("Укажите количество полотен, ширину и профиль!");
        }
    },

    openModalRaspashnie: function (type) {
        let karkasName;
        let Count = parseInt($("#TOTAL_PAINTING_ID").val());
        let width = parseInt($("#WIDTH_SETS_ID").val());
        let height = parseInt($("#HIGHT_SETS_ID").val());
        let countPetli = parseInt($("#petli-raspashnie-count").val());
        let countRuchka = parseInt($("#ruchka-raspashnie-count").val());
        let countZamok = parseInt($("#zamok-raspashnie-count").val());
        if (!isNaN(Count) && !isNaN(width) && karkasName !== "") {
            if (isNaN(countPetli) || countPetli < 1 || countPetli === "") {
                message("Укажите количество петель!");
            } else {
                if (isNaN(countRuchka) || countRuchka < 1 || countRuchka === "") {
                    message("Укажите количество ручек!");
                } else {
                    if (isNaN(countZamok) || countZamok < 1 || countZamok === "") {
                        message("Укажите количество замков!");
                    } else {
                        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
                        let cat,
                            html = $('.obshee-modal').html();
                        switch (type) {
                            case "petliRaspashnie":
                                storage.fillFC(21);
                                break;
                            case "ruchkaRaspashnie":
                                storage.fillFC(22);
                                break;
                            case "zamokRaspashnie":
                                storage.fillFC(23);
                                break;
                        }
                        let obj = storage.fC;
                        for (let i = 0; i < obj.length; i++) {
                            let templateData = {
                                img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                                img2: "./admin/" + obj[i].img,
                                text1: obj[i].cname,
                                text2: obj[i].name,
                                description: obj[i].description,
                                price: fornituraPrice(obj[i].price, obj[i].formula),
                                funcName: type
                            };
                            let resultHtml = makeHTMLFromTemplate(html, templateData);
                            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
                        }
                        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
                    }
                }
            }
        } else {
            message("Укажите количество полотен, ширину и профиль!");
        }
    },

    SelectStoikiStacEnd: function (img, text, price) {

        $(".stoiki-stac img").attr('src', img);
        $(".stoiki-stac .text").text(text);
        $(".stoiki-stac .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    }
    ,

    SelectRazdvizhnyieMehanizmyiEnd: function (img, text, price) {
        $(".razdvizhnyie-mehanizmyi img").attr('src', img);
        $(".razdvizhnyie-mehanizmyi .text").text(text);
        $(".razdvizhnyie-mehanizmyi .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectmehanizmsinhronizaciiEnd: function (img, text, price) {
        $(".mehanizm-sinhronizatsii img").attr('src', img);
        $(".mehanizm-sinhronizatsii .text").text(text);
        $(".mehanizm-sinhronizatsii .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },
    SelectmehanizmtelestopEnd: function (img, text, price) {
        $(".mehanizm-teleskop img").attr('src', img);
        $(".mehanizm-teleskop .text").text(text);
        $(".mehanizm-teleskop .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectnapravEnd: function (img, text, price) {
        $(".napravlyayuschie img").attr('src', img);
        $(".napravlyayuschie .text").text(text);
        $(".napravlyayuschie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectnapravnEnd: function (img, text, price) {
        $(".napravlyayuschien img").attr('src', img);
        $(".napravlyayuschien .text").text(text);
        $(".napravlyayuschien .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectvidkreplenianapravEnd: function (img, text, price) {
        $(".vidKrepleniyaNapravlyayuschey img").attr('src', img);
        $(".vidKrepleniyaNapravlyayuschey .text").text(text);
        $(".vidKrepleniyaNapravlyayuschey .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectpovodokEnd: function (img, text, price) {
        $(".povodok img").attr('src', img);
        $(".povodok .text").text(text);
        $(".povodok .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectdovodchikEnd: function (img, text, price) {
        $(".dovodchik img").attr('src', img);
        $(".dovodchik .text").text(text);
        $(".dovodchik .price").text(price);
        $(".dekorativnayaPlankaDlyaProfilya img").attr('src', "img/furnityra/0.png");
        $(".dekorativnayaPlankaDlyaProfilya .text").text("Не выбрано");
        $(".dekorativnayaPlankaDlyaProfilya .price").text(0);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectdekplankadlyaprofilyaEnd: function (img, text, price) {
        $(".dekorativnayaPlankaDlyaProfilya img").attr('src', img);
        $(".dekorativnayaPlankaDlyaProfilya .text").text(text);
        if ($('.dekorativnayaPlankaDlyaProfilya input').prop("checked")) {
            price *= 2;
        }
        $(".dekorativnayaPlankaDlyaProfilya .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectschetochniiuplotnitelEnd: function (img, text, price) {
        $(".schetochnyiyUplotnitel img").attr('src', img);
        $(".schetochnyiyUplotnitel .text").text(text);
        $(".schetochnyiyUplotnitel .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectruchkaEnd: function (img, text, price) {
        $(".rakovina img").attr('src', img);
        $(".rakovina .text").text(text);
        $(".rakovina .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectzamokEnd: function (img, text, price) {
        $(".zamok img").attr('src', img);
        $(".zamok .text").text(text);
        $(".zamok .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectmehanizmsinhronskladnieEnd: function (img, text, price) {
        $(".setSkladnyieMehanizmyi img").attr('src', img);
        $(".setSkladnyieMehanizmyi .text").text(text);
        $(".setSkladnyieMehanizmyi .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectmehanizmrotorniiEnd: function (img, text, price) {
        $(".mehanizm-rotornii img").attr('src', img);
        $(".mehanizm-rotornii .text").text(text);
        $(".mehanizm-rotornii .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectpetliskladnieEnd: function (img, text, price) {
        $(".petli-skladnie img").attr('src', img);
        $(".petli-skladnie .text").text(text);
        $(".petli-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectnapravlyayuschieskladnieEnd: function (img, text, price) {
        $(".napravlyayuschie-skladnie img").attr('src', img);
        $(".napravlyayuschie-skladnie .text").text(text);
        $(".napravlyayuschie-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectnapravlyayuschienskladnieEnd: function (img, text, price) {
        $(".napravlyayuschien-skladnie img").attr('src', img);
        $(".napravlyayuschien-skladnie .text").text(text);
        $(".napravlyayuschien-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectvidkrepleniyanapravlyayuschihskladnieEnd: function (img, text, price) {
        $(".vidKrepleniya-skladnie img").attr('src', img);
        $(".vidKrepleniya-skladnie .text").text(text);

        $(".vidKrepleniya-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectdekplankadlyaprofilyaskladnieEnd: function (img, text, price) {
        $(".dekorativnayaPlankaDlyaProfilya-skladnie img").attr('src', img);
        $(".dekorativnayaPlankaDlyaProfilya-skladnie .text").text(text);
        if ($('.dekorativnayaPlankaDlyaProfilya-skladnie input').prop("checked")) {
            price *= 2;
        }
        $(".dekorativnayaPlankaDlyaProfilya-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectschetochniiuplotnitelskladnieEnd: function (img, text, price) {
        $(".schetochnyiyUplotnitel-skladnie img").attr('src', img);
        $(".schetochnyiyUplotnitel-skladnie .text").text(text);
        $(".schetochnyiyUplotnitel-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectruchkaskladnieEnd: function (img, text, price) {
        $(".rakovina-skladnie img").attr('src', img);
        $(".rakovina-skladnie .text").text(text);
        $(".rakovina-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectkreplenieruchliskladnieEnd: function (img, text, price) {
        $(".kreplenieRuchki-skladnie img").attr('src', img);
        $(".kreplenieRuchki-skladnie .text").text(text);
        $(".kreplenieRuchki-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectzamokskladnieEnd: function (img, text, price) {
        $(".zamokSkladnyie-skladnie img").attr('src', img);
        $(".zamokSkladnyie-skladnie .text").text(text);
        $(".zamokSkladnyie-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectnozhkimobilnieEnd: function (img, text, price) {
        $(".nozhki-mobil img").attr('src', img);
        $(".nozhki-mobil .text").text(text);
        $(".nozhki-mobil .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectkolesikimobilnieEnd: function (img, text, price) {
        $(".kolesiki-mobilnie img").attr('src', img);
        $(".kolesiki-mobilnie .text").text(text);
        $(".kolesiki-mobilnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectstoykimobilnieEnd: function (img, text, price) {
        $(".stoyki-mobil img").attr('src', img);
        $(".stoyki-mobil .text").text(text);
        $(".stoyki-mobil .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();

    },

    SelecttipSoedineniyaPolotenmobilnieEnd: function (img, text, price) {
        $(".tipSoedineniyaPoloten-mobil img").attr('src', img);
        $(".tipSoedineniyaPoloten-mobil .text").text(text);
        $(".tipSoedineniyaPoloten-mobil .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectpetliRaspashnieEnd: function (img, text, price) {
        $(".petli-raspashnie img").attr('src', img);
        $(".petli-raspashnie .text").text(text);
        $(".petli-raspashnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectruchkaRaspashnieEnd: function (img, text, price) {
        $(".ruchka-raspashnie img").attr('src', img);
        $(".ruchka-raspashnie .text").text(text);
        $(".ruchka-raspashnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
    },

    SelectzamokRaspashnieEnd: function (img, text, price) {
        $(".zamok-raspashnie img").attr('src', img);
        $(".zamok-raspashnie .text").text(text);
        $(".zamok-raspashnie .price").text(price);

        nfurnitura.viewTotalFurnitura();
    },
    SelectFunEnd: function (img, text, price) {
        let item = storage.ItemFurn.filter(function (index, value) {
            return index.other.Название == text;
        });
        let type = storage.Furn.filter(function (value) {
            return value.id == item[0].parent_id;
        });
        let s = $('.newfurn').find('h3');
        s.each(function () {
            if ($(this).text() == type[0].name) {

                let is = $(this).parent();
                is.find('img').attr('src', img);
                is.find('.text').text(text);
                is.find('.price').text(fornituraPrice(price, type[0].formula));
            }
        });
        if (_FLAG) {
            let s = frames[1].$('.newfurn').find('h3');
            s.each(function () {
                if ($(this).text() == type[0].name) {

                    let is = $(this).parent();
                    is.find('img').attr('src', img);
                    is.find('.text').text(text);
                    is.find('.price').text(fornituraPrice(price, type[0].formula));
                }
            });
            let s = frames[2].$('.newfurn').find('h3');
            s.each(function () {
                if ($(this).text() == type[0].name) {

                    let is = $(this).parent();
                    is.find('img').attr('src', img);
                    is.find('.text').text(text);
                    is.find('.price').text(fornituraPrice(price, type[0].formula));
                }
            });
        }
    },

    aksessuaryiBlockSwith: function () {
        if ($(".aksessuaryi-block-swith input").prop("checked")) {
            $(".aksessuaryi-block-hs").show();
        } else {
            $(".aksessuaryi-block-hs").hide();
        }
        nfurnitura.viewTotalFurnitura();
    },
    loadFurnitura: function () {
        $('#furnitura-tab').html("");
        let type = $('#TYPE_BAFFLE_ID').val();
        if (type === '0') {
            $('#furnitura-tab').html($('.furnitura-stac').html());
        } else if (type == 1) {
            $('#furnitura-tab').html($('.furnitura-razdvizhnyie').html());
        } else if (type == 2) {
            $('#furnitura-tab').html($('.skladnaya-peregorodka').html());
        } else if (type == 3) {
            $('#furnitura-tab').html($('.raspashnie-dveri').html());
        } else if (type == 4) {
            $('#furnitura-tab').html($('.mobilnyie-peregorodki').html());
        }
        nfurnitura.filtertype();
        nfurnitura.setStartValues();
        $('.furnituraElFlag').val(0).change();
    },

    getDataFurnitura: function () {
    },

    viewTotalFurnitura: function () {
        let p = 0;
        $('#furnitura-tab .furnituraElFlag').each(function () {
            if ($(this).val() === '1') {
                p += ParserIntAndNan($(this).parent().find('.price').text());
            }
        });
        $('.newfurn').each(function () {
            p += ParserIntAndNan($(this).find('.price').text());
        });
        info.furnituraResPrice = p;
        $(".furnitura-price .price").text(Math.round(p));
        info.footerRes()
    },

    furnituraElToggle: function (id, vl) {
        if (vl === '0') {
            $(`#${id} :not(.furnituraElFlag) *`).attr('disabled', 'disabled');
            $(`#${id} .addonImg`).css('pointer-events', 'none');
            $(`#${id} *`).css('opacity', '0.25');
            $(`#${id} .furnituraElFlag`).css('opacity', '1');
        } else {
            $(`#${id} *`).removeAttr('disabled');
            $(`#${id} .addonImg`).css('pointer-events', '');
            $(`#${id} *`).css('opacity', '1');

        }
        nfurnitura.viewTotalFurnitura();
    },
    pushFurnitura: function (link, text, id, flag, flag1) {
        let html;
        if (flag1 == -1) {
            html = '<div class="col-xs-15 col-sm-15 col-md-15 col-lg-15 text-center newfurn"><select class="form-control input-sm furnituraElFlag"><option value="1">Есть</option> <option value="0" selected>Нет</option></select> <h3>' + text + '</h3><img src="img/material/undefined.png" class="addonImg imgfurn" onclick="nfurnitura.modalfurn(' + id + ')"><h4 class="text">Не выбрано</h4><h4>Цена:<span class="price red">0</span></h4></div>';
        } else {
            html = '<div class="col-xs-15 col-sm-15 col-md-15 col-lg-15 text-center newfurn"><select class="form-control input-sm furnituraElFlag"><option value="1">Есть</option> <option value="0" selected>Нет</option></select> <h3>' + text + '</h3><img src="img/material/undefined.png" class="addonImg imgfurn" onclick="nfurnitura.modalfurn(' + id + ')"><h4 class="text">Не выбрано</h4><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><center><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">' + '<h5 style="text-align: right;">Кол-во</h5></div> <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> <input id="count" maxlength="2" type="text" value="1"class="form-control furnitura-count"> </div> </center> </div><h4>Цена:<span class="price red">0</span></h4></div>';
        }
        if (flag) {
            $('.' + link + ' #flagfurn').css('display', 'block');
            $('.' + link + ' .aksessuaryi-block-hs').prepend(html);
        } else {
            $(`.${link}`).prepend(html);
        }
    },
    filtertype: function () {
        $('.newfurn').remove();
        let type = parseInt($('#TYPE_BAFFLE_ID').val());
        let obj = storage.Furn;
        switch (type) {
            case 0: {
                obj.forEach(function (value) {
                    value['type'].forEach(function (v) {

                        if ('Стационарная' == v) {
                            nfurnitura.pushFurnitura('furnitura-stac', value.name, value.id, value.accessory == 1, value.option.indexOf("Количество"));
                            nfurnitura.setitem(value.id);
                        }

                    });
                });
                break;
            }
            case 1: {
                obj.forEach(function (value) {
                    value['type'].forEach(function (v) {
                        if ('Раздвижная перегородка' == v) {
                            nfurnitura.pushFurnitura('furnitura-razdvizhnyie', value.name, value.id, value.accessory == 1, value.option.indexOf("Количество"));
                            nfurnitura.setitem(value.id);
                        }
                    });
                });
                break;
            }
            case 2: {
                obj.forEach(function (value) {
                    value['type'].forEach(function (v) {
                        if ('Складная перегородка' == v) {
                            nfurnitura.pushFurnitura('skladnaya-peregorodka', value.name, value.id, value.accessory == 1, value.option.indexOf("Количество"));
                            nfurnitura.setitem(value.id);
                        }
                    });
                });
                break;
            }
            case 3: {
                obj.forEach(function (value) {
                    value['type'].forEach(function (v) {
                        if ('Распашная дверь' == v) {
                            nfurnitura.pushFurnitura('raspashnie-dveri', value.name, value.id, value.accessory == 1, value.option.indexOf("Количество"));
                            nfurnitura.setitem(value.id);
                        }
                    });
                });
                break;
            }
            case 4: {
                obj.forEach(function (value) {
                    value['type'].forEach(function (v) {
                        if ('Мобильная перегородка' == v) {
                            nfurnitura.pushFurnitura('mobilnyie-peregorodki', value.name, value.id, value.accessory == 1, value.option.indexOf("Количество"));
                            nfurnitura.setitem(value.id);
                        }
                    });
                });
                break;
            }
        }
    },
    modalfurn: function (id) {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        let html = $('.obshee-modal').html();
        let type = storage.Furn.filter(function (value) {
            return value.id == id;
        });
        let obj = storage.ItemFurn.filter(function (value) {
            return value.parent_id == id;
        });
        obj.forEach(function (v) {
            let markerfilt = true;
            if ('Ограничение_по_высоте_полотна_(min/max_:_100/140)_мм_' in v.other) {
                let s = v.other['Ограничение_по_высоте_полотна_(min/max_:_100/140)_мм_'].split('/');
                markerfilt = ParserIntAndNan(s[0]) <= ParserIntAndNan($('#HIGHT_SETS_ID').val()) && ParserIntAndNan(s[1]) >= ParserIntAndNan($('#HIGHT_SETS_ID').val());
            }
            if (markerfilt) {
                if ('Ограничение_по_ширине_полотна_(min/max_:_100/140)_мм_' in v.other) {
                    let s = v.other['Ограничение_по_ширине_полотна_(min/max_:_100/140)_мм_'].split('/');
                    markerfilt = ParserIntAndNan(s[0]) <= ParserIntAndNan($('#WIDTH_SETS_ID').val()) && ParserIntAndNan(s[1]) >= ParserIntAndNan($('#WIDTH_SETS_ID').val());
                }
            }
            if (markerfilt) {
                let templateData = {
                    img: v['other']['Картинка']
                        ? "style='height:100px;' src='./admin/" + v['other']['Картинка'] + "'"
                        : "src='img/material/undefined.png'",
                    img2: v['other']['Картинка']
                        ? "./admin/" + v['other']['Картинка']
                        : "img/material/undefined.png",
                    text1: type[0].name,
                    text2: v['other']['Название']
                        ? v['other']['Название']
                        : 'Отсутствует',
                    description: v['other']['Описание']
                        ? v['other']['Описание']
                        : 'Отсутствует ',
                    price: v['other']['Цена']
                        ? v['other']['Цена']
                        : 0,
                    funcName: 'Fun'
                };
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(makeHTMLFromTemplate(html, templateData));
            }
        });
        if (!$('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html()) {
            message("Элементы отсутствуют или не подходят по параметрам высоты или ширены");
        } else {
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        }
    },
    setitem: function (id) {
        let type = storage.Furn.filter(function (value) {
            return value.id == id;
        });
        let item = storage.ItemFurn.filter(function (value) {
            return value.parent_id == id;
        });
        for (let i = 0; i < item.length; i++) {
            let markerfilt = true;
            if ('Ограничение_по_высоте_полотна_(min/max_:_100/140)_мм_' in item[i]['other']) {
                let s = item[i]['other']['Ограничение_по_высоте_полотна_(min/max_:_100/140)_мм_'].split('/');
                markerfilt = ParserIntAndNan(s[0]) <= ParserIntAndNan($('#HIGHT_SETS_ID').val()) && ParserIntAndNan(s[1]) >= ParserIntAndNan($('#HIGHT_SETS_ID').val());
            }
            if (markerfilt) {
                if ('Ограничение_по_ширине_полотна_(min/max_:_100/140)_мм_' in item[i]['other']) {
                    let s = item[i]['other']['Ограничение_по_ширине_полотна_(min/max_:_100/140)_мм_'].split('/');

                    markerfilt = ParserIntAndNan(s[0]) <= ParserIntAndNan($('#WIDTH_SETS_ID').val()) && ParserIntAndNan(s[1]) >= ParserIntAndNan($('#WIDTH_SETS_ID').val());

                }
            }
            if (markerfilt && item[i]) {
                let s = $('.newfurn').find('h3');
                s.each(function () {
                    if ($(this).text() == type[0].name) {
                        let is = $(this).parent();
                        is.find('img').attr('src', item[i]['other']['Картинка']
                            ? './admin/' + item[i]['other']['Картинка']
                            : 'img/material/undefined.png');
                        is.find('.text').text(item[i]['other']['Название']
                            ? item[i]['other']['Название']
                            : 'Отсутствует');
                        is.find('.price').text(fornituraPrice(item[i]['other']['Цена']
                            ? item[i]['other']['Цена']
                            : 0, type[0].formula));
                        is.find('.furnituraElFlag').prop('disabled', false);
                    }
                });
            } else {
                let s = $('.newfurn').find('h3');
                s.each(function () {
                    if ($(this).text() == type[0].name) {
                        $(this).parent().find('.furnituraElFlag').prop('disabled', true);
                    }
                });
            }
        }
    },
    fullprice: function () {
        let s = $('.newfurn');
        let sum = 0;
        s.each(function (value) {
            let p = $(this).find('.price');
            let fi = $(this).find('.furnituraElFlag').val();
            if (fi == 0) {
                $(this).css('opacity', '0.25');
                p.text(0);
            } else if (fi == 1) {
                let count = $(this).find('input');
                let c = count
                    ? ParserIntAndNan(count.val())
                    : 1;

                $(this).css('opacity', '1');
                let v = $(this).find('.text').text();

                let typestr = $(this).find('h3').text();
                let type = storage.Furn.filter(function (value) {
                    return value.name == typestr;
                });
                storage.ItemFurn.forEach(function (item) {
                    if (v == item.other.Название) {
                        p.text(fornituraPrice(item.other.Цена
                            ? item.other.Цена * (c == 0
                                ? 1
                                : c)
                            : 0, type[0].formula));
                        sum += fornituraPrice(item.other.Цена
                            ? item.other.Цена * (c == 0
                                ? 1
                                : c)
                            : 0, type[0].formula);
                    }
                });
            }
        });
        nfurnitura.viewTotalFurnitura();
    }
};
$('.furnituraElFlag').change(function () {
    nfurnitura.fullprice();
});
$(document).on({
    keyup: function () {
        nfurnitura.fullprice();
    }
}, '.newfurn input');
$('body').on('change', '.dekorativnayaPlankaDlyaProfilya input', function () {
    let $p = $('.dekorativnayaPlankaDlyaProfilya .price');
    if ($(this).prop("checked")) {
        let s = ParserIntAndNan($p.html());
        $p.html(s * 2);
    } else {
        let s = ParserIntAndNan($p.html());
        $p.html(s / 2);
    }
    nfurnitura.viewTotalFurnitura();
});
$('body').on('change', '.dekorativnayaPlankaDlyaProfilya-skladnie input', function () {
    let $p = $('.dekorativnayaPlankaDlyaProfilya-skladnie .price');
    if ($(this).prop("checked")) {
        let s = ParserIntAndNan($p.html());
        $p.html(s * 2);
    } else {
        let s = ParserIntAndNan($p.html());
        $p.html(s / 2);
    }
    nfurnitura.viewTotalFurnitura();
});
let slader = {
    init(){
        let c = storage.pSort.length;
        console.log('INIT');
        let setings = {
                orientation: "vertical",
                range: "min",
                min: 0,
                max: c - 1,
                value: c / 2,
                step: 1,
                slide: function (event, ui) {
                    let p = _c => Math.round(ui.value / (c / _c));

                    if (storage.pSort[ui.value])
                        profiles.setProfile(storage.pSort[ui.value])

                    let _m = [];

                    $('.napolnenie-el img').each(function () {
                        let _s = $(this).attr('src').substr(8);
                        _m.push(ParserIntAndNan(storage.m.find(_i => _i.img === _s).type));
                    });

                    _m.forEach((_t, i) => {
                        if (nmaterials.sortArray[_t - 1]) {
                            let _i = nmaterials.sortArray[_t - 1];
                            if (_i[p(_i.length)])
                                nmaterials.addMaterials(_i[p(_i.length)], i);
                        }
                    });
                    $('#furnitura-tab .col-md-15').each(function () {
                        if ($(this).find('select').val() === '1') {
                            let i = $(this).find('h3').text();
                            let is = storage.f.filter(_i => _i.cname === i).sort((a, b) => a.price - b.price);
                            if (is[p(is.length)]) {
                                i = is[p(is.length)];
                                $(this).find('img').attr('src', 'admin/'+i.img);
                                $(this).find('.price').text(fornituraPrice(i.price,i.formula));
                                $(this).find('h4:eq(0)').text(i.name);
                            }
                        }
                    });
                    if (ui.value === 0)
                        $('#addon-v-niz select').prop('value', 'Нет').trigger('change')
                }
            }
        ;
        $('#slider1').slider(setings);
        $('#slider2').slider(setings);
        $('#slider3').slider(setings);
    },
    swap()
    {
        $('.slider-container').removeClass('slider-container-active');
        save.init();
        $(this).addClass('slider-container-active');
        save.set();
        save.state = $(this).data('slider-id');
        save.get();
    }
};
$('.slider-container').on('click', slader.swap);
$('#SUPPLEMENTS').on('keyup change', addition.priceAddition);
$('#HIGHT_SETS_ID').on('keyup change', function () {
    info.height = ParserIntAndNan($(this).val());
    info.init();
});
$('#WIDTH_SETS_ID').on('keyup change', function () {
    info.width = ParserIntAndNan($(this).val());
    info.init();
});
$('#TOTAL_PAINTING_ID').on('keyup change', function () {
    info.count = ParserIntAndNan($(this).val());
    info.init();
});
$('#MOVABLE_PAINTING_ID').on('keyup change', function () {
    info.countMove = ParserIntAndNan($(this).val());
    info.init();
});
$('#TYPE_BAFFLE_ID').on('change', function () {
    info.type = ParserIntAndNan($(this).val());
    addition.changeAddition();
});
$('#tab-profil-peremyichki-horizontal-shtuk').on('change keyup', function () {
    info.countProfileWidth = ParserIntAndNan($(this).val());
    info.priceTop();
    addition.priceAddition();
});
$('#tab-profil-v-peremyichki-shtuk').on('change keyup', function () {
    info.countProfileHeight = ParserIntAndNan($(this).val());
    info.priceTop();
    addition.priceAddition();
});
$('#setting-v-niz input').on('change keyup', info.footerResFull);
$('#NUMBER_SETS_ID').on('change keyup', function () {
    info.kits = ParserIntAndNan($(this).val());
    info.footerRes();
});
$('#BTN-KARKAS-SELECTOR').on('click', profiles.modalProfile);
$('#BTN-HORIZONTAL-PEREMOCHKI-SELECTOR').on('click', profiles.modalProfileWidth);
$('#BTN-VERTIKALNUE-PEREMOCHKI-SELECTOR').on('click', profiles.modalProfileHeight);
$('#btn-dekor-profil').click(decor.showDekorProfil);
$('#img-dekor-profil').click(decor.showDekorProfil);
$("#DIAGRAMMA-DIALOG-WINDOW-BTN").click(function () {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    let TYPE_BAFFLE = info.type;
    if (TYPE_BAFFLE === 0) {
        message("Для стационарной перегородки схем не существует!");
    } else {
        if (TYPE_BAFFLE === 1 || TYPE_BAFFLE === 2 || TYPE_BAFFLE === 4) {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html($("#DesignScheme" + TYPE_BAFFLE).html());
        }
    }
});
$("#myTab a").click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});
$('body').on('click', '#myTab', function () {
    nmaterials.ResSumm();
});
$('body').on('keyup', '.napolnenie-el input.form-control.tab-napolnenie-vyisota', function () {
    $(this).parent().parent().parent().find('#savehight').prop("checked", true);
    nmaterials.addWHElNapolnenie();
});
$('body').on('change', '.napolnenie-el #savehight', function () {
    nmaterials.addWHElNapolnenie();
});
$('.add-material-block-past').on('keyup change click mouseover', '.napolnenie-el', function () {
    nmaterials.ResSumm();
});
$('#furnitura-tab').on('keyup change', 'input:text:gt(0)', function () {
    let $sum = $(this).parent().parent().parent().parent().find('.price');
    if ($(this).val() !== '' && $(this).val() !== '0') {
        if ($(this).data('count')) {
            let res = (ParserIntAndNan($sum.text()) / ParserIntAndNan($(this).data('count')) ) * ParserIntAndNan($(this).val());
            $sum.text(res);
        } else {
            $sum.text(ParserIntAndNan($sum.text()) * ParserIntAndNan($(this).val()));
        }
        $(this).data('count', $(this).val());
    }
});
function delTiteltext() {
    document.getElementById('text_ifr').removeAttribute('title');
    $('body').off('mouseover', '.managerBtn', delTiteltext);
}
$('body').on('mouseover', '.managerBtn', delTiteltext);
$(document).on("scroll", function () {
    $('#hederBlock').css('top', window.pageYOffset);
});
$('body').on('input', '.facture', function () {
    let v = $(this).val();
    let arr = storage.f.filter((i) => i.manufacturer === v);
    $('#furnitura-tab select').val(0);
    $('#furnitura-tab select').trigger('change');
    if (arr.length > 0) {
        arr.forEach((i) => {
            if (i.cat == 1)
                nfurnitura.SelectRazdvizhnyieMehanizmyiEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 2)
                nfurnitura.SelectmehanizmsinhronizaciiEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 3)
                nfurnitura.SelectnapravEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 4)
                nfurnitura.SelectvidkreplenianapravEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 5)
                nfurnitura.SelectpovodokEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 6)
                nfurnitura.SelectdovodchikEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 7)
                nfurnitura.SelectdekplankadlyaprofilyaEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 8)
                nfurnitura.SelectschetochniiuplotnitelEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 9)
                nfurnitura.SelectruchkaEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 10)
                nfurnitura.SelectzamokEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 11)
                nfurnitura.SelectmehanizmsinhronskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 12)
                nfurnitura.SelectmehanizmrotorniiEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 13)
                nfurnitura.SelectpetliskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 14)
                nfurnitura.SelectnapravlyayuschieskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 15)
                nfurnitura.SelectvidkrepleniyanapravlyayuschihskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 16)
                nfurnitura.SelectdekplankadlyaprofilyaskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 17)
                nfurnitura.SelectschetochniiuplotnitelskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 18)
                nfurnitura.SelectruchkaskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 19)
                nfurnitura.SelectkreplenieruchliskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 20)
                nfurnitura.SelectzamokskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 21)
                nfurnitura.SelectpetliRaspashnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 22)
                nfurnitura.SelectruchkaRaspashnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 23)
                nfurnitura.SelectzamokRaspashnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 24)
                nfurnitura.SelectnozhkimobilnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 25)
                nfurnitura.SelectkolesikimobilnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 26)
                nfurnitura.SelectstoykimobilnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 27)
                nfurnitura.SelecttipSoedineniyaPolotenmobilnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 28)
                nfurnitura.SelectStoikiStacEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 29)
                nfurnitura.SelectnapravnEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 30)
                nfurnitura.SelectnapravlyayuschienskladnieEnd("./admin/" + i.img, i.name, i.price);
            if (i.cat == 31)
                nfurnitura.SelectmehanizmtelestopEnd("./admin/" + i.img, i.name, i.price);
        });
        $('#furnitura-tab h4.text').each(function () {
            let $item = $(this);
            let str = $item.text();
            let i = arr.find((s) => s.name === str);
            if (i) {
                let $i = $item.parent().find('select');
                $i.val(1);
                $i.trigger('change');
            }
        });
    }
});

$('body').on('keyup', '.facture', function () {
    if (event.type === 'keyup') {
        if (event.keyCode === 13) {
            let _a = [];
            $('#furnitura-tab h4.text').each(function () {
                if ($(this).parent().find('select').val() === '1') {
                    _a.push($(this).text());
                }
            });
            let data = {
                n: $(this).val(),
                a: _a
            };
            $.post('./admin/ajax.php?fillmanufacturer=1', data, function (data) {
                storage.fillF();
                storage.fillmanufacturer();
            });
            message('Производитель добавлен');
        }
    }
});

function SetKakas(id) {
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    let width = info.paintWidth;
    let height = info.height;
    let html = ' <div class="tabbable tabs-left">' +
        '<ul class="nav nav-tabs">';
    let htmlTAB = '';
    $.post('./admin/ajax.php', "data=1", function (data) {
        data = JSON.parse(data);
        for (let i = 0; i < data.length; i++) {
            let isFrends = '';
            if (data[i].id == id)
                isFrends = 'active';
            htmlTAB += '<li class="' + isFrends + '"><a data-toggle="tab" style="font-size: 20px;" onclick="SetKakas(' + data[i].id + ')" >' + data[i].name + '</a><div class="triangle"></div><div class="triangle-w"></div></li>';
        }
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(html + htmlTAB + '</ul>');
        data = 'h=' + height + "&id=" + id;
        $.post("./admin/ajax.php", data, function (data) {
            let obj = JSON.parse(data);
            for (let i = 0; i < obj.length; i++) {
                let p = Math.round((info.paintHeight - (obj[i].model * 2) + info.paintHeight) * 0.002 * obj[i].price);
                p = Math.round(p);
                let resultHtml = '<div id="ProfilTabDB" class="col-md-3 profil-select" style="display: inline-block;vertical-align: top;border: solid 1px black;height: 435px;" ng-controller="ngAppDemoController">' +
                    '<center> ' +
                    '<br> ' +
                    '<img src="./admin/' + obj[i].img + '" id="img-modal-Statusx1" class="selectKarkasImg"> ' +
                    '<h4>' + obj[i].name + '</h4>' +
                    '<div style="height: 140px;width: 180px;">' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Высота:</p>' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">до ' + obj[i].height + '  м</p>' +
                    '</div>' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Паз:</p>' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].paz + '  мм</p>' +
                    '</div>' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Cтекло:</p>' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].steklo + '  мм</p>' +
                    '</div>' +
                    '<div style="height: 30px;">' +
                    '<p style="display: inline-block;float: left;font-weight: 300;">Глухие панели:</p> ' +
                    '<p style="display: inline-block;float: right;font-weight: 300;">' + obj[i].penal + '  мм</p>' +
                    '</div>' +
                    '</div>' +
                    '<h4 style="color: red;" >Цена:' + p + ' </h4>' +
                    '<button type="button" class="btn btn-raised btn-default" onclick="profiles.setProfile(' + obj[i].id + ');" data-dismiss="modal">Выбрать </button> ' +
                    '</center></div>';
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }

        });
    });
    $("img.selectKarkasImg").show();
}
$('.add-material-block-past').on('mouseover', '.napolnenie-el', function () {
    $('.add-material-block-past .photo1 button').each(function (i) {
        $(this).attr('onclick', 'bPhoto(' + i + ')');
    });
});
$(document).ready(function () {
    storage.init();
    nmaterials.start();
    nfurnitura.start();
    window.id_pdf = new Date().getTime();
});
