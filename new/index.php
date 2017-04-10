<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Калькулятор</title>
    <link rel="stylesheet" type="text/css" href="css/preloader.css">
</head>

<body>

<!--preloade-->
<div class="preloade-wrapper">
    <div class="preloader loading"><span class="slice"></span><span class="slice"></span><span
                class="slice"></span><span class="slice"></span><span class="slice"></span><span class="slice"></span>
    </div>
</div>
<!--preloade-->

<div id="allStates">
    <iframe src="iframe.html" width="100%" id="state1"></iframe>
    <iframe src="iframe.html" width="100%" id="state2"></iframe>
    <iframe src="iframe.html" width="100%" id="state3"></iframe>
</div>

<div class="loadImgBlock"></div>
<div id="history" style="text-align:center;display:none;">
    <button onclick="historyAjax(&quot;create&quot;,&quot;{}&quot;)">Clear DB</button>
    <button onclick="historyAjaxInsert()">Add variant</button>
    <div id="resultHistory"></div>
</div>

<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h3 class="text-center">Ценовые варианты</h3>
            <br>
            <br>
            <br>
        </div>
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 slider-info-container">
            Seek To : <input id="seekTo" type="text" value="10"/>
            <input id="update" type="button" value="Update"/> Current Value : <span id="val">0</span>
        </div>
        <div class="col-xs-4 col-sm-3 col-md-3 col-lg-3 slider-container" data-slider-id="2">
            <h4>Эконом</h4>
            <br>
            <div id="slider2">
                <div class="bg"></div>
            </div>
            <br>
            <div class="price"><span></span> .руб</div>
        </div>
        <div class="col-xs-4 col-sm-3 col-md-3 col-lg-3 slider-container slider-container-active" data-slider-id="1">
            <h4>Оптимальный</h4>
            <br>
            <div id="slider1">
                <div class="bg"></div>
            </div>
            <br>
            <div class="price"><span></span> .руб</div>
        </div>
        <div class="col-xs-4 col-sm-3 col-md-3 col-lg-3 slider-container" data-slider-id="3">
            <h4>Премиум</h4>
            <br>
            <div id="slider3">
                <div class="bg"></div>
            </div>
            <br>
            <div class="price"><span></span> .руб</div>
        </div>
    </div>
</div>
<br>
<!--Заказ №-->
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">

    <h4 id="orderText">
        Заказ №
    </h4>
    <input type="text" maxlength="8" size="8" id="orderNumber"/>
</div>

<!--Менеджер-->
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
    <h4 id="orderText">Менеджер</h4>
    <select id="calcmanager"></select>
    <br>
    <input type="password" autocomplete="off" id="manegerPass" placeholder="Пароль"/><button onClick="state.checkManagerPass()" id="checkManagerPass">Да</button>
</div>
<!--Кнопки-->
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center managerBtn">
    <button type="button" class="addImg" id="openimgmodal">Добавить картинку</button>
    <button type="button" class="sendGet">Скачать PDF</button>
    <button type="button" onclick="historyInit()" class="saveHistory">История</button>
</div>

<!-- Фрем  -->
<iframe src="http://audoors.ru/commercial_offer/?app_page=commercial_offer" width="100%" height="1800px" scrolling="no"
        id="state4" class="managerBtn" frameborder="0"></iframe>


