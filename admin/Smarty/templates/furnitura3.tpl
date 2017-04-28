<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Фурнитура :: Аксессуары</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">

    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <style>
        .form-group img {
            max-width: 100%;
        }

        .thumbnail {
            max-width: 100%;
            height: 100px;
        }

        .thumbnail > img {
            max-height: 100%;
            min-height: 100%;
        }

        h6 {
            font-size: 10px;
        }

    </style>
    <script src="../admin/assets/js/dropzonejs.js"></script>
    <script src="../admin/assets/js/ie-emulation-modes-warning.js"></script>
    <script src="../admin/jquery-3.1.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

{include file='menu.tpl'}

<div class="container">
    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Фурнитура :: Аксессуары</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="add">Добавить</button>
            </div>
        </div>
        <div id="form">
            <hr>
            <select id="cview" onchange="$('.ctype').hide();$('#ctype'+$('#cview').val()).show();">
                <option value="1">Раздвижная перегородка</option>
                <option value="2">Складная перегородка</option>
            </select>
            <select id="ctype1" class="ctype">
                {foreach from=$cats item=$i}{if $i['cview'] eq 1}
                    <option value="{$i['cid']}">{$i['cname']}</option>{/if}{/foreach}
            </select>
            <select id="ctype2" class="ctype" style="display:none;">
                {foreach from=$cats item=$i}{if $i['cview'] eq 2}
                    <option value="{$i['cid']}">{$i['cname']}</option>{/if}{/foreach}
            </select>
            <br/>
            <div class="row">
                <div class="col-md-3"><input type="text" class="form-control" id="name" placeholder="Название"/></div>
                <div class="col-md-3"><input type="text" class="form-control" id="price" placeholder="Цена"/></div>
                <div class="col-md-6"><select id="formula" class="form-control">
                        <option>Выберите Формулу</option>
                        {foreach $formuls as $item name=formuls}
                            <option>{$item['name']}</option>
                        {/foreach}

                    </select></div>
                <div class="col-md-12"><select id="proizvod" class="form-control">
                        {foreach from=$manufacture item=$i}
                            <option value="">Производитель</option>
                            <option value="{$i['name']}">{$i['name']}</option>{/foreach}
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <button id="batton" class="btn btn-default btn-lg btn-block">Выбрать картинку</button>
                    <center>
                        <img src="../img/material/undefined.png" width="300px" height="300px"
                             id="add_img" {*class="img-responsive" alt="Responsive image"*}>
                    </center>
                </div>
                <div class="col-md-6">
                    <button id="batton1" class="btn btn-default btn-lg btn-block">Выбрать Большая картинку</button>
                    <center>
                        <img src="../img/material/undefined.png" width="300px" height="300px"
                             id="add_img1" {*class="img-responsive" alt="Responsive image"*}>
                    </center>
                </div>
            </div>
            <button id="create-user" class="btn btn-primary btn-lg btn-block">Выбрать профиль</button>
            <center>
                <textarea cols="47" rows="5" id="characteristics" placeholder="Характеристики"></textarea>
                <textarea cols="47" rows="5" id="description" placeholder="Описание"></textarea>
                <textarea cols="47" rows="5" id="benefits" placeholder="Преимущества"></textarea>
            </center>
            <br>
            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-success btn-lg btn-block" id="submit" onclick="submit()">Добавить</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger btn-lg" id="submit" onclick="reset()">Отменить</button>
                </div>
            </div>
        </div>
        <hr>
        <div class="table-responsive">
            <table class="table table-hover" id="result">
                <thead>
                <th>Перегородка</th>
                <th>Элемент</th>
                <th>Название</th>
                <th>Картинка</th>
                <th>Большая картинка</th>
                <th>Цена</th>
                <th>Формула</th>
                <th>Производитель</th>
                </thead>
                <tbody>
                {foreach $items as $item name=items}
                    <tr id="delete{$item['id']}">
                        <td>{if $item['cview'] eq 1}Раздвижная{elseif $item['cview'] eq 2}Складная{/if}</td>
                        <td>{$item['cname']}</td>
                        <td>{$item['name']}</td>
                        <td><img src="{$item['img']}" class="img-responsive" width="140px" height="140px"></td>
                        <td><img src="{$item['imgBig']}" class="img-responsive" width="140px" height="140px"></td>
                        <td>{$item['price']}</td>
                        <td>{$item['formula']}</td>
                        <td>{$item['manufacturer']}</td>
                        <td>
                            <button type="button" onclick="predit({$item['id']})" class="btn btn-link"
                                    data-toggle="modal" data-target="#myModal"><span
                                        class="glyphicon glyphicon-cog"></span></button>
                        </td>
                        <td>
                            <button type="button" onclick="itemdelete({$item['id']})" class="btn btn-link "><span
                                        class="glyphicon glyphicon-remove"></span></button>
                        </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>

    </div>
