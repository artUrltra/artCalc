$('.sendGet').click(SaveToPDF);

function SaveToPDF() {
    save.init();
    save.set();

    function checkFN(arg, s) {
        return $("#" + arg + " h4.text").html();
    }

    function checkF(arg, s) {
        return $("#" + arg + " .furnituraElFlag").val() === 1 ? $("#" + arg + " h4.text").html() : "";
    }

    let furnituraSelect = info.type;
    let Allheight = info.height;
    let Allwidth = info.width;
    let count = info.count;
    let count1 = info.countMove;
    let countW = info.countProfileWidth;
    let countH = info.countProfileHeight;

    ////////////////////////////////////////////////////////////
    // выборка материалов
    ////////////////////////////////////////////////////////////
    let selectedMaterials1 = [], selectedMaterials2 = [], selectedMaterials3 = [], tmpA1 = [], tmpA2 = [], tmpA3 = [];
    save.optimal.m.forEach(v => {
        tmpA1 = [];
        let str = v.img.substr(8);
        let obj = storage.m.find(v => v.img === str);
        tmpA1.push(obj.name);
        tmpA1.push(v.price);
        tmpA1.push(v.ploschad);
        tmpA1.push(v.vyisota);
        tmpA1.push(v.shirina);
        tmpA1.push(v.tolschina);
        tmpA1.push(v.kollichestvo);
        tmpA1.push(v.zk);
        selectedMaterials1.push(tmpA1);
    });
    save.econom.m.forEach(v => {
        tmpA2 = [];
        let str = v.img.substr(8);
        let obj = storage.m.find(v => v.img === str);
        tmpA1.push(obj.name);
        tmpA1.push(v.price);
        tmpA1.push(v.ploschad);
        tmpA1.push(v.vyisota);
        tmpA1.push(v.shirina);
        tmpA1.push(v.tolschina);
        tmpA1.push(v.kollichestvo);
        tmpA1.push(v.zk);
        selectedMaterials2.push(tmpA1);
    });
    save.premium.m.forEach(v => {
        tmpA3 = [];
        let str = v.img.substr(8);
        let obj = storage.m.find(v => v.img === str);
        tmpA1.push(obj.name);
        tmpA1.push(v.price);
        tmpA1.push(v.ploschad);
        tmpA1.push(v.vyisota);
        tmpA1.push(v.shirina);
        tmpA1.push(v.tolschina);
        tmpA1.push(v.kollichestvo);
        tmpA1.push(v.zk);
        selectedMaterials3.push(tmpA1);
    });


    let fotoNames = [];
    fotoNames.push(window.imagesPDF[0]);
    fotoNames.push(window.imagesPDF[1]);


////////////////////////////////////////////////////////////
// выборка фурнитуры 1
////////////////////////////////////////////////////////////
    let selectedFurnitura = [];
    let sf0 = [];
    let sf1 = [];
    let sf2 = [];
    let sf3 = [];
    if (furnituraSelect === 1) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf0[1] = save.optimal.f[1] ? save.optimal.f[1].name : '';
        sf0[2] = save.optimal.f[2] ? save.optimal.f[2].name : '';
        sf0[3] = save.optimal.f[3] ? save.optimal.f[3].name : '';
        sf0[4] = save.optimal.f[4] ? save.optimal.f[4].name : '';
        sf0[5] = save.optimal.f[5] ? save.optimal.f[5].name : '';
        sf1[0] = save.optimal.f[0] ? save.optimal.f[0].price : 0;
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        sf1[2] = save.optimal.f[2] ? save.optimal.f[2].price : 0;
        sf1[3] = save.optimal.f[3] ? save.optimal.f[3].price : 0;
        sf1[4] = save.optimal.f[4] ? save.optimal.f[4].price : 0;
        sf1[5] = save.optimal.f[5] ? save.optimal.f[5].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf2[0] = save.optimal.f[6] ? save.optimal.f[6].name : '';
            sf2[1] = save.optimal.f[7] ? save.optimal.f[7].name : '';
            sf2[2] = save.optimal.f[8] ? save.optimal.f[8].name : '';
            sf2[3] = save.optimal.f[9] ? save.optimal.f[9].name : '';
            sf2[4] = save.optimal.f[10] ? save.optimal.f[10].name : '';
            sf3[0] = save.optimal.f[6] ? save.optimal.f[6].price : 0;
            sf3[1] = save.optimal.f[7] ? save.optimal.f[7].price : 0;
            sf3[2] = save.optimal.f[8] ? save.optimal.f[8].price : 0;
            sf3[3] = save.optimal.f[9] ? save.optimal.f[9].price : 0;
            sf3[4] = save.optimal.f[10] ? save.optimal.f[10].price : 0;
            selectedFurnitura.push(sf2);
            selectedFurnitura.push(sf3);
        }
    } else if (furnituraSelect == 2) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf0[1] = save.optimal.f[1] ? save.optimal.f[1].name : '';
        sf0[2] = save.optimal.f[2] ? save.optimal.f[2].name : '';
        sf0[3] = save.optimal.f[3] ? save.optimal.f[3].name : '';
        sf0[4] = save.optimal.f[4] ? save.optimal.f[4].name : '';
        sf0[5] = save.optimal.f[5] ? save.optimal.f[5].name : '';
        sf1[0] = save.optimal.f[0] ? save.optimal.f[0].price : 0;
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        sf1[2] = save.optimal.f[2] ? save.optimal.f[2].price : 0;
        sf1[3] = save.optimal.f[3] ? save.optimal.f[3].price : 0;
        sf1[4] = save.optimal.f[4] ? save.optimal.f[4].price : 0;
        sf1[5] = save.optimal.f[5] ? save.optimal.f[5].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf2[0] = save.optimal.f[6] ? save.optimal.f[6].name : '';
            sf2[1] = save.optimal.f[7] ? save.optimal.f[7].name : '';
            sf2[2] = save.optimal.f[8] ? save.optimal.f[8].name : '';
            sf3[0] = save.optimal.f[6] ? save.optimal.f[6].price : 0;
            sf3[1] = save.optimal.f[7] ? save.optimal.f[7].price : 0;
            sf3[2] = save.optimal.f[8] ? save.optimal.f[8].price : 0;
            selectedFurnitura.push(sf2);
            selectedFurnitura.push(sf3);
        }
    } else if (furnituraSelect == 3) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf0[1] = save.optimal.f[1] ? save.optimal.f[1].name : '';
        sf0[2] = save.optimal.f[2] ? save.optimal.f[2].name : '';
        sf1[0] = save.optimal.f[0] ? save.optimal.f[0].price : 0;
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        sf1[2] = save.optimal.f[2] ? save.optimal.f[2].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    } else if (furnituraSelect == 4) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf0[1] = save.optimal.f[1] ? save.optimal.f[1].name : '';
        sf0[2] = save.optimal.f[2] ? save.optimal.f[2].name : '';
        sf0[3] = save.optimal.f[3] ? save.optimal.f[3].name : '';
        sf1[0] = save.optimal.f[0] ? save.optimal.f[0].price : 0;
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        sf1[2] = save.optimal.f[2] ? save.optimal.f[2].price : 0;
        sf1[3] = save.optimal.f[3] ? save.optimal.f[3].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    } else if (furnituraSelect === 0) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    }
