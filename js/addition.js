/**
 * Created by Андрей on 01.02.2017.
 */
/**
 * Дополнения
 * @type {{}}
 */
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
        addition.UpdateAddition();
    },
    SeeSupplements: function (id) {
        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
        let html = $('.zaglushka-torcevaya-block-modal').html();
        let obj = storage.S;
        let profils = storage.PAS;
        let idK = getFromData('karkas-id');
        for (let j = 0; j < profils.length; j++) {
            if (profils[j].Profil == idK) {
                if (obj.length == 0) {
                    parent.message('Извините , но для данного профиля заглушки торцевые отсутствуют');
                } else {
                    for (var i = 0; i < obj.length; i++) {
                        if (obj[i].id == profils[j].Supplements && obj[i].patern_id == id) {
                            var templateData = {
                                id: id,
                                img: 'src="./admin/' + obj[i].img + '"',
                                img2: "./admin/" + obj[i].img,
                                text1: obj[i].name,
                                price1: obj[i].price,
                            };
                            var resultHtml = makeHTMLFromTemplate(html, templateData);
                            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
                        }
                    }
                }
            }
        }
        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
    },
    SetSupplements: function () {
        let id = states.eco.profile.id;
        if (id) {
            let obj = storage.S;
            let obj1 = storage.PAS.filter((value) => value.Profil == id);
            $('.addon-block select').prop('value', 'Нет');

            for (let j = 0; j < obj1.length; j++) {
                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].id === obj1[j].Supplements) {
                        let item = storage.TS.find((v) => v.id === obj[i].patern_id);
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
                        break;
                    }
                }
            }
        }
    },
    UpdateAddition: function () {
        States.AdditionName($('.addition'));
    }
};
function changeAddition() {
    let type = parseInt($('#TYPE_BAFFLE_ID').val());
    let obj = storage.TS;
    $('#SUPPLEMENTS').html('');
    switch (type) {
        case 0: {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].type == 'Стационарная') {
                    addition.SetTypeSupplements(obj[i].id, obj[i].typeprice, obj[i].name);
                }
            }
            break;
        }
        case 1: {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].type == 'Раздвижная перегородка') {
                    addition.SetTypeSupplements(obj[i].id, obj[i].typeprice, obj[i].name);
                }
            }
            break;
        }
        case 2: {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].type == 'Складная перегородка') {
                    addition.SetTypeSupplements(obj[i].id, obj[i].typeprice, obj[i].name);
                }
            }
            break;
        }
        case 3: {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].type == 'Распашная дверь') {
                    addition.SetTypeSupplements(obj[i].id, obj[i].typeprice, obj[i].name);
                }
            }
            break;
        }
        case 4: {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].type === 'Мобильная перегородка') {
                    addition.SetTypeSupplements(obj[i].id, obj[i].typeprice, obj[i].name);
                }
            }
            break;
        }
    }
    addition.SetSupplements();
    nfurnitura.filtertype();
}
$('#TYPE_BAFFLE_ID').on('change', changeAddition);