</div> <!-- /container -->

<div class="modal fade bs-example-modal-lg" id="ModalGallery" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">Картинка</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {foreach $archive as $item name=items}
                        <div class="col-xs-6 col-md-2">
                            <a class="thumbnail">
                                <img class="m1" src="./uploads/{$item}" alt="...">
                            </a>
                            <div class="caption">
                                <center>
                                    <h6>{$item}</h6>
                                </center>
                            </div>
                        </div>
                    {/foreach}
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bs-example-modal-lg" id="ModalGallery1" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">Большая картинка</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {foreach $archive as $item name=items}
                        <div class="col-xs-6 col-md-2">
                            <a class="thumbnail">
                                <img class="m2" src="./uploads/{$item}" alt="...">
                            </a>
                            <div class="caption">
                                <center>
                                    <h6>{$item}</h6>
                                </center>
                            </div>
                        </div>
                    {/foreach}
                </div>
            </div>
        </div>
    </div>
</div>

<div id="dialog-form" title="Выберите профили">
    <form id="profilform">
        {foreach  $profils as $item name=profils}
            <input type="checkbox" name="profil{$item["id"]}" value="{$item['id']}">
            <label>{$item['name']}</label>
        {/foreach}
    </form>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input type="hidden" id="edit_id" value=""/>
                        <input type="hidden" id="edit_cat" value=""/>
                        <input type="hidden" id="edit_himg" value=""/>
                        <input type="hidden" id="edit_himgBig" value=""/>
                        Название:<br/><input type="text" class="form-control" id="edit_name" value=""/>
                        Цена:<br/><input type="text" class="form-control" id="edit_price" value=""/>
                        Формула:<br/><select id="edit_formula" class="form-control">
                            <option>Выберите Формулу</option>
                            {foreach $formuls as $item name=formuls}
                                <option>{$item['name']}</option>
                            {/foreach}

                        </select>
                        Производитель:
                        <select id="edit_proizvod" class="form-control">
                            {foreach from=$manufacture item=$i}
                                <option value="Не выбран">Не выбран</option>
                                <option value="{$i['name']}">{$i['name']}</option>{/foreach}
                        </select>
                        Характеристики:<br/><textarea cols="86" rows="4" id="edit_characteristics"
                                                      class="form-control"></textarea><br/>
                        Описание:<br/><textarea cols="86" rows="4" id="edit_description"
                                                class="form-control"></textarea><br/>
                        Преимущества:<br/><textarea cols="86" rows="4" id="edit_benefits"
                                                    class="form-control"></textarea><br/>
                        <div>
                </form>
                <div class="row">
                    <div class="col-md-6">
                        <center>
                            <img src="../img/material/undefined.png" width="300px" height="300px"
                                 id="edit_img" {*class="img-responsive" alt="Responsive image"*}>
                        </center>
                    </div>
                    <div class="col-md-6">
                        <center>
                            <img src="../img/material/undefined.png" width="300px" height="300px"
                                 id="edit_img1" {*class="img-responsive" alt="Responsive image"*}>
                        </center>
                    </div>
                </div>
                <div id="test">
                    <div class="row">
                        {foreach $archive as $item name=items}
                            <div class="col-xs-6 col-md-2">
                                <a class="thumbnail">
                                    <img class="t1" src="./uploads/{$item}" alt="...">
                                </a>
                                <div class="caption">
                                    <center>
                                        <h6>{$item}</h6>
                                    </center>
                                </div>
                            </div>
                        {/foreach}
                    </div>
                </div>
                <div id="test1">
                    <div class="row">
                        {foreach $archive as $item name=items}
                            <div class="col-xs-6 col-md-2">
                                <a class="thumbnail">
                                    <img class="t3" src="./uploads/{$item}" alt="...">
                                </a>
                                <div class="caption">
                                    <center>
                                        <h6>{$item}</h6>
                                    </center>
                                </div>
                            </div>
                        {/foreach}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" id="edit_exit" class="btn btn-default" data-dismiss="modal">Отмена</button>
                <button type="button" onclick="edit()" id="edit_submit" class="btn btn-primary">Редактировать</button>
            </div>
        </div>
    </div>
</div>