////////////////////////////////////////////////////////////
// выборка фурнитуры 2
////////////////////////////////////////////////////////////
    let selectedFurnitura2 = [];
    let sf20 = [];
    let sf21 = [];
    let sf22 = [];
    let sf23 = [];
    if (furnituraSelect === 1) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf20[1] = save.econom.f[1] ? save.econom.f[1].name : '';
        sf20[2] = save.econom.f[2] ? save.econom.f[2].name : '';
        sf20[3] = save.econom.f[3] ? save.econom.f[3].name : '';
        sf20[4] = save.econom.f[4] ? save.econom.f[4].name : '';
        sf20[5] = save.econom.f[5] ? save.econom.f[5].name : '';
        sf21[0] = save.econom.f[0] ? save.econom.f[0].price : 0;
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        sf21[2] = save.econom.f[2] ? save.econom.f[2].price : 0;
        sf21[3] = save.econom.f[3] ? save.econom.f[3].price : 0;
        sf21[4] = save.econom.f[4] ? save.econom.f[4].price : 0;
        sf21[5] = save.econom.f[5] ? save.econom.f[5].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf22[0] = save.econom.f[6] ? save.econom.f[6].name : '';
            sf22[1] = save.econom.f[7] ? save.econom.f[7].name : '';
            sf22[2] = save.econom.f[8] ? save.econom.f[8].name : '';
            sf22[3] = save.econom.f[9] ? save.econom.f[9].name : '';
            sf22[4] = save.econom.f[10] ? save.econom.f[10].name : '';
            sf23[0] = save.econom.f[6] ? save.econom.f[6].price : 0;
            sf23[1] = save.econom.f[7] ? save.econom.f[7].price : 0;
            sf23[2] = save.econom.f[8] ? save.econom.f[8].price : 0;
            sf23[3] = save.econom.f[9] ? save.econom.f[9].price : 0;
            sf23[4] = save.econom.f[10] ? save.econom.f[10].price : 0;
            selectedFurnitura2.push(sf22);
            selectedFurnitura2.push(sf23);
        }
    } else if (furnituraSelect == 2) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf20[1] = save.econom.f[1] ? save.econom.f[1].name : '';
        sf20[2] = save.econom.f[2] ? save.econom.f[2].name : '';
        sf20[3] = save.econom.f[3] ? save.econom.f[3].name : '';
        sf20[4] = save.econom.f[4] ? save.econom.f[4].name : '';
        sf20[5] = save.econom.f[5] ? save.econom.f[5].name : '';
        sf21[0] = save.econom.f[0] ? save.econom.f[0].price : 0;
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        sf21[2] = save.econom.f[2] ? save.econom.f[2].price : 0;
        sf21[3] = save.econom.f[3] ? save.econom.f[3].price : 0;
        sf21[4] = save.econom.f[4] ? save.econom.f[4].price : 0;
        sf21[5] = save.econom.f[5] ? save.econom.f[5].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf22[0] = save.econom.f[6] ? save.econom.f[6].name : '';
            sf22[1] = save.econom.f[7] ? save.econom.f[7].name : '';
            sf22[2] = save.econom.f[8] ? save.econom.f[8].name : '';
            sf23[0] = save.econom.f[6] ? save.econom.f[6].price : 0;
            sf23[1] = save.econom.f[7] ? save.econom.f[7].price : 0;
            sf23[2] = save.econom.f[8] ? save.econom.f[8].price : 0;
            selectedFurnitura2.push(sf22);
            selectedFurnitura2.push(sf23);
        }
    } else if (furnituraSelect == 3) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf20[1] = save.econom.f[1] ? save.econom.f[1].name : '';
        sf20[2] = save.econom.f[2] ? save.econom.f[2].name : '';
        sf21[0] = save.econom.f[0] ? save.econom.f[0].price : 0;
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        sf21[2] = save.econom.f[2] ? save.econom.f[2].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    } else if (furnituraSelect == 4) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf20[1] = save.econom.f[1] ? save.econom.f[1].name : '';
        sf20[2] = save.econom.f[2] ? save.econom.f[2].name : '';
        sf20[3] = save.econom.f[3] ? save.econom.f[3].name : '';
        sf21[0] = save.econom.f[0] ? save.econom.f[0].price : 0;
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        sf21[2] = save.econom.f[2] ? save.econom.f[2].price : 0;
        sf21[3] = save.econom.f[3] ? save.econom.f[3].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    } else if (furnituraSelect === 0) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    }

////////////////////////////////////////////////////////////
// выборка фурнитуры 3
////////////////////////////////////////////////////////////
    let selectedFurnitura3 = [];
    let sf30 = [];
    let sf31 = [];
    let sf32 = [];
    let sf33 = [];
    if (furnituraSelect === 1) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf30[1] = save.premium.f[1] ? save.premium.f[1].name : '';
        sf30[2] = save.premium.f[2] ? save.premium.f[2].name : '';
        sf30[3] = save.premium.f[3] ? save.premium.f[3].name : '';
        sf30[4] = save.premium.f[4] ? save.premium.f[4].name : '';
        sf30[5] = save.premium.f[5] ? save.premium.f[5].name : '';
        sf31[0] = save.premium.f[0] ? save.premium.f[0].price : 0;
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        sf31[2] = save.premium.f[2] ? save.premium.f[2].price : 0;
        sf31[3] = save.premium.f[3] ? save.premium.f[3].price : 0;
        sf31[4] = save.premium.f[4] ? save.premium.f[4].price : 0;
        sf31[5] = save.premium.f[5] ? save.premium.f[5].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf32[0] = save.premium.f[6] ? save.premium.f[6].name : '';
            sf32[1] = save.premium.f[7] ? save.premium.f[7].name : '';
            sf32[2] = save.premium.f[8] ? save.premium.f[8].name : '';
            sf32[3] = save.premium.f[9] ? save.premium.f[9].name : '';
            sf32[4] = save.premium.f[10] ? save.premium.f[10].name : '';
            sf33[0] = save.premium.f[6] ? save.premium.f[6].price : 0;
            sf33[1] = save.premium.f[7] ? save.premium.f[7].price : 0;
            sf33[2] = save.premium.f[8] ? save.premium.f[8].price : 0;
            sf33[3] = save.premium.f[9] ? save.premium.f[9].price : 0;
            sf33[4] = save.premium.f[10] ? save.premium.f[10].price : 0;
            selectedFurnitura3.push(sf32);
            selectedFurnitura3.push(sf33);
        }
    } else if (furnituraSelect == 2) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf30[1] = save.premium.f[1] ? save.premium.f[1].name : '';
        sf30[2] = save.premium.f[2] ? save.premium.f[2].name : '';
        sf30[3] = save.premium.f[3] ? save.premium.f[3].name : '';
        sf30[4] = save.premium.f[4] ? save.premium.f[4].name : '';
        sf30[5] = save.premium.f[5] ? save.premium.f[5].name : '';
        sf31[0] = save.premium.f[0] ? save.premium.f[0].price : 0;
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        sf31[2] = save.premium.f[2] ? save.premium.f[2].price : 0;
        sf31[3] = save.premium.f[3] ? save.premium.f[3].price : 0;
        sf31[4] = save.premium.f[4] ? save.premium.f[4].price : 0;
        sf31[5] = save.premium.f[5] ? save.premium.f[5].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf32[0] = save.premium.f[6] ? save.premium.f[6].name : '';
            sf32[1] = save.premium.f[7] ? save.premium.f[7].name : '';
            sf32[2] = save.premium.f[8] ? save.premium.f[8].name : '';
            sf33[0] = save.premium.f[6] ? save.premium.f[6].price : 0;
            sf33[1] = save.premium.f[7] ? save.premium.f[7].price : 0;
            sf33[2] = save.premium.f[8] ? save.premium.f[8].price : 0;
            selectedFurnitura3.push(sf32);
            selectedFurnitura3.push(sf33);
        }
    } else if (furnituraSelect == 3) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf30[1] = save.premium.f[1] ? save.premium.f[1].name : '';
        sf30[2] = save.premium.f[2] ? save.premium.f[2].name : '';
        sf31[0] = save.premium.f[0] ? save.premium.f[0].price : 0;
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        sf31[2] = save.premium.f[2] ? save.premium.f[2].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    } else if (furnituraSelect == 4) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf30[1] = save.premium.f[1] ? save.premium.f[1].name : '';
        sf30[2] = save.premium.f[2] ? save.premium.f[2].name : '';
        sf30[3] = save.premium.f[3] ? save.premium.f[3].name : '';
        sf31[0] = save.premium.f[0] ? save.premium.f[0].price : 0;
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        sf31[2] = save.premium.f[2] ? save.premium.f[2].price : 0;
        sf31[3] = save.premium.f[3] ? save.premium.f[3].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    } else if (furnituraSelect === 0) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    }