<!--Модальное Окно-->
<div class="modal" id="gallery">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">Галерея</h4>
            </div>
            <div class="modal-body">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#galleryall" id="allimages" aria-controls="home"
                                                              role="tab" data-toggle="tab">Галерея</a></li>
                    <li role="presentation"><a href="#addimg" aria-controls="profile" role="tab" data-toggle="tab">Загрузить
                            картинку</a></li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="galleryall">
                        <div class="row">
                            <div class="col-md-6"><input type="text" id="searhname" class="form-control"
                                                         placeholder="Поиск по названию картинки"/></div>
                            <div class="col-md-6"><input type="text" id="searhtags" class="form-control"
                                                         placeholder="Поиск по тегу картинки"/></div>

                        </div>
                        <div class="row" id="allImagesSee">
                            <div class="col-md-4">
                                <img src="img/0.png" class="img-thumbnail img-responsive">
                            </div>
                            <div class="col-md-4">
                                <img src="img/0.png" class="img-thumbnail img-responsive">
                            </div>
                            <div class="col-md-4">
                                <img src="img/0.png" class="img-thumbnail img-responsive">
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="addimg">
                        <div class="row">
                            <div class="col-md-6">
                                <img id="loadimg" src="img/0.png" class="img-thumbnail img-responsive"
                                     style="max-height: 400px;">
                                <div style="display: none;">
                                    <input id="fileimg" type="file" multiple="multiple" pattern="a-zA-Z"
                                           accept="image/!*">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="nameimg" class="col-sm-2 control-label">Название:</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="nameimg" class="form-control"
                                                       placeholder="Название картинки"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="oimg" class="col-sm-2 control-label">Описание:</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" rows="3" id="oimg"
                                                      placeholder="Описание"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="tags" class="col-sm-2 control-label">Теги:</label>
                                        <div class="col-sm-10">
                                            <input type="text" id="tags" value="" data-role="tagsinput"
                                                   class="form-control"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <a href="javascript:void(0)" onclick="cancel()"
                                                   class="btn btn-lg btn-block btn-raised btn-default">Отмена</a>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="javascript:void(0)"
                                                   class="btn btn-lg btn-block btn-raised btn-primary"
                                                   onclick="sendimg()">Добавить</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <!--Модальное Окно-->
    <div class="modal" id="imagesend">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title">Изображения</h4>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="admin/jquery-3.1.1.min.js"></script>
    <link rel="stylesheet" type="text/css" href="admin/assets/css/bootstrap.min.css">
    <script type="text/javascript" src="admin/assets/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap-material-design.css">
    <link rel="stylesheet" type="text/css" href="css/ripples.min.css">
    <link rel="stylesheet" type="text/css" href="lib/snackbar.min.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <script type="text/javascript" src="js/material.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="lib/jquery.ui.touch-punch.min.js"></script>
    <script type="text/javascript" src="lib/html2canvas.js"></script>
    <script type="text/javascript" src="lib/jquery.plugin.html2canvas.js"></script>
    <script src="lib/snackbar.min.js"></script>
    <link rel="stylesheet" type="text/css" href="lib/snackbar.min.css">
    <script type="text/javascript" src="js/history.js"></script>
    <link rel="stylesheet" href="css/iframe.css">
    <script src="js/loadImg.js"></script>
    <script src="js/sendGet.js"></script>
    <script src="lib/snackbar.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-tagsinput.css">
    <script type="text/javascript" src="js/loadHistory.js"></script>
    <script type="text/javascript" src="js/stateSlider.js"></script>
    <script type="text/javascript" src="js/States.js"></script>
    <script type="text/javascript" src="js/bootstrap-tagsinput.js"></script>
    <link href="css/jquery.fancybox.min.css" rel="stylesheet">
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/gallery.js"></script>
    <script>
    function ParserIntAndNan(number) {
        if (isNaN(parseInt(number))) {
            return 0;
        } else {
            return parseInt(number);
        }
    }

        window.id_pdf = new Date().getTime();
        $.material.init();

        function message(e) {
            $.snackbar({
                content: e
            });
        }
        var _FLAG = false;
        function GloblPrice_FLAG() {
            if (_FLAG) {
                let profile = top.storage.p.find(function(v){return v.name === frames[0].profiles.profile_name});
                if(profile){
                    frames[1].profiles.setProfile(profile.id);
                    frames[2].profiles.setProfile(profile.id);
                };
                let profile_h = top.storage.PHW.find(function(v){return v.name === frames[0].profiles.profile_horizontal_name});
                if(profile_h){
                    frames[1].profiles.set_horizontal_profile(profile_h.id);
                    frames[2].profiles.set_horizontal_profile(profile_h.id);
                };
                let profile_w = top.storage.PHW.find(function(v){return v.name === frames[0].profiles.profile_vertical_name});
                if(profile_w){
                    frames[1].profiles.set_vertical_profile(profile_w.id);
                    frames[2].profiles.set_vertical_profile(profile_w.id);
                };
                
                let array = [];
                    frames[0].$('#SUPPLEMENTS .col-md-3').each(function () {
                        var flag = $(this).find('.input-sm').val() == 'Есть' ? true : false;
                        if (flag) {
                            array.push({
                                name: $(this).find('h3').text(),
                                img: $(this).find('img').attr('src'),
                                id: ParserIntAndNan($(this).find('#PriceSupplements').attr('data-pricesupplements')),
                                price: ParserIntAndNan($(this).find('#PriceSupplements span').attr('data-price'))
                            });
                        } else {
                            array.push(flag);
                        }
                    });

                array.forEach(function (v, index) {
                    var $additions = frames[1].$('#SUPPLEMENTS .col-md-3:eq(' + index + ')');
                    if (v) {
                        $additions.find('.input-sm').val('Есть');
                        frames[1].addition.SelectSupplements(v.img, v.name, v.price, v.id);

                    } else {
                        $additions.find('.input-sm').val('Нету');
                    }
                });
                array.forEach(function (v, index) {
                    var $additions = frames[2].$('#SUPPLEMENTS .col-md-3:eq(' + index + ')');
                    if (v) {
                        $additions.find('.input-sm').val('Есть');
                        frames[2].addition.SelectSupplements(v.img, v.name, v.price, v.id);

                    } else {
                        $additions.find('.input-sm').val('Нету');
                    }
                });


                frames[1].$('#tab-profil-peremyichki-horizontal-shtuk').val(frames[0].$('#tab-profil-peremyichki-horizontal-shtuk').val());
                frames[1].$('#tab-profil-v-peremyichki-shtuk').val(frames[0].$('#tab-profil-v-peremyichki-shtuk').val());
                frames[1].aaa();

                frames[1].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);
                frames[1].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);
                frames[1].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);

                frames[1].$('#l-11').val(frames[0].$('#l-11').val());
                frames[1].$('#l-21').val(frames[0].$('#l-21').val());
                frames[1].$('#l-41').val(frames[0].$('#l-41').val());
                frames[1].$('#l-51').val(frames[0].$('#l-51').val());
                frames[1].$('#l-32').val(frames[0].$('#l-32').val());
                frames[1].$('#l-51').val(frames[0].$('#l-51').val());
                frames[1].$('.nashZamerTo #l-52').val(frames[0].$('.nashZamerTo #l-52').val());

                frames[1].$(".add-material-block-past").html('');
                frames[1].$(".add-material-block-past").append(frames[0].$('.napolnenie-el').clone());
                var count = frames[0].$('.napolnenie-el .napolnenie-el-tolschina').length;
                for (var i = 0; i < count; i++) {
                    frames[1].$('.napolnenie-el-tolschina:eq(' + i + ')').val(frames[0].$('.napolnenie-el-tolschina:eq(' + i + ')').val());
                }
                frames[1].nmaterials.ResSumm();

                frames[2].$('#tab-profil-peremyichki-horizontal-shtuk').val(frames[0].$('#tab-profil-peremyichki-horizontal-shtuk').val());
                frames[2].$('#tab-profil-v-peremyichki-shtuk').val(frames[0].$('#tab-profil-v-peremyichki-shtuk').val());
                frames[2].aaa();

                frames[2].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);
                frames[2].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);
                frames[2].addDecor(parseInt(frames[0].$('#pokraskaTypeAndName').val()), 0);

                frames[2].$('#l-11').val(frames[0].$('#l-11').val());
                frames[2].$('#l-21').val(frames[0].$('#l-21').val());
                frames[2].$('#l-41').val(frames[0].$('#l-41').val());
                frames[2].$('#l-51').val(frames[0].$('#l-51').val());
                frames[2].$('#l-32').val(frames[0].$('#l-32').val());
                frames[2].$('#l-51').val(frames[0].$('#l-51').val());
                frames[2].$('.nashZamerTo #l-52').val(frames[0].$('.nashZamerTo #l-52').val());
                frames[2].$(".add-material-block-past").html('');
                frames[2].$(".add-material-block-past").append(frames[0].$('.napolnenie-el').clone());
                for (var i = 0; i < count; i++) {
                    frames[2].$('.napolnenie-el-tolschina:eq(' + i + ')').val(frames[0].$('.napolnenie-el-tolschina:eq(' + i + ')').val());
                }
                frames[2].nmaterials.ResSumm();

            }
        }
        $("body").on('mouseover', '.container', GloblPrice_FLAG);
        $('.slider-container').click(function () {
            _FLAG = false;
            $("body").off('mouseover', '.container', GloblPrice_FLAG);

        });

        $('body').on( 'click',function () {
            $(this).css('overflow','auto');
        });
        var flag0 =false;
        var flag1 =false;
        var flag2 =false;
        function caehcheckFlag() {
            if (flag0 && flag1 && flag2) {
                _FLAG = true;
            if(get_cookie('password')){

            $( "#calcmanager" ).val(storage.managers.find(function(v){
                return v.pass === 'root';
            }).id);
            $("#manegerPass").val(get_cookie('password'));
            $('#checkManagerPass').click();
        
        
        }
            }
        }
        top.frames[0].window.onload = function () {
            flag0 = true;
            caehcheckFlag();
            top.frames[0].changeAddition();
            top.frames[0].nfurnitura.setStartValues();
        };
        top.frames[1].window.onload = function () {
            flag1 = true;
            caehcheckFlag();
            top.frames[1].changeAddition();
            top.frames[1].nfurnitura.setStartValues();
        };
        top.frames[2].window.onload = function () {
            flag2 = true;
            caehcheckFlag();
            top.frames[2].changeAddition();
            top.frames[2].nfurnitura.setStartValues();
        }

        $('#calcmanager').change(function () {
            var i = parseInt($(this).val());
            console.log(i);
            var item =storage.managers.filter(function (v) {
                return v.id === i;
            })[0].text;
            
            top.frames[3].CKEDITOR.instances.mail_text.setData(item.replace(/}/g,'\"'));
        });

        top.frames[3].window.onload = function () {
            top.frames[3].CKEDITOR.instances.mail_text.setData(storage.managers[0].text.replace(/}/g,'\"'));
        }
    </script>


</body>

</html>