<!-- Scripts -->
<script>
    $(document).ready(function () {
        $('#form').hide();
        $('#test').hide();
        $('#test1').hide();
        $.post('../admin/formula.php', 'formulaV=1');
    });

    function submit() {
        var index = 0;
        if ($("#formula").val() == 'Выберите Формулу') {
            $("#formula").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#formula").css("border-color", '#ccc');
        }
        switch (index) {
            case 0: {
                $('#add').show();
                $('#form').hide();
                form = $("#profilform").serialize();
                cat = "&cat=" + $('#ctype' + $('#cview').val()).val();
                name = "&name=" + $('#name').val();
                img = "&img=" + $('#add_img').attr('src').substr(2);
                imgBig = "&imgBig=" + $('#add_img1').attr('src').substr(2);
                characteristics = "&characteristics=" + $('#characteristics').val();
                description = "&description=" + $('#description').val();
                benefits = "&benefits=" + $('#benefits').val();
                price = "&price=" + $('#price').val();
                formula = "&formula=" + $('#formula').val();
                proizvod = "&proizvod=" + $('#proizvod').val();
                var data = cat + name + img + imgBig + characteristics + description + benefits + price + formula+proizvod + "&" + form;
                $.post('../admin/ajax.php?add=addfurnitura', data, function (data) {
                    location.reload();
                });
                break;
            }
            case 1: {
                alert('Пожалуйста заполните все поля');
            }
        }
    }
    function edit() {
        /*  himg = (typeof $('.dz-filename').get(0) == 'undefined') ? $('#edit_himg').val() : 'uploads/' + $($('.dz-filename').get(0)).find('#img_name').html();
         himgBig = (typeof $('.dz-filename').get(1) == 'undefined') ? $('#edit_himgBig').val() : 'uploads/' + $($('.dz-filename').get(1)).find('#img_name').html();*/
        id = "&id=" + $('#edit_id').val();
        cat = "&cat=" + $('#edit_cat').val();
        name = "&name=" + $('#edit_name').val();
        img = "&img=" + $('#edit_img').attr('src');
        imgBig = "&imgBig=" + $('#edit_img1').attr('src');
        characteristics = "&characteristics=" + $('#edit_characteristics').val();
        description = "&description=" + $('#edit_description').val();
        benefits = "&benefits=" + $('#edit_benefits').val();
        price = "&price=" + $('#edit_price').val();
        formula = "&formula=" + $('#edit_formula').val();
        proizvod = "&proizvod=" + $('#edit_proizvod').val();
        var data = id + cat + name + img + imgBig + characteristics + description + benefits + price + formula +proizvod;
        $.post('../admin/ajax.php?add=editfurnitura', data, function (data) {
            location.reload();
        });
    }
    function predit(id) {
        $.post("../admin/ajax.php?add=preditfurnitura", "id=" + id, function (data) {
            var obj = JSON.parse(data);
            $('#edit_id').val(obj[0].id);
            $('#edit_cat').val(obj[0].cat);
            $('#edit_name').val(obj[0].name);
            $('#edit_img').attr('src', obj[0].img);
            $('#edit_img1').attr('src', obj[0].imgBig);
            $('#edit_characteristics').html(obj[0].characteristics);
            $('#edit_description').html(obj[0].description);
            $('#edit_benefits').html(obj[0].benefits);
            $('#edit_price').val(obj[0].price);
            $('#edit_formula').val(obj[0].formula);
            $('#edit_proizvod').val(obj[0].manufacturer);
        });
    }
    function itemdelete(id) {
        console.log(id);
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=deletefurnitura",
            data: "id=" + id
        });
        $('#delete' + id).remove();
    }
    $(function () {
        dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 600,
            width: 600,
            modal: true,
            buttons: {
                "Выбрать все": function () {
                    $('#profilform input').each(function (i, elem) {
                        $(elem).attr("checked", "checked");
                    });
                },
                "Сохранить": function () {
                    dialog.dialog("close");
                },
                "Закрыть": function () {
                    dialog.dialog("close");
                }

            }
        });

    });

    $('#edit_img').click(function () {
        $('#test').show();
    });
    $('#edit_img1').click(function () {
        $('#test1').show();
    });
    $('.t1').click(function () {
        $('#edit_img').attr('src', $(this).attr('src'));
        $('#test').hide();
    });
    $('.t3').click(function () {
        $('#edit_img1').attr('src', $(this).attr('src'));
        $('#test1').hide();
    });
    $('#batton').on('click', function () {
        $('#ModalGallery').modal('toggle');
    });
    $('#batton1').on('click', function () {
        $('#ModalGallery1').modal('toggle');
    });
    $('.m1').on('click', function () {
        $('#add_img').attr('src', $(this).attr('src'));
        $('#ModalGallery').modal('hide');
    });
    $('.m2').on('click', function () {
        $('#add_img1').attr('src', $(this).attr('src'));
        $('#ModalGallery1').modal('hide');
    });

    $("#create-user").button().on("click", function () {
        dialog.dialog("open");
    });

    $('#add').click(function () {
        $('#form').show();
        $('#add').hide();
    });
    function reset() {
        location.reload();
    }
</script>

<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