////////////////////////////////////////////////////////////
// выборка альтернативной комплектации
////////////////////////////////////////////////////////////
    let i, altFi = [], altFa = [], altPi = [], altPa = [], altMi = [], altMa = [], altSi = [], altSa = [];
    for (i = storage.m.length - 1; i >= 0; i--) {
        if (storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src')) {
            altMi.push(storage.m[i]['id']);
            break;
        }
    }
    for (i = 0; i < storage.m.length; i++) {
        if (storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src')) {
            altMa.push(storage.m[i]['id']);
            break;
        }
    }
    for (i = 0; i < storage.p.length; i++) {
        if (storage.p[i]['name'] != $('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != $('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != $('#KARKAS-NAME').html()) {
            altPi.push(storage.p[i]['id']);
            break;
        }
    }
    for (i = storage.p.length - 1; i >= 0; i--) {
        if (storage.p[i]['name'] != $('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != $('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != $('#KARKAS-NAME').html()) {
            altPa.push(storage.p[i]['id']);
            break;
        }
    }
    function altF(id, n) {
        for (i = storage.f.length - 1; i >= 0; i--) {
            if (storage.f[i]['cat'] == id &&
                storage.f[i]['name'] != checkF(n, 1) &&
                storage.f[i]['name'] != checkF(n, 2) &&
                storage.f[i]['name'] != checkF(n, 3)) {
                altFi.push(storage.f[i]['id']);
                break;
            }
        }
        for (i = 0; i < storage.f.length; i++) {
            if (storage.f[i]['cat'] == id &&
                storage.f[i]['name'] != checkF(n, 1) &&
                storage.f[i]['name'] != checkF(n, 2) &&
                storage.f[i]['name'] != checkF(n, 3)) {
                altFa.push(storage.f[i]['id']);
                break;
            }
        }
    }

    if (furnituraSelect === '0') {
        altF(28, "stoiki-stac-select");
    } else if (furnituraSelect == 1) {
        altF(1, "razdvizhnyie-mehanizmyi-select");
        altF(2, "mehanizm-sinhronizacii-select");
        altF(3, "naprav-select");
        altF(29, "napravn-select");
        altF(4, "vid-kreplenia-naprav-select");
        altF(5, "povodok-select");
        altF(6, "dovodchik-select");
        altF(7, "dek-planka-dlya-profilya-select");
        altF(8, "schetochnii-uplotnitel-select");
        altF(9, "ruchka-select");
        altF(10, "zamok-select");
    } else if (furnituraSelect == 2) {
        altF(11, "mehanizm-sinhron-skladnie");
        altF(12, "mehanizm-rotornii");
        altF(13, "petli-skladnie");
        altF(14, "napravlyayuschie-skladnie");
        altF(15, "napravlyayuschien-skladnie");
        altF(30, "vid-krepleniya-napravlyayuschih-skladnie");
        altF(16, "dek-planka-dlya-profilya-skladnie");
        altF(18, "ruchka-skladnie");
        altF(20, "zamok-skladnie");
    } else if (furnituraSelect == 3) {
        altF(21, "petli-raspashnie");
        altF(22, "ruchka-raspashnie");
        altF(23, "zamok-raspashnie");
    } else if (furnituraSelect == 4) {
        altF(24, "nozhki-mobilnie");
        altF(25, "kolesiki-mobilnie");
        altF(26, "stoyki-mobilnie");
        altF(27, "tipSoedineniyaPoloten-mobilnie");
    }

////////////////////////////////////////////////////////////
// выборка каркаса 1
////////////////////////////////////////////////////////////
    let selectedKarkas = [];
    let selectedKarkasSupp = [];
    save.optimal.a.forEach(function (v) {
        if (v) {
            let tmpArr = [];
            let item = storage.TS.find((s) => s.id === v.id);
            tmpArr.push(v.id);
            tmpArr.push(item.name);
            tmpArr.push(v.name);
            tmpArr.push(v.img);
            tmpArr.push(v.sum * info.count);
            tmpArr.push(item.typeprice === 'Поштучно' || item.typeprice === 'Поштучно c автоматическим подсчетом' ? 1 : undefined);
            selectedKarkasSupp.push(tmpArr);
        }
    });

    selectedKarkas.push(save.optimal.p.n);
    selectedKarkas.push(save.optimal.p.p);
    selectedKarkas.push((info.height / 1000).toFixed(1));
    selectedKarkas.push(selectedKarkasSupp);
    selectedKarkas.push(save.optimal.p.p + save.optimal.pH.p + save.optimal.pW.p);
////////////////////////////////////////////////////////////
// выборка каркаса 2
////////////////////////////////////////////////////////////
    let selectedKarkas2 = [];
    let selectedKarkas2Supp = [];
    save.econom.a.forEach(function (v) {
        if (v) {
            let tmpArr = [];
            let item = storage.TS.find((s) => s.id === v.id);
            tmpArr.push(v.id);
            tmpArr.push(item.name);
            tmpArr.push(v.name);
            tmpArr.push(v.img);
            tmpArr.push(v.sum * info.count);
            tmpArr.push(item.typeprice === 'Поштучно' || item.typeprice === 'Поштучно c автоматическим подсчетом' ? 1 : undefined);
            selectedKarkas2Supp.push(tmpArr);
        }
    });

    selectedKarkas2.push(save.econom.p.n);
    selectedKarkas2.push(save.econom.p.p);
    selectedKarkas2.push((info.height / 1000).toFixed(1));
    selectedKarkas2.push(selectedKarkas2Supp);
    selectedKarkas2.push(save.econom.p.p + save.econom.pH.p + save.econom.pW.p);

////////////////////////////////////////////////////////////
// выборка каркаса 3
////////////////////////////////////////////////////////////
    let selectedKarkas3 = [];
    let selectedKarkas3Supp = [];
    save.premium.a.forEach(function (v) {
        if (v) {
            let tmpArr = [];
            let item = storage.TS.find((s) => s.id === v.id);
            tmpArr.push(v.id);
            tmpArr.push(item.name);
            tmpArr.push(v.name);
            tmpArr.push(v.img);
            tmpArr.push(v.sum * info.count);
            tmpArr.push(item.typeprice === 'Поштучно' || item.typeprice === 'Поштучно c автоматическим подсчетом' ? 1 : undefined);
            selectedKarkas3Supp.push(tmpArr);
        }
    });

    selectedKarkas3.push(save.premium.p.n);
    selectedKarkas3.push(save.premium.p.p);
    selectedKarkas3.push((info.height / 1000).toFixed(1));
    selectedKarkas3.push(selectedKarkas3Supp);
    selectedKarkas3.push(save.premium.p.p + save.premium.pH.p + save.premium.pW.p);

////////////////////////////////////////////////////////////
// выборка перемычек
////////////////////////////////////////////////////////////
    let pmh = [], pmh1 = {}, pmh2 = {}, pmh3 = {};
    pmh1['n'] = save.optimal.pW.n;
    pmh1['p'] = save.optimal.pW.p;
    pmh2['n'] = save.optimal.pW.n;
    pmh2['p'] = save.optimal.pW.p;
    pmh3['n'] = save.optimal.pW.n;
    pmh3['p'] = save.optimal.pW.p;
    pmh.push(pmh1);
    pmh.push(pmh2);
    pmh.push(pmh3);
    let pmv = [], pmv1 = {}, pmv2 = {}, pmv3 = {};
    pmv1['n'] = save.optimal.pH.n;
    pmv1['p'] = save.optimal.pH.p;
    pmv2['n'] = save.econom.pH.n;
    pmv2['p'] = save.econom.pH.p;
    pmv3['n'] = save.premium.pH.n;
    pmv3['p'] = save.premium.pH.p;
    pmv.push(pmv1);
    pmv.push(pmv2);
    pmv.push(pmv3);

////////////////////////////////////////////////////////////
// выборка декора
////////////////////////////////////////////////////////////
    let selectedDecor = [];
    selectedDecor.push(save.optimal.d.i);
    selectedDecor.push(save.optimal.d.p);
    let selectedDecor2 = [];
    selectedDecor2.push(save.econom.d.i);
    selectedDecor2.push(save.econom.d.p);
    let selectedDecor3 = [];
    selectedDecor3.push(save.premium.d.i);
    selectedDecor3.push(save.premium.d.p);

    let rub = [], rub1 = {}, rub2 = {}, rub3 = {};
    rub1['i'] = $('.proizvaodstvoTo input').val();
    rub1['m'] = $('.montazhTo input').val();
    rub1['d'] = $('.dostavkaTo input').val();
    rub1['s'] = $('.srochnostTo input').val();
    rub1['p'] = $('.nashProtsentTo input').val();
    rub1['z'] = $('.nashZamerTo input').val();
    rub2['i'] = $('.proizvaodstvoTo input').val();
    rub2['m'] = $('.montazhTo input').val();
    rub2['d'] = $('.dostavkaTo input').val();
    rub2['s'] = $('.srochnostTo input').val();
    rub2['p'] = $('.nashProtsentTo input').val();
    rub2['z'] = $('.nashZamerTo input').val();
    rub3['i'] = $('.proizvaodstvoTo input').val();
    rub3['m'] = $('.montazhTo input').val();
    rub3['d'] = $('.dostavkaTo input').val();
    rub3['s'] = $('.srochnostTo input').val();
    rub3['p'] = $('.nashProtsentTo input').val();
    rub3['z'] = $('.nashZamerTo input').val();
    rub.push(rub1);
    rub.push(rub2);
    rub.push(rub3);

    let per = [], per1 = {}, per2 = {}, per3 = {};
    per1['i'] = $('.proizvaodstvoIn input').val();
    per1['m'] = $('.montazhIn input').val();
    per1['d'] = $('.dostavkaIn input').val();
    per1['s'] = $('.srochnostIn input').val();
    per1['p'] = $('.nashProtsentIn input').val();
    per1['z'] = $('.nashZamerIn input').val();
    per2['i'] = $('.proizvaodstvoIn input').val();
    per2['m'] = $('.montazhIn input').val();
    per2['d'] = $('.dostavkaIn input').val();
    per2['s'] = $('.srochnostIn input').val();
    per2['p'] = $('.nashProtsentIn input').val();
    per2['z'] = $('.nashZamerIn input').val();
    per3['i'] = $('.proizvaodstvoIn input').val();
    per3['m'] = $('.montazhIn input').val();
    per3['d'] = $('.dostavkaIn input').val();
    per3['s'] = $('.srochnostIn input').val();
    per3['p'] = $('.nashProtsentIn input').val();
    per3['z'] = $('.nashZamer input').val();
    per.push(per1);
    per.push(per2);
    per.push(per3);

    let sum = [], sum1 = {}, sum2 = {}, sum3 = {};
    sum1['p'] = save.optimal.profilRes;
    sum1['a'] = save.optimal.adRes * info.count;
    sum1['d'] = save.optimal.decorRes;
    sum1['m'] = save.optimal.marirealRes * info.count;
    sum1['f'] = save.optimal.furnituraResPrice;
    sum1['i'] = save.optimal.resPricesBez;
    sum1['o'] = save.optimal.bezParam;

    sum2['p'] = save.econom.profilRes;
    sum2['a'] = save.econom.adRes * info.count;
    sum2['d'] = save.econom.decorRes;
    sum2['m'] = save.econom.marirealRes * info.count;
    sum2['f'] = save.econom.furnituraResPrice;
    sum2['i'] = save.econom.resPricesBez;
    sum2['o'] = save.econom.bezParam;


    sum3['p'] = save.premium.profilRes;
    sum3['a'] = save.premium.adRes * info.count;
    sum3['d'] = save.premium.decorRes;
    sum3['m'] = save.premium.marirealRes * info.count;
    sum3['f'] = save.premium.furnituraResPrice;
    sum3['i'] = save.premium.resPricesBez;
    sum3['o'] = save.premium.bezParam;
    sum.push(sum1);
    sum.push(sum2);
    sum.push(sum3);

    let setsNumber = parseInt($('#NUMBER_SETS_ID').val());
    let orderNumber = $('#orderNumber').val();
    let calcmanager = $('#calcmanager').val();


////////////////////////////////////////////////////////////
// формирование url
////////////////////////////////////////////////////////////
    let url = {
        'furnitura-select': furnituraSelect,
        'Allheight': Allheight,
        'Allwidth': Allwidth,
        'count': count,
        'count1': count1,
        'countW': countW,
        'countH': countH,
        'priceFull1': ParserIntAndNan($('.slider-container:eq(1) .price').html()),
        'priceFull2': ParserIntAndNan($('.slider-container:eq(0) .price').html()),
        'priceFull3': ParserIntAndNan($('.slider-container:eq(2) .price').html()),
        'selectedMaterials1': JSON.stringify(selectedMaterials1),
        'selectedMaterials2': JSON.stringify(selectedMaterials2),
        'selectedMaterials3': JSON.stringify(selectedMaterials3),
        'selectedDecor': JSON.stringify(selectedDecor),
        'selectedDecor2': JSON.stringify(selectedDecor2),
        'selectedDecor3': JSON.stringify(selectedDecor3),
        'fotoNames': JSON.stringify(fotoNames),
        'selectedKarkas': JSON.stringify(selectedKarkas),
        'selectedKarkas2': JSON.stringify(selectedKarkas2),
        'selectedKarkas3': JSON.stringify(selectedKarkas3),
        'selectedFurnitura': JSON.stringify(selectedFurnitura),
        'selectedFurnitura2': JSON.stringify(selectedFurnitura2),
        'selectedFurnitura3': JSON.stringify(selectedFurnitura3),
        'setsNumber': setsNumber,
        'orderNumber': orderNumber,
        'calcmanager': calcmanager,
        'per': JSON.stringify(per),
        'rub': JSON.stringify(rub),
        'sum': JSON.stringify(sum),
        'pmh': JSON.stringify(pmh),
        'pmv': JSON.stringify(pmv),
        'altFi': JSON.stringify(altFi),
        'altFa': JSON.stringify(altFa),
        'altPi': JSON.stringify(altPi),
        'altPa': JSON.stringify(altPa),
        'altSi': JSON.stringify(altSi),
        'altSa': JSON.stringify(altSa),
        'altMi': JSON.stringify(altMi),
        'altMa': JSON.stringify(altMa),
        'Omanufacturer': save.optimal.fm,
        'Emanufacturer': save.econom.fm,
        'Fmanufacturer': save.premium.fm,
        'contacts': JSON.stringify({
            name: $('#managertext').val(),
            tel: $('#teltext').val(),
            mail: $('#mailtext').val()
        }),
        'schema': $('#shema').prop("checked") ? $('#ShemaKonstr').attr('src') : ''
    };

    $.post('./php/longurl.php?n=' + window.id_pdf, 'url=' + JSON.stringify(url), function () {
        window.open('./html2pdf.php?n=' + window.id_pdf, '_blank');
    });
}


function SaveToPDFtoFile() {
    save.init();
    save.set();

    function checkFN(arg, s) {
        return $("#" + arg + " h4.text").html();
    }

    function checkF(arg, s) {
        return $("#" + arg + " .furnituraElFlag").val() === 1 ? $("#" + arg + " h4.text").html() : "";
    }

    let furnituraSelect = info.type;
    let Allheight = info.height;
    let Allwidth = info.width;
    let count = info.count;
    let count1 = info.countMove;
    let countW = info.countProfileWidth;
    let countH = info.countProfileHeight;

    ////////////////////////////////////////////////////////////
    // выборка материалов
    ////////////////////////////////////////////////////////////
    let selectedMaterials1 = [], selectedMaterials2 = [], selectedMaterials3 = [], tmpA1 = [], tmpA2 = [], tmpA3 = [];
    save.optimal.m.forEach(v => {
        tmpA1 = [];
        let str = v.img.substr(8);
        let obj = storage.m.find(v => v.img === str);
        tmpA1.push(obj.name);
        tmpA1.push(v.price);
        tmpA1.push(v.ploschad);
        tmpA1.push(v.vyisota);
        tmpA1.push(v.shirina);
        tmpA1.push(v.tolschina);
        tmpA1.push(v.kollichestvo);
        tmpA1.push(v.zk);
        selectedMaterials1.push(tmpA1);
    });
    save.econom.m.forEach(v => {
        tmpA2 = [];
        let str = v.img.substr(8);
        let obj = storage.m.find(v => v.img === str);
        tmpA1.push(obj.name);
        tmpA1.push(v.price);
        tmpA1.push(v.ploschad);
        tmpA1.push(v.vyisota);
        tmpA1.push(v.shirina);
        tmpA1.push(v.tolschina);
        tmpA1.push(v.kollichestvo);
        tmpA1.push(v.zk);
        selectedMaterials2.push(tmpA1);
    });
    save.premium.m.forEach(v => {
        tmpA3 = [];
        let str = v.img.substr(8);
        let obj = storage.m.find(v => v.img === str);
        tmpA1.push(obj.name);
        tmpA1.push(v.price);
        tmpA1.push(v.ploschad);
        tmpA1.push(v.vyisota);
        tmpA1.push(v.shirina);
        tmpA1.push(v.tolschina);
        tmpA1.push(v.kollichestvo);
        tmpA1.push(v.zk);
        selectedMaterials3.push(tmpA1);
    });


    let fotoNames = [];
    fotoNames.push(window.imagesPDF[0]);
    fotoNames.push(window.imagesPDF[1]);


////////////////////////////////////////////////////////////
// выборка фурнитуры 1
////////////////////////////////////////////////////////////
    let selectedFurnitura = [];
    let sf0 = [];
    let sf1 = [];
    let sf2 = [];
    let sf3 = [];
    if (furnituraSelect === 1) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf0[1] = save.optimal.f[1] ? save.optimal.f[1].name : '';
        sf0[2] = save.optimal.f[2] ? save.optimal.f[2].name : '';
        sf0[3] = save.optimal.f[3] ? save.optimal.f[3].name : '';
        sf0[4] = save.optimal.f[4] ? save.optimal.f[4].name : '';
        sf0[5] = save.optimal.f[5] ? save.optimal.f[5].name : '';
        sf1[0] = save.optimal.f[0] ? save.optimal.f[0].price : 0;
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        sf1[2] = save.optimal.f[2] ? save.optimal.f[2].price : 0;
        sf1[3] = save.optimal.f[3] ? save.optimal.f[3].price : 0;
        sf1[4] = save.optimal.f[4] ? save.optimal.f[4].price : 0;
        sf1[5] = save.optimal.f[5] ? save.optimal.f[5].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf2[0] = save.optimal.f[6] ? save.optimal.f[6].name : '';
            sf2[1] = save.optimal.f[7] ? save.optimal.f[7].name : '';
            sf2[2] = save.optimal.f[8] ? save.optimal.f[8].name : '';
            sf2[3] = save.optimal.f[9] ? save.optimal.f[9].name : '';
            sf2[4] = save.optimal.f[10] ? save.optimal.f[10].name : '';
            sf3[0] = save.optimal.f[6] ? save.optimal.f[6].price : 0;
            sf3[1] = save.optimal.f[7] ? save.optimal.f[7].price : 0;
            sf3[2] = save.optimal.f[8] ? save.optimal.f[8].price : 0;
            sf3[3] = save.optimal.f[9] ? save.optimal.f[9].price : 0;
            sf3[4] = save.optimal.f[10] ? save.optimal.f[10].price : 0;
            selectedFurnitura.push(sf2);
            selectedFurnitura.push(sf3);
        }
    } else if (furnituraSelect == 2) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf0[1] = save.optimal.f[1] ? save.optimal.f[1].name : '';
        sf0[2] = save.optimal.f[2] ? save.optimal.f[2].name : '';
        sf0[3] = save.optimal.f[3] ? save.optimal.f[3].name : '';
        sf0[4] = save.optimal.f[4] ? save.optimal.f[4].name : '';
        sf0[5] = save.optimal.f[5] ? save.optimal.f[5].name : '';
        sf1[0] = save.optimal.f[0] ? save.optimal.f[0].price : 0;
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        sf1[2] = save.optimal.f[2] ? save.optimal.f[2].price : 0;
        sf1[3] = save.optimal.f[3] ? save.optimal.f[3].price : 0;
        sf1[4] = save.optimal.f[4] ? save.optimal.f[4].price : 0;
        sf1[5] = save.optimal.f[5] ? save.optimal.f[5].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf2[0] = save.optimal.f[6] ? save.optimal.f[6].name : '';
            sf2[1] = save.optimal.f[7] ? save.optimal.f[7].name : '';
            sf2[2] = save.optimal.f[8] ? save.optimal.f[8].name : '';
            sf3[0] = save.optimal.f[6] ? save.optimal.f[6].price : 0;
            sf3[1] = save.optimal.f[7] ? save.optimal.f[7].price : 0;
            sf3[2] = save.optimal.f[8] ? save.optimal.f[8].price : 0;
            selectedFurnitura.push(sf2);
            selectedFurnitura.push(sf3);
        }
    } else if (furnituraSelect == 3) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf0[1] = save.optimal.f[1] ? save.optimal.f[1].name : '';
        sf0[2] = save.optimal.f[2] ? save.optimal.f[2].name : '';
        sf1[0] = save.optimal.f[0] ? save.optimal.f[0].price : 0;
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        sf1[2] = save.optimal.f[2] ? save.optimal.f[2].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    } else if (furnituraSelect == 4) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf0[1] = save.optimal.f[1] ? save.optimal.f[1].name : '';
        sf0[2] = save.optimal.f[2] ? save.optimal.f[2].name : '';
        sf0[3] = save.optimal.f[3] ? save.optimal.f[3].name : '';
        sf1[0] = save.optimal.f[0] ? save.optimal.f[0].price : 0;
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        sf1[2] = save.optimal.f[2] ? save.optimal.f[2].price : 0;
        sf1[3] = save.optimal.f[3] ? save.optimal.f[3].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    } else if (furnituraSelect === 0) {
        sf0[0] = save.optimal.f[0] ? save.optimal.f[0].name : '';
        sf1[1] = save.optimal.f[1] ? save.optimal.f[1].price : 0;
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    }
////////////////////////////////////////////////////////////
// выборка фурнитуры 2
////////////////////////////////////////////////////////////
    let selectedFurnitura2 = [];
    let sf20 = [];
    let sf21 = [];
    let sf22 = [];
    let sf23 = [];
    if (furnituraSelect === 1) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf20[1] = save.econom.f[1] ? save.econom.f[1].name : '';
        sf20[2] = save.econom.f[2] ? save.econom.f[2].name : '';
        sf20[3] = save.econom.f[3] ? save.econom.f[3].name : '';
        sf20[4] = save.econom.f[4] ? save.econom.f[4].name : '';
        sf20[5] = save.econom.f[5] ? save.econom.f[5].name : '';
        sf21[0] = save.econom.f[0] ? save.econom.f[0].price : 0;
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        sf21[2] = save.econom.f[2] ? save.econom.f[2].price : 0;
        sf21[3] = save.econom.f[3] ? save.econom.f[3].price : 0;
        sf21[4] = save.econom.f[4] ? save.econom.f[4].price : 0;
        sf21[5] = save.econom.f[5] ? save.econom.f[5].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf22[0] = save.econom.f[6] ? save.econom.f[6].name : '';
            sf22[1] = save.econom.f[7] ? save.econom.f[7].name : '';
            sf22[2] = save.econom.f[8] ? save.econom.f[8].name : '';
            sf22[3] = save.econom.f[9] ? save.econom.f[9].name : '';
            sf22[4] = save.econom.f[10] ? save.econom.f[10].name : '';
            sf23[0] = save.econom.f[6] ? save.econom.f[6].price : 0;
            sf23[1] = save.econom.f[7] ? save.econom.f[7].price : 0;
            sf23[2] = save.econom.f[8] ? save.econom.f[8].price : 0;
            sf23[3] = save.econom.f[9] ? save.econom.f[9].price : 0;
            sf23[4] = save.econom.f[10] ? save.econom.f[10].price : 0;
            selectedFurnitura2.push(sf22);
            selectedFurnitura2.push(sf23);
        }
    } else if (furnituraSelect == 2) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf20[1] = save.econom.f[1] ? save.econom.f[1].name : '';
        sf20[2] = save.econom.f[2] ? save.econom.f[2].name : '';
        sf20[3] = save.econom.f[3] ? save.econom.f[3].name : '';
        sf20[4] = save.econom.f[4] ? save.econom.f[4].name : '';
        sf20[5] = save.econom.f[5] ? save.econom.f[5].name : '';
        sf21[0] = save.econom.f[0] ? save.econom.f[0].price : 0;
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        sf21[2] = save.econom.f[2] ? save.econom.f[2].price : 0;
        sf21[3] = save.econom.f[3] ? save.econom.f[3].price : 0;
        sf21[4] = save.econom.f[4] ? save.econom.f[4].price : 0;
        sf21[5] = save.econom.f[5] ? save.econom.f[5].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf22[0] = save.econom.f[6] ? save.econom.f[6].name : '';
            sf22[1] = save.econom.f[7] ? save.econom.f[7].name : '';
            sf22[2] = save.econom.f[8] ? save.econom.f[8].name : '';
            sf23[0] = save.econom.f[6] ? save.econom.f[6].price : 0;
            sf23[1] = save.econom.f[7] ? save.econom.f[7].price : 0;
            sf23[2] = save.econom.f[8] ? save.econom.f[8].price : 0;
            selectedFurnitura2.push(sf22);
            selectedFurnitura2.push(sf23);
        }
    } else if (furnituraSelect == 3) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf20[1] = save.econom.f[1] ? save.econom.f[1].name : '';
        sf20[2] = save.econom.f[2] ? save.econom.f[2].name : '';
        sf21[0] = save.econom.f[0] ? save.econom.f[0].price : 0;
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        sf21[2] = save.econom.f[2] ? save.econom.f[2].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    } else if (furnituraSelect == 4) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf20[1] = save.econom.f[1] ? save.econom.f[1].name : '';
        sf20[2] = save.econom.f[2] ? save.econom.f[2].name : '';
        sf20[3] = save.econom.f[3] ? save.econom.f[3].name : '';
        sf21[0] = save.econom.f[0] ? save.econom.f[0].price : 0;
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        sf21[2] = save.econom.f[2] ? save.econom.f[2].price : 0;
        sf21[3] = save.econom.f[3] ? save.econom.f[3].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    } else if (furnituraSelect === 0) {
        sf20[0] = save.econom.f[0] ? save.econom.f[0].name : '';
        sf21[1] = save.econom.f[1] ? save.econom.f[1].price : 0;
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    }

