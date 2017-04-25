$('.sendGet').click(SaveToPDF);

function SaveToPDF() {
    function checkF(arg, s) {
        return (parentM["s" + s].$("#" + arg + " .furnituraElFlag").val() == 1) ? parentM["s" + s].$("#" + arg + " h4.text").html() : "";
    }

    function checkFN(arg, s) {
        return parentM["s" + s].$("#" + arg + " h4.text").html();
    }

    var TOTAL_PAINTING = parseInt($("#state1").contents().find('#TOTAL_PAINTING_ID').val());
    if ($("#state1").contents().find('#TOTAL_PAINTING_ID').val() === '') TOTAL_PAINTING = 1;
    var furnituraSelect = $("#state1").contents().find("#TYPE_BAFFLE_ID").val();
    var Allheight = $("#state1").contents().find('#HIGHT_SETS_ID').val();
    var Allwidth = $("#state1").contents().find('#WIDTH_SETS_ID').val();
    var count = TOTAL_PAINTING;
    var count1 = $("#state1").contents().find('#MOVABLE_PAINTING_ID').val();
    var countW = $("#state1").contents().find('#tab-profil-v-peremyichki-shtuk').val();
    var countH = $("#state1").contents().find('#tab-profil-peremyichki-horizontal-shtuk').val();

    ////////////////////////////////////////////////////////////
    // выборка материалов
    ////////////////////////////////////////////////////////////
    var selectedMaterials1 = [], selectedMaterials2 = [], selectedMaterials3 = [], tmpA1 = [], tmpA2 = [], tmpA3 = [];
    var count00 = frames[0].$('.napolnenie-el .napolnenie-el-tolschina').length;
    for (var i = 0; i < count00; i++) {
        tmpA1 = [];
        if (parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src') != undefined) {
            var str = parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src').toString().substr(8);
            var obj = top.storage.m.filter(function (v) {
                return v.img == str
            })[0];
            tmpA1.push(obj.name);
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-price').html());
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-ploschad').html());
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-vyisota').val());
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-shirina').val());
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.napolnenie-el-tolschina option:selected').text().split(' ')[0]);
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-kollichestvo').val());
            selectedMaterials1.push(tmpA1);
        }
    }
    var count01 = frames[1].$('.napolnenie-el .napolnenie-el-tolschina').length;
    for (var i = 0; i < count01; i++) {
        tmpA2 = [];
        if (parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src') != undefined) {
            var str = parentM.s2.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src').toString().substr(8);
            var obj = top.storage.m.filter(function (v) {
                return v.img == str
            })[0];
            tmpA2.push(obj.name);
            tmpA2.push(parentM.s2.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-price').html());
            tmpA2.push(parentM.s2.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-ploschad').html());
            tmpA2.push(parentM.s2.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-vyisota').val());
            tmpA2.push(parentM.s2.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-shirina').val());
            tmpA2.push(parentM.s2.$('.napolnenie-el:eq(' + i + ')').find('.napolnenie-el-tolschina option:selected').text().split(' ')[0]);
            tmpA2.push(parentM.s2.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-kollichestvo').val());
            selectedMaterials2.push(tmpA2);
        }
    }
    var count02 = frames[2].$('.napolnenie-el .napolnenie-el-tolschina').length;
    for (var i = 0; i < count02; i++) {
        tmpA3 = [];
        if (parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src') != undefined) {
            var str = parentM.s3.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src').toString().substr(8);
            var obj = top.storage.m.filter(function (v) {
                return v.img == str
            })[0];
            tmpA3.push(obj.name);
            tmpA3.push(parentM.s3.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-price').html());
            tmpA3.push(parentM.s3.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-ploschad').html());
            tmpA3.push(parentM.s3.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-vyisota').val());
            tmpA3.push(parentM.s3.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-shirina').val());
            tmpA3.push(parentM.s3.$('.napolnenie-el:eq(' + i + ')').find('.napolnenie-el-tolschina option:selected').text().split(' ')[0]);
            tmpA3.push(parentM.s3.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-kollichestvo').val());
            selectedMaterials3.push(tmpA3);
        }
    }


    var fotoNames = [];
    fotoNames.push(window.imagesPDF[0]);
    fotoNames.push(window.imagesPDF[1]);

////////////////////////////////////////////////////////////
// выборка фурнитуры 1
////////////////////////////////////////////////////////////
    var selectedFurnitura = [];
    var sf0 = [];
    var sf1 = [];
    var sf2 = [];
    var sf3 = [];
    if (furnituraSelect == 1) {
        sf0[0] = checkF("razdvizhnyie-mehanizmyi-select", 1);
        sf0[1] = checkF("mehanizm-sinhronizacii-select", 1);
        sf0[2] = checkF("naprav-select", 1);
        sf0[3] = checkF("napravn-select", 1);
        sf0[4] = checkF("vid-kreplenia-naprav-select", 1);
        sf0[5] = checkF("povodok-select", 1);
        sf0[6] = checkF("mehanizm-teleskop-select", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').html());
        sf1[1] = parseInt($("#state1").contents().find('.tab-content .mehanizm-sinhronizatsii .price').html());
        sf1[2] = parseInt($("#state1").contents().find('.tab-content .napravlyayuschie .price').html());
        sf1[3] = parseInt($("#state1").contents().find('.tab-content .napravlyayuschien .price').html());
        sf1[4] = parseInt($("#state1").contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').html());
        sf1[5] = parseInt($("#state1").contents().find('.tab-content .povodok .price').html());
        sf1[6] = parseInt($("#state1").contents().find('.tab-content .mehanizm-teleskop .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
        if ($("#state1").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf2[0] = checkF("dovodchik-select", 1);
            sf2[1] = checkF("dek-planka-dlya-profilya-select", 1);
            sf2[2] = checkF("schetochnii-uplotnitel-select", 1);
            sf2[3] = checkF("ruchka-select", 1);
            sf2[4] = checkF("zamok-select", 1);
            sf3[0] = parseInt($("#state1").contents().find('.tab-content .dovodchik .price').html());
            sf3[1] = parseInt($("#state1").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').html());
            sf3[2] = parseInt($("#state1").contents().find('.tab-content .schetochnyiyUplotnitel .price').html());
            sf3[3] = parseInt($("#state1").contents().find('.tab-content .rakovina .price').html());
            sf3[4] = parseInt($("#state1").contents().find('.tab-content .zamok .price').html());
            selectedFurnitura.push(sf2);
            selectedFurnitura.push(sf3);
        }
    } else if (furnituraSelect == 2) {

        sf0[0] = checkF("mehanizm-sinhron-skladnie", 1);
        sf0[1] = checkF("mehanizm-rotornii", 1);
        sf0[2] = checkF("petli-skladnie", 1);
        sf0[3] = checkF("napravlyayuschie-skladnie", 1);
        sf0[4] = checkF("vid-krepleniya-napravlyayuschih-skladnie", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .setSkladnyieMehanizmyi .price').html());
        sf1[1] = parseInt($("#state1").contents().find('.tab-content .mehanizm-rotornii .price').html());
        sf1[2] = parseInt($("#state1").contents().find('.tab-content .petli-skladnie .price').html());
        sf1[3] = parseInt($("#state1").contents().find('.tab-content .napravlyayuschie-skladnie .price').html());
        sf1[4] = parseInt($("#state1").contents().find('#vid-krepleniya-napravlyayuschih-skladnie .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
        if ($("#state1").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf2[0] = checkF("dek-planka-dlya-profilya-skladnie", 1);
            sf2[1] = checkF("ruchka-skladnie", 1);
            sf2[2] = checkF("zamok-skladnie", 1);
            sf2[3] = checkF("schetochnii-uplotnitel-skladnie", 1);
            sf2[4] = checkF("kreplenie-ruchli-skladnie", 1);
            sf3[0] = parseInt($("#state1").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya-skladnie .price').html());
            sf3[1] = parseInt($("#state1").contents().find('.tab-content .rakovina-skladnie .price').html());
            sf3[2] = parseInt($("#state1").contents().find('.tab-content .zamokSkladnyie-skladnie .price').html());
            sf3[3] = parseInt($("#state1").contents().find('.tab-content .schetochnyiyUplotnitel-skladnie .price').html());
            sf3[4] = parseInt($("#state1").contents().find('.tab-content .kreplenieRuchki-skladnie .price').html());
            console.log(sf3);
            selectedFurnitura.push(sf2);
            selectedFurnitura.push(sf3);
        }
    } else if (furnituraSelect == 3) {
        sf0[0] = checkF("petli-raspashnie", 1);
        sf0[1] = checkF("ruchka-raspashnie", 1);
        sf0[2] = checkF("zamok-raspashnie", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .petli-raspashnie .price').html());
        sf1[1] = parseInt($("#state1").contents().find('.tab-content .ruchka-raspashnie .price').html());
        sf1[2] = parseInt($("#state1").contents().find('.tab-content .zamok-raspashnie .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    } else if (furnituraSelect == 4) {
        sf0[0] = checkF("nozhki-mobilnie", 1);
        sf0[1] = checkF("kolesiki-mobilnie", 1);
        sf0[2] = checkF("stoyki-mobilnie", 1);
        sf0[3] = checkF("tipSoedineniyaPoloten-mobilnie", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .nozhki-mobil .price').html());
        sf1[1] = parseInt($("#state1").contents().find('.tab-content .kolesiki-mobilnie .price').html());
        sf1[2] = parseInt($("#state1").contents().find('.tab-content .stoyki-mobil .price').html());
        sf1[3] = parseInt($("#state1").contents().find('.tab-content .tipSoedineniyaPoloten-mobil .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    } else if (furnituraSelect === '0') {
        sf0[0] = checkF("stoiki-stac-select", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .stoiki-stac .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    }
////////////////////////////////////////////////////////////
// выборка фурнитуры 2
////////////////////////////////////////////////////////////
    var selectedFurnitura2 = [];
    var sf20 = [];
    var sf21 = [];
    var sf22 = [];
    var sf23 = [];
    if (furnituraSelect == 1) {
        sf20[0] = checkF("razdvizhnyie-mehanizmyi-select", 2);
        sf20[1] = checkF("mehanizm-sinhronizacii-select", 2);
        sf20[2] = checkF("naprav-select", 2);
        sf20[3] = checkF("napravn-select", 2);
        sf20[4] = checkF("vid-kreplenia-naprav-select", 2);
        sf20[5] = checkF("povodok-select", 2);
        sf20[6] = checkF("mehanizm-teleskop-select", 1);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').html());
        sf21[1] = parseInt($("#state2").contents().find('.tab-content .mehanizm-sinhronizatsii .price').html());
        sf21[2] = parseInt($("#state2").contents().find('.tab-content .napravlyayuschie .price').html());
        sf21[3] = parseInt($("#state2").contents().find('.tab-content .napravlyayuschien .price').html());
        sf21[4] = parseInt($("#state2").contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').html());
        sf21[5] = parseInt($("#state2").contents().find('.tab-content .povodok .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
        if ($("#state2").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf22[0] = checkF("dovodchik-select", 2);
            sf22[1] = checkF("dek-planka-dlya-profilya-select", 2);
            sf22[2] = checkF("schetochnii-uplotnitel-select", 2);
            sf22[3] = checkF("ruchka-select", 2);
            sf22[4] = checkF("zamok-select", 2);
            sf23[0] = parseInt($("#state2").contents().find('.tab-content .dovodchik .price').html());
            sf23[1] = parseInt($("#state2").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').html());
            sf23[2] = parseInt($("#state2").contents().find('.tab-content .schetochnyiyUplotnitel .price').html());
            sf23[3] = parseInt($("#state2").contents().find('.tab-content .rakovina .price').html());
            sf23[4] = parseInt($("#state2").contents().find('.tab-content .zamok .price').html());
            selectedFurnitura2.push(sf22);
            selectedFurnitura2.push(sf23);
        }
    } else if (furnituraSelect == 2) {
        sf20[0] = checkF("mehanizm-sinhron-skladnie", 2);
        sf20[1] = checkF("mehanizm-rotornii", 2);
        sf20[2] = checkF("petli-skladnie", 2);
        sf20[3] = checkF("napravlyayuschie-skladnie", 2);
        sf20[4] = checkF("napravlyayuschien-skladnie", 2);
        sf20[5] = checkF("vid-krepleniya-napravlyayuschih-skladnie", 2);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .setSkladnyieMehanizmyi .price').html());
        sf21[1] = parseInt($("#state2").contents().find('.tab-content .mehanizm-rotornii .price').html());
        sf21[2] = parseInt($("#state2").contents().find('.tab-content .petli-skladnie .price').html());
        sf21[3] = parseInt($("#state2").contents().find('.tab-content .napravlyayuschie-skladnie .price').html());
        sf21[4] = parseInt($("#state2").contents().find('.tab-content .napravlyayuschien-skladnie .price').html());
        sf21[5] = parseInt($("#state2").contents().find('.tab-content .vidKrepleniya-skladnie .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
        if ($("#state2").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf22[0] = checkF("dek-planka-dlya-profilya-skladnie", 2);
            sf22[1] = checkF("ruchka-skladnie", 2);
            sf22[2] = checkF("zamok-skladnie", 2);
            sf23[0] = parseInt($("#state2").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya-skladnie .price').html());
            sf23[1] = parseInt($("#state2").contents().find('.tab-content .rakovina-skladnie .price').html());
            sf23[2] = parseInt($("#state2").contents().find('.tab-content .zamokSkladnyie-skladnie .price').html());
            selectedFurnitura2.push(sf22);
            selectedFurnitura2.push(sf23);
        }
    } else if (furnituraSelect == 3) {
        sf20[0] = checkF("petli-raspashnie", 2);
        sf20[1] = checkF("ruchka-raspashnie", 2);
        sf20[2] = checkF("zamok-raspashnie", 2);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .petli-raspashnie .price').html());
        sf21[1] = parseInt($("#state2").contents().find('.tab-content .ruchka-raspashnie .price').html());
        sf21[2] = parseInt($("#state2").contents().find('.tab-content .zamok-raspashnie .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    } else if (furnituraSelect == 4) {
        sf20[0] = checkF("nozhki-mobilnie", 2);
        sf20[1] = checkF("kolesiki-mobilnie", 2);
        sf20[2] = checkF("stoyki-mobilnie", 2);
        sf20[3] = checkF("tipSoedineniyaPoloten-mobilnie", 2);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .nozhki-mobil .price').html());
        sf21[1] = parseInt($("#state2").contents().find('.tab-content .kolesiki-mobilnie .price').html());
        sf21[2] = parseInt($("#state2").contents().find('.tab-content .stoyki-mobil .price').html());
        sf21[3] = parseInt($("#state2").contents().find('.tab-content .tipSoedineniyaPoloten-mobil .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    } else if (furnituraSelect === '0') {
        sf20[0] = checkF("stoiki-stac-select", 2);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .stoiki-stac .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    }
////////////////////////////////////////////////////////////
// выборка фурнитуры 3
////////////////////////////////////////////////////////////
    var selectedFurnitura3 = [];
    var sf30 = [];
    var sf31 = [];
    var sf32 = [];
    var sf33 = [];
    if (furnituraSelect == 1) {
        sf30[0] = checkF("razdvizhnyie-mehanizmyi-select", 3);
        sf30[1] = checkF("mehanizm-sinhronizacii-select", 3);
        sf30[2] = checkF("naprav-select", 3);
        sf30[3] = checkF("napravn-select", 3);
        sf30[4] = checkF("vid-kreplenia-naprav-select", 3);
        sf30[5] = checkF("povodok-select", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').html());
        sf31[1] = parseInt($("#state3").contents().find('.tab-content .mehanizm-sinhronizatsii .price').html());
        sf31[2] = parseInt($("#state3").contents().find('.tab-content .napravlyayuschie .price').html());
        sf31[3] = parseInt($("#state3").contents().find('.tab-content .napravlyayuschien .price').html());
        sf31[4] = parseInt($("#state3").contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').html());
        sf31[5] = parseInt($("#state3").contents().find('.tab-content .povodok .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
        if ($("#state3").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf32[0] = checkF("dovodchik-select", 3);
            sf32[1] = checkF("dek-planka-dlya-profilya-select", 3);
            sf32[2] = checkF("schetochnii-uplotnitel-select", 3);
            sf32[3] = checkF("ruchka-select", 3);
            sf32[4] = checkF("zamok-select", 3);
            sf33[0] = parseInt($("#state3").contents().find('.tab-content .dovodchik .price').html());
            sf33[1] = parseInt($("#state3").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').html());
            sf33[2] = parseInt($("#state3").contents().find('.tab-content .schetochnyiyUplotnitel .price').html());
            sf33[3] = parseInt($("#state3").contents().find('.tab-content .rakovina .price').html());
            sf33[4] = parseInt($("#state3").contents().find('.tab-content .zamok .price').html());
            selectedFurnitura3.push(sf32);
            selectedFurnitura3.push(sf33);
        }
    } else if (furnituraSelect == 2) {
        sf30[0] = checkF("mehanizm-sinhron-skladnie", 3);
        sf30[1] = checkF("mehanizm-rotornii", 3);
        sf30[2] = checkF("petli-skladnie", 3);
        sf30[3] = checkF("napravlyayuschie-skladnie", 3);
        sf30[4] = checkF("napravlyayuschien-skladnie", 3);
        sf30[5] = checkF("vid-krepleniya-napravlyayuschih-skladnie", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .setSkladnyieMehanizmyi .price').html());
        sf31[1] = parseInt($("#state3").contents().find('.tab-content .mehanizm-rotornii .price').html());
        sf31[2] = parseInt($("#state3").contents().find('.tab-content .petli-skladnie .price').html());
        sf31[3] = parseInt($("#state3").contents().find('.tab-content .napravlyayuschie-skladnie .price').html());
        sf31[4] = parseInt($("#state3").contents().find('.tab-content .napravlyayuschien-skladnie .price').html());
        sf31[5] = parseInt($("#state3").contents().find('.tab-content .vidKrepleniya-skladnie .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
        if ($("#state3").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf32[0] = checkF("dek-planka-dlya-profilya-skladnie", 3);
            sf32[1] = checkF("ruchka-skladnie", 3);
            sf32[2] = checkF("zamok-skladnie", 3);
            sf33[0] = parseInt($("#state3").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya-skladnie .price').html());
            sf33[1] = parseInt($("#state3").contents().find('.tab-content .rakovina-skladnie .price').html());
            sf33[2] = parseInt($("#state3").contents().find('.tab-content .zamokSkladnyie-skladnie .price').html());
            selectedFurnitura3.push(sf32);
            selectedFurnitura3.push(sf33);
        }
    } else if (furnituraSelect == 3) {
        sf30[0] = checkF("petli-raspashnie", 3);
        sf30[1] = checkF("ruchka-raspashnie", 3);
        sf30[2] = checkF("zamok-raspashnie", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .petli-raspashnie .price').html());
        sf31[1] = parseInt($("#state3").contents().find('.tab-content .ruchka-raspashnie .price').html());
        sf31[2] = parseInt($("#state3").contents().find('.tab-content .zamok-raspashnie .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    } else if (furnituraSelect == 4) {
        sf30[0] = checkF("nozhki-mobilnie", 3);
        sf30[1] = checkF("kolesiki-mobilnie", 3);
        sf30[2] = checkF("stoyki-mobilnie", 3);
        sf30[3] = checkF("tipSoedineniyaPoloten-mobilnie", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .nozhki-mobil .price').html());
        sf31[1] = parseInt($("#state3").contents().find('.tab-content .kolesiki-mobilnie .price').html());
        sf31[2] = parseInt($("#state3").contents().find('.tab-content .stoyki-mobil .price').html());
        sf31[3] = parseInt($("#state3").contents().find('.tab-content .tipSoedineniyaPoloten-mobil .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    } else if (furnituraSelect === '0') {
        sf30[0] = checkF("stoiki-stac-select", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .stoiki-stac .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    }

////////////////////////////////////////////////////////////
// выборка альтернативной комплектации
////////////////////////////////////////////////////////////
    var i, altFi = [], altFa = [], altPi = [], altPa = [], altMi = [], altMa = [], altSi = [], altSa = [];
    for (i = storage.m.length - 1; i >= 0; i--) {
        if (storage.m[i]['img'] != parentM.s1.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != parentM.s2.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != parentM.s3.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src')) {
            altMi.push(storage.m[i]['id']);
            break;
        }
    }
    for (i = 0; i < storage.m.length; i++) {
        if (storage.m[i]['img'] != parentM.s1.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != parentM.s2.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != parentM.s3.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src')) {
            altMa.push(storage.m[i]['id']);
            break;
        }
    }
    for (i = 0; i < storage.p.length; i++) {
        if (storage.p[i]['name'] != parentM.s1.$('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != parentM.s2.$('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != parentM.s3.$('#KARKAS-NAME').html()) {
            altPi.push(storage.p[i]['id']);
            break;
        }
    }
    for (i = storage.p.length - 1; i >= 0; i--) {
        if (storage.p[i]['name'] != parentM.s1.$('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != parentM.s2.$('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != parentM.s3.$('#KARKAS-NAME').html()) {
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
    var selectedKarkas = [];
    var selectedKarkasSupp = [];
    if (frames[0].info.array) {
        let arr = frames[0].info.getArrayAllPaint();
        console.log(arr);
        arr.forEach(function (v) {
            let tmpArr = [];
            let item =top.storage.TS.find((s)=>s.id===v.id);
            tmpArr.push(v.id);
            tmpArr.push(item.name);
            tmpArr.push(v.name);
            tmpArr.push(v.img);
            tmpArr.push(v.sum);
            tmpArr.push(item.typeprice === 'Поштучно' || item.typeprice === 'Поштучно c автоматическим подсчетом' ? 1:undefined);
            selectedKarkasSupp.push(tmpArr);
        })
    } else {
        $("#state1").contents().find('.nsupp').each(function () {


            if ($("#state1").contents().find('#selectSupplements' + $(this).val()).val() == 'Есть') {
                var tmpArr = [];
                tmpArr.push($(this).val());
                tmpArr.push($("#state1").contents().find('.nsupp' + $(this).val()).val());
                tmpArr.push($("#state1").contents().find('#textSupplements' + $(this).val()).html());
                tmpArr.push($("#state1").contents().find('#imageSupplements' + $(this).val()).attr('src'));
                tmpArr.push($("#state1").contents().find('#priceSupplements' + $(this).val()).html());
                tmpArr.push($("#state1").contents().find('#CountSupplements' + $(this).val()).val());
                console.log(tmpArr);
                selectedKarkasSupp.push(tmpArr);
            }
        });
    }
    TOTAL_PAINTING = parseInt($("#state1").contents().find('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)) TOTAL_PAINTING = 0;
    selectedKarkas.push($("#state1").contents().find('#KARKAS-NAME').html());
    selectedKarkas.push($("#state1").contents().find('#KARKAS-PRICE').html());
    selectedKarkas.push(((parseInt($("#state1").contents().find('#HIGHT_SETS_ID').val())) / 1000).toFixed(1));
    selectedKarkas.push(selectedKarkasSupp);
    selectedKarkas.push($("#state1").contents().find('.TAB-PROFIL-KARKAS-PRICE').html());
////////////////////////////////////////////////////////////
// выборка каркаса 2
////////////////////////////////////////////////////////////
    var selectedKarkas2 = [];
    var selectedKarkas2Supp = [];
    if (frames[1].info.array) {
        let arr = frames[1].info.getArrayAllPaint();
        console.log(arr);
        arr.forEach(function (v) {
            let tmpArr = [];
            let item =top.storage.TS.find((s)=>s.id===v.id);
            tmpArr.push(v.id);
            tmpArr.push(item.name);
            tmpArr.push(v.name);
            tmpArr.push(v.img);
            tmpArr.push(v.sum);
            tmpArr.push(item.typeprice === 'Поштучно' || item.typeprice === 'Поштучно c автоматическим подсчетом' ? 1:undefined);
            selectedKarkas2Supp.push(tmpArr);
        })
    } else {
        $("#state2").contents().find('.nsupp').each(function () {
            if ($("#state2").contents().find('#selectSupplements' + $(this).val()).val() == 'Есть') {
                var tmpArr = [];
                tmpArr.push($(this).val());
                tmpArr.push($("#state2").contents().find('.nsupp' + $(this).val()).val());
                tmpArr.push($("#state2").contents().find('#textSupplements' + $(this).val()).html());
                tmpArr.push($("#state2").contents().find('#imageSupplements' + $(this).val()).attr('src'));
                tmpArr.push($("#state2").contents().find('#priceSupplements' + $(this).val()).html());
                tmpArr.push($("#state2").contents().find('#CountSupplements' + $(this).val()).val());
                selectedKarkas2Supp.push(tmpArr);
            }
        });
    }
    TOTAL_PAINTING = parseInt($("#state2").contents().find('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)) TOTAL_PAINTING = 0;
    selectedKarkas2.push($("#state2").contents().find('#KARKAS-NAME').html());
    selectedKarkas2.push($("#state2").contents().find('#KARKAS-PRICE').html());
    selectedKarkas2.push(((parseInt($("#state2").contents().find('#HIGHT_SETS_ID').val()) * parseInt($("#state2").contents().find('#WIDTH_SETS_ID').val())) / 1000000).toFixed(1));
    selectedKarkas2.push(selectedKarkas2Supp);
    selectedKarkas2.push($("#state2").contents().find('.TAB-PROFIL-KARKAS-PRICE').html());
////////////////////////////////////////////////////////////
// выборка каркаса 3
////////////////////////////////////////////////////////////
    var selectedKarkas3 = [];
    var selectedKarkas3Supp = [];
    if (frames[2].info.array) {
        let arr = frames[2].info.getArrayAllPaint();
        console.log(arr);
        arr.forEach(function (v) {
            let tmpArr = [];
            let item =top.storage.TS.find((s)=>s.id===v.id);
            tmpArr.push(v.id);
            tmpArr.push(item.name);
            tmpArr.push(v.name);
            tmpArr.push(v.img);
            tmpArr.push(v.sum);
            tmpArr.push(item.typeprice === 'Поштучно' || item.typeprice === 'Поштучно c автоматическим подсчетом' ? 1:undefined);
            selectedKarkas3Supp.push(tmpArr);
        })
    } else {
    $("#state3").contents().find('.nsupp').each(function () {
        if ($("#state3").contents().find('#selectSupplements' + $(this).val()).val() == 'Есть') {
            var tmpArr = [];
            tmpArr.push($(this).val());
            tmpArr.push($("#state3").contents().find('.nsupp' + $(this).val()).val());
            tmpArr.push($("#state3").contents().find('#textSupplements' + $(this).val()).html());
            tmpArr.push($("#state3").contents().find('#imageSupplements' + $(this).val()).attr('src'));
            tmpArr.push($("#state3").contents().find('#priceSupplements' + $(this).val()).html());
            tmpArr.push($("#state3").contents().find('#CountSupplements' + $(this).val()).val());
            selectedKarkas3Supp.push(tmpArr);
        }
    });
    }
    TOTAL_PAINTING = parseInt($("#state3").contents().find('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)) TOTAL_PAINTING = 0;
    selectedKarkas3.push($("#state3").contents().find('#KARKAS-NAME').html());
    selectedKarkas3.push($("#state3").contents().find('#KARKAS-PRICE').html());
    selectedKarkas3.push(((parseInt($("#state3").contents().find('#HIGHT_SETS_ID').val()) * parseInt($("#state3").contents().find('#WIDTH_SETS_ID').val())) / 1000000).toFixed(1));
    selectedKarkas3.push(selectedKarkas3Supp);
    selectedKarkas3.push($("#state3").contents().find('.TAB-PROFIL-KARKAS-PRICE').html());

////////////////////////////////////////////////////////////
// выборка перемычек
////////////////////////////////////////////////////////////
    var pmh = [], pmh1 = {}, pmh2 = {}, pmh3 = {};
    pmh1['n'] = parentM.s1.$('#HORIZONTAL-PEREMOCHKI-NAME').html();
    pmh1['p'] = parentM.s1.$('#HORIZONTAL-PEREMOCHKI-PRICE').html();
    pmh2['n'] = parentM.s2.$('#HORIZONTAL-PEREMOCHKI-NAME').html();
    pmh2['p'] = parentM.s2.$('#HORIZONTAL-PEREMOCHKI-PRICE').html();
    pmh3['n'] = parentM.s3.$('#HORIZONTAL-PEREMOCHKI-NAME').html();
    pmh3['p'] = parentM.s3.$('#HORIZONTAL-PEREMOCHKI-PRICE').html();
    pmh.push(pmh1);
    pmh.push(pmh2);
    pmh.push(pmh3);
    var pmv = [], pmv1 = {}, pmv2 = {}, pmv3 = {};
    pmv1['n'] = parentM.s1.$('#VERTIKALNUE-PEREMOCHKI-NAME').html();
    pmv1['p'] = parentM.s1.$('#VERTIKALNUE-PEREMOCHKI-PRICE').html();
    pmv2['n'] = parentM.s2.$('#VERTIKALNUE-PEREMOCHKI-NAME').html();
    pmv2['p'] = parentM.s2.$('#VERTIKALNUE-PEREMOCHKI-PRICE').html();
    pmv3['n'] = parentM.s3.$('#VERTIKALNUE-PEREMOCHKI-NAME').html();
    pmv3['p'] = parentM.s3.$('#VERTIKALNUE-PEREMOCHKI-PRICE').html();
    pmv.push(pmv1);
    pmv.push(pmv2);
    pmv.push(pmv3);

////////////////////////////////////////////////////////////
// выборка декора
////////////////////////////////////////////////////////////
    var selectedDecor = [];
    selectedDecor.push($("#state1").contents().find('#pokraskaTypeAndName').val());
    selectedDecor.push($("#state1").contents().find('.TAB-POKRASKA-PRICE').html());
    var selectedDecor2 = [];
    selectedDecor2.push($("#state2").contents().find('#pokraskaTypeAndName').val());
    selectedDecor2.push($("#state2").contents().find('.TAB-POKRASKA-PRICE').html());
    var selectedDecor3 = [];
    selectedDecor3.push($("#state3").contents().find('#pokraskaTypeAndName').val());
    selectedDecor3.push($("#state3").contents().find('.TAB-POKRASKA-PRICE').html());

    var rub = [], rub1 = {}, rub2 = {}, rub3 = {};
    rub1['i'] = parentM.s1.$('.proizvaodstvoTo input').val();
    rub1['m'] = parentM.s1.$('.montazhTo input').val();
    rub1['d'] = parentM.s1.$('.dostavkaTo input').val();
    rub1['s'] = parentM.s1.$('.srochnostTo input').val();
    rub1['p'] = parentM.s1.$('.nashProtsentTo input').val();
    rub1['z'] = parentM.s1.$('.nashZamerTo input').val();
    rub2['i'] = parentM.s2.$('.proizvaodstvoTo input').val();
    rub2['m'] = parentM.s2.$('.montazhTo input').val();
    rub2['d'] = parentM.s2.$('.dostavkaTo input').val();
    rub2['s'] = parentM.s2.$('.srochnostTo input').val();
    rub2['p'] = parentM.s2.$('.nashProtsentTo input').val();
    rub2['z'] = parentM.s2.$('.nashZamerTo input').val();
    rub3['i'] = parentM.s3.$('.proizvaodstvoTo input').val();
    rub3['m'] = parentM.s3.$('.montazhTo input').val();
    rub3['d'] = parentM.s3.$('.dostavkaTo input').val();
    rub3['s'] = parentM.s3.$('.srochnostTo input').val();
    rub3['p'] = parentM.s3.$('.nashProtsentTo input').val();
    rub3['z'] = parentM.s3.$('.nashZamerTo input').val();
    rub.push(rub1);
    rub.push(rub2);
    rub.push(rub3);

    var per = [], per1 = {}, per2 = {}, per3 = {};
    per1['i'] = parentM.s1.$('.proizvaodstvoIn input').val();
    per1['m'] = parentM.s1.$('.montazhIn input').val();
    per1['d'] = parentM.s1.$('.dostavkaIn input').val();
    per1['s'] = parentM.s1.$('.srochnostIn input').val();
    per1['p'] = parentM.s1.$('.nashProtsentIn input').val();
    per1['z'] = parentM.s1.$('.nashZamerIn input').val();
    per2['i'] = parentM.s2.$('.proizvaodstvoIn input').val();
    per2['m'] = parentM.s2.$('.montazhIn input').val();
    per2['d'] = parentM.s2.$('.dostavkaIn input').val();
    per2['s'] = parentM.s2.$('.srochnostIn input').val();
    per2['p'] = parentM.s2.$('.nashProtsentIn input').val();
    per2['z'] = parentM.s2.$('.nashZamerIn input').val();
    per3['i'] = parentM.s3.$('.proizvaodstvoIn input').val();
    per3['m'] = parentM.s3.$('.montazhIn input').val();
    per3['d'] = parentM.s3.$('.dostavkaIn input').val();
    per3['s'] = parentM.s3.$('.srochnostIn input').val();
    per3['p'] = parentM.s3.$('.nashProtsentIn input').val();
    per3['z'] = parentM.s3.$('.nashZamer input').val();
    per.push(per1);
    per.push(per2);
    per.push(per3);

    var sum = [], sum1 = {}, sum2 = {}, sum3 = {};
    sum1['p'] = parentM.s1.$('.TAB-PROFIL-PRICE').html();
    sum1['a'] = parentM.s1.$('.price-res1').html();
    sum1['d'] = parentM.s1.$('.TAB-POKRASKA-PRICE').html();
    sum1['m'] = parentM.s1.$('#Pnap').html();
    sum1['f'] = parentM.s1.$('.furnitura-price .price').html();
    sum1['i'] = parentM.s1.$('.summaSParametrami .price').html();
    sum1['o'] = parentM.s1.$('.summaBezParametrov .price').html();
    sum2['p'] = parentM.s2.$('.TAB-PROFIL-PRICE').html();
    sum2['a'] = parentM.s2.$('.price-res1').html();
    sum2['d'] = parentM.s2.$('.TAB-POKRASKA-PRICE').html();
    sum2['m'] = parentM.s2.$('#Pnap').html();
    sum2['f'] = parentM.s2.$('.furnitura-price .price').html();
    sum2['i'] = parentM.s2.$('.summaSParametrami .price').html();
    sum2['o'] = parentM.s2.$('.summaBezParametrov .price').html();
    sum3['p'] = parentM.s3.$('.TAB-PROFIL-PRICE').html();
    sum3['a'] = parentM.s3.$('.price-res1').html();
    sum3['d'] = parentM.s3.$('.TAB-POKRASKA-PRICE').html();
    sum3['m'] = parentM.s3.$('#Pnap').html();
    sum3['f'] = parentM.s3.$('.furnitura-price .price').html();
    sum3['i'] = parentM.s3.$('.summaSParametrami .price').html();
    sum3['o'] = parentM.s3.$('.summaBezParametrov .price').html();
    sum.push(sum1);
    sum.push(sum2);
    sum.push(sum3);

    var setsNumber = parseInt($("#state1").contents().find('#NUMBER_SETS_ID').val());
    var orderNumber = $('#orderNumber').val();
    var calcmanager = $('#calcmanager').val();

// фурнитура ручка
    var AksessuaryRuchkaKollichestvo1, AksessuaryRuchkaKollichestvo2, AksessuaryRuchkaKollichestvo3;
    if ($("#state1").contents().find("#ruchka-select .red").attr("disabled") == undefined)
        AksessuaryRuchkaKollichestvo1 = $("#state1").contents().find("#ruchka-select-count").val();
    else
        AksessuaryRuchkaKollichestvo1 = 0;
    if ($("#state2").contents().find("#ruchka-select .red").attr("disabled") == undefined)
        AksessuaryRuchkaKollichestvo2 = $("#state2").contents().find("#ruchka-select-count").val();
    else
        AksessuaryRuchkaKollichestvo2 = 0;
    if ($("#state3").contents().find("#ruchka-select .red").attr("disabled") == undefined)
        AksessuaryRuchkaKollichestvo3 = $("#state3").contents().find("#ruchka-select-count").val();
    else
        AksessuaryRuchkaKollichestvo3 = 0;
// фурнитура ручка
//Универсальная фурнитура
    var arayN0 = []
    for (i = 1; i <= 6; i++)
        arayN0.push($("#state1").contents().find('*[data-material-el-id="' + i + '"]').find('#namber').text());

    var arayN1 = []
    for (i = 1; i <= 6; i++)
        arayN1.push($("#state2").contents().find('*[data-material-el-id="' + i + '"]').find('#namber').text());

    var arayN2 = []
    for (i = 1; i <= 6; i++)
        arayN2.push($("#state3").contents().find('*[data-material-el-id="' + i + '"]').find('#namber').text());

    var arrayNamber = [arayN0, arayN1, arayN2];

    var arrayFurn0 = $("#state1").contents().find(".newfurn");
    var arrayFurn1 = $("#state2").contents().find(".newfurn");
    var arrayFurn2 = $("#state3").contents().find(".newfurn");

    var arrF0 = [];
    var arrF1 = [];
    var arrF2 = [];

    for (var i = 0; i < arrayFurn0.length / 2; i++) {
        var obj = {
            type: $(arrayFurn0[i]).find('h3').text(),
            name: $(arrayFurn0[i]).find('.text').text(),
            price: $(arrayFurn0[i]).find('.price').text()
        }
        arrF0.push(obj);
    }
    for (var i = 0; i < arrayFurn1.length / 2; i++) {
        var obj = {
            type: $(arrayFurn1[i]).find('h3').text(),
            name: $(arrayFurn1[i]).find('.text').text(),
            price: $(arrayFurn1[i]).find('.price').text()
        }
        arrF1.push(obj);
    }
    for (var i = 0; i < arrayFurn2.length / 2; i++) {
        var obj = {
            type: $(arrayFurn2[i]).find('h3').text(),
            name: $(arrayFurn2[i]).find('.text').text(),
            price: $(arrayFurn2[i]).find('.price').text()
        }
        arrF2.push(obj);
    }


////////////////////////////////////////////////////////////
// формирование url
////////////////////////////////////////////////////////////
    var url = {
        'arrayNamber': JSON.stringify(arrayNamber),
        'furnitura-select': furnituraSelect,
        'Allheight': Allheight,
        'Allwidth': Allwidth,
        'count': count,
        'count1': count1,
        'countW': countW,
        'countH': countH,
        'priceFull1': $('*[data-slider-id="1"] .price span').html(),
        'priceFull2': $('*[data-slider-id="2"] .price span').html(),
        'priceFull3': $('*[data-slider-id="3"] .price span').html(),
        'AksessuaryRuchkaKollichestvo1': AksessuaryRuchkaKollichestvo1,
        'AksessuaryRuchkaKollichestvo2': AksessuaryRuchkaKollichestvo2,
        'AksessuaryRuchkaKollichestvo3': AksessuaryRuchkaKollichestvo3,
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
        'arrF0': JSON.stringify(arrF0),
        'arrF1': JSON.stringify(arrF1),
        'arrF2': JSON.stringify(arrF2),
        'contacts': JSON.stringify({
            name: $('#managertext').val(),
            tel: $('#teltext').val(),
            mail: $('#mailtext').val()
        }),
    };

    $.post('./php/longurl.php?n=' + window.id_pdf, 'url=' + JSON.stringify(url), function () {
        window.open('./html2pdf.php?n=' + window.id_pdf, '_blank');
    });
}


function SaveToPdfToFile() {
    function checkF(arg, s) {
        return (parentM["s" + s].$("#" + arg + " .furnituraElFlag").val() == 1) ? parentM["s" + s].$("#" + arg + " h4.text").html() : "";
    }

    function checkFN(arg, s) {
        return parentM["s" + s].$("#" + arg + " h4.text").html();
    }

    var TOTAL_PAINTING = parseInt($("#state1").contents().find('#TOTAL_PAINTING_ID').val());
    if ($("#state1").contents().find('#TOTAL_PAINTING_ID').val() === '') TOTAL_PAINTING = 1;
    var furnituraSelect = $("#state1").contents().find("#TYPE_BAFFLE_ID").val();
    var Allheight = $("#state1").contents().find('#HIGHT_SETS_ID').val();
    var Allwidth = $("#state1").contents().find('#WIDTH_SETS_ID').val();
    var count = TOTAL_PAINTING;
    var count1 = $("#state1").contents().find('#MOVABLE_PAINTING_ID').val();
    var countW = $("#state1").contents().find('#tab-profil-v-peremyichki-shtuk').val();
    var countH = $("#state1").contents().find('#tab-profil-peremyichki-horizontal-shtuk').val();

    var selectedMaterials1 = [], selectedMaterials2 = [], selectedMaterials3 = [], tmpA1 = [], tmpA2 = [], tmpA3 = [];
    var count00 = frames[0].$('.napolnenie-el .napolnenie-el-tolschina').length;
    for (var i = 0; i < count00; i++) {
        tmpA1 = [];
        if (parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src') != undefined) {
            var str = parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src').toString().substr(8);
            var obj = top.storage.m.filter(function (v) {
                return v.img == str
            })[0];
            tmpA1.push(obj.name);
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-price').html());
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-ploschad').html());
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-vyisota').val());
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-shirina').val());
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.napolnenie-el-tolschina option:selected').text().split(' ')[0]);
            tmpA1.push(parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-kollichestvo').val());
            selectedMaterials1.push(tmpA1);
        }
    }
    var count01 = frames[1].$('.napolnenie-el .napolnenie-el-tolschina').length;
    for (var i = 0; i < count01; i++) {
        tmpA2 = [];
        if (parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src') != undefined) {
            var str = frames[1].$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src').toString().substr(8);
            var obj = top.storage.m.filter(function (v) {
                return v.img == str
            })[0];
            tmpA2.push(obj.name);
            tmpA2.push(frames[1].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-price').html());
            tmpA2.push(frames[1].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-ploschad').html());
            tmpA2.push(frames[1].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-vyisota').val());
            tmpA2.push(frames[1].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-shirina').val());
            tmpA2.push(frames[1].$('.napolnenie-el:eq(' + i + ')').find('.napolnenie-el-tolschina option:selected').text().split(' ')[0]);
            tmpA2.push(frames[1].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-kollichestvo').val());
            selectedMaterials2.push(tmpA2);
        }
    }
    var count02 = frames[2].$('.napolnenie-el .napolnenie-el-tolschina').length;
    for (var i = 0; i < count02; i++) {
        tmpA3 = [];
        if (parentM.s1.$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src') != undefined) {
            var str = frames[2].$('.napolnenie-el:eq(' + i + ')').find('#open-material-img').attr('src').toString().substr(8);
            var obj = top.storage.m.filter(function (v) {
                return v.img == str
            })[0];
            tmpA3.push(obj.name);
            tmpA3.push(frames[2].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-price').html());
            tmpA3.push(frames[2].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-ploschad').html());
            tmpA3.push(frames[2].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-vyisota').val());
            tmpA3.push(frames[2].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-shirina').val());
            tmpA3.push(frames[2].$('.napolnenie-el:eq(' + i + ')').find('.napolnenie-el-tolschina option:selected').text().split(' ')[0]);
            tmpA3.push(frames[2].$('.napolnenie-el:eq(' + i + ')').find('.tab-napolnenie-kollichestvo').val());
            selectedMaterials3.push(tmpA3);
        }
    }

    var fotoNames = [];
    fotoNames.push(window.imagesPDF[0]);
    fotoNames.push(window.imagesPDF[1]);

    ////////////////////////////////////////////////////////////
    // выборка фурнитуры 1
    ////////////////////////////////////////////////////////////
    var selectedFurnitura = [];
    var sf0 = [];
    var sf1 = [];
    var sf2 = [];
    var sf3 = [];
    if (furnituraSelect == 1) {
        sf0[0] = checkF("razdvizhnyie-mehanizmyi-select", 1);
        sf0[1] = checkF("mehanizm-sinhronizacii-select", 1);
        sf0[2] = checkF("naprav-select", 1);
        sf0[3] = checkF("napravn-select", 1);
        sf0[4] = checkF("vid-kreplenia-naprav-select", 1);
        sf0[5] = checkF("povodok-select", 1);
        sf0[6] = checkF("mehanizm-teleskop-select", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').html());
        sf1[1] = parseInt($("#state1").contents().find('.tab-content .mehanizm-sinhronizatsii .price').html());
        sf1[2] = parseInt($("#state1").contents().find('.tab-content .napravlyayuschie .price').html());
        sf1[3] = parseInt($("#state1").contents().find('.tab-content .napravlyayuschien .price').html());
        sf1[4] = parseInt($("#state1").contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').html());
        sf1[5] = parseInt($("#state1").contents().find('.tab-content .povodok .price').html());
        sf1[6] = parseInt($("#state1").contents().find('.tab-content .mehanizm-teleskop .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
        if ($("#state1").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf2[0] = checkF("dovodchik-select", 1);
            sf2[1] = checkF("dek-planka-dlya-profilya-select", 1);
            sf2[2] = checkF("schetochnii-uplotnitel-select", 1);
            sf2[3] = checkF("ruchka-select", 1);
            sf2[4] = checkF("zamok-select", 1);
            sf3[0] = parseInt($("#state1").contents().find('.tab-content .dovodchik .price').html());
            sf3[1] = parseInt($("#state1").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').html());
            sf3[2] = parseInt($("#state1").contents().find('.tab-content .schetochnyiyUplotnitel .price').html());
            sf3[3] = parseInt($("#state1").contents().find('.tab-content .rakovina .price').html());
            sf3[4] = parseInt($("#state1").contents().find('.tab-content .zamok .price').html());
            selectedFurnitura.push(sf2);
            selectedFurnitura.push(sf3);
        }
    } else if (furnituraSelect == 2) {

        sf0[0] = checkF("mehanizm-sinhron-skladnie", 1);
        sf0[1] = checkF("mehanizm-rotornii", 1);
        sf0[2] = checkF("petli-skladnie", 1);
        sf0[3] = checkF("napravlyayuschie-skladnie", 1);
        sf0[4] = checkF("vid-krepleniya-napravlyayuschih-skladnie", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .setSkladnyieMehanizmyi .price').html());
        sf1[1] = parseInt($("#state1").contents().find('.tab-content .mehanizm-rotornii .price').html());
        sf1[2] = parseInt($("#state1").contents().find('.tab-content .petli-skladnie .price').html());
        sf1[3] = parseInt($("#state1").contents().find('.tab-content .napravlyayuschie-skladnie .price').html());
        sf1[4] = parseInt($("#state1").contents().find('#vid-krepleniya-napravlyayuschih-skladnie .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
        if ($("#state1").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf2[0] = checkF("dek-planka-dlya-profilya-skladnie", 1);
            sf2[1] = checkF("ruchka-skladnie", 1);
            sf2[2] = checkF("zamok-skladnie", 1);
            sf2[3] = checkF("schetochnii-uplotnitel-skladnie", 1);
            sf2[4] = checkF("kreplenie-ruchli-skladnie", 1);
            sf3[0] = parseInt($("#state1").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya-skladnie .price').html());
            sf3[1] = parseInt($("#state1").contents().find('.tab-content .rakovina-skladnie .price').html());
            sf3[2] = parseInt($("#state1").contents().find('.tab-content .zamokSkladnyie-skladnie .price').html());
            sf3[3] = parseInt($("#state1").contents().find('.tab-content .schetochnyiyUplotnitel-skladnie .price').html());
            sf3[4] = parseInt($("#state1").contents().find('.tab-content .kreplenieRuchki-skladnie .price').html());
            console.log(sf3);
            selectedFurnitura.push(sf2);
            selectedFurnitura.push(sf3);
        }
    } else if (furnituraSelect == 3) {
        sf0[0] = checkF("petli-raspashnie", 1);
        sf0[1] = checkF("ruchka-raspashnie", 1);
        sf0[2] = checkF("zamok-raspashnie", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .petli-raspashnie .price').html());
        sf1[1] = parseInt($("#state1").contents().find('.tab-content .ruchka-raspashnie .price').html());
        sf1[2] = parseInt($("#state1").contents().find('.tab-content .zamok-raspashnie .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    } else if (furnituraSelect == 4) {
        sf0[0] = checkF("nozhki-mobilnie", 1);
        sf0[1] = checkF("kolesiki-mobilnie", 1);
        sf0[2] = checkF("stoyki-mobilnie", 1);
        sf0[3] = checkF("tipSoedineniyaPoloten-mobilnie", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .nozhki-mobil .price').html());
        sf1[1] = parseInt($("#state1").contents().find('.tab-content .kolesiki-mobilnie .price').html());
        sf1[2] = parseInt($("#state1").contents().find('.tab-content .stoyki-mobil .price').html());
        sf1[3] = parseInt($("#state1").contents().find('.tab-content .tipSoedineniyaPoloten-mobil .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    } else if (furnituraSelect === '0') {
        sf0[0] = checkF("stoiki-stac-select", 1);
        sf1[0] = parseInt($("#state1").contents().find('.tab-content .stoiki-stac .price').html());
        selectedFurnitura.push(sf0);
        selectedFurnitura.push(sf1);
    }
    ////////////////////////////////////////////////////////////
    // выборка фурнитуры 2
    ////////////////////////////////////////////////////////////
    var selectedFurnitura2 = [];
    var sf20 = [];
    var sf21 = [];
    var sf22 = [];
    var sf23 = [];
    if (furnituraSelect == 1) {
        sf20[0] = checkF("razdvizhnyie-mehanizmyi-select", 2);
        sf20[1] = checkF("mehanizm-sinhronizacii-select", 2);
        sf20[2] = checkF("naprav-select", 2);
        sf20[3] = checkF("napravn-select", 2);
        sf20[4] = checkF("vid-kreplenia-naprav-select", 2);
        sf20[5] = checkF("povodok-select", 2);
        sf20[6] = checkF("mehanizm-teleskop-select", 1);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').html());
        sf21[1] = parseInt($("#state2").contents().find('.tab-content .mehanizm-sinhronizatsii .price').html());
        sf21[2] = parseInt($("#state2").contents().find('.tab-content .napravlyayuschie .price').html());
        sf21[3] = parseInt($("#state2").contents().find('.tab-content .napravlyayuschien .price').html());
        sf21[4] = parseInt($("#state2").contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').html());
        sf21[5] = parseInt($("#state2").contents().find('.tab-content .povodok .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
        if ($("#state2").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf22[0] = checkF("dovodchik-select", 2);
            sf22[1] = checkF("dek-planka-dlya-profilya-select", 2);
            sf22[2] = checkF("schetochnii-uplotnitel-select", 2);
            sf22[3] = checkF("ruchka-select", 2);
            sf22[4] = checkF("zamok-select", 2);
            sf23[0] = parseInt($("#state2").contents().find('.tab-content .dovodchik .price').html());
            sf23[1] = parseInt($("#state2").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').html());
            sf23[2] = parseInt($("#state2").contents().find('.tab-content .schetochnyiyUplotnitel .price').html());
            sf23[3] = parseInt($("#state2").contents().find('.tab-content .rakovina .price').html());
            sf23[4] = parseInt($("#state2").contents().find('.tab-content .zamok .price').html());
            selectedFurnitura2.push(sf22);
            selectedFurnitura2.push(sf23);
        }
    } else if (furnituraSelect == 2) {
        sf20[0] = checkF("mehanizm-sinhron-skladnie", 2);
        sf20[1] = checkF("mehanizm-rotornii", 2);
        sf20[2] = checkF("petli-skladnie", 2);
        sf20[3] = checkF("napravlyayuschie-skladnie", 2);
        sf20[4] = checkF("napravlyayuschien-skladnie", 2);
        sf20[5] = checkF("vid-krepleniya-napravlyayuschih-skladnie", 2);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .setSkladnyieMehanizmyi .price').html());
        sf21[1] = parseInt($("#state2").contents().find('.tab-content .mehanizm-rotornii .price').html());
        sf21[2] = parseInt($("#state2").contents().find('.tab-content .petli-skladnie .price').html());
        sf21[3] = parseInt($("#state2").contents().find('.tab-content .napravlyayuschie-skladnie .price').html());
        sf21[4] = parseInt($("#state2").contents().find('.tab-content .napravlyayuschien-skladnie .price').html());
        sf21[5] = parseInt($("#state2").contents().find('.tab-content .vidKrepleniya-skladnie .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
        if ($("#state2").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf22[0] = checkF("dek-planka-dlya-profilya-skladnie", 2);
            sf22[1] = checkF("ruchka-skladnie", 2);
            sf22[2] = checkF("zamok-skladnie", 2);
            sf23[0] = parseInt($("#state2").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya-skladnie .price').html());
            sf23[1] = parseInt($("#state2").contents().find('.tab-content .rakovina-skladnie .price').html());
            sf23[2] = parseInt($("#state2").contents().find('.tab-content .zamokSkladnyie-skladnie .price').html());
            selectedFurnitura2.push(sf22);
            selectedFurnitura2.push(sf23);
        }
    } else if (furnituraSelect == 3) {
        sf20[0] = checkF("petli-raspashnie", 2);
        sf20[1] = checkF("ruchka-raspashnie", 2);
        sf20[2] = checkF("zamok-raspashnie", 2);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .petli-raspashnie .price').html());
        sf21[1] = parseInt($("#state2").contents().find('.tab-content .ruchka-raspashnie .price').html());
        sf21[2] = parseInt($("#state2").contents().find('.tab-content .zamok-raspashnie .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    } else if (furnituraSelect == 4) {
        sf20[0] = checkF("nozhki-mobilnie", 2);
        sf20[1] = checkF("kolesiki-mobilnie", 2);
        sf20[2] = checkF("stoyki-mobilnie", 2);
        sf20[3] = checkF("tipSoedineniyaPoloten-mobilnie", 2);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .nozhki-mobil .price').html());
        sf21[1] = parseInt($("#state2").contents().find('.tab-content .kolesiki-mobilnie .price').html());
        sf21[2] = parseInt($("#state2").contents().find('.tab-content .stoyki-mobil .price').html());
        sf21[3] = parseInt($("#state2").contents().find('.tab-content .tipSoedineniyaPoloten-mobil .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    } else if (furnituraSelect === '0') {
        sf20[0] = checkF("stoiki-stac-select", 2);
        sf21[0] = parseInt($("#state2").contents().find('.tab-content .stoiki-stac .price').html());
        selectedFurnitura2.push(sf20);
        selectedFurnitura2.push(sf21);
    }
    ////////////////////////////////////////////////////////////
    // выборка фурнитуры 3
    ////////////////////////////////////////////////////////////
    var selectedFurnitura3 = [];
    var sf30 = [];
    var sf31 = [];
    var sf32 = [];
    var sf33 = [];
    if (furnituraSelect == 1) {
        sf30[0] = checkF("razdvizhnyie-mehanizmyi-select", 3);
        sf30[1] = checkF("mehanizm-sinhronizacii-select", 3);
        sf30[2] = checkF("naprav-select", 3);
        sf30[3] = checkF("napravn-select", 3);
        sf30[4] = checkF("vid-kreplenia-naprav-select", 3);
        sf30[5] = checkF("povodok-select", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .razdvizhnyie-mehanizmyi .price').html());
        sf31[1] = parseInt($("#state3").contents().find('.tab-content .mehanizm-sinhronizatsii .price').html());
        sf31[2] = parseInt($("#state3").contents().find('.tab-content .napravlyayuschie .price').html());
        sf31[3] = parseInt($("#state3").contents().find('.tab-content .napravlyayuschien .price').html());
        sf31[4] = parseInt($("#state3").contents().find('.tab-content .vidKrepleniyaNapravlyayuschey .price').html());
        sf31[5] = parseInt($("#state3").contents().find('.tab-content .povodok .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
        if ($("#state3").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf32[0] = checkF("dovodchik-select", 3);
            sf32[1] = checkF("dek-planka-dlya-profilya-select", 3);
            sf32[2] = checkF("schetochnii-uplotnitel-select", 3);
            sf32[3] = checkF("ruchka-select", 3);
            sf32[4] = checkF("zamok-select", 3);
            sf33[0] = parseInt($("#state3").contents().find('.tab-content .dovodchik .price').html());
            sf33[1] = parseInt($("#state3").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya .price').html());
            sf33[2] = parseInt($("#state3").contents().find('.tab-content .schetochnyiyUplotnitel .price').html());
            sf33[3] = parseInt($("#state3").contents().find('.tab-content .rakovina .price').html());
            sf33[4] = parseInt($("#state3").contents().find('.tab-content .zamok .price').html());
            selectedFurnitura3.push(sf32);
            selectedFurnitura3.push(sf33);
        }
    } else if (furnituraSelect == 2) {
        sf30[0] = checkF("mehanizm-sinhron-skladnie", 3);
        sf30[1] = checkF("mehanizm-rotornii", 3);
        sf30[2] = checkF("petli-skladnie", 3);
        sf30[3] = checkF("napravlyayuschie-skladnie", 3);
        sf30[4] = checkF("napravlyayuschien-skladnie", 3);
        sf30[5] = checkF("vid-krepleniya-napravlyayuschih-skladnie", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .setSkladnyieMehanizmyi .price').html());
        sf31[1] = parseInt($("#state3").contents().find('.tab-content .mehanizm-rotornii .price').html());
        sf31[2] = parseInt($("#state3").contents().find('.tab-content .petli-skladnie .price').html());
        sf31[3] = parseInt($("#state3").contents().find('.tab-content .napravlyayuschie-skladnie .price').html());
        sf31[4] = parseInt($("#state3").contents().find('.tab-content .napravlyayuschien-skladnie .price').html());
        sf31[5] = parseInt($("#state3").contents().find('.tab-content .vidKrepleniya-skladnie .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
        if ($("#state3").contents().find('#furnitura-tab .aksessuaryi-block-swith input').prop('checked') === true) {
            sf32[0] = checkF("dek-planka-dlya-profilya-skladnie", 3);
            sf32[1] = checkF("ruchka-skladnie", 3);
            sf32[2] = checkF("zamok-skladnie", 3);
            sf33[0] = parseInt($("#state3").contents().find('.tab-content .dekorativnayaPlankaDlyaProfilya-skladnie .price').html());
            sf33[1] = parseInt($("#state3").contents().find('.tab-content .rakovina-skladnie .price').html());
            sf33[2] = parseInt($("#state3").contents().find('.tab-content .zamokSkladnyie-skladnie .price').html());
            selectedFurnitura3.push(sf32);
            selectedFurnitura3.push(sf33);
        }
    } else if (furnituraSelect == 3) {
        sf30[0] = checkF("petli-raspashnie", 3);
        sf30[1] = checkF("ruchka-raspashnie", 3);
        sf30[2] = checkF("zamok-raspashnie", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .petli-raspashnie .price').html());
        sf31[1] = parseInt($("#state3").contents().find('.tab-content .ruchka-raspashnie .price').html());
        sf31[2] = parseInt($("#state3").contents().find('.tab-content .zamok-raspashnie .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    } else if (furnituraSelect == 4) {
        sf30[0] = checkF("nozhki-mobilnie", 3);
        sf30[1] = checkF("kolesiki-mobilnie", 3);
        sf30[2] = checkF("stoyki-mobilnie", 3);
        sf30[3] = checkF("tipSoedineniyaPoloten-mobilnie", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .nozhki-mobil .price').html());
        sf31[1] = parseInt($("#state3").contents().find('.tab-content .kolesiki-mobilnie .price').html());
        sf31[2] = parseInt($("#state3").contents().find('.tab-content .stoyki-mobil .price').html());
        sf31[3] = parseInt($("#state3").contents().find('.tab-content .tipSoedineniyaPoloten-mobil .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    } else if (furnituraSelect === '0') {
        sf30[0] = checkF("stoiki-stac-select", 3);
        sf31[0] = parseInt($("#state3").contents().find('.tab-content .stoiki-stac .price').html());
        selectedFurnitura3.push(sf30);
        selectedFurnitura3.push(sf31);
    }

    ////////////////////////////////////////////////////////////
    // выборка альтернативной комплектации
    ////////////////////////////////////////////////////////////
    var i, altFi = [], altFa = [], altPi = [], altPa = [], altMi = [], altMa = [], altSi = [], altSa = [];
    for (i = storage.m.length - 1; i >= 0; i--) {
        if (storage.m[i]['img'] != parentM.s1.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != parentM.s2.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != parentM.s3.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src')) {
            altMi.push(storage.m[i]['id']);
            break;
        }
    }
    for (i = 0; i < storage.m.length; i++) {
        if (storage.m[i]['img'] != parentM.s1.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != parentM.s2.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src') &&
            storage.m[i]['img'] != parentM.s3.$('.napolnenie-el[data-material-el-id=1]').find('#open-material-img').attr('src')) {
            altMa.push(storage.m[i]['id']);
            break;
        }
    }
    for (i = 0; i < storage.p.length; i++) {
        if (storage.p[i]['name'] != parentM.s1.$('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != parentM.s2.$('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != parentM.s3.$('#KARKAS-NAME').html()) {
            altPi.push(storage.p[i]['id']);
            break;
        }
    }
    for (i = storage.p.length - 1; i >= 0; i--) {
        if (storage.p[i]['name'] != parentM.s1.$('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != parentM.s2.$('#KARKAS-NAME').html() &&
            storage.p[i]['name'] != parentM.s3.$('#KARKAS-NAME').html()) {
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
    var selectedKarkas = [];
    var selectedKarkasSupp = [];
    $("#state1").contents().find('.nsupp').each(function () {
        if ($("#state1").contents().find('#selectSupplements' + $(this).val()).val() == 'Есть') {
            var tmpArr = [];
            tmpArr.push($(this).val());
            tmpArr.push($("#state1").contents().find('.nsupp' + $(this).val()).val());
            tmpArr.push($("#state1").contents().find('#textSupplements' + $(this).val()).html());
            tmpArr.push($("#state1").contents().find('#imageSupplements' + $(this).val()).attr('src'));
            tmpArr.push($("#state1").contents().find('#priceSupplements' + $(this).val()).html());
            tmpArr.push($("#state1").contents().find('#CountSupplements' + $(this).val()).val());
            selectedKarkasSupp.push(tmpArr);
        }
    });
    TOTAL_PAINTING = parseInt($("#state1").contents().find('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)) TOTAL_PAINTING = 0;
    selectedKarkas.push($("#state1").contents().find('#KARKAS-NAME').html());
    selectedKarkas.push($("#state1").contents().find('#KARKAS-PRICE').html());
    selectedKarkas.push(((parseInt($("#state1").contents().find('#HIGHT_SETS_ID').val())) / 1000).toFixed(1));
    selectedKarkas.push(selectedKarkasSupp);
    selectedKarkas.push($("#state1").contents().find('.TAB-PROFIL-KARKAS-PRICE').html());
    ////////////////////////////////////////////////////////////
    // выборка каркаса 2
    ////////////////////////////////////////////////////////////
    var selectedKarkas2 = [];
    var selectedKarkas2Supp = [];
    $("#state2").contents().find('.nsupp').each(function () {
        if ($("#state2").contents().find('#selectSupplements' + $(this).val()).val() == 'Есть') {
            var tmpArr = [];
            tmpArr.push($(this).val());
            tmpArr.push($("#state2").contents().find('.nsupp' + $(this).val()).val());
            tmpArr.push($("#state2").contents().find('#textSupplements' + $(this).val()).html());
            tmpArr.push($("#state2").contents().find('#imageSupplements' + $(this).val()).attr('src'));
            tmpArr.push($("#state2").contents().find('#priceSupplements' + $(this).val()).html());
            tmpArr.push($("#state2").contents().find('#CountSupplements' + $(this).val()).val());
            selectedKarkas2Supp.push(tmpArr);
        }
    });
    TOTAL_PAINTING = parseInt($("#state2").contents().find('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)) TOTAL_PAINTING = 0;
    selectedKarkas2.push($("#state2").contents().find('#KARKAS-NAME').html());
    selectedKarkas2.push($("#state2").contents().find('#KARKAS-PRICE').html());
    selectedKarkas2.push(((parseInt($("#state2").contents().find('#HIGHT_SETS_ID').val()) * parseInt($("#state2").contents().find('#WIDTH_SETS_ID').val())) / 1000000).toFixed(1));
    selectedKarkas2.push(selectedKarkas2Supp);
    selectedKarkas2.push($("#state2").contents().find('.TAB-PROFIL-KARKAS-PRICE').html());
    ////////////////////////////////////////////////////////////
    // выборка каркаса 3
    ////////////////////////////////////////////////////////////
    var selectedKarkas3 = [];
    var selectedKarkas3Supp = [];
    $("#state3").contents().find('.nsupp').each(function () {
        if ($("#state3").contents().find('#selectSupplements' + $(this).val()).val() == 'Есть') {
            var tmpArr = [];
            tmpArr.push($(this).val());
            tmpArr.push($("#state3").contents().find('.nsupp' + $(this).val()).val());
            tmpArr.push($("#state3").contents().find('#textSupplements' + $(this).val()).html());
            tmpArr.push($("#state3").contents().find('#imageSupplements' + $(this).val()).attr('src'));
            tmpArr.push($("#state3").contents().find('#priceSupplements' + $(this).val()).html());
            tmpArr.push($("#state3").contents().find('#CountSupplements' + $(this).val()).val());
            selectedKarkas3Supp.push(tmpArr);
        }
    });
    TOTAL_PAINTING = parseInt($("#state3").contents().find('#TOTAL_PAINTING_ID').val());
    if (isNaN(TOTAL_PAINTING)) TOTAL_PAINTING = 0;
    selectedKarkas3.push($("#state3").contents().find('#KARKAS-NAME').html());
    selectedKarkas3.push($("#state3").contents().find('#KARKAS-PRICE').html());
    selectedKarkas3.push(((parseInt($("#state3").contents().find('#HIGHT_SETS_ID').val()) * parseInt($("#state3").contents().find('#WIDTH_SETS_ID').val())) / 1000000).toFixed(1));
    selectedKarkas3.push(selectedKarkas3Supp);
    selectedKarkas3.push($("#state3").contents().find('.TAB-PROFIL-KARKAS-PRICE').html());

    ////////////////////////////////////////////////////////////
    // выборка перемычек
    ////////////////////////////////////////////////////////////
    var pmh = [], pmh1 = {}, pmh2 = {}, pmh3 = {};
    pmh1['n'] = parentM.s1.$('#HORIZONTAL-PEREMOCHKI-NAME').html();
    pmh1['p'] = parentM.s1.$('#HORIZONTAL-PEREMOCHKI-PRICE').html();
    pmh2['n'] = parentM.s2.$('#HORIZONTAL-PEREMOCHKI-NAME').html();
    pmh2['p'] = parentM.s2.$('#HORIZONTAL-PEREMOCHKI-PRICE').html();
    pmh3['n'] = parentM.s3.$('#HORIZONTAL-PEREMOCHKI-NAME').html();
    pmh3['p'] = parentM.s3.$('#HORIZONTAL-PEREMOCHKI-PRICE').html();
    pmh.push(pmh1);
    pmh.push(pmh2);
    pmh.push(pmh3);
    var pmv = [], pmv1 = {}, pmv2 = {}, pmv3 = {};
    pmv1['n'] = parentM.s1.$('#VERTIKALNUE-PEREMOCHKI-NAME').html();
    pmv1['p'] = parentM.s1.$('#VERTIKALNUE-PEREMOCHKI-PRICE').html();
    pmv2['n'] = parentM.s2.$('#VERTIKALNUE-PEREMOCHKI-NAME').html();
    pmv2['p'] = parentM.s2.$('#VERTIKALNUE-PEREMOCHKI-PRICE').html();
    pmv3['n'] = parentM.s3.$('#VERTIKALNUE-PEREMOCHKI-NAME').html();
    pmv3['p'] = parentM.s3.$('#VERTIKALNUE-PEREMOCHKI-PRICE').html();
    pmv.push(pmv1);
    pmv.push(pmv2);
    pmv.push(pmv3);

    ////////////////////////////////////////////////////////////
    // выборка декора
    ////////////////////////////////////////////////////////////
    var selectedDecor = [];
    selectedDecor.push($("#state1").contents().find('#pokraskaTypeAndName').val());
    selectedDecor.push($("#state1").contents().find('.TAB-POKRASKA-PRICE').html());
    var selectedDecor2 = [];
    selectedDecor2.push($("#state2").contents().find('#pokraskaTypeAndName').val());
    selectedDecor2.push($("#state2").contents().find('.TAB-POKRASKA-PRICE').html());
    var selectedDecor3 = [];
    selectedDecor3.push($("#state3").contents().find('#pokraskaTypeAndName').val());
    selectedDecor3.push($("#state3").contents().find('.TAB-POKRASKA-PRICE').html());

    var rub = [], rub1 = {}, rub2 = {}, rub3 = {};
    rub1['i'] = parentM.s1.$('.proizvaodstvoTo input').val();
    rub1['m'] = parentM.s1.$('.montazhTo input').val();
    rub1['d'] = parentM.s1.$('.dostavkaTo input').val();
    rub1['s'] = parentM.s1.$('.srochnostTo input').val();
    rub1['p'] = parentM.s1.$('.nashProtsentTo input').val();
    rub1['z'] = parentM.s1.$('.nashZamerTo input').val();
    rub2['i'] = parentM.s2.$('.proizvaodstvoTo input').val();
    rub2['m'] = parentM.s2.$('.montazhTo input').val();
    rub2['d'] = parentM.s2.$('.dostavkaTo input').val();
    rub2['s'] = parentM.s2.$('.srochnostTo input').val();
    rub2['p'] = parentM.s2.$('.nashProtsentTo input').val();
    rub2['z'] = parentM.s2.$('.nashZamerTo input').val();
    rub3['i'] = parentM.s3.$('.proizvaodstvoTo input').val();
    rub3['m'] = parentM.s3.$('.montazhTo input').val();
    rub3['d'] = parentM.s3.$('.dostavkaTo input').val();
    rub3['s'] = parentM.s3.$('.srochnostTo input').val();
    rub3['p'] = parentM.s3.$('.nashProtsentTo input').val();
    rub3['z'] = parentM.s3.$('.nashZamerTo input').val();
    rub.push(rub1);
    rub.push(rub2);
    rub.push(rub3);

    var per = [], per1 = {}, per2 = {}, per3 = {};
    per1['i'] = parentM.s1.$('.proizvaodstvoIn input').val();
    per1['m'] = parentM.s1.$('.montazhIn input').val();
    per1['d'] = parentM.s1.$('.dostavkaIn input').val();
    per1['s'] = parentM.s1.$('.srochnostIn input').val();
    per1['p'] = parentM.s1.$('.nashProtsentIn input').val();
    per1['z'] = parentM.s1.$('.nashZamerIn input').val();
    per2['i'] = parentM.s2.$('.proizvaodstvoIn input').val();
    per2['m'] = parentM.s2.$('.montazhIn input').val();
    per2['d'] = parentM.s2.$('.dostavkaIn input').val();
    per2['s'] = parentM.s2.$('.srochnostIn input').val();
    per2['p'] = parentM.s2.$('.nashProtsentIn input').val();
    per2['z'] = parentM.s2.$('.nashZamerIn input').val();
    per3['i'] = parentM.s3.$('.proizvaodstvoIn input').val();
    per3['m'] = parentM.s3.$('.montazhIn input').val();
    per3['d'] = parentM.s3.$('.dostavkaIn input').val();
    per3['s'] = parentM.s3.$('.srochnostIn input').val();
    per3['p'] = parentM.s3.$('.nashProtsentIn input').val();
    per3['z'] = parentM.s3.$('.nashZamer input').val();
    per.push(per1);
    per.push(per2);
    per.push(per3);

    var sum = [], sum1 = {}, sum2 = {}, sum3 = {};
    sum1['p'] = parentM.s1.$('.TAB-PROFIL-PRICE').html();
    sum1['a'] = parentM.s1.$('.price-res1').html();
    sum1['d'] = parentM.s1.$('.TAB-POKRASKA-PRICE').html();
    sum1['m'] = parentM.s1.$('#Pnap').html();
    sum1['f'] = parentM.s1.$('.furnitura-price .price').html();
    sum1['i'] = parentM.s1.$('.summaSParametrami .price').html();
    sum1['o'] = parentM.s1.$('.summaBezParametrov .price').html();
    sum2['p'] = parentM.s2.$('.TAB-PROFIL-PRICE').html();
    sum2['a'] = parentM.s2.$('.price-res1').html();
    sum2['d'] = parentM.s2.$('.TAB-POKRASKA-PRICE').html();
    sum2['m'] = parentM.s2.$('#Pnap').html();
    sum2['f'] = parentM.s2.$('.furnitura-price .price').html();
    sum2['i'] = parentM.s2.$('.summaSParametrami .price').html();
    sum2['o'] = parentM.s2.$('.summaBezParametrov .price').html();
    sum3['p'] = parentM.s3.$('.TAB-PROFIL-PRICE').html();
    sum3['a'] = parentM.s3.$('.price-res1').html();
    sum3['d'] = parentM.s3.$('.TAB-POKRASKA-PRICE').html();
    sum3['m'] = parentM.s3.$('#Pnap').html();
    sum3['f'] = parentM.s3.$('.furnitura-price .price').html();
    sum3['i'] = parentM.s3.$('.summaSParametrami .price').html();
    sum3['o'] = parentM.s3.$('.summaBezParametrov .price').html();
    sum.push(sum1);
    sum.push(sum2);
    sum.push(sum3);

    var setsNumber = parseInt($("#state1").contents().find('#NUMBER_SETS_ID').val());
    var orderNumber = $('#orderNumber').val();
    var calcmanager = $('#calcmanager').val();

    // фурнитура ручка
    var AksessuaryRuchkaKollichestvo1, AksessuaryRuchkaKollichestvo2, AksessuaryRuchkaKollichestvo3;
    if ($("#state1").contents().find("#ruchka-select .red").attr("disabled") == undefined)
        AksessuaryRuchkaKollichestvo1 = $("#state1").contents().find("#ruchka-select-count").val();
    else
        AksessuaryRuchkaKollichestvo1 = 0;
    if ($("#state2").contents().find("#ruchka-select .red").attr("disabled") == undefined)
        AksessuaryRuchkaKollichestvo2 = $("#state2").contents().find("#ruchka-select-count").val();
    else
        AksessuaryRuchkaKollichestvo2 = 0;
    if ($("#state3").contents().find("#ruchka-select .red").attr("disabled") == undefined)
        AksessuaryRuchkaKollichestvo3 = $("#state3").contents().find("#ruchka-select-count").val();
    else
        AksessuaryRuchkaKollichestvo3 = 0;
    // фурнитура ручка
    //Универсальная фурнитура
    var arayN0 = []
    for (i = 1; i <= 6; i++)
        arayN0.push($("#state1").contents().find('*[data-material-el-id="' + i + '"]').find('#namber').text());

    var arayN1 = []
    for (i = 1; i <= 6; i++)
        arayN1.push($("#state2").contents().find('*[data-material-el-id="' + i + '"]').find('#namber').text());

    var arayN2 = []
    for (i = 1; i <= 6; i++)
        arayN2.push($("#state3").contents().find('*[data-material-el-id="' + i + '"]').find('#namber').text());

    var arrayNamber = [arayN0, arayN1, arayN2];

    var arrayFurn0 = $("#state1").contents().find(".newfurn");
    var arrayFurn1 = $("#state2").contents().find(".newfurn");
    var arrayFurn2 = $("#state3").contents().find(".newfurn");

    var arrF0 = [];
    var arrF1 = [];
    var arrF2 = [];

    for (var i = 0; i < arrayFurn0.length / 2; i++) {
        var obj = {
            type: $(arrayFurn0[i]).find('h3').text(),
            name: $(arrayFurn0[i]).find('.text').text(),
            price: $(arrayFurn0[i]).find('.price').text()
        }
        arrF0.push(obj);
    }
    for (var i = 0; i < arrayFurn1.length / 2; i++) {
        var obj = {
            type: $(arrayFurn1[i]).find('h3').text(),
            name: $(arrayFurn1[i]).find('.text').text(),
            price: $(arrayFurn1[i]).find('.price').text()
        }
        arrF1.push(obj);
    }
    for (var i = 0; i < arrayFurn2.length / 2; i++) {
        var obj = {
            type: $(arrayFurn2[i]).find('h3').text(),
            name: $(arrayFurn2[i]).find('.text').text(),
            price: $(arrayFurn2[i]).find('.price').text()
        }
        arrF2.push(obj);
    }


    ////////////////////////////////////////////////////////////
    // формирование url
    ////////////////////////////////////////////////////////////
    var url = {
        'arrayNamber': JSON.stringify(arrayNamber),
        'furnitura-select': furnituraSelect,
        'Allheight': Allheight,
        'Allwidth': Allwidth,
        'count': count,
        'count1': count1,
        'countW': countW,
        'countH': countH,
        'priceFull1': $('*[data-slider-id="1"] .price span').html(),
        'priceFull2': $('*[data-slider-id="2"] .price span').html(),
        'priceFull3': $('*[data-slider-id="3"] .price span').html(),
        'AksessuaryRuchkaKollichestvo1': AksessuaryRuchkaKollichestvo1,
        'AksessuaryRuchkaKollichestvo2': AksessuaryRuchkaKollichestvo2,
        'AksessuaryRuchkaKollichestvo3': AksessuaryRuchkaKollichestvo3,
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
        'arrF0': JSON.stringify(arrF0),
        'arrF1': JSON.stringify(arrF1),
        'arrF2': JSON.stringify(arrF2),
        'contacts': JSON.stringify({
            name: $('#managertext').val(),
            tel: $('#teltext').val(),
            mail: $('#mailtext').val()
        }),
    };

    $.post('./php/longurl.php?n=' + window.id_pdf, 'url=' + JSON.stringify(url), function () {
        $.get('./html2pdf.php?n=' + window.id_pdf);
    });
}