// Автор: Владимир
// Дата:  23.01.2017
// ТЗ:    Оформление функционала фурнитуры отдельным модулем.

var nfurnitura = {

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
                nfurnitura.openModalStac("StoikiStac");
        });
        $("#furnitura-tab").on('click', '#razdvizhnyie-mehanizmyi-select .addonImg', function () {
            if (!isNaN(parseInt($("#TOTAL_PAINTING_ID").val()))) {
                nfurnitura.openModalRadvizh("RazdvizhnyieMehanizmyi");
            } else {
                parent.message("Укажите количество полотен!");
            }
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
            var karkasName = getFromData("karkas-name");
            if (karkasName == "Optima" || karkasName == "Optimax2" || karkasName == "Standart") {
                nfurnitura.openModalRadvizh("ruchka");
            } else {
                parent.message("Ручки для выбраных профилей нет!");
            }
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
            var Count = parseInt($("#TOTAL_PAINTING_ID").val());
            if (Count > 1) {
                nfurnitura.openModalMobil("stoykimobilnie");
            } else {
                parent.message("Количество полотен должно быть минимум 2!");
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
        var description_trigger;
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
        item = top.storage.f.find((v) => v.cat === 1);
        if (item)
            nfurnitura.SelectRazdvizhnyieMehanizmyiEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 2);
        if (item)
            nfurnitura.SelectmehanizmsinhronizaciiEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 3);
        if (item)
            nfurnitura.SelectnapravEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 4);
        if (item)
            nfurnitura.SelectvidkreplenianapravEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 5);
        if (item)
            nfurnitura.SelectpovodokEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 6);
        if (item)
            nfurnitura.SelectdovodchikEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 7);
        if (item)
            nfurnitura.SelectdekplankadlyaprofilyaEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 8);
        if (item)
            nfurnitura.SelectschetochniiuplotnitelEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 9);
        if (item)
            nfurnitura.SelectruchkaEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 10);
        if (item)
            nfurnitura.SelectzamokEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 11);
        if (item)
            nfurnitura.SelectmehanizmsinhronskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 12);
        if (item)
            nfurnitura.SelectmehanizmrotorniiEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 13);
        if (item)
            nfurnitura.SelectpetliskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 14);
        if (item)
            nfurnitura.SelectnapravlyayuschieskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 15);
        if (item)
            nfurnitura.SelectvidkrepleniyanapravlyayuschihskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 16);
        if (item)
            nfurnitura.SelectdekplankadlyaprofilyaskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 17);
        if (item)
            nfurnitura.SelectschetochniiuplotnitelskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 18);
        if (item)
            nfurnitura.SelectruchkaskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 19);
        if (item)
            nfurnitura.SelectkreplenieruchliskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 20);
        if (item)
            nfurnitura.SelectzamokskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 21);
        if (item)
            nfurnitura.SelectpetliRaspashnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 22);
        if (item)
            nfurnitura.SelectruchkaRaspashnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 23);
        if (item)
            nfurnitura.SelectzamokRaspashnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 24);
        if (item)
            nfurnitura.SelectnozhkimobilnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 25);
        if (item)
            nfurnitura.SelectkolesikimobilnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 26);
        if (item)
            nfurnitura.SelectstoykimobilnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 27);
        if (item)
            nfurnitura.SelecttipSoedineniyaPolotenmobilnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 28);
        if (item)
            nfurnitura.SelectStoikiStacEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 29);
        if (item)
            nfurnitura.SelectnapravnEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 30);
        if (item)
            nfurnitura.SelectnapravlyayuschienskladnieEnd("./admin/" + item.img, item.name, item.price);
        item = top.storage.f.find((v) => v.cat === 31);
        if (item)
            nfurnitura.SelectmehanizmtelestopEnd("./admin/" + item.img, item.name, item.price);
    },

    openModalStac: function (type) {
        var karkasName = getFromData("karkas-name");
        var Count = parseInt($("#TOTAL_PAINTING_ID").val());
        var width = parseInt($("#WIDTH_SETS_ID").val());
        if (!isNaN(Count) && !isNaN(width)) {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            var cat,
                html = $('.obshee-modal').html();
            switch (type) {
                case "StoikiStac":
                    parent.storage.fillFC(28);
                    break;
            }
            var obj = parent.storage.fC;
            for (var i = 0; i < obj.length; i++) {
                var templateData = {
                    img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                    img2: "./admin/" + obj[i].img,
                    text1: obj[i].cname,
                    text2: obj[i].name,
                    description: obj[i].description,
                    price: fornituraPrice(obj[i].price, obj[i].formula),
                    funcName: type
                };
                var resultHtml = makeHTMLFromTemplate(html, templateData);
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        } else {
            parent.message("Укажите количество полотен и ширину!");
        }
    },

    openModalRadvizh: function (type) {
        if (!isNaN(parseInt($("#TOTAL_PAINTING_ID").val())) && !isNaN(parseInt($("#WIDTH_SETS_ID").val()))) {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            var cat,
                html = $('.obshee-modal').html();
            switch (type) {
                case "RazdvizhnyieMehanizmyi":
                    parent.storage.fillFC(1);
                    break;
                case "mehanizmsinhronizacii":
                    parent.storage.fillFC(2);
                    break;
                case "naprav":
                    parent.storage.fillFC(3);
                    break;
                case "napravn":
                    parent.storage.fillFC(29);
                    break;
                case "vidkreplenianaprav":
                    parent.storage.fillFC(4);
                    break;
                case "povodok":
                    parent.storage.fillFC(5);
                    break;
                case "dovodchik":
                    parent.storage.fillFC(6);
                    break;
                case "dekplankadlyaprofilya":
                    parent.storage.fillFC(7);
                    break;
                case "schetochniiuplotnitel":
                    parent.storage.fillFC(8);
                    break;
                case "ruchka":
                    parent.storage.fillFC(9);
                    break;
                case "zamok":
                    parent.storage.fillFC(10);
                    break;
                case "telestop": {
                    type = 'mehanizmtelestop';
                    parent.storage.fillFC(31);
                    break;
                }
            }
            var obj = parent.storage.fC;
            for (var i = 0; i < obj.length; i++) {
                var templateData = {
                    img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                    img2: "./admin/" + obj[i].img,
                    text1: obj[i].cname,
                    text2: obj[i].name,
                    description: obj[i].description,
                    price: fornituraPrice(obj[i].price, obj[i].formula),
                    funcName: type
                };
                var resultHtml = makeHTMLFromTemplate(html, templateData);
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        } else {
            parent.message("Укажите количество полотен и ширину!");
        }
    },

    openModalSkladnie: function (type) {
        if (!isNaN(parseInt($("#TOTAL_PAINTING_ID").val())) && !isNaN(parseInt($("#WIDTH_SETS_ID").val()))) {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            var cat,
                html = $('.obshee-modal').html();
            switch (type) {
                case "mehanizmsinhronskladnie":
                    parent.storage.fillFC(11);
                    break;
                case "mehanizmrotornii":
                    parent.storage.fillFC(12);
                    break;
                case "petliskladnie":
                    parent.storage.fillFC(13);
                    break;
                case "napravlyayuschieskladnie":
                    parent.storage.fillFC(14);
                    break;
                case "napravlyayuschienskladnie":
                    parent.storage.fillFC(30);
                    break;
                case "vidkrepleniyanapravlyayuschihskladnie":
                    parent.storage.fillFC(15);
                    break;
                case "dekplankadlyaprofilyaskladnie":
                    parent.storage.fillFC(16);
                    break;
                case "schetochniiuplotnitelskladnie":
                    parent.storage.fillFC(17);
                    break;
                case "ruchkaskladnie":
                    parent.storage.fillFC(18);
                    break;
                case "kreplenieruchliskladnie":
                    parent.storage.fillFC(19);
                    break;
                case "zamokskladnie":
                    parent.storage.fillFC(20);
                    break;
            }
            var obj = parent.storage.fC;
            for (var i = 0; i < obj.length; i++) {
                var templateData = {
                    img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                    img2: "./admin/" + obj[i].img,
                    text1: obj[i].cname,
                    text2: obj[i].name,
                    description: obj[i].description,
                    price: fornituraPrice(obj[i].price, obj[i].formula),
                    funcName: type
                };
                var resultHtml = makeHTMLFromTemplate(html, templateData);
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        } else {
            parent.message("Укажите количество полотен и ширину!");
        }
    },

    openModalMobil: function (type) {
        if (!isNaN(parseInt($("#TOTAL_PAINTING_ID").val())) && !isNaN(parseInt($("#WIDTH_SETS_ID").val())) && getFromData("karkas-name") !== "") {
            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
            var cat,
                html = $('.obshee-modal').html();
            switch (type) {
                case "nozhkimobilnie":
                    parent.storage.fillFC(24);
                    break;
                case "kolesikimobilnie":
                    parent.storage.fillFC(25);
                    break;
                case "stoykimobilnie":
                    parent.storage.fillFC(26);
                    break;
                case "tipSoedineniyaPolotenmobilnie":
                    parent.storage.fillFC(27);
                    break;
            }
            var obj = parent.storage.fC;
            for (var i = 0; i < obj.length; i++) {
                var templateData = {
                    img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                    img2: "./admin/" + obj[i].img,
                    text1: obj[i].cname,
                    text2: obj[i].name,
                    description: obj[i].description,
                    price: fornituraPrice(obj[i].price, obj[i].formula),
                    funcName: type
                };
                var resultHtml = makeHTMLFromTemplate(html, templateData);
                $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
            }
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        } else {
            parent.message("Укажите количество полотен, ширину и профиль!");
        }
    },

    openModalRaspashnie: function (type) {
        var karkasName = getFromData("karkas-name");
        var Count = parseInt($("#TOTAL_PAINTING_ID").val());
        var width = parseInt($("#WIDTH_SETS_ID").val());
        var height = parseInt($("#HIGHT_SETS_ID").val());
        var countPetli = parseInt($("#petli-raspashnie-count").val());
        var countRuchka = parseInt($("#ruchka-raspashnie-count").val());
        var countZamok = parseInt($("#zamok-raspashnie-count").val());
        if (!isNaN(Count) && !isNaN(width) && karkasName !== "") {
            if (isNaN(countPetli) || countPetli < 1 || countPetli === "") {
                parent.message("Укажите количество петель!");
            } else {
                if (isNaN(countRuchka) || countRuchka < 1 || countRuchka === "") {
                    parent.message("Укажите количество ручек!");
                } else {
                    if (isNaN(countZamok) || countZamok < 1 || countZamok === "") {
                        parent.message("Укажите количество замков!");
                    } else {
                        $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
                        var cat,
                            html = $('.obshee-modal').html();
                        switch (type) {
                            case "petliRaspashnie":
                                parent.storage.fillFC(21);
                                break;
                            case "ruchkaRaspashnie":
                                parent.storage.fillFC(22);
                                break;
                            case "zamokRaspashnie":
                                parent.storage.fillFC(23);
                                break;
                        }
                        var obj = parent.storage.fC;
                        for (var i = 0; i < obj.length; i++) {
                            var templateData = {
                                img: "style='height:100px;' src='./admin/" + obj[i].img + "'",
                                img2: "./admin/" + obj[i].img,
                                text1: obj[i].cname,
                                text2: obj[i].name,
                                description: obj[i].description,
                                price: fornituraPrice(obj[i].price, obj[i].formula),
                                funcName: type
                            };
                            var resultHtml = makeHTMLFromTemplate(html, templateData);
                            $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').append(resultHtml);
                        }
                        $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
                    }
                }
            }
        } else {
            parent.message("Укажите количество полотен, ширину и профиль!");
        }
    },

    SelectStoikiStacEnd: function (img, text, price) {

        $(".stoiki-stac img").attr('src', img);
        $(".stoiki-stac .text").text(text);
        $(".stoiki-stac .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".stoiki-stac img").attr('src', img);
            top.frames[1].$(".stoiki-stac .text").text(text);
            top.frames[1].$(".stoiki-stac .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".stoiki-stac img").attr('src', img);
            top.frames[2].$(".stoiki-stac .text").text(text);
            top.frames[2].$(".stoiki-stac .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectRazdvizhnyieMehanizmyiEnd: function (img, text, price) {
        $(".razdvizhnyie-mehanizmyi img").attr('src', img);
        $(".razdvizhnyie-mehanizmyi .text").text(text);
        $(".razdvizhnyie-mehanizmyi .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".razdvizhnyie-mehanizmyi img").attr('src', img);
            top.frames[1].$(".razdvizhnyie-mehanizmyi .text").text(text);
            top.frames[1].$(".razdvizhnyie-mehanizmyi .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".razdvizhnyie-mehanizmyi img").attr('src', img);
            top.frames[2].$(".razdvizhnyie-mehanizmyi .text").text(text);
            top.frames[2].$(".razdvizhnyie-mehanizmyi .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectmehanizmsinhronizaciiEnd: function (img, text, price) {
        $(".mehanizm-sinhronizatsii img").attr('src', img);
        $(".mehanizm-sinhronizatsii .text").text(text);
        $(".mehanizm-sinhronizatsii .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".mehanizm-sinhronizatsii img").attr('src', img);
            top.frames[1].$(".mehanizm-sinhronizatsii .text").text(text);
            top.frames[1].$(".mehanizm-sinhronizatsii .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".mehanizm-sinhronizatsii img").attr('src', img);
            top.frames[2].$(".mehanizm-sinhronizatsii .text").text(text);
            top.frames[2].$(".mehanizm-sinhronizatsii .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },
    SelectmehanizmtelestopEnd: function (img, text, price) {
        $(".mehanizm-teleskop img").attr('src', img);
        $(".mehanizm-teleskop .text").text(text);
        $(".mehanizm-teleskop .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".mehanizm-teleskop img").attr('src', img);
            top.frames[1].$(".mehanizm-teleskop .text").text(text);
            top.frames[1].$(".mehanizm-teleskop .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".mehanizm-teleskop img").attr('src', img);
            top.frames[2].$(".mehanizm-teleskop .text").text(text);
            top.frames[2].$(".mehanizm-teleskop .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectnapravEnd: function (img, text, price) {
        $(".napravlyayuschie img").attr('src', img);
        $(".napravlyayuschie .text").text(text);
        $(".napravlyayuschie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".napravlyayuschie img").attr('src', img);
            top.frames[1].$(".napravlyayuschie .text").text(text);
            top.frames[1].$(".napravlyayuschie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".napravlyayuschie img").attr('src', img);
            top.frames[2].$(".napravlyayuschie .text").text(text);
            top.frames[2].$(".napravlyayuschie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectnapravnEnd: function (img, text, price) {
        $(".napravlyayuschien img").attr('src', img);
        $(".napravlyayuschien .text").text(text);
        $(".napravlyayuschien .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".napravlyayuschien img").attr('src', img);
            top.frames[1].$(".napravlyayuschien .text").text(text);
            top.frames[1].$(".napravlyayuschien .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".napravlyayuschien img").attr('src', img);
            top.frames[2].$(".napravlyayuschien .text").text(text);
            top.frames[2].$(".napravlyayuschien .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectvidkreplenianapravEnd: function (img, text, price) {
        $(".vidKrepleniyaNapravlyayuschey img").attr('src', img);
        $(".vidKrepleniyaNapravlyayuschey .text").text(text);
        $(".vidKrepleniyaNapravlyayuschey .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".vidKrepleniyaNapravlyayuschey img").attr('src', img);
            top.frames[1].$(".vidKrepleniyaNapravlyayuschey .text").text(text);
            top.frames[1].$(".vidKrepleniyaNapravlyayuschey .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".vidKrepleniyaNapravlyayuschey img").attr('src', img);
            top.frames[2].$(".vidKrepleniyaNapravlyayuschey .text").text(text);
            top.frames[2].$(".vidKrepleniyaNapravlyayuschey .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectpovodokEnd: function (img, text, price) {
        $(".povodok img").attr('src', img);
        $(".povodok .text").text(text);
        $(".povodok .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".povodok img").attr('src', img);
            top.frames[1].$(".povodok .text").text(text);
            top.frames[1].$(".povodok .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".povodok img").attr('src', img);
            top.frames[2].$(".povodok .text").text(text);
            top.frames[2].$(".povodok .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectdovodchikEnd: function (img, text, price) {
        $(".dovodchik img").attr('src', img);
        $(".dovodchik .text").text(text);
        $(".dovodchik .price").text(price);
        setDataAndText("furnitura-dovodchik", text);
        $(".dekorativnayaPlankaDlyaProfilya img").attr('src', "img/furnityra/0.png");
        $(".dekorativnayaPlankaDlyaProfilya .text").text("Не выбрано");
        $(".dekorativnayaPlankaDlyaProfilya .price").text(0);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".dovodchik img").attr('src', img);
            top.frames[1].$(".dovodchik .text").text(text);
            top.frames[1].$(".dovodchik .price").text(price);
            top.frames[1].setDataAndText("furnitura-dovodchik", text);
            top.frames[1].$(".dekorativnayaPlankaDlyaProfilya img").attr('src', "img/furnityra/0.png");
            top.frames[1].$(".dekorativnayaPlankaDlyaProfilya .text").text("Не выбрано");
            top.frames[1].$(".dekorativnayaPlankaDlyaProfilya .price").text(0);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".dovodchik img").attr('src', img);
            top.frames[2].$(".dovodchik .text").text(text);
            top.frames[2].$(".dovodchik .price").text(price);
            top.frames[2].setDataAndText("furnitura-dovodchik", text);
            top.frames[2].$(".dekorativnayaPlankaDlyaProfilya img").attr('src', "img/furnityra/0.png");
            top.frames[2].$(".dekorativnayaPlankaDlyaProfilya .text").text("Не выбрано");
            top.frames[2].$(".dekorativnayaPlankaDlyaProfilya .price").text(0);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
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
        if (top._FLAG) {
            top.frames[1].$(".dekorativnayaPlankaDlyaProfilya img").attr('src', img);
            top.frames[1].$(".dekorativnayaPlankaDlyaProfilya .text").text(text);
            top.frames[1].$(".dekorativnayaPlankaDlyaProfilya .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".dekorativnayaPlankaDlyaProfilya img").attr('src', img);
            top.frames[2].$(".dekorativnayaPlankaDlyaProfilya .text").text(text);
            top.frames[2].$(".dekorativnayaPlankaDlyaProfilya .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectschetochniiuplotnitelEnd: function (img, text, price) {
        $(".schetochnyiyUplotnitel img").attr('src', img);
        $(".schetochnyiyUplotnitel .text").text(text);
        $(".schetochnyiyUplotnitel .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".schetochnyiyUplotnitel img").attr('src', img);
            top.frames[1].$(".schetochnyiyUplotnitel .text").text(text);
            top.frames[1].$(".schetochnyiyUplotnitel .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".schetochnyiyUplotnitel img").attr('src', img);
            top.frames[2].$(".schetochnyiyUplotnitel .text").text(text);
            top.frames[2].$(".schetochnyiyUplotnitel .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectruchkaEnd: function (img, text, price) {
        $(".rakovina img").attr('src', img);
        $(".rakovina .text").text(text);
        $(".rakovina .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".rakovina img").attr('src', img);
            top.frames[1].$(".rakovina .text").text(text);
            top.frames[1].$(".rakovina .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".rakovina img").attr('src', img);
            top.frames[2].$(".rakovina .text").text(text);
            top.frames[2].$(".rakovina .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectzamokEnd: function (img, text, price) {
        $(".zamok img").attr('src', img);
        $(".zamok .text").text(text);
        $(".zamok .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".zamok img").attr('src', img);
            top.frames[1].$(".zamok .text").text(text);
            top.frames[1].$(".zamok .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".zamok img").attr('src', img);
            top.frames[2].$(".zamok .text").text(text);
            top.frames[2].$(".zamok .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectmehanizmsinhronskladnieEnd: function (img, text, price) {
        $(".setSkladnyieMehanizmyi img").attr('src', img);
        $(".setSkladnyieMehanizmyi .text").text(text);
        $(".setSkladnyieMehanizmyi .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        setDataAndText("furnitura-skladnoi-mehanizm", text);
        if (top._FLAG) {
            top.frames[1].$(".setSkladnyieMehanizmyi img").attr('src', img);
            top.frames[1].$(".setSkladnyieMehanizmyi .text").text(text);
            top.frames[1].$(".setSkladnyieMehanizmyi .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[1].setDataAndText("furnitura-skladnoi-mehanizm", text);
            top.frames[2].$(".setSkladnyieMehanizmyi img").attr('src', img);
            top.frames[2].$(".setSkladnyieMehanizmyi .text").text(text);
            top.frames[2].$(".setSkladnyieMehanizmyi .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
            top.frames[2].setDataAndText("furnitura-skladnoi-mehanizm", text);
        }
    },

    SelectmehanizmrotorniiEnd: function (img, text, price) {
        $(".mehanizm-rotornii img").attr('src', img);
        $(".mehanizm-rotornii .text").text(text);
        $(".mehanizm-rotornii .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".mehanizm-rotornii img").attr('src', img);
            top.frames[1].$(".mehanizm-rotornii .text").text(text);
            top.frames[1].$(".mehanizm-rotornii .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".mehanizm-rotornii img").attr('src', img);
            top.frames[2].$(".mehanizm-rotornii .text").text(text);
            top.frames[2].$(".mehanizm-rotornii .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectpetliskladnieEnd: function (img, text, price) {
        $(".petli-skladnie img").attr('src', img);
        $(".petli-skladnie .text").text(text);
        $(".petli-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".petli-skladnie img").attr('src', img);
            top.frames[1].$(".petli-skladnie .text").text(text);
            top.frames[1].$(".petli-skladnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".petli-skladnie img").attr('src', img);
            top.frames[2].$(".petli-skladnie .text").text(text);
            top.frames[2].$(".petli-skladnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectnapravlyayuschieskladnieEnd: function (img, text, price) {
        $(".napravlyayuschie-skladnie img").attr('src', img);
        $(".napravlyayuschie-skladnie .text").text(text);
        $(".napravlyayuschie-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".napravlyayuschie-skladnie img").attr('src', img);
            top.frames[1].$(".napravlyayuschie-skladnie .text").text(text);
            top.frames[1].$(".napravlyayuschie-skladnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".napravlyayuschie-skladnie img").attr('src', img);
            top.frames[2].$(".napravlyayuschie-skladnie .text").text(text);
            top.frames[2].$(".napravlyayuschie-skladnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectnapravlyayuschienskladnieEnd: function (img, text, price) {
        $(".napravlyayuschien-skladnie img").attr('src', img);
        $(".napravlyayuschien-skladnie .text").text(text);
        $(".napravlyayuschien-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".napravlyayuschien-skladnie img").attr('src', img);
            top.frames[1].$(".napravlyayuschien-skladnie .text").text(text);
            top.frames[1].$(".napravlyayuschien-skladnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".napravlyayuschien-skladnie img").attr('src', img);
            top.frames[2].$(".napravlyayuschien-skladnie .text").text(text);
            top.frames[2].$(".napravlyayuschien-skladnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectvidkrepleniyanapravlyayuschihskladnieEnd: function (img, text, price) {
        $(".vidKrepleniya-skladnie img").attr('src', img);
        $(".vidKrepleniya-skladnie .text").text(text);

        $(".vidKrepleniya-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".vidKrepleniya-skladnie img").attr('src', img);
            top.frames[1].$(".vidKrepleniya-skladnie .text").text(text);
            top.frames[1].$(".vidKrepleniya-skladnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".vidKrepleniya-skladnie img").attr('src', img);
            top.frames[2].$(".vidKrepleniya-skladnie .text").text(text);
            top.frames[2].$(".vidKrepleniya-skladnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
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
        if (top._FLAG) {
            top.frames[1].$(".dekorativnayaPlankaDlyaProfilya-skladnie img").attr('src', img);
            top.frames[1].$(".dekorativnayaPlankaDlyaProfilya-skladnie .text").text(text);
            top.frames[1].$(".dekorativnayaPlankaDlyaProfilya-skladnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".dekorativnayaPlankaDlyaProfilya-skladnie img").attr('src', img);
            top.frames[2].$(".dekorativnayaPlankaDlyaProfilya-skladnie .text").text(text);
            top.frames[2].$(".dekorativnayaPlankaDlyaProfilya-skladnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectschetochniiuplotnitelskladnieEnd: function (img, text, price) {
        $(".schetochnyiyUplotnitel-skladnie img").attr('src', img);
        $(".schetochnyiyUplotnitel-skladnie .text").text(text);
        $(".schetochnyiyUplotnitel-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".schetochnyiyUplotnitel-skladnie img").attr('src', img);
            top.frames[1].$(".schetochnyiyUplotnitel-skladnie .text").text(text);
            top.frames[1].$(".schetochnyiyUplotnitel-skladnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".schetochnyiyUplotnitel-skladnie img").attr('src', img);
            top.frames[2].$(".schetochnyiyUplotnitel-skladnie .text").text(text);
            top.frames[2].$(".schetochnyiyUplotnitel-skladnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectruchkaskladnieEnd: function (img, text, price) {
        $(".rakovina-skladnie img").attr('src', img);
        $(".rakovina-skladnie .text").text(text);
        $(".rakovina-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".rakovina-skladnie img").attr('src', img);
            top.frames[1].$(".rakovina-skladnie .text").text(text);
            top.frames[1].$(".rakovina-skladnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".rakovina-skladnie img").attr('src', img);
            top.frames[2].$(".rakovina-skladnie .text").text(text);
            top.frames[2].$(".rakovina-skladnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectkreplenieruchliskladnieEnd: function (img, text, price) {
        $(".kreplenieRuchki-skladnie img").attr('src', img);
        $(".kreplenieRuchki-skladnie .text").text(text);
        $(".kreplenieRuchki-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".kreplenieRuchki-skladnie img").attr('src', img);
            top.frames[1].$(".kreplenieRuchki-skladnie .text").text(text);
            top.frames[1].$(".kreplenieRuchki-skladnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".kreplenieRuchki-skladnie img").attr('src', img);
            top.frames[2].$(".kreplenieRuchki-skladnie .text").text(text);
            top.frames[2].$(".kreplenieRuchki-skladnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectzamokskladnieEnd: function (img, text, price) {
        $(".zamokSkladnyie-skladnie img").attr('src', img);
        $(".zamokSkladnyie-skladnie .text").text(text);
        $(".zamokSkladnyie-skladnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".zamokSkladnyie-skladnie img").attr('src', img);
            top.frames[1].$(".zamokSkladnyie-skladnie .text").text(text);
            top.frames[1].$(".zamokSkladnyie-skladnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".zamokSkladnyie-skladnie img").attr('src', img);
            top.frames[2].$(".zamokSkladnyie-skladnie .text").text(text);
            top.frames[2].$(".zamokSkladnyie-skladnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectnozhkimobilnieEnd: function (img, text, price) {
        $(".nozhki-mobil img").attr('src', img);
        $(".nozhki-mobil .text").text(text);
        $(".nozhki-mobil .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".nozhki-mobil img").attr('src', img);
            top.frames[1].$(".nozhki-mobil .text").text(text);
            top.frames[1].$(".nozhki-mobil .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".nozhki-mobil img").attr('src', img);
            top.frames[2].$(".nozhki-mobil .text").text(text);
            top.frames[2].$(".nozhki-mobil .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectkolesikimobilnieEnd: function (img, text, price) {
        $(".kolesiki-mobilnie img").attr('src', img);
        $(".kolesiki-mobilnie .text").text(text);
        $(".kolesiki-mobilnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".kolesiki-mobilnie img").attr('src', img);
            top.frames[1].$(".kolesiki-mobilnie .text").text(text);
            top.frames[1].$(".kolesiki-mobilnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".kolesiki-mobilnie img").attr('src', img);
            top.frames[2].$(".kolesiki-mobilnie .text").text(text);
            top.frames[2].$(".kolesiki-mobilnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();

        }
    },

    SelectstoykimobilnieEnd: function (img, text, price) {
        $(".stoyki-mobil img").attr('src', img);
        $(".stoyki-mobil .text").text(text);
        $(".stoyki-mobil .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".stoyki-mobil img").attr('src', img);
            top.frames[1].$(".stoyki-mobil .text").text(text);
            top.frames[1].$(".stoyki-mobil .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".stoyki-mobil img").attr('src', img);
            top.frames[2].$(".stoyki-mobil .text").text(text);
            top.frames[2].$(".stoyki-mobil .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelecttipSoedineniyaPolotenmobilnieEnd: function (img, text, price) {
        $(".tipSoedineniyaPoloten-mobil img").attr('src', img);
        $(".tipSoedineniyaPoloten-mobil .text").text(text);
        $(".tipSoedineniyaPoloten-mobil .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".tipSoedineniyaPoloten-mobil img").attr('src', img);
            top.frames[1].$(".tipSoedineniyaPoloten-mobil .text").text(text);
            top.frames[1].$(".tipSoedineniyaPoloten-mobil .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".tipSoedineniyaPoloten-mobil img").attr('src', img);
            top.frames[2].$(".tipSoedineniyaPoloten-mobil .text").text(text);
            top.frames[2].$(".tipSoedineniyaPoloten-mobil .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectpetliRaspashnieEnd: function (img, text, price) {
        $(".petli-raspashnie img").attr('src', img);
        $(".petli-raspashnie .text").text(text);
        $(".petli-raspashnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".petli-raspashnie img").attr('src', img);
            top.frames[1].$(".petli-raspashnie .text").text(text);
            top.frames[1].$(".petli-raspashnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".petli-raspashnie img").attr('src', img);
            top.frames[2].$(".petli-raspashnie .text").text(text);
            top.frames[2].$(".petli-raspashnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectruchkaRaspashnieEnd: function (img, text, price) {
        $(".ruchka-raspashnie img").attr('src', img);
        $(".ruchka-raspashnie .text").text(text);
        $(".ruchka-raspashnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".ruchka-raspashnie img").attr('src', img);
            top.frames[1].$(".ruchka-raspashnie .text").text(text);
            top.frames[1].$(".ruchka-raspashnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".ruchka-raspashnie img").attr('src', img);
            top.frames[2].$(".ruchka-raspashnie .text").text(text);
            top.frames[2].$(".ruchka-raspashnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },

    SelectzamokRaspashnieEnd: function (img, text, price) {
        $(".zamok-raspashnie img").attr('src', img);
        $(".zamok-raspashnie .text").text(text);
        $(".zamok-raspashnie .price").text(price);
        nfurnitura.getDataFurnitura();
        nfurnitura.viewTotalFurnitura();
        if (top._FLAG) {
            top.frames[1].$(".zamok-raspashnie img").attr('src', img);
            top.frames[1].$(".zamok-raspashnie .text").text(text);
            top.frames[1].$(".zamok-raspashnie .price").text(price);
            top.frames[1].nfurnitura.getDataFurnitura();
            top.frames[1].nfurnitura.viewTotalFurnitura();
            top.frames[2].$(".zamok-raspashnie img").attr('src', img);
            top.frames[2].$(".zamok-raspashnie .text").text(text);
            top.frames[2].$(".zamok-raspashnie .price").text(price);
            top.frames[2].nfurnitura.getDataFurnitura();
            top.frames[2].nfurnitura.viewTotalFurnitura();
        }
    },
    SelectFunEnd: function (img, text, price) {
        var item = top.storage.ItemFurn.filter(function (index, value) {
            return index.other.Название == text;
        });
        var type = top.storage.Furn.filter(function (value) {
            return value.id == item[0].parent_id;
        });
        var s = $('.newfurn').find('h3');
        s.each(function () {
            if ($(this).text() == type[0].name) {

                var is = $(this).parent();
                is.find('img').attr('src', img);
                is.find('.text').text(text);
                is.find('.price').text(fornituraPrice(price, type[0].formula));
            }
        });
        if (top._FLAG) {
            var s = top.frames[1].$('.newfurn').find('h3');
            s.each(function () {
                if ($(this).text() == type[0].name) {

                    var is = $(this).parent();
                    is.find('img').attr('src', img);
                    is.find('.text').text(text);
                    is.find('.price').text(fornituraPrice(price, type[0].formula));
                }
            });
            var s = top.frames[2].$('.newfurn').find('h3');
            s.each(function () {
                if ($(this).text() == type[0].name) {

                    var is = $(this).parent();
                    is.find('img').attr('src', img);
                    is.find('.text').text(text);
                    is.find('.price').text(fornituraPrice(price, type[0].formula));
                }
            });
        }
    },

    aksessuaryiBlockSwith: function () {
        if ($(".aksessuaryi-block-swith input").prop("checked")) {
            top.frames[0].$(".aksessuaryi-block-hs").show();
            top.frames[1].$(".aksessuaryi-block-hs").show();
            top.frames[2].$(".aksessuaryi-block-hs").show();
        }
        else {
            top.frames[0].$(".aksessuaryi-block-hs").hide();
            top.frames[1].$(".aksessuaryi-block-hs").hide();
            top.frames[2].$(".aksessuaryi-block-hs").hide();
        }
        nfurnitura.viewTotalFurnitura();
        heightIframe();

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
    },

    getDataFurnitura: function () {
    },

    viewTotalFurnitura: function () {
        let p = 0;
        $('#furnitura-tab .furnituraElFlag').each(function () {
            if ($(this).val() === '1')
                p += ParserIntAndNan($(this).parent().find('.price').text());
        });
        $('.newfurn').each(function () {
            p += ParserIntAndNan($(this).find('.price').text());
        });
        $(".furnitura-price .price").text(Math.round(p));
    },

    furnituraElToggle: function (id, vl) {
        if (vl === '0') {
            $('#' + id + ' :not(.furnituraElFlag) *').attr('disabled', 'disabled');
            $('#' + id + ' .addonImg').css('pointer-events', 'none');
            $('#' + id + ' *').css('opacity', '0.25');
            $('#' + id + ' .furnituraElFlag').css('opacity', '1');
        } else {
            $('#' + id + ' *').removeAttr('disabled');
            $('#' + id + ' .addonImg').css('pointer-events', '');
            $('#' + id + ' *').css('opacity', '1');

        }
        nfurnitura.viewTotalFurnitura();
    },
    pushFurnitura: function (link, text, id, flag, flag1) {
        var html;
        if (flag1 == -1) {
            html = '<div class="col-xs-15 col-sm-15 col-md-15 col-lg-15 text-center newfurn"><select class="form-control input-sm furnituraElFlag"><option value="1">Есть</option> <option value="0" selected>Нет</option></select> <h3>' + text + '</h3><img src="img/material/undefined.png" class="addonImg imgfurn" onclick="nfurnitura.modalfurn(' + id + ')"><h4 class="text">Не выбрано</h4><h4>Цена:<span class="price red">0</span></h4></div>';
        } else {
            html = '<div class="col-xs-15 col-sm-15 col-md-15 col-lg-15 text-center newfurn"><select class="form-control input-sm furnituraElFlag"><option value="1">Есть</option> <option value="0" selected>Нет</option></select> <h3>' + text + '</h3><img src="img/material/undefined.png" class="addonImg imgfurn" onclick="nfurnitura.modalfurn(' + id + ')"><h4 class="text">Не выбрано</h4><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><center><div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">' + '<h5 style="text-align: right;">Кол-во</h5></div> <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"> <input id="count" maxlength="2" type="text" value="1"class="form-control furnitura-count"> </div> </center> </div><h4>Цена:<span class="price red">0</span></h4></div>';
        }
        if (flag) {
            $('.' + link + ' #flagfurn').css('display', 'block');
            $('.' + link + ' .aksessuaryi-block-hs').prepend(html);
        } else {
            $('.' + link).prepend(html);
        }
    },
    filtertype: function () {
        $('.newfurn').remove();
        var type = parseInt($('#TYPE_BAFFLE_ID').val());
        var obj = top.storage.Furn;
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
        var html = $('.obshee-modal').html();
        var type = top.storage.Furn.filter(function (value) {
            return value.id == id;
        });
        var obj = top.storage.ItemFurn.filter(function (value) {
            return value.parent_id == id;
        });
        obj.forEach(function (v) {
            var markerfilt = true;
            if ('Ограничение_по_высоте_полотна_(min/max_:_100/140)_мм_' in v.other) {
                var s = v.other['Ограничение_по_высоте_полотна_(min/max_:_100/140)_мм_'].split('/');
                markerfilt = ParserIntAndNan(s[0]) <= ParserIntAndNan($('#HIGHT_SETS_ID').val()) && ParserIntAndNan(s[1]) >= ParserIntAndNan($('#HIGHT_SETS_ID').val());
            }
            if (markerfilt) {
                if ('Ограничение_по_ширине_полотна_(min/max_:_100/140)_мм_' in v.other) {
                    var s = v.other['Ограничение_по_ширине_полотна_(min/max_:_100/140)_мм_'].split('/');
                    markerfilt = ParserIntAndNan(s[0]) <= ParserIntAndNan($('#WIDTH_SETS_ID').val()) && ParserIntAndNan(s[1]) >= ParserIntAndNan($('#WIDTH_SETS_ID').val());
                }
            }
            if (markerfilt) {
                var templateData = {
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
            parent.message("Элементы отсутствуют или не подходят по параметрам высоты или ширены");
        } else {
            $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
        }
    },
    setitem: function (id) {
        var type = top.storage.Furn.filter(function (value) {
            return value.id == id;
        });
        var item = top.storage.ItemFurn.filter(function (value) {
            return value.parent_id == id;
        });
        for (var i = 0; i < item.length; i++) {
            var markerfilt = true;
            if ('Ограничение_по_высоте_полотна_(min/max_:_100/140)_мм_' in item[i]['other']) {
                var s = item[i]['other']['Ограничение_по_высоте_полотна_(min/max_:_100/140)_мм_'].split('/');
                markerfilt = ParserIntAndNan(s[0]) <= ParserIntAndNan($('#HIGHT_SETS_ID').val()) && ParserIntAndNan(s[1]) >= ParserIntAndNan($('#HIGHT_SETS_ID').val());
            }
            if (markerfilt) {
                if ('Ограничение_по_ширине_полотна_(min/max_:_100/140)_мм_' in item[i]['other']) {
                    var s = item[i]['other']['Ограничение_по_ширине_полотна_(min/max_:_100/140)_мм_'].split('/');

                    markerfilt = ParserIntAndNan(s[0]) <= ParserIntAndNan($('#WIDTH_SETS_ID').val()) && ParserIntAndNan(s[1]) >= ParserIntAndNan($('#WIDTH_SETS_ID').val());

                }
            }
            if (markerfilt && item[i]) {
                var s = $('.newfurn').find('h3');
                s.each(function () {
                    if ($(this).text() == type[0].name) {
                        var is = $(this).parent();
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
                var s = $('.newfurn').find('h3');
                s.each(function () {
                    if ($(this).text() == type[0].name) {
                        $(this).parent().find('.furnituraElFlag').prop('disabled', true);
                    }
                });
            }
        }
    },
    fullprice: function () {
        var s = $('.newfurn');
        var sum = 0;
        s.each(function (value) {
            var p = $(this).find('.price');
            var fi = $(this).find('.furnituraElFlag').val();
            if (fi == 0) {
                $(this).css('opacity', '0.25');
                p.text(0);
            } else if (fi == 1) {
                var count = $(this).find('input');
                var c = count
                    ? ParserIntAndNan(count.val())
                    : 1;

                $(this).css('opacity', '1');
                var v = $(this).find('.text').text();

                var typestr = $(this).find('h3').text();
                var type = top.storage.Furn.filter(function (value) {
                    return value.name == typestr;
                });
                top.storage.ItemFurn.forEach(function (item) {
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
    },
    init: function () {
    }
};

$(document).ready(function () {
    nfurnitura.start();
    $('.furnituraElFlag').val(0).change();

});
/**
 * Функция посчета цены для Фурнитуры
 * Дата 26.12.2016 16:22
 * @author Goncharenko Andiy
 * @param price Цена
 * @param index
 * @returns price
 * @see {@link https://drive.google.com/file/d/0B07aYSnGHQe9UXpLREFuMTJXZ2s/view}
 */
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
    for (let i = 0; i < top.storage.Fo.length; i++) {
        if (Object.is(top.storage.Fo[i].name, index)) {
            let price = eval(top.storage.Fo[i].formula);
            if (isNaN(price)) {
                price = 0;
            }
            return Math.round(price);
        }
    }
    return 'НЕТ ФОРМУЛ!';

}
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