////////////////////////////////////////////////////////////
// выборка фурнитуры 3
////////////////////////////////////////////////////////////
    let selectedFurnitura3 = [];
    let sf30 = [];
    let sf31 = [];
    let sf32 = [];
    let sf33 = [];
    if (furnituraSelect === 1) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf30[1] = save.premium.f[1] ? save.premium.f[1].name : '';
        sf30[2] = save.premium.f[2] ? save.premium.f[2].name : '';
        sf30[3] = save.premium.f[3] ? save.premium.f[3].name : '';
        sf30[4] = save.premium.f[4] ? save.premium.f[4].name : '';
        sf30[5] = save.premium.f[5] ? save.premium.f[5].name : '';
        sf31[0] = save.premium.f[0] ? save.premium.f[0].price : 0;
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        sf31[2] = save.premium.f[2] ? save.premium.f[2].price : 0;
        sf31[3] = save.premium.f[3] ? save.premium.f[3].price : 0;
        sf31[4] = save.premium.f[4] ? save.premium.f[4].price : 0;
        sf31[5] = save.premium.f[5] ? save.premium.f[5].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf32[0] = save.premium.f[6] ? save.premium.f[6].name : '';
            sf32[1] = save.premium.f[7] ? save.premium.f[7].name : '';
            sf32[2] = save.premium.f[8] ? save.premium.f[8].name : '';
            sf32[3] = save.premium.f[9] ? save.premium.f[9].name : '';
            sf32[4] = save.premium.f[10] ? save.premium.f[10].name : '';
            sf33[0] = save.premium.f[6] ? save.premium.f[6].price : 0;
            sf33[1] = save.premium.f[7] ? save.premium.f[7].price : 0;
            sf33[2] = save.premium.f[8] ? save.premium.f[8].price : 0;
            sf33[3] = save.premium.f[9] ? save.premium.f[9].price : 0;
            sf33[4] = save.premium.f[10] ? save.premium.f[10].price : 0;
            selectedFurnitura3.push(sf32);
            selectedFurnitura3.push(sf33);
        }
    } else if (furnituraSelect == 2) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf30[1] = save.premium.f[1] ? save.premium.f[1].name : '';
        sf30[2] = save.premium.f[2] ? save.premium.f[2].name : '';
        sf30[3] = save.premium.f[3] ? save.premium.f[3].name : '';
        sf30[4] = save.premium.f[4] ? save.premium.f[4].name : '';
        sf30[5] = save.premium.f[5] ? save.premium.f[5].name : '';
        sf31[0] = save.premium.f[0] ? save.premium.f[0].price : 0;
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        sf31[2] = save.premium.f[2] ? save.premium.f[2].price : 0;
        sf31[3] = save.premium.f[3] ? save.premium.f[3].price : 0;
        sf31[4] = save.premium.f[4] ? save.premium.f[4].price : 0;
        sf31[5] = save.premium.f[5] ? save.premium.f[5].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
        if ($('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf32[0] = save.premium.f[6] ? save.premium.f[6].name : '';
            sf32[1] = save.premium.f[7] ? save.premium.f[7].name : '';
            sf32[2] = save.premium.f[8] ? save.premium.f[8].name : '';
            sf33[0] = save.premium.f[6] ? save.premium.f[6].price : 0;
            sf33[1] = save.premium.f[7] ? save.premium.f[7].price : 0;
            sf33[2] = save.premium.f[8] ? save.premium.f[8].price : 0;
            selectedFurnitura3.push(sf32);
            selectedFurnitura3.push(sf33);
        }
    } else if (furnituraSelect == 3) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf30[1] = save.premium.f[1] ? save.premium.f[1].name : '';
        sf30[2] = save.premium.f[2] ? save.premium.f[2].name : '';
        sf31[0] = save.premium.f[0] ? save.premium.f[0].price : 0;
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        sf31[2] = save.premium.f[2] ? save.premium.f[2].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    } else if (furnituraSelect == 4) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf30[1] = save.premium.f[1] ? save.premium.f[1].name : '';
        sf30[2] = save.premium.f[2] ? save.premium.f[2].name : '';
        sf30[3] = save.premium.f[3] ? save.premium.f[3].name : '';
        sf31[0] = save.premium.f[0] ? save.premium.f[0].price : 0;
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        sf31[2] = save.premium.f[2] ? save.premium.f[2].price : 0;
        sf31[3] = save.premium.f[3] ? save.premium.f[3].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    } else if (furnituraSelect === 0) {
        sf30[0] = save.premium.f[0] ? save.premium.f[0].name : '';
        sf31[1] = save.premium.f[1] ? save.premium.f[1].price : 0;
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    }


