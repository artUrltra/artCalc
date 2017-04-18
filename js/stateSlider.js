var state = {


        lastSate: 1,
        allProfils: 0,
        allProfilsSortArray: 0,
        maxPriceId: 0,


        start: function () {
            state.events();
        },


        events: function () {
            //parentM.s1.$('#HIGHT_SETS_ID').on("change", function() {
            $('#state1').contents().find('#HIGHT_SETS_ID').on("change", function () {
                //storage.fillPH(parentM.s1.$('#HIGHT_SETS_ID').val());
                //state.init('1', 'true');
            });
            $("iframe#state1").on("load", function () {
                document.getElementById("state1").contentWindow.document.body.onclick = function () {
                    state.stateHeight(state.lastSate);
                };
            });
            $("iframe#state2").on("load", function () {
                document.getElementById("state2").contentWindow.document.body.onclick = function () {
                    state.stateHeight(state.lastSate);
                };
            });
            $("iframe#state3").on("load", function () {
                document.getElementById("state3").contentWindow.document.body.onclick = function () {
                    state.stateHeight(state.lastSate);
                };
            });
        },


        stateOneHeight: function () {
            state.stateHeight('1');
        },


        stateHeightNow: function (e) {
            var stateName = '#state' + e;
            var thisStateHeight = $("#allStates " + stateName).contents().find("body").height();
            $('#allStates > ' + stateName).height(thisStateHeight + 120);
            state.stateSetPrice();
        },


        stateHeight: function (e) {
            state.stateHeightNow(e);
            var i = 0,
                diff = 0,
                d = new Date();
            var timer = setTimeout(function () {
                diff += new Date() - d;
                timer = setTimeout(arguments.callee, 0);
                if (i++ == 300) {
                    clearTimeout(timer);
                    state.stateHeightNow(e);
                }
                d = new Date();
            }, 0);
        },


        stateSetPrice: function () {
            if (top.frames[0].document.readyState === "complete") {
                $('*[data-slider-id="1"]').find('.price span').text(Math.round(frames[0].$('.summaSParametrami .price').text()));
            }
            if (top.frames[1].document.readyState === "complete") {
                $('*[data-slider-id="2"]').find('.price span').text(Math.round(frames[1].$('.summaSParametrami .price').text()));
            }
            if (top.frames[2].document.readyState === "complete") {
                $('*[data-slider-id="3"]').find('.price span').text(Math.round(frames[2].$('.summaSParametrami .price').text()));
            }
        },


        middlePrice: function () {

            var obj = storage.pH;
            var max = obj.length > 0 ? obj.length : 0;
            var center = max / 2;

            $("#slider1").slider('value', center);
            $("#slider2").slider('value', center);
            $("#slider3").slider('value', center);

            $('#slider1').find(".bg").height(58 + '%');
            $('#slider2').find(".bg").height(58 + '%');
            $('#slider3').find(".bg").height(58 + '%');

            top.frames[0].changeAddition();
            top.frames[0].nfurnitura.setStartValues();
            top.frames[1].changeAddition();
            top.frames[1].nfurnitura.setStartValues();
            top.frames[2].changeAddition();
            top.frames[2].nfurnitura.setStartValues();
            frames[0].profiles.setProfile(parseInt(storage.pS));
            frames[0].profiles.setProfile(parseInt(storage.pS));
            state.stateSetPrice();
        },


        setTopBlock: function () {
            var h = parentM.s1.$('#HIGHT_SETS_ID').val();
            var w = parentM.s1.$('#WIDTH_SETS_ID').val();
            var t = parentM.s1.$('#TOTAL_PAINTING_ID').val();
            var m = parentM.s1.$('#MOVABLE_PAINTING_ID').val();

            parentM.s2.$('#HIGHT_SETS_ID').val(h);
            parentM.s2.$('#WIDTH_SETS_ID').val(w);
            parentM.s2.$('#TOTAL_PAINTING_ID').val(t);
            parentM.s2.$('#MOVABLE_PAINTING_ID').val(m);

            parentM.s3.$('#HIGHT_SETS_ID').val(h);
            parentM.s3.$('#WIDTH_SETS_ID').val(w);
            parentM.s3.$('#TOTAL_PAINTING_ID').val(t);
            parentM.s3.$('#MOVABLE_PAINTING_ID').val(m);

            parentM.send('changeTopBlock', 2);
            parentM.send('changeTopBlock', 3);

            parentM.s1.diagrama.rules();
            parentM.s1.diagrama.painting();
            parentM.s2.diagrama.rules();
            parentM.s2.diagrama.painting();
            parentM.s3.diagrama.rules();
            parentM.s3.diagrama.painting();

            setTimeout(function () {
                state.middlePrice();
            }, 5000);
        }
        ,


        setSlider: function (id) {
            var mid, i;
            for (i = 0; i < storage.pH.length; i++) if (storage.pH[i].id == id) mid = i;
            $("#slider" + state.lastSate).slider('value', mid);
            $("#slider" + state.lastSate).find(".bg").height(mid * 100 / (storage.pH.length - 1) + '%');
        }
        ,

// checkManager
        checkManager: function () {
            state.initCalcManagers();
            let name = state.checkManagerGetCookie("name");
            let password = state.checkManagerGetCookie("password");

            if (state.checkManagerGetCookie("name") !== undefined) {
                var item = storage.managers.find(function (v) {
                    return v.name.indexOf(name) >= 0;
                });
                if (item) {
                    $("#manegerPass").val(password);
                    state.checkManagerShow();
                    $('#calcmanager').val(item.id);
                }
            } else {
                state.checkManagerHide();
            }
        }
        ,
        checkManagerHide: function () {
            $(".managerBtn").hide(100);
            $("#manegerPass, #checkManagerPass ,#labelmanegerPass").show(100);
        }
        ,
        checkManagerShow: function () {
            $(".managerBtn").show(100);
            $("#manegerPass, #checkManagerPass, #labelmanegerPass").hide(100);
            $("#manegerPass").val("");
        }
        ,
        checkManagerPass: function () {
            let manegerName = $("#calcmanager option:selected").text();
            let manegerPass = $("#manegerPass").val();
            let truePass = "";
            let manegerAll = $.ajax({type: "GET", url: './admin/ajax.php?selectCalcManagers', async: false}).responseText;
            manegerAll = JSON.parse(manegerAll);
            for (let i = 0; i < manegerAll.length; i++) {
                if (manegerAll[i].name == manegerName) {
                    truePass = manegerAll[i].pass;
                }
            }
            if (truePass !== manegerPass) {
                alert("Пароль не верный!");
            }
            else {
                state.checkManagerSetCookie("name", manegerName);
                state.checkManagerSetCookie("password", truePass);
                state.checkManagerShow();
            }
            ;
        }
        ,
        checkManagerGetCookie: function (name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
        ,
        checkManagerSetCookie: function (name, cookie) {
            document.cookie = name + "=" + cookie;
        }
        ,
// checkManager//
        init: function (e, b) {
            if (b === undefined) b = 'false';
            state.start();

            $('#allStates > *').fadeOut(0);
            $('#allStates > #state' + e).fadeIn(0);

            $('.slider-container').click(function () {
                $('.slider-container').removeClass('slider-container-active');
                $(this).addClass('slider-container-active');
                state.lastSate = $(this).attr('data-slider-id');
                changeState(state.lastSate);
                States.Flag = false;
            });

            function changeState(e) {
                var stateName = '#state' + e;
                $('#allStates > *').fadeOut(0);
                $('#allStates > ' + stateName).fadeIn(0);
                $(stateName).get(0).contentWindow.myEfficientFn();
                var thisStateHeight = $("#allStates " + stateName).contents().find("body").height();
                $('#allStates > ' + stateName).height(thisStateHeight + 120);
                state.stateSetPrice();
            }

            var obj = storage.pH;
            var max = obj.length > 0 ? obj.length - 1 : 0;
            state.maxPriceId = max;
            $("#slider1, #slider2, #slider3").slider({
                orientation: "vertical",
                min: 0,
                max: max,
                step: 1,
                stop: function (event, ui) {
                    console.log(state.lastSate);
                    $("#val").html(ui.value);
                    for (var i = 0; i < obj.length; i++) {
                        if ($('#val').html() == i && b == 'false') {
                            parentM.send('setProfil,' + obj[i].id, state.lastSate);
                            States.Slider(obj[i].id, state.lastSate);
                            state.stateHeight(state.lastSate);
                            state.stateSetPrice();
                            break;
                        }
                    }
                    b = 'false';
                    if (_FLAG) {
                        $('#slider2 ,#slider3').slider('value', ui.value);
                        $('#slider3').find(".bg").height(100 / max * ui.value + '%');
                        $('#slider2').find(".bg").height(100 / max * ui.value + '%');
                    }
                },
                slide: function (event, ui) {
                    $(this).find(".bg").height(100 / max * ui.value + '%');
                    state.stateSetPrice();
                },
            });

            $("#update").click(function () {
                $("#slider1, #slider2, #slider3").slider("option", "value", $("#seekTo").val());
            });
        }
        ,


        initCalcManagers: function () {
            $("#calcmanager").empty();
            storage.managers.forEach(function (v) {
                $("#calcmanager").prepend($('<option value="' + v.id + '">' + v.name + '</option>'));
            });


        }
        ,


    }
;

var scheduler = {


    s1: 0,
    s2: 0,
    s3: 0,


    init: function () {
        setInterval(function () {
            if (scheduler.s1 > 0) {
                parentM.send('myEfficientFn', 1);
                console.log('activity on st1');
                scheduler.s1 = scheduler.s1 - 1;
                if (scheduler.s1 > 3) scheduler.s1 = 3;
            } else if (scheduler.s2 > 0) {
                parentM.send('myEfficientFn', 2);
                console.log('activity on st2');
                scheduler.s2 = scheduler.s2 - 1;
                if (scheduler.s2 > 3) scheduler.s2 = 3;
            } else if (scheduler.s3 > 0) {
                parentM.send('myEfficientFn', 3);
                console.log('activity on st3');
                scheduler.s3 = scheduler.s3 - 1;
                if (scheduler.s3 > 3) scheduler.s3 = 3;
            }
        }, 3000);
    },


    incCounter: function () {
        scheduler['s' + state.lastSate] = scheduler['s' + state.lastSate] + 1;
    },


};

var parentM = {


    s1: document.getElementById("state1").contentWindow,
    s2: document.getElementById("state2").contentWindow,
    s3: document.getElementById("state3").contentWindow,


    send: function (m, s) {
        parentM["s" + s].postMessage(m, "*");
    },


    get: function (m) {
        var a = m.split(",");
        switch (a[0]) {
            case 'sayHello':
                console.log('Hello, ' + a[1] + '!');
                break;
            case 'incCounter':
                scheduler.incCounter();
                break;
            case 'middlePrice':
                storage.fillPH(parentM.s1.$('#HIGHT_SETS_ID').val());
                state.init('1', 'true');
                state.middlePrice();
                break;
        }
    },


};

var storage = {
    p: [],
    pH: [],
    pS: '',
    f: [],
    fC: [],
    m: [],
    mC: [],
    mS: '',
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
    init: function () {
        storage.fillP();
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
        storage.fillimages();
        storage.fillmanagers();
        storage.fillcatalogs();
        storage.filltemp();
    },
    filltemp: function () {
        $.post('./admin/ajax.php?getteml=1', function (data) {
            storage.temp = JSON.parse(data);
            var temps = storage.temp.filter(function (v) {
                return v.user === state.checkManagerGetCookie("name")
            });
            $("#temp").empty();
            temps.forEach(function (v) {
                $("#temp").prepend($('<option value="' + v.id + '">' + v.name + '</option>'));
            });
            if (temps[0].text) {
                var srt = temps[0].text;
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
        });
    },
    fillPH: function (height) {
        storage.pH = [];
        for (var i = 0; i < storage.p.length; i++)
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
        for (var i = 0; i < storage.f.length; i++)
            if (storage.f[i].cat == cat) storage.fC.push(storage.f[i]);
    },
    fillFN: function (cat, name) {
        var i, result = {};
        for (i = 0; i < storage.f.length; i++)
            if (storage.f[i].cat == cat && storage.f[i].name == name) result = storage.f[i];
        return result;
    },
    fillFo: function () {
        $.post("./admin/ajax.php", {getFormuls: 1}, function (data) {
            storage.Fo = JSON.parse(data);
        });
    },
    fillM: function () {
        $.post("./admin/ajax.php?getAllMaterials", "", function (data) {
            storage.m = JSON.parse(data);
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
        var i, result = [];
        for (i = 0; i < storage.m.length; i++) if (storage.m[i].type == type) result.push(storage.m[i]);
        return result;
    },
    fillMI: function (id) {
        var i, result = {};
        for (i = 0; i < storage.m.length; i++) if (storage.m[i].id == id) result = storage.m[i];
        return result;
    },
    fillMS: function () {
        $.post("./admin/starmaterial.php", "get=1", function (data) {
            storage.mS = data;
        });
    },
};

$(document).ready(function () {

    storage.init();
    state.init('1');
    state.initCalcManagers();
    scheduler.init();
    window.addEventListener("message", function (e) {
        parentM.get(e.data);
    }, false);
});