////////////////////////////////////////////////////////////
// выборка альтернативной комплектации
////////////////////////////////////////////////////////////
    let i, altFi = [], altFa = [], altPi = [], altPa = [], altMi = [], altMa = [], altSi = [], altSa = [];
    for (i = storage.m.length - 1; i >= 0; i--) {
        if (storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src')) {
            altMi.push(storage.m[i]['id']);
            break;
        }
    }
    for (i = 0; i < storage.m.length; i++) {
        if (storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != $('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src')) {
            altMa.push(storage.m[i]['id']);
            break;
        }
    }
    for (i = 0; i < storage.p.length; i++) {
        if (storage.p[i]['name'] != $('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != $('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != $('#KARKAS-NAME').html()) {
            altPi.push(storage.p[i]['id']);
            break;
        }
    }
    for (i = storage.p.length - 1; i >= 0; i--) {
        if (storage.p[i]['name'] != $('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != $('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != $('#KARKAS-NAME').html()) {
            altPa.push(storage.p[i]['id']);
            break;
        }
    }
    function altF(id, n) {
        for (i = storage.f.length - 1; i >= 0; i--) {
            if (storage.f[i]['cat'] == id &&
                storage.f[i]['name'] != checkF(n, 1) &&
                storage.f[i]['name'] != checkF(n, 2) &&
                storage.f[i]['name'] != checkF(n, 3)) {
                altFi.push(storage.f[i]['id']);
                break;
            }
        }
        for (i = 0; i < storage.f.length; i++) {
            if (storage.f[i]['cat'] == id &&
                storage.f[i]['name'] != checkF(n, 1) &&
                storage.f[i]['name'] != checkF(n, 2) &&
                storage.f[i]['name'] != checkF(n, 3)) {
                altFa.push(storage.f[i]['id']);
                break;
            }
        }
    }

    if (furnituraSelect === '0') {
        altF(28, "stoiki-stac-select");
    } else if (furnituraSelect == 1) {
        altF(1, "razdvizhnyie-mehanizmyi-select");
        altF(2, "mehanizm-sinhronizacii-select");
        altF(3, "naprav-select");
        altF(29, "napravn-select");
        altF(4, "vid-kreplenia-naprav-select");
        altF(5, "povodok-select");
        altF(6, "dovodchik-select");
        altF(7, "dek-planka-dlya-profilya-select");
        altF(8, "schetochnii-uplotnitel-select");
        altF(9, "ruchka-select");
        altF(10, "zamok-select");
    } else if (furnituraSelect == 2) {
        altF(11, "mehanizm-sinhron-skladnie");
        altF(12, "mehanizm-rotornii");
        altF(13, "petli-skladnie");
        altF(14, "napravlyayuschie-skladnie");
        altF(15, "napravlyayuschien-skladnie");
        altF(30, "vid-krepleniya-napravlyayuschih-skladnie");
        altF(16, "dek-planka-dlya-profilya-skladnie");
        altF(18, "ruchka-skladnie");
        altF(20, "zamok-skladnie");
    } else if (furnituraSelect == 3) {
        altF(21, "petli-raspashnie");
        altF(22, "ruchka-raspashnie");
        altF(23, "zamok-raspashnie");
    } else if (furnituraSelect == 4) {
        altF(24, "nozhki-mobilnie");
        altF(25, "kolesiki-mobilnie");
        altF(26, "stoyki-mobilnie");
        altF(27, "tipSoedineniyaPoloten-mobilnie");
    }

////////////////////////////////////////////////////////////
// выборка каркаса 1
////////////////////////////////////////////////////////////
    let selectedKarkas = [];
    let selectedKarkasSupp = [];
    save.optimal.a.forEach(function (v) {
        if (v) {
            let tmpArr = [];
            let item = storage.TS.find((s) => s.id === v.id);
            tmpArr.push(v.id);
            tmpArr.push(item.name);
            tmpArr.push(v.name);
            tmpArr.push(v.img);
            tmpArr.push(v.sum * info.count);
            tmpArr.push(item.typeprice === 'Поштучно' || item.typeprice === 'Поштучно c автоматическим подсчетом' ? 1 : undefined);
            selectedKarkasSupp.push(tmpArr);
        }
    });

    selectedKarkas.push(save.optimal.p.n);
    selectedKarkas.push(save.optimal.p.p);
    selectedKarkas.push((info.height / 1000).toFixed(1));
    selectedKarkas.push(selectedKarkasSupp);
    selectedKarkas.push(save.optimal.p.p + save.optimal.pH.p + save.optimal.pW.p);
////////////////////////////////////////////////////////////
// выборка каркаса 2
////////////////////////////////////////////////////////////
    let selectedKarkas2 = [];
    let selectedKarkas2Supp = [];
    save.econom.a.forEach(function (v) {
        if (v) {
            let tmpArr = [];
            let item = storage.TS.find((s) => s.id === v.id);
            tmpArr.push(v.id);
            tmpArr.push(item.name);
            tmpArr.push(v.name);
            tmpArr.push(v.img);
            tmpArr.push(v.sum * info.count);
            tmpArr.push(item.typeprice === 'Поштучно' || item.typeprice === 'Поштучно c автоматическим подсчетом' ? 1 : undefined);
            selectedKarkas2Supp.push(tmpArr);
        }
    });

    selectedKarkas2.push(save.econom.p.n);
    selectedKarkas2.push(save.econom.p.p);
    selectedKarkas2.push((info.height / 1000).toFixed(1));
    selectedKarkas2.push(selectedKarkas2Supp);
    selectedKarkas2.push(save.econom.p.p + save.econom.pH.p + save.econom.pW.p);

////////////////////////////////////////////////////////////
// выборка каркаса 3
////////////////////////////////////////////////////////////
    let selectedKarkas3 = [];
    let selectedKarkas3Supp = [];
    save.premium.a.forEach(function (v) {
        if (v) {
            let tmpArr = [];
            let item = storage.TS.find((s) => s.id === v.id);
            tmpArr.push(v.id);
            tmpArr.push(item.name);
            tmpArr.push(v.name);
            tmpArr.push(v.img);
            tmpArr.push(v.sum * info.count);
            tmpArr.push(item.typeprice === 'Поштучно' || item.typeprice === 'Поштучно c автоматическим подсчетом' ? 1 : undefined);
            selectedKarkas3Supp.push(tmpArr);
        }
    });

    selectedKarkas3.push(save.premium.p.n);
    selectedKarkas3.push(save.premium.p.p);
    selectedKarkas3.push((info.height / 1000).toFixed(1));
    selectedKarkas3.push(selectedKarkas3Supp);
    selectedKarkas3.push(save.premium.p.p + save.premium.pH.p + save.premium.pW.p);

////////////////////////////////////////////////////////////
// выборка перемычек
////////////////////////////////////////////////////////////
    let pmh = [], pmh1 = {}, pmh2 = {}, pmh3 = {};
    pmh1['n'] = save.optimal.pW.n;
    pmh1['p'] = save.optimal.pW.p;
    pmh2['n'] = save.optimal.pW.n;
    pmh2['p'] = save.optimal.pW.p;
    pmh3['n'] = save.optimal.pW.n;
    pmh3['p'] = save.optimal.pW.p;
    pmh.push(pmh1);
    pmh.push(pmh2);
    pmh.push(pmh3);
    let pmv = [], pmv1 = {}, pmv2 = {}, pmv3 = {};
    pmv1['n'] = save.optimal.pH.n;
    pmv1['p'] = save.optimal.pH.p;
    pmv2['n'] = save.econom.pH.n;
    pmv2['p'] = save.econom.pH.p;
    pmv3['n'] = save.premium.pH.n;
    pmv3['p'] = save.premium.pH.p;
    pmv.push(pmv1);
    pmv.push(pmv2);
    pmv.push(pmv3);

////////////////////////////////////////////////////////////
// выборка декора
////////////////////////////////////////////////////////////
    let selectedDecor = [];
    selectedDecor.push(save.optimal.d.i);
    selectedDecor.push(save.optimal.d.p);
    let selectedDecor2 = [];
    selectedDecor2.push(save.econom.d.i);
    selectedDecor2.push(save.econom.d.p);
    let selectedDecor3 = [];
    selectedDecor3.push(save.premium.d.i);
    selectedDecor3.push(save.premium.d.p);

    let rub = [], rub1 = {}, rub2 = {}, rub3 = {};
    rub1['i'] = $('.proizvaodstvoTo input').val();
    rub1['m'] = $('.montazhTo input').val();
    rub1['d'] = $('.dostavkaTo input').val();
    rub1['s'] = $('.srochnostTo input').val();
    rub1['p'] = $('.nashProtsentTo input').val();
    rub1['z'] = $('.nashZamerTo input').val();
    rub2['i'] = $('.proizvaodstvoTo input').val();
    rub2['m'] = $('.montazhTo input').val();
    rub2['d'] = $('.dostavkaTo input').val();
    rub2['s'] = $('.srochnostTo input').val();
    rub2['p'] = $('.nashProtsentTo input').val();
    rub2['z'] = $('.nashZamerTo input').val();
    rub3['i'] = $('.proizvaodstvoTo input').val();
    rub3['m'] = $('.montazhTo input').val();
    rub3['d'] = $('.dostavkaTo input').val();
    rub3['s'] = $('.srochnostTo input').val();
    rub3['p'] = $('.nashProtsentTo input').val();
    rub3['z'] = $('.nashZamerTo input').val();
    rub.push(rub1);
    rub.push(rub2);
    rub.push(rub3);

    let per = [], per1 = {}, per2 = {}, per3 = {};
    per1['i'] = $('.proizvaodstvoIn input').val();
    per1['m'] = $('.montazhIn input').val();
    per1['d'] = $('.dostavkaIn input').val();
    per1['s'] = $('.srochnostIn input').val();
    per1['p'] = $('.nashProtsentIn input').val();
    per1['z'] = $('.nashZamerIn input').val();
    per2['i'] = $('.proizvaodstvoIn input').val();
    per2['m'] = $('.montazhIn input').val();
    per2['d'] = $('.dostavkaIn input').val();
    per2['s'] = $('.srochnostIn input').val();
    per2['p'] = $('.nashProtsentIn input').val();
    per2['z'] = $('.nashZamerIn input').val();
    per3['i'] = $('.proizvaodstvoIn input').val();
    per3['m'] = $('.montazhIn input').val();
    per3['d'] = $('.dostavkaIn input').val();
    per3['s'] = $('.srochnostIn input').val();
    per3['p'] = $('.nashProtsentIn input').val();
    per3['z'] = $('.nashZamer input').val();
    per.push(per1);
    per.push(per2);
    per.push(per3);

    let sum = [], sum1 = {}, sum2 = {}, sum3 = {};
    sum1['p'] = save.optimal.profilRes;
    sum1['a'] = save.optimal.adRes * info.count;
    sum1['d'] = save.optimal.decorRes;
    sum1['m'] = save.optimal.marirealRes * info.count;
    sum1['f'] = save.optimal.furnituraResPrice;
    sum1['i'] = save.optimal.resPricesBez;
    sum1['o'] = save.optimal.bezParam;

    sum2['p'] = save.econom.profilRes;
    sum2['a'] = save.econom.adRes * info.count;
    sum2['d'] = save.econom.decorRes;
    sum2['m'] = save.econom.marirealRes * info.count;
    sum2['f'] = save.econom.furnituraResPrice;
    sum2['i'] = save.econom.resPricesBez;
    sum2['o'] = save.econom.bezParam;


    sum3['p'] = save.premium.profilRes;
    sum3['a'] = save.premium.adRes * info.count;
    sum3['d'] = save.premium.decorRes;
    sum3['m'] = save.premium.marirealRes * info.count;
    sum3['f'] = save.premium.furnituraResPrice;
    sum3['i'] = save.premium.resPricesBez;
    sum3['o'] = save.premium.bezParam;
    sum.push(sum1);
    sum.push(sum2);
    sum.push(sum3);

    let setsNumber = parseInt($('#NUMBER_SETS_ID').val());
    let orderNumber = $('#orderNumber').val();
    let calcmanager = $('#calcmanager').val();


////////////////////////////////////////////////////////////
// формирование url
////////////////////////////////////////////////////////////
    let url = {
        'furnitura-select': furnituraSelect,
        'Allheight': Allheight,
        'Allwidth': Allwidth,
        'count': count,
        'count1': count1,
        'countW': countW,
        'countH': countH,
        'priceFull1': ParserIntAndNan($('.slider-container:eq(1) .price').html()),
        'priceFull2': ParserIntAndNan($('.slider-container:eq(0) .price').html()),
        'priceFull3': ParserIntAndNan($('.slider-container:eq(2) .price').html()),
        'selectedMaterials1': JSON.stringify(selectedMaterials1),
        'selectedMaterials2': JSON.stringify(selectedMaterials2),
        'selectedMaterials3': JSON.stringify(selectedMaterials3),
        'selectedDecor': JSON.stringify(selectedDecor),
        'selectedDecor2': JSON.stringify(selectedDecor2),
        'selectedDecor3': JSON.stringify(selectedDecor3),
        'fotoNames': JSON.stringify(fotoNames),
        'selectedKarkas': JSON.stringify(selectedKarkas),
        'selectedKarkas2': JSON.stringify(selectedKarkas2),
        'selectedKarkas3': JSON.stringify(selectedKarkas3),
        'selectedFurnitura': JSON.stringify(selectedFurnitura),
        'selectedFurnitura2': JSON.stringify(selectedFurnitura2),
        'selectedFurnitura3': JSON.stringify(selectedFurnitura3),
        'setsNumber': setsNumber,
        'orderNumber': orderNumber,
        'calcmanager': calcmanager,
        'per': JSON.stringify(per),
        'rub': JSON.stringify(rub),
        'sum': JSON.stringify(sum),
        'pmh': JSON.stringify(pmh),
        'pmv': JSON.stringify(pmv),
        'altFi': JSON.stringify(altFi),
        'altFa': JSON.stringify(altFa),
        'altPi': JSON.stringify(altPi),
        'altPa': JSON.stringify(altPa),
        'altSi': JSON.stringify(altSi),
        'altSa': JSON.stringify(altSa),
        'altMi': JSON.stringify(altMi),
        'altMa': JSON.stringify(altMa),
        'Omanufacturer': save.optimal.fm,
        'Emanufacturer': save.econom.fm,
        'Fmanufacturer': save.premium.fm,
        'contacts': JSON.stringify({
            name: $('#managertext').val(),
            tel: $('#teltext').val(),
            mail: $('#mailtext').val()
        }),
        'schema': $('#shema').prop("checked") ? $('#ShemaKonstr').attr('src') : ''
    };

    $.post('./php/longurl.php?n=' + window.id_pdf, 'url=' + JSON.stringify(url), function () {
        message("Создается pdf для письма");
        let _p = $.get('./html2pdf.php?n=' + window.id_pdf);
        _p.done(() => {
            loadmail();
        });
        _p.fail(() => {
            message('Произошла ошибка');
        })
    });
